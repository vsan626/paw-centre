webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/store/store.js":
/*!******************************!*\
  !*** ./redux/store/store.js ***!
  \******************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ \"./redux/reducers/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-firestore */ \"./node_modules/redux-firestore/es/index.js\");\n/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _paw_centre_key_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../paw-centre-key.json */ \"./paw-centre-key.json\");\nvar _paw_centre_key_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../paw-centre-key.json */ \"./paw-centre-key.json\", 1);\n\n\n\n\n\n // create a makeStore function\n\nvar initialState = {}; // const middleware = [thunk];\n\nvar makeStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"].withExtraArgument({\n  getFirestore: redux_firestore__WEBPACK_IMPORTED_MODULE_4__[\"getFirestore\"]\n})), Object(redux_firestore__WEBPACK_IMPORTED_MODULE_4__[\"reduxFirestore\"])(_paw_centre_key_json__WEBPACK_IMPORTED_MODULE_5__))); // export an assembled wrapper\n\nvar wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(makeStore, {\n  debug: true\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc3RvcmUvc3RvcmUuanM/ODgyMyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWtlU3RvcmUiLCJjcmVhdGVTdG9yZSIsInN0b3JlUmVkdWNlcnMiLCJjb21wb3NlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJ3aXRoRXh0cmFBcmd1bWVudCIsImdldEZpcmVzdG9yZSIsInJlZHV4RmlyZXN0b3JlIiwiZmJDb25maWciLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsRUFBckIsQyxDQUNBOztBQUVBLElBQU1DLFNBQVMsR0FBR0MseURBQVcsQ0FDekJDLHVEQUR5QixFQUV6QkgsWUFGeUIsRUFHekJJLHFEQUFPLENBQ0xDLDZEQUFlLENBQUNDLG1EQUFLLENBQUNDLGlCQUFOLENBQXdCO0FBQUVDLGNBQVksRUFBWkEsNERBQVlBO0FBQWQsQ0FBeEIsQ0FBRCxDQURWLEVBRUxDLHNFQUFjLENBQUNDLGlEQUFELENBRlQsQ0FIa0IsQ0FBN0IsQyxDQVNBOztBQUNPLElBQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ1gsU0FBRCxFQUFZO0FBQUVZLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IiLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBzdG9yZVJlZHVjZXJzIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1eEZpcmVzdG9yZSwgZ2V0RmlyZXN0b3JlIH0gZnJvbSAncmVkdXgtZmlyZXN0b3JlJztcbmltcG9ydCBmYkNvbmZpZyBmcm9tICcuLi8uLi9wYXctY2VudHJlLWtleS5qc29uJ1xuLy8gY3JlYXRlIGEgbWFrZVN0b3JlIGZ1bmN0aW9uXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuLy8gY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XG5cbmNvbnN0IG1ha2VTdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHN0b3JlUmVkdWNlcnMsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGNvbXBvc2UoXG4gICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmsud2l0aEV4dHJhQXJndW1lbnQoeyBnZXRGaXJlc3RvcmUgfSkpLFxuICAgICAgcmVkdXhGaXJlc3RvcmUoZmJDb25maWcpXG4gICAgKVxuICApO1xuXG4vLyBleHBvcnQgYW4gYXNzZW1ibGVkIHdyYXBwZXJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store/store.js\n");

/***/ })

})