"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this2 = undefined;\nvar Home = function(param) {\n    var data = param.data;\n    var _this1 = _this2;\n    var artistData = data.artistData;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: _this2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: _this2,\n                        children: \"Musica de Iorio\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"All of Sam's Albums!\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        },\n                        __self: _this2\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        },\n                        __self: _this2\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                __source: {\n                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this2,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        variant: \"h1\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        },\n                        __self: _this2,\n                        children: \"Sam's Music\"\n                    }),\n                    artistData.map(function(artist) {\n                        var _this = _this1;\n                        var ref2;\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            __source: {\n                                fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                    __source: {\n                                        fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this1,\n                                    children: artist.artistName\n                                }),\n                                (ref2 = artist.albums) === null || ref2 === void 0 ? void 0 : ref2.map(function(album) {\n                                    var _this3 = _this;\n                                    var ref, ref1;\n                                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        __source: {\n                                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                                                __source: {\n                                                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: [\n                                                    album.albumName,\n                                                    \" -\",\n                                                    album.albumYear\n                                                ]\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                                __source: {\n                                                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Genres\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                                __source: {\n                                                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: (ref = album.genres) === null || ref === void 0 ? void 0 : ref.map(function(genre) {\n                                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                                        __source: {\n                                                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this3,\n                                                        children: genre.genreName\n                                                    }, \"\".concat(albumName, \" \").concat(genre.genreName));\n                                                })\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                                __source: {\n                                                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: \"Vibes\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                                __source: {\n                                                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                },\n                                                __self: _this,\n                                                children: (ref1 = album.vibes) === null || ref1 === void 0 ? void 0 : ref1.map(function(vibe) {\n                                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                                        __source: {\n                                                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 21\n                                                        },\n                                                        __self: _this3,\n                                                        children: vibe.vibeName\n                                                    }, vibe.vibe);\n                                                })\n                                            })\n                                        ]\n                                    }, album.albumName));\n                                })\n                            ]\n                        }, artist.artistName));\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEI7QUFHcUI7O0FBc0JqRCxHQUFLLENBQUNFLElBQUksR0FBb0IsUUFBUSxRQUFNLENBQUM7UUFBWkMsSUFBSSxTQUFKQSxJQUFJOztJQUNuQyxHQUFLLENBQUdDLFVBQVUsR0FBbUNELElBQUksQ0FBakRDLFVBQVU7SUFFbEIsTUFBTSx1RUFDSEMsQ0FBRzs7Ozs7Ozs7a0ZBQ0RMLGtEQUFJOzs7Ozs7Ozt5RkFDRk0sQ0FBSzs7Ozs7OztrQ0FBQyxDQUFlOzt5RkFDckJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBc0I7Ozs7Ozs7O3lGQUN0REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2tGQUdyQ0MsQ0FBSTs7Ozs7Ozs7eUZBQ0ZaLGdFQUFVO3dCQUFDYSxPQUFPLEVBQUMsQ0FBSTt3QkFBQ0MsS0FBSyxFQUFDLENBQVE7Ozs7Ozs7a0NBQUMsQ0FFeEM7O29CQUNDWCxVQUFVLENBQUNZLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQWtCOzs0QkFHOUJBLElBQWE7cUdBRmZaLENBQUc7Ozs7Ozs7O3FHQUNEYSxDQUFFOzs7Ozs7OzhDQUFFRCxNQUFNLENBQUNFLFVBQVU7O2lDQUNyQkYsSUFBYSxHQUFiQSxNQUFNLENBQUNHLE1BQU0sY0FBYkgsSUFBYSxLQUFiQSxJQUFJLENBQUpBLENBQWtCLEdBQWxCQSxJQUFJLENBQUpBLENBQWtCLEdBQWxCQSxJQUFhLENBQUVELEdBQUcsQ0FBQyxRQUFRLENBQVBLLEtBQWdCOzt3Q0FTOUJBLEdBQVksRUFRWkEsSUFBVztpSEFoQmZoQixDQUFHOzs7Ozs7OztrSEFDRGlCLENBQUU7Ozs7Ozs7O29EQUNBRCxLQUFLLENBQUNFLFNBQVM7b0RBQUMsQ0FDakI7b0RBQ0NGLEtBQUssQ0FBQ0csU0FBUzs7O2lIQUVqQkMsQ0FBRTs7Ozs7OzswREFBQyxDQUFNOztpSEFDVEMsQ0FBRTs7Ozs7OzsyREFDQUwsR0FBWSxHQUFaQSxLQUFLLENBQUNNLE1BQU0sY0FBWk4sR0FBWSxLQUFaQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFZLENBQUVMLEdBQUcsQ0FBQyxRQUFRLENBQVBZLEtBQVU7a0VBQzVCLE1BQU0sd0RBQUxDLENBQUU7Ozs7Ozs7a0VBQ0FELEtBQUssQ0FBQ0UsU0FBUzt1REFEUixHQUFlRixNQUFlLENBQTVCTCxTQUFTLEVBQUMsQ0FBQyxJQUFrQixPQUFoQkssS0FBSyxDQUFDRSxTQUFTOzs7aUhBSzNDTCxDQUFFOzs7Ozs7OzBEQUFDLENBQUs7O2lIQUNSQyxDQUFFOzs7Ozs7OzJEQUNBTCxJQUFXLEdBQVhBLEtBQUssQ0FBQ1UsS0FBSyxjQUFYVixJQUFXLEtBQVhBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQVcsQ0FBRUwsR0FBRyxDQUFDLFFBQVEsQ0FBUGdCLElBQVM7a0VBQzFCLE1BQU0sd0RBQUxILENBQUU7Ozs7Ozs7a0VBQWtCRyxJQUFJLENBQUNDLFFBQVE7dURBQXpCRCxJQUFJLENBQUNBLElBQUk7Ozs7dUNBakJkWCxLQUFLLENBQUNFLFNBQVM7OzsyQkFIbkJOLE1BQU0sQ0FBQ0UsVUFBVTs7Ozs7O0FBOEJyQyxDQUFDO0tBOUNLakIsSUFBSTs7QUErRFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG5pbnRlcmZhY2UgQWxidW1EYXRhIHtcbiAgYWxidW1OYW1lPzogc3RyaW5nO1xuICBhbGJ1bVllYXI/OiBzdHJpbmc7XG4gIGdlbnJlcz86IHN0cmluZ1tdO1xuICB2aWJlcz86IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgQXJ0aXN0RGF0YSB7XG4gIGFydGlzdE5hbWU6IHN0cmluZztcbiAgYWxidW1zPzogQWxidW1EYXRhO1xufVxuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGFydGlzdERhdGE6IEFydGlzdERhdGFbXTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogRGF0YTtcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgYXJ0aXN0RGF0YSB9OiB7IGFydGlzdERhdGE6IEFydGlzdERhdGFbXSB9ID0gZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk11c2ljYSBkZSBJb3JpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBbGwgb2YgU2FtJ3MgQWxidW1zIVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgU2FtJ3MgTXVzaWNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7YXJ0aXN0RGF0YS5tYXAoKGFydGlzdDogQXJ0aXN0RGF0YSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXthcnRpc3QuYXJ0aXN0TmFtZX0+XG4gICAgICAgICAgICA8aDE+e2FydGlzdC5hcnRpc3ROYW1lfTwvaDE+XG4gICAgICAgICAgICB7YXJ0aXN0LmFsYnVtcz8ubWFwKChhbGJ1bTogQWxidW1EYXRhKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXthbGJ1bS5hbGJ1bU5hbWV9PlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIHthbGJ1bS5hbGJ1bU5hbWV9IC1cbiAgICAgICAgICAgICAgICAgIHsvKiB7YWxidW0uYWxidW1ZZWFyICYmIGAgLSAke2FsYnVtWWVhcn1gfSAqL31cbiAgICAgICAgICAgICAgICAgIHthbGJ1bS5hbGJ1bVllYXJ9XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8aDQ+R2VucmVzPC9oND5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7YWxidW0uZ2VucmVzPy5tYXAoKGdlbnJlOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YCR7YWxidW1OYW1lfSAke2dlbnJlLmdlbnJlTmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Z2VucmUuZ2VucmVOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDQ+VmliZXM8L2g0PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHthbGJ1bS52aWJlcz8ubWFwKCh2aWJlOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dmliZS52aWJlfT57dmliZS52aWJlTmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBhcnRpc3RRdWVyeSA9IGAqW190eXBlID09IFwiYXJ0aXN0XCJde2FydGlzdE5hbWUsIGFsYnVtc1tdIC0+IHthbGJ1bU5hbWUsIGFsYnVtWWVhciwgZ2VucmVzW10gLT4ge2dlbnJlTmFtZX0sIHZpYmVzW10gLT4ge3ZpYmVOYW1lfX19IHwgb3JkZXIoYXJ0aXN0TmFtZSBhc2MpYDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhcnRpc3REYXRhOiBhbnkgPSBhd2FpdCBjbGllbnQuZmV0Y2goYXJ0aXN0UXVlcnkpO1xuXG4gIGNvbnN0IGRhdGEgPSB7IGFydGlzdERhdGEgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVHlwb2dyYXBoeSIsIkhvbWUiLCJkYXRhIiwiYXJ0aXN0RGF0YSIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwidmFyaWFudCIsImFsaWduIiwibWFwIiwiYXJ0aXN0IiwiaDEiLCJhcnRpc3ROYW1lIiwiYWxidW1zIiwiYWxidW0iLCJoMyIsImFsYnVtTmFtZSIsImFsYnVtWWVhciIsImg0IiwidWwiLCJnZW5yZXMiLCJnZW5yZSIsImxpIiwiZ2VucmVOYW1lIiwidmliZXMiLCJ2aWJlIiwidmliZU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});