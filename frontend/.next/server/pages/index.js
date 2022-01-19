"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/artist/ArtistHome.tsx":
/*!******************************************!*\
  !*** ./components/artist/ArtistHome.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ArtistHome = (props)=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n        variant: \"h2\",\n        __source: {\n            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/components/artist/ArtistHome.tsx\",\n            lineNumber: 8,\n            columnNumber: 10\n        },\n        __self: undefined,\n        children: props.artistName\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistHome);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FydGlzdC9BcnRpc3RIb21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFNMUMsS0FBSyxDQUFDQyxVQUFVLElBQUlDLEtBQVksR0FBSyxDQUFDO0lBQ3BDLE1BQU0sc0VBQUVGLHFEQUFVO1FBQUNHLE9BQU8sRUFBQyxDQUFJOzs7Ozs7O2tCQUFFRCxLQUFLLENBQUNFLFVBQVU7O0FBQ25ELENBQUM7QUFFRCxpRUFBZUgsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtLXJlY29yZC1jb2xsZWN0aW9uLy4vY29tcG9uZW50cy9hcnRpc3QvQXJ0aXN0SG9tZS50c3g/YjNhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXJ0aXN0TmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBBcnRpc3RIb21lID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICByZXR1cm4gPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCI+e3Byb3BzLmFydGlzdE5hbWV9PC9UeXBvZ3JhcGh5Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGlzdEhvbWU7XG4iXSwibmFtZXMiOlsiVHlwb2dyYXBoeSIsIkFydGlzdEhvbWUiLCJwcm9wcyIsInZhcmlhbnQiLCJhcnRpc3ROYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/artist/ArtistHome.tsx\n");

/***/ }),

/***/ "./lib/sanity.tsx":
/*!************************!*\
  !*** ./lib/sanity.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: process.env.PROJECT_ID,\n    dataset: \"production\",\n    token: process.env.API_TOKEN,\n    useCdn: false,\n    ignoreBrowserTokenWarning: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsS0FBSyxDQUFDQyxNQUFNLEdBTVJELHFEQUFZLENBQUMsQ0FBQztJQUNoQkUsU0FBUyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNqQ0MsT0FBTyxFQUFFLENBQVk7SUFDckJDLEtBQUssRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVM7SUFDNUJDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLHlCQUF5QixFQUFFLElBQUk7QUFDakMsQ0FBQztBQUVELGlFQUFlVCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW0tcmVjb3JkLWNvbGxlY3Rpb24vLi9saWIvc2FuaXR5LnRzeD81Y2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmNvbnN0IGNsaWVudDoge1xuICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgZGF0YXNldDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICB1c2VDZG46IGJvb2xlYW47XG4gIGlnbm9yZUJyb3dzZXJUb2tlbldhcm5pbmc6IGJvb2xlYW47XG59ID0gc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcbiAgdG9rZW46IHByb2Nlc3MuZW52LkFQSV9UT0tFTixcbiAgdXNlQ2RuOiBmYWxzZSxcbiAgaWdub3JlQnJvd3NlclRva2VuV2FybmluZzogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwiY2xpZW50IiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIlBST0pFQ1RfSUQiLCJkYXRhc2V0IiwidG9rZW4iLCJBUElfVE9LRU4iLCJ1c2VDZG4iLCJpZ25vcmVCcm93c2VyVG9rZW5XYXJuaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/sanity.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity */ \"./lib/sanity.tsx\");\n/* harmony import */ var _components_artist_ArtistHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/artist/ArtistHome */ \"./components/artist/ArtistHome.tsx\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Home = ({ data  })=>{\n    const { artistData  } = data;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n            lineNumber: 33,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Musica de Iorio\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"All of Sam's Albums!\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"main\", {\n                __source: {\n                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        variant: \"h1\",\n                        align: \"center\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Sam's Music\"\n                    }),\n                    artistData.map((artist)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            __source: {\n                                fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            },\n                            __self: undefined,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_artist_ArtistHome__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                artistName: artist.artistName,\n                                __source: {\n                                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                },\n                                __self: undefined\n                            })\n                        }, artist.artistName)\n                    )\n                ]\n            })\n        ]\n    }));\n};\n// const artistQuery = `*[_type == \"artist\"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;\nconst artistQuery = `*[_type == \"artist\"]{artistName}`;\nasync function getStaticProps() {\n    const artistData = await _lib_sanity__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(artistQuery);\n    const data = {\n        artistData\n    };\n    return {\n        props: {\n            data\n        },\n        revalidate: 1\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFDTTtBQUVzQjtBQUVQO0FBc0JqRCxLQUFLLENBQUNJLElBQUksSUFBcUIsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxFQUFDLENBQUMsR0FBaUNELElBQUk7SUFFekQsTUFBTSx1RUFDSEUsQ0FBRzs7Ozs7Ozs7a0ZBQ0RQLGtEQUFJOzs7Ozs7Ozt5RkFDRlEsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFlOzt5RkFDckJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBc0I7Ozs7Ozs7O3lGQUN0REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2tGQUdyQ0MsQ0FBSTs7Ozs7Ozs7eUZBQ0ZaLGlFQUFVO3dCQUFDYSxPQUFPLEVBQUMsQ0FBSTt3QkFBQ0MsS0FBSyxFQUFDLENBQVE7Ozs7Ozs7a0NBQUMsQ0FFeEM7O29CQUNDWCxVQUFVLENBQUNZLEdBQUcsRUFBRUMsTUFBa0Isd0VBQ2hDWixDQUFHOzs7Ozs7OzJHQUNETCxxRUFBVTtnQ0FBQ2tCLFVBQVUsRUFBRUQsTUFBTSxDQUFDQyxVQUFVOzs7Ozs7OzsyQkFEakNELE1BQU0sQ0FBQ0MsVUFBVTs7Ozs7O0FBT3JDLENBQUM7QUFFRCxFQUFzSztBQUV0SyxLQUFLLENBQUNDLFdBQVcsSUFBSSxnQ0FBZ0M7QUFFOUMsZUFBZUMsY0FBYyxHQUFHLENBQUM7SUFDdEMsS0FBSyxDQUFDaEIsVUFBVSxHQUFRLEtBQUssQ0FBQ0wseURBQVksQ0FBQ29CLFdBQVc7SUFFdEQsS0FBSyxDQUFDaEIsSUFBSSxHQUFHLENBQUM7UUFBQ0MsVUFBVTtJQUFDLENBQUM7SUFFM0IsTUFBTSxDQUFDLENBQUM7UUFDTmtCLEtBQUssRUFBRSxDQUFDO1lBQ05uQixJQUFJO1FBQ04sQ0FBQztRQUNEb0IsVUFBVSxFQUFFLENBQUM7SUFDZixDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlckIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FtLXJlY29yZC1jb2xsZWN0aW9uLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9saWIvc2FuaXR5XCI7XG5cbmltcG9ydCBBcnRpc3RIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL2FydGlzdC9BcnRpc3RIb21lXCI7XG5cbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcblxuaW50ZXJmYWNlIEFsYnVtRGF0YSB7XG4gIGFsYnVtTmFtZT86IHN0cmluZztcbiAgYWxidW1ZZWFyPzogc3RyaW5nO1xuICBnZW5yZXM/OiBzdHJpbmdbXTtcbiAgdmliZXM/OiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIEFydGlzdERhdGEge1xuICBhcnRpc3ROYW1lOiBzdHJpbmc7XG4gIGFsYnVtcz86IEFsYnVtRGF0YVtdO1xufVxuXG5pbnRlcmZhY2UgRGF0YSB7XG4gIGFydGlzdERhdGE6IEFydGlzdERhdGFbXTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YTogRGF0YTtcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2U8UHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgYXJ0aXN0RGF0YSB9OiB7IGFydGlzdERhdGE6IEFydGlzdERhdGFbXSB9ID0gZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk11c2ljYSBkZSBJb3JpbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBbGwgb2YgU2FtJ3MgQWxidW1zIVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgU2FtJ3MgTXVzaWNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICB7YXJ0aXN0RGF0YS5tYXAoKGFydGlzdDogQXJ0aXN0RGF0YSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXthcnRpc3QuYXJ0aXN0TmFtZX0+XG4gICAgICAgICAgICA8QXJ0aXN0SG9tZSBhcnRpc3ROYW1lPXthcnRpc3QuYXJ0aXN0TmFtZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBjb25zdCBhcnRpc3RRdWVyeSA9IGAqW190eXBlID09IFwiYXJ0aXN0XCJde2FydGlzdE5hbWUsIGFsYnVtc1tdIC0+IHthbGJ1bU5hbWUsIGFsYnVtWWVhciwgZ2VucmVzW10gLT4ge2dlbnJlTmFtZX0sIHZpYmVzW10gLT4ge3ZpYmVOYW1lfX19IHwgb3JkZXIoYXJ0aXN0TmFtZSBhc2MpYDtcblxuY29uc3QgYXJ0aXN0UXVlcnkgPSBgKltfdHlwZSA9PSBcImFydGlzdFwiXXthcnRpc3ROYW1lfWA7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYXJ0aXN0RGF0YTogYW55ID0gYXdhaXQgY2xpZW50LmZldGNoKGFydGlzdFF1ZXJ5KTtcblxuICBjb25zdCBkYXRhID0geyBhcnRpc3REYXRhIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsImNsaWVudCIsIkFydGlzdEhvbWUiLCJUeXBvZ3JhcGh5IiwiSG9tZSIsImRhdGEiLCJhcnRpc3REYXRhIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJ2YXJpYW50IiwiYWxpZ24iLCJtYXAiLCJhcnRpc3QiLCJhcnRpc3ROYW1lIiwiYXJ0aXN0UXVlcnkiLCJnZXRTdGF0aWNQcm9wcyIsImZldGNoIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();