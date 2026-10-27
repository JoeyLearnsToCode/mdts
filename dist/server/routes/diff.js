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
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffPrevRouter = exports.diffRouter = void 0;
const express_1 = require("express");
const simple_git_1 = require("simple-git");
const extractFilePath = (params) => {
    const splat = params.splat;
    return Array.isArray(splat) ? splat.join('/') : String(splat);
};
const isRootCommitError = (error) => {
    const message = error instanceof Error ? error.message : String(error);
    return /(unknown revision|bad revision|ambiguous argument)/i.test(message);
};
const diffRouter = (context) => {
    const { directory } = context;
    const router = (0, express_1.Router)();
    const git = (0, simple_git_1.simpleGit)({ baseDir: directory });
    // GET /api/diff/:path - current working tree diff
    router.get('/*splat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = extractFilePath(req.params);
        try {
            const isRepo = yield git.checkIsRepo();
            if (!isRepo) {
                return res.status(404).json({ error: 'Not a git repository' });
            }
            const diff = yield git.diff(['--', filePath]);
            res.setHeader('Content-Type', 'text/plain');
            res.send(diff);
        }
        catch (_a) {
            res.status(500).json({ error: 'Failed to get diff' });
        }
    }));
    return router;
};
exports.diffRouter = diffRouter;
const diffPrevRouter = (context) => {
    const { directory } = context;
    const router = (0, express_1.Router)();
    const git = (0, simple_git_1.simpleGit)({ baseDir: directory });
    // GET /api/diff-prev/:path - diff of the last commit that changed this file
    router.get('/*splat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = extractFilePath(req.params);
        try {
            const isRepo = yield git.checkIsRepo();
            if (!isRepo) {
                return res.status(404).json({ error: 'Not a git repository' });
            }
            const log = yield git.log({ maxCount: 1, file: filePath });
            if (!log.latest) {
                res.setHeader('Content-Type', 'text/plain');
                return res.send('');
            }
            const hash = log.latest.hash;
            let diff;
            try {
                diff = yield git.diff([`${hash}~1`, hash, '--', filePath]);
            }
            catch (error) {
                if (!isRootCommitError(error))
                    throw error;
                // First commit has no parent; diff against empty tree
                const emptyTree = '4b825dc642cb6eb9a060e54bf899d69f7cb46252';
                diff = yield git.diff([emptyTree, hash, '--', filePath]);
            }
            res.setHeader('Content-Type', 'text/plain');
            res.send(diff);
        }
        catch (_a) {
            res.status(500).json({ error: 'Failed to get previous diff' });
        }
    }));
    return router;
};
exports.diffPrevRouter = diffPrevRouter;
