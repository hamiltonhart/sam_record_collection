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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_cards_ImageHeaderCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/cards/ImageHeaderCard */ \"./components/cards/ImageHeaderCard.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var data = _ref.data;\n  var artistData = data.artistData,\n      albumData = data.albumData; // TODO\n  // Begin creating components to handle the information above\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n        children: \"SIHIFI | Home\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Welcome to SIHIFI. Here you will find all the albums in my collection.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        children: \"SIHIFI\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_cards_ImageHeaderCard__WEBPACK_IMPORTED_MODULE_1__.ImageHeaderCard, {\n      imageSrc: artistData[1].artistImage.asset.url,\n      cardTitle: \"Artists\",\n      headingColor: \"var(--black)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_cards_ImageHeaderCard__WEBPACK_IMPORTED_MODULE_1__.ImageHeaderCard, {\n      imageSrc: albumData[0].albumArt.asset.url,\n      cardTitle: \"Albums\",\n      reverse: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n}; // const artistQuery = `*[_type == \"artist\"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;\n\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home); // const headers = {\n//   \"Content-Type\": \"application/json\",\n//   Authorization: `Discogs key=${process.env.NEXT_PUBLIC_DISCOGS_KEY}, secret=${process.env.NEXT_PUBLIC_DISCOGS_SECRET}`,\n// };\n// const myInit = { headers: headers };\n// const myRequest = new Request(\n//   \"https://api.discogs.com/masters/122963\",\n//   myInit\n// );\n// fetch(myRequest).then((response) =>\n//   response.json().then((data) => console.log(data)))\n// );\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7Ozs7QUF1QkEsSUFBTUUsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMxQyxNQUNFQyxVQURGLEdBRzBERCxJQUgxRCxDQUNFQyxVQURGO0FBQUEsTUFFRUMsU0FGRixHQUcwREYsSUFIMUQsQ0FFRUUsU0FGRixDQUQwQyxDQU0xQztBQUNBOztBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQU1FO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkYsZUFhRSw4REFBQyw4RUFBRDtBQUNFLGNBQVEsRUFBRUQsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjRSxXQUFkLENBQTBCQyxLQUExQixDQUFnQ0MsR0FENUM7QUFFRSxlQUFTLEVBQUMsU0FGWjtBQUdFLGtCQUFZLEVBQUM7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUFrQkUsOERBQUMsOEVBQUQ7QUFDRSxjQUFRLEVBQUVILFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUksUUFBYixDQUFzQkYsS0FBdEIsQ0FBNEJDLEdBRHhDO0FBRUUsZUFBUyxFQUFDLFFBRlo7QUFHRSxhQUFPLEVBQUU7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUEsa0JBREY7QUEwQkQsQ0FuQ0QsRUFxQ0E7OztLQXJDTU47O0FBd0ROLCtEQUFlQSxJQUFmLEdBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBJbWFnZUhlYWRlckNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkcy9JbWFnZUhlYWRlckNhcmRcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nbG9iYWwvc3R5bGVzL0NvbnRhaW5lcnNcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcblxuaW50ZXJmYWNlIEFsYnVtRGF0YSB7XG4gIF9pZDogc3RyaW5nO1xuICBhbGJ1bU5hbWU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBcnRpc3REYXRhIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGFydGlzdE5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERhdGEge1xuICBhcnRpc3REYXRhOiBBcnRpc3REYXRhW107XG4gIGFsYnVtRGF0YTogQWxidW1EYXRhW107XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IERhdGE7XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPFByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgYXJ0aXN0RGF0YSxcbiAgICBhbGJ1bURhdGEsXG4gIH06IHsgYXJ0aXN0RGF0YTogQXJ0aXN0RGF0YVtdOyBhbGJ1bURhdGE6IEFsYnVtRGF0YVtdIH0gPSBkYXRhO1xuXG4gIC8vIFRPRE9cbiAgLy8gQmVnaW4gY3JlYXRpbmcgY29tcG9uZW50cyB0byBoYW5kbGUgdGhlIGluZm9ybWF0aW9uIGFib3ZlXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TSUhJRkkgfCBIb21lPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJXZWxjb21lIHRvIFNJSElGSS4gSGVyZSB5b3Ugd2lsbCBmaW5kIGFsbCB0aGUgYWxidW1zIGluIG15IGNvbGxlY3Rpb24uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPlNJSElGSTwvaDE+XG4gICAgICA8L21haW4+XG4gICAgICA8SW1hZ2VIZWFkZXJDYXJkXG4gICAgICAgIGltYWdlU3JjPXthcnRpc3REYXRhWzFdLmFydGlzdEltYWdlLmFzc2V0LnVybH1cbiAgICAgICAgY2FyZFRpdGxlPVwiQXJ0aXN0c1wiXG4gICAgICAgIGhlYWRpbmdDb2xvcj1cInZhcigtLWJsYWNrKVwiXG4gICAgICAvPlxuICAgICAgPEltYWdlSGVhZGVyQ2FyZFxuICAgICAgICBpbWFnZVNyYz17YWxidW1EYXRhWzBdLmFsYnVtQXJ0LmFzc2V0LnVybH1cbiAgICAgICAgY2FyZFRpdGxlPVwiQWxidW1zXCJcbiAgICAgICAgcmV2ZXJzZT17dHJ1ZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBjb25zdCBhcnRpc3RRdWVyeSA9IGAqW190eXBlID09IFwiYXJ0aXN0XCJde2FydGlzdE5hbWUsIGFsYnVtc1tdIC0+IHthbGJ1bU5hbWUsIGFsYnVtWWVhciwgZ2VucmVzW10gLT4ge2dlbnJlTmFtZX0sIHZpYmVzW10gLT4ge3ZpYmVOYW1lfX19IHwgb3JkZXIoYXJ0aXN0TmFtZSBhc2MpYDtcblxuY29uc3QgYXJ0aXN0UXVlcnkgPSBgKltfdHlwZSA9PSBcImFydGlzdFwiXVswLi4uMTBde19pZCwgYXJ0aXN0TmFtZSwgZGlzY29nc0FydGlzdElkLCBhcnRpc3RJbWFnZXthc3NldC0+e3VybH19fWA7XG5jb25zdCBhbGJ1bVF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJhbGJ1bVwiXVswLi4uMTBde19pZCwgYWxidW1OYW1lLCBhbGJ1bUFydHthc3NldC0+e3VybH19fWA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYXJ0aXN0RGF0YTogYW55ID0gYXdhaXQgY2xpZW50LmZldGNoKGFydGlzdFF1ZXJ5KTtcbiAgY29uc3QgYWxidW1EYXRhOiBhbnkgPSBhd2FpdCBjbGllbnQuZmV0Y2goYWxidW1RdWVyeSk7XG5cbiAgY29uc3QgZGF0YSA9IHsgYXJ0aXN0RGF0YSwgYWxidW1EYXRhIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbi8vIGNvbnN0IGhlYWRlcnMgPSB7XG4vLyAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICBBdXRob3JpemF0aW9uOiBgRGlzY29ncyBrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ESVNDT0dTX0tFWX0sIHNlY3JldD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RJU0NPR1NfU0VDUkVUfWAsXG4vLyB9O1xuXG4vLyBjb25zdCBteUluaXQgPSB7IGhlYWRlcnM6IGhlYWRlcnMgfTtcblxuLy8gY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXG4vLyAgIFwiaHR0cHM6Ly9hcGkuZGlzY29ncy5jb20vbWFzdGVycy8xMjI5NjNcIixcbi8vICAgbXlJbml0XG4vLyApO1xuXG4vLyBmZXRjaChteVJlcXVlc3QpLnRoZW4oKHJlc3BvbnNlKSA9PlxuLy8gICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpKVxuLy8gKTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2VIZWFkZXJDYXJkIiwiSG9tZSIsImRhdGEiLCJhcnRpc3REYXRhIiwiYWxidW1EYXRhIiwiYXJ0aXN0SW1hZ2UiLCJhc3NldCIsInVybCIsImFsYnVtQXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});