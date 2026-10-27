"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_cfscript"],{

/***/ "./node_modules/refractor/lang/cfscript.js"
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/cfscript.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cfscript)\n/* harmony export */ });\n/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ \"./node_modules/refractor/lang/clike.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\ncfscript.displayName = 'cfscript'\ncfscript.aliases = ['cfc']\n\n/** @param {Refractor} Prism */\nfunction cfscript(Prism) {\n  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  // https://cfdocs.org/script\n  Prism.languages.cfscript = Prism.languages.extend('clike', {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        inside: {\n          annotation: {\n            pattern: /(?:^|[^.])@[\\w\\.]+/,\n            alias: 'punctuation'\n          }\n        }\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    keyword:\n      /\\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\\b(?!\\s*=)/,\n    operator: [\n      /\\+\\+|--|&&|\\|\\||::|=>|[!=]==|[-+*/%&|^!=<>]=?|\\?(?:\\.|:)?|:/,\n      /\\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\\b/\n    ],\n    scope: {\n      pattern:\n        /\\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\\b/,\n      alias: 'global'\n    },\n    type: {\n      pattern:\n        /\\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\\b/,\n      alias: 'builtin'\n    }\n  })\n  Prism.languages.insertBefore('cfscript', 'keyword', {\n    // This must be declared before keyword because we use \"function\" inside the lookahead\n    'function-variable': {\n      pattern:\n        /[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\s*[=:]\\s*(?:\\bfunction\\b|(?:\\((?:[^()]|\\([^()]*\\))*\\)|(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*)\\s*=>))/,\n      alias: 'function'\n    }\n  })\n  delete Prism.languages.cfscript['class-name']\n  Prism.languages.cfc = Prism.languages['cfscript']\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/cfscript.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/clike.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clike)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nclike.displayName = 'clike'\nclike.aliases = []\n\n/** @param {Refractor} Prism */\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern:\n        /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword:\n      /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    function: /\\b\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/clike.js?\n}");

/***/ }

}]);