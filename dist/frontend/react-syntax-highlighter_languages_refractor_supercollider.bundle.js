"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_supercollider"],{

/***/ "./node_modules/refractor/lang/supercollider.js"
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/supercollider.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ supercollider)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nsupercollider.displayName = 'supercollider'\nsupercollider.aliases = ['sclang']\n\n/** @param {Refractor} Prism */\nfunction supercollider(Prism) {\n  Prism.languages.supercollider = {\n    comment: {\n      pattern:\n        /\\/\\/.*|\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*\\*\\//,\n      greedy: true\n    },\n    string: {\n      pattern: /(^|[^\\\\])\"(?:[^\"\\\\]|\\\\[\\s\\S])*\"/,\n      lookbehind: true,\n      greedy: true\n    },\n    char: {\n      pattern: /\\$(?:[^\\\\\\r\\n]|\\\\.)/,\n      greedy: true\n    },\n    symbol: {\n      pattern: /(^|[^\\\\])'(?:[^'\\\\]|\\\\[\\s\\S])*'|\\\\\\w+/,\n      lookbehind: true,\n      greedy: true\n    },\n    keyword: /\\b(?:_|arg|classvar|const|nil|var|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    label: {\n      pattern: /\\b[a-z_]\\w*(?=\\s*:)/,\n      alias: 'property'\n    },\n    number:\n      /\\b(?:inf|pi|0x[0-9a-fA-F]+|\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?(?:pi)?|\\d+r[0-9a-zA-Z]+(?:\\.[0-9a-zA-Z]+)?|\\d+[sb]{1,4}\\d*)\\b/,\n    'class-name': /\\b[A-Z]\\w*\\b/,\n    operator:\n      /\\.{2,3}|#(?![[{])|&&|[!=]==?|\\+>>|\\+{1,3}|-[->]|=>|>>|\\?\\?|@\\|?@|\\|(?:@|[!=]=)?\\||!\\?|<[!=>]|\\*{1,2}|<{2,3}\\*?|[-!%&/<>?@|=`]/,\n    punctuation: /[{}()[\\].:,;]|#[[{]/\n  }\n  Prism.languages.sclang = Prism.languages.supercollider\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/supercollider.js?\n}");

/***/ }

}]);