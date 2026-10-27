"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_gedcom"],{

/***/ "./node_modules/refractor/lang/gedcom.js"
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/gedcom.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gedcom)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ngedcom.displayName = 'gedcom'\ngedcom.aliases = []\n\n/** @param {Refractor} Prism */\nfunction gedcom(Prism) {\n  Prism.languages.gedcom = {\n    'line-value': {\n      // Preceded by level, optional pointer, and tag\n      pattern:\n        /(^[\\t ]*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?\\w+ ).+/m,\n      lookbehind: true,\n      inside: {\n        pointer: {\n          pattern: /^@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@$/,\n          alias: 'variable'\n        }\n      }\n    },\n    record: {\n      // Preceded by level and optional pointer\n      pattern:\n        /(^[\\t ]*\\d+ +(?:@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@ +)?)\\w+/m,\n      lookbehind: true,\n      alias: 'tag'\n    },\n    level: {\n      pattern: /(^[\\t ]*)\\d+/m,\n      lookbehind: true,\n      alias: 'number'\n    },\n    pointer: {\n      pattern: /@\\w[\\w!\"$%&'()*+,\\-./:;<=>?[\\\\\\]^`{|}~\\x80-\\xfe #]*@/,\n      alias: 'variable'\n    }\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/gedcom.js?\n}");

/***/ }

}]);