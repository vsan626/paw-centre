webpackHotUpdate_N_E("pages/shop/shop",{

/***/ "./pages/shop/shop.jsx":
/*!*****************************!*\
  !*** ./pages/shop/shop.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shop/ShopDisplay */ \"./components/shop/ShopDisplay.jsx\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux-firebase */ \"./node_modules/react-redux-firebase/es/index.js\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/shop/shop.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n // import {loadFirebase} from '../../lib/database/config/fbConfig.js';\n\n\n\n\n\n\nvar Shop = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Shop, _React$Component);\n\n  var _super = _createSuper(Shop);\n\n  function Shop(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Shop);\n\n    return _super.call(this, props);\n  } //gets initial data from firestore and stores it into props\n  // static async getInitialProps() {\n  //   let firebase = await loadFirebase();\n  //   let result = await new Promise((resolve, reject) => {\n  //     firebase\n  //       .firestore()\n  //       .collection('products')\n  //       .get()\n  //       .then((snapshot) => {\n  //         let data = [];\n  //         snapshot.forEach((doc) => {\n  //           data.push(\n  //             Object.assign(\n  //               {\n  //                 id: doc.id\n  //               },\n  //               doc.data()\n  //             )\n  //           );\n  //         });\n  //         resolve(data);\n  //       })\n  //       .catch((error) => {\n  //         console.log(error);\n  //         reject([]);\n  //       });\n  //   });\n  //   return { products: result };\n  // }\n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Shop, [{\n    key: \"render\",\n    value: function render() {\n      // const {storeItems} = this.state.props\n      // const products = this.props.products;\n      // console.log('products', products);\n      console.log('storeITEMMM', this.props);\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }\n      }, \"Shop route page\", __jsx(_components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return Shop;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  console.log('statee in shop', state);\n  return {\n    storeItems: state.storeItems\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_10__[\"compose\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(mapStateToProps), Object(react_redux_firebase__WEBPACK_IMPORTED_MODULE_9__[\"firestoreConnect\"])([{\n  collection: 'products'\n}]))(Shop)); // export default Shop\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9zaG9wLmpzeD81MzE5Il0sIm5hbWVzIjpbIlNob3AiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic3RvcmVJdGVtcyIsImNvbXBvc2UiLCJjb25uZWN0IiwiZmlyZXN0b3JlQ29ubmVjdCIsImNvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2QkFDVkEsS0FEVTtBQUVqQixHLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBQ1M7QUFDUDtBQUNBO0FBQ0E7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQixLQUFLRixLQUFoQztBQUNBLGFBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixDQUZGO0FBT0Q7Ozs7RUE5Q2dCRyw0Q0FBSyxDQUFDQyxTOztBQWlEekIsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakNMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCSSxLQUE5QjtBQUNBLFNBQU87QUFDTEMsY0FBVSxFQUFFRCxLQUFLLENBQUNDO0FBRGIsR0FBUDtBQUdELENBTEQ7O0FBT2VDLHFIQUFPLENBQ3BCQywyREFBTyxDQUFDSixlQUFELENBRGEsRUFFcEJLLDZFQUFnQixDQUFDLENBQUM7QUFBQ0MsWUFBVSxFQUFFO0FBQWIsQ0FBRCxDQUFELENBRkksQ0FBUCxDQUdiWixJQUhhLENBQWYsRSxDQUlBIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9zaG9wLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hvcERpc3BsYXkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaG9wL1Nob3BEaXNwbGF5Jztcbi8vIGltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi8uLi9saWIvZGF0YWJhc2UvY29uZmlnL2ZiQ29uZmlnLmpzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmlyZXN0b3JlQ29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4LWZpcmViYXNlJ1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuXG5jbGFzcyBTaG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8vZ2V0cyBpbml0aWFsIGRhdGEgZnJvbSBmaXJlc3RvcmUgYW5kIHN0b3JlcyBpdCBpbnRvIHByb3BzXG4gIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gIC8vICAgbGV0IGZpcmViYXNlID0gYXdhaXQgbG9hZEZpcmViYXNlKCk7XG4gIC8vICAgbGV0IHJlc3VsdCA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgLy8gICAgIGZpcmViYXNlXG4gIC8vICAgICAgIC5maXJlc3RvcmUoKVxuICAvLyAgICAgICAuY29sbGVjdGlvbigncHJvZHVjdHMnKVxuICAvLyAgICAgICAuZ2V0KClcbiAgLy8gICAgICAgLnRoZW4oKHNuYXBzaG90KSA9PiB7XG4gIC8vICAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgLy8gICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgLy8gICAgICAgICAgIGRhdGEucHVzaChcbiAgLy8gICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgLy8gICAgICAgICAgICAgICB7XG4gIC8vICAgICAgICAgICAgICAgICBpZDogZG9jLmlkXG4gIC8vICAgICAgICAgICAgICAgfSxcbiAgLy8gICAgICAgICAgICAgICBkb2MuZGF0YSgpXG4gIC8vICAgICAgICAgICAgIClcbiAgLy8gICAgICAgICAgICk7XG4gIC8vICAgICAgICAgfSk7XG4gIC8vICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgLy8gICAgICAgfSlcbiAgLy8gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gICAgICAgICByZWplY3QoW10pO1xuICAvLyAgICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gICByZXR1cm4geyBwcm9kdWN0czogcmVzdWx0IH07XG4gIC8vIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHtzdG9yZUl0ZW1zfSA9IHRoaXMuc3RhdGUucHJvcHNcbiAgICAvLyBjb25zdCBwcm9kdWN0cyA9IHRoaXMucHJvcHMucHJvZHVjdHM7XG4gICAgLy8gY29uc29sZS5sb2coJ3Byb2R1Y3RzJywgcHJvZHVjdHMpO1xuICAgIGNvbnNvbGUubG9nKCdzdG9yZUlURU1NTScsIHRoaXMucHJvcHMpXG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgU2hvcCByb3V0ZSBwYWdlXG4gICAgICAgIDxTaG9wRGlzcGxheSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgY29uc29sZS5sb2coJ3N0YXRlZSBpbiBzaG9wJywgc3RhdGUpXG4gIHJldHVybiB7XG4gICAgc3RvcmVJdGVtczogc3RhdGUuc3RvcmVJdGVtc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UgKFxuICBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyksXG4gIGZpcmVzdG9yZUNvbm5lY3QoW3tjb2xsZWN0aW9uOiAncHJvZHVjdHMnfV0pLFxuKShTaG9wKTtcbi8vIGV4cG9ydCBkZWZhdWx0IFNob3BcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/shop.jsx\n");

/***/ })

})