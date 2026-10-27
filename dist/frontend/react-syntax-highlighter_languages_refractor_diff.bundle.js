"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_diff"],{

/***/ "./node_modules/refractor/lang/diff.js"
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/diff.js ***!
  \*********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ diff)\n/* harmony export */ });\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\ndiff.displayName = 'diff'\ndiff.aliases = []\n\n/** @param {Refractor} Prism */\nfunction diff(Prism) {\n  ;(function (Prism) {\n    Prism.languages.diff = {\n      coord: [\n        // Match all kinds of coord lines (prefixed by \"+++\", \"---\" or \"***\").\n        /^(?:\\*{3}|-{3}|\\+{3}).*$/m,\n        // Match \"@@ ... @@\" coord lines in unified diff.\n        /^@@.*@@$/m,\n        // Match coord lines in normal diff (starts with a number).\n        /^\\d.*$/m\n      ]\n\n      // deleted, inserted, unchanged, diff\n    }\n\n    /**\n     * A map from the name of a block to its line prefix.\n     *\n     * @type {Object<string, string>}\n     */\n    var PREFIXES = {\n      'deleted-sign': '-',\n      'deleted-arrow': '<',\n      'inserted-sign': '+',\n      'inserted-arrow': '>',\n      unchanged: ' ',\n      diff: '!'\n    }\n\n    // add a token for each prefix\n    Object.keys(PREFIXES).forEach(function (name) {\n      var prefix = PREFIXES[name]\n      var alias = []\n      if (!/^\\w+$/.test(name)) {\n        // \"deleted-sign\" -> \"deleted\"\n        alias.push(/\\w+/.exec(name)[0])\n      }\n      if (name === 'diff') {\n        alias.push('bold')\n      }\n      Prism.languages.diff[name] = {\n        pattern: RegExp(\n          '^(?:[' + prefix + '].*(?:\\r\\n?|\\n|(?![\\\\s\\\\S])))+',\n          'm'\n        ),\n        alias: alias,\n        inside: {\n          line: {\n            pattern: /(.)(?=[\\s\\S]).*(?:\\r\\n?|\\n)?/,\n            lookbehind: true\n          },\n          prefix: {\n            pattern: /[\\s\\S]/,\n            alias: /\\w+/.exec(name)[0]\n          }\n        }\n      }\n    })\n\n    // make prefixes available to Diff plugin\n    Object.defineProperty(Prism.languages.diff, 'PREFIXES', {\n      value: PREFIXES\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/diff.js?\n}");

/***/ }

}]);