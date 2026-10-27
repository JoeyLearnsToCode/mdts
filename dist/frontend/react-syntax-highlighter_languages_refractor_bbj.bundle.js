"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_bbj"],{

/***/ "./node_modules/refractor/lang/bbj.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bbj.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bbj)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nbbj.displayName = 'bbj'\nbbj.aliases = []\n\n/** @param {Refractor} Prism */\nfunction bbj(Prism) {\n  ;(function (Prism) {\n    Prism.languages.bbj = {\n      comment: {\n        pattern: /(^|[^\\\\:])rem\\s+.*/i,\n        lookbehind: true,\n        greedy: true\n      },\n      string: {\n        pattern: /(['\"])(?:(?!\\1|\\\\).|\\\\.)*\\1/,\n        greedy: true\n      },\n      number: /(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:E[+-]?\\d+)?/i,\n      keyword:\n        /\\b(?:abstract|all|argc|begin|bye|callback|case|chn|class|classend|ctl|day|declare|delete|dim|dom|dread|dsz|else|end|endif|err|exitto|extends|fi|field|for|from|gosub|goto|if|implements|interface|interfaceend|iol|iolist|let|list|load|method|methodend|methodret|on|opts|pfx|print|private|process_events|protected|psz|public|read|read_resource|release|remove_callback|repeat|restore|return|rev|seterr|setesc|sqlchn|sqlunt|ssn|start|static|swend|switch|sys|then|tim|unt|until|use|void|wend|where|while)\\b/i,\n      function: /\\b\\w+(?=\\()/,\n      boolean: /\\b(?:BBjAPI\\.TRUE|BBjAPI\\.FALSE)\\b/i,\n      operator: /<[=>]?|>=?|[+\\-*\\/^=&]|\\b(?:and|not|or|xor)\\b/i,\n      punctuation: /[.,;:()]/\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/bbj.js?\n}");

/***/ }

}]);