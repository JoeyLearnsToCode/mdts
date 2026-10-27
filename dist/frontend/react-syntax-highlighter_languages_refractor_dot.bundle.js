"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_dot"],{

/***/ "./node_modules/refractor/lang/dot.js"
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/dot.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dot)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ndot.displayName = 'dot'\ndot.aliases = ['gv']\n\n/** @param {Refractor} Prism */\nfunction dot(Prism) {\n  // https://www.graphviz.org/doc/info/lang.html\n\n  ;(function (Prism) {\n    var ID =\n      '(?:' +\n      [\n        // an identifier\n        /[a-zA-Z_\\x80-\\uFFFF][\\w\\x80-\\uFFFF]*/.source,\n        // a number\n        /-?(?:\\.\\d+|\\d+(?:\\.\\d*)?)/.source,\n        // a double-quoted string\n        /\"[^\"\\\\]*(?:\\\\[\\s\\S][^\"\\\\]*)*\"/.source,\n        // HTML-like string\n        /<(?:[^<>]|(?!<!--)<(?:[^<>\"']|\"[^\"]*\"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/\n          .source\n      ].join('|') +\n      ')'\n    var IDInside = {\n      markup: {\n        pattern: /(^<)[\\s\\S]+(?=>$)/,\n        lookbehind: true,\n        alias: ['language-markup', 'language-html', 'language-xml'],\n        inside: Prism.languages.markup\n      }\n    }\n\n    /**\n     * @param {string} source\n     * @param {string} flags\n     * @returns {RegExp}\n     */\n    function withID(source, flags) {\n      return RegExp(\n        source.replace(/<ID>/g, function () {\n          return ID\n        }),\n        flags\n      )\n    }\n    Prism.languages.dot = {\n      comment: {\n        pattern: /\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/|^#.*/m,\n        greedy: true\n      },\n      'graph-name': {\n        pattern: withID(\n          /(\\b(?:digraph|graph|subgraph)[ \\t\\r\\n]+)<ID>/.source,\n          'i'\n        ),\n        lookbehind: true,\n        greedy: true,\n        alias: 'class-name',\n        inside: IDInside\n      },\n      'attr-value': {\n        pattern: withID(/(=[ \\t\\r\\n]*)<ID>/.source),\n        lookbehind: true,\n        greedy: true,\n        inside: IDInside\n      },\n      'attr-name': {\n        pattern: withID(/([\\[;, \\t\\r\\n])<ID>(?=[ \\t\\r\\n]*=)/.source),\n        lookbehind: true,\n        greedy: true,\n        inside: IDInside\n      },\n      keyword: /\\b(?:digraph|edge|graph|node|strict|subgraph)\\b/i,\n      'compass-point': {\n        pattern: /(:[ \\t\\r\\n]*)(?:[ewc_]|[ns][ew]?)(?![\\w\\x80-\\uFFFF])/,\n        lookbehind: true,\n        alias: 'builtin'\n      },\n      node: {\n        pattern: withID(/(^|[^-.\\w\\x80-\\uFFFF\\\\])<ID>/.source),\n        lookbehind: true,\n        greedy: true,\n        inside: IDInside\n      },\n      operator: /[=:]|-[->]/,\n      punctuation: /[\\[\\]{};,]/\n    }\n    Prism.languages.gv = Prism.languages.dot\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/dot.js?\n}");

/***/ }

}]);