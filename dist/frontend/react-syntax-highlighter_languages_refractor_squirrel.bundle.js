"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_squirrel"],{

/***/ "./node_modules/refractor/lang/clike.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clike)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nclike.displayName = 'clike'\nclike.aliases = []\n\n/** @param {Refractor} Prism */\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern:\n        /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword:\n      /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    function: /\\b\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/clike.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/squirrel.js"
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/squirrel.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ squirrel)\n/* harmony export */ });\n/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ \"./node_modules/refractor/lang/clike.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\nsquirrel.displayName = 'squirrel'\nsquirrel.aliases = []\n\n/** @param {Refractor} Prism */\nfunction squirrel(Prism) {\n  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.languages.squirrel = Prism.languages.extend('clike', {\n    comment: [\n      Prism.languages.clike['comment'][0],\n      {\n        pattern: /(^|[^\\\\:])(?:\\/\\/|#).*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /(^|[^\\\\\"'@])(?:@\"(?:[^\"]|\"\")*\"(?!\")|\"(?:[^\\\\\\r\\n\"]|\\\\.)*\")/,\n      lookbehind: true,\n      greedy: true\n    },\n    'class-name': {\n      pattern: /(\\b(?:class|enum|extends|instanceof)\\s+)\\w+(?:\\.\\w+)*/,\n      lookbehind: true,\n      inside: {\n        punctuation: /\\./\n      }\n    },\n    keyword:\n      /\\b(?:__FILE__|__LINE__|base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield)\\b/,\n    number: /\\b(?:0x[0-9a-fA-F]+|\\d+(?:\\.(?:\\d+|[eE][+-]?\\d+))?)\\b/,\n    operator: /\\+\\+|--|<=>|<[-<]|>>>?|&&?|\\|\\|?|[-+*/%!=<>]=?|[~^]|::?/,\n    punctuation: /[(){}\\[\\],;.]/\n  })\n  Prism.languages.insertBefore('squirrel', 'string', {\n    char: {\n      pattern: /(^|[^\\\\\"'])'(?:[^\\\\']|\\\\(?:[xuU][0-9a-fA-F]{0,8}|[\\s\\S]))'/,\n      lookbehind: true,\n      greedy: true\n    }\n  })\n  Prism.languages.insertBefore('squirrel', 'operator', {\n    'attribute-punctuation': {\n      pattern: /<\\/|\\/>/,\n      alias: 'important'\n    },\n    lambda: {\n      pattern: /@(?=\\()/,\n      alias: 'operator'\n    }\n  })\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/squirrel.js?\n}");

/***/ }

}]);