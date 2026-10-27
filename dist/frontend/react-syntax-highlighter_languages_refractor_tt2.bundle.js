"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_tt2"],{

/***/ "./node_modules/refractor/lang/clike.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clike)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nclike.displayName = 'clike'\nclike.aliases = []\n\n/** @param {Refractor} Prism */\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern:\n        /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword:\n      /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    function: /\\b\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/clike.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/tt2.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tt2.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tt2)\n/* harmony export */ });\n/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ \"./node_modules/refractor/lang/clike.js\");\n/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup-templating.js */ \"./node_modules/refractor/lang/markup-templating.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\n\ntt2.displayName = 'tt2'\ntt2.aliases = []\n\n/** @param {Refractor} Prism */\nfunction tt2(Prism) {\n  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  ;(function (Prism) {\n    Prism.languages.tt2 = Prism.languages.extend('clike', {\n      comment: /#.*|\\[%#[\\s\\S]*?%\\]/,\n      keyword:\n        /\\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\\b/,\n      punctuation: /[[\\]{},()]/\n    })\n    Prism.languages.insertBefore('tt2', 'number', {\n      operator: /=[>=]?|!=?|<=?|>=?|&&|\\|\\|?|\\b(?:and|not|or)\\b/,\n      variable: {\n        pattern: /\\b[a-z]\\w*(?:\\s*\\.\\s*(?:\\d+|\\$?[a-z]\\w*))*\\b/i\n      }\n    })\n    Prism.languages.insertBefore('tt2', 'keyword', {\n      delimiter: {\n        pattern: /^(?:\\[%|%%)-?|-?%\\]$/,\n        alias: 'punctuation'\n      }\n    })\n    Prism.languages.insertBefore('tt2', 'string', {\n      'single-quoted-string': {\n        pattern: /'[^\\\\']*(?:\\\\[\\s\\S][^\\\\']*)*'/,\n        greedy: true,\n        alias: 'string'\n      },\n      'double-quoted-string': {\n        pattern: /\"[^\\\\\"]*(?:\\\\[\\s\\S][^\\\\\"]*)*\"/,\n        greedy: true,\n        alias: 'string',\n        inside: {\n          variable: {\n            pattern: /\\$(?:[a-z]\\w*(?:\\.(?:\\d+|\\$?[a-z]\\w*))*)/i\n          }\n        }\n      }\n    })\n\n    // The different types of TT2 strings \"replace\" the C-like standard string\n    delete Prism.languages.tt2.string\n    Prism.hooks.add('before-tokenize', function (env) {\n      var tt2Pattern = /\\[%[\\s\\S]+?%\\]/g\n      Prism.languages['markup-templating'].buildPlaceholders(\n        env,\n        'tt2',\n        tt2Pattern\n      )\n    })\n    Prism.hooks.add('after-tokenize', function (env) {\n      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'tt2')\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/tt2.js?\n}");

/***/ }

}]);