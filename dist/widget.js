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

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cdnLink\": () => (/* binding */ cdnLink)\n/* harmony export */ });\nvar cdnLink = \"https://cdn.jsdelivr.net/gh/HarikrishnanMidhun77/staccess@3fb26da51b5d8d9cd8c6a0e4b0645b8877705ce2/\";\n\n//# sourceURL=webpack://js-widget/./src/consts.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./src/services.js\");\n/* harmony import */ var _views_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/message */ \"./src/views/message.js\");\n\n\nvar supportedAPI = [\"init\", \"message1\", \"custom_params\"]; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)\n\n/**\n    The main entry of the application\n    */\n\nfunction app(window) {\n  console.log(\"JS-Widget starting\"); // set default configurations\n\n  var configurations = {\n    someDefaultConfiguration: false\n  }; // all methods that were called till now and stored in queue\n  // needs to be called now\n\n  var globalObject = window[window[\"JS-Widget\"]];\n  var queue = globalObject.q;\n\n  if (queue) {\n    for (var i = 0; i < queue.length; i++) {\n      if (queue[i][0].toLowerCase() == \"init\") {\n        configurations = extendObject(configurations, queue[i][1]);\n        console.log(\"JS-Widget started\", configurations);\n      } else apiHandler(queue[i][0], queue[i][1]);\n    }\n  } // override temporary (until the app loaded) handler\n  // for widget's API calls\n\n\n  globalObject = apiHandler;\n  globalObject.configurations = configurations;\n}\n/**\n    Method that handles all API calls\n    */\n\n\nfunction apiHandler(api, params) {\n  if (!api) throw Error(\"API method required\");\n  api = api.toLowerCase();\n  if (supportedAPI.indexOf(api) === -1) throw Error(\"Method \".concat(api, \" is not supported\"));\n  console.log(\"Handling API call \".concat(api), params);\n\n  switch (api) {\n    // TODO: add API implementation\n    case \"message1\":\n      (0,_views_message__WEBPACK_IMPORTED_MODULE_1__.show)(params);\n      break;\n\n    case \"custom_params\":\n      (0,_views_message__WEBPACK_IMPORTED_MODULE_1__.setParams)(params);\n      break;\n\n    default:\n      console.warn(\"No handler defined for \".concat(api));\n  }\n}\n\nfunction extendObject(a, b) {\n  for (var key in b) {\n    if (b.hasOwnProperty(key)) a[key] = b[key];\n  }\n\n  return a;\n}\n\napp(window);\n\n//# sourceURL=webpack://js-widget/./src/main.js?");

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ping\": () => (/* binding */ ping)\n/* harmony export */ });\nfunction ping() {\n  return 'pong';\n}\n\n//# sourceURL=webpack://js-widget/./src/services.js?");

/***/ }),

/***/ "./src/views/message.js":
/*!******************************!*\
  !*** ./src/views/message.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"close\": () => (/* binding */ close),\n/* harmony export */   \"openSidebar\": () => (/* binding */ openSidebar),\n/* harmony export */   \"setParams\": () => (/* binding */ setParams),\n/* harmony export */   \"show\": () => (/* binding */ show)\n/* harmony export */ });\n/* harmony import */ var _message_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.html */ \"./src/views/message.html\");\n/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.css */ \"./src/views/message.css\");\n/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.css */ \"./src/views/sidebar.css\");\n/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile.css */ \"./src/views/tile.css\");\n/* harmony import */ var _consts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../consts.js */ \"./src/consts.js\");\n\n\n\n\n\nvar elements = [];\nvar body;\nfunction show(text) {\n  console.log(\"in show\"); // // convert plain HTML string into DOM elements\n  // let temporary = document.createElement(\"div\");\n  // temporary.innerHTML = html;\n  // //alert(temporary.innerHTML);\n  // // temporary.getElementsByClassName(\"float__access\")[0].style.backgroundColor =\n  // //   \"rgb(345,42,42)\";\n  // // append elements to body\n  // // body = document.getElementsByTagName(\"body\")[0];\n  // while (temporary.children.length > 0) {\n  //   elements.push(temporary.children[0]);\n  //   document.body.appendChild(temporary.children[0]);\n  // }\n  // console.log(\" temporary.innerHTML\", temporary.innerHTML);\n  // document.body.appendChild(temporary);\n  // body.addEventListener(\"click\", close);\n  // console.log(\"event added\");\n}\nfunction setParams(params) {\n  console.log(\"in color\");\n  var temporary = document.createElement(\"div\");\n  temporary.innerHTML = _message_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  console.log(\" temporary.innerHTML\", temporary.innerHTML); // alert(temporary.getElementsByClassName(\"float__access\")[0].innerHTML);\n  //document.body.appendChild(temporary);\n\n  body = document.getElementsByTagName(\"body\")[0];\n\n  while (temporary.children.length > 0) {\n    document.body.appendChild(temporary.children[0]);\n    elements.push(temporary.children[0]);\n  }\n\n  var s = document.createElement(\"script\");\n  s.type = \"application/javascript\";\n  s.src = _consts_js__WEBPACK_IMPORTED_MODULE_4__.cdnLink + \"dist/fd5d99e879e03ffd8765.js\"; //cdnLink + \"src/functions/fontFunctions.js\"; //\"http://localhost:8080/fd5d99e879e03ffd8765.js\"; //\"../functions/fontFunctions.js\";\n\n  document.body.appendChild(s);\n  var paramArr = params.split(\"::\");\n  document.getElementsByClassName(\"float__access\")[0].style.backgroundColor = paramArr[0];\n\n  switch (paramArr[1]) {\n    case \"0\":\n      // right bottom\n      break;\n\n    case \"1\":\n      //left bottom\n      document.getElementsByClassName(\"float__access\")[0].style.left = \"40px\";\n      document.getElementsByClassName(\"float__access\")[0].style.right = \"0px\";\n      break;\n\n    case \"2\":\n      //left top\n      document.getElementsByClassName(\"float__access\")[0].style.bottom = \"0px\";\n      document.getElementsByClassName(\"float__access\")[0].style.top = \"40px\";\n      document.getElementsByClassName(\"float__access\")[0].style.left = \"40px\";\n      document.getElementsByClassName(\"float__access\")[0].style.right = \"0px\";\n      break;\n\n    case \"3\":\n      // right top\n      document.getElementsByClassName(\"float__access\")[0].style.bottom = \"0px\";\n      document.getElementsByClassName(\"float__access\")[0].style.top = \"40px\";\n      break;\n  }\n\n  document.getElementById(\"access__btn\").addEventListener(\"click\", openSidebar); // TODO: split color param with : and add color and position\n  //  applyAllFunctions();\n}\nfunction close() {\n  while (elements.length > 0) {\n    elements.pop().remove();\n  }\n\n  body.removeEventListener(\"click\", close);\n}\nfunction openSidebar() {\n  console.log(\"button clicked\");\n\n  if (document.getElementsByClassName(\"st_sidebar__\")[0].style.visibility == \"visible\") {\n    document.getElementsByClassName(\"st_sidebar__\")[0].style.visibility = \"hidden\";\n    document.getElementById(\"staccess__readtext_stop__btn\").style.visibility = \"hidden\";\n  } else {\n    document.getElementsByClassName(\"st_sidebar__\")[0].style.visibility = \"visible\";\n  }\n} // export function openSidebar() {\n//   console.log(\"click event in open\");\n//   // document\n//   //   .getElementById(\"access__btn\")\n//   //   .addEventListener(\"click\", closeSidebar);\n//   console.log(\"d\", document.getElementById(\"access__btn\").innerHTML);\n//   let temporary = document.createElement(\"div\");\n//   temporary.innerHTML = html;\n//   document.getElementsByClassName(\"st_sidebar__\")[0].style.visibility = \"visible\";\n//   body = document.getElementsByTagName(\"body\")[0];\n//   while (temporary.children.length > 0) {\n//     elements.push(temporary.children[0]);\n//     body.appendChild(temporary.children[0]);\n//   }\n//   console.log(\"click event in open\");\n// }\n\n/* on refreshing the page, \n all the activated functionalities should be reactivated checking the cookies */\n// function applyAllFunctions() {\n//   dyslexiaFontSwitch();\n// }\n\n//# sourceURL=webpack://js-widget/./src/views/message.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/message.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/message.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"svg {\\n  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */\\n  filter: invert(100%);\\n}\\n\\n.js-widget-overlay {\\n  z-index: 10001;\\n  position: fixed;\\n  top: 0px;\\n  bottom: 0px;\\n  left: 0px;\\n  right: 0px;\\n  opacity: 0.8;\\n  background-color: #000;\\n}\\n.js-widget-dialog {\\n  position: fixed;\\n  z-index: 10002;\\n  background: #fff;\\n  left: 50%;\\n  top: 30%;\\n  margin: 0 0 0 -120px;\\n  width: 200px;\\n  padding: 10px 20px;\\n  border: solid 1px #333;\\n}\\n.float__access {\\n  z-index: 2147483647;\\n  position: fixed;\\n  width: 80px;\\n  height: 80px;\\n  bottom: 40px;\\n  right: 40px;\\n  background-color: #0c9;\\n  color: #fff;\\n  border-radius: 50px;\\n  text-align: center;\\n  border: none;\\n  box-shadow: 2px 2px 3px #999;\\n  /* @media all and (max-width: 30em) {\\n    button {\\n      width: 60px;\\n      height: 60px;\\n    }\\n  } */\\n  @media only screen and (max-width: 768px) {\\n    div.float__access {\\n      width: 80px;\\n      height: 80px;\\n    }\\n  }\\n}\\n.my-float {\\n  /* margin-top: 22px; */\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/views/message.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,4BAA4B,EAAE,qBAAqB;EACnD,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,QAAQ;EACR,WAAW;EACX,SAAS;EACT,UAAU;EACV,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,SAAS;EACT,QAAQ;EACR,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,4BAA4B;EAC5B;;;;;KAKG;EACH;IACE;MACE,WAAW;MACX,YAAY;IACd;EACF;AACF;AACA;EACE,sBAAsB;AACxB\",\"sourcesContent\":[\"svg {\\n  -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */\\n  filter: invert(100%);\\n}\\n\\n.js-widget-overlay {\\n  z-index: 10001;\\n  position: fixed;\\n  top: 0px;\\n  bottom: 0px;\\n  left: 0px;\\n  right: 0px;\\n  opacity: 0.8;\\n  background-color: #000;\\n}\\n.js-widget-dialog {\\n  position: fixed;\\n  z-index: 10002;\\n  background: #fff;\\n  left: 50%;\\n  top: 30%;\\n  margin: 0 0 0 -120px;\\n  width: 200px;\\n  padding: 10px 20px;\\n  border: solid 1px #333;\\n}\\n.float__access {\\n  z-index: 2147483647;\\n  position: fixed;\\n  width: 80px;\\n  height: 80px;\\n  bottom: 40px;\\n  right: 40px;\\n  background-color: #0c9;\\n  color: #fff;\\n  border-radius: 50px;\\n  text-align: center;\\n  border: none;\\n  box-shadow: 2px 2px 3px #999;\\n  /* @media all and (max-width: 30em) {\\n    button {\\n      width: 60px;\\n      height: 60px;\\n    }\\n  } */\\n  @media only screen and (max-width: 768px) {\\n    div.float__access {\\n      width: 80px;\\n      height: 80px;\\n    }\\n  }\\n}\\n.my-float {\\n  /* margin-top: 22px; */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-widget/./src/views/message.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/sidebar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/sidebar.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".st_sidebar__ {\\n  margin: 0;\\n  padding: 0;\\n  width: 400px;\\n  background-color: #f1f1f1;\\n  position: fixed;\\n  height: 100%;\\n  overflow: auto;\\n  visibility: hidden;\\n  top: 0;\\n  z-index: 2147483647;\\n}\\n@media screen and (max-width: 700px) {\\n  .st_sidebar__ {\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    z-index: 2147483647;\\n  }\\n  .st_sidebar__ a {\\n    float: left;\\n  }\\n  div.content {\\n    margin-left: 0;\\n  }\\n}\\n\\n/* @media screen and (max-width: 400px) {\\n  .st_sidebar__ a {\\n    text-align: center;\\n    float: none;\\n    top: 0;\\n  }\\n}\\n.st_sidebar__ a {\\n  display: block;\\n  color: black;\\n  padding: 16px;\\n  text-decoration: none;\\n}\\n\\n.st_sidebar__ a.active {\\n  background-color: #04aa6d;\\n  color: white;\\n}\\n\\n.st_sidebar__ a:hover:not(.active) {\\n  background-color: #555;\\n  color: white;\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/views/sidebar.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,MAAM;EACN,mBAAmB;AACrB;AACA;EACE;IACE,WAAW;IACX,YAAY;IACZ,MAAM;IACN,mBAAmB;EACrB;EACA;IACE,WAAW;EACb;EACA;IACE,cAAc;EAChB;AACF;;AAEA;;;;;;;;;;;;;;;;;;;;;;GAsBG\",\"sourcesContent\":[\".st_sidebar__ {\\n  margin: 0;\\n  padding: 0;\\n  width: 400px;\\n  background-color: #f1f1f1;\\n  position: fixed;\\n  height: 100%;\\n  overflow: auto;\\n  visibility: hidden;\\n  top: 0;\\n  z-index: 2147483647;\\n}\\n@media screen and (max-width: 700px) {\\n  .st_sidebar__ {\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    z-index: 2147483647;\\n  }\\n  .st_sidebar__ a {\\n    float: left;\\n  }\\n  div.content {\\n    margin-left: 0;\\n  }\\n}\\n\\n/* @media screen and (max-width: 400px) {\\n  .st_sidebar__ a {\\n    text-align: center;\\n    float: none;\\n    top: 0;\\n  }\\n}\\n.st_sidebar__ a {\\n  display: block;\\n  color: black;\\n  padding: 16px;\\n  text-decoration: none;\\n}\\n\\n.st_sidebar__ a.active {\\n  background-color: #04aa6d;\\n  color: white;\\n}\\n\\n.st_sidebar__ a:hover:not(.active) {\\n  background-color: #555;\\n  color: white;\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-widget/./src/views/sidebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/views/tile.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/tile.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary__: #1564bf;\\n  --hover__: #5e91f2;\\n  --selected__: #003b8e;\\n}\\n.whitify {\\n  /* svg on an img tag */\\n  -webkit-filter: invert(1); /* safari 6.0 - 9.0 */\\n  filter: invert(1);\\n}\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #629749;\\n  z-index: 999;\\n  content: \\\"\\\";\\n} */\\n.scroller {\\n  overflow: auto;\\n  height: 100px;\\n}\\n.backbtn__ {\\n  margin: 5px;\\n  margin-top: 15px;\\n  min-width: 20px;\\n  min-width: 10px;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  cursor: pointer;\\n}\\n.tile__ {\\n  position: relative;\\n  cursor: pointer;\\n}\\n\\n.grid__ {\\n  display: grid;\\n  grid-gap: 10px;\\n  max-width: 306px;\\n  grid-template-columns: minmax(min-content, 150px) minmax(min-content, 150px);\\n  margin: 40px;\\n  margin-top: 50px;\\n  overflow: auto;\\n  height: fit-content;\\n  padding-top: 10px;\\n  padding-bottom: 50px;\\n}\\n\\n.tile__ {\\n  padding: 0;\\n  border: 0;\\n  background: var(--primary__);\\n  /* background: linear-gradient(0deg, var(--selected__) 25%, var(--primary__) 25%)\\n    no-repeat; */\\n  /* background-size: calc(100%) calc(100%); */\\n  background-position: top;\\n  color: white;\\n  min-width: 50px;\\n  min-height: 150px;\\n  max-height: 150px;\\n  max-width: 150px;\\n  cursor: pointer;\\n}\\n/* button :hover {\\n   background: var(--hover__); \\n  cursor: pointer;\\n} */\\n/* .st_sidebar__ button :hover {\\n  background: var(--hover__);\\n}\\nbutton.tile__overlay__:hover {\\n  background: var(--hover__);\\n} */\\n\\nbutton.tile__:hover {\\n  background: var(--hover__);\\n}\\n.tile__ img {\\n  width: 35px;\\n  height: 35px;\\n  display: inline;\\n}\\n.float__access img {\\n  width: 35px;\\n  height: 35px;\\n  display: inline;\\n}\\n.float__access {\\n  cursor: pointer;\\n}\\n.tile__ p {\\n  font-size: 20px;\\n  padding-top: 5px;\\n}\\n.tile__ i {\\n  padding-top: 30px;\\n}\\n.tile__image {\\n  height: 100%;\\n  width: 100%;\\n  max-height: 150px;\\n  max-width: 150px;\\n  display: block;\\n  object-fit: contain;\\n  display: inline;\\n}\\n\\n.tile__overlay__ {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #1565c0;\\n}\\n#st__button_grid__ {\\n  overflow-y: auto;\\n  /* max-height: 800px; */\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n}\\n\\n::-webkit-scrollbar {\\n  -webkit-appearance: none;\\n}\\n\\n::-webkit-scrollbar:vertical {\\n  width: 12px;\\n}\\n\\n::-webkit-scrollbar:horizontal {\\n  height: 12px;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  border-radius: 10px;\\n  border: 2px solid #ffffff;\\n}\\n\\n::-webkit-scrollbar-track {\\n  border-radius: 10px;\\n  background-color: #ffffff;\\n}\\n-webkit-scrollbar,\\n-webkit-scrollbar-track {\\n  display: block !important;\\n}\\n\\n@media screen and (max-width: 700px) {\\n  #staccess__linefocus__btn {\\n    display: none;\\n  }\\n  #staccess__dyslexiaruler__btn {\\n    display: none;\\n  }\\n  #staccess__readingruler__btn {\\n    display: none;\\n  }\\n  #staccess__whitecursor__btn {\\n    display: none;\\n  }\\n  #staccess__clickandread__btn {\\n    display: none;\\n  }\\n  #staccess__readtext__btn {\\n    display: none;\\n  }\\n}\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #c5cae9;\\n  z-index: 999;\\n  content: \\\"\\\";\\n}\\n.tile__ {\\n  position: relative;\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/views/tile.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;AACvB;AACA;EACE,sBAAsB;EACtB,yBAAyB,EAAE,qBAAqB;EAChD,iBAAiB;AACnB;AACA;;;;;;;;;GASG;AACH;EACE,cAAc;EACd,aAAa;AACf;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,4EAA4E;EAC5E,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,4BAA4B;EAC5B;gBACc;EACd,4CAA4C;EAC5C,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;AACA;;;GAGG;AACH;;;;;GAKG;;AAEH;EACE,0BAA0B;AAC5B;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;AACF;AACA;;;;;;;;;;;;GAYG\",\"sourcesContent\":[\":root {\\n  --primary__: #1564bf;\\n  --hover__: #5e91f2;\\n  --selected__: #003b8e;\\n}\\n.whitify {\\n  /* svg on an img tag */\\n  -webkit-filter: invert(1); /* safari 6.0 - 9.0 */\\n  filter: invert(1);\\n}\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #629749;\\n  z-index: 999;\\n  content: \\\"\\\";\\n} */\\n.scroller {\\n  overflow: auto;\\n  height: 100px;\\n}\\n.backbtn__ {\\n  margin: 5px;\\n  margin-top: 15px;\\n  min-width: 20px;\\n  min-width: 10px;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  cursor: pointer;\\n}\\n.tile__ {\\n  position: relative;\\n  cursor: pointer;\\n}\\n\\n.grid__ {\\n  display: grid;\\n  grid-gap: 10px;\\n  max-width: 306px;\\n  grid-template-columns: minmax(min-content, 150px) minmax(min-content, 150px);\\n  margin: 40px;\\n  margin-top: 50px;\\n  overflow: auto;\\n  height: fit-content;\\n  padding-top: 10px;\\n  padding-bottom: 50px;\\n}\\n\\n.tile__ {\\n  padding: 0;\\n  border: 0;\\n  background: var(--primary__);\\n  /* background: linear-gradient(0deg, var(--selected__) 25%, var(--primary__) 25%)\\n    no-repeat; */\\n  /* background-size: calc(100%) calc(100%); */\\n  background-position: top;\\n  color: white;\\n  min-width: 50px;\\n  min-height: 150px;\\n  max-height: 150px;\\n  max-width: 150px;\\n  cursor: pointer;\\n}\\n/* button :hover {\\n   background: var(--hover__); \\n  cursor: pointer;\\n} */\\n/* .st_sidebar__ button :hover {\\n  background: var(--hover__);\\n}\\nbutton.tile__overlay__:hover {\\n  background: var(--hover__);\\n} */\\n\\nbutton.tile__:hover {\\n  background: var(--hover__);\\n}\\n.tile__ img {\\n  width: 35px;\\n  height: 35px;\\n  display: inline;\\n}\\n.float__access img {\\n  width: 35px;\\n  height: 35px;\\n  display: inline;\\n}\\n.float__access {\\n  cursor: pointer;\\n}\\n.tile__ p {\\n  font-size: 20px;\\n  padding-top: 5px;\\n}\\n.tile__ i {\\n  padding-top: 30px;\\n}\\n.tile__image {\\n  height: 100%;\\n  width: 100%;\\n  max-height: 150px;\\n  max-width: 150px;\\n  display: block;\\n  object-fit: contain;\\n  display: inline;\\n}\\n\\n.tile__overlay__ {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #1565c0;\\n}\\n#st__button_grid__ {\\n  overflow-y: auto;\\n  /* max-height: 800px; */\\n  margin-top: 20px;\\n  margin-bottom: 20px;\\n}\\n\\n::-webkit-scrollbar {\\n  -webkit-appearance: none;\\n}\\n\\n::-webkit-scrollbar:vertical {\\n  width: 12px;\\n}\\n\\n::-webkit-scrollbar:horizontal {\\n  height: 12px;\\n}\\n\\n::-webkit-scrollbar-thumb {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  border-radius: 10px;\\n  border: 2px solid #ffffff;\\n}\\n\\n::-webkit-scrollbar-track {\\n  border-radius: 10px;\\n  background-color: #ffffff;\\n}\\n-webkit-scrollbar,\\n-webkit-scrollbar-track {\\n  display: block !important;\\n}\\n\\n@media screen and (max-width: 700px) {\\n  #staccess__linefocus__btn {\\n    display: none;\\n  }\\n  #staccess__dyslexiaruler__btn {\\n    display: none;\\n  }\\n  #staccess__readingruler__btn {\\n    display: none;\\n  }\\n  #staccess__whitecursor__btn {\\n    display: none;\\n  }\\n  #staccess__clickandread__btn {\\n    display: none;\\n  }\\n  #staccess__readtext__btn {\\n    display: none;\\n  }\\n}\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #c5cae9;\\n  z-index: 999;\\n  content: \\\"\\\";\\n}\\n.tile__ {\\n  position: relative;\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-widget/./src/views/tile.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-widget/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === \"function\") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || \"\").concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\"\\n\");\n  }\n\n  return [content].join(\"\\n\");\n};\n\n//# sourceURL=webpack://js-widget/./node_modules/css-loader/dist/runtime/sourceMaps.js?");

/***/ }),

/***/ "./src/views/message.html":
/*!********************************!*\
  !*** ./src/views/message.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/click.svg */ \"./src/icons/click.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/stop.svg */ \"./src/icons/stop.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/dyslexia.svg */ \"./src/icons/dyslexia.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/font-size.svg */ \"./src/icons/font-size.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/letter-spacing.svg */ \"./src/icons/letter-spacing.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/line-height.svg */ \"./src/icons/line-height.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/line-focus2.svg */ \"./src/icons/line-focus2.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/ruler.svg */ \"./src/icons/ruler.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/cursor-icon.svg */ \"./src/icons/cursor-icon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/moon.svg */ \"./src/icons/moon.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/moon2.svg */ \"./src/icons/moon2.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/dyslexia-ruler.svg */ \"./src/icons/dyslexia-ruler.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/accessibility.svg */ \"./src/icons/accessibility.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar code = \"<!-- <div class=\\\"js-widget-overlay\\\"></div>\\n<div class=\\\"js-widget-dialog\\\"></div> -->\\n<meta content=\\\"width=device-width, initial-scale=1\\\" name=\\\"viewport\\\" />\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1.0\\\" />\\n<\" + \"script\\n  src=\\\"https://kit.fontawesome.com/8a8f1a6777.js\\\"\\n  crossorigin=\\\"anonymous\\\"\\n><\" + \"/script>\\n<!-- <link\\n  rel=\\\"stylesheet\\\"\\n  href=\\\"http://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css\\\"\\n/> -->\\n<meta content=\\\"width=device-width, initial-scale=1\\\" name=\\\"viewport\\\" />\\n<div>\\n  <div class=\\\"st_sidebar__\\\">\\n    <!-- <a class=\\\"active\\\" href=\\\"#home\\\">Home</a>\\n    <a href=\\\"#news\\\">News</a>\\n    <a href=\\\"#contact\\\">Contact</a>\\n    <a href=\\\"#about\\\">About</a> -->\\n\\n    <!-- <button type=\\\"button\\\" class=\\\"backbtn\\\">\\n      <img src=\\\"../icons/back.svg\\\" />\\n    </button> -->\\n    <button\\n      onclick=\\\"openSidebar()\\\"\\n      aria-expanded=\\\"false\\\"\\n      id=\\\"menu-trigger\\\"\\n      class=\\\"backbtn__\\\"\\n    >\\n      <svg\\n        viewBox=\\\"0 0 32 32\\\"\\n        width=\\\"32px\\\"\\n        height=\\\"32px\\\"\\n        aria-hidden=\\\"true\\\"\\n        focusable=\\\"false\\\"\\n      >\\n        <!-- svg content -->\\n        <?xml version=\\\"1.0\\\" encoding=\\\"iso-8859-1\\\"?>\\n        <!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\\n        <svg\\n          version=\\\"1.1\\\"\\n          id=\\\"Capa_1\\\"\\n          xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n          xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\"\\n          x=\\\"0px\\\"\\n          y=\\\"0px\\\"\\n          viewBox=\\\"0 0 486.975 486.975\\\"\\n          style=\\\"enable-background: new 0 0 486.975 486.975\\\"\\n          xml:space=\\\"preserve\\\"\\n        >\\n          <g>\\n            <path\\n              d=\\\"M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1\\n\\t\\tl139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5\\n\\t\\tS480.975,230.025,473.475,230.025z\\\"\\n            />\\n          </g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n          <g></g>\\n        </svg>\\n      </svg>\\n    </button>\\n    <div id=\\\"st__button_grid__\\\" class=\\\"grid__\\\">\\n      <button\\n        id=\\\"staccess__clickandread__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyClickAndRead()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          id=\\\"staccess__clickandread__img\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"\\n          alt=\\\"Activate Click and Raed\\\"\\n        />\\n        <p class=\\\"staccess\\\">Click & Read</p>\\n      </button>\\n      <!-- <button\\n        id=\\\"staccess__readtext__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyReadText()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          id=\\\"staccess__readtext__img\\\"\\n          src=\\\"../icons/audio.svg\\\"\\n          alt=\\\"Activate Read Text\\\"\\n        />\\n        <p class=\\\"staccess\\\">Read Text</p>\\n      </button> -->\\n      <button\\n        id=\\\"staccess__readtext_stop__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        style=\\\"display: none\\\"\\n        onclick=\\\"applyReadTextStop()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl whitify\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          id=\\\"staccess__readtext__img\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"\\n          alt=\\\"Stop Reading Text\\\"\\n        />\\n        <p class=\\\"staccess\\\">Stop Reading</p>\\n      </button>\\n      <button\\n        id=\\\"staccess__dyslexiaFont__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"dyslexiaFontSwitch()\\\"\\n      >\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n          alt=\\\"Activate dyslexia font\\\"\\n        />\\n\\n        <!-- <i class=\\\"fa-solid fa-glasses fa-2xl\\\"></i> -->\\n        <p class=\\\"staccess\\\">Dyslexic Font</p>\\n        <!-- <i class=\\\"fa-solid fa-glasses\\\"></i> -->\\n      </button>\\n\\n      <button\\n        id=\\\"staccess__fontsize__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"changeFontSize()\\\"\\n      >\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n          alt=\\\"Change font size\\\"\\n        />\\n        <p class=\\\"staccess\\\">Font Size</p>\\n      </button>\\n\\n      <button\\n        id=\\\"staccess__letterspacing__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"changeLetterSpacing()\\\"\\n      >\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"\\n          alt=\\\"Change letter space\\\"\\n        />\\n        <p class=\\\"staccess\\\">Letter Spacing</p>\\n      </button>\\n\\n      <button\\n        id=\\\"staccess__lineheight__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"changeLineHeight()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\"\\n          alt=\\\"Change line height\\\"\\n        />\\n        <p class=\\\"staccess\\\">Line Height</p>\\n      </button>\\n      <button\\n        id=\\\"staccess__linefocus__btn\\\"\\n        class=\\\"tile__ mobile_special__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyLineFocus()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\"\\n          alt=\\\"Activate Line Focus\\\"\\n        />\\n        <p class=\\\"staccess\\\">Line Focus</p>\\n      </button>\\n      <button\\n        id=\\\"staccess__readingruler__btn\\\"\\n        class=\\\"tile__ mobile_special__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyReadingRuler()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\"\\n          alt=\\\"Activate Reading Ruler\\\"\\n        />\\n        <p class=\\\"staccess\\\">Reading Ruler</p>\\n      </button>\\n      <button\\n        id=\\\"staccess__whitecursor__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyWhiteCursor()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\"\\n          alt=\\\"Activate White Cursor\\\"\\n        />\\n        <p class=\\\"staccess\\\">White Cursor</p>\\n      </button>\\n      <button\\n        id=\\\"staccess__bluelightfilter__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyBluelightFilter()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\"\\n          alt=\\\"Activate Bluelight Filter\\\"\\n        />\\n        <p class=\\\"staccess\\\">Bluelight Filter</p>\\n      </button>\\n      <button\\n        id=\\\"staccess__screenoverlay__btn\\\"\\n        class=\\\"tile__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyScreenOverlay()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\"\\n          alt=\\\"Activate Screen Overlay\\\"\\n        />\\n        <p class=\\\"staccess\\\">Screen Overlay</p>\\n      </button>\\n      <button\\n        id=\\\"staccess__dyslexiaruler__btn\\\"\\n        class=\\\"tile__ mobile_special__\\\"\\n        type=\\\"button\\\"\\n        onclick=\\\"applyDyslexiaRuler()\\\"\\n      >\\n        <i class=\\\"fa-solid fa-line-height fa-2xl\\\"></i>\\n        <img\\n          class=\\\"whitify\\\"\\n          src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\"\\n          alt=\\\"Activate Dyslexia Ruler\\\"\\n        />\\n        <p class=\\\"staccess\\\">Dyslexia Ruler</p>\\n      </button>\\n    </div>\\n  </div>\\n  <button id=\\\"access__btn\\\" class=\\\"float__access\\\">\\n    <!-- <i class=\\\"fa fa-low-vision\\\" aria-hidden=\\\"true\\\"></i> -->\\n    <img\\n      class=\\\"whitify\\\"\\n      src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\"\\n      alt=\\\"Accessibility Widget Icon\\\"\\n    />\\n\\n    <!-- <i class=\\\"fa fa-wheelchair-alt\\\" aria-hidden=\\\"true\\\"></i> -->\\n  </button>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://js-widget/./src/views/message.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://js-widget/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/views/message.css":
/*!*******************************!*\
  !*** ./src/views/message.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./message.css */ \"./node_modules/css-loader/dist/cjs.js!./src/views/message.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-widget/./src/views/message.css?");

/***/ }),

/***/ "./src/views/sidebar.css":
/*!*******************************!*\
  !*** ./src/views/sidebar.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ \"./node_modules/css-loader/dist/cjs.js!./src/views/sidebar.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-widget/./src/views/sidebar.css?");

/***/ }),

/***/ "./src/views/tile.css":
/*!****************************!*\
  !*** ./src/views/tile.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tile.css */ \"./node_modules/css-loader/dist/cjs.js!./src/views/tile.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-widget/./src/views/tile.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/icons/accessibility.svg":
/*!*************************************!*\
  !*** ./src/icons/accessibility.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bfb1d67633ee61c79a4a.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/accessibility.svg?");

/***/ }),

/***/ "./src/icons/click.svg":
/*!*****************************!*\
  !*** ./src/icons/click.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3e5d0ad17a4dcd4fb526.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/click.svg?");

/***/ }),

/***/ "./src/icons/cursor-icon.svg":
/*!***********************************!*\
  !*** ./src/icons/cursor-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bf646bc0a3644d38ec9.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/cursor-icon.svg?");

/***/ }),

/***/ "./src/icons/dyslexia-ruler.svg":
/*!**************************************!*\
  !*** ./src/icons/dyslexia-ruler.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a5c2a790e52a894bf59.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/dyslexia-ruler.svg?");

/***/ }),

/***/ "./src/icons/dyslexia.svg":
/*!********************************!*\
  !*** ./src/icons/dyslexia.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"922e64d2c09e0eefc03f.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/dyslexia.svg?");

/***/ }),

/***/ "./src/icons/font-size.svg":
/*!*********************************!*\
  !*** ./src/icons/font-size.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fdb84fd21ec5382cbe01.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/font-size.svg?");

/***/ }),

/***/ "./src/icons/letter-spacing.svg":
/*!**************************************!*\
  !*** ./src/icons/letter-spacing.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3f14ab46581d00c8e02.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/letter-spacing.svg?");

/***/ }),

/***/ "./src/icons/line-focus2.svg":
/*!***********************************!*\
  !*** ./src/icons/line-focus2.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0ad35d3c8a9fd72300e.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/line-focus2.svg?");

/***/ }),

/***/ "./src/icons/line-height.svg":
/*!***********************************!*\
  !*** ./src/icons/line-height.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa2116ea213356c9b411.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/line-height.svg?");

/***/ }),

/***/ "./src/icons/moon.svg":
/*!****************************!*\
  !*** ./src/icons/moon.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31781cb05b1b4620aab6.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/moon.svg?");

/***/ }),

/***/ "./src/icons/moon2.svg":
/*!*****************************!*\
  !*** ./src/icons/moon2.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"62ce6451e8a2ef489a97.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/moon2.svg?");

/***/ }),

/***/ "./src/icons/ruler.svg":
/*!*****************************!*\
  !*** ./src/icons/ruler.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc928310f1071fa1c517.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/ruler.svg?");

/***/ }),

/***/ "./src/icons/stop.svg":
/*!****************************!*\
  !*** ./src/icons/stop.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae3d6e4b0e2638028d1b.svg\";\n\n//# sourceURL=webpack://js-widget/./src/icons/stop.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgY2FuJ3QgYmUgaW5saW5lZCBiZWNhdXNlIHRoZSBldmFsIGRldnRvb2wgaXMgdXNlZC5cbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=