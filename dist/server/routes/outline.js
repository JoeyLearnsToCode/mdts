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
exports.outlineRouter = void 0;
const express_1 = require("express");
const fs = __importStar(require("fs"));
const markdown_it_1 = __importDefault(require("markdown-it"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("../../utils/logger");
const md = new markdown_it_1.default();
const outlineRouter = (directory) => {
    const router = (0, express_1.Router)();
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = req.query.filePath;
        if (!filePath) {
            return res.status(400).send('filePath query parameter is required.');
        }
        try {
            const absolutePath = filePath === 'mdts-welcome-markdown.md'
                ? path_1.default.join(__dirname, '../public/welcome.md')
                : path_1.default.join(directory, filePath);
            const outline = yield getMarkdownOutline(absolutePath);
            res.json(outline);
        }
        catch (error) {
            logger_1.logger.error(`Error getting outline for ${filePath}:`, error);
            res.status(500).send('Error getting outline.');
        }
    }));
    return router;
};
exports.outlineRouter = outlineRouter;
const getMarkdownOutline = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const slugger = yield import('github-slugger')
        .then(module => module.default)
        .then(GithubSlugger => new GithubSlugger());
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const tokens = md.parse(fileContent, {});
    const outline = [];
    for (const token of tokens) {
        if (token.type === 'heading_open') {
            const level = parseInt(token.tag.substring(1));
            const nextToken = tokens[tokens.indexOf(token) + 1];
            if (nextToken && nextToken.type === 'inline') {
                const content = nextToken.content;
                const id = slugger.slug(content);
                outline.push({ level, content, id });
            }
        }
    }
    return outline;
});
