"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_latte"],{

/***/ "./node_modules/refractor/lang/clike.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clike)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nclike.displayName = 'clike'\nclike.aliases = []\n\n/** @param {Refractor} Prism */\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true,\n        greedy: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern:\n        /(\\b(?:class|extends|implements|instanceof|interface|new|trait)\\s+|\\bcatch\\s+\\()[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword:\n      /\\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\\b/,\n    boolean: /\\b(?:false|true)\\b/,\n    function: /\\b\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /[<>]=?|[!=]=?=?|--?|\\+\\+?|&&?|\\|\\|?|[?*/~^%]/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/clike.js?\n}");

/***/ },

/***/ "./node_modules/refractor/lang/latte.js"
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/latte.js ***!
  \**********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ latte)\n/* harmony export */ });\n/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ \"./node_modules/refractor/lang/clike.js\");\n/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup-templating.js */ \"./node_modules/refractor/lang/markup-templating.js\");\n/* harmony import */ var _php_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./php.js */ \"./node_modules/refractor/lang/php.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\n\n\nlatte.displayName = 'latte'\nlatte.aliases = []\n\n/** @param {Refractor} Prism */\nfunction latte(Prism) {\n  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n  Prism.register(_php_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n  ;(function (Prism) {\n    Prism.languages.latte = {\n      comment: /^\\{\\*[\\s\\S]*/,\n      'latte-tag': {\n        // https://latte.nette.org/en/tags\n        pattern: /(^\\{(?:\\/(?=[a-z]))?)(?:[=_]|[a-z]\\w*\\b(?!\\())/i,\n        lookbehind: true,\n        alias: 'important'\n      },\n      delimiter: {\n        pattern: /^\\{\\/?|\\}$/,\n        alias: 'punctuation'\n      },\n      php: {\n        pattern: /\\S(?:[\\s\\S]*\\S)?/,\n        alias: 'language-php',\n        inside: Prism.languages.php\n      }\n    }\n    var markupLatte = Prism.languages.extend('markup', {})\n    Prism.languages.insertBefore(\n      'inside',\n      'attr-value',\n      {\n        'n-attr': {\n          pattern: /n:[\\w-]+(?:\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+))?/,\n          inside: {\n            'attr-name': {\n              pattern: /^[^\\s=]+/,\n              alias: 'important'\n            },\n            'attr-value': {\n              pattern: /=[\\s\\S]+/,\n              inside: {\n                punctuation: [\n                  /^=/,\n                  {\n                    pattern: /^(\\s*)[\"']|[\"']$/,\n                    lookbehind: true\n                  }\n                ],\n                php: {\n                  pattern: /\\S(?:[\\s\\S]*\\S)?/,\n                  inside: Prism.languages.php\n                }\n              }\n            }\n          }\n        }\n      },\n      markupLatte.tag\n    )\n    Prism.hooks.add('before-tokenize', function (env) {\n      if (env.language !== 'latte') {\n        return\n      }\n      var lattePattern =\n        /\\{\\*[\\s\\S]*?\\*\\}|\\{[^'\"\\s{}*](?:[^\"'/{}]|\\/(?![*/])|(\"|')(?:\\\\[\\s\\S]|(?!\\1)[^\\\\])*\\1|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*\\}/g\n      Prism.languages['markup-templating'].buildPlaceholders(\n        env,\n        'latte',\n        lattePattern\n      )\n      env.grammar = markupLatte\n    })\n    Prism.hooks.add('after-tokenize', function (env) {\n      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'latte')\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/latte.js?\n}");

/***/ }

}]);