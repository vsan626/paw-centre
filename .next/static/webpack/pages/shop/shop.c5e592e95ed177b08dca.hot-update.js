webpackHotUpdate_N_E("pages/shop/shop",{

/***/ "./pages/shop/shop.jsx":
/*!*****************************!*\
  !*** ./pages/shop/shop.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shop/ShopDisplay */ \"./components/shop/ShopDisplay.jsx\");\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/index.js */ \"./redux/actions/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/shop/shop.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar Shop = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Shop, _React$Component);\n\n  var _super = _createSuper(Shop);\n\n  function Shop(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Shop);\n\n    return _super.call(this, props);\n  } //gets initial data from firestore and stores it into props\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Shop, [{\n    key: \"render\",\n    value: function render() {\n      var products = this.props.products;\n      console.log('products', products);\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }\n      }, \"Shop route page\", __jsx(_components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var firebase, result;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_9__[\"loadFirebase\"])();\n\n              case 2:\n                firebase = _context.sent;\n                _context.next = 5;\n                return new Promise(function (resolve, reject) {\n                  firebase.firestore().collection('products').get().then(function (snapshot) {\n                    var data = [];\n                    snapshot.forEach(function (doc) {\n                      data.push(Object.assign({\n                        id: doc.id\n                      }, doc.data()));\n                    });\n                    resolve(data);\n                  })[\"catch\"](function (error) {\n                    console.log(error);\n                    reject([]);\n                  });\n                });\n\n              case 5:\n                result = _context.sent;\n                //need to send data to redux store\n                // return { products: result };\n                Object(_redux_actions_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(\"GET_FIRESTORE_DATA\", result);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return Shop;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"connect\"])(null, _redux_actions_index_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(Shop));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9zaG9wLmpzeD81MzE5Il0sIm5hbWVzIjpbIlNob3AiLCJwcm9wcyIsInByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsImxvYWRGaXJlYmFzZSIsImZpcmViYXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiaWQiLCJlcnJvciIsInJlc3VsdCIsImZpcmVTdG9yZURhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2QkFDVkEsS0FEVTtBQUVqQixHLENBQ0Q7Ozs7OzZCQWtDUztBQUNQLFVBQU1DLFFBQVEsR0FBRyxLQUFLRCxLQUFMLENBQVdDLFFBQTVCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLFFBQXhCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUVFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBREY7QUFNRDs7Ozs7Ozs7Ozs7dUJBekNzQkcscUZBQVksRTs7O0FBQTdCQyx3Qjs7dUJBQ2UsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNsREgsMEJBQVEsQ0FDTEksU0FESCxHQUVHQyxVQUZILENBRWMsVUFGZCxFQUdHQyxHQUhILEdBSUdDLElBSkgsQ0FJUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsd0JBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0FELDRCQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hCRiwwQkFBSSxDQUFDRyxJQUFMLENBQ0VDLE1BQU0sQ0FBQ0MsTUFBUCxDQUNFO0FBQ0VDLDBCQUFFLEVBQUVKLEdBQUcsQ0FBQ0k7QUFEVix1QkFERixFQUlFSixHQUFHLENBQUNGLElBQUosRUFKRixDQURGO0FBUUQscUJBVEQ7QUFVQVAsMkJBQU8sQ0FBQ08sSUFBRCxDQUFQO0FBQ0QsbUJBakJILFdBa0JTLFVBQUNPLEtBQUQsRUFBVztBQUNoQm5CLDJCQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEtBQVo7QUFDQWIsMEJBQU0sQ0FBQyxFQUFELENBQU47QUFDRCxtQkFyQkg7QUFzQkQsaUJBdkJrQixDOzs7QUFBZmMsc0I7QUF3Qko7QUFDQTtBQUNBQyx3RkFBYSxDQUNYLG9CQURXLEVBQ1dELE1BRFgsQ0FBYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpDZUUsNENBQUssQ0FBQ0MsUzs7QUFrRFZDLDJIQUFPLENBQUMsSUFBRCxFQUFPSCxnRUFBUCxDQUFQLENBQTZCeEIsSUFBN0IsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3Avc2hvcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNob3BEaXNwbGF5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hvcC9TaG9wRGlzcGxheSc7XG5pbXBvcnQge2xvYWRGaXJlYmFzZX0gZnJvbSAnLi4vLi4vbGliL2RhdGFiYXNlL2NvbmZpZy9mYkNvbmZpZy5qcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGZpcmVTdG9yZURhdGEgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNsYXNzIFNob3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIC8vZ2V0cyBpbml0aWFsIGRhdGEgZnJvbSBmaXJlc3RvcmUgYW5kIHN0b3JlcyBpdCBpbnRvIHByb3BzXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgbGV0IGZpcmViYXNlID0gYXdhaXQgbG9hZEZpcmViYXNlKCk7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZpcmViYXNlXG4gICAgICAgIC5maXJlc3RvcmUoKVxuICAgICAgICAuY29sbGVjdGlvbigncHJvZHVjdHMnKVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgIGRhdGEucHVzaChcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDogZG9jLmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb2MuZGF0YSgpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICByZWplY3QoW10pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL25lZWQgdG8gc2VuZCBkYXRhIHRvIHJlZHV4IHN0b3JlXG4gICAgLy8gcmV0dXJuIHsgcHJvZHVjdHM6IHJlc3VsdCB9O1xuICAgIGZpcmVTdG9yZURhdGEoXG4gICAgICBcIkdFVF9GSVJFU1RPUkVfREFUQVwiLCByZXN1bHRcbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLnByb2R1Y3RzO1xuICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0cycsIHByb2R1Y3RzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgU2hvcCByb3V0ZSBwYWdlXG4gICAgICAgIDxTaG9wRGlzcGxheSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIGZpcmVTdG9yZURhdGEpKFNob3ApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/shop.jsx\n");

/***/ })

})