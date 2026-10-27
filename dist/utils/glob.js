"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveGlobPatterns = void 0;
const glob_1 = require("glob");
const constants_1 = require("../constants");
const resolveGlobPatterns = (directory, patterns) => {
    const resolvedFiles = patterns.flatMap(pattern => (0, glob_1.globSync)(pattern, {
        cwd: directory,
        nodir: true,
        ignore: constants_1.EXCLUDED_DIRECTORIES.map(excluded => `**/${excluded}/**`),
    }));
    const filePatterns = [...new Set(resolvedFiles)];
    return { directory, globPatterns: patterns, filePatterns };
};
exports.resolveGlobPatterns = resolveGlobPatterns;
