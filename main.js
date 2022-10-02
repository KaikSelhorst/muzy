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

/***/ "./script/modules/form.js":
/*!********************************!*\
  !*** ./script/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormCheck)\n/* harmony export */ });\nclass FormCheck {\r\n  constructor(email, correct, incorrect) {\r\n    this.email = document.querySelector(email);\r\n    this.correct = correct;\r\n    this.incorrect = incorrect;\r\n\r\n    this.checkEmail = this.checkEmail.bind(this);\r\n  }\r\n\r\n  checkEmail({ target }) {\r\n    if (target.value.match(/[\\w.-]+@[\\w-]+\\.[\\w-.]+/gi)) {\r\n      target.classList.remove(this.incorrect);\r\n      target.classList.add(this.correct);\r\n    } else {\r\n      target.classList.remove(this.correct);\r\n      target.classList.add(this.incorrect);\r\n    }\r\n  }\r\n\r\n  addEventEmail() {\r\n    this.email.addEventListener(\"change\", this.checkEmail);\r\n  }\r\n\r\n  init() {\r\n    if (this.email) {\r\n      this.addEventEmail();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://muzy/./script/modules/form.js?");

/***/ }),

/***/ "./script/modules/horario.js":
/*!***********************************!*\
  !*** ./script/modules/horario.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Horario)\n/* harmony export */ });\nclass Horario {\r\n  constructor(item, activeClass) {\r\n    this.item = document.querySelector(item);\r\n    this.activeClass = activeClass;\r\n  }\r\n\r\n  dadosFuncionamento() {\r\n    this.diasSemana = this.item.dataset.semana.split(\",\").map(Number);\r\n    this.horarioSemana = this.item.dataset.horario.split(\",\").map(Number);\r\n  }\r\n\r\n  dadosAgora() {\r\n    this.dataAgora = new Date();\r\n    this.diaAgora = this.dataAgora.getDay();\r\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\r\n  }\r\n\r\n  estaAberto() {\r\n    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;\r\n    const horarioAberto =\r\n      this.horarioAgora >= this.horarioSemana[0] &&\r\n      this.horarioAgora < this.horarioSemana[1];\r\n    return semanaAberto && horarioAberto;\r\n  }\r\n\r\n  ativaAberto() {\r\n    if (this.estaAberto()) {\r\n      this.item.classList.add(this.activeClass);\r\n    }\r\n  }\r\n\r\n  init() {\r\n    if (this.item) {\r\n      this.dadosFuncionamento();\r\n      this.dadosAgora();\r\n      this.ativaAberto();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://muzy/./script/modules/horario.js?");

/***/ }),

/***/ "./script/modules/menuMobile.js":
/*!**************************************!*\
  !*** ./script/modules/menuMobile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./script/modules/outsideClick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(btn, menu, classActive, events) {\r\n    this.btn = document.querySelector(btn);\r\n    this.menu = document.querySelector(menu);\r\n    this.classActive = classActive;\r\n    this.events = events || [\"click\", \"touchstart\"];\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu(event) {\r\n    event.preventDefault();\r\n    this.btn.classList.toggle(this.classActive);\r\n    this.menu.classList.toggle(this.classActive);\r\n    this.btn.ariaExpanded = this.btn.classList.contains(this.classActive);\r\n    const outsideClick = new _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n      this.menu,\r\n      [\"click\", \"touchstart\"],\r\n      () => {\r\n        this.btn.classList.remove(this.classActive);\r\n        this.menu.classList.remove(this.classActive);\r\n        this.btn.ariaExpanded = false;\r\n      }\r\n    );\r\n    outsideClick.init();\r\n  }\r\n\r\n  addEventMenu() {\r\n    this.events.forEach((event) =>\r\n      this.btn.addEventListener(event, this.openMenu)\r\n    );\r\n  }\r\n\r\n  init() {\r\n    if (this.btn && this.menu && this.events) {\r\n      this.addEventMenu();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://muzy/./script/modules/menuMobile.js?");

/***/ }),

/***/ "./script/modules/outsideClick.js":
/*!****************************************!*\
  !*** ./script/modules/outsideClick.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nclass outsideClick {\r\n  constructor(element, events, callback) {\r\n    this.element = element;\r\n    this.events = events;\r\n    this.callback = callback;\r\n    this.html = document.documentElement;\r\n    this.outside = \"data-outside\";\r\n\r\n    this.handleOutsideClick = this.handleOutsideClick.bind(this);\r\n  }\r\n\r\n  handleOutsideClick({ target }) {\r\n    if (!this.element.contains(target)) {\r\n      this.element.removeAttribute(this.outside);\r\n      this.events.forEach((userEvent) => {\r\n        this.html.removeEventListener(userEvent, this.handleOutsideClick);\r\n      });\r\n      this.callback();\r\n    }\r\n  }\r\n\r\n  init() {\r\n    if (!this.element.hasAttribute(this.outside)) {\r\n      this.events.forEach((userEvent) => {\r\n        setTimeout(() =>\r\n          this.html.addEventListener(userEvent, this.handleOutsideClick)\r\n        );\r\n      });\r\n      this.element.setAttribute(this.outside, \"\");\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://muzy/./script/modules/outsideClick.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/form.js */ \"./script/modules/form.js\");\n/* harmony import */ var _modules_horario_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/horario.js */ \"./script/modules/horario.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./script/modules/menuMobile.js\");\n\r\n\r\n\r\n\r\nconst menuMobile = new _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\r\n  \"[data-menu='button'] \",\r\n  \"[data-menu='list']\",\r\n  \"active\"\r\n);\r\n\r\nmenuMobile.init();\r\n\r\nconst formulario = new _modules_form_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-form='email']\", \"correto\", \"incorreto\");\r\n\r\nformulario.init();\r\n\r\nconst horario = new _modules_horario_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\".contato-horario\", \"aberto\");\r\n\r\nhorario.init();\r\n\n\n//# sourceURL=webpack://muzy/./script/script.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./script/script.js");
/******/ 	
/******/ })()
;