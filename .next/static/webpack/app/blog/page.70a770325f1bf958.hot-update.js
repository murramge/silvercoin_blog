"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blog/page",{

/***/ "(app-pages-browser)/./layouts/ListLayoutWithTags.tsx":
/*!****************************************!*\
  !*** ./layouts/ListLayoutWithTags.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListLayoutWithTags; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var pliny_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pliny/utils/formatDate */ \"(app-pages-browser)/./node_modules/pliny/utils/formatDate.js\");\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Link */ \"(app-pages-browser)/./components/Link.tsx\");\n/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Tag */ \"(app-pages-browser)/./components/Tag.tsx\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data/siteMetadata */ \"(app-pages-browser)/./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var app_tag_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/tag-data.json */ \"(app-pages-browser)/./app/tag-data.json\");\n/* eslint-disable jsx-a11y/anchor-is-valid */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nfunction Pagination(param) {\n    let { totalPages, currentPage } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const basePath = pathname.split(\"/\")[1];\n    const prevPage = currentPage - 1 > 0;\n    const nextPage = currentPage + 1 <= totalPages;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-2 pb-8 pt-6 md:space-y-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex justify-between\",\n            children: [\n                !prevPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"cursor-auto disabled:opacity-50\",\n                    disabled: !prevPage,\n                    children: \"Previous\"\n                }, void 0, false, {\n                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                prevPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: currentPage - 1 === 1 ? \"/\".concat(basePath, \"/\") : \"/\".concat(basePath, \"/page/\").concat(currentPage - 1),\n                    rel: \"prev\",\n                    children: \"Previous\"\n                }, void 0, false, {\n                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        currentPage,\n                        \" of \",\n                        totalPages\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                !nextPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"cursor-auto disabled:opacity-50\",\n                    disabled: !nextPage,\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this),\n                nextPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\".concat(basePath, \"/page/\").concat(currentPage + 1),\n                    rel: \"next\",\n                    children: \"Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Pagination, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = Pagination;\nfunction ListLayoutWithTags(param) {\n    let { posts, title, initialDisplayPosts = [], pagination } = param;\n    _s1();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const tagCounts = app_tag_data_json__WEBPACK_IMPORTED_MODULE_6__;\n    const tagKeys = Object.keys(tagCounts);\n    const sortedTags = tagKeys.sort((a, b)=>tagCounts[b] - tagCounts[a]);\n    const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-6 pt-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex sm:space-x-24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: displayPosts.map((post)=>{\n                                        const { path, date, title, summary, tags } = post;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"py-5\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                                className: \"flex flex-col space-y-2 xl:space-y-0\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dl\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dt\", {\n                                                                className: \"sr-only\",\n                                                                children: \"Published on\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                lineNumber: 96,\n                                                                columnNumber: 25\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dd\", {\n                                                                className: \"text-base font-medium leading-6 text-gray-500 dark:text-gray-400\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                                                                    dateTime: date,\n                                                                    children: (0,pliny_utils_formatDate__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date, (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default().locale))\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                    lineNumber: 98,\n                                                                    columnNumber: 27\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                lineNumber: 97,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"space-y-3\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                                        className: \"text-2xl font-bold leading-8 tracking-tight\",\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                            href: \"/\".concat(path),\n                                                                            className: \"text-gray-900 dark:text-gray-100\",\n                                                                            children: title\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                            lineNumber: 104,\n                                                                            columnNumber: 29\n                                                                        }, this)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                        lineNumber: 103,\n                                                                        columnNumber: 27\n                                                                    }, this),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                        className: \"flex flex-wrap\",\n                                                                        children: tags === null || tags === void 0 ? void 0 : tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                                                text: tag\n                                                                            }, tag, false, {\n                                                                                fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                                lineNumber: 109,\n                                                                                columnNumber: 49\n                                                                            }, this))\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                        lineNumber: 108,\n                                                                        columnNumber: 27\n                                                                    }, this)\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                lineNumber: 102,\n                                                                columnNumber: 25\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"prose max-w-none text-gray-500 dark:text-gray-400\",\n                                                                children: summary\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                                lineNumber: 112,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                        lineNumber: 101,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, path, false, {\n                                            fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this),\n                                pagination && pagination.totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Pagination, {\n                                    currentPage: pagination.currentPage,\n                                    totalPages: pagination.totalPages\n                                }, void 0, false, {\n                                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kangeunhwa/Desktop/portfolio_blog/myblog/layouts/ListLayoutWithTags.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s1(ListLayoutWithTags, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c1 = ListLayoutWithTags;\nvar _c, _c1;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"ListLayoutWithTags\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xheW91dHMvTGlzdExheW91dFdpdGhUYWdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7O0FBR0U7QUFFTTtBQUdmO0FBQ0Y7QUFDWTtBQUNQO0FBYXZDLFNBQVNNLFdBQVcsS0FBNEM7UUFBNUMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQW1CLEdBQTVDOztJQUNsQixNQUFNQyxXQUFXVCw0REFBV0E7SUFDNUIsTUFBTVUsV0FBV0QsU0FBU0UsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3ZDLE1BQU1DLFdBQVdKLGNBQWMsSUFBSTtJQUNuQyxNQUFNSyxXQUFXTCxjQUFjLEtBQUtEO0lBRXBDLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOztnQkFDWixDQUFDSCwwQkFDQSw4REFBQ0s7b0JBQU9GLFdBQVU7b0JBQWtDRyxVQUFVLENBQUNOOzhCQUFVOzs7Ozs7Z0JBSTFFQSwwQkFDQyw4REFBQ1Ysd0RBQUlBO29CQUNIaUIsTUFBTVgsY0FBYyxNQUFNLElBQUksSUFBYSxPQUFURSxVQUFTLE9BQUssSUFBcUJGLE9BQWpCRSxVQUFTLFVBQXdCLE9BQWhCRixjQUFjO29CQUNuRlksS0FBSTs4QkFDTDs7Ozs7OzhCQUlILDhEQUFDQzs7d0JBQ0ViO3dCQUFZO3dCQUFLRDs7Ozs7OztnQkFFbkIsQ0FBQ00sMEJBQ0EsOERBQUNJO29CQUFPRixXQUFVO29CQUFrQ0csVUFBVSxDQUFDTDs4QkFBVTs7Ozs7O2dCQUkxRUEsMEJBQ0MsOERBQUNYLHdEQUFJQTtvQkFBQ2lCLE1BQU0sSUFBcUJYLE9BQWpCRSxVQUFTLFVBQXdCLE9BQWhCRixjQUFjO29CQUFLWSxLQUFJOzhCQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQU96RTtHQXRDU2Q7O1FBQ1VOLHdEQUFXQTs7O0tBRHJCTTtBQXdDTSxTQUFTZ0IsbUJBQW1CLEtBS3pCO1FBTHlCLEVBQ3pDQyxLQUFLLEVBQ0xDLEtBQUssRUFDTEMsc0JBQXNCLEVBQUUsRUFDeEJDLFVBQVUsRUFDTSxHQUx5Qjs7SUFNekMsTUFBTWpCLFdBQVdULDREQUFXQTtJQUM1QixNQUFNMkIsWUFBWXRCLDhDQUFPQTtJQUN6QixNQUFNdUIsVUFBVUMsT0FBT0MsSUFBSSxDQUFDSDtJQUM1QixNQUFNSSxhQUFhSCxRQUFRSSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTVAsU0FBUyxDQUFDTyxFQUFFLEdBQUdQLFNBQVMsQ0FBQ00sRUFBRTtJQUVyRSxNQUFNRSxlQUFlVixvQkFBb0JXLE1BQU0sR0FBRyxJQUFJWCxzQkFBc0JGO0lBRTVFLHFCQUNFO2tCQUNFLDRFQUFDVDs7OEJBQ0MsOERBQUNBO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDc0I7d0JBQUd0QixXQUFVO2tDQUNYUzs7Ozs7Ozs7Ozs7OEJBR0wsOERBQUNWO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZiw4REFBQ0Q7OzhDQUNDLDhEQUFDd0I7OENBQ0VILGFBQWFJLEdBQUcsQ0FBQyxDQUFDQzt3Q0FDakIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRWxCLEtBQUssRUFBRW1CLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdKO3dDQUM3QyxxQkFDRSw4REFBQ0s7NENBQWM5QixXQUFVO3NEQUN2Qiw0RUFBQytCO2dEQUFRL0IsV0FBVTs7a0VBQ2pCLDhEQUFDZ0M7OzBFQUNDLDhEQUFDQztnRUFBR2pDLFdBQVU7MEVBQVU7Ozs7OzswRUFDeEIsOERBQUNrQztnRUFBR2xDLFdBQVU7MEVBQ1osNEVBQUNtQztvRUFBS0MsVUFBVVQ7OEVBQU96QyxrRUFBVUEsQ0FBQ3lDLE1BQU10QyxrRUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O2tFQUcvRCw4REFBQ1U7d0RBQUlDLFdBQVU7OzBFQUNiLDhEQUFDRDs7a0ZBQ0MsOERBQUN1Qzt3RUFBR3RDLFdBQVU7a0ZBQ1osNEVBQUNiLHdEQUFJQTs0RUFBQ2lCLE1BQU0sSUFBUyxPQUFMc0I7NEVBQVExQixXQUFVO3NGQUMvQlM7Ozs7Ozs7Ozs7O2tGQUdMLDhEQUFDVjt3RUFBSUMsV0FBVTtrRkFDWjZCLGlCQUFBQSwyQkFBQUEsS0FBTUwsR0FBRyxDQUFDLENBQUNlLG9CQUFRLDhEQUFDbkQsdURBQUdBO2dGQUFXb0QsTUFBTUQ7K0VBQVhBOzs7Ozs7Ozs7Ozs7Ozs7OzBFQUdsQyw4REFBQ3hDO2dFQUFJQyxXQUFVOzBFQUNaNEI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FwQkFGOzs7OztvQ0EwQmI7Ozs7OztnQ0FFRGYsY0FBY0EsV0FBV25CLFVBQVUsR0FBRyxtQkFDckMsOERBQUNEO29DQUFXRSxhQUFha0IsV0FBV2xCLFdBQVc7b0NBQUVELFlBQVltQixXQUFXbkIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRztJQWhFd0JlOztRQU1MdEIsd0RBQVdBOzs7TUFOTnNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dHMvTGlzdExheW91dFdpdGhUYWdzLnRzeD8wYWJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgc2x1ZyB9IGZyb20gJ2dpdGh1Yi1zbHVnZ2VyJ1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJ3BsaW55L3V0aWxzL2Zvcm1hdERhdGUnXG5pbXBvcnQgeyBDb3JlQ29udGVudCB9IGZyb20gJ3BsaW55L3V0aWxzL2NvbnRlbnRsYXllcidcbmltcG9ydCB0eXBlIHsgQmxvZyB9IGZyb20gJ2NvbnRlbnRsYXllci9nZW5lcmF0ZWQnXG5pbXBvcnQgTGluayBmcm9tICdAL2NvbXBvbmVudHMvTGluaydcbmltcG9ydCBUYWcgZnJvbSAnQC9jb21wb25lbnRzL1RhZydcbmltcG9ydCBzaXRlTWV0YWRhdGEgZnJvbSAnQC9kYXRhL3NpdGVNZXRhZGF0YSdcbmltcG9ydCB0YWdEYXRhIGZyb20gJ2FwcC90YWctZGF0YS5qc29uJ1xuXG5pbnRlcmZhY2UgUGFnaW5hdGlvblByb3BzIHtcbiAgdG90YWxQYWdlczogbnVtYmVyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXJcbn1cbmludGVyZmFjZSBMaXN0TGF5b3V0UHJvcHMge1xuICBwb3N0czogQ29yZUNvbnRlbnQ8QmxvZz5bXVxuICB0aXRsZT86IHN0cmluZ1xuICBpbml0aWFsRGlzcGxheVBvc3RzPzogQ29yZUNvbnRlbnQ8QmxvZz5bXVxuICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvblByb3BzXG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb24oeyB0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSB9OiBQYWdpbmF0aW9uUHJvcHMpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpXG4gIGNvbnN0IGJhc2VQYXRoID0gcGF0aG5hbWUuc3BsaXQoJy8nKVsxXVxuICBjb25zdCBwcmV2UGFnZSA9IGN1cnJlbnRQYWdlIC0gMSA+IDBcbiAgY29uc3QgbmV4dFBhZ2UgPSBjdXJyZW50UGFnZSArIDEgPD0gdG90YWxQYWdlc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgcGItOCBwdC02IG1kOnNwYWNlLXktNVwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICB7IXByZXZQYWdlICYmIChcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImN1cnNvci1hdXRvIGRpc2FibGVkOm9wYWNpdHktNTBcIiBkaXNhYmxlZD17IXByZXZQYWdlfT5cbiAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtwcmV2UGFnZSAmJiAoXG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9e2N1cnJlbnRQYWdlIC0gMSA9PT0gMSA/IGAvJHtiYXNlUGF0aH0vYCA6IGAvJHtiYXNlUGF0aH0vcGFnZS8ke2N1cnJlbnRQYWdlIC0gMX1gfVxuICAgICAgICAgICAgcmVsPVwicHJldlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtjdXJyZW50UGFnZX0gb2Yge3RvdGFsUGFnZXN9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgeyFuZXh0UGFnZSAmJiAoXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjdXJzb3ItYXV0byBkaXNhYmxlZDpvcGFjaXR5LTUwXCIgZGlzYWJsZWQ9eyFuZXh0UGFnZX0+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtuZXh0UGFnZSAmJiAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YC8ke2Jhc2VQYXRofS9wYWdlLyR7Y3VycmVudFBhZ2UgKyAxfWB9IHJlbD1cIm5leHRcIj5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0TGF5b3V0V2l0aFRhZ3Moe1xuICBwb3N0cyxcbiAgdGl0bGUsXG4gIGluaXRpYWxEaXNwbGF5UG9zdHMgPSBbXSxcbiAgcGFnaW5hdGlvbixcbn06IExpc3RMYXlvdXRQcm9wcykge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcbiAgY29uc3QgdGFnQ291bnRzID0gdGFnRGF0YSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+XG4gIGNvbnN0IHRhZ0tleXMgPSBPYmplY3Qua2V5cyh0YWdDb3VudHMpXG4gIGNvbnN0IHNvcnRlZFRhZ3MgPSB0YWdLZXlzLnNvcnQoKGEsIGIpID0+IHRhZ0NvdW50c1tiXSAtIHRhZ0NvdW50c1thXSlcblxuICBjb25zdCBkaXNwbGF5UG9zdHMgPSBpbml0aWFsRGlzcGxheVBvc3RzLmxlbmd0aCA+IDAgPyBpbml0aWFsRGlzcGxheVBvc3RzIDogcG9zdHNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTYgcHQtNlwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLTkgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0xMDAgc206aGlkZGVuIHNtOnRleHQtNHhsIHNtOmxlYWRpbmctMTAgbWQ6dGV4dC02eGwgbWQ6bGVhZGluZy0xNFwiPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc206c3BhY2UteC0yNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGgtZnVsbCBtYXgtaC1zY3JlZW4gbWluLXctWzI4MHB4XSBtYXgtdy1bMjgwcHhdIGZsZXgtd3JhcCBvdmVyZmxvdy1hdXRvIHJvdW5kZWQgYmctZ3JheS01MCBwdC01IHNoYWRvdy1tZCBkYXJrOmJnLWdyYXktOTAwLzcwIGRhcms6c2hhZG93LWdyYXktODAwLzQwIHNtOmZsZXhcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7ZGlzcGxheVBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aCwgZGF0ZSwgdGl0bGUsIHN1bW1hcnksIHRhZ3MgfSA9IHBvc3RcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGF0aH0gY2xhc3NOYW1lPVwicHktNVwiPlxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiB4bDpzcGFjZS15LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3NOYW1lPVwic3Itb25seVwiPlB1Ymxpc2hlZCBvbjwvZHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZSBkYXRlVGltZT17ZGF0ZX0+e2Zvcm1hdERhdGUoZGF0ZSwgc2l0ZU1ldGFkYXRhLmxvY2FsZSl9PC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIGxlYWRpbmctOCB0cmFja2luZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwYXRofWB9IGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZ3M/Lm1hcCgodGFnKSA9PiA8VGFnIGtleT17dGFnfSB0ZXh0PXt0YWd9IC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvc2UgbWF4LXctbm9uZSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAge3BhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi50b3RhbFBhZ2VzID4gMSAmJiAoXG4gICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGN1cnJlbnRQYWdlPXtwYWdpbmF0aW9uLmN1cnJlbnRQYWdlfSB0b3RhbFBhZ2VzPXtwYWdpbmF0aW9uLnRvdGFsUGFnZXN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUGF0aG5hbWUiLCJmb3JtYXREYXRlIiwiTGluayIsIlRhZyIsInNpdGVNZXRhZGF0YSIsInRhZ0RhdGEiLCJQYWdpbmF0aW9uIiwidG90YWxQYWdlcyIsImN1cnJlbnRQYWdlIiwicGF0aG5hbWUiLCJiYXNlUGF0aCIsInNwbGl0IiwicHJldlBhZ2UiLCJuZXh0UGFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImJ1dHRvbiIsImRpc2FibGVkIiwiaHJlZiIsInJlbCIsInNwYW4iLCJMaXN0TGF5b3V0V2l0aFRhZ3MiLCJwb3N0cyIsInRpdGxlIiwiaW5pdGlhbERpc3BsYXlQb3N0cyIsInBhZ2luYXRpb24iLCJ0YWdDb3VudHMiLCJ0YWdLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRlZFRhZ3MiLCJzb3J0IiwiYSIsImIiLCJkaXNwbGF5UG9zdHMiLCJsZW5ndGgiLCJoMSIsInVsIiwibWFwIiwicG9zdCIsInBhdGgiLCJkYXRlIiwic3VtbWFyeSIsInRhZ3MiLCJsaSIsImFydGljbGUiLCJkbCIsImR0IiwiZGQiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJsb2NhbGUiLCJoMiIsInRhZyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./layouts/ListLayoutWithTags.tsx\n"));

/***/ })

});