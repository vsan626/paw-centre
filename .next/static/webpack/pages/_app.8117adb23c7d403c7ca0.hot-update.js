webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: newStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newStore\", function() { return newStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapper\", function() { return wrapper; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _redux_reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../redux/reducers/index */ \"./redux/reducers/index.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _lib_database_config_fbConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/database/config/fbConfig */ \"./lib/database/config/fbConfig.js\");\n/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-firestore */ \"./node_modules/redux-firestore/es/index.js\");\n/* harmony import */ var redux_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_firestore__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux-firebase */ \"./node_modules/react-redux-firebase/es/index.js\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar initialState = {};\nvar newStore = function newStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_redux_reducers_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__[\"default\"].withExtraArgument({\n    getFirebase: react_redux_firebase__WEBPACK_IMPORTED_MODULE_6__[\"getFirebase\"],\n    getFirestore: redux_firestore__WEBPACK_IMPORTED_MODULE_5__[\"getFirestore\"]\n  })), Object(redux_firestore__WEBPACK_IMPORTED_MODULE_5__[\"reduxFirestore\"])(_lib_database_config_fbConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n};\nvar wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(newStore, {\n  debug: true\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvaW5kZXguanM/YzhlNCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJuZXdTdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJ3aXRoRXh0cmFBcmd1bWVudCIsImdldEZpcmViYXNlIiwiZ2V0RmlyZXN0b3JlIiwicmVkdXhGaXJlc3RvcmUiLCJmYkNvbmZpZyIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxZQUFZLEdBQUcsRUFBckI7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQzNCLFNBQU9DLHlEQUFXLENBQ2hCQyw2REFEZ0IsRUFFaEJILFlBRmdCLEVBR2hCSSxxREFBTyxDQUNMQyw2REFBZSxDQUFDQyxtREFBSyxDQUFDQyxpQkFBTixDQUF3QjtBQUFFQyxlQUFXLEVBQVhBLGdFQUFGO0FBQWVDLGdCQUFZLEVBQVpBLDREQUFZQTtBQUEzQixHQUF4QixDQUFELENBRFYsRUFFTEMsc0VBQWMsQ0FBQ0MscUVBQUQsQ0FGVCxDQUhTLENBQWxCO0FBUUQsQ0FUTTtBQVdBLElBQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ1osUUFBRCxFQUFXO0FBQUVhLE9BQUssRUFBRTtBQUFULENBQVgsQ0FBN0IiLCJmaWxlIjoiLi9yZWR1eC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLy4uL3JlZHV4L3JlZHVjZXJzL2luZGV4J1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGZiQ29uZmlnIGZyb20gJy4uL2xpYi9kYXRhYmFzZS9jb25maWcvZmJDb25maWcnXG5pbXBvcnQgeyByZWR1eEZpcmVzdG9yZSwgZ2V0RmlyZXN0b3JlIH0gZnJvbSAncmVkdXgtZmlyZXN0b3JlJ1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgZ2V0RmlyZWJhc2UgfSBmcm9tICdyZWFjdC1yZWR1eC1maXJlYmFzZSdcblxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuXG5leHBvcnQgY29uc3QgbmV3U3RvcmUgPSAoKSA9PntcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlKFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KHsgZ2V0RmlyZWJhc2UsIGdldEZpcmVzdG9yZSB9KSksXG4gICAgICByZWR1eEZpcmVzdG9yZShmYkNvbmZpZyksXG4gIClcbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobmV3U3RvcmUsIHsgZGVidWc6IHRydWUgfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/index.js\n");

/***/ })

})