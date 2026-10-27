"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_jsonp"],{

/***/ "./node_modules/refractor/lang/json.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/json.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ json)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\njson.displayName = 'json'\njson.aliases = ['webmanifest']\n\n/** @param {Refractor} Prism */\nfunction json(Prism) {\n  // https://www.json.org/json-en.html\n  Prism.languages.json = {\n    property: {\n      pattern: /(^|[^\\\\])\"(?:\\\\.|[^\\\\\"\\r\\n])*\"(?=\\s*:)/,\n      lookbehind: true,\n      greedy: true\n    },\n    string: {\n      pattern: /(^|[^\\\\])\"(?:\\\\.|[^\\\\\"\\r\\n])*\"(?!\\s*:)/,\n      lookbehind: true,\n      greedy: true\n    },\n    comment: {\n      pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n      greedy: true\n    },\n    number: /-?\\b\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?\\b/i,\n    punctuation: /[{}[\\],]/,\n    operator: /:/,\n    boolean: /\\b(?:false|true)\\b/,\n    null: {\n      pattern: /\\bnull\\b/,\n      alias: 'keyword'\n    }\n  }\n  Prism.languages.webmanifest = Prism.languages.json\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/json.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/jsonp.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/jsonp.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ jsonp)\n/* harmony export */ });\n/* harmony import */ var _json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json.js */ \"./node_modules/refractor/lang/json.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\njsonp.displayName = 'jsonp'\njsonp.aliases = []\n\n/** @param {Refractor} Prism */\nfunction jsonp(Prism) {\n  Prism.register(_json_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.languages.jsonp = Prism.languages.extend('json', {\n    punctuation: /[{}[\\]();,.]/\n  })\n  Prism.languages.insertBefore('jsonp', 'punctuation', {\n    function: /(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\s*\\()/\n  })\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/jsonp.js?\n}");

/***/ }

}]);