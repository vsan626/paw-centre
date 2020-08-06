webpackHotUpdate_N_E("pages/_app",{

/***/ "./redux/reducers/storeReducers.js":
/*!*****************************************!*\
  !*** ./redux/reducers/storeReducers.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/types */ \"./redux/types/types.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar initialState = {\n  // server: null,\n  // client: null\n  products: [{\n    id: '1',\n    name: 'chew toy',\n    price: 55\n  }, {\n    id: '2',\n    name: 'vest',\n    price: 80\n  }, {\n    id: '3',\n    name: 'leash',\n    price: 60\n  }]\n}; // create your reducer\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"HYDRATE\"]:\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case _types_types__WEBPACK_IMPORTED_MODULE_1__[\"GET_DATA_SERVER\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        server: action.payload\n      });\n\n    case _types_types__WEBPACK_IMPORTED_MODULE_1__[\"GET_DATA_CLIENT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        client: action.payload\n      });\n\n    case _types_types__WEBPACK_IMPORTED_MODULE_1__[\"GET_FIRESTORE_DATA\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        client: action.payload\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdWNlcnMvc3RvcmVSZWR1Y2Vycy5qcz8yMDQ0Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInByb2R1Y3RzIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJHRVRfREFUQV9TRVJWRVIiLCJzZXJ2ZXIiLCJHRVRfREFUQV9DTElFTlQiLCJjbGllbnQiLCJHRVRfRklSRVNUT1JFX0RBVEEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CO0FBQ0E7QUFDQUMsVUFBUSxFQUFFLENBQ1I7QUFBQ0MsTUFBRSxFQUFFLEdBQUw7QUFBVUMsUUFBSSxFQUFFLFVBQWhCO0FBQTRCQyxTQUFLLEVBQUU7QUFBbkMsR0FEUSxFQUVSO0FBQUNGLE1BQUUsRUFBRSxHQUFMO0FBQVVDLFFBQUksRUFBRSxNQUFoQjtBQUF3QkMsU0FBSyxFQUFFO0FBQS9CLEdBRlEsRUFHUjtBQUFDRixNQUFFLEVBQUUsR0FBTDtBQUFVQyxRQUFJLEVBQUUsT0FBaEI7QUFBeUJDLFNBQUssRUFBRTtBQUFoQyxHQUhRO0FBSFMsQ0FBckIsQyxDQVVBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6Qk4sWUFBeUI7QUFBQSxNQUFYTyxNQUFXOztBQUNoRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQywwREFBTDtBQUNFLDZDQUFZSCxLQUFaLEdBQXNCQyxNQUFNLENBQUNHLE9BQTdCOztBQUNGLFNBQUtDLDREQUFMO0FBQ0UsNkNBQVlMLEtBQVo7QUFBbUJNLGNBQU0sRUFBRUwsTUFBTSxDQUFDRztBQUFsQzs7QUFDRixTQUFLRyw0REFBTDtBQUNFLDZDQUFZUCxLQUFaO0FBQW1CUSxjQUFNLEVBQUVQLE1BQU0sQ0FBQ0c7QUFBbEM7O0FBQ0YsU0FBS0ssK0RBQUw7QUFDRSw2Q0FBWVQsS0FBWjtBQUFtQlEsY0FBTSxFQUFFUCxNQUFNLENBQUNHO0FBQWxDOztBQUNGO0FBQ0UsYUFBT0osS0FBUDtBQVZKO0FBWUQsQ0FiRDs7QUFlZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9zdG9yZVJlZHVjZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR0VUX0RBVEFfU0VSVkVSLCBHRVRfREFUQV9DTElFTlQsIEdFVF9GSVJFU1RPUkVfREFUQSB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIC8vIHNlcnZlcjogbnVsbCxcbiAgLy8gY2xpZW50OiBudWxsXG4gIHByb2R1Y3RzOiBbXG4gICAge2lkOiAnMScsIG5hbWU6ICdjaGV3IHRveScsIHByaWNlOiA1NX0sXG4gICAge2lkOiAnMicsIG5hbWU6ICd2ZXN0JywgcHJpY2U6IDgwfSxcbiAgICB7aWQ6ICczJywgbmFtZTogJ2xlYXNoJywgcHJpY2U6IDYwfVxuICBdXG59O1xuXG4vLyBjcmVhdGUgeW91ciByZWR1Y2VyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSFlEUkFURTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgR0VUX0RBVEFfU0VSVkVSOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlcnZlcjogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIEdFVF9EQVRBX0NMSUVOVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjbGllbnQ6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSBHRVRfRklSRVNUT1JFX0RBVEE6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2xpZW50OiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/storeReducers.js\n");

/***/ })

})