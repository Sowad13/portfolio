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

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nfunction Projects(param) {\n    var param = param !== null ? param : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    var _this = this;\n    var projects = [\n        1,\n        2,\n        3\n    ];\n    var projectNames = [\n        \"Temployee\",\n        \"HOPE\",\n        \"Transport Management System\"\n    ];\n    var projectDes = [\n        \"A freelancing website, especially for freshers. Using Temployee an organisation can also hire people to complete tasks. The website is developed with react and ASP .NET\",\n        \"An android app build to help the mentally challenged or depressed people. It is designed to reduce the mental stress of a person to make their life easier. It was developed with java and firebase using android studio.\",\n        \"A database management system built to keep records of vehicles and staff. The audience of the system are the transportation companies. MongoDB was used as the database and it was developed in intellij.\"\n    ];\n    var projectLink = [\n        \"https://github.com/tashfiq333/Temployee\",\n        \"https://github.com/Sowad13/Hope\",\n        \"https://github.com/Sowad13/Transport\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-screen flex flex-col relative text-left md:flex-row max-w-full justify-evenly mx-auto items-center overflow-hidden z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white\",\n                children: projects.map(function(project, i) {\n                    return(//eslint-disable-next-line react/jsx-key\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen flex-shrink-0 snap-center flex flex-col absolute top-1/3 space-y-5 items-center justify-center p-20 md:p-44 h-screen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                                initial: {\n                                    y: -100,\n                                    opacity: 0\n                                },\n                                whileInView: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                className: \"sm:h-[150px] sm:w-[250px] \",\n                                src: \"/laptop.png\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-10 px-0 md:px-10 max-w-6xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-4xl font-semibold text-center\",\n                                        children: [\n                                            \"Project \",\n                                            i + 1,\n                                            \" of \",\n                                            projects.length,\n                                            \": \",\n                                            projectNames[i]\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg text-center md:text-left\",\n                                        children: projectDes[i]\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: projectLink[i],\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"heroButton border border-[#112033] text-[#112033]\",\n                                            children: \"Github\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#607EAA]/50 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\career\\\\portfolio\\\\portfolio\\\\components\\\\Projects.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDYTtBQUdWO0FBSTdCLFNBQVNHLFFBQVEsQ0FBQyxLQUFTLEVBQUU7UUFBWCxLQUFTLEdBQVQsS0FBUyxZQUFULEtBQVM7O0lBQ3pCLElBQU1DLFFBQVEsR0FBRztBQUFDLFNBQUM7QUFBRSxTQUFDO0FBQUUsU0FBQztLQUFDO0lBQzVCLElBQU1DLFlBQVksR0FBRztRQUFDLFdBQVc7UUFBRSxNQUFNO1FBQUUsNkJBQTZCO0tBQUM7SUFDdkUsSUFBTUMsVUFBVSxHQUFHO1FBQUMsMEtBQTBLO1FBQzlMLDJOQUEyTjtRQUMzTiwyTUFBMk07S0FDNU07SUFDRCxJQUFNQyxXQUFXLEdBQUc7UUFBQyx5Q0FBeUM7UUFBQyxpQ0FBaUM7UUFBRSxzQ0FBc0M7S0FBQztJQUN2SSxxQkFDRSw4REFBQ04scURBQVU7UUFDVFEsT0FBTyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDdkJDLFdBQVcsRUFBRTtZQUFFRCxPQUFPLEVBQUUsQ0FBQztTQUFFO1FBQzNCRSxVQUFVLEVBQUU7WUFBRUMsUUFBUSxFQUFFLEdBQUc7U0FBRTtRQUM3QkMsU0FBUyxFQUFDLDBIQUNnRDs7MEJBRTFELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsa0VBQWtFOzBCQUFDLFVBRWpGOzs7OztvQkFBSzswQkFFTCw4REFBQ04sS0FBRztnQkFDRk0sU0FBUyxFQUFDLGdLQUNnRzswQkFFekdWLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsQ0FBQzsyQkFDdkIsd0NBQXdDO2tDQUN4Qyw4REFBQ1YsS0FBRzt3QkFDRk0sU0FBUyxFQUFDLCtIQUMwRDs7MENBRXBFLDhEQUFDYixxREFBVTtnQ0FDVFEsT0FBTyxFQUFFO29DQUNQVyxDQUFDLEVBQUUsQ0FBQyxHQUFHO29DQUNQVixPQUFPLEVBQUUsQ0FBQztpQ0FDWDtnQ0FDREMsV0FBVyxFQUFFO29DQUFFRCxPQUFPLEVBQUUsQ0FBQztvQ0FBRVUsQ0FBQyxFQUFFLENBQUM7aUNBQUU7Z0NBQ2pDUixVQUFVLEVBQUU7b0NBQUVDLFFBQVEsRUFBRSxHQUFHO2lDQUFFO2dDQUM3QlEsUUFBUSxFQUFFO29DQUFFQyxJQUFJLEVBQUUsSUFBSTtpQ0FBRTtnQ0FDeEJSLFNBQVMsRUFBQyw0QkFBNEI7Z0NBQ3RDUyxHQUFHLEVBQUMsYUFBYTtnQ0FDakJDLEdBQUcsRUFBQyxFQUFFOzs7OztxQ0FDTjswQ0FFRiw4REFBQ2hCLEtBQUc7Z0NBQUNNLFNBQVMsRUFBQyxvQ0FBb0M7O2tEQUNqRCw4REFBQ0MsSUFBRTt3Q0FBQ0QsU0FBUyxFQUFDLG9DQUFvQzs7NENBQUMsVUFDekM7NENBQUNJLENBQUMsR0FBRyxDQUFDOzRDQUFDLE1BQUk7NENBQUNkLFFBQVEsQ0FBQ3FCLE1BQU07NENBQUMsSUFBRTs0Q0FBQ3BCLFlBQVksQ0FBQ2EsQ0FBQyxDQUFDOzs7Ozs7NkNBQ25EO2tEQUNMLDhEQUFDUSxHQUFDO3dDQUFDWixTQUFTLEVBQUMsa0NBQWtDO2tEQUM1Q1IsVUFBVSxDQUFDWSxDQUFDLENBQUM7Ozs7OzZDQUNaO2tEQUVKLDhEQUFDaEIsa0RBQUk7d0NBQUN5QixJQUFJLEVBQUVwQixXQUFXLENBQUNXLENBQUMsQ0FBQztrREFDMUIsNEVBQUNVLFFBQU07NENBQUNkLFNBQVMsRUFBQyxtREFBbUQ7c0RBQUMsUUFBTTs7Ozs7aURBQVM7Ozs7OzZDQUM5RTs7Ozs7O3FDQUNIOzs7Ozs7NkJBQ0Y7aUJBQ1AsQ0FBQzs7Ozs7b0JBQ0U7MEJBRU4sOERBQUNOLEtBQUc7Z0JBQ0ZNLFNBQVMsRUFBQyx1RUFDQzs7Ozs7b0JBQ047Ozs7OztZQUNJLENBQ2I7QUFDSixDQUFDO0FBakVRWCxLQUFBQSxRQUFRO0FBbUVqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4P2YzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFNjcm9sbENvbnRhaW5lciBmcm9tIFwicmVhY3QtaW5kaWFuYS1kcmFnLXNjcm9sbFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG50eXBlIFByb3BzID0ge307XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cyh7fTogUHJvcHMpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IFsxLCAyLCAzXTtcclxuY29uc3QgcHJvamVjdE5hbWVzID0gW1wiVGVtcGxveWVlXCIsIFwiSE9QRVwiLCBcIlRyYW5zcG9ydCBNYW5hZ2VtZW50IFN5c3RlbVwiXTtcclxuICBjb25zdCBwcm9qZWN0RGVzID0gW1wiQSBmcmVlbGFuY2luZyB3ZWJzaXRlLCBlc3BlY2lhbGx5IGZvciBmcmVzaGVycy4gVXNpbmcgVGVtcGxveWVlIGFuIG9yZ2FuaXNhdGlvbiBjYW4gYWxzbyBoaXJlIHBlb3BsZSB0byBjb21wbGV0ZSB0YXNrcy4gVGhlIHdlYnNpdGUgaXMgZGV2ZWxvcGVkIHdpdGggcmVhY3QgYW5kIEFTUCAuTkVUXCIsXHJcbiAgXCJBbiBhbmRyb2lkIGFwcCBidWlsZCB0byBoZWxwIHRoZSBtZW50YWxseSBjaGFsbGVuZ2VkIG9yIGRlcHJlc3NlZCBwZW9wbGUuIEl0IGlzIGRlc2lnbmVkIHRvIHJlZHVjZSB0aGUgbWVudGFsIHN0cmVzcyBvZiBhIHBlcnNvbiB0byBtYWtlIHRoZWlyIGxpZmUgZWFzaWVyLiBJdCB3YXMgZGV2ZWxvcGVkIHdpdGggamF2YSBhbmQgZmlyZWJhc2UgdXNpbmcgYW5kcm9pZCBzdHVkaW8uXCIsXHJcbiAgXCJBIGRhdGFiYXNlIG1hbmFnZW1lbnQgc3lzdGVtIGJ1aWx0IHRvIGtlZXAgcmVjb3JkcyBvZiB2ZWhpY2xlcyBhbmQgc3RhZmYuIFRoZSBhdWRpZW5jZSBvZiB0aGUgc3lzdGVtIGFyZSB0aGUgdHJhbnNwb3J0YXRpb24gY29tcGFuaWVzLiBNb25nb0RCIHdhcyB1c2VkIGFzIHRoZSBkYXRhYmFzZSBhbmQgaXQgd2FzIGRldmVsb3BlZCBpbiBpbnRlbGxpai5cIlxyXG5dXHJcbmNvbnN0IHByb2plY3RMaW5rID0gW1wiaHR0cHM6Ly9naXRodWIuY29tL3Rhc2hmaXEzMzMvVGVtcGxveWVlXCIsXCJodHRwczovL2dpdGh1Yi5jb20vU293YWQxMy9Ib3BlXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL1Nvd2FkMTMvVHJhbnNwb3J0XCJdXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuNSB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGZsZXgtY29sIHJlbGF0aXZlIHRleHQtbGVmdCBtZDpmbGV4LXJvdyBtYXgtdy1mdWxsXHJcbiAgICAgICAganVzdGlmeS1ldmVubHkgbXgtYXV0byBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHotMFwiXHJcbiAgICA+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjQgdXBwZXJjYXNlIHRyYWNraW5nLVsyMHB4XSB0ZXh0LWdyYXktNTAwIHRleHQtMnhsXCI+XHJcbiAgICAgICAgUHJvamVjdHNcclxuICAgICAgPC9oND5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgZmxleCBvdmVyZmxvdy14LXNjcm9sbCBvdmVyZmxvdy15LWhpZGRlblxyXG4gICAgICAgICAgICBzbmFwLXggc25hcC1tYW5kYXRvcnkgei0yMCBzY3JvbGxiYXIgc2Nyb2xsYmFyLXRoaW4gc2Nyb2xsYmFyLXRyYWNrLXRyYW5zcGFyZW50IHNjcm9sbGJhci10aHVtYi13aGl0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gta2V5XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIGZsZXgtc2hyaW5rLTAgc25hcC1jZW50ZXIgZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSB0b3AtMS8zXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2UteS01IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIwIG1kOnAtNDQgaC1zY3JlZW5cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8bW90aW9uLmltZ1xyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgICAgIHk6IC0xMDAsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEuMiB9fVxyXG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbTpoLVsxNTBweF0gc206dy1bMjUwcHhdIFwiXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2xhcHRvcC5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTAgcHgtMCBtZDpweC0xMCBtYXgtdy02eGxcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgUHJvamVjdCB7aSArIDF9IG9mIHtwcm9qZWN0cy5sZW5ndGh9OiB7cHJvamVjdE5hbWVzW2ldfVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0RGVzW2ldfVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvamVjdExpbmtbaV19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaGVyb0J1dHRvbiBib3JkZXIgYm9yZGVyLVsjMTEyMDMzXSB0ZXh0LVsjMTEyMDMzXVwiPkdpdGh1YjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGFic29sdXRlIHRvcC1bMzAlXSBiZy1bIzYwN0VBQV0vNTAgbGVmdC0wIGgtWzUwMHB4XVxyXG4gICAgICAgIC1za2V3LXktMTJcIlxyXG4gICAgICA+PC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkxpbmsiLCJQcm9qZWN0cyIsInByb2plY3RzIiwicHJvamVjdE5hbWVzIiwicHJvamVjdERlcyIsInByb2plY3RMaW5rIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImNsYXNzTmFtZSIsImg0IiwibWFwIiwicHJvamVjdCIsImkiLCJpbWciLCJ5Iiwidmlld3BvcnQiLCJvbmNlIiwic3JjIiwiYWx0IiwibGVuZ3RoIiwicCIsImhyZWYiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n"));

/***/ })

});