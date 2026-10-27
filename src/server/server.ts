import express from 'express';
import * as fs from 'fs';
import path from 'path';
import { ASSET_FILE_EXTENSIONS } from '../constants';
import { logger } from '../utils/logger';
import { resolveWithinDirectory } from '../utils/path';
import { ServerContext } from './context';
import { fileRouter } from './routes/file';
import { fileTreeRouter } from './routes/filetree';
import { outlineRouter } from './routes/outline';
import { getConfig, saveConfig } from './config';
import { setupWatcher } from './watcher';
import { diffRouter, diffPrevRouter } from './routes/diff';
import { plantumlRouter } from './routes/plantuml';

const MAX_PORT_RETRIES = 10;

// Markdown and existing source files are rendered by the web app, assets are served as-is.
const shouldRenderApp = (filePath: string, isDirectory: boolean, fileExists: boolean): boolean => {
  if (isDirectory) return true;

  const extension = path.extname(filePath).toLowerCase();
  if (extension === '') return false;
  if (extension === '.md' || extension === '.markdown') return true;

  return fileExists && !ASSET_FILE_EXTENSIONS.includes(extension);
};

export const serve = (
  context: ServerContext,
  port: number,
  host: string,
  autoPort: boolean = false,
): Promise<{ server: import('http').Server; port: number }> => {
  const app = createApp(context);

  type ServeResult = { server: import('http').Server; port: number };
  const tryListen = (currentPort: number, retries: number): Promise<ServeResult> => {
    return new Promise((resolve, reject) => {
      const server = app.listen(currentPort, host);

      server.once('listening', () => {
        logger.log('Server', `📁 Mounted directory: ${context.directory}`);
        if (context.filePatterns) {
          logger.log('Server', `📄 Watching ${context.filePatterns.length} files from glob patterns`);
        }
        if (currentPort !== port) {
          logger.log('Server', `⚠️  Port ${port} was in use, using ${currentPort} instead`);
        }
        logger.log('Server', `🚀 Server listening at http://${host}:${currentPort}`);
        setupWatcher(context, server, currentPort);
        resolve({ server, port: currentPort });
      });

      server.once('error', (err: NodeJS.ErrnoException) => {
        if (err.code === 'EADDRINUSE' && autoPort && retries > 0) {
          logger.log('Server', `⚠️  Port ${currentPort} is in use, trying ${currentPort + 1}...`);
          resolve(tryListen(currentPort + 1, retries - 1));
        } else {
          reject(err);
        }
      });
    });
  };

  return tryListen(port, autoPort ? MAX_PORT_RETRIES : 0);
};

export const createApp = (
  context: ServerContext,
  currentLocation: string = __dirname,
): express.Express => {
  const { directory } = context;
  const app = express();

  // JSON middleware - must be before routes that need it
  app.use(express.json());

  // Mount library static files
  app.use(express.static(path.join(currentLocation, './public')));
  app.use(express.static(path.join(currentLocation, '../frontend')));

  // Define API
  app.use('/api/filetree', fileTreeRouter(context));
  app.use('/api/outline', outlineRouter(directory));
  app.use('/api/file', fileRouter(directory));
  app.use('/api/diff-prev', diffPrevRouter(context));
  app.use('/api/diff', diffRouter(context));
  app.use('/api/plantuml', plantumlRouter());
  app.get('/api/config', (req, res) => {
    res.json(getConfig());
  });
  app.post('/api/config', (req, res) => {
    try {
      saveConfig(req.body);
      res.status(200).send('Config saved');
    } catch (error) {
      logger.error('Failed to save config:', error);
      res.status(500).send('Failed to save config');
    }
  });

  app.get('/api/markdown/mdts-welcome-markdown.md', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile('welcome.md', { root: path.join(currentLocation, './public') });
  });

  app.use('/api/markdown', (req, res, next) => {
    // Normalize the path to resolve '..' and '.' segments
    const normalizedPath = path.normalize(decodeURIComponent(req.path));

    // Construct the full file path
    const filePath = resolveWithinDirectory(directory, req.path);

    // Security check: Ensure the resolved path is within the designated directory
    // This prevents path traversal attacks (e.g., accessing files outside 'directory')
    if (!filePath) {
      logger.error(`🚫 Attempted path traversal: ${path.join(directory, normalizedPath)}`);
      return res.status(403).send('Forbidden');
    }

    // /api/markdown is only used to fetch markdown. Keep that contract so
    // enabling dotfiles below cannot expose .env, .git/config, and similar.
    if (!/\.(md|markdown)$/i.test(normalizedPath)) {
      return res.status(404).send('File not found');
    }

    if (!fs.existsSync(filePath)) {
      logger.error(`🚫 File not found: ${filePath}`);
      return res.status(404).send('File not found');
    }
    next();
  });
  // Default express.static ignores dot-segments, so /.hidden/file.md would
  // fall through to the SPA catch-all and return index.html as "markdown".
  app.use('/api/markdown', express.static(directory, { dotfiles: 'allow' }));

  // Catch-all route to serve index.html for any other requests
  app.get('*splat', async (req, res) => {
    const filePath = path.join(directory, req.path);
    let isDirectory = false;
    let fileExists = false;
    try {
      const stats = fs.statSync(filePath);
      isDirectory = stats.isDirectory();
      fileExists = true;
    } catch {
      // File or directory does not exist, proceed as if it's a file
    }

    if (shouldRenderApp(req.path, isDirectory, fileExists)) {
      return res.sendFile('index.html', { root: path.join(currentLocation, '../frontend') });
    } else {
      return res.sendFile(req.path, { root: directory }, (err) => {
        if (err) {
          if ('code' in err && err.code === 'ENOENT') {
            logger.error(`🚫 File not found: ${path.join(directory, req.path)}`);
            res.status(404).send('File not found');
          } else {
            logger.error(`🚫 Error serving file ${path.join(directory, req.path)}:`, err);
            res.status(500).send('Internal Server Error');
          }
        }
      });
    }
  });

  return app;
};

