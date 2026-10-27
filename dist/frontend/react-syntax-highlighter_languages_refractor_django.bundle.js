"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_django"],{

/***/ "./node_modules/refractor/lang/django.js"
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/django.js ***!
  \***********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ django)\n/* harmony export */ });\n/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ \"./node_modules/refractor/lang/markup-templating.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\ndjango.displayName = 'django'\ndjango.aliases = ['jinja2']\n\n/** @param {Refractor} Prism */\nfunction django(Prism) {\n  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  // Django/Jinja2 syntax definition for Prism.js <http://prismjs.com> syntax highlighter.\n  // Mostly it works OK but can paint code incorrectly on complex html/template tag combinations.\n\n  ;(function (Prism) {\n    Prism.languages.django = {\n      comment: /^\\{#[\\s\\S]*?#\\}$/,\n      tag: {\n        pattern: /(^\\{%[+-]?\\s*)\\w+/,\n        lookbehind: true,\n        alias: 'keyword'\n      },\n      delimiter: {\n        pattern: /^\\{[{%][+-]?|[+-]?[}%]\\}$/,\n        alias: 'punctuation'\n      },\n      string: {\n        pattern: /(\"|')(?:\\\\.|(?!\\1)[^\\\\\\r\\n])*\\1/,\n        greedy: true\n      },\n      filter: {\n        pattern: /(\\|)\\w+/,\n        lookbehind: true,\n        alias: 'function'\n      },\n      test: {\n        pattern: /(\\bis\\s+(?:not\\s+)?)(?!not\\b)\\w+/,\n        lookbehind: true,\n        alias: 'function'\n      },\n      function: /\\b[a-z_]\\w+(?=\\s*\\()/i,\n      keyword:\n        /\\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\\b/,\n      operator: /[-+%=]=?|!=|\\*\\*?=?|\\/\\/?=?|<[<=>]?|>[=>]?|[&|^~]/,\n      number: /\\b\\d+(?:\\.\\d+)?\\b/,\n      boolean: /[Ff]alse|[Nn]one|[Tt]rue/,\n      variable: /\\b\\w+\\b/,\n      punctuation: /[{}[\\](),.:;]/\n    }\n    var pattern = /\\{\\{[\\s\\S]*?\\}\\}|\\{%[\\s\\S]*?%\\}|\\{#[\\s\\S]*?#\\}/g\n    var markupTemplating = Prism.languages['markup-templating']\n    Prism.hooks.add('before-tokenize', function (env) {\n      markupTemplating.buildPlaceholders(env, 'django', pattern)\n    })\n    Prism.hooks.add('after-tokenize', function (env) {\n      markupTemplating.tokenizePlaceholders(env, 'django')\n    })\n\n    // Add an Jinja2 alias\n    Prism.languages.jinja2 = Prism.languages.django\n    Prism.hooks.add('before-tokenize', function (env) {\n      markupTemplating.buildPlaceholders(env, 'jinja2', pattern)\n    })\n    Prism.hooks.add('after-tokenize', function (env) {\n      markupTemplating.tokenizePlaceholders(env, 'jinja2')\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/django.js?\n}");

/***/ }

}]);