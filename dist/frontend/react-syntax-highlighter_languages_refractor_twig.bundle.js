"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_twig"],{

/***/ "./node_modules/refractor/lang/twig.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/twig.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ twig)\n/* harmony export */ });\n/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ \"./node_modules/refractor/lang/markup-templating.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\ntwig.displayName = 'twig'\ntwig.aliases = []\n\n/** @param {Refractor} Prism */\nfunction twig(Prism) {\n  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.languages.twig = {\n    comment: /^\\{#[\\s\\S]*?#\\}$/,\n    'tag-name': {\n      pattern: /(^\\{%-?\\s*)\\w+/,\n      lookbehind: true,\n      alias: 'keyword'\n    },\n    delimiter: {\n      pattern: /^\\{[{%]-?|-?[%}]\\}$/,\n      alias: 'punctuation'\n    },\n    string: {\n      pattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      inside: {\n        punctuation: /^['\"]|['\"]$/\n      }\n    },\n    keyword: /\\b(?:even|if|odd)\\b/,\n    boolean: /\\b(?:false|null|true)\\b/,\n    number: /\\b0x[\\dA-Fa-f]+|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[Ee][-+]?\\d+)?/,\n    operator: [\n      {\n        pattern:\n          /(\\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\\s)/,\n        lookbehind: true\n      },\n      /[=<>]=?|!=|\\*\\*?|\\/\\/?|\\?:?|[-+~%|]/\n    ],\n    punctuation: /[()\\[\\]{}:.,]/\n  }\n  Prism.hooks.add('before-tokenize', function (env) {\n    if (env.language !== 'twig') {\n      return\n    }\n    var pattern = /\\{(?:#[\\s\\S]*?#|%[\\s\\S]*?%|\\{[\\s\\S]*?\\})\\}/g\n    Prism.languages['markup-templating'].buildPlaceholders(env, 'twig', pattern)\n  })\n  Prism.hooks.add('after-tokenize', function (env) {\n    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'twig')\n  })\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/twig.js?\n}");

/***/ }

}]);