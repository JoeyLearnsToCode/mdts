"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveConfig = exports.getConfig = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const os_1 = __importDefault(require("os"));
const defaultConfig = {
    fontFamily: 'Roboto',
    fontFamilyMonospace: 'Roboto Mono',
    fontSize: 16,
    theme: 'default',
    syntaxHighlighterTheme: 'auto',
    enableBreaks: false,
};
const configPath = path_1.default.join(os_1.default.homedir(), '.config', 'mdts', 'config.json');
const getConfig = () => {
    if (!fs_1.default.existsSync(configPath)) {
        return defaultConfig;
    }
    const config = JSON.parse(fs_1.default.readFileSync(configPath, 'utf-8'));
    return Object.assign(Object.assign({}, defaultConfig), config);
};
exports.getConfig = getConfig;
const saveConfig = (newConfig) => {
    const currentConfig = (0, exports.getConfig)();
    const updatedConfig = Object.assign(Object.assign({}, currentConfig), newConfig);
    fs_1.default.mkdirSync(path_1.default.dirname(configPath), { recursive: true });
    fs_1.default.writeFileSync(configPath, JSON.stringify(updatedConfig, null, 2));
};
exports.saveConfig = saveConfig;
