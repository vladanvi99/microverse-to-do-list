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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Open Sans\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  box-sizing: border-box;\\r\\n  border-radius: 3px;\\r\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\r\\n  margin: 80px auto;\\r\\n  top: 0;\\r\\n  max-width: 500px;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-header {\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  background: #fff;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-header h1 {\\r\\n  color: #545862;\\r\\n  font-size: 15px;\\r\\n  font-weight: 400;\\r\\n  padding: 15px;\\r\\n  line-height: 20px;\\r\\n  margin: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.todo-list .add-new-item {\\r\\n  width: 100%;\\r\\n  padding: 0;\\r\\n  background: white;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.todo-list .add-new-item .add-new-input {\\r\\n  width: 100%;\\r\\n  padding: 0 40px 0 1rem;\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border: none;\\r\\n  font-style: italic;\\r\\n  font-weight: 300;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.todo-list .add-new-item .add-new-input::placeholder {\\r\\n  font-family: \\\"Open Sans\\\", sans-serif !important;\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.todo-list .add-new-item .add-new-input:focus-visible {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.todo-list .add-new-item .add-new-btn {\\r\\n  width: 40px;\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 12px;\\r\\n  color: #c5c5c5;\\r\\n  transform: rotate(90deg);\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-list .add-new-item .add-new-btn:hover {\\r\\n  color: #545862;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap {\\r\\n  list-style: none;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item {\\r\\n  width: 100%;\\r\\n  padding: 0;\\r\\n  background: #fff;\\r\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .list-item-check-name {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 40px 0 1rem;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input {\\r\\n  width: 100%;\\r\\n  line-height: 50px;\\r\\n  height: 50px;\\r\\n  border: none;\\r\\n  font-weight: 300;\\r\\n  font-size: 15px;\\r\\n  font-family: \\\"Open Sans\\\", sans-serif !important;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .completed-item .list-item-check-name .description-input {\\r\\n  text-decoration: line-through;\\r\\n  color: #c1c1c3;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .uncompleted-item .list-item-check-name .description-input {\\r\\n  text-decoration: none;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input:focus-visible {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .list-item-check-name .check-item {\\r\\n  width: 16px;\\r\\n  height: 16px;\\r\\n  border-radius: 2px;\\r\\n  border: 2px solid #c1c1c3;\\r\\n  background-color: transparent;\\r\\n  outline: none;\\r\\n  margin-right: 16px;\\r\\n  cursor: pointer;\\r\\n  margin-top: 1px;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .move-item {\\r\\n  width: 40px;\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 12px;\\r\\n  color: #c5c5c5;\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .remove-item {\\r\\n  width: 40px;\\r\\n  height: 50px;\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 12px;\\r\\n  color: #c5c5c5;\\r\\n  background: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .remove-item:hover {\\r\\n  color: #545862;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .move-item i {\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.todo-list .todo-list-wrap .list-item .move-item:hover {\\r\\n  color: #545862;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\\r\\n.todo-list .clear-all {\\r\\n  background-color: #f6f6f6;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  text-align: center;\\r\\n  font-size: 15px;\\r\\n  color: #545862;\\r\\n  font-weight: 300;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-list .clear-all:hover {\\r\\n  color: #000;\\r\\n  text-decoration: underline;\\r\\n  transition: 0.3s;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://microverse-to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://microverse-to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://microverse-to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://microverse-to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://microverse-to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://microverse-to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://microverse-to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://microverse-to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://microverse-to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/checkItem.js":
/*!**************************!*\
  !*** ./src/checkItem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkItem = (btn, arr) => {\n  const newArr = arr;\n  const arrElement = arr.filter((item) => item.index === Number(btn.dataset.key))[0];\n  const indexOfArrElement = arr.indexOf(arrElement);\n  if (btn.checked) {\n    btn.parentElement.parentElement.classList.add('completed-item');\n    btn.parentElement.parentElement.style.backgroundColor = '#fff';\n    newArr[indexOfArrElement].completed = true;\n  } else {\n    btn.parentElement.parentElement.classList.remove('completed-item');\n    btn.parentElement.parentElement.style.backgroundColor = '#fff';\n    newArr[indexOfArrElement].completed = false;\n  }\n  localStorage.setItem('myToDos', JSON.stringify(newArr));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkItem);\n\n//# sourceURL=webpack://microverse-to-do/./src/checkItem.js?");

/***/ }),

/***/ "./src/dragAndDrop.js":
/*!****************************!*\
  !*** ./src/dragAndDrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onMouseOver\": () => (/* binding */ onMouseOver),\n/* harmony export */   \"onMouseOut\": () => (/* binding */ onMouseOut),\n/* harmony export */   \"dragAfterElement\": () => (/* binding */ dragAfterElement),\n/* harmony export */   \"onDragStart\": () => (/* binding */ onDragStart),\n/* harmony export */   \"onDragEnd\": () => (/* binding */ onDragEnd),\n/* harmony export */   \"onDragOver\": () => (/* binding */ onDragOver)\n/* harmony export */ });\nconst onMouseOver = (event, item) => {\n  [...item.childNodes][3].innerHTML = '<i class=\"fas fa-arrows-alt\"></i>';\n  [...item.childNodes][3].style.color = '#545862';\n};\nconst onMouseOut = (event, item) => {\n  [...item.childNodes][3].innerHTML = '<i class=\"fas fa-ellipsis-v\"></i>';\n  [...item.childNodes][3].style.color = '#c5c5c5';\n};\nconst dragAfterElement = (container, y) => {\n  const draggableElements = [...container.querySelectorAll('.list-item:not(.active)')];\n  return draggableElements.reduce((closes, child) => {\n    const box = child.getBoundingClientRect();\n    const offset = y - box.top - box.height / 2;\n    if (offset < 0 && offset > closes.offset) {\n      return { offset, element: child };\n    }\n    return closes;\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\n};\nconst onDragStart = (event, item) => {\n  item.style.backgroundColor = '#fffeca';\n  item.classList.add('active');\n};\nconst onDragEnd = (event, item, arr) => {\n  item.style.backgroundColor = '#fff';\n  item.classList.remove('active');\n  const newArr = [];\n  arr = [...document.querySelectorAll('.list-item')];\n  arr.forEach((item2, i) => {\n    const description = item2.querySelector('.description-input').value;\n    let completed = true;\n    if (item2.classList.contains('completed-item')) {\n      completed = true;\n    } else {\n      completed = false;\n    }\n    const index = i + 1;\n    newArr.push({ description, completed, index });\n  });\n  localStorage.setItem('myToDos', JSON.stringify(newArr));\n};\nconst onDragOver = (event, container) => {\n  event.preventDefault();\n  const afterElement = dragAfterElement(container, event.clientY);\n  const dragElement = document.querySelector('.list-item.active');\n  if (afterElement === undefined) {\n    container.appendChild(dragElement);\n  } else {\n    container.insertBefore(dragElement, afterElement);\n  }\n};\n\n//# sourceURL=webpack://microverse-to-do/./src/dragAndDrop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkItem.js */ \"./src/checkItem.js\");\n/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDrop.js */ \"./src/dragAndDrop.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nlet toDoArr = [];\nconst setToDoArr = () => {\n  if (JSON.parse(localStorage.getItem('myToDos'))) {\n    toDoArr = JSON.parse(localStorage.getItem('myToDos'));\n  } else {\n    toDoArr = [{ description: 'Go to School', completed: false, index: 1 }, { description: 'Play Footbal', completed: false, index: 2 }, { description: 'Do a Homework', completed: false, index: 3 }];\n  }\n};\nsetToDoArr();\nconst listWrap = document.querySelector('.todo-list-wrap');\n// IMPLEMENT TO DO ITEMS TO SCREEN\nconst implementToDoItems = () => {\n  toDoArr.forEach((item) => {\n    let isCompleted = '';\n    let completedClass = '';\n    if (item.completed) {\n      isCompleted = 'checked';\n      completedClass = 'completed-item';\n    }\n    listWrap.innerHTML += `<li class=\"list-item ${completedClass}\" data-key=\"${item.index}\" draggable=\"true\">\n      <div class=\"list-item-check-name\">\n        <input type=\"checkbox\" class=\"check-item\" data-key=\"${item.index}\" ${isCompleted}>\n        <input class=\"description-input\" type=\"text\" value=\"${item.description}\">\n      </div>\n      <button type=\"button\" data-key=\"${item.index}\" class=\"move-item\"><i class=\"fas fa-ellipsis-v\"></i></button>\n      <button type=\"button\" data-key=\"${item.index}\" class=\"remove-item\"><i class=\"far fa-trash-alt\"></i></button>\n    </li>`;\n  });\n};\nimplementToDoItems();\n// CHECK ITEMS\nconst toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];\ntoDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_0__.default)(item, toDoArr)));\n// FOCUS ITEMS\nconst toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];\nconst descriptionOnFocus = (event, item) => {\n  if (event.type === 'focusin') {\n    item.parentElement.parentElement.classList.add('uncompleted-item');\n    item.parentElement.parentElement.style.backgroundColor = '#fffeca';\n    item.parentElement.nextElementSibling.style.display = 'none';\n    [...item.parentElement.parentElement.childNodes][5].style.display = 'flex';\n  } else if (event.type === 'focusout') {\n    item.parentElement.parentElement.classList.remove('uncompleted-item');\n    item.parentElement.parentElement.style.backgroundColor = '#fff';\n    setTimeout(() => {\n      [...item.parentElement.parentElement.childNodes][5].style.display = 'none';\n      item.parentElement.nextElementSibling.style.display = 'flex';\n    }, 1000);\n  }\n};\ntoDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => descriptionOnFocus(event, item)));\ntoDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => descriptionOnFocus(event, item)));\n// DRAG AND DROP FUNCTIONS\nconst toDoItems = [...document.querySelectorAll('.list-item')];\ntoDoItems.forEach((item) => {\n  item.addEventListener('mouseover', (event) => (0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOver)(event, item));\n  item.addEventListener('mouseout', (event) => (0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOut)(event, item));\n  item.addEventListener('dragstart', (event) => (0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragStart)(event, item));\n  item.addEventListener('drop', (event) => (0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragEnd)(event, item, toDoArr));\n});\nlistWrap.addEventListener('dragover', (event) => (0,_dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragOver)(event, listWrap));\n\n\n//# sourceURL=webpack://microverse-to-do/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;