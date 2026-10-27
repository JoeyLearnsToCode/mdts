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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileRouter = void 0;
const express_1 = require("express");
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("../../utils/logger");
const path_2 = require("../../utils/path");
// Files larger than this are not sent to the browser to keep rendering responsive.
const MAX_FILE_BYTES = 2 * 1024 * 1024;
const BOM_PATTERN = new RegExp('^\\uFEFF');
/**
 * Serves the raw content of any file inside the mounted directory,
 * so that non-markdown files (source code, config, ...) can be displayed.
 */
const fileRouter = (directory) => {
    const router = (0, express_1.Router)();
    router.get('*splat', (req, res) => {
        const filePath = (0, path_2.resolveWithinDirectory)(directory, req.path);
        // Security check: Ensure the resolved path is within the designated directory
        if (!filePath) {
            logger_1.logger.error(`🚫 Attempted path traversal: ${filePath}`);
            return res.status(403).send('Forbidden');
        }
        // Keep dotfiles out of reach so .env, .git/config and similar stay private.
        if ((0, path_2.hasDotSegment)(path_1.default.relative(directory, filePath))) {
            return res.status(404).send('File not found');
        }
        let stats;
        try {
            stats = fs.statSync(filePath);
        }
        catch (_a) {
            logger_1.logger.error(`🚫 File not found: ${filePath}`);
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
exports.fileRouter = fileRouter;
