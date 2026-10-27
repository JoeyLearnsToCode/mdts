"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_goModule"],{

/***/ "./node_modules/refractor/lang/go-module.js"
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/go-module.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ goModule)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ngoModule.displayName = 'go-module'\ngoModule.aliases = ['go-mod']\n\n/** @param {Refractor} Prism */\nfunction goModule(Prism) {\n  // https://go.dev/ref/mod#go-mod-file-module\n\n  Prism.languages['go-mod'] = Prism.languages['go-module'] = {\n    comment: {\n      pattern: /\\/\\/.*/,\n      greedy: true\n    },\n    version: {\n      pattern: /(^|[\\s()[\\],])v\\d+\\.\\d+\\.\\d+(?:[+-][-+.\\w]*)?(?![^\\s()[\\],])/,\n      lookbehind: true,\n      alias: 'number'\n    },\n    'go-version': {\n      pattern: /((?:^|\\s)go\\s+)\\d+(?:\\.\\d+){1,2}/,\n      lookbehind: true,\n      alias: 'number'\n    },\n    keyword: {\n      pattern: /^([ \\t]*)(?:exclude|go|module|replace|require|retract)\\b/m,\n      lookbehind: true\n    },\n    operator: /=>/,\n    punctuation: /[()[\\],]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/go-module.js?\n}");

/***/ }

}]);