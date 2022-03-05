/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scene\": () => (/* binding */ scene)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../node_modules/three/examples/jsm/loaders/GLTFLoader'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../node_modules/three/examples/jsm/controls/OrbitControls'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n//import { light2, light3, light4 } from './direct_light.js';\r\n//import { mixer, action, gltfLoader2 } from './loader';\r\n\r\nconst scene = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\nconst camera = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(75, window.innerWidth / window.innerHeight, 0.1, 1000);\r\n\r\nconst renderer = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ antialias: true });\r\nrenderer.setSize(window.innerWidth, window.innerHeight);\r\nrenderer.shadowMap.enabled = true;\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\nscene.background = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'three'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( 0xFFFFFF );\r\n\n\n//# sourceURL=webpack://machine_click/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;