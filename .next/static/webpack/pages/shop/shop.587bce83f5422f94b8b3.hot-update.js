webpackHotUpdate_N_E("pages/shop/shop",{

/***/ "./pages/shop/shop.jsx":
/*!*****************************!*\
  !*** ./pages/shop/shop.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shop/ShopDisplay */ \"./components/shop/ShopDisplay.jsx\");\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/index.js */ \"./redux/actions/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/shop/shop.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar Shop = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Shop, _React$Component);\n\n  var _super = _createSuper(Shop);\n\n  function Shop(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Shop);\n\n    return _super.call(this, props);\n  } //gets initial data from firestore and stores it into props\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Shop, [{\n    key: \"render\",\n    value: function render() {\n      var products = this.props.products;\n      console.log('products', products);\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }\n      }, \"Shop route page\", __jsx(_components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var firebase, result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_9__[\"loadFirebase\"])();\n\n              case 2:\n                firebase = _context.sent;\n                _context.next = 5;\n                return new Promise(function (resolve, reject) {\n                  firebase.firestore().collection('products').get().then(function (snapshot) {\n                    var data = [];\n                    snapshot.forEach(function (doc) {\n                      data.push(Object.assign({\n                        id: doc.id\n                      }, doc.data()));\n                    });\n                    resolve(data);\n                  })[\"catch\"](function (error) {\n                    console.log(error);\n                    reject([]);\n                  });\n                });\n\n              case 5:\n                result = _context.sent;\n                //need to send data to redux store\n                // return { products: result };\n                Object(_redux_actions_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(result, GET_FIRESTORE_DATA);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Shop;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"connect\"])(function (state) {\n  return state;\n}, _redux_actions_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(Shop));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9zaG9wLmpzeD81MzE5Il0sIm5hbWVzIjpbIlNob3AiLCJwcm9wcyIsInByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsImxvYWRGaXJlYmFzZSIsImZpcmViYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiaWQiLCJlcnJvciIsInJlc3VsdCIsImZpcmVTdG9yZURhdGEiLCJHRVRfRklSRVNUT1JFX0RBVEEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDZCQUNWQSxLQURVO0FBRWpCLEcsQ0FDRDs7Ozs7NkJBa0NTO0FBQ1AsVUFBTUMsUUFBUSxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsUUFBNUI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsUUFBeEI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsQ0FERjtBQU1EOzs7Ozs7Ozs7Ozt1QkF6Q3NCRyxxRkFBWSxFOzs7QUFBN0JDLHdCOzt1QkFDZSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ2xESCwwQkFBUSxDQUNMSSxTQURILEdBRUdDLFVBRkgsQ0FFYyxVQUZkLEVBR0dDLEdBSEgsR0FJR0MsSUFKSCxDQUlRLFVBQUNDLFFBQUQsRUFBYztBQUNsQix3QkFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQUQsNEJBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDQyxHQUFELEVBQVM7QUFDeEJGLDBCQUFJLENBQUNHLElBQUwsQ0FDRUMsTUFBTSxDQUFDQyxNQUFQLENBQ0U7QUFDRUMsMEJBQUUsRUFBRUosR0FBRyxDQUFDSTtBQURWLHVCQURGLEVBSUVKLEdBQUcsQ0FBQ0YsSUFBSixFQUpGLENBREY7QUFRRCxxQkFURDtBQVVBUCwyQkFBTyxDQUFDTyxJQUFELENBQVA7QUFDRCxtQkFqQkgsV0FrQlMsVUFBQ08sS0FBRCxFQUFXO0FBQ2hCbkIsMkJBQU8sQ0FBQ0MsR0FBUixDQUFZa0IsS0FBWjtBQUNBYiwwQkFBTSxDQUFDLEVBQUQsQ0FBTjtBQUNELG1CQXJCSDtBQXNCRCxpQkF2QmtCLEM7OztBQUFmYyxzQjtBQXdCSjtBQUNBO0FBQ0FDLHdGQUFhLENBQ1hELE1BRFcsRUFDSEUsa0JBREcsQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpDZUMsNENBQUssQ0FBQ0MsUzs7QUFrRFZDLDJIQUFPLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUo7QUFBQSxDQUFOLEVBQWlCTCxnRUFBakIsQ0FBUCxDQUF1Q3hCLElBQXZDLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3Nob3AuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaG9wRGlzcGxheSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Nob3AvU2hvcERpc3BsYXknO1xuaW1wb3J0IHtsb2FkRmlyZWJhc2V9IGZyb20gJy4uLy4uL2xpYi9kYXRhYmFzZS9jb25maWcvZmJDb25maWcuanMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBmaXJlU3RvcmVEYXRhIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBTaG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICAvL2dldHMgaW5pdGlhbCBkYXRhIGZyb20gZmlyZXN0b3JlIGFuZCBzdG9yZXMgaXQgaW50byBwcm9wc1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGxldCBmaXJlYmFzZSA9IGF3YWl0IGxvYWRGaXJlYmFzZSgpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmaXJlYmFzZVxuICAgICAgICAuZmlyZXN0b3JlKClcbiAgICAgICAgLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJylcbiAgICAgICAgLmdldCgpXG4gICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICBkYXRhLnB1c2goXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9jLmRhdGEoKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9uZWVkIHRvIHNlbmQgZGF0YSB0byByZWR1eCBzdG9yZVxuICAgIC8vIHJldHVybiB7IHByb2R1Y3RzOiByZXN1bHQgfTtcbiAgICBmaXJlU3RvcmVEYXRhKFxuICAgICAgcmVzdWx0LCBHRVRfRklSRVNUT1JFX0RBVEFcbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLnByb2R1Y3RzO1xuICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0cycsIHByb2R1Y3RzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgU2hvcCByb3V0ZSBwYWdlXG4gICAgICAgIDxTaG9wRGlzcGxheSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlLCBmaXJlU3RvcmVEYXRhKShTaG9wKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/shop.jsx\n");

/***/ })

})