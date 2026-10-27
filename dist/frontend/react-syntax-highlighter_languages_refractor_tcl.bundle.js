"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_tcl"],{

/***/ "./node_modules/refractor/lang/tcl.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tcl.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tcl)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ntcl.displayName = 'tcl'\ntcl.aliases = []\n\n/** @param {Refractor} Prism */\nfunction tcl(Prism) {\n  Prism.languages.tcl = {\n    comment: {\n      pattern: /(^|[^\\\\])#.*/,\n      lookbehind: true\n    },\n    string: {\n      pattern: /\"(?:[^\"\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\"/,\n      greedy: true\n    },\n    variable: [\n      {\n        pattern: /(\\$)(?:::)?(?:[a-zA-Z0-9]+::)*\\w+/,\n        lookbehind: true\n      },\n      {\n        pattern: /(\\$)\\{[^}]+\\}/,\n        lookbehind: true\n      },\n      {\n        pattern: /(^[\\t ]*set[ \\t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\\w+/m,\n        lookbehind: true\n      }\n    ],\n    function: {\n      pattern: /(^[\\t ]*proc[ \\t]+)\\S+/m,\n      lookbehind: true\n    },\n    builtin: [\n      {\n        pattern:\n          /(^[\\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\\b/m,\n        lookbehind: true\n      },\n      /\\b(?:else|elseif)\\b/\n    ],\n    scope: {\n      pattern: /(^[\\t ]*)(?:global|upvar|variable)\\b/m,\n      lookbehind: true,\n      alias: 'constant'\n    },\n    keyword: {\n      pattern:\n        /(^[\\t ]*|\\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\\b/m,\n      lookbehind: true\n    },\n    operator:\n      /!=?|\\*\\*?|==|&&?|\\|\\|?|<[=<]?|>[=>]?|[-+~\\/%?^]|\\b(?:eq|in|ne|ni)\\b/,\n    punctuation: /[{}()\\[\\]]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/tcl.js?\n}");

/***/ }

}]);