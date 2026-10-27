"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_mdts_frontend"] = self["webpackChunk_mdts_frontend"] || []).push([["react-syntax-highlighter_languages_refractor_shellSession"],{

/***/ "./node_modules/refractor/lang/shell-session.js"
/*!******************************************************!*\
  !*** ./node_modules/refractor/lang/shell-session.js ***!
  \******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shellSession)\n/* harmony export */ });\n/* harmony import */ var _bash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bash.js */ \"./node_modules/refractor/lang/bash.js\");\n// @ts-nocheck\n/**\n * @import {Refractor} from '../lib/core.js'\n */\n\nshellSession.displayName = 'shell-session'\nshellSession.aliases = ['sh-session', 'shellsession']\n\n/** @param {Refractor} Prism */\nfunction shellSession(Prism) {\n  Prism.register(_bash_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  ;(function (Prism) {\n    // CAREFUL!\n    // The following patterns are concatenated, so the group referenced by a back reference is non-obvious!\n\n    var strings = [\n      // normal string\n      /\"(?:\\\\[\\s\\S]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|[^\"\\\\`$])*\"/.source,\n      /'[^']*'/.source,\n      /\\$'(?:[^'\\\\]|\\\\[\\s\\S])*'/.source,\n      // here doc\n      // 2 capturing groups\n      /<<-?\\s*([\"']?)(\\w+)\\1\\s[\\s\\S]*?[\\r\\n]\\2/.source\n    ].join('|')\n    Prism.languages['shell-session'] = {\n      command: {\n        pattern: RegExp(\n          // user info\n          /^/.source +\n            '(?:' +\n            // <user> \":\" ( <path> )?\n            (/[^\\s@:$#%*!/\\\\]+@[^\\r\\n@:$#%*!/\\\\]+(?::[^\\0-\\x1F$#%*?\"<>:;|]+)?/\n              .source +\n              '|' +\n              // <path>\n              // Since the path pattern is quite general, we will require it to start with a special character to\n              // prevent false positives.\n              /[/~.][^\\0-\\x1F$#%*?\"<>@:;|]*/.source) +\n            ')?' +\n            // shell symbol\n            /[$#%](?=\\s)/.source +\n            // bash command\n            /(?:[^\\\\\\r\\n \\t'\"<$]|[ \\t](?:(?!#)|#.*$)|\\\\(?:[^\\r]|\\r\\n?)|\\$(?!')|<(?!<)|<<str>>)+/.source.replace(\n              /<<str>>/g,\n              function () {\n                return strings\n              }\n            ),\n          'm'\n        ),\n        greedy: true,\n        inside: {\n          info: {\n            // foo@bar:~/files$ exit\n            // foo@bar$ exit\n            // ~/files$ exit\n            pattern: /^[^#$%]+/,\n            alias: 'punctuation',\n            inside: {\n              user: /^[^\\s@:$#%*!/\\\\]+@[^\\r\\n@:$#%*!/\\\\]+/,\n              punctuation: /:/,\n              path: /[\\s\\S]+/\n            }\n          },\n          bash: {\n            pattern: /(^[$#%]\\s*)\\S[\\s\\S]*/,\n            lookbehind: true,\n            alias: 'language-bash',\n            inside: Prism.languages.bash\n          },\n          'shell-symbol': {\n            pattern: /^[$#%]/,\n            alias: 'important'\n          }\n        }\n      },\n      output: /.(?:.*(?:[\\r\\n]|.$))*/\n    }\n    Prism.languages['sh-session'] = Prism.languages['shellsession'] =\n      Prism.languages['shell-session']\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://@mdts/frontend/./node_modules/refractor/lang/shell-session.js?\n}");

/***/ }

}]);