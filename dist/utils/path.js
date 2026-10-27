"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasDotSegment = exports.resolveWithinDirectory = void 0;
const path_1 = __importDefault(require("path"));
/**
 * Resolves a request path inside the mounted directory.
 * Returns null when the path escapes the directory (path traversal).
 */
const resolveWithinDirectory = (directory, requestPath) => {
    // Decode the URI component to handle encoded characters in the path
    const decodedPath = decodeURIComponent(requestPath);
    // Normalize the path to resolve '..' and '.' segments
    const normalizedPath = path_1.default.normalize(decodedPath);
    const filePath = path_1.default.join(directory, normalizedPath);
    // Security check: Ensure the resolved path is within the designated directory
    // This prevents path traversal attacks (e.g., accessing files outside 'directory')
    return filePath.startsWith(directory) ? filePath : null;
};
exports.resolveWithinDirectory = resolveWithinDirectory;
const hasDotSegment = (relativePath) => {
    return relativePath.split(path_1.default.sep).some(segment => segment.startsWith('.'));
};
exports.hasDotSegment = hasDotSegment;
