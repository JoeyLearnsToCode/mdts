"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_ada"],{

/***/ "./node_modules/refractor/lang/ada.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ada.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ada)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nada.displayName = 'ada'\nada.aliases = []\n\n/** @param {Refractor} Prism */\nfunction ada(Prism) {\n  Prism.languages.ada = {\n    comment: /--.*/,\n    string: /\"(?:\"\"|[^\"\\r\\f\\n])*\"/,\n    number: [\n      {\n        pattern:\n          /\\b\\d(?:_?\\d)*#[\\dA-F](?:_?[\\dA-F])*(?:\\.[\\dA-F](?:_?[\\dA-F])*)?#(?:E[+-]?\\d(?:_?\\d)*)?/i\n      },\n      {\n        pattern: /\\b\\d(?:_?\\d)*(?:\\.\\d(?:_?\\d)*)?(?:E[+-]?\\d(?:_?\\d)*)?\\b/i\n      }\n    ],\n    attribute: {\n      pattern: /\\b'\\w+/,\n      alias: 'attr-name'\n    },\n    keyword:\n      /\\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|new|not|null|of|or|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|return|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\\b/i,\n    boolean: /\\b(?:false|true)\\b/i,\n    operator: /<[=>]?|>=?|=>?|:=|\\/=?|\\*\\*?|[&+-]/,\n    punctuation: /\\.\\.?|[,;():]/,\n    char: /'.'/,\n    variable: /\\b[a-z](?:\\w)*\\b/i\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/ada.js?\n}");

/***/ }

}]);