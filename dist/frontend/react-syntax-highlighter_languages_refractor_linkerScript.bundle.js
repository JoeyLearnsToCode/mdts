"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_linkerScript"],{

/***/ "./node_modules/refractor/lang/linker-script.js"
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/linker-script.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ linkerScript)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nlinkerScript.displayName = 'linker-script'\nlinkerScript.aliases = ['ld']\n\n/** @param {Refractor} Prism */\nfunction linkerScript(Prism) {\n  Prism.languages['linker-script'] = {\n    comment: {\n      pattern: /(^|\\s)\\/\\*[\\s\\S]*?(?:$|\\*\\/)/,\n      lookbehind: true,\n      greedy: true\n    },\n    identifier: {\n      pattern: /\"[^\"\\r\\n]*\"/,\n      greedy: true\n    },\n    'location-counter': {\n      pattern: /\\B\\.\\B/,\n      alias: 'important'\n    },\n    section: {\n      pattern: /(^|[^\\w*])\\.\\w+\\b/,\n      lookbehind: true,\n      alias: 'keyword'\n    },\n    function: /\\b[A-Z][A-Z_]*(?=\\s*\\()/,\n    number: /\\b(?:0[xX][a-fA-F0-9]+|\\d+)[KM]?\\b/,\n    operator: />>=?|<<=?|->|\\+\\+|--|&&|\\|\\||::|[?:~]|[-+*/%&|^!=<>]=?/,\n    punctuation: /[(){},;]/\n  }\n  Prism.languages['ld'] = Prism.languages['linker-script']\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/linker-script.js?\n}");

/***/ }

}]);