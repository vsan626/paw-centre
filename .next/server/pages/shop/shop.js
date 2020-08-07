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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/components/shop/ShopDisplay.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass ShopDisplay extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 7\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"Shop Component\"));\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3AvU2hvcERpc3BsYXkuanN4PzZhNjkiXSwibmFtZXMiOlsiU2hvcERpc3BsYXkiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxXQUFOLFNBQTBCQyw0Q0FBSyxDQUFDQyxTQUFoQyxDQUEwQztBQUV4Q0MsUUFBTSxHQUFJO0FBRVIsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGO0FBS0Q7O0FBVHVDOztBQVV6QztBQUVjSCwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2hvcC9TaG9wRGlzcGxheS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTaG9wRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2hvcCBDb21wb25lbnQ8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcERpc3BsYXlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/shop/ShopDisplay.jsx\n");

/***/ }),

/***/ "./lib/database/config/fbConfig.js":
/*!*****************************************!*\
  !*** ./lib/database/config/fbConfig.js ***!
  \*****************************************/
/*! exports provided: loadFirebase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadFirebase\", function() { return loadFirebase; });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction loadFirebase() {\n  const config = {\n    apiKey: \"AIzaSyAfOD_72ZL7Y0I_Fqlt4JOMmqe1Z-suu3g\",\n    authDomain: \"paw-centre.firebaseapp.com\",\n    databaseURL: \"https://paw-centre.firebaseio.com\",\n    projectId: \"paw-centre\",\n    storageBucket: \"paw-centre.appspot.com\",\n    messagingSenderId: \"843108661486\",\n    appId: \"1:843108661486:web:8ab873bb8dd4d54a7f9bff\",\n    measurementId: \"G-GCR7H15W9P\"\n  }; // Initialize Firebase\n\n  if (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {\n    firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n  }\n\n  return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadFirebase);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGF0YWJhc2UvY29uZmlnL2ZiQ29uZmlnLmpzPzZlMmUiXSwibmFtZXMiOlsibG9hZEZpcmViYXNlIiwiY29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsIkZJUkVCQVNFX01FQVNVUkVNRU5UX0lEIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFlBQVQsR0FBdUI7QUFDNUIsUUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFVBQU0sRUFBRUMseUNBREs7QUFFYkMsY0FBVSxFQUFFRCw0QkFGQztBQUdiRSxlQUFXLEVBQUVGLG1DQUhBO0FBSWJHLGFBQVMsRUFBRUgsWUFKRTtBQUtiSSxpQkFBYSxFQUFFSix3QkFMRjtBQU1iSyxxQkFBaUIsRUFBRUwsY0FOTjtBQU9iTSxTQUFLLEVBQUVOLDJDQVBNO0FBUWJPLGlCQUFhLEVBQUVQLGNBQW1DUTtBQVJyQyxHQUFmLENBRDRCLENBVzVCOztBQUNBLE1BQUksQ0FBQ0MsbURBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkYsdURBQVEsQ0FBQ0csYUFBVCxDQUF1QmQsTUFBdkI7QUFDRDs7QUFDRCxTQUFPVyxtREFBUDtBQUNEO0FBQ2NaLDJFQUFmIiwiZmlsZSI6Ii4vbGliL2RhdGFiYXNlL2NvbmZpZy9mYkNvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaXJlYmFzZSgpe1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5GSVJFQkFTRV9BUElfS0VZLFxuICAgIGF1dGhEb21haW46IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICAgIGRhdGFiYXNlVVJMOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9EQVRBX1VSTCxcbiAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gICAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgYXBwSWQ6IHByb2Nlc3MuZW52LkZJUkVCQVNFX0FQUF9JRCxcbiAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRFxuICB9O1xuICAvLyBJbml0aWFsaXplIEZpcmViYXNlXG4gIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIGZpcmViYXNlXG59XG5leHBvcnQgZGVmYXVsdCBsb2FkRmlyZWJhc2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/database/config/fbConfig.js\n");

/***/ }),

/***/ "./pages/shop/shop.jsx":
/*!*****************************!*\
  !*** ./pages/shop/shop.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shop/ShopDisplay */ \"./components/shop/ShopDisplay.jsx\");\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/shop/shop.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nclass Shop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n  } //gets initial data from firestore and stores it into props\n\n\n  static async getInitialProps() {\n    let firebase = await Object(_lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_2__[\"loadFirebase\"])();\n    let result = await new Promise((resolve, reject) => {\n      firebase.firestore().collection('products').get().then(snapshot => {\n        let data = [];\n        snapshot.forEach(doc => {\n          data.push(Object.assign({\n            id: doc.id\n          }, doc.data()));\n        });\n        resolve(data);\n      }).catch(error => {\n        console.log(error);\n        reject([]);\n      });\n    });\n    return {\n      products: result\n    };\n  }\n\n  render() {\n    const products = this.props.products;\n    console.log('products', products);\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }\n    }, \"Shop route page\", __jsx(_components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      products: products,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3Nob3AuanN4PzUzMTkiXSwibmFtZXMiOlsiU2hvcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImZpcmViYXNlIiwibG9hZEZpcmViYXNlIiwicmVzdWx0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiaWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQ2pDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNoQixVQUFNQSxLQUFOO0FBQ0QsR0FIZ0MsQ0FJakM7OztBQUNBLGVBQWFDLGVBQWIsR0FBK0I7QUFDN0IsUUFBSUMsUUFBUSxHQUFHLE1BQU1DLHFGQUFZLEVBQWpDO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLE1BQU0sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNsREwsY0FBUSxDQUNMTSxTQURILEdBRUdDLFVBRkgsQ0FFYyxVQUZkLEVBR0dDLEdBSEgsR0FJR0MsSUFKSCxDQUlTQyxRQUFELElBQWM7QUFDbEIsWUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQUQsZ0JBQVEsQ0FBQ0UsT0FBVCxDQUFrQkMsR0FBRCxJQUFTO0FBQ3hCRixjQUFJLENBQUNHLElBQUwsQ0FDRUMsTUFBTSxDQUFDQyxNQUFQLENBQ0U7QUFDRUMsY0FBRSxFQUFFSixHQUFHLENBQUNJO0FBRFYsV0FERixFQUlFSixHQUFHLENBQUNGLElBQUosRUFKRixDQURGO0FBUUQsU0FURDtBQVVBUCxlQUFPLENBQUNPLElBQUQsQ0FBUDtBQUNELE9BakJILEVBa0JHTyxLQWxCSCxDQWtCVUMsS0FBRCxJQUFXO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBZCxjQUFNLENBQUMsRUFBRCxDQUFOO0FBQ0QsT0FyQkg7QUFzQkQsS0F2QmtCLENBQW5CO0FBd0JBLFdBQU87QUFBRWlCLGNBQVEsRUFBRXBCO0FBQVosS0FBUDtBQUNEOztBQUVEcUIsUUFBTSxHQUFHO0FBQ1AsVUFBTUQsUUFBUSxHQUFHLEtBQUt4QixLQUFMLENBQVd3QixRQUE1QjtBQUNBRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCQyxRQUF4QjtBQUNBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFFRSxNQUFDLG9FQUFEO0FBQWEsY0FBUSxFQUFFQSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERjtBQU1EOztBQTNDZ0M7O0FBK0NwQjVCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9zaG9wLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hvcERpc3BsYXkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaG9wL1Nob3BEaXNwbGF5JztcbmltcG9ydCB7bG9hZEZpcmViYXNlfSBmcm9tICcuLi8uLi9saWIvZGF0YWJhc2UvY29uZmlnL2ZiQ29uZmlnLmpzJztcblxuXG5jbGFzcyBTaG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICAvL2dldHMgaW5pdGlhbCBkYXRhIGZyb20gZmlyZXN0b3JlIGFuZCBzdG9yZXMgaXQgaW50byBwcm9wc1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGxldCBmaXJlYmFzZSA9IGF3YWl0IGxvYWRGaXJlYmFzZSgpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmaXJlYmFzZVxuICAgICAgICAuZmlyZXN0b3JlKClcbiAgICAgICAgLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJylcbiAgICAgICAgLmdldCgpXG4gICAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gW107XG4gICAgICAgICAgc25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICBkYXRhLnB1c2goXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9jLmRhdGEoKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgcmVqZWN0KFtdKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgcHJvZHVjdHM6IHJlc3VsdCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gdGhpcy5wcm9wcy5wcm9kdWN0cztcbiAgICBjb25zb2xlLmxvZygncHJvZHVjdHMnLCBwcm9kdWN0cyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIFNob3Agcm91dGUgcGFnZVxuICAgICAgICA8U2hvcERpc3BsYXkgcHJvZHVjdHM9e3Byb2R1Y3RzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/shop.jsx\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });