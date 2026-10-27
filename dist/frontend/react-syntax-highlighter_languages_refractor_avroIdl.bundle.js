"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_avroIdl"],{

/***/ "./node_modules/refractor/lang/avro-idl.js"
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/avro-idl.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ avroIdl)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\navroIdl.displayName = 'avro-idl'\navroIdl.aliases = ['avdl']\n\n/** @param {Refractor} Prism */\nfunction avroIdl(Prism) {\n  // GitHub: https://github.com/apache/avro\n  // Docs: https://avro.apache.org/docs/current/idl.html\n\n  Prism.languages['avro-idl'] = {\n    comment: {\n      pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\//,\n      greedy: true\n    },\n    string: {\n      pattern: /(^|[^\\\\])\"(?:[^\\r\\n\"\\\\]|\\\\.)*\"/,\n      lookbehind: true,\n      greedy: true\n    },\n    annotation: {\n      pattern: /@(?:[$\\w.-]|`[^\\r\\n`]+`)+/,\n      greedy: true,\n      alias: 'function'\n    },\n    'function-identifier': {\n      pattern: /`[^\\r\\n`]+`(?=\\s*\\()/,\n      greedy: true,\n      alias: 'function'\n    },\n    identifier: {\n      pattern: /`[^\\r\\n`]+`/,\n      greedy: true\n    },\n    'class-name': {\n      pattern: /(\\b(?:enum|error|protocol|record|throws)\\b\\s+)[$\\w]+/,\n      lookbehind: true,\n      greedy: true\n    },\n    keyword:\n      /\\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\\b/,\n    function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n    number: [\n      {\n        pattern:\n          /(^|[^\\w.])-?(?:(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|0x(?:[a-f0-9]+(?:\\.[a-f0-9]*)?|\\.[a-f0-9]+)(?:p[+-]?\\d+)?)[dfl]?(?![\\w.])/i,\n        lookbehind: true\n      },\n      /-?\\b(?:Infinity|NaN)\\b/\n    ],\n    operator: /=/,\n    punctuation: /[()\\[\\]{}<>.:,;-]/\n  }\n  Prism.languages.avdl = Prism.languages['avro-idl']\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/avro-idl.js?\n}");

/***/ }

}]);