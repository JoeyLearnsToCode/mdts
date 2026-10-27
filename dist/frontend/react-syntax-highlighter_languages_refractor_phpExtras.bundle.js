"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_phpExtras"],{

/***/ "./node_modules/refractor/lang/php-extras.js"
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/php-extras.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ phpExtras)\n/* harmony export */ });\n/* harmony import */ var _php_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./php.js */ \"./node_modules/refractor/lang/php.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\nphpExtras.displayName = 'php-extras'\nphpExtras.aliases = []\n\n/** @param {Refractor} Prism */\nfunction phpExtras(Prism) {\n  Prism.register(_php_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.languages.insertBefore('php', 'variable', {\n    this: {\n      pattern: /\\$this\\b/,\n      alias: 'keyword'\n    },\n    global:\n      /\\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\\b/,\n    scope: {\n      pattern: /\\b[\\w\\\\]+::/,\n      inside: {\n        keyword: /\\b(?:parent|self|static)\\b/,\n        punctuation: /::|\\\\/\n      }\n    }\n  })\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/php-extras.js?\n}");

/***/ }

}]);