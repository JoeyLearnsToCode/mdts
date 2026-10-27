"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUnreadableDirectoryError = exports.isPermissionError = exports.hasErrnoCode = void 0;
const PERMISSION_ERROR_CODES = ['EACCES', 'EPERM'];
// ENOENT/ENOTDIR cover races where the entry vanishes or isn't a directory anymore.
const UNREADABLE_DIRECTORY_ERROR_CODES = [...PERMISSION_ERROR_CODES, 'ENOENT', 'ENOTDIR'];
const hasErrnoCode = (error, codes) => {
    var _a;
    return typeof error === 'object'
        && error !== null
        && 'code' in error
        && codes.includes((_a = error.code) !== null && _a !== void 0 ? _a : '');
};
exports.hasErrnoCode = hasErrnoCode;
// A permission error on a single path is non-fatal: chokidar keeps watching
// everything else, so we just skip that path instead of tearing down the watcher.
const isPermissionError = (error) => (0, exports.hasErrnoCode)(error, PERMISSION_ERROR_CODES);
exports.isPermissionError = isPermissionError;
// Errors that mean "this directory can't be enumerated" - skip it and keep going
// rather than failing the whole file tree.
const isUnreadableDirectoryError = (error) => (0, exports.hasErrnoCode)(error, UNREADABLE_DIRECTORY_ERROR_CODES);
exports.isUnreadableDirectoryError = isUnreadableDirectoryError;
