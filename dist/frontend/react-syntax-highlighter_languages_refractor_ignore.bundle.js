"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_ignore"],{

/***/ "./node_modules/refractor/lang/ignore.js"
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/ignore.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ignore)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nignore.displayName = 'ignore'\nignore.aliases = ['gitignore', 'hgignore', 'npmignore']\n\n/** @param {Refractor} Prism */\nfunction ignore(Prism) {\n  ;(function (Prism) {\n    Prism.languages.ignore = {\n      // https://git-scm.com/docs/gitignore\n      comment: /^#.*/m,\n      entry: {\n        pattern: /\\S(?:.*(?:(?:\\\\ )|\\S))?/,\n        alias: 'string',\n        inside: {\n          operator: /^!|\\*\\*?|\\?/,\n          regex: {\n            pattern: /(^|[^\\\\])\\[[^\\[\\]]*\\]/,\n            lookbehind: true\n          },\n          punctuation: /\\//\n        }\n      }\n    }\n    Prism.languages.gitignore = Prism.languages.ignore\n    Prism.languages.hgignore = Prism.languages.ignore\n    Prism.languages.npmignore = Prism.languages.ignore\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/ignore.js?\n}");

/***/ }

}]);