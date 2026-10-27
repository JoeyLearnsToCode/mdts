"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_protobuf"],{

/***/ "./node_modules/refractor/lang/clike.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clike)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nclike.displayName = 'clike'\nclike.aliases = []\n\n/** @param {Refractor} Prism */\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern:\n        /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword:\n      /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    function: /\\b\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/clike.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/protobuf.js"
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/protobuf.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ protobuf)\n/* harmony export */ });\n/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ \"./node_modules/refractor/lang/clike.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\nprotobuf.displayName = 'protobuf'\nprotobuf.aliases = []\n\n/** @param {Refractor} Prism */\nfunction protobuf(Prism) {\n  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  ;(function (Prism) {\n    var builtinTypes =\n      /\\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\\b/\n    Prism.languages.protobuf = Prism.languages.extend('clike', {\n      'class-name': [\n        {\n          pattern:\n            /(\\b(?:enum|extend|message|service)\\s+)[A-Za-z_]\\w*(?=\\s*\\{)/,\n          lookbehind: true\n        },\n        {\n          pattern:\n            /(\\b(?:rpc\\s+\\w+|returns)\\s*\\(\\s*(?:stream\\s+)?)\\.?[A-Za-z_]\\w*(?:\\.[A-Za-z_]\\w*)*(?=\\s*\\))/,\n          lookbehind: true\n        }\n      ],\n      keyword:\n        /\\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\\s+\\w)|service|stream|syntax|to)\\b(?!\\s*=\\s*\\d)/,\n      function: /\\b[a-z_]\\w*(?=\\s*\\()/i\n    })\n    Prism.languages.insertBefore('protobuf', 'operator', {\n      map: {\n        pattern: /\\bmap<\\s*[\\w.]+\\s*,\\s*[\\w.]+\\s*>(?=\\s+[a-z_]\\w*\\s*[=;])/i,\n        alias: 'class-name',\n        inside: {\n          punctuation: /[<>.,]/,\n          builtin: builtinTypes\n        }\n      },\n      builtin: builtinTypes,\n      'positional-class-name': {\n        pattern: /(?:\\b|\\B\\.)[a-z_]\\w*(?:\\.[a-z_]\\w*)*(?=\\s+[a-z_]\\w*\\s*[=;])/i,\n        alias: 'class-name',\n        inside: {\n          punctuation: /\\./\n        }\n      },\n      annotation: {\n        pattern: /(\\[\\s*)[a-z_]\\w*(?=\\s*=)/i,\n        lookbehind: true\n      }\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/protobuf.js?\n}");

/***/ }

}]);