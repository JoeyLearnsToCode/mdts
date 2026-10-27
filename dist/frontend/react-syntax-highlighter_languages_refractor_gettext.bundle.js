"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_gettext"],{

/***/ "./node_modules/refractor/lang/gettext.js"
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/gettext.js ***!
  \************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gettext)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ngettext.displayName = 'gettext'\ngettext.aliases = ['po']\n\n/** @param {Refractor} Prism */\nfunction gettext(Prism) {\n  Prism.languages.gettext = {\n    comment: [\n      {\n        pattern: /# .*/,\n        greedy: true,\n        alias: 'translator-comment'\n      },\n      {\n        pattern: /#\\..*/,\n        greedy: true,\n        alias: 'extracted-comment'\n      },\n      {\n        pattern: /#:.*/,\n        greedy: true,\n        alias: 'reference-comment'\n      },\n      {\n        pattern: /#,.*/,\n        greedy: true,\n        alias: 'flag-comment'\n      },\n      {\n        pattern: /#\\|.*/,\n        greedy: true,\n        alias: 'previously-untranslated-comment'\n      },\n      {\n        pattern: /#.*/,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /(^|[^\\\\])\"(?:[^\"\\\\]|\\\\.)*\"/,\n      lookbehind: true,\n      greedy: true\n    },\n    keyword: /^msg(?:ctxt|id|id_plural|str)\\b/m,\n    number: /\\b\\d+\\b/,\n    punctuation: /[\\[\\]]/\n  }\n  Prism.languages.po = Prism.languages.gettext\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/gettext.js?\n}");

/***/ }

}]);