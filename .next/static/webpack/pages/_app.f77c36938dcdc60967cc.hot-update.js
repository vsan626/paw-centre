webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/index.js */ \"./redux/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux-firebase */ \"./node_modules/react-redux-firebase/es/index.js\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\n/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-firestore */ \"./node_modules/redux-firestore/es/index.js\");\n/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _redux_reducers_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/reducers/index.js */ \"./redux/reducers/index.js\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/_app.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;\n\n\n\n\n // ==================\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  // const store = Store()\n  // Initialize firebase instance\n  var rrfConfig = {\n    userProfile: 'users'\n  }; // react-redux-firebase config\n\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a.initializeApp(_lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n  }\n\n  var store = Object(_redux_index_js__WEBPACK_IMPORTED_MODULE_5__[\"newStore\"])(_redux_reducers_index_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_7__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_7__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_12__[\"default\"].withExtraArgument({\n    getFirebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__[\"getFirebase\"],\n    getFirestore: redux_firestore__WEBPACK_IMPORTED_MODULE_10__[\"getFirestore\"]\n  })), Object(redux_firestore__WEBPACK_IMPORTED_MODULE_10__[\"reduxFirestore\"])(_lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])));\n  var rrfProps = {\n    firebase: firebase_app__WEBPACK_IMPORTED_MODULE_11___default.a,\n    config: rrfConfig,\n    dispatch: store.dispatch,\n    createFirestoreInstance: redux_firestore__WEBPACK_IMPORTED_MODULE_10__[\"createFirestoreInstance\"] // <- needed if using firestore\n\n  };\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(react_redux_firebase__WEBPACK_IMPORTED_MODULE_8__[\"ReactReduxFirebaseProvider\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, rrfProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }), __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-2339755698\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"2339755698\",\n    __self: this\n  }, \"body.jsx-2339755698{margin:0px;padding:0px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92YWlzYW4vRG93bmxvYWRzL3Bhdy1jZW50cmUvcGFnZXMvX2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NvQixBQUd3QixXQUNDLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL3ZhaXNhbi9Eb3dubG9hZHMvcGF3LWNlbnRyZS9wYWdlcy9fYXBwLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3JlZHV4L2luZGV4LmpzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT1cbmltcG9ydCB7bmV3U3RvcmV9IGZyb20gJy4uL3JlZHV4L2luZGV4LmpzJ1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIsIGdldEZpcmViYXNlIH0gZnJvbSAncmVhY3QtcmVkdXgtZmlyZWJhc2UnXG5pbXBvcnQgZmJDb25maWcgZnJvbSAnLi4vbGliL2RhdGFiYXNlL2NvbmZpZy9mYkNvbmZpZy5qcydcbmltcG9ydCB7IGNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlLCByZWR1eEZpcmVzdG9yZSwgZ2V0RmlyZXN0b3JlIH0gZnJvbSAncmVkdXgtZmlyZXN0b3JlJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcydcblxuXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIC8vIGNvbnN0IHN0b3JlID0gU3RvcmUoKVxuICAvLyBJbml0aWFsaXplIGZpcmViYXNlIGluc3RhbmNlXG4gIGNvbnN0IHJyZkNvbmZpZyA9IHsgdXNlclByb2ZpbGU6ICd1c2VycycgfSAvLyByZWFjdC1yZWR1eC1maXJlYmFzZSBjb25maWdcbiAgXG4gIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZiQ29uZmlnKTtcbiAgfSAgXG4gIGNvbnN0IHN0b3JlID0gbmV3U3RvcmUocm9vdFJlZHVjZXIsXG4gICAgY29tcG9zZShcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KHsgZ2V0RmlyZWJhc2UsIGdldEZpcmVzdG9yZSB9KSksXG4gICAgICAgIHJlZHV4RmlyZXN0b3JlKGZiQ29uZmlnKSxcbiAgICApXG4pO1xuXG4gIGNvbnN0IHJyZlByb3BzID0ge1xuICAgIGZpcmViYXNlLFxuICAgIGNvbmZpZzogcnJmQ29uZmlnLFxuICAgIGRpc3BhdGNoOiBzdG9yZS5kaXNwYXRjaCxcbiAgICBjcmVhdGVGaXJlc3RvcmVJbnN0YW5jZSAvLyA8LSBuZWVkZWQgaWYgdXNpbmcgZmlyZXN0b3JlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8UmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXIgey4uLnJyZlByb3BzfT5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L1JlYWN0UmVkdXhGaXJlYmFzZVByb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cbi8vXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcblxuLy8gICByZXR1cm4geyAuLi5hcHBQcm9wcyB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcbiJdfQ== */\\n/*@ sourceURL=/Users/vaisan/Downloads/paw-centre/pages/_app.jsx */\"))));\n} // Only uncomment this method if you have blocking data requirements for\n// every single page in your application. This disables the ability to\n// perform automatic static optimization, causing every page in your app to\n// be server-side rendered.\n//\n// MyApp.getInitialProps = async (appContext) => {\n//   // calls page's `getInitialProps` and fills `appProps.pageProps`\n//   const appProps = await App.getInitialProps(appContext);\n//   return { ...appProps }\n// }\n\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = _redux_index_js__WEBPACK_IMPORTED_MODULE_5__[\"wrapper\"].withRedux(MyApp));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3g/NjBkMyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJyZkNvbmZpZyIsInVzZXJQcm9maWxlIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImZiQ29uZmlnIiwic3RvcmUiLCJuZXdTdG9yZSIsInJvb3RSZWR1Y2VyIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwid2l0aEV4dHJhQXJndW1lbnQiLCJnZXRGaXJlYmFzZSIsImdldEZpcmVzdG9yZSIsInJlZHV4RmlyZXN0b3JlIiwicnJmUHJvcHMiLCJjb25maWciLCJkaXNwYXRjaCIsImNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkM7QUFDQTtBQUNBLE1BQU1DLFNBQVMsR0FBRztBQUFFQyxlQUFXLEVBQUU7QUFBZixHQUFsQixDQUh1QyxDQUdJOztBQUUzQyxNQUFJLENBQUNDLG9EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJGLHdEQUFRLENBQUNHLGFBQVQsQ0FBdUJDLHdFQUF2QjtBQUNEOztBQUNELE1BQU1DLEtBQUssR0FBR0MsZ0VBQVEsQ0FBQ0MsaUVBQUQsRUFDcEJDLHFEQUFPLENBQ0hDLDZEQUFlLENBQUNDLG9EQUFLLENBQUNDLGlCQUFOLENBQXdCO0FBQUVDLGVBQVcsRUFBWEEsZ0VBQUY7QUFBZUMsZ0JBQVksRUFBWkEsNkRBQVlBO0FBQTNCLEdBQXhCLENBQUQsQ0FEWixFQUVIQyx1RUFBYyxDQUFDVix3RUFBRCxDQUZYLENBRGEsQ0FBdEI7QUFPQSxNQUFNVyxRQUFRLEdBQUc7QUFDZmYsWUFBUSxFQUFSQSxvREFEZTtBQUVmZ0IsVUFBTSxFQUFFbEIsU0FGTztBQUdmbUIsWUFBUSxFQUFFWixLQUFLLENBQUNZLFFBSEQ7QUFJZkMsMkJBQXVCLEVBQXZCQSx3RUFKZSxDQUlTOztBQUpULEdBQWpCO0FBT0EsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFYixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRCx5RkFBZ0NVLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDQSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsU0FBRCx5RkFBZWxCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZBLEVBR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDgzR0FIRSxDQURKLENBREY7QUFpQkQsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7S0FuRFNGLEs7QUFxRE0scUVBQUF3Qix1REFBTyxDQUFDQyxTQUFSLENBQWtCekIsS0FBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSAnLi4vcmVkdXgvaW5kZXguanMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbi8vID09PT09PT09PT09PT09PT09PVxuaW1wb3J0IHtuZXdTdG9yZX0gZnJvbSAnLi4vcmVkdXgvaW5kZXguanMnXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBSZWFjdFJlZHV4RmlyZWJhc2VQcm92aWRlciwgZ2V0RmlyZWJhc2UgfSBmcm9tICdyZWFjdC1yZWR1eC1maXJlYmFzZSdcbmltcG9ydCBmYkNvbmZpZyBmcm9tICcuLi9saWIvZGF0YWJhc2UvY29uZmlnL2ZiQ29uZmlnLmpzJ1xuaW1wb3J0IHsgY3JlYXRlRmlyZXN0b3JlSW5zdGFuY2UsIHJlZHV4RmlyZXN0b3JlLCBnZXRGaXJlc3RvcmUgfSBmcm9tICdyZWR1eC1maXJlc3RvcmUnXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzJ1xuXG5cbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gY29uc3Qgc3RvcmUgPSBTdG9yZSgpXG4gIC8vIEluaXRpYWxpemUgZmlyZWJhc2UgaW5zdGFuY2VcbiAgY29uc3QgcnJmQ29uZmlnID0geyB1c2VyUHJvZmlsZTogJ3VzZXJzJyB9IC8vIHJlYWN0LXJlZHV4LWZpcmViYXNlIGNvbmZpZ1xuICBcbiAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmJDb25maWcpO1xuICB9ICBcbiAgY29uc3Qgc3RvcmUgPSBuZXdTdG9yZShyb290UmVkdWNlcixcbiAgICBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmsud2l0aEV4dHJhQXJndW1lbnQoeyBnZXRGaXJlYmFzZSwgZ2V0RmlyZXN0b3JlIH0pKSxcbiAgICAgICAgcmVkdXhGaXJlc3RvcmUoZmJDb25maWcpLFxuICAgIClcbik7XG5cbiAgY29uc3QgcnJmUHJvcHMgPSB7XG4gICAgZmlyZWJhc2UsXG4gICAgY29uZmlnOiBycmZDb25maWcsXG4gICAgZGlzcGF0Y2g6IHN0b3JlLmRpc3BhdGNoLFxuICAgIGNyZWF0ZUZpcmVzdG9yZUluc3RhbmNlIC8vIDwtIG5lZWRlZCBpZiB1c2luZyBmaXJlc3RvcmVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxSZWFjdFJlZHV4RmlyZWJhc2VQcm92aWRlciB7Li4ucnJmUHJvcHN9PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgIDwvUmVhY3RSZWR1eEZpcmViYXNlUHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuLy8gT25seSB1bmNvbW1lbnQgdGhpcyBtZXRob2QgaWYgeW91IGhhdmUgYmxvY2tpbmcgZGF0YSByZXF1aXJlbWVudHMgZm9yXG4vLyBldmVyeSBzaW5nbGUgcGFnZSBpbiB5b3VyIGFwcGxpY2F0aW9uLiBUaGlzIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvXG4vLyBwZXJmb3JtIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLCBjYXVzaW5nIGV2ZXJ5IHBhZ2UgaW4geW91ciBhcHAgdG9cbi8vIGJlIHNlcnZlci1zaWRlIHJlbmRlcmVkLlxuLy9cbi8vIE15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XG4vLyAgIC8vIGNhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2Bcbi8vICAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpO1xuXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ })

})