"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_falselang"],{

/***/ "./node_modules/refractor/lang/false.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/false.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ $false)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n$false.displayName = 'false'\n$false.aliases = []\n\n/** @param {Refractor} Prism */\nfunction $false(Prism) {\n  ;(function (Prism) {\n    /**\n     * Based on the manual by Wouter van Oortmerssen.\n     *\n     * @see {@link https://github.com/PrismJS/prism/issues/2801#issue-829717504}\n     */\n    Prism.languages['false'] = {\n      comment: {\n        pattern: /\\{[^}]*\\}/\n      },\n      string: {\n        pattern: /\"[^\"]*\"/,\n        greedy: true\n      },\n      'character-code': {\n        pattern: /'(?:[^\\r]|\\r\\n?)/,\n        alias: 'number'\n      },\n      'assembler-code': {\n        pattern: /\\d+`/,\n        alias: 'important'\n      },\n      number: /\\d+/,\n      operator: /[-!#$%&'*+,./:;=>?@\\\\^_`|~ßø]/,\n      punctuation: /\\[|\\]/,\n      variable: /[a-z]/,\n      'non-standard': {\n        pattern: /[()<BDO®]/,\n        alias: 'bold'\n      }\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/false.js?\n}");

/***/ }

}]);