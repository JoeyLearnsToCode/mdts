"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_wasm"],{

/***/ "./node_modules/refractor/lang/wasm.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/wasm.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ wasm)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nwasm.displayName = 'wasm'\nwasm.aliases = []\n\n/** @param {Refractor} Prism */\nfunction wasm(Prism) {\n  Prism.languages.wasm = {\n    comment: [\n      /\\(;[\\s\\S]*?;\\)/,\n      {\n        pattern: /;;.*/,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /\"(?:\\\\[\\s\\S]|[^\"\\\\])*\"/,\n      greedy: true\n    },\n    keyword: [\n      {\n        pattern: /\\b(?:align|offset)=/,\n        inside: {\n          operator: /=/\n        }\n      },\n      {\n        pattern:\n          /\\b(?:(?:f32|f64|i32|i64)(?:\\.(?:abs|add|and|ceil|clz|const|convert_[su]\\/i(?:32|64)|copysign|ctz|demote\\/f64|div(?:_[su])?|eqz?|extend_[su]\\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\\/f32|reinterpret\\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\\/f(?:32|64))?|wrap\\/i64|xor))?|memory\\.(?:grow|size))\\b/,\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      /\\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\\b/\n    ],\n    variable: /\\$[\\w!#$%&'*+\\-./:<=>?@\\\\^`|~]+/,\n    number:\n      /[+-]?\\b(?:\\d(?:_?\\d)*(?:\\.\\d(?:_?\\d)*)?(?:[eE][+-]?\\d(?:_?\\d)*)?|0x[\\da-fA-F](?:_?[\\da-fA-F])*(?:\\.[\\da-fA-F](?:_?[\\da-fA-D])*)?(?:[pP][+-]?\\d(?:_?\\d)*)?)\\b|\\binf\\b|\\bnan(?::0x[\\da-fA-F](?:_?[\\da-fA-D])*)?\\b/,\n    punctuation: /[()]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/wasm.js?\n}");

/***/ }

}]);