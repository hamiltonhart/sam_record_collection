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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cards_ImageHeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cards/ImageHeaderCard */ \"./components/cards/ImageHeaderCard.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var data = _ref.data;\n  var artistData = data.artistData,\n      albumData = data.albumData; // TODO\n  // Begin creating components to handle the information above\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [console.log(artistData[1].artistImage.asset.url), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: \"SIHIFI | Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Welcome to SIHIFI. Here you will find all the albums in my collection.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        children: \"SIHIFI\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_cards_ImageHeaderCard__WEBPACK_IMPORTED_MODULE_1__.ImageHeaderCard, {\n      imageSrc: artistData[1].artistImage.asset.url,\n      cardTitle: \"Artists\",\n      headingColor: \"var(--black)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n}; // const artistQuery = `*[_type == \"artist\"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;\n\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const headers = {\n//   \"Content-Type\": \"application/json\",\n//   Authorization: `Discogs key=${process.env.NEXT_PUBLIC_DISCOGS_KEY}, secret=${process.env.NEXT_PUBLIC_DISCOGS_SECRET}`,\n// };\n// const myInit = { headers: headers };\n// const myRequest = new Request(\n//   \"https://api.discogs.com/masters/122963\",\n//   myInit\n// );\n// fetch(myRequest).then((response) =>\n//   response.json().then((data) => console.log(data)))\n// );\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7Ozs7QUF1QkEsSUFBTUUsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMxQyxNQUNFQyxVQURGLEdBRzBERCxJQUgxRCxDQUNFQyxVQURGO0FBQUEsTUFFRUMsU0FGRixHQUcwREYsSUFIMUQsQ0FFRUUsU0FGRixDQUQwQyxDQU0xQztBQUNBOztBQUVBLHNCQUNFO0FBQUEsZUFDR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0ksV0FBZCxDQUEwQkMsS0FBMUIsQ0FBZ0NDLEdBQTVDLENBREgsZUFFRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBTUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBV0U7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYRixlQWNFLDhEQUFDLDhFQUFEO0FBQ0UsY0FBUSxFQUFFTixVQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNJLFdBQWQsQ0FBMEJDLEtBQTFCLENBQWdDQyxHQUQ1QztBQUVFLGVBQVMsRUFBQyxTQUZaO0FBR0Usa0JBQVksRUFBQztBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBLGtCQURGO0FBc0JELENBL0JELEVBaUNBOzs7S0FqQ01SOztBQW9ETiwrREFBZUEsSUFBZixHQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgSW1hZ2VIZWFkZXJDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvSW1hZ2VIZWFkZXJDYXJkXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsL3N0eWxlcy9Db250YWluZXJzXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5cbmludGVyZmFjZSBBbGJ1bURhdGEge1xuICBfaWQ6IHN0cmluZztcbiAgYWxidW1OYW1lPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQXJ0aXN0RGF0YSB7XG4gIF9pZDogc3RyaW5nO1xuICBhcnRpc3ROYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBEYXRhIHtcbiAgYXJ0aXN0RGF0YTogQXJ0aXN0RGF0YVtdO1xuICBhbGJ1bURhdGE6IEFsYnVtRGF0YVtdO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhOiBEYXRhO1xufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGFydGlzdERhdGEsXG4gICAgYWxidW1EYXRhLFxuICB9OiB7IGFydGlzdERhdGE6IEFydGlzdERhdGFbXTsgYWxidW1EYXRhOiBBbGJ1bURhdGFbXSB9ID0gZGF0YTtcblxuICAvLyBUT0RPXG4gIC8vIEJlZ2luIGNyZWF0aW5nIGNvbXBvbmVudHMgdG8gaGFuZGxlIHRoZSBpbmZvcm1hdGlvbiBhYm92ZVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtjb25zb2xlLmxvZyhhcnRpc3REYXRhWzFdLmFydGlzdEltYWdlLmFzc2V0LnVybCl9XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNJSElGSSB8IEhvbWU8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIldlbGNvbWUgdG8gU0lISUZJLiBIZXJlIHlvdSB3aWxsIGZpbmQgYWxsIHRoZSBhbGJ1bXMgaW4gbXkgY29sbGVjdGlvbi5cIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDE+U0lISUZJPC9oMT5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxJbWFnZUhlYWRlckNhcmRcbiAgICAgICAgaW1hZ2VTcmM9e2FydGlzdERhdGFbMV0uYXJ0aXN0SW1hZ2UuYXNzZXQudXJsfVxuICAgICAgICBjYXJkVGl0bGU9XCJBcnRpc3RzXCJcbiAgICAgICAgaGVhZGluZ0NvbG9yPVwidmFyKC0tYmxhY2spXCJcbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBjb25zdCBhcnRpc3RRdWVyeSA9IGAqW190eXBlID09IFwiYXJ0aXN0XCJde2FydGlzdE5hbWUsIGFsYnVtc1tdIC0+IHthbGJ1bU5hbWUsIGFsYnVtWWVhciwgZ2VucmVzW10gLT4ge2dlbnJlTmFtZX0sIHZpYmVzW10gLT4ge3ZpYmVOYW1lfX19IHwgb3JkZXIoYXJ0aXN0TmFtZSBhc2MpYDtcblxuY29uc3QgYXJ0aXN0UXVlcnkgPSBgKltfdHlwZSA9PSBcImFydGlzdFwiXVswLi4uMTBde19pZCwgYXJ0aXN0TmFtZSwgZGlzY29nc0FydGlzdElkLCBhcnRpc3RJbWFnZXthc3NldC0+e3VybH19fWA7XG5jb25zdCBhbGJ1bVF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJhbGJ1bVwiXVswLi4uMTBde19pZCwgYWxidW1OYW1lfWA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYXJ0aXN0RGF0YTogYW55ID0gYXdhaXQgY2xpZW50LmZldGNoKGFydGlzdFF1ZXJ5KTtcbiAgY29uc3QgYWxidW1EYXRhOiBhbnkgPSBhd2FpdCBjbGllbnQuZmV0Y2goYWxidW1RdWVyeSk7XG5cbiAgY29uc3QgZGF0YSA9IHsgYXJ0aXN0RGF0YSwgYWxidW1EYXRhIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8vIGNvbnN0IGhlYWRlcnMgPSB7XG4vLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICBBdXRob3JpemF0aW9uOiBgRGlzY29ncyBrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ESVNDT0dTX0tFWX0sIHNlY3JldD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RJU0NPR1NfU0VDUkVUfWAsXG4vLyB9O1xuXG4vLyBjb25zdCBteUluaXQgPSB7IGhlYWRlcnM6IGhlYWRlcnMgfTtcblxuLy8gY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXG4vLyAgIFwiaHR0cHM6Ly9hcGkuZGlzY29ncy5jb20vbWFzdGVycy8xMjI5NjNcIixcbi8vICAgbXlJbml0XG4vLyApO1xuXG4vLyBmZXRjaChteVJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PlxuLy8gICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpKVxuLy8gKTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2VIZWFkZXJDYXJkIiwiSG9tZSIsImRhdGEiLCJhcnRpc3REYXRhIiwiYWxidW1EYXRhIiwiY29uc29sZSIsImxvZyIsImFydGlzdEltYWdlIiwiYXNzZXQiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});