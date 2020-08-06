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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux-firebase */ \"react-redux-firebase\");\n/* harmony import */ var react_redux_firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_firebase__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/components/shop/ShopDisplay.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nclass ShopDisplay extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }, \"Shop Component\"));\n  }\n\n}\n\n; // Shop.propTypes = {\n//   storeItems: PropTypes.array.isRequired\n// }\n// const mapStateToProps = state => {\n//   console.log('HI FROM STATE', state)\n//   return {\n//     storeItems: state.storeItems.storeItems\n//   }\n// }\n// //use compose function to use two HOC (higher order components)\n// export default compose(\n//   //automatically retrieves data from firestore when this component is active\n//   firestoreConnect(['products']),\n//   connect(mapStateToProps)\n// )(Shop);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShopDisplay);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Nob3AvU2hvcERpc3BsYXkuanN4PzZhNjkiXSwibmFtZXMiOlsiU2hvcERpc3BsYXkiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBTixTQUEwQkMsNENBQUssQ0FBQ0MsU0FBaEMsQ0FBMEM7QUFFeENDLFFBQU0sR0FBSTtBQUVSLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsQ0FERjtBQUtEOztBQVR1Qzs7QUFVekMsQyxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZUgsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Nob3AvU2hvcERpc3BsYXkuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBsb2FkRmlyZWJhc2UgZnJvbSAnLi4vLi4vbGliL2RhdGFiYXNlL2NvbmZpZy9mYkNvbmZpZy5qcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgZmlyZXN0b3JlQ29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4LWZpcmViYXNlJ1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuXG5jbGFzcyBTaG9wRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+U2hvcCBDb21wb25lbnQ8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuLy8gU2hvcC5wcm9wVHlwZXMgPSB7XG4vLyAgIHN0b3JlSXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4vLyB9XG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbi8vICAgY29uc29sZS5sb2coJ0hJIEZST00gU1RBVEUnLCBzdGF0ZSlcbi8vICAgcmV0dXJuIHtcbi8vICAgICBzdG9yZUl0ZW1zOiBzdGF0ZS5zdG9yZUl0ZW1zLnN0b3JlSXRlbXNcbi8vICAgfVxuLy8gfVxuXG4vLyAvL3VzZSBjb21wb3NlIGZ1bmN0aW9uIHRvIHVzZSB0d28gSE9DIChoaWdoZXIgb3JkZXIgY29tcG9uZW50cylcbi8vIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4vLyAgIC8vYXV0b21hdGljYWxseSByZXRyaWV2ZXMgZGF0YSBmcm9tIGZpcmVzdG9yZSB3aGVuIHRoaXMgY29tcG9uZW50IGlzIGFjdGl2ZVxuLy8gICBmaXJlc3RvcmVDb25uZWN0KFsncHJvZHVjdHMnXSksXG4vLyAgIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKVxuLy8gKShTaG9wKTtcblxuZXhwb3J0IGRlZmF1bHQgU2hvcERpc3BsYXlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/shop/ShopDisplay.jsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shop/ShopDisplay */ \"./components/shop/ShopDisplay.jsx\");\n/* harmony import */ var _lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/database/config/fbConfig.js */ \"./lib/database/config/fbConfig.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions_storeActions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/storeActions.js */ \"./redux/actions/storeActions.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/vaisan/Downloads/paw-centre/pages/shop/shop.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nclass Shop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  //gets initial data from firestore and stores it into props\n  static async getInitialProps() {\n    let firebase = await Object(_lib_database_config_fbConfig_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let result = await new Promise((resolve, reject) => {\n      firebase.firestore().collection('products').get().then(snapshot => {\n        let data = [];\n        snapshot.forEach(doc => {\n          data.push(Object.assign({\n            id: doc.id\n          }, doc.data()));\n        });\n        resolve(data);\n      }).catch(error => {\n        console.log(error);\n        reject([]);\n      });\n    }); //need to send data to redux store\n\n    return {\n      products: result\n    };\n  }\n\n  render() {\n    const products = this.props.products;\n    console.log('products', products);\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 7\n      }\n    }, \"Shop route page\", __jsx(_components_shop_ShopDisplay__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3Nob3AuanN4PzUzMTkiXSwibmFtZXMiOlsiU2hvcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiZmlyZWJhc2UiLCJsb2FkRmlyZWJhc2UiLCJyZXN1bHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJkYXRhIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJPYmplY3QiLCJhc3NpZ24iLCJpZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHMiLCJyZW5kZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQ2pDO0FBQ0EsZUFBYUMsZUFBYixHQUErQjtBQUM3QixRQUFJQyxRQUFRLEdBQUcsTUFBTUMsZ0ZBQVksRUFBakM7QUFDQSxRQUFJQyxNQUFNLEdBQUcsTUFBTSxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ2xETCxjQUFRLENBQ0xNLFNBREgsR0FFR0MsVUFGSCxDQUVjLFVBRmQsRUFHR0MsR0FISCxHQUlHQyxJQUpILENBSVNDLFFBQUQsSUFBYztBQUNsQixZQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBRCxnQkFBUSxDQUFDRSxPQUFULENBQWtCQyxHQUFELElBQVM7QUFDeEJGLGNBQUksQ0FBQ0csSUFBTCxDQUNFQyxNQUFNLENBQUNDLE1BQVAsQ0FDRTtBQUNFQyxjQUFFLEVBQUVKLEdBQUcsQ0FBQ0k7QUFEVixXQURGLEVBSUVKLEdBQUcsQ0FBQ0YsSUFBSixFQUpGLENBREY7QUFRRCxTQVREO0FBVUFQLGVBQU8sQ0FBQ08sSUFBRCxDQUFQO0FBQ0QsT0FqQkgsRUFrQkdPLEtBbEJILENBa0JVQyxLQUFELElBQVc7QUFDaEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FkLGNBQU0sQ0FBQyxFQUFELENBQU47QUFDRCxPQXJCSDtBQXNCRCxLQXZCa0IsQ0FBbkIsQ0FGNkIsQ0EwQjdCOztBQUNBLFdBQU87QUFBRWlCLGNBQVEsRUFBRXBCO0FBQVosS0FBUDtBQUNEOztBQUVEcUIsUUFBTSxHQUFHO0FBQ1AsVUFBTUQsUUFBUSxHQUFHLEtBQUtFLEtBQUwsQ0FBV0YsUUFBNUI7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkMsUUFBeEI7QUFDQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERjtBQU1EOztBQXpDZ0M7O0FBNENwQjFCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9zaG9wLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hvcERpc3BsYXkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaG9wL1Nob3BEaXNwbGF5JztcbmltcG9ydCBsb2FkRmlyZWJhc2UgZnJvbSAnLi4vLi4vbGliL2RhdGFiYXNlL2NvbmZpZy9mYkNvbmZpZy5qcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9zdG9yZUFjdGlvbnMuanMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jbGFzcyBTaG9wIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9nZXRzIGluaXRpYWwgZGF0YSBmcm9tIGZpcmVzdG9yZSBhbmQgc3RvcmVzIGl0IGludG8gcHJvcHNcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBsZXQgZmlyZWJhc2UgPSBhd2FpdCBsb2FkRmlyZWJhc2UoKTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmlyZWJhc2VcbiAgICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAgIC5jb2xsZWN0aW9uKCdwcm9kdWN0cycpXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAudGhlbigoc25hcHNob3QpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICAgIHNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvYy5kYXRhKClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIHJlamVjdChbXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vbmVlZCB0byBzZW5kIGRhdGEgdG8gcmVkdXggc3RvcmVcbiAgICByZXR1cm4geyBwcm9kdWN0czogcmVzdWx0IH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSB0aGlzLnByb3BzLnByb2R1Y3RzO1xuICAgIGNvbnNvbGUubG9nKCdwcm9kdWN0cycsIHByb2R1Y3RzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgU2hvcCByb3V0ZSBwYWdlXG4gICAgICAgIDxTaG9wRGlzcGxheSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/shop.jsx\n");

/***/ }),

/***/ "./redux/actions/storeActions.js":
/*!***************************************!*\
  !*** ./redux/actions/storeActions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/types */ \"./redux/types/types.js\");\n\n\n // const getDataClient = async (dispatch, getState, { getFirestore }) => {\n//   const firestore = await getFirestore();\n//   firestore\n//     .collection('products')\n//     .get()\n//     .then((data) => {\n//       dispatch({\n//         type: GET_DATA_CLIENT,\n//         payload: data\n//       });\n//     });\n// };\n// export default getDataClient;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3N0b3JlQWN0aW9ucy5qcz81YTUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvc3RvcmVBY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgR0VUX0RBVEFfU0VSVkVSLCBHRVRfREFUQV9DTElFTlQsIEdFVF9GSVJFU1RPUkVfREFUQSB9IGZyb20gJy4uL3R5cGVzL3R5cGVzJztcblxuLy8gY29uc3QgZ2V0RGF0YUNsaWVudCA9IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUsIHsgZ2V0RmlyZXN0b3JlIH0pID0+IHtcbi8vICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgZ2V0RmlyZXN0b3JlKCk7XG4vLyAgIGZpcmVzdG9yZVxuLy8gICAgIC5jb2xsZWN0aW9uKCdwcm9kdWN0cycpXG4vLyAgICAgLmdldCgpXG4vLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcbi8vICAgICAgIGRpc3BhdGNoKHtcbi8vICAgICAgICAgdHlwZTogR0VUX0RBVEFfQ0xJRU5ULFxuLy8gICAgICAgICBwYXlsb2FkOiBkYXRhXG4vLyAgICAgICB9KTtcbi8vICAgICB9KTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGdldERhdGFDbGllbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/storeActions.js\n");

/***/ }),

/***/ "./redux/types/types.js":
/*!******************************!*\
  !*** ./redux/types/types.js ***!
  \******************************/
/*! exports provided: GET_DATA_SERVER, GET_DATA_CLIENT, GET_FIRESTORE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_DATA_SERVER\", function() { return GET_DATA_SERVER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_DATA_CLIENT\", function() { return GET_DATA_CLIENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_FIRESTORE_DATA\", function() { return GET_FIRESTORE_DATA; });\nconst GET_DATA_SERVER = 'GET_DATA_SERVER';\nconst GET_DATA_CLIENT = 'GET_DATA_CLIENT';\nconst GET_FIRESTORE_DATA = 'GET_FIRESTORE_DATA';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC90eXBlcy90eXBlcy5qcz85MmViIl0sIm5hbWVzIjpbIkdFVF9EQVRBX1NFUlZFUiIsIkdFVF9EQVRBX0NMSUVOVCIsIkdFVF9GSVJFU1RPUkVfREFUQSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQiIsImZpbGUiOiIuL3JlZHV4L3R5cGVzL3R5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdFVF9EQVRBX1NFUlZFUiA9ICdHRVRfREFUQV9TRVJWRVInO1xuZXhwb3J0IGNvbnN0IEdFVF9EQVRBX0NMSUVOVCA9ICdHRVRfREFUQV9DTElFTlQnO1xuZXhwb3J0IGNvbnN0IEdFVF9GSVJFU1RPUkVfREFUQSA9ICdHRVRfRklSRVNUT1JFX0RBVEEnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/types/types.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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