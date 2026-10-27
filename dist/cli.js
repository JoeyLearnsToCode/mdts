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
exports.CLI = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const server_1 = require("./server/server");
const logger_1 = require("./utils/logger");
const glob_1 = require("./utils/glob");
const DEFAULT_PORT = 8521;
const DEFAULT_DIRECTORY = '.';
class CLI {
    run() {
        return this.requireOpen()
            .then((open) => __awaiter(this, void 0, void 0, function* () {
            const { Command } = yield this.requireCommander();
            const program = new Command();
            const packageJsonPath = path_1.default.join(__dirname, '..', 'package.json');
            const packageJson = JSON.parse((0, fs_1.readFileSync)(packageJsonPath, 'utf8'));
            program
                .version(packageJson.version)
                .description('A zero-config CLI tool to preview local Markdown files in a browser')
                .option('-H, --host <host>', 'host to listen on', 'localhost')
                .option('-p, --port <port>', 'port to serve on (use "auto" to find an available port)', String(DEFAULT_PORT))
                .option('-s, --silent', 'suppress server logs', false)
                .option('--no-open', 'do not open the browser automatically')
                .option('-g, --glob <patterns...>', 'glob patterns to filter files (e.g. "docs/*.md", "internal/**/*.go")')
                .argument('[directory]', 'directory to serve', DEFAULT_DIRECTORY)
                .action((directory, options) => __awaiter(this, void 0, void 0, function* () {
                logger_1.logger.setSilent(options.silent);
                logger_1.logger.showLogo();
                logger_1.logger.log('Announcement', '🎉 Thanks for using mdts!');
                logger_1.logger.log('Announcement', '✨ Like it? Star it on GitHub: https://github.com/unhappychoice/mdts');
                logger_1.logger.log('CLI', '⚙  Options: ' + JSON.stringify(options));
                const autoPort = options.port === 'auto';
                const port = autoPort ? DEFAULT_PORT : parseInt(options.port, 10);
                const host = options.host;
                const absoluteDirectory = path_1.default.resolve(process.cwd(), directory);
                const context = options.glob
                    ? (0, glob_1.resolveGlobPatterns)(absoluteDirectory, options.glob)
                    : { directory: absoluteDirectory };
                let actualPort;
                try {
                    ({ port: actualPort } = yield (0, server_1.serve)(context, port, host, autoPort));
                }
                catch (err) {
                    logger_1.logger.error(`❌ Failed to start server: ${err instanceof Error ? err.message : err}`);
                    process.exitCode = 1;
                    return;
                }
                const defaultPages = ['README.md', 'index.md'];
                const defaultPage = defaultPages.find((name) => (0, fs_1.existsSync)(path_1.default.join(context.directory, name)));
                const initialPath = defaultPage ? `/${defaultPage}` : '';
                const displayHost = (host === '0.0.0.0' || host === '::') ? 'localhost' : host;
                if (options.open) {
                    logger_1.logger.log('CLI', `🌐 Opening browser at http://${displayHost}:${actualPort}${initialPath}`);
                    open(`http://${displayHost}:${actualPort}${initialPath}`);
                }
                else {
                    logger_1.logger.log('CLI', `🌐 Server running at http://${displayHost}:${actualPort}${initialPath}`);
                }
            }));
            yield program.parseAsync(process.argv);
        }));
    }
    requireOpen() {
        return import('open').then((module) => module.default);
    }
    requireCommander() {
        return import('commander');
    }
}
exports.CLI = CLI;
