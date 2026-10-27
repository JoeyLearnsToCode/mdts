"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_toml"],{

/***/ "./node_modules/refractor/lang/toml.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/toml.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toml)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ntoml.displayName = 'toml'\ntoml.aliases = []\n\n/** @param {Refractor} Prism */\nfunction toml(Prism) {\n  ;(function (Prism) {\n    var key = /(?:[\\w-]+|'[^'\\n\\r]*'|\"(?:\\\\.|[^\\\\\"\\r\\n])*\")/.source\n\n    /**\n     * @param {string} pattern\n     */\n    function insertKey(pattern) {\n      return pattern.replace(/__/g, function () {\n        return key\n      })\n    }\n    Prism.languages.toml = {\n      comment: {\n        pattern: /#.*/,\n        greedy: true\n      },\n      table: {\n        pattern: RegExp(\n          insertKey(\n            /(^[\\t ]*\\[\\s*(?:\\[\\s*)?)__(?:\\s*\\.\\s*__)*(?=\\s*\\])/.source\n          ),\n          'm'\n        ),\n        lookbehind: true,\n        greedy: true,\n        alias: 'class-name'\n      },\n      key: {\n        pattern: RegExp(\n          insertKey(/(^[\\t ]*|[{,]\\s*)__(?:\\s*\\.\\s*__)*(?=\\s*=)/.source),\n          'm'\n        ),\n        lookbehind: true,\n        greedy: true,\n        alias: 'property'\n      },\n      string: {\n        pattern:\n          /\"\"\"(?:\\\\[\\s\\S]|[^\\\\])*?\"\"\"|'''[\\s\\S]*?'''|'[^'\\n\\r]*'|\"(?:\\\\.|[^\\\\\"\\r\\n])*\"/,\n        greedy: true\n      },\n      date: [\n        {\n          // Offset Date-Time, Local Date-Time, Local Date\n          pattern:\n            /\\b\\d{4}-\\d{2}-\\d{2}(?:[T\\s]\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[+-]\\d{2}:\\d{2})?)?\\b/i,\n          alias: 'number'\n        },\n        {\n          // Local Time\n          pattern: /\\b\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?\\b/,\n          alias: 'number'\n        }\n      ],\n      number:\n        /(?:\\b0(?:x[\\da-zA-Z]+(?:_[\\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\\b|[-+]?\\b\\d+(?:_\\d+)*(?:\\.\\d+(?:_\\d+)*)?(?:[eE][+-]?\\d+(?:_\\d+)*)?\\b|[-+]?\\b(?:inf|nan)\\b/,\n      boolean: /\\b(?:false|true)\\b/,\n      punctuation: /[.,=[\\]{}]/\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/toml.js?\n}");

/***/ }

}]);