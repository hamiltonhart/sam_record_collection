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

/***/ "./lib/sanity.tsx":
/*!************************!*\
  !*** ./lib/sanity.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: process.env.PROJECT_ID,\n    dataset: \"production\",\n    token: process.env.API_TOKEN,\n    useCdn: false,\n    ignoreBrowserTokenWarning: true\n});\n// export const dK = process.env.DISCOGS_KEY;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2FuaXR5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsS0FBSyxDQUFDQyxNQUFNLEdBTVJELHFEQUFZLENBQUMsQ0FBQztJQUNoQkUsU0FBUyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNqQ0MsT0FBTyxFQUFFLENBQVk7SUFDckJDLEtBQUssRUFBRUosT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVM7SUFDNUJDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLHlCQUF5QixFQUFFLElBQUk7QUFDakMsQ0FBQztBQUVELEVBQTZDO0FBRTdDLGlFQUFlVCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW0tcmVjb3JkLWNvbGxlY3Rpb24vLi9saWIvc2FuaXR5LnRzeD81Y2FjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIkBzYW5pdHkvY2xpZW50XCI7XG5cbmNvbnN0IGNsaWVudDoge1xuICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgZGF0YXNldDogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xuICB1c2VDZG46IGJvb2xlYW47XG4gIGlnbm9yZUJyb3dzZXJUb2tlbldhcm5pbmc6IGJvb2xlYW47XG59ID0gc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxuICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcbiAgdG9rZW46IHByb2Nlc3MuZW52LkFQSV9UT0tFTixcbiAgdXNlQ2RuOiBmYWxzZSxcbiAgaWdub3JlQnJvd3NlclRva2VuV2FybmluZzogdHJ1ZSxcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgZEsgPSBwcm9jZXNzLmVudi5ESVNDT0dTX0tFWTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsImNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJQUk9KRUNUX0lEIiwiZGF0YXNldCIsInRva2VuIiwiQVBJX1RPS0VOIiwidXNlQ2RuIiwiaWdub3JlQnJvd3NlclRva2VuV2FybmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sanity.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/sanity */ \"./lib/sanity.tsx\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst Home = ({ data: data1  })=>{\n    const { artistData  } = data1;\n    const { 0: clicked , 1: setClicked  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    // Album: https://api.discogs.com/masters/\n    // Artist: https://api.discogs.com/artists/\n    const buttonPress = ()=>{\n        // fetch(`https://api.discogs.com/masters/122963`)\n        //   .then((response) => response.json())\n        //   .then((data) => console.log(data));\n        const headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: `Discogs key=${\"FvZXwLvnOMDdLNkwFYXO\"}, secret=${\"RpeabDZHvkpziUPXTJXtnUojchKIkDqo\"}`\n        };\n        const myInit = {\n            headers: headers\n        };\n        const myRequest = new Request(\"https://api.discogs.com/masters/122963\", myInit);\n        fetch(myRequest).then((response)=>response.json().then((data)=>setClicked(data.images[0].uri)\n            )\n        );\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n            lineNumber: 62,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                __source: {\n                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Musica de Iorio\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"All of Sam's Albums!\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n                __source: {\n                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    variant: \"h1\",\n                    align: \"center\",\n                    __source: {\n                        fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"Sam's Music\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"contained\",\n                        onClick: ()=>buttonPress()\n                        ,\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Push Me\"\n                    }),\n                    clicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        __source: {\n                            fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        },\n                        __self: undefined,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: clicked,\n                            __source: {\n                                fileName: \"/home/georgehart/Documents/Code/sam_record_collection/frontend/pages/index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            },\n                            __self: undefined\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n// const artistQuery = `*[_type == \"artist\"]{artistName, albums[] -> {albumName, albumYear, genres[] -> {genreName}, vibes[] -> {vibeName}}} | order(artistName asc)`;\nconst artistQuery = `*[_type == \"artist\"]{artistName}`;\nasync function getStaticProps() {\n    const artistData = await _lib_sanity__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetch(artistQuery);\n    const data = {\n        artistData\n    };\n    return {\n        props: {\n            data\n        },\n        revalidate: 1\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFDTTtBQUllO0FBQ1g7QUFDTjtBQXNCaEMsS0FBSyxDQUFDSyxJQUFJLElBQXFCLENBQUMsQ0FBQ0MsSUFBSSxFQUFKQSxLQUFJLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxFQUFDLENBQUMsR0FBaUNELEtBQUk7SUFFekQsS0FBSyxNQUFFRSxPQUFPLE1BQUVDLFVBQVUsTUFBSUwsK0NBQVEsQ0FBQyxDQUFFO0lBRXpDLEVBQTBDO0lBQzFDLEVBQTJDO0lBRTNDLEtBQUssQ0FBQ00sV0FBVyxPQUFTLENBQUM7UUFDekIsRUFBa0Q7UUFDbEQsRUFBeUM7UUFDekMsRUFBd0M7UUFFeEMsS0FBSyxDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUNmLENBQWMsZUFBRSxDQUFrQjtZQUNsQ0MsYUFBYSxHQUFHLFlBQVksRUFBRUMsc0JBQW1DLENBQUMsU0FBUyxFQUFFQSxrQ0FBc0M7UUFDckgsQ0FBQztRQUVELEtBQUssQ0FBQ0ksTUFBTSxHQUFHLENBQUM7WUFBQ04sT0FBTyxFQUFFQSxPQUFPO1FBQUMsQ0FBQztRQUVuQyxLQUFLLENBQUNPLFNBQVMsR0FBRyxHQUFHLENBQUNDLE9BQU8sQ0FDM0IsQ0FBd0MseUNBQ3hDRixNQUFNO1FBR1JHLEtBQUssQ0FBQ0YsU0FBUyxFQUFFRyxJQUFJLEVBQUVDLFFBQVEsR0FDN0JBLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHRixJQUFJLEVBQUVmLElBQUksR0FBS0csVUFBVSxDQUFDSCxJQUFJLENBQUNrQixNQUFNLENBQUMsQ0FBQyxFQUFFQyxHQUFHOzs7SUFFaEUsQ0FBQztJQUVELE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7O2tGQUNEMUIsa0RBQUk7Ozs7Ozs7O3lGQUNGMkIsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFlOzt5RkFDckJDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBc0I7Ozs7Ozs7O3lGQUN0REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7O2lGQUdyQ0MsQ0FBSTs7Ozs7OzsrRkFDRmhDLGlFQUFVO29CQUFDaUMsT0FBTyxFQUFDLENBQUk7b0JBQUNDLEtBQUssRUFBQyxDQUFROzs7Ozs7OzhCQUFDLENBRXhDOzs7a0ZBRURWLENBQUc7Ozs7Ozs7O3lGQUNEdkIsaURBQU07d0JBQUNnQyxPQUFPLEVBQUMsQ0FBVzt3QkFBQ0UsT0FBTyxNQUFRM0IsV0FBVzs7Ozs7Ozs7a0NBQUksQ0FFMUQ7O29CQUNDRixPQUFPLHlFQUNMOEIsQ0FBQzs7Ozs7Ozt1R0FDQ0MsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFFaEMsT0FBTzs7Ozs7Ozs7Ozs7OztBQU03QixDQUFDO0FBRUQsRUFBc0s7QUFFdEssS0FBSyxDQUFDaUMsV0FBVyxJQUFJLGdDQUFnQztBQUU5QyxlQUFlQyxjQUFjLEdBQUcsQ0FBQztJQUN0QyxLQUFLLENBQUNuQyxVQUFVLEdBQVEsS0FBSyxDQUFDTix5REFBWSxDQUFDd0MsV0FBVztJQUV0RCxLQUFLLENBQUNuQyxJQUFJLEdBQUcsQ0FBQztRQUFDQyxVQUFVO0lBQUMsQ0FBQztJQUUzQixNQUFNLENBQUMsQ0FBQztRQUNOb0MsS0FBSyxFQUFFLENBQUM7WUFDTnJDLElBQUk7UUFDTixDQUFDO1FBQ0RzQyxVQUFVLEVBQUUsQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWV2QyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW0tcmVjb3JkLWNvbGxlY3Rpb24vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2xpYi9zYW5pdHlcIjtcblxuaW1wb3J0IEFydGlzdEhvbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJ0aXN0L0FydGlzdEhvbWVcIjtcblxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBBbGJ1bURhdGEge1xuICBhbGJ1bU5hbWU/OiBzdHJpbmc7XG4gIGFsYnVtWWVhcj86IHN0cmluZztcbiAgZ2VucmVzPzogc3RyaW5nW107XG4gIHZpYmVzPzogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBBcnRpc3REYXRhIHtcbiAgYXJ0aXN0TmFtZTogc3RyaW5nO1xuICBhbGJ1bXM/OiBBbGJ1bURhdGFbXTtcbn1cblxuaW50ZXJmYWNlIERhdGEge1xuICBhcnRpc3REYXRhOiBBcnRpc3REYXRhW107XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IERhdGE7XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPFByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCB7IGFydGlzdERhdGEgfTogeyBhcnRpc3REYXRhOiBBcnRpc3REYXRhW10gfSA9IGRhdGE7XG5cbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gQWxidW06IGh0dHBzOi8vYXBpLmRpc2NvZ3MuY29tL21hc3RlcnMvXG4gIC8vIEFydGlzdDogaHR0cHM6Ly9hcGkuZGlzY29ncy5jb20vYXJ0aXN0cy9cblxuICBjb25zdCBidXR0b25QcmVzcyA9ICgpID0+IHtcbiAgICAvLyBmZXRjaChgaHR0cHM6Ly9hcGkuZGlzY29ncy5jb20vbWFzdGVycy8xMjI5NjNgKVxuICAgIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4gY29uc29sZS5sb2coZGF0YSkpO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYERpc2NvZ3Mga2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRElTQ09HU19LRVl9LCBzZWNyZXQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ESVNDT0dTX1NFQ1JFVH1gLFxuICAgIH07XG5cbiAgICBjb25zdCBteUluaXQgPSB7IGhlYWRlcnM6IGhlYWRlcnMgfTtcblxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxuICAgICAgXCJodHRwczovL2FwaS5kaXNjb2dzLmNvbS9tYXN0ZXJzLzEyMjk2M1wiLFxuICAgICAgbXlJbml0XG4gICAgKTtcblxuICAgIGZldGNoKG15UmVxdWVzdCkudGhlbigocmVzcG9uc2UpID0+XG4gICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4gc2V0Q2xpY2tlZChkYXRhLmltYWdlc1swXS51cmkpKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NdXNpY2EgZGUgSW9yaW88L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQWxsIG9mIFNhbSdzIEFsYnVtcyFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIFNhbSdzIE11c2ljXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9eygpID0+IGJ1dHRvblByZXNzKCl9PlxuICAgICAgICAgIFB1c2ggTWVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHtjbGlja2VkICYmIChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjbGlja2VkfSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gY29uc3QgYXJ0aXN0UXVlcnkgPSBgKltfdHlwZSA9PSBcImFydGlzdFwiXXthcnRpc3ROYW1lLCBhbGJ1bXNbXSAtPiB7YWxidW1OYW1lLCBhbGJ1bVllYXIsIGdlbnJlc1tdIC0+IHtnZW5yZU5hbWV9LCB2aWJlc1tdIC0+IHt2aWJlTmFtZX19fSB8IG9yZGVyKGFydGlzdE5hbWUgYXNjKWA7XG5cbmNvbnN0IGFydGlzdFF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJhcnRpc3RcIl17YXJ0aXN0TmFtZX1gO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFydGlzdERhdGE6IGFueSA9IGF3YWl0IGNsaWVudC5mZXRjaChhcnRpc3RRdWVyeSk7XG5cbiAgY29uc3QgZGF0YSA9IHsgYXJ0aXN0RGF0YSB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJjbGllbnQiLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsImFydGlzdERhdGEiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImJ1dHRvblByZXNzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRElTQ09HU19LRVkiLCJORVhUX1BVQkxJQ19ESVNDT0dTX1NFQ1JFVCIsIm15SW5pdCIsIm15UmVxdWVzdCIsIlJlcXVlc3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJpbWFnZXMiLCJ1cmkiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsInZhcmlhbnQiLCJhbGlnbiIsIm9uQ2xpY2siLCJwIiwiaW1nIiwic3JjIiwiYXJ0aXN0UXVlcnkiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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