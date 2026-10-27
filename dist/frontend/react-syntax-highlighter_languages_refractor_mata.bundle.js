"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_mata"],{

/***/ "./node_modules/refractor/lang/mata.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/mata.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mata)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nmata.displayName = 'mata'\nmata.aliases = []\n\n/** @param {Refractor} Prism */\nfunction mata(Prism) {\n  // https://www.stata.com/manuals/m.pdf\n\n  ;(function (Prism) {\n    var orgType = /\\b(?:(?:col|row)?vector|matrix|scalar)\\b/.source\n    var type =\n      /\\bvoid\\b|<org>|\\b(?:complex|numeric|pointer(?:\\s*\\([^()]*\\))?|real|string|(?:class|struct)\\s+\\w+|transmorphic)(?:\\s*<org>)?/.source.replace(\n        /<org>/g,\n        orgType\n      )\n    Prism.languages.mata = {\n      comment: {\n        pattern:\n          /\\/\\/.*|\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*\\*\\//,\n        greedy: true\n      },\n      string: {\n        pattern: /\"[^\"\\r\\n]*\"|[‘`']\".*?\"[’`']/,\n        greedy: true\n      },\n      'class-name': {\n        pattern: /(\\b(?:class|extends|struct)\\s+)\\w+(?=\\s*(?:\\{|\\bextends\\b))/,\n        lookbehind: true\n      },\n      type: {\n        pattern: RegExp(type),\n        alias: 'class-name',\n        inside: {\n          punctuation: /[()]/,\n          keyword: /\\b(?:class|function|struct|void)\\b/\n        }\n      },\n      keyword:\n        /\\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\\b/,\n      constant: /\\bNULL\\b/,\n      number: {\n        pattern:\n          /(^|[^\\w.])(?:\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?|\\d[a-f0-9]*(?:\\.[a-f0-9]+)?x[+-]?\\d+)i?(?![\\w.])/i,\n        lookbehind: true\n      },\n      missing: {\n        pattern: /(^|[^\\w.])(?:\\.[a-z]?)(?![\\w.])/,\n        lookbehind: true,\n        alias: 'symbol'\n      },\n      function: /\\b[a-z_]\\w*(?=\\s*\\()/i,\n      operator: /\\.\\.|\\+\\+|--|&&|\\|\\||:?(?:[!=<>]=|[+\\-*/^<>&|:])|[!?=\\\\#’`']/,\n      punctuation: /[()[\\]{},;.]/\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/mata.js?\n}");

/***/ }

}]);