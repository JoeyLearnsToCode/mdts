"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_awk"],{

/***/ "./node_modules/refractor/lang/awk.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/awk.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ awk)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nawk.displayName = 'awk'\nawk.aliases = ['gawk']\n\n/** @param {Refractor} Prism */\nfunction awk(Prism) {\n  Prism.languages.awk = {\n    hashbang: {\n      pattern: /^#!.*/,\n      greedy: true,\n      alias: 'comment'\n    },\n    comment: {\n      pattern: /#.*/,\n      greedy: true\n    },\n    string: {\n      pattern: /(^|[^\\\\])\"(?:[^\\\\\"\\r\\n]|\\\\.)*\"/,\n      lookbehind: true,\n      greedy: true\n    },\n    regex: {\n      pattern: /((?:^|[^\\w\\s)])\\s*)\\/(?:[^\\/\\\\\\r\\n]|\\\\.)*\\//,\n      lookbehind: true,\n      greedy: true\n    },\n    variable: /\\$\\w+/,\n    keyword:\n      /\\b(?:BEGIN|BEGINFILE|END|ENDFILE|break|case|continue|default|delete|do|else|exit|for|function|getline|if|in|next|nextfile|printf?|return|switch|while)\\b|@(?:include|load)\\b/,\n    function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n    number: /\\b(?:\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?|0x[a-fA-F0-9]+)\\b/,\n    operator: /--|\\+\\+|!?~|>&|>>|<<|(?:\\*\\*|[<>!=+\\-*/%^])=?|&&|\\|[|&]|[?:]/,\n    punctuation: /[()[\\]{},;]/\n  }\n  Prism.languages.gawk = Prism.languages.awk\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/awk.js?\n}");

/***/ }

}]);