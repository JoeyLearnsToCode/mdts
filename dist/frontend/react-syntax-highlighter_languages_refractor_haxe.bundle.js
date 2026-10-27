"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_haxe"],{

/***/ "./node_modules/refractor/lang/clike.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clike)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nclike.displayName = 'clike'\nclike.aliases = []\n\n/** @param {Refractor} Prism */\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern:\n        /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword:\n      /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    function: /\\b\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/clike.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/haxe.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/haxe.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ haxe)\n/* harmony export */ });\n/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ \"./node_modules/refractor/lang/clike.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\nhaxe.displayName = 'haxe'\nhaxe.aliases = []\n\n/** @param {Refractor} Prism */\nfunction haxe(Prism) {\n  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.languages.haxe = Prism.languages.extend('clike', {\n    string: {\n      // Strings can be multi-line\n      pattern: /\"(?:[^\"\\\\]|\\\\[\\s\\S])*\"/,\n      greedy: true\n    },\n    'class-name': [\n      {\n        pattern:\n          /(\\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\\s+)[A-Z_]\\w*/,\n        lookbehind: true\n      },\n      // based on naming convention\n      /\\b[A-Z]\\w*/\n    ],\n    // The final look-ahead prevents highlighting of keywords if expressions such as \"haxe.macro.Expr\"\n    keyword:\n      /\\bthis\\b|\\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\\.)\\b/,\n    function: {\n      pattern: /\\b[a-z_]\\w*(?=\\s*(?:<[^<>]*>\\s*)?\\()/i,\n      greedy: true\n    },\n    operator: /\\.{3}|\\+\\+|--|&&|\\|\\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/\n  })\n  Prism.languages.insertBefore('haxe', 'string', {\n    'string-interpolation': {\n      pattern: /'(?:[^'\\\\]|\\\\[\\s\\S])*'/,\n      greedy: true,\n      inside: {\n        interpolation: {\n          pattern: /(^|[^\\\\])\\$(?:\\w+|\\{[^{}]+\\})/,\n          lookbehind: true,\n          inside: {\n            'interpolation-punctuation': {\n              pattern: /^\\$\\{?|\\}$/,\n              alias: 'punctuation'\n            },\n            expression: {\n              pattern: /[\\s\\S]+/,\n              inside: Prism.languages.haxe\n            }\n          }\n        },\n        string: /[\\s\\S]+/\n      }\n    }\n  })\n  Prism.languages.insertBefore('haxe', 'class-name', {\n    regex: {\n      pattern: /~\\/(?:[^\\/\\\\\\r\\n]|\\\\.)+\\/[a-z]*/,\n      greedy: true,\n      inside: {\n        'regex-flags': /\\b[a-z]+$/,\n        'regex-source': {\n          pattern: /^(~\\/)[\\s\\S]+(?=\\/$)/,\n          lookbehind: true,\n          alias: 'language-regex',\n          inside: Prism.languages.regex\n        },\n        'regex-delimiter': /^~\\/|\\/$/\n      }\n    }\n  })\n  Prism.languages.insertBefore('haxe', 'keyword', {\n    preprocessor: {\n      pattern: /#(?:else|elseif|end|if)\\b.*/,\n      alias: 'property'\n    },\n    metadata: {\n      pattern: /@:?[\\w.]+/,\n      alias: 'symbol'\n    },\n    reification: {\n      pattern: /\\$(?:\\w+|(?=\\{))/,\n      alias: 'important'\n    }\n  })\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/haxe.js?\n}");

/***/ }

}]);