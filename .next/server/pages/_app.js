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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/Footer.module.css":
/*!**************************************!*\
  !*** ./components/Footer.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"footer\": \"Footer_footer__pQtti\",\n\t\"footer-item\": \"Footer_footer-item__DXe6Y\",\n\t\"active\": \"Footer_active__7m4uO\",\n\t\"footer-icon\": \"Footer_footer-icon___uUxc\",\n\t\"footer-label\": \"Footer_footer-label__1tT9f\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRm9vdGVyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL3llb25nanVuaHdhbmcvRGVza3RvcC9tdW11Y2tfcHJvamVjdC9tdW11Y2svY29tcG9uZW50cy9Gb290ZXIubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX19wUXR0aVwiLFxuXHRcImZvb3Rlci1pdGVtXCI6IFwiRm9vdGVyX2Zvb3Rlci1pdGVtX19EWGU2WVwiLFxuXHRcImFjdGl2ZVwiOiBcIkZvb3Rlcl9hY3RpdmVfXzdtNHVPXCIsXG5cdFwiZm9vdGVyLWljb25cIjogXCJGb290ZXJfZm9vdGVyLWljb25fX191VXhjXCIsXG5cdFwiZm9vdGVyLWxhYmVsXCI6IFwiRm9vdGVyX2Zvb3Rlci1sYWJlbF9fMXRUOWZcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Footer.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MdHome_MdLeaderboard_MdPerson_MdRestaurantMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MdHome,MdLeaderboard,MdPerson,MdRestaurantMenu!=!react-icons/md */ \"(pages-dir-node)/__barrel_optimize__?names=MdHome,MdLeaderboard,MdPerson,MdRestaurantMenu!=!./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.module.css */ \"(pages-dir-node)/./components/Footer.module.css\");\n/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n// components/Footer.tsx\n\n\n\n\n\nconst tabs = [\n    {\n        label: '홈',\n        icon: _barrel_optimize_names_MdHome_MdLeaderboard_MdPerson_MdRestaurantMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdHome,\n        path: '/'\n    },\n    {\n        label: '메뉴 추천 게임',\n        icon: _barrel_optimize_names_MdHome_MdLeaderboard_MdPerson_MdRestaurantMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdRestaurantMenu,\n        path: '/game'\n    },\n    {\n        label: '브랜드 랭킹',\n        icon: _barrel_optimize_names_MdHome_MdLeaderboard_MdPerson_MdRestaurantMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdLeaderboard,\n        path: '/tier'\n    },\n    {\n        label: '마이페이지',\n        icon: _barrel_optimize_names_MdHome_MdLeaderboard_MdPerson_MdRestaurantMenu_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdPerson,\n        path: '/my'\n    }\n];\nconst Footer = ()=>{\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),\n        children: tabs.map(({ label, icon: Icon, path })=>{\n            const isActive = pathname === path;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: path,\n                className: `${(_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"footer-item\"])} ${isActive ? (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : ''}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                        size: 24\n                    }, void 0, false, {\n                        fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/components/Footer.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"footer-label\"]),\n                        children: label\n                    }, void 0, false, {\n                        fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/components/Footer.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, path, true, {\n                fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/components/Footer.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/components/Footer.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXdCOztBQUNJO0FBQ1c7QUFNaEI7QUFFaUI7QUFReEMsTUFBTU8sT0FBa0I7SUFDdEI7UUFBRUMsT0FBTztRQUFLQyxNQUFNUCx3SEFBTUE7UUFBRVEsTUFBTTtJQUFJO0lBQ3RDO1FBQUVGLE9BQU87UUFBWUMsTUFBTU4sa0lBQWdCQTtRQUFFTyxNQUFNO0lBQVE7SUFDM0Q7UUFBRUYsT0FBTztRQUFVQyxNQUFNTCwrSEFBYUE7UUFBRU0sTUFBTTtJQUFRO0lBQ3REO1FBQUVGLE9BQU87UUFBU0MsTUFBTUosMEhBQVFBO1FBQUVLLE1BQU07SUFBTTtDQUMvQztBQUVELE1BQU1DLFNBQW1CO0lBQ3ZCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdYLHNEQUFTQTtJQUU5QixxQkFDRSw4REFBQ1k7UUFBT0MsV0FBV1Isa0VBQWE7a0JBQzdCQyxLQUFLUSxHQUFHLENBQUMsQ0FBQyxFQUFFUCxLQUFLLEVBQUVDLE1BQU1PLElBQUksRUFBRU4sSUFBSSxFQUFFO1lBQ3BDLE1BQU1PLFdBQVdMLGFBQWFGO1lBQzlCLHFCQUNFLDhEQUFDVixrREFBSUE7Z0JBRUhrQixNQUFNUjtnQkFDTkksV0FBVyxHQUFHUiwwRUFBcUIsQ0FBQyxDQUFDLEVBQUVXLFdBQVdYLGtFQUFhLEdBQUcsSUFBSTs7a0NBRXRFLDhEQUFDVTt3QkFBS0ksTUFBTTs7Ozs7O2tDQUNaLDhEQUFDQzt3QkFBS1AsV0FBV1IsMkVBQXNCO2tDQUFHRTs7Ozs7OztlQUxyQ0U7Ozs7O1FBUVg7Ozs7OztBQUdOO0FBRUEsaUVBQWVDLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy95ZW9uZ2p1bmh3YW5nL0Rlc2t0b3AvbXVtdWNrX3Byb2plY3QvbXVtdWNrL2NvbXBvbmVudHMvRm9vdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0Zvb3Rlci50c3hcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtcbiAgTWRIb21lLFxuICBNZFJlc3RhdXJhbnRNZW51LFxuICBNZExlYWRlcmJvYXJkLFxuICBNZFBlcnNvbixcbn0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgdHlwZSB7IEljb25UeXBlIH0gZnJvbSAncmVhY3QtaWNvbnMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5jc3MnXG5cbmludGVyZmFjZSBUYWJJdGVtIHtcbiAgbGFiZWw6IHN0cmluZ1xuICBpY29uOiBJY29uVHlwZVxuICBwYXRoOiBzdHJpbmdcbn1cblxuY29uc3QgdGFiczogVGFiSXRlbVtdID0gW1xuICB7IGxhYmVsOiAn7ZmIJywgaWNvbjogTWRIb21lLCBwYXRoOiAnLycgfSxcbiAgeyBsYWJlbDogJ+uplOuJtCDstpTsspwg6rKM7J6EJywgaWNvbjogTWRSZXN0YXVyYW50TWVudSwgcGF0aDogJy9nYW1lJyB9LFxuICB7IGxhYmVsOiAn67iM656c65OcIOuere2CuScsIGljb246IE1kTGVhZGVyYm9hcmQsIHBhdGg6ICcvdGllcicgfSxcbiAgeyBsYWJlbDogJ+uniOydtO2OmOydtOyngCcsIGljb246IE1kUGVyc29uLCBwYXRoOiAnL215JyB9LFxuXVxuXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAge3RhYnMubWFwKCh7IGxhYmVsLCBpY29uOiBJY29uLCBwYXRoIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZSA9PT0gcGF0aFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICBocmVmPXtwYXRofVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2Zvb3Rlci1pdGVtJ119ICR7aXNBY3RpdmUgPyBzdHlsZXMuYWN0aXZlIDogJyd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydmb290ZXItbGFiZWwnXX0+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIClcbiAgICAgIH0pfVxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJNZEhvbWUiLCJNZFJlc3RhdXJhbnRNZW51IiwiTWRMZWFkZXJib2FyZCIsIk1kUGVyc29uIiwic3R5bGVzIiwidGFicyIsImxhYmVsIiwiaWNvbiIsInBhdGgiLCJGb290ZXIiLCJwYXRobmFtZSIsImZvb3RlciIsImNsYXNzTmFtZSIsIm1hcCIsIkljb24iLCJpc0FjdGl2ZSIsImhyZWYiLCJhY3RpdmUiLCJzaXplIiwic3BhbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Footer.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Header.module.css":
/*!**************************************!*\
  !*** ./components/Header.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"appHeader\": \"Header_appHeader__FXsN6\",\n\t\"logo\": \"Header_logo____uDV\",\n\t\"backButton\": \"Header_backButton__3GFdE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvSGVhZGVyLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMveWVvbmdqdW5od2FuZy9EZXNrdG9wL211bXVja19wcm9qZWN0L211bXVjay9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFwcEhlYWRlclwiOiBcIkhlYWRlcl9hcHBIZWFkZXJfX0ZYc042XCIsXG5cdFwibG9nb1wiOiBcIkhlYWRlcl9sb2dvX19fX3VEVlwiLFxuXHRcImJhY2tCdXR0b25cIjogXCJIZWFkZXJfYmFja0J1dHRvbl9fM0dGZEVcIlxufTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Header.module.css\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ \"(pages-dir-node)/./components/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// components/Header.tsx\n\n\n\nconst Header = ({ onBack })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().appHeader),\n        children: [\n            onBack && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onBack,\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().backButton),\n                children: \"←\"\n            }, void 0, false, {\n                fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/components/Header.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),\n                children: \"Mumuck\"\n            }, void 0, false, {\n                fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/components/Header.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/components/Header.tsx\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXdCOztBQUNDO0FBQ2U7QUFNeEMsTUFBTUUsU0FBZ0MsQ0FBQyxFQUFFQyxNQUFNLEVBQUUsaUJBQy9DLDhEQUFDQztRQUFPQyxXQUFXSixxRUFBZ0I7O1lBQ2hDRSx3QkFDQyw4REFBQ0k7Z0JBQU9DLFNBQVNMO2dCQUFRRSxXQUFXSixzRUFBaUI7MEJBQUU7Ozs7OzswQkFJekQsOERBQUNTO2dCQUFLTCxXQUFXSixnRUFBVzswQkFBRTs7Ozs7Ozs7Ozs7O0FBSWxDLGlFQUFlQyxNQUFNQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMveWVvbmdqdW5od2FuZy9EZXNrdG9wL211bXVja19wcm9qZWN0L211bXVjay9jb21wb25lbnRzL0hlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9IZWFkZXIudHN4XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnXG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gIG9uQmFjaz86ICgpID0+IHZvaWRcbn1cblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxIZWFkZXJQcm9wcz4gPSAoeyBvbkJhY2sgfSkgPT4gKFxuICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmFwcEhlYWRlcn0+XG4gICAge29uQmFjayAmJiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQmFja30gY2xhc3NOYW1lPXtzdHlsZXMuYmFja0J1dHRvbn0+XG4gICAgICAgIOKGkFxuICAgICAgPC9idXR0b24+XG4gICAgKX1cbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5NdW11Y2s8L3NwYW4+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkhlYWRlciIsIm9uQmFjayIsImhlYWRlciIsImNsYXNzTmFtZSIsImFwcEhlYWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrQnV0dG9uIiwic3BhbiIsImxvZ28iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Header.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_intro_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/intro.css */ \"(pages-dir-node)/./styles/intro.css\");\n/* harmony import */ var _styles_intro_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_intro_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/game.css */ \"(pages-dir-node)/./styles/game.css\");\n/* harmony import */ var _styles_game_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_game_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/login.css */ \"(pages-dir-node)/./styles/login.css\");\n/* harmony import */ var _styles_login_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_login_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_user_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/user.css */ \"(pages-dir-node)/./styles/user.css\");\n/* harmony import */ var _styles_user_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_user_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_tier_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/tier.css */ \"(pages-dir-node)/./styles/tier.css\");\n/* harmony import */ var _styles_tier_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_tier_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_info_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/info.css */ \"(pages-dir-node)/./styles/info.css\");\n/* harmony import */ var _styles_info_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_info_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_privacy_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/privacy.css */ \"(pages-dir-node)/./styles/privacy.css\");\n/* harmony import */ var _styles_privacy_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_privacy_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_terms_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/terms.css */ \"(pages-dir-node)/./styles/terms.css\");\n/* harmony import */ var _styles_terms_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_terms_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ \"(pages-dir-node)/./components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ \"(pages-dir-node)/./components/Footer.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            // 서버 깨우기 로직 그대로\n            fetch('https://mumuck-server.onrender.com/ping');\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-wrap\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"app-main\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/pages/_app.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/pages/_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/pages/_app.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yeongjunhwang/Desktop/mumuck_project/mumuck/pages/_app.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ0Y7QUFDRDtBQUNDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0c7QUFDRjtBQUdLO0FBRVE7QUFDQTtBQUV6QyxTQUFTRyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DTCxpREFBU0E7MkJBQUM7WUFDUixnQkFBZ0I7WUFDaEJNLE1BQU07UUFDUjswQkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUCwyREFBTUE7Ozs7OzBCQUNQLDhEQUFDUTtnQkFBS0QsV0FBVTswQkFFZCw0RUFBQ0o7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDSCwyREFBTUE7Ozs7Ozs7Ozs7O0FBR2I7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3llb25nanVuaHdhbmcvRGVza3RvcC9tdW11Y2tfcHJvamVjdC9tdW11Y2svcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9pbnRyby5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9nYW1lLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL2xvZ2luLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3VzZXIuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdGllci5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmZvLmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL3ByaXZhY3kuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdGVybXMuY3NzJ1xuXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyDshJzrsoQg6rmo7Jqw6riwIOuhnOyngSDqt7jrjIDroZxcbiAgICBmZXRjaCgnaHR0cHM6Ly9tdW11Y2stc2VydmVyLm9ucmVuZGVyLmNvbS9waW5nJylcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC13cmFwXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJhcHAtbWFpblwiPlxuICAgICAgICB7LyogUmVhY3QgUm91dGVy7J2YIDxPdXRsZXQgLz4g64yA7IugIE5leHQuanMg7Y6Y7J207KeAIOy7tO2PrOuEjO2KuCAqL31cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSGVhZGVyIiwiRm9vdGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJmZXRjaCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/game.css":
/*!*************************!*\
  !*** ./styles/game.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/info.css":
/*!*************************!*\
  !*** ./styles/info.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/intro.css":
/*!**************************!*\
  !*** ./styles/intro.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/login.css":
/*!**************************!*\
  !*** ./styles/login.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/privacy.css":
/*!****************************!*\
  !*** ./styles/privacy.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/terms.css":
/*!**************************!*\
  !*** ./styles/terms.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/tier.css":
/*!*************************!*\
  !*** ./styles/tier.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./styles/user.css":
/*!*************************!*\
  !*** ./styles/user.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=MdHome,MdLeaderboard,MdPerson,MdRestaurantMenu!=!./node_modules/react-icons/md/index.esm.js":
/*!*****************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=MdHome,MdLeaderboard,MdPerson,MdRestaurantMenu!=!./node_modules/react-icons/md/index.esm.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_yeongjunhwang_Desktop_mumuck_project_mumuck_node_modules_react_icons_md_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-icons/md/index.esm.js */ "(pages-dir-node)/./node_modules/react-icons/md/index.esm.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Users_yeongjunhwang_Desktop_mumuck_project_mumuck_node_modules_react_icons_md_index_esm_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Users_yeongjunhwang_Desktop_mumuck_project_mumuck_node_modules_react_icons_md_index_esm_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-icons"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();