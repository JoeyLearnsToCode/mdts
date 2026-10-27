"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_editorconfig"],{

/***/ "./node_modules/refractor/lang/editorconfig.js"
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/editorconfig.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editorconfig)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\neditorconfig.displayName = 'editorconfig'\neditorconfig.aliases = []\n\n/** @param {Refractor} Prism */\nfunction editorconfig(Prism) {\n  Prism.languages.editorconfig = {\n    // https://editorconfig-specification.readthedocs.io\n    comment: /[;#].*/,\n    section: {\n      pattern: /(^[ \\t]*)\\[.+\\]/m,\n      lookbehind: true,\n      alias: 'selector',\n      inside: {\n        regex: /\\\\\\\\[\\[\\]{},!?.*]/,\n        // Escape special characters with '\\\\'\n        operator: /[!?]|\\.\\.|\\*{1,2}/,\n        punctuation: /[\\[\\]{},]/\n      }\n    },\n    key: {\n      pattern: /(^[ \\t]*)[^\\s=]+(?=[ \\t]*=)/m,\n      lookbehind: true,\n      alias: 'attr-name'\n    },\n    value: {\n      pattern: /=.*/,\n      alias: 'attr-value',\n      inside: {\n        punctuation: /^=/\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/editorconfig.js?\n}");

/***/ }

}]);