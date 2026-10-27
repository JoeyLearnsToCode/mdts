"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_tsx"],{

/***/ "./node_modules/refractor/lang/tsx.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tsx.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tsx)\n/* harmony export */ });\n/* harmony import */ var _jsx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx.js */ \"./node_modules/refractor/lang/jsx.js\");\n/* harmony import */ var _typescript_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typescript.js */ \"./node_modules/refractor/lang/typescript.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\n\ntsx.displayName = 'tsx'\ntsx.aliases = []\n\n/** @param {Refractor} Prism */\nfunction tsx(Prism) {\n  Prism.register(_jsx_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.register(_typescript_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  ;(function (Prism) {\n    var typescript = Prism.util.clone(Prism.languages.typescript)\n    Prism.languages.tsx = Prism.languages.extend('jsx', typescript)\n\n    // doesn't work with TS because TS is too complex\n    delete Prism.languages.tsx['parameter']\n    delete Prism.languages.tsx['literal-property']\n\n    // This will prevent collisions between TSX tags and TS generic types.\n    // Idea by https://github.com/karlhorky\n    // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928\n    var tag = Prism.languages.tsx.tag\n    tag.pattern = RegExp(\n      /(^|[^\\w$]|(?=<\\/))/.source + '(?:' + tag.pattern.source + ')',\n      tag.pattern.flags\n    )\n    tag.lookbehind = true\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/tsx.js?\n}");

/***/ }

}]);