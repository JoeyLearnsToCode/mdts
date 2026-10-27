"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_handlebars"],{

/***/ "./node_modules/refractor/lang/handlebars.js"
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/handlebars.js ***!
  \***************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handlebars)\n/* harmony export */ });\n/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ \"./node_modules/refractor/lang/markup-templating.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\nhandlebars.displayName = 'handlebars'\nhandlebars.aliases = ['hbs', 'mustache']\n\n/** @param {Refractor} Prism */\nfunction handlebars(Prism) {\n  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  ;(function (Prism) {\n    Prism.languages.handlebars = {\n      comment: /\\{\\{![\\s\\S]*?\\}\\}/,\n      delimiter: {\n        pattern: /^\\{\\{\\{?|\\}\\}\\}?$/,\n        alias: 'punctuation'\n      },\n      string: /([\"'])(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      number: /\\b0x[\\dA-Fa-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:[Ee][+-]?\\d+)?/,\n      boolean: /\\b(?:false|true)\\b/,\n      block: {\n        pattern: /^(\\s*(?:~\\s*)?)[#\\/]\\S+?(?=\\s*(?:~\\s*)?$|\\s)/,\n        lookbehind: true,\n        alias: 'keyword'\n      },\n      brackets: {\n        pattern: /\\[[^\\]]+\\]/,\n        inside: {\n          punctuation: /\\[|\\]/,\n          variable: /[\\s\\S]+/\n        }\n      },\n      punctuation: /[!\"#%&':()*+,.\\/;<=>@\\[\\\\\\]^`{|}~]/,\n      variable: /[^!\"#%&'()*+,\\/;<=>@\\[\\\\\\]^`{|}~\\s]+/\n    }\n    Prism.hooks.add('before-tokenize', function (env) {\n      var handlebarsPattern = /\\{\\{\\{[\\s\\S]+?\\}\\}\\}|\\{\\{[\\s\\S]+?\\}\\}/g\n      Prism.languages['markup-templating'].buildPlaceholders(\n        env,\n        'handlebars',\n        handlebarsPattern\n      )\n    })\n    Prism.hooks.add('after-tokenize', function (env) {\n      Prism.languages['markup-templating'].tokenizePlaceholders(\n        env,\n        'handlebars'\n      )\n    })\n    Prism.languages.hbs = Prism.languages.handlebars\n    Prism.languages.mustache = Prism.languages.handlebars\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/handlebars.js?\n}");

/***/ }

}]);