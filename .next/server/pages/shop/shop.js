module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/shop.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/shop/ShopDisplay.jsx":
/*!*****************************************!*\
  !*** ./components/shop/ShopDisplay.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux-firebase */ \"react-redux-firebase\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/components/shop/ShopDisplay.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nclass ShopDisplay extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }, \"Shop Component\"));\n  }\n\n}\n\n; // Shop.propTypes = {\n//   storeItems: PropTypes.array.isRequired\n// }\n// const mapStateToProps = state => {\n//   console.log('HI FROM STATE', state)\n//   return {\n//     storeItems: state.storeItems.storeItems\n//   }\n// }\n// //use compose function to use two HOC (higher order components)\n// export default compose(\n//   //automatically retrieves data from firestore when this component is active\n//   firestoreConnect(['products']),\n//   connect(mapStateToProps)\n// )(Shop);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3AvU2hvcERpc3BsYXkuanN4PzZhNjkiXSwibmFtZXMiOlsiU2hvcERpc3BsYXkiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBTixTQUEwQkMsNENBQUssQ0FBQ0MsU0FBaEMsQ0FBMEM7QUFFeENDLFFBQU0sR0FBSTtBQUVSLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERjtBQU1EOztBQVZ1Qzs7QUFXekMsQyxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUgsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Nob3AvU2hvcERpc3BsYXkuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2FkRmlyZWJhc2UgZnJvbSAnLi4vLi4vbGliL2RhdGFiYXNlL2NvbmZpZy9mYkNvbmZpZy5qcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmlyZXN0b3JlQ29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4LWZpcmViYXNlJ1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuXG5jbGFzcyBTaG9wRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2hvcCBDb21wb25lbnQ8L2gxPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG4vLyBTaG9wLnByb3BUeXBlcyA9IHtcbi8vICAgc3RvcmVJdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbi8vIH1cblxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnSEkgRlJPTSBTVEFURScsIHN0YXRlKVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHN0b3JlSXRlbXM6IHN0YXRlLnN0b3JlSXRlbXMuc3RvcmVJdGVtc1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vdXNlIGNvbXBvc2UgZnVuY3Rpb24gdG8gdXNlIHR3byBIT0MgKGhpZ2hlciBvcmRlciBjb21wb25lbnRzKVxuLy8gZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbi8vICAgLy9hdXRvbWF0aWNhbGx5IHJldHJpZXZlcyBkYXRhIGZyb20gZmlyZXN0b3JlIHdoZW4gdGhpcyBjb21wb25lbnQgaXMgYWN0aXZlXG4vLyAgIGZpcmVzdG9yZUNvbm5lY3QoWydwcm9kdWN0cyddKSxcbi8vICAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpXG4vLyApKFNob3ApO1xuXG5leHBvcnQgZGVmYXVsdCBTaG9wRGlzcGxheVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/shop/ShopDisplay.jsx\n");

/***/ }),

/***/ "./lib/database/config/fbConfig.js":
/*!*****************************************!*\
  !*** ./lib/database/config/fbConfig.js ***!
  \*****************************************/
/*! exports provided: loadFirebase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFirebase\", function() { return loadFirebase; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction loadFirebase() {\n  const config = {\n    apiKey: process.env.FIREBASE_API_KEY,\n    authDomain: process.env.FIREBASE_AUTH_DOMAIN,\n    databaseURL: process.env.FIREBASE_DATA_URL,\n    projectId: process.env.FIREBASE_PROJECT_ID,\n    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,\n    appId: process.env.FIREBASE_APP_ID,\n    measurementId: process.env.FIREBASE_MEASUREMENT_ID\n  }; // Initialize Firebase\n\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n  }\n\n  return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadFirebase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGF0YWJhc2UvY29uZmlnL2ZiQ29uZmlnLmpzPzZlMmUiXSwibmFtZXMiOlsibG9hZEZpcmViYXNlIiwiY29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkZJUkVCQVNFX0FQSV9LRVkiLCJhdXRoRG9tYWluIiwiRklSRUJBU0VfQVVUSF9ET01BSU4iLCJkYXRhYmFzZVVSTCIsIkZJUkVCQVNFX0RBVEFfVVJMIiwicHJvamVjdElkIiwiRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJGSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiRklSRUJBU0VfQVBQX0lEIiwibWVhc3VyZW1lbnRJZCIsIkZJUkVCQVNFX01FQVNVUkVNRU5UX0lEIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFlBQVQsR0FBdUI7QUFDNUIsUUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFVBQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURQO0FBRWJDLGNBQVUsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUZYO0FBR2JDLGVBQVcsRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLLGlCQUhaO0FBSWJDLGFBQVMsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLG1CQUpWO0FBS2JDLGlCQUFhLEVBQUVULE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyx1QkFMZDtBQU1iQyxxQkFBaUIsRUFBRVgsT0FBTyxDQUFDQyxHQUFSLENBQVlXLDRCQU5sQjtBQU9iQyxTQUFLLEVBQUViLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxlQVBOO0FBUWJDLGlCQUFhLEVBQUVmLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZTtBQVJkLEdBQWYsQ0FENEIsQ0FXNUI7O0FBQ0EsTUFBSSxDQUFDQyxtREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRix1REFBUSxDQUFDRyxhQUFULENBQXVCdEIsTUFBdkI7QUFDRDs7QUFDRCxTQUFPbUIsbURBQVA7QUFDRDtBQUNjcEIsMkVBQWYiLCJmaWxlIjoiLi9saWIvZGF0YWJhc2UvY29uZmlnL2ZiQ29uZmlnLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpcmViYXNlKCl7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQSV9LRVksXG4gICAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gICAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0RBVEFfVVJMLFxuICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgICBhcHBJZDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfQVBQX0lELFxuICAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FQVNVUkVNRU5UX0lEXG4gIH07XG4gIC8vIEluaXRpYWxpemUgRmlyZWJhc2VcbiAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xuICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcbiAgfVxuICByZXR1cm4gZmlyZWJhc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IGxvYWRGaXJlYmFzZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/database/config/fbConfig.js\n");

/***/ }),

/***/ "./pages/shop/shop.jsx":
/*!*****************************!*\
  !*** ./pages/shop/shop.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shop/ShopDisplay */ \"./components/shop/ShopDisplay.jsx\");\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/shop/shop.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nclass Shop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  //gets initial data from firestore and stores it into props\n  static async getInitialProps() {\n    let firebase = await Object(_lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let result = await new Promise((resolve, reject) => {\n      firebase.firestore().collection('products').get().then(snapshot => {\n        let data = [];\n        snapshot.forEach(doc => {\n          data.push(Object.assign({\n            id: doc.id\n          }, doc.data()));\n        });\n        resolve(data);\n      }).catch(error => {\n        console.log(error);\n        reject([]);\n      });\n    }); //need to send data to redux store\n\n    return {\n      products: result\n    };\n  }\n\n  render() {\n    const products = this.props.products;\n    console.log('products', products);\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }\n    }, \"Shop route page\", __jsx(_components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3Nob3AuanN4PzUzMTkiXSwibmFtZXMiOlsiU2hvcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiZmlyZWJhc2UiLCJsb2FkRmlyZWJhc2UiLCJyZXN1bHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJkYXRhIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJpZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJyZW5kZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxJQUFOLFNBQW1CQyw0Q0FBSyxDQUFDQyxTQUF6QixDQUFtQztBQUVqQztBQUNBLGVBQWFDLGVBQWIsR0FBK0I7QUFDN0IsUUFBSUMsUUFBUSxHQUFHLE1BQU1DLGdGQUFZLEVBQWpDO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLE1BQU0sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNsREwsY0FBUSxDQUFDTSxTQUFULEdBQXFCQyxVQUFyQixDQUFnQyxVQUFoQyxFQUNDQyxHQURELEdBRUNDLElBRkQsQ0FFTUMsUUFBUSxJQUFJO0FBQ2hCLFlBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0FELGdCQUFRLENBQUNFLE9BQVQsQ0FBa0JDLEdBQUQsSUFBUztBQUN4QkYsY0FBSSxDQUFDRyxJQUFMLENBQ0VDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ2RDLGNBQUUsRUFBRUosR0FBRyxDQUFDSTtBQURNLFdBQWQsRUFFQ0osR0FBRyxDQUFDRixJQUFKLEVBRkQsQ0FERjtBQUtELFNBTkQ7QUFPQVAsZUFBTyxDQUFDTyxJQUFELENBQVA7QUFDRCxPQVpELEVBYUNPLEtBYkQsQ0FhT0MsS0FBSyxJQUFJO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FkLGNBQU0sQ0FBQyxFQUFELENBQU47QUFDRCxPQWhCRDtBQWlCRCxLQWxCa0IsQ0FBbkIsQ0FGNkIsQ0FxQjdCOztBQUNBLFdBQU87QUFBQ2lCLGNBQVEsRUFBRXBCO0FBQVgsS0FBUDtBQUNEOztBQUVEcUIsUUFBTSxHQUFHO0FBQ1AsVUFBTUQsUUFBUSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0YsUUFBNUI7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkMsUUFBeEI7QUFDQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERjtBQU1EOztBQXJDZ0M7O0FBd0NwQjFCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9zaG9wLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hvcERpc3BsYXkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaG9wL1Nob3BEaXNwbGF5J1xuaW1wb3J0IGxvYWRGaXJlYmFzZSBmcm9tICcuLi8uLi9saWIvZGF0YWJhc2UvY29uZmlnL2ZiQ29uZmlnLmpzJ1xuXG5cbmNsYXNzIFNob3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIC8vZ2V0cyBpbml0aWFsIGRhdGEgZnJvbSBmaXJlc3RvcmUgYW5kIHN0b3JlcyBpdCBpbnRvIHByb3BzXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgbGV0IGZpcmViYXNlID0gYXdhaXQgbG9hZEZpcmViYXNlKClcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbihzbmFwc2hvdCA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gW11cbiAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgZGF0YS5wdXNoKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBpZDogZG9jLmlkXG4gICAgICAgICAgfSwgZG9jLmRhdGEoKSlcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIHJlc29sdmUoZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmVqZWN0KFtdKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC8vbmVlZCB0byBzZW5kIGRhdGEgdG8gcmVkdXggc3RvcmVcbiAgICByZXR1cm4ge3Byb2R1Y3RzOiByZXN1bHR9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLnByb2R1Y3RzXG4gICAgY29uc29sZS5sb2coJ3Byb2R1Y3RzJywgcHJvZHVjdHMpXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgU2hvcCByb3V0ZSBwYWdlXG4gICAgICAgIDxTaG9wRGlzcGxheSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3A7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/shop.jsx\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/app\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIj9hZDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2FwcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/app\n");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/auth\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCI/Mjc2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmaXJlYmFzZS9hdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXV0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/auth\n");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase/firestore\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIj8wNjI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImZpcmViYXNlL2ZpcmVzdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2ZpcmVzdG9yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase/firestore\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-redux-firebase":
/*!***************************************!*\
  !*** external "react-redux-firebase" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux-firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiPzliOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXgtZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eC1maXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux-firebase\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });