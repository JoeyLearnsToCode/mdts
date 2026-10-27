"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_rescript"],{

/***/ "./node_modules/refractor/lang/rescript.js"
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/rescript.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rescript)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nrescript.displayName = 'rescript'\nrescript.aliases = ['res']\n\n/** @param {Refractor} Prism */\nfunction rescript(Prism) {\n  Prism.languages.rescript = {\n    comment: {\n      pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n      greedy: true\n    },\n    char: {\n      pattern: /'(?:[^\\r\\n\\\\]|\\\\(?:.|\\w+))'/,\n      greedy: true\n    },\n    string: {\n      pattern: /\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\\\\\\r\\n\"])*\"/,\n      greedy: true\n    },\n    'class-name': /\\b[A-Z]\\w*|@[a-z.]*|#[A-Za-z]\\w*|#\\d/,\n    function: {\n      pattern: /[a-zA-Z]\\w*(?=\\()|(\\.)[a-z]\\w*/,\n      lookbehind: true\n    },\n    number:\n      /(?:\\b0x(?:[\\da-f]+(?:\\.[\\da-f]*)?|\\.[\\da-f]+)(?:p[+-]?\\d+)?|(?:\\b\\d+(?:\\.\\d*)?|\\B\\.\\d+)(?:e[+-]?\\d+)?)[ful]{0,4}/i,\n    boolean: /\\b(?:false|true)\\b/,\n    'attr-value': /[A-Za-z]\\w*(?==)/,\n    constant: {\n      pattern: /(\\btype\\s+)[a-z]\\w*/,\n      lookbehind: true\n    },\n    tag: {\n      pattern: /(<)[a-z]\\w*|(?:<\\/)[a-z]\\w*/,\n      lookbehind: true,\n      inside: {\n        operator: /<|>|\\//\n      }\n    },\n    keyword:\n      /\\b(?:and|as|assert|begin|bool|class|constraint|do|done|downto|else|end|exception|external|float|for|fun|function|if|in|include|inherit|initializer|int|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|string|switch|then|to|try|type|when|while|with)\\b/,\n    operator:\n      /\\.{3}|:[:=]?|\\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\\-*\\/]\\.?|\\b(?:asr|land|lor|lsl|lsr|lxor|mod)\\b/,\n    punctuation: /[(){}[\\],;.]/\n  }\n  Prism.languages.insertBefore('rescript', 'string', {\n    'template-string': {\n      pattern:\n        /`(?:\\\\[\\s\\S]|\\$\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})+\\}|(?!\\$\\{)[^\\\\`])*`/,\n      greedy: true,\n      inside: {\n        'template-punctuation': {\n          pattern: /^`|`$/,\n          alias: 'string'\n        },\n        interpolation: {\n          pattern:\n            /((?:^|[^\\\\])(?:\\\\{2})*)\\$\\{(?:[^{}]|\\{(?:[^{}]|\\{[^}]*\\})*\\})+\\}/,\n          lookbehind: true,\n          inside: {\n            'interpolation-punctuation': {\n              pattern: /^\\$\\{|\\}$/,\n              alias: 'tag'\n            },\n            rest: Prism.languages.rescript\n          }\n        },\n        string: /[\\s\\S]+/\n      }\n    }\n  })\n  Prism.languages.res = Prism.languages.rescript\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/rescript.js?\n}");

/***/ }

}]);