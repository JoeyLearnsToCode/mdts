"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_etlua"],{

/***/ "./node_modules/refractor/lang/etlua.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/etlua.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ etlua)\n/* harmony export */ });\n/* harmony import */ var _lua_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lua.js */ \"./node_modules/refractor/lang/lua.js\");\n/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup-templating.js */ \"./node_modules/refractor/lang/markup-templating.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\n\netlua.displayName = 'etlua'\netlua.aliases = []\n\n/** @param {Refractor} Prism */\nfunction etlua(Prism) {\n  Prism.register(_lua_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  ;(function (Prism) {\n    Prism.languages.etlua = {\n      delimiter: {\n        pattern: /^<%[-=]?|-?%>$/,\n        alias: 'punctuation'\n      },\n      'language-lua': {\n        pattern: /[\\s\\S]+/,\n        inside: Prism.languages.lua\n      }\n    }\n    Prism.hooks.add('before-tokenize', function (env) {\n      var pattern = /<%[\\s\\S]+?%>/g\n      Prism.languages['markup-templating'].buildPlaceholders(\n        env,\n        'etlua',\n        pattern\n      )\n    })\n    Prism.hooks.add('after-tokenize', function (env) {\n      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'etlua')\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/etlua.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/lua.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ lua)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nlua.displayName = 'lua'\nlua.aliases = []\n\n/** @param {Refractor} Prism */\nfunction lua(Prism) {\n  Prism.languages.lua = {\n    comment: /^#!.+|--(?:\\[(=*)\\[[\\s\\S]*?\\]\\1\\]|.*)/m,\n    // \\z may be used to skip the following space\n    string: {\n      pattern:\n        /([\"'])(?:(?!\\1)[^\\\\\\r\\n]|\\\\z(?:\\r\\n|\\s)|\\\\(?:\\r\\n|[^z]))*\\1|\\[(=*)\\[[\\s\\S]*?\\]\\2\\]/,\n      greedy: true\n    },\n    number:\n      /\\b0x[a-f\\d]+(?:\\.[a-f\\d]*)?(?:p[+-]?\\d+)?\\b|\\b\\d+(?:\\.\\B|(?:\\.\\d*)?(?:e[+-]?\\d+)?\\b)|\\B\\.\\d+(?:e[+-]?\\d+)?\\b/i,\n    keyword:\n      /\\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\\b/,\n    function: /(?!\\d)\\w+(?=\\s*(?:[({]))/,\n    operator: [\n      /[-+*%^&|#]|\\/\\/?|<[<=]?|>[>=]?|[=~]=?/,\n      {\n        // Match \"..\" but don't break \"...\"\n        pattern: /(^|[^.])\\.\\.(?!\\.)/,\n        lookbehind: true\n      }\n    ],\n    punctuation: /[\\[\\](){},;]|\\.+|:+/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/lua.js?\n}");

/***/ }

}]);