"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = exports.serve = void 0;
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("../constants");
const logger_1 = require("../utils/logger");
const path_2 = require("../utils/path");
const file_1 = require("./routes/file");
const filetree_1 = require("./routes/filetree");
const outline_1 = require("./routes/outline");
const config_1 = require("./config");
const watcher_1 = require("./watcher");
const diff_1 = require("./routes/diff");
const plantuml_1 = require("./routes/plantuml");
const MAX_PORT_RETRIES = 10;
// Markdown and existing source files are rendered by the web app, assets are served as-is.
const shouldRenderApp = (filePath, isDirectory, fileExists) => {
    if (isDirectory)
        return true;
    const extension = path_1.default.extname(filePath).toLowerCase();
    if (extension === '')
        return false;
    if (extension === '.md' || extension === '.markdown')
        return true;
    return fileExists && !constants_1.ASSET_FILE_EXTENSIONS.includes(extension);
};
const serve = (context, port, host, autoPort = false) => {
    const app = (0, exports.createApp)(context);
    const tryListen = (currentPort, retries) => {
        return new Promise((resolve, reject) => {
            const server = app.listen(currentPort, host);
            server.once('listening', () => {
                logger_1.logger.log('Server', `📁 Mounted directory: ${context.directory}`);
                if (context.filePatterns) {
                    logger_1.logger.log('Server', `📄 Watching ${context.filePatterns.length} files from glob patterns`);
                }
                if (currentPort !== port) {
                    logger_1.logger.log('Server', `⚠️  Port ${port} was in use, using ${currentPort} instead`);
                }
                logger_1.logger.log('Server', `🚀 Server listening at http://${host}:${currentPort}`);
                (0, watcher_1.setupWatcher)(context, server, currentPort);
                resolve({ server, port: currentPort });
            });
            server.once('error', (err) => {
                if (err.code === 'EADDRINUSE' && autoPort && retries > 0) {
                    logger_1.logger.log('Server', `⚠️  Port ${currentPort} is in use, trying ${currentPort + 1}...`);
                    resolve(tryListen(currentPort + 1, retries - 1));
                }
                else {
                    reject(err);
                }
            });
        });
    };
    return tryListen(port, autoPort ? MAX_PORT_RETRIES : 0);
};
exports.serve = serve;
const createApp = (context, currentLocation = __dirname) => {
    const { directory } = context;
    const app = (0, express_1.default)();
    // JSON middleware - must be before routes that need it
    app.use(express_1.default.json());
    // Mount library static files
    app.use(express_1.default.static(path_1.default.join(currentLocation, './public')));
    app.use(express_1.default.static(path_1.default.join(currentLocation, '../frontend')));
    // Define API
    app.use('/api/filetree', (0, filetree_1.fileTreeRouter)(context));
    app.use('/api/outline', (0, outline_1.outlineRouter)(directory));
    app.use('/api/file', (0, file_1.fileRouter)(directory));
    app.use('/api/diff-prev', (0, diff_1.diffPrevRouter)(context));
    app.use('/api/diff', (0, diff_1.diffRouter)(context));
    app.use('/api/plantuml', (0, plantuml_1.plantumlRouter)());
    app.get('/api/config', (req, res) => {
        res.json((0, config_1.getConfig)());
    });
    app.post('/api/config', (req, res) => {
        try {
            (0, config_1.saveConfig)(req.body);
            res.status(200).send('Config saved');
        }
        catch (error) {
            logger_1.logger.error('Failed to save config:', error);
            res.status(500).send('Failed to save config');
        }
    });
    app.get('/api/markdown/mdts-welcome-markdown.md', (req, res) => {
        res.setHeader('Content-Type', 'text/plain');
        res.sendFile('welcome.md', { root: path_1.default.join(currentLocation, './public') });
    });
    app.use('/api/markdown', (req, res, next) => {
        // Normalize the path to resolve '..' and '.' segments
        const normalizedPath = path_1.default.normalize(decodeURIComponent(req.path));
        // Construct the full file path
        const filePath = (0, path_2.resolveWithinDirectory)(directory, req.path);
        // Security check: Ensure the resolved path is within the designated directory
        // This prevents path traversal attacks (e.g., accessing files outside 'directory')
        if (!filePath) {
            logger_1.logger.error(`🚫 Attempted path traversal: ${path_1.default.join(directory, normalizedPath)}`);
            return res.status(403).send('Forbidden');
        }
        // /api/markdown is only used to fetch markdown. Keep that contract so
        // enabling dotfiles below cannot expose .env, .git/config, and similar.
        if (!/\.(md|markdown)$/i.test(normalizedPath)) {
            return res.status(404).send('File not found');
        }
        if (!fs.existsSync(filePath)) {
            logger_1.logger.error(`🚫 File not found: ${filePath}`);
            return res.status(404).send('File not found');
        }
        next();
    });
    // Default express.static ignores dot-segments, so /.hidden/file.md would
    // fall through to the SPA catch-all and return index.html as "markdown".
    app.use('/api/markdown', express_1.default.static(directory, { dotfiles: 'allow' }));
    // Catch-all route to serve index.html for any other requests
    app.get('*splat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = path_1.default.join(directory, req.path);
        let isDirectory = false;
        let fileExists = false;
        try {
            const stats = fs.statSync(filePath);
            isDirectory = stats.isDirectory();
            fileExists = true;
        }
        catch (_a) {
            // File or directory does not exist, proceed as if it's a file
        }
        if (shouldRenderApp(req.path, isDirectory, fileExists)) {
            return res.sendFile('index.html', { root: path_1.default.join(currentLocation, '../frontend') });
        }
        else {
            return res.sendFile(req.path, { root: directory }, (err) => {
                if (err) {
                    if ('code' in err && err.code === 'ENOENT') {
                        logger_1.logger.error(`🚫 File not found: ${path_1.default.join(directory, req.path)}`);
                        res.status(404).send('File not found');
                    }
                    else {
                        logger_1.logger.error(`🚫 Error serving file ${path_1.default.join(directory, req.path)}:`, err);
                        res.status(500).send('Internal Server Error');
                    }
                }
            });
        }
    }));
    return app;
};
exports.createApp = createApp;
