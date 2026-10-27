"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_abnf"],{

/***/ "./node_modules/refractor/lang/abnf.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/abnf.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ abnf)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nabnf.displayName = 'abnf'\nabnf.aliases = []\n\n/** @param {Refractor} Prism */\nfunction abnf(Prism) {\n  ;(function (Prism) {\n    var coreRules =\n      '(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)'\n    Prism.languages.abnf = {\n      comment: /;.*/,\n      string: {\n        pattern: /(?:%[is])?\"[^\"\\n\\r]*\"/,\n        greedy: true,\n        inside: {\n          punctuation: /^%[is]/\n        }\n      },\n      range: {\n        pattern: /%(?:b[01]+-[01]+|d\\d+-\\d+|x[A-F\\d]+-[A-F\\d]+)/i,\n        alias: 'number'\n      },\n      terminal: {\n        pattern:\n          /%(?:b[01]+(?:\\.[01]+)*|d\\d+(?:\\.\\d+)*|x[A-F\\d]+(?:\\.[A-F\\d]+)*)/i,\n        alias: 'number'\n      },\n      repetition: {\n        pattern: /(^|[^\\w-])(?:\\d*\\*\\d*|\\d+)/,\n        lookbehind: true,\n        alias: 'operator'\n      },\n      definition: {\n        pattern: /(^[ \\t]*)(?:[a-z][\\w-]*|<[^<>\\r\\n]*>)(?=\\s*=)/m,\n        lookbehind: true,\n        alias: 'keyword',\n        inside: {\n          punctuation: /<|>/\n        }\n      },\n      'core-rule': {\n        pattern: RegExp(\n          '(?:(^|[^<\\\\w-])' + coreRules + '|<' + coreRules + '>)(?![\\\\w-])',\n          'i'\n        ),\n        lookbehind: true,\n        alias: ['rule', 'constant'],\n        inside: {\n          punctuation: /<|>/\n        }\n      },\n      rule: {\n        pattern: /(^|[^<\\w-])[a-z][\\w-]*|<[^<>\\r\\n]*>/i,\n        lookbehind: true,\n        inside: {\n          punctuation: /<|>/\n        }\n      },\n      operator: /=\\/?|\\//,\n      punctuation: /[()\\[\\]]/\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/abnf.js?\n}");

/***/ }

}]);