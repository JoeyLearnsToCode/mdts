"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_smalltalk"],{

/***/ "./node_modules/refractor/lang/smalltalk.js"
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/smalltalk.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ smalltalk)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nsmalltalk.displayName = 'smalltalk'\nsmalltalk.aliases = []\n\n/** @param {Refractor} Prism */\nfunction smalltalk(Prism) {\n  Prism.languages.smalltalk = {\n    comment: {\n      pattern: /\"(?:\"\"|[^\"])*\"/,\n      greedy: true\n    },\n    char: {\n      pattern: /\\$./,\n      greedy: true\n    },\n    string: {\n      pattern: /'(?:''|[^'])*'/,\n      greedy: true\n    },\n    symbol: /#[\\da-z]+|#(?:-|([+\\/\\\\*~<>=@%|&?!])\\1?)|#(?=\\()/i,\n    'block-arguments': {\n      pattern: /(\\[\\s*):[^\\[|]*\\|/,\n      lookbehind: true,\n      inside: {\n        variable: /:[\\da-z]+/i,\n        punctuation: /\\|/\n      }\n    },\n    'temporary-variables': {\n      pattern: /\\|[^|]+\\|/,\n      inside: {\n        variable: /[\\da-z]+/i,\n        punctuation: /\\|/\n      }\n    },\n    keyword: /\\b(?:new|nil|self|super)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    number: [\n      /\\d+r-?[\\dA-Z]+(?:\\.[\\dA-Z]+)?(?:e-?\\d+)?/,\n      /\\b\\d+(?:\\.\\d+)?(?:e-?\\d+)?/\n    ],\n    operator: /[<=]=?|:=|~[~=]|\\/\\/?|\\\\\\\\|>[>=]?|[!^+\\-*&|,@]/,\n    punctuation: /[.;:?\\[\\](){}]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/smalltalk.js?\n}");

/***/ }

}]);