import { Router } from 'express';
import * as fs from 'fs';
import path from 'path';
import { logger } from '../../utils/logger';
import { hasDotSegment, resolveWithinDirectory } from '../../utils/path';

// Files larger than this are not sent to the browser to keep rendering responsive.
const MAX_FILE_BYTES = 2 * 1024 * 1024;

const BOM_PATTERN = new RegExp('^\\uFEFF');

/**
 * Serves the raw content of any file inside the mounted directory,
 * so that non-markdown files (source code, config, ...) can be displayed.
 */
export const fileRouter = (directory: string): Router => {
  const router = Router();

  router.get('*splat', (req, res) => {
    const filePath = resolveWithinDirectory(directory, req.path);
    // Security check: Ensure the resolved path is within the designated directory
    if (!filePath) {
      logger.error(`🚫 Attempted path traversal: ${filePath}`);
      return res.status(403).send('Forbidden');
    }

    // Keep dotfiles out of reach so .env, .git/config and similar stay private.
    if (hasDotSegment(path.relative(directory, filePath))) {
      return res.status(404).send('File not found');
    }

    let stats: fs.Stats;
    try {
      stats = fs.statSync(filePath);
    } catch {
      logger.error(`🚫 File not found: ${filePath}`);
      return res.status(404).send('File not found');
    }

    if (!stats.isFile()) {
      return res.status(404).send('File not found');
    }

    if (stats.size > MAX_FILE_BYTES) {
      return res.status(413).send('File too large');
    }

    const buffer = fs.readFileSync(filePath);
    if (buffer.includes(0)) {
      return res.status(415).send('Binary file is not supported');
    }

    res.type('text/plain; charset=utf-8').send(buffer.toString('utf8').replace(BOM_PATTERN, ''));
  });

  return router;
};
