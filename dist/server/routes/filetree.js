"use strict";
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
exports.fileTreeRouter = void 0;
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const simple_git_1 = require("simple-git");
const constants_1 = require("../../constants");
const logger_1 = require("../../utils/logger");
const errors_1 = require("../../utils/errors");
const glob_1 = require("../../utils/glob");
const toPosixPath = (p) => p.split(path_1.default.sep).join('/');
const fileTreeRouter = (context) => {
    const { directory } = context;
    const router = (0, express_1.Router)();
    const git = (0, simple_git_1.simpleGit)({ baseDir: directory });
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const isRepo = yield git.checkIsRepo();
        const gitStatus = isRepo ? yield git.status() : null;
        const filePatterns = context.globPatterns
            ? (0, glob_1.resolveGlobPatterns)(directory, context.globPatterns).filePatterns
            : context.filePatterns;
        const fileTree = filePatterns
            ? buildFileTreeFromPatterns(filePatterns, gitStatus)
            : yield getFileTree(directory, '', gitStatus);
        res.json({ fileTree, mountedDirectoryPath: directory, isGitRepository: isRepo });
    }));
    return router;
};
exports.fileTreeRouter = fileTreeRouter;
const isDotFileOrDirectory = (entryName) => {
    return entryName.startsWith('.');
};
const shouldIncludeEntry = (entry) => {
    return !isDotFileOrDirectory(entry.name) && !constants_1.EXCLUDED_DIRECTORIES.includes(entry.name);
};
const buildFileTreeFromPatterns = (filePatterns, gitStatus) => {
    const root = [];
    const dirMap = new Map();
    dirMap.set('', root);
    const getOrCreateDir = (dirPath) => {
        if (dirMap.has(dirPath))
            return dirMap.get(dirPath);
        const parentPath = path_1.default.dirname(dirPath);
        const dirName = path_1.default.basename(dirPath);
        const parentTree = parentPath === '.' ? root : getOrCreateDir(parentPath);
        const existing = parentTree.find((item) => typeof item === 'object' && !('path' in item) && dirName in item);
        if (existing) {
            dirMap.set(dirPath, existing[dirName]);
            return existing[dirName];
        }
        const newTree = [];
        parentTree.push({ [dirName]: newTree });
        dirMap.set(dirPath, newTree);
        return newTree;
    };
    const sorted = [...filePatterns].sort();
    sorted.forEach(filePath => {
        const dirPath = path_1.default.dirname(filePath);
        const targetTree = dirPath === '.' ? root : getOrCreateDir(dirPath);
        const posixPath = toPosixPath(filePath);
        const status = getGitStatus(posixPath, gitStatus);
        targetTree.push({ path: posixPath, status });
    });
    return root;
};
const getGitStatus = (filePath, gitStatus) => {
    if (!gitStatus)
        return ' ';
    const fileStatus = gitStatus.files.find((f) => f.path === filePath);
    if (!fileStatus)
        return ' ';
    return fileStatus.index !== ' ' ? fileStatus.index : fileStatus.working_dir;
};
const getFileTree = (baseDirectory, currentRelativePath, gitStatus) => __awaiter(void 0, void 0, void 0, function* () {
    const fullPath = path_1.default.join(baseDirectory, currentRelativePath);
    let entriesInDir;
    try {
        entriesInDir = fs_1.default.readdirSync(fullPath, { withFileTypes: true });
    }
    catch (error) {
        if ((0, errors_1.isUnreadableDirectoryError)(error)) {
            logger_1.logger.log('Server', `🔒 Skipping inaccessible directory: ${currentRelativePath || fullPath}`);
            return [];
        }
        throw error;
    }
    const entries = entriesInDir.filter(shouldIncludeEntry);
    const tree = [];
    for (const entry of entries) {
        const entryPath = path_1.default.join(currentRelativePath, entry.name);
        if (entry.isDirectory()) {
            const subTree = yield getFileTree(baseDirectory, entryPath, gitStatus);
            if (subTree.length > 0) {
                tree.push({ [entry.name]: subTree });
            }
        }
        else if (entry.name.endsWith('.md') || entry.name.endsWith('.markdown')) {
            const posixPath = toPosixPath(entryPath);
            const status = getGitStatus(posixPath, gitStatus);
            tree.push({ path: posixPath, status });
        }
    }
    return tree;
});
