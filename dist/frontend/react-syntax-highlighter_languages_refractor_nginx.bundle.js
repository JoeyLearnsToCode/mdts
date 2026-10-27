"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_nginx"],{

/***/ "./node_modules/refractor/lang/nginx.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/nginx.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nginx)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nnginx.displayName = 'nginx'\nnginx.aliases = []\n\n/** @param {Refractor} Prism */\nfunction nginx(Prism) {\n  ;(function (Prism) {\n    var variable =\n      /\\$(?:\\w[a-z\\d]*(?:_[^\\x00-\\x1F\\s\"'\\\\()$]*)?|\\{[^}\\s\"'\\\\]+\\})/i\n    Prism.languages.nginx = {\n      comment: {\n        pattern: /(^|[\\s{};])#.*/,\n        lookbehind: true,\n        greedy: true\n      },\n      directive: {\n        pattern:\n          /(^|\\s)\\w(?:[^;{}\"'\\\\\\s]|\\\\.|\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|\\s+(?:#.*(?!.)|(?![#\\s])))*?(?=\\s*[;{])/,\n        lookbehind: true,\n        greedy: true,\n        inside: {\n          string: {\n            pattern:\n              /((?:^|[^\\\\])(?:\\\\\\\\)*)(?:\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*')/,\n            lookbehind: true,\n            greedy: true,\n            inside: {\n              escape: {\n                pattern: /\\\\[\"'\\\\nrt]/,\n                alias: 'entity'\n              },\n              variable: variable\n            }\n          },\n          comment: {\n            pattern: /(\\s)#.*/,\n            lookbehind: true,\n            greedy: true\n          },\n          keyword: {\n            pattern: /^\\S+/,\n            greedy: true\n          },\n          // other patterns\n\n          boolean: {\n            pattern: /(\\s)(?:off|on)(?!\\S)/,\n            lookbehind: true\n          },\n          number: {\n            pattern: /(\\s)\\d+[a-z]*(?!\\S)/i,\n            lookbehind: true\n          },\n          variable: variable\n        }\n      },\n      punctuation: /[{};]/\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/nginx.js?\n}");

/***/ }

}]);