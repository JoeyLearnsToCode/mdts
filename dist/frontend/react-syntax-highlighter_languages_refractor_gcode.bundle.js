"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_gcode"],{

/***/ "./node_modules/refractor/lang/gcode.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/gcode.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gcode)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ngcode.displayName = 'gcode'\ngcode.aliases = []\n\n/** @param {Refractor} Prism */\nfunction gcode(Prism) {\n  Prism.languages.gcode = {\n    comment: /;.*|\\B\\(.*?\\)\\B/,\n    string: {\n      pattern: /\"(?:\"\"|[^\"])*\"/,\n      greedy: true\n    },\n    keyword: /\\b[GM]\\d+(?:\\.\\d+)?\\b/,\n    property: /\\b[A-Z]/,\n    checksum: {\n      pattern: /(\\*)\\d+/,\n      lookbehind: true,\n      alias: 'number'\n    },\n    // T0:0:0\n    punctuation: /[:*]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/gcode.js?\n}");

/***/ }

}]);