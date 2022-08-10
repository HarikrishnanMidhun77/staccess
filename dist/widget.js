/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
//new widget
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/main.js":
      /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");\n/* harmony import */ var _views_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/message */ "./src/views/message.js");\n\n\nvar supportedAPI = ["init", "message1", "color1"]; // enlist all methods supported by API (e.g. `mw(\'event\', \'user-login\');`)\n\n/**\n    The main entry of the application\n    */\n\nfunction app(window) {\n  console.log("JS-Widget starting"); // set default configurations\n\n  var configurations = {\n    someDefaultConfiguration: false\n  }; // all methods that were called till now and stored in queue\n  // needs to be called now\n\n  var globalObject = window[window["JS-Widget"]];\n  var queue = globalObject.q;\n\n  if (queue) {\n    for (var i = 0; i < queue.length; i++) {\n      if (queue[i][0].toLowerCase() == "init") {\n        configurations = extendObject(configurations, queue[i][1]);\n        console.log("JS-Widget started", configurations);\n      } else apiHandler(queue[i][0], queue[i][1]);\n    }\n  } // override temporary (until the app loaded) handler\n  // for widget\'s API calls\n\n\n  globalObject = apiHandler;\n  globalObject.configurations = configurations;\n}\n/**\n    Method that handles all API calls\n    */\n\n\nfunction apiHandler(api, params) {\n  if (!api) throw Error("API method required");\n  api = api.toLowerCase();\n  if (supportedAPI.indexOf(api) === -1) throw Error("Method ".concat(api, " is not supported"));\n  console.log("Handling API call ".concat(api), params);\n\n  switch (api) {\n    // TODO: add API implementation\n    case "message1":\n      (0,_views_message__WEBPACK_IMPORTED_MODULE_1__.show)(params);\n      break;\n\n    case "color1":\n      (0,_views_message__WEBPACK_IMPORTED_MODULE_1__.setColor)(params);\n      break;\n\n    default:\n      console.warn("No handler defined for ".concat(api));\n  }\n}\n\nfunction extendObject(a, b) {\n  for (var key in b) {\n    if (b.hasOwnProperty(key)) a[key] = b[key];\n  }\n\n  return a;\n}\n\napp(window);\n\n//# sourceURL=webpack://js-widget/./src/main.js?'
        );

        /***/
      },

    /***/ "./src/services.js":
      /*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ping\": () => (/* binding */ ping)\n/* harmony export */ });\nfunction ping() {\n  return 'pong';\n}\n\n//# sourceURL=webpack://js-widget/./src/services.js?"
        );

        /***/
      },

    /***/ "./src/views/message.js":
      /*!******************************!*\
  !*** ./src/views/message.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "close": () => (/* binding */ close),\n/* harmony export */   "openSidebar": () => (/* binding */ openSidebar),\n/* harmony export */   "setColor": () => (/* binding */ setColor),\n/* harmony export */   "show": () => (/* binding */ show)\n/* harmony export */ });\n/* harmony import */ var _message_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.html */ "./src/views/message.html");\n/* harmony import */ var _message_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.css */ "./src/views/message.css");\n/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.css */ "./src/views/sidebar.css");\n/* harmony import */ var _tile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tile.css */ "./src/views/tile.css");\n\n\n\n\nvar elements = [];\nvar body;\nfunction show(text) {\n  console.log("in show"); // // convert plain HTML string into DOM elements\n  // let temporary = document.createElement("div");\n  // temporary.innerHTML = html;\n  // //alert(temporary.innerHTML);\n  // // temporary.getElementsByClassName("float__access")[0].style.backgroundColor =\n  // //   "rgb(345,42,42)";\n  // // append elements to body\n  // // body = document.getElementsByTagName("body")[0];\n  // while (temporary.children.length > 0) {\n  //   elements.push(temporary.children[0]);\n  //   document.body.appendChild(temporary.children[0]);\n  // }\n  // console.log(" temporary.innerHTML", temporary.innerHTML);\n  // document.body.appendChild(temporary);\n  // body.addEventListener("click", close);\n  // console.log("event added");\n}\nfunction setColor(color) {\n  console.log("in color");\n  var temporary = document.createElement("div");\n  temporary.innerHTML = _message_html__WEBPACK_IMPORTED_MODULE_0__["default"];\n  console.log(" temporary.innerHTML", temporary.innerHTML); // alert(temporary.getElementsByClassName("float__access")[0].innerHTML);\n  //document.body.appendChild(temporary);\n\n  body = document.getElementsByTagName("body")[0];\n\n  while (temporary.children.length > 0) {\n    document.body.appendChild(temporary.children[0]);\n    elements.push(temporary.children[0]);\n  }\n\n  var s = document.createElement("script");\n  s.type = "text/javascript";\n  s.src = "/fontFunctions.js"; //"http://localhost:8080/fd5d99e879e03ffd8765.js"; //"../functions/fontFunctions.js";\n\n  document.body.appendChild(s);\n  document.getElementsByClassName("float__access")[0].style.backgroundColor = color;\n  document.getElementById("access__btn").addEventListener("click", openSidebar);\n  applyAllFunctions();\n}\nfunction close() {\n  while (elements.length > 0) {\n    elements.pop().remove();\n  }\n\n  body.removeEventListener("click", close);\n}\nfunction openSidebar() {\n  console.log("button clicked");\n\n  if (document.getElementsByClassName("sidebar")[0].style.visibility == "visible") {\n    document.getElementsByClassName("sidebar")[0].style.visibility = "hidden";\n  } else {\n    document.getElementsByClassName("sidebar")[0].style.visibility = "visible";\n  }\n} // export function openSidebar() {\n//   console.log("click event in open");\n//   // document\n//   //   .getElementById("access__btn")\n//   //   .addEventListener("click", closeSidebar);\n//   console.log("d", document.getElementById("access__btn").innerHTML);\n//   let temporary = document.createElement("div");\n//   temporary.innerHTML = html;\n//   document.getElementsByClassName("sidebar")[0].style.visibility = "visible";\n//   body = document.getElementsByTagName("body")[0];\n//   while (temporary.children.length > 0) {\n//     elements.push(temporary.children[0]);\n//     body.appendChild(temporary.children[0]);\n//   }\n//   console.log("click event in open");\n// }\n\n/* on refreshing the page, \n all the activated functionalities should be reactivated checking the cookies */\n\nfunction applyAllFunctions() {\n  dyslexiaFontSwitch();\n}\n\n//# sourceURL=webpack://js-widget/./src/views/message.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/views/message.css":
      /*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/message.css ***!
  \*********************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".js-widget-overlay {\\n  z-index: 10001;\\n  position: fixed;\\n  top: 0px;\\n  bottom: 0px;\\n  left: 0px;\\n  right: 0px;\\n  opacity: 0.8;\\n  background-color: #000;\\n}\\n.js-widget-dialog {\\n  position: fixed;\\n  z-index: 10002;\\n  background: #fff;\\n  left: 50%;\\n  top: 30%;\\n  margin: 0 0 0 -120px;\\n  width: 200px;\\n  padding: 10px 20px;\\n  border: solid 1px #333;\\n}\\n.float__access {\\n  position: fixed;\\n  width: 80px;\\n  height: 80px;\\n  bottom: 40px;\\n  right: 40px;\\n  background-color: #0c9;\\n  color: #fff;\\n  border-radius: 50px;\\n  text-align: center;\\n  border: none;\\n  box-shadow: 2px 2px 3px #999;\\n  /* @media all and (max-width: 30em) {\\n    button {\\n      width: 60px;\\n      height: 60px;\\n    }\\n  } */\\n  @media only screen and (max-width: 768px) {\\n    div.float__access {\\n      width: 80px;\\n      height: 80px;\\n    }\\n  }\\n}\\n.my-float {\\n  /* margin-top: 22px; */\\n}\\n", "",{"version":3,"sources":["webpack://./src/views/message.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,eAAe;EACf,QAAQ;EACR,WAAW;EACX,SAAS;EACT,UAAU;EACV,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,SAAS;EACT,QAAQ;EACR,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,WAAW;EACX,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,4BAA4B;EAC5B;;;;;KAKG;EACH;IACE;MACE,WAAW;MACX,YAAY;IACd;EACF;AACF;AACA;EACE,sBAAsB;AACxB","sourcesContent":[".js-widget-overlay {\\n  z-index: 10001;\\n  position: fixed;\\n  top: 0px;\\n  bottom: 0px;\\n  left: 0px;\\n  right: 0px;\\n  opacity: 0.8;\\n  background-color: #000;\\n}\\n.js-widget-dialog {\\n  position: fixed;\\n  z-index: 10002;\\n  background: #fff;\\n  left: 50%;\\n  top: 30%;\\n  margin: 0 0 0 -120px;\\n  width: 200px;\\n  padding: 10px 20px;\\n  border: solid 1px #333;\\n}\\n.float__access {\\n  position: fixed;\\n  width: 80px;\\n  height: 80px;\\n  bottom: 40px;\\n  right: 40px;\\n  background-color: #0c9;\\n  color: #fff;\\n  border-radius: 50px;\\n  text-align: center;\\n  border: none;\\n  box-shadow: 2px 2px 3px #999;\\n  /* @media all and (max-width: 30em) {\\n    button {\\n      width: 60px;\\n      height: 60px;\\n    }\\n  } */\\n  @media only screen and (max-width: 768px) {\\n    div.float__access {\\n      width: 80px;\\n      height: 80px;\\n    }\\n  }\\n}\\n.my-float {\\n  /* margin-top: 22px; */\\n}\\n"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-widget/./src/views/message.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/views/sidebar.css":
      /*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/sidebar.css ***!
  \*********************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".sidebar {\\n  margin: 0;\\n  padding: 0;\\n  width: 400px;\\n  background-color: #f1f1f1;\\n  position: fixed;\\n  height: 100%;\\n  overflow: auto;\\n  visibility: hidden;\\n  top: 0;\\n  z-index: 2147483647;\\n}\\n@media screen and (max-width: 700px) {\\n  .sidebar {\\n    width: 100%;\\n    height: auto;\\n    /* position: relative; */\\n    top: 0;\\n  }\\n  .sidebar a {\\n    float: left;\\n  }\\n  div.content {\\n    margin-left: 0;\\n  }\\n}\\n\\n@media screen and (max-width: 400px) {\\n  .sidebar a {\\n    text-align: center;\\n    float: none;\\n    top: 0;\\n  }\\n}\\n.sidebar a {\\n  display: block;\\n  color: black;\\n  padding: 16px;\\n  text-decoration: none;\\n}\\n\\n.sidebar a.active {\\n  background-color: #04aa6d;\\n  color: white;\\n}\\n\\n.sidebar a:hover:not(.active) {\\n  background-color: #555;\\n  color: white;\\n}\\n", "",{"version":3,"sources":["webpack://./src/views/sidebar.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,MAAM;EACN,mBAAmB;AACrB;AACA;EACE;IACE,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,MAAM;EACR;EACA;IACE,WAAW;EACb;EACA;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,kBAAkB;IAClB,WAAW;IACX,MAAM;EACR;AACF;AACA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd","sourcesContent":[".sidebar {\\n  margin: 0;\\n  padding: 0;\\n  width: 400px;\\n  background-color: #f1f1f1;\\n  position: fixed;\\n  height: 100%;\\n  overflow: auto;\\n  visibility: hidden;\\n  top: 0;\\n  z-index: 2147483647;\\n}\\n@media screen and (max-width: 700px) {\\n  .sidebar {\\n    width: 100%;\\n    height: auto;\\n    /* position: relative; */\\n    top: 0;\\n  }\\n  .sidebar a {\\n    float: left;\\n  }\\n  div.content {\\n    margin-left: 0;\\n  }\\n}\\n\\n@media screen and (max-width: 400px) {\\n  .sidebar a {\\n    text-align: center;\\n    float: none;\\n    top: 0;\\n  }\\n}\\n.sidebar a {\\n  display: block;\\n  color: black;\\n  padding: 16px;\\n  text-decoration: none;\\n}\\n\\n.sidebar a.active {\\n  background-color: #04aa6d;\\n  color: white;\\n}\\n\\n.sidebar a:hover:not(.active) {\\n  background-color: #555;\\n  color: white;\\n}\\n"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-widget/./src/views/sidebar.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/views/tile.css":
      /*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/views/tile.css ***!
  \******************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ":root {\\n  --primary__: #1564bf;\\n  --hover__: #5e91f2;\\n  --selected__: #003b8e;\\n}\\n\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #629749;\\n  z-index: 999;\\n  content: \\"\\";\\n} */\\n.tile__ {\\n  position: relative;\\n}\\n\\n.grid__ {\\n  display: grid;\\n  grid-gap: 10px;\\n  max-width: 306px;\\n  grid-template-columns: minmax(min-content, 150px) minmax(min-content, 150px);\\n  margin: 40px;\\n}\\n\\n.tile__ {\\n  padding: 0;\\n  border: 0;\\n  background: var(--primary__);\\n  color: white;\\n  min-width: 50px;\\n  min-height: 150px;\\n  max-height: 150px;\\n  max-width: 150px;\\n}\\nbutton :hover {\\n  background: var(--hover__);\\n}\\n.sidebar button :hover {\\n  background: var(--hover__);\\n}\\nbutton.tile__overlay__:hover {\\n  background: var(--hover__);\\n}\\n#staccess__dyslexiaFont__btn:hover {\\n  background: var(--hover__);\\n}\\n.tile__ p {\\n  font-size: 20px;\\n  padding-top: 10px;\\n}\\n.tile__ i {\\n  padding-top: 30px;\\n}\\n.tile__image {\\n  height: 100%;\\n  width: 100%;\\n  max-height: 150px;\\n  max-width: 150px;\\n  display: block;\\n  object-fit: contain;\\n}\\n\\n.tile__overlay__ {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #1565c0;\\n}\\n\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #c5cae9;\\n  z-index: 999;\\n  content: \\"\\";\\n}\\n.tile__ {\\n  position: relative;\\n} */\\n", "",{"version":3,"sources":["webpack://./src/views/tile.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;;;;;;;;;GASG;AACH;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,4EAA4E;EAC5E,YAAY;AACd;;AAEA;EACE,UAAU;EACV,SAAS;EACT,4BAA4B;EAC5B,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;;;;;;;;;;;;GAYG","sourcesContent":[":root {\\n  --primary__: #1564bf;\\n  --hover__: #5e91f2;\\n  --selected__: #003b8e;\\n}\\n\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #629749;\\n  z-index: 999;\\n  content: \\"\\";\\n} */\\n.tile__ {\\n  position: relative;\\n}\\n\\n.grid__ {\\n  display: grid;\\n  grid-gap: 10px;\\n  max-width: 306px;\\n  grid-template-columns: minmax(min-content, 150px) minmax(min-content, 150px);\\n  margin: 40px;\\n}\\n\\n.tile__ {\\n  padding: 0;\\n  border: 0;\\n  background: var(--primary__);\\n  color: white;\\n  min-width: 50px;\\n  min-height: 150px;\\n  max-height: 150px;\\n  max-width: 150px;\\n}\\nbutton :hover {\\n  background: var(--hover__);\\n}\\n.sidebar button :hover {\\n  background: var(--hover__);\\n}\\nbutton.tile__overlay__:hover {\\n  background: var(--hover__);\\n}\\n#staccess__dyslexiaFont__btn:hover {\\n  background: var(--hover__);\\n}\\n.tile__ p {\\n  font-size: 20px;\\n  padding-top: 10px;\\n}\\n.tile__ i {\\n  padding-top: 30px;\\n}\\n.tile__image {\\n  height: 100%;\\n  width: 100%;\\n  max-height: 150px;\\n  max-width: 150px;\\n  display: block;\\n  object-fit: contain;\\n}\\n\\n.tile__overlay__ {\\n  width: 100%;\\n  height: 100%;\\n  background-color: #1565c0;\\n}\\n\\n/* button.tile__:after {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: #c5cae9;\\n  z-index: 999;\\n  content: \\"\\";\\n}\\n.tile__ {\\n  position: relative;\\n} */\\n"],"sourceRoot":""}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-widget/./src/views/tile.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-widget/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (item) {\n  var content = item[1];\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (typeof btoa === "function") {\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);\n    var sourceMapping = "/*# ".concat(data, " */");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join("\\n");\n  }\n\n  return [content].join("\\n");\n};\n\n//# sourceURL=webpack://js-widget/./node_modules/css-loader/dist/runtime/sourceMaps.js?'
        );

        /***/
      },

    /***/ "./src/views/message.html":
      /*!********************************!*\
  !*** ./src/views/message.html ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = "<!-- <div class=\\"js-widget-overlay\\"></div>\\n<div class=\\"js-widget-dialog\\"></div> -->\\n\\n<link\\n  rel=\\"stylesheet\\"\\n  href=\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css\\"\\n/>\\n<meta content=\\"width=device-width, initial-scale=1\\" name=\\"viewport\\" />\\n<div>\\n  <div class=\\"sidebar\\">\\n    <!-- <a class=\\"active\\" href=\\"#home\\">Home</a>\\n    <a href=\\"#news\\">News</a>\\n    <a href=\\"#contact\\">Contact</a>\\n    <a href=\\"#about\\">About</a> -->\\n   \\n    <" + "/script>\\n    <div class=\\"grid__\\">\\n      <button\\n        id=\\"staccess__dyslexiaFont__btn\\"\\n        class=\\"tile__\\"\\n        type=\\"button\\"\\n        onclick=\\"dyslexiaFontSwitch()\\"\\n      >\\n        <i class=\\"fa-solid fa-glasses fa-2xl\\"></i>\\n       <p>Dyslexic Font</p> \\n        <!-- <i class=\\"fa-solid fa-glasses\\"></i> -->\\n      </button>\\n      <button class=\\"tile__\\" type=\\"button\\">button1</button>\\n      <button class=\\"tile__\\" type=\\"button\\">button1</button>\\n      <button class=\\"tile__\\" type=\\"button\\">button1</button>\\n    </div>\\n  </div>\\n  <button id=\\"access__btn\\" class=\\"float__access\\">\\n    <!-- <i class=\\"fa fa-low-vision\\" aria-hidden=\\"true\\"></i> -->\\n    <i class=\\"fa-brands fa-accessible-icon fa-2xl\\"></i>\\n\\n    <!-- <i class=\\"fa fa-wheelchair-alt\\" aria-hidden=\\"true\\"></i> -->\\n  </button>\\n</div>\\n";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://js-widget/./src/views/message.html?'
        );

        /***/
      },

    /***/ "./src/views/message.css":
      /*!*******************************!*\
  !*** ./src/views/message.css ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./message.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/message.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://js-widget/./src/views/message.css?'
        );

        /***/
      },

    /***/ "./src/views/sidebar.css":
      /*!*******************************!*\
  !*** ./src/views/sidebar.css ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/sidebar.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://js-widget/./src/views/sidebar.css?'
        );

        /***/
      },

    /***/ "./src/views/tile.css":
      /*!****************************!*\
  !*** ./src/views/tile.css ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tile.css */ "./node_modules/css-loader/dist/cjs.js!./src/views/tile.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://js-widget/./src/views/tile.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-widget/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/main.js");
  /******/
  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBjYW4ndCBiZSBpbmxpbmVkIGJlY2F1c2UgdGhlIGV2YWwgZGV2dG9vbCBpcyB1c2VkLlxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
