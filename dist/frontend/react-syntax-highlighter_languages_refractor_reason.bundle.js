"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_reason"],{

/***/ "./node_modules/refractor/lang/clike.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clike)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nclike.displayName = 'clike'\nclike.aliases = []\n\n/** @param {Refractor} Prism */\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern:\n        /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword:\n      /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    function: /\\b\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/clike.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/reason.js"
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/reason.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reason)\n/* harmony export */ });\n/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ \"./node_modules/refractor/lang/clike.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\nreason.displayName = 'reason'\nreason.aliases = []\n\n/** @param {Refractor} Prism */\nfunction reason(Prism) {\n  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.languages.reason = Prism.languages.extend('clike', {\n    string: {\n      pattern: /\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n\"])*\"/,\n      greedy: true\n    },\n    // 'class-name' must be matched *after* 'constructor' defined below\n    'class-name': /\\b[A-Z]\\w*/,\n    keyword:\n      /\\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\\b/,\n    operator:\n      /\\.{3}|:[:=]|\\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\\-*\\/]\\.?|\\b(?:asr|land|lor|lsl|lsr|lxor|mod)\\b/\n  })\n  Prism.languages.insertBefore('reason', 'class-name', {\n    char: {\n      pattern: /'(?:\\\\x[\\da-f]{2}|\\\\o[0-3][0-7][0-7]|\\\\\\d{3}|\\\\.|[^'\\\\\\r\\n])'/,\n      greedy: true\n    },\n    // Negative look-ahead prevents from matching things like String.capitalize\n    constructor: /\\b[A-Z]\\w*\\b(?!\\s*\\.)/,\n    label: {\n      pattern: /\\b[a-z]\\w*(?=::)/,\n      alias: 'symbol'\n    }\n  })\n\n  // We can't match functions property, so let's not even try.\n  delete Prism.languages.reason.function\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/reason.js?\n}");

/***/ }

}]);