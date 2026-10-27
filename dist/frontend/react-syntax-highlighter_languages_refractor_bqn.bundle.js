"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_bqn"],{

/***/ "./node_modules/refractor/lang/bqn.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/bqn.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bqn)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\nbqn.displayName = 'bqn'\nbqn.aliases = []\n\n/** @param {Refractor} Prism */\nfunction bqn(Prism) {\n  Prism.languages.bqn = {\n    shebang: {\n      pattern: /^#![ \\t]*\\/.*/,\n      alias: 'important',\n      greedy: true\n    },\n    comment: {\n      pattern: /#.*/,\n      greedy: true\n    },\n    'string-literal': {\n      pattern: /\"(?:[^\"]|\"\")*\"/,\n      greedy: true,\n      alias: 'string'\n    },\n    'character-literal': {\n      pattern: /'(?:[\\s\\S]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])'/,\n      greedy: true,\n      alias: 'char'\n    },\n    function: /•[\\w¯.∞π]+[\\w¯.∞π]*/,\n    'dot-notation-on-brackets': {\n      pattern: /\\{(?=.*\\}\\.)|\\}\\./,\n      alias: 'namespace'\n    },\n    'special-name': {\n      pattern: /(?:𝕨|𝕩|𝕗|𝕘|𝕤|𝕣|𝕎|𝕏|𝔽|𝔾|𝕊|_𝕣_|_𝕣)/,\n      alias: 'keyword'\n    },\n    'dot-notation-on-name': {\n      pattern: /[A-Za-z_][\\w¯∞π]*\\./,\n      alias: 'namespace'\n    },\n    'word-number-scientific': {\n      pattern: /\\d+(?:\\.\\d+)?[eE]¯?\\d+/,\n      alias: 'number'\n    },\n    'word-name': {\n      pattern: /[A-Za-z_][\\w¯∞π]*/,\n      alias: 'symbol'\n    },\n    'word-number': {\n      pattern:\n        /[¯∞π]?(?:\\d*\\.?\\b\\d+(?:e[+¯]?\\d+|E[+¯]?\\d+)?|¯|∞|π)(?:j¯?(?:(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:e[+¯]?\\d+|E[+¯]?\\d+)?|¯|∞|π))?/,\n      alias: 'number'\n    },\n    'null-literal': {\n      pattern: /@/,\n      alias: 'char'\n    },\n    'primitive-functions': {\n      pattern: /[-+×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!]/,\n      alias: 'operator'\n    },\n    'primitive-1-operators': {\n      pattern: /[`˜˘¨⁼⌜´˝˙]/,\n      alias: 'operator'\n    },\n    'primitive-2-operators': {\n      pattern: /[∘⊸⟜○⌾⎉⚇⍟⊘◶⎊]/,\n      alias: 'operator'\n    },\n    punctuation: /[←⇐↩(){}⟨⟩[\\]‿·⋄,.;:?]/\n  }\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/bqn.js?\n}");

/***/ }

}]);