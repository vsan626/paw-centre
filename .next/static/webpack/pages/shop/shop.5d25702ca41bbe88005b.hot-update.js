webpackHotUpdate_N_E("pages/shop/shop",{

/***/ "./pages/shop/shop.jsx":
/*!*****************************!*\
  !*** ./pages/shop/shop.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shop/ShopDisplay */ \"./components/shop/ShopDisplay.jsx\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-firebase */ \"./node_modules/react-redux-firebase/es/index.js\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/shop/shop.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import {loadFirebase} from '../../lib/database/config/fbConfig.js';\n\n\n\n\n\n\nvar Shop = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Shop, _React$Component);\n\n  var _super = _createSuper(Shop);\n\n  function Shop(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Shop);\n\n    return _super.call(this, props);\n  } //gets initial data from firestore and stores it into props\n  // static async getInitialProps() {\n  //   let firebase = await loadFirebase();\n  //   let result = await new Promise((resolve, reject) => {\n  //     firebase\n  //       .firestore()\n  //       .collection('products')\n  //       .get()\n  //       .then((snapshot) => {\n  //         let data = [];\n  //         snapshot.forEach((doc) => {\n  //           data.push(\n  //             Object.assign(\n  //               {\n  //                 id: doc.id\n  //               },\n  //               doc.data()\n  //             )\n  //           );\n  //         });\n  //         resolve(data);\n  //       })\n  //       .catch((error) => {\n  //         console.log(error);\n  //         reject([]);\n  //       });\n  //   });\n  //   return { products: result };\n  // }\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Shop, [{\n    key: \"render\",\n    value: function render() {\n      // const {storeItems} = this.state.props\n      // const products = this.props.products;\n      // console.log('products', products);\n      console.log('storeITEMMM', this.props);\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }\n      }, \"Shop route page\", __jsx(_components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return Shop;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component); // const mapStateToProps = (state) => {\n//   console.log('statee in shop', state)\n//   return {\n//     storeItems: state.storeItems\n//   }\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_10__[\"compose\"])(Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__[\"firestoreConnect\"])(function () {\n  return ['products'];\n}), Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(function (state) {\n  return {\n    fireData: state.firestore.data.products\n  };\n}))(Shop)); // export default Shop\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9zaG9wLmpzeD81MzE5Il0sIm5hbWVzIjpbIlNob3AiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvc2UiLCJmaXJlc3RvcmVDb25uZWN0IiwiY29ubmVjdCIsInN0YXRlIiwiZmlyZURhdGEiLCJmaXJlc3RvcmUiLCJkYXRhIiwicHJvZHVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2QkFDVkEsS0FEVTtBQUVqQixHLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBQ1M7QUFDUDtBQUNBO0FBQ0E7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQixLQUFLRixLQUFoQztBQUNBLGFBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQUZGO0FBT0Q7Ozs7RUE5Q2dCRyw0Q0FBSyxDQUFDQyxTLEdBaUR6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlQyxxSEFBTyxDQUNwQkMsNkVBQWdCLENBQUM7QUFBQSxTQUFNLENBQUMsVUFBRCxDQUFOO0FBQUEsQ0FBRCxDQURJLEVBRXBCQywyREFBTyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xCQyxZQUFRLEVBQUVELEtBQUssQ0FBQ0UsU0FBTixDQUFnQkMsSUFBaEIsQ0FBcUJDO0FBRGIsR0FBWjtBQUFBLENBQUQsQ0FGYSxDQUFQLENBS2JiLElBTGEsQ0FBZixFLENBTUEiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3Nob3AuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaG9wRGlzcGxheSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Nob3AvU2hvcERpc3BsYXknO1xuLy8gaW1wb3J0IHtsb2FkRmlyZWJhc2V9IGZyb20gJy4uLy4uL2xpYi9kYXRhYmFzZS9jb25maWcvZmJDb25maWcuanMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBmaXJlc3RvcmVDb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgtZmlyZWJhc2UnXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnXG5cbmNsYXNzIFNob3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLy9nZXRzIGluaXRpYWwgZGF0YSBmcm9tIGZpcmVzdG9yZSBhbmQgc3RvcmVzIGl0IGludG8gcHJvcHNcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgLy8gICBsZXQgZmlyZWJhc2UgPSBhd2FpdCBsb2FkRmlyZWJhc2UoKTtcbiAgLy8gICBsZXQgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAvLyAgICAgZmlyZWJhc2VcbiAgLy8gICAgICAgLmZpcmVzdG9yZSgpXG4gIC8vICAgICAgIC5jb2xsZWN0aW9uKCdwcm9kdWN0cycpXG4gIC8vICAgICAgIC5nZXQoKVxuICAvLyAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgLy8gICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAvLyAgICAgICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAvLyAgICAgICAgICAgZGF0YS5wdXNoKFxuICAvLyAgICAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAvLyAgICAgICAgICAgICAgIHtcbiAgLy8gICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcbiAgLy8gICAgICAgICAgICAgICB9LFxuICAvLyAgICAgICAgICAgICAgIGRvYy5kYXRhKClcbiAgLy8gICAgICAgICAgICAgKVxuICAvLyAgICAgICAgICAgKTtcbiAgLy8gICAgICAgICB9KTtcbiAgLy8gICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAvLyAgICAgICB9KVxuICAvLyAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAvLyAgICAgICAgIHJlamVjdChbXSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyAgIHJldHVybiB7IHByb2R1Y3RzOiByZXN1bHQgfTtcbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc3Qge3N0b3JlSXRlbXN9ID0gdGhpcy5zdGF0ZS5wcm9wc1xuICAgIC8vIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5wcm9wcy5wcm9kdWN0cztcbiAgICAvLyBjb25zb2xlLmxvZygncHJvZHVjdHMnLCBwcm9kdWN0cyk7XG4gICAgY29uc29sZS5sb2coJ3N0b3JlSVRFTU1NJywgdGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgXG4gICAgICA8ZGl2PlxuICAgICAgICBTaG9wIHJvdXRlIHBhZ2VcbiAgICAgICAgPFNob3BEaXNwbGF5IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnc3RhdGVlIGluIHNob3AnLCBzdGF0ZSlcbi8vICAgcmV0dXJuIHtcbi8vICAgICBzdG9yZUl0ZW1zOiBzdGF0ZS5zdG9yZUl0ZW1zXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSAoXG4gIGZpcmVzdG9yZUNvbm5lY3QoKCkgPT4gWydwcm9kdWN0cyddKSxcbiAgY29ubmVjdCgoc3RhdGUpID0+ICh7XG4gICAgZmlyZURhdGE6IHN0YXRlLmZpcmVzdG9yZS5kYXRhLnByb2R1Y3RzXG4gIH0pKSxcbikoU2hvcCk7XG4vLyBleHBvcnQgZGVmYXVsdCBTaG9wXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/shop.jsx\n");

/***/ })

})