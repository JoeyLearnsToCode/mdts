"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_hsts"],{

/***/ "./node_modules/refractor/lang/hsts.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hsts.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hsts)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nhsts.displayName = 'hsts'\nhsts.aliases = []\n\n/** @param {Refractor} Prism */\nfunction hsts(Prism) {\n  /**\n   * Original by Scott Helme.\n   *\n   * Reference: https://scotthelme.co.uk/hsts-cheat-sheet/\n   */\n\n  Prism.languages.hsts = {\n    directive: {\n      pattern: /\\b(?:includeSubDomains|max-age|preload)(?=[\\s;=]|$)/i,\n      alias: 'property'\n    },\n    operator: /=/,\n    punctuation: /;/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/hsts.js?\n}");

/***/ }

}]);