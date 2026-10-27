"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_bbcode"],{

/***/ "./node_modules/refractor/lang/bbcode.js"
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/bbcode.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bbcode)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nbbcode.displayName = 'bbcode'\nbbcode.aliases = ['shortcode']\n\n/** @param {Refractor} Prism */\nfunction bbcode(Prism) {\n  Prism.languages.bbcode = {\n    tag: {\n      pattern:\n        /\\[\\/?[^\\s=\\]]+(?:\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\"\\]=]+))?(?:\\s+[^\\s=\\]]+\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\"\\]=]+))*\\s*\\]/,\n      inside: {\n        tag: {\n          pattern: /^\\[\\/?[^\\s=\\]]+/,\n          inside: {\n            punctuation: /^\\[\\/?/\n          }\n        },\n        'attr-value': {\n          pattern: /=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\"\\]=]+)/,\n          inside: {\n            punctuation: [\n              /^=/,\n              {\n                pattern: /^(\\s*)[\"']|[\"']$/,\n                lookbehind: true\n              }\n            ]\n          }\n        },\n        punctuation: /\\]/,\n        'attr-name': /[^\\s=\\]]+/\n      }\n    }\n  }\n  Prism.languages.shortcode = Prism.languages.bbcode\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/bbcode.js?\n}");

/***/ }

}]);