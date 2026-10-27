"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_mel"],{

/***/ "./node_modules/refractor/lang/mel.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/mel.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mel)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nmel.displayName = 'mel'\nmel.aliases = []\n\n/** @param {Refractor} Prism */\nfunction mel(Prism) {\n  Prism.languages.mel = {\n    comment: {\n      pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\//,\n      greedy: true\n    },\n    code: {\n      pattern: /`(?:\\\\.|[^\\\\`])*`/,\n      greedy: true,\n      alias: 'italic',\n      inside: {\n        delimiter: {\n          pattern: /^`|`$/,\n          alias: 'punctuation'\n        },\n        statement: {\n          pattern: /[\\s\\S]+/,\n          inside: null // see below\n        }\n      }\n    },\n    string: {\n      pattern: /\"(?:\\\\.|[^\\\\\"\\r\\n])*\"/,\n      greedy: true\n    },\n    variable: /\\$\\w+/,\n    number: /\\b0x[\\da-fA-F]+\\b|\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+/,\n    flag: {\n      pattern: /-[^\\d\\W]\\w*/,\n      alias: 'operator'\n    },\n    keyword:\n      /\\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\\b/,\n    function: {\n      pattern:\n        /((?:^|[{;])[ \\t]*)[a-z_]\\w*\\b(?!\\s*(?:\\.(?!\\.)|[[{=]))|\\b[a-z_]\\w*(?=[ \\t]*\\()/im,\n      lookbehind: true,\n      greedy: true\n    },\n    'tensor-punctuation': {\n      pattern: /<<|>>/,\n      alias: 'punctuation'\n    },\n    operator: /\\+[+=]?|-[-=]?|&&|\\|\\||[<>]=?|[*\\/!=]=?|[%^]/,\n    punctuation: /[.,:;?\\[\\](){}]/\n  }\n  Prism.languages.mel['code'].inside['statement'].inside = Prism.languages.mel\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/mel.js?\n}");

/***/ }

}]);