"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupWatcher = void 0;
const chokidar_1 = require("chokidar");
const path_1 = __importDefault(require("path"));
const ws_1 = require("ws");
const logger_1 = require("../utils/logger");
const errors_1 = require("../utils/errors");
const constants_1 = require("../constants");
let contentWatcher = null;
let currentWatchedFile = null;
const setupWatcher = (context, server, port) => {
    const wss = new ws_1.WebSocketServer({ server });
    wss.on('listening', () => {
        logger_1.logger.log('Livereload', `🚀 WebSocket server listening at ws://localhost:${port}`);
    });
    wss.on('connection', (ws) => {
        logger_1.logger.log('Livereload', '🤝 Livereload Client connected');
        ws.on('message', (message) => handleWebSocketMessage(ws, context.directory, message.toString()));
        ws.on('close', () => handleWebSocketClose(wss));
        ws.on('error', (e) => logger_1.logger.error('🚫 Error on WebSocket client:', e));
    });
    if (context.filePatterns) {
        setupFilePatternWatcher(context, wss);
    }
    else {
        setupDirectoryWatcher(context.directory, wss);
    }
};
exports.setupWatcher = setupWatcher;
const handleWebSocketMessage = (ws, directory, message) => {
    try {
        const data = JSON.parse(message);
        if (data.type === 'watch-file' && typeof data.filePath === 'string') {
            setupContentWatcher(ws, directory, data.filePath);
        }
    }
    catch (e) {
        logger_1.logger.error('🚫 Error parsing WebSocket message:', e);
    }
};
const handleWebSocketClose = (wss) => {
    logger_1.logger.log('Livereload', '👋 Livereload Client closed');
    if (wss.clients.size === 0) {
        contentWatcher === null || contentWatcher === void 0 ? void 0 : contentWatcher.close();
        contentWatcher = null;
        currentWatchedFile = null;
    }
};
const attachTreeReloadHandlers = (watcher, wss) => {
    watcher.on('add', (filePath) => {
        logger_1.logger.log('Livereload', `🌲 File added: ${filePath}, reloading tree...`);
        wss.clients.forEach((client) => {
            client.send(JSON.stringify({ type: 'reload-tree' }));
        });
    });
    watcher.on('unlink', (filePath) => {
        logger_1.logger.log('Livereload', `🌲 File removed: ${filePath}, reloading tree...`);
        wss.clients.forEach((client) => {
            client.send(JSON.stringify({ type: 'reload-tree' }));
        });
    });
};
const logSkippedWatchTarget = (error, directory) => {
    const target = describeWatchTarget(error, directory);
    logger_1.logger.log('Livereload', `🔒 Can't watch "${target}" (permission denied); live-reload skipped for it, others still watched.`);
};
const describeWatchTarget = (error, directory) => {
    const errorPath = error === null || error === void 0 ? void 0 : error.path;
    if (typeof errorPath !== 'string')
        return 'a path';
    return errorPath.startsWith(`${directory}/`)
        ? errorPath.slice(directory.length + 1)
        : errorPath;
};
const setupDirectoryWatcher = (directory, wss) => {
    try {
        const watcher = (0, chokidar_1.watch)(directory, {
            ignored: (watchedFilePath, stats) => {
                if (constants_1.EXCLUDED_DIRECTORIES.some(p => watchedFilePath.includes(`/${p}`))) {
                    return true;
                }
                if (stats) {
                    return !stats.isDirectory() && !watchedFilePath.endsWith('.md') && !watchedFilePath.endsWith('.markdown');
                }
                else {
                    // If stats is undefined, it's a directory that hasn't been scanned yet.
                    // We want to traverse directories, so don't ignore.
                    return false;
                }
            },
            ignoreInitial: true,
        });
        attachTreeReloadHandlers(watcher, wss);
        watcher.on('error', (error) => {
            if ((0, errors_1.isPermissionError)(error))
                return logSkippedWatchTarget(error, directory);
            watcher.unwatch(directory);
            watcher.close()
                .then(() => logger_1.logger.log('Livereload', 'Directory watcher closed'));
            logger_1.logger.error('🚫 Error watching directory:', error);
            logger_1.logger.error('Livereload will be disabled');
            if (error && typeof error === 'object' && 'code' in error && error.code === 'EMFILE')
                logger_1.logger.error('This error is likely caused by too many open files. Try increasing the ulimit.');
        });
        return watcher;
    }
    catch (e) {
        logger_1.logger.error('🚫 Error watching directory:', e);
        logger_1.logger.error('Livereload will be disabled');
        return null;
    }
};
const setupFilePatternWatcher = (context, wss) => {
    const { directory, filePatterns } = context;
    if (!filePatterns || filePatterns.length === 0)
        return null;
    try {
        const absolutePaths = filePatterns.map(f => path_1.default.join(directory, f));
        const watcher = (0, chokidar_1.watch)(absolutePaths, { ignoreInitial: true });
        attachTreeReloadHandlers(watcher, wss);
        watcher.on('error', (error) => {
            if ((0, errors_1.isPermissionError)(error))
                return logSkippedWatchTarget(error, directory);
            watcher.close()
                .then(() => logger_1.logger.log('Livereload', 'File pattern watcher closed'));
            logger_1.logger.error('🚫 Error watching files:', error);
            logger_1.logger.error('Livereload will be disabled');
        });
        return watcher;
    }
    catch (e) {
        logger_1.logger.error('🚫 Error watching files:', e);
        logger_1.logger.error('Livereload will be disabled');
        return null;
    }
};
const setupContentWatcher = (ws, directory, filePath) => {
    if (filePath !== currentWatchedFile) {
        logger_1.logger.log('Livereload', `👀 Watching file: ${filePath}`);
        currentWatchedFile = filePath;
        contentWatcher === null || contentWatcher === void 0 ? void 0 : contentWatcher.close(); // Close existing content watcher if any
        contentWatcher = (0, chokidar_1.watch)(path_1.default.join(directory, currentWatchedFile), { ignoreInitial: true });
        contentWatcher.on('change', (changedFilePath) => {
            logger_1.logger.log('Livereload', `🔃 File changed: ${changedFilePath.replace(`${directory}/`, '')}, reloading content...`);
            ws.send(JSON.stringify({ type: 'reload-content' }));
        });
        contentWatcher.on('error', (e) => {
            logger_1.logger.error(`🚫 Error watching content file ${currentWatchedFile}:`, e);
        });
    }
};
