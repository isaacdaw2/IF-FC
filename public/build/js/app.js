(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var _components_App_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/App.vue */ "./assets/js/components/App.vue");
/* harmony import */ var _components_Home_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Home.vue */ "./assets/js/components/Home.vue");
/* harmony import */ var _components_Jugador_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Jugador.vue */ "./assets/js/components/Jugador.vue");
/* harmony import */ var _components_Socio_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Socio.vue */ "./assets/js/components/Socio.vue");
/* harmony import */ var _components_Entrenador_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Entrenador.vue */ "./assets/js/components/Entrenador.vue");
/* harmony import */ var _components_Perfil_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Perfil.vue */ "./assets/js/components/Perfil.vue");
/* harmony import */ var _components_PoliticaCookies_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PoliticaCookies.vue */ "./assets/js/components/PoliticaCookies.vue");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)









_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserSecret"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSignOutAlt"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"]);







vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
var routes = [{
  path: '/',
  name: 'home',
  component: _components_Home_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  path: '/jugadores',
  name: 'jugador',
  component: _components_Jugador_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
}, {
  path: '/socios',
  name: 'socio',
  component: _components_Socio_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/entrenadores',
  name: 'entrenador',
  component: _components_Entrenador_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
}, {
  path: '/miperfil',
  name: 'perfil',
  component: _components_Perfil_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
}, {
  path: '/politicaCookies',
  name: 'politicaCookies',
  component: _components_PoliticaCookies_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  routes: routes // short for `routes: routes`

});
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: "#app",
  components: {
    App: _components_App_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Home: _components_Home_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Jugador: _components_Jugador_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Socio: _components_Socio_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    Entrenador: _components_Entrenador_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    Perfil: _components_Perfil_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    PoliticaCookies: _components_PoliticaCookies_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  router: router
});

/***/ }),

/***/ "./assets/js/components/App.vue":
/*!**************************************!*\
  !*** ./assets/js/components/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_1cde5e23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1cde5e23 */ "./assets/js/components/App.vue?vue&type=template&id=1cde5e23");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./assets/js/components/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_1cde5e23__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_1cde5e23__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=template&id=1cde5e23":
/*!********************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=template&id=1cde5e23 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1cde5e23__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1cde5e23 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=1cde5e23");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1cde5e23__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1cde5e23__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Entrenador.vue":
/*!*********************************************!*\
  !*** ./assets/js/components/Entrenador.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Entrenador_vue_vue_type_template_id_0d0e2b84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entrenador.vue?vue&type=template&id=0d0e2b84 */ "./assets/js/components/Entrenador.vue?vue&type=template&id=0d0e2b84");
/* harmony import */ var _Entrenador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entrenador.vue?vue&type=script&lang=js */ "./assets/js/components/Entrenador.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Entrenador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Entrenador_vue_vue_type_template_id_0d0e2b84__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Entrenador_vue_vue_type_template_id_0d0e2b84__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\Entrenador.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Entrenador.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./assets/js/components/Entrenador.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Entrenador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Entrenador.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Entrenador.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Entrenador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Entrenador.vue?vue&type=template&id=0d0e2b84":
/*!***************************************************************************!*\
  !*** ./assets/js/components/Entrenador.vue?vue&type=template&id=0d0e2b84 ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Entrenador_vue_vue_type_template_id_0d0e2b84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Entrenador.vue?vue&type=template&id=0d0e2b84 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Entrenador.vue?vue&type=template&id=0d0e2b84");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Entrenador_vue_vue_type_template_id_0d0e2b84__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Entrenador_vue_vue_type_template_id_0d0e2b84__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Home.vue":
/*!***************************************!*\
  !*** ./assets/js/components/Home.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_1ef7334d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=1ef7334d */ "./assets/js/components/Home.vue?vue&type=template&id=1ef7334d");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./assets/js/components/Home.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_1ef7334d__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_1ef7334d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Home.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./assets/js/components/Home.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Home.vue?vue&type=template&id=1ef7334d":
/*!*********************************************************************!*\
  !*** ./assets/js/components/Home.vue?vue&type=template&id=1ef7334d ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1ef7334d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=1ef7334d */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=template&id=1ef7334d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1ef7334d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1ef7334d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Jugador.vue":
/*!******************************************!*\
  !*** ./assets/js/components/Jugador.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Jugador_vue_vue_type_template_id_67bac244__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jugador.vue?vue&type=template&id=67bac244 */ "./assets/js/components/Jugador.vue?vue&type=template&id=67bac244");
/* harmony import */ var _Jugador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Jugador.vue?vue&type=script&lang=js */ "./assets/js/components/Jugador.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Jugador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Jugador_vue_vue_type_template_id_67bac244__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Jugador_vue_vue_type_template_id_67bac244__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\Jugador.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Jugador.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./assets/js/components/Jugador.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jugador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Jugador.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Jugador.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Jugador_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Jugador.vue?vue&type=template&id=67bac244":
/*!************************************************************************!*\
  !*** ./assets/js/components/Jugador.vue?vue&type=template&id=67bac244 ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jugador_vue_vue_type_template_id_67bac244__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Jugador.vue?vue&type=template&id=67bac244 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Jugador.vue?vue&type=template&id=67bac244");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jugador_vue_vue_type_template_id_67bac244__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Jugador_vue_vue_type_template_id_67bac244__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Perfil.vue":
/*!*****************************************!*\
  !*** ./assets/js/components/Perfil.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Perfil_vue_vue_type_template_id_9438278c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Perfil.vue?vue&type=template&id=9438278c */ "./assets/js/components/Perfil.vue?vue&type=template&id=9438278c");
/* harmony import */ var _Perfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Perfil.vue?vue&type=script&lang=js */ "./assets/js/components/Perfil.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Perfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Perfil_vue_vue_type_template_id_9438278c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Perfil_vue_vue_type_template_id_9438278c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\Perfil.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Perfil.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./assets/js/components/Perfil.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Perfil.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Perfil.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Perfil.vue?vue&type=template&id=9438278c":
/*!***********************************************************************!*\
  !*** ./assets/js/components/Perfil.vue?vue&type=template&id=9438278c ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_template_id_9438278c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Perfil.vue?vue&type=template&id=9438278c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Perfil.vue?vue&type=template&id=9438278c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_template_id_9438278c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Perfil_vue_vue_type_template_id_9438278c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/PoliticaCookies.vue":
/*!**************************************************!*\
  !*** ./assets/js/components/PoliticaCookies.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PoliticaCookies_vue_vue_type_template_id_3b68d5c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PoliticaCookies.vue?vue&type=template&id=3b68d5c2 */ "./assets/js/components/PoliticaCookies.vue?vue&type=template&id=3b68d5c2");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _PoliticaCookies_vue_vue_type_template_id_3b68d5c2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PoliticaCookies_vue_vue_type_template_id_3b68d5c2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\PoliticaCookies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/PoliticaCookies.vue?vue&type=template&id=3b68d5c2":
/*!********************************************************************************!*\
  !*** ./assets/js/components/PoliticaCookies.vue?vue&type=template&id=3b68d5c2 ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PoliticaCookies_vue_vue_type_template_id_3b68d5c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PoliticaCookies.vue?vue&type=template&id=3b68d5c2 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/PoliticaCookies.vue?vue&type=template&id=3b68d5c2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PoliticaCookies_vue_vue_type_template_id_3b68d5c2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PoliticaCookies_vue_vue_type_template_id_3b68d5c2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/Socio.vue":
/*!****************************************!*\
  !*** ./assets/js/components/Socio.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Socio_vue_vue_type_template_id_1828506f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socio.vue?vue&type=template&id=1828506f */ "./assets/js/components/Socio.vue?vue&type=template&id=1828506f");
/* harmony import */ var _Socio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Socio.vue?vue&type=script&lang=js */ "./assets/js/components/Socio.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Socio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Socio_vue_vue_type_template_id_1828506f__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Socio_vue_vue_type_template_id_1828506f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\Socio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Socio.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./assets/js/components/Socio.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Socio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Socio.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Socio.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Socio_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/Socio.vue?vue&type=template&id=1828506f":
/*!**********************************************************************!*\
  !*** ./assets/js/components/Socio.vue?vue&type=template&id=1828506f ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Socio_vue_vue_type_template_id_1828506f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Socio.vue?vue&type=template&id=1828506f */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Socio.vue?vue&type=template&id=1828506f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Socio_vue_vue_type_template_id_1828506f__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Socio_vue_vue_type_template_id_1828506f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      socio: [],
      mostrarSocio: true,
      mostrarJugador: true,
      mostrarEntrenador: true,
      cargaEnProceso: true,
      cargaCompletada: false,
      contador: 0
    };
  },
  methods: {
    aceptarCookies: function aceptarCookies() {
      document.cookie = "CookieAceptada = Bienvenid@ a IF-ormáticos FC, acabas de aceptar nuestras cookies";
      document.getElementById('cookiesSection').style.display = 'none';
      console.log(document.cookie);
    },
    eliminarCookies: function eliminarCookies() {
      document.cookie = "CookieAceptada=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (document.cookie) {
      document.getElementById('cookiesSection').style.display = 'none';
    }

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/datos-socios').then(function (response) {
      _this.contador++;

      if (response.data.id) {
        _this.socio = response.data, _this.mostrarSocio = false;
      }

      console.log("Socio: " + _this.contador);

      if (_this.contador === 3) {
        _this.cargaCompletada = true;
        _this.cargaEnProceso = false;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/datos-jugadores').then(function (response) {
      _this.contador++;

      if (response.data.id) {
        _this.jugador = response.data, _this.mostrarJugador = false;
      }

      console.log("Jugador: " + _this.contador);

      if (_this.contador === 3) {
        _this.cargaCompletada = true;
        _this.cargaEnProceso = false;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/datos-entrenadores').then(function (response) {
      _this.contador++;

      if (response.data.id) {
        _this.entrenador = response.data, _this.mostrarEntrenador = false;
      }

      console.log("Entrenador: " + _this.contador);

      if (_this.contador === 3) {
        _this.cargaCompletada = true;
        _this.cargaEnProceso = false;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Entrenador.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Entrenador.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Entrenador',
  data: function data() {
    return {
      file: undefined,
      okEntrenador: false,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    enviarTitulo: function enviarTitulo() {
      var _this = this;

      var file = document.getElementById("file");

      if (document.getElementById('file').files[0]) {
        var ruta = '/envio-titulo';
        var formData = new FormData();
        formData.append('file', document.getElementById('file').files[0]);
        $.ajax({
          type: 'POST',
          url: ruta,
          data: formData,
          enctype: 'multipart/form-data',
          processData: false,
          contentType: false,
          cache: false,
          success: function success(data) {
            console.log(data);
          }
        });
        this.dismissCountDown = this.dismissSecs;
        setTimeout(function () {
          return _this.$router.push({
            name: 'home'
          });
        }, 3010);
        document.getElementById('botonEntrenador').style.display = 'none';
      }
    },
    archivo: function archivo() {
      var enviar = document.getElementById("botonEntrenador");
      var entrenadorError = document.getElementById("entrenadorError");

      if (!Boolean(this.file)) {
        entrenadorError.style.color = "green";
        entrenadorError.innerHTML = "Archivo adjuntado correctamente";
      } else {
        entrenadorError.style.color = "red";
        entrenadorError.innerHTML = "Debes seleccionar un archivo";
        console.log('NO Existe');
      }

      console.log(this.file);
      console.log(Boolean(this.file));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Home.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart: function onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd: function onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  mounted: function mounted() {
    if (localStorage.getItem('reloaded')) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem('reloaded');
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem('reloaded', '1');
      location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Jugador.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Jugador.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Jugador',
  data: function data() {
    return {
      categoria: null,
      tallaCamiseta: null,
      tallaPantalon: null,
      tallaMedias: null,
      tallaAbrigo: null,
      metodoPago: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      categorias: [{
        value: null,
        text: 'Seleccione un categoría'
      }, {
        value: 'Benjamin',
        text: 'Benjamín'
      }, {
        value: 'Alevin',
        text: 'Alevín'
      }, {
        value: 'Infantil',
        text: 'Infantil'
      }, {
        value: 'Cadete',
        text: 'Cadete'
      }, {
        value: 'Juvenil',
        text: 'Juvenil'
      }, {
        value: 'Aficionado',
        text: 'Aficionado'
      }, {
        value: 'Veterano',
        text: 'Veterano'
      }],
      tallas: [{
        value: null,
        text: 'Seleccione una talla'
      }, {
        value: 'S',
        text: 'S'
      }, {
        value: 'M',
        text: 'M'
      }, {
        value: 'L',
        text: 'L'
      }, {
        value: 'XL',
        text: 'XL'
      }],
      pago: [{
        value: null,
        text: 'Seleccione un método de pago'
      }, {
        value: 'Paypal',
        text: 'Paypal'
      }, {
        value: 'Tarjeta crédito/débito',
        text: 'Tarjeta crédito/débito'
      }, {
        value: 'Domiciliación bancaria',
        text: 'Domiciliación bancaria'
      }]
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    inscribirJugador: function inscribirJugador(EleccionPagoJugador, EleccionCategoria, EleccionTallaCamiseta, EleccionTallaPantalon, EleccionTallaMedias, EleccionTallaAbrigo) {
      var _this = this;

      // Variables del formulario
      var categoria = document.getElementById("validarCategoria");
      var camiseta = document.getElementById("validarCamiseta");
      var pantalon = document.getElementById("validarPantalon");
      var medias = document.getElementById("validarMedias");
      var abrigo = document.getElementById("validarAbrigo");
      var pago = document.getElementById("validarPago");
      var enviar = document.getElementById("botonJugador"); // Errores de las variables

      var categoriaError = document.getElementById("categoriaError");
      var camisetaError = document.getElementById("camisetaError");
      var pantalonError = document.getElementById("pantalonError");
      var mediasError = document.getElementById("mediasError");
      var abrigoError = document.getElementById("abrigoError");
      var pagoError = document.getElementById("pagoError"); // Ok validaciones

      var okCategoria = false;
      var okCamiseta = false;
      var okPantalon = false;
      var okMedias = false;
      var okAbrigo = false;
      var okPago = false; // Validación Categoría

      if (!categoria.value) {
        categoria.style.borderColor = "red";
        categoriaError.style.color = "red";
        categoriaError.innerHTML = "Debes seleccionar una categoría";
      } else {
        okCategoria = true;
      }

      categoria.onchange = function () {
        if (categoria.value !== '') {
          categoria.style.borderColor = "green";
          categoriaError.innerHTML = "";
          okCategoria = true;
        } else {
          okCategoria = false;
        }
      }; // Validación Camiseta


      if (!camiseta.value) {
        camiseta.style.borderColor = "red";
        camisetaError.style.color = "red";
        camisetaError.innerHTML = "Debes seleccionar una talla de camiseta";
      } else {
        okCamiseta = true;
      }

      camiseta.onchange = function () {
        if (camiseta.value !== '') {
          camiseta.style.borderColor = "green";
          camisetaError.innerHTML = "";
          okCamiseta = true;
        } else {
          okCamiseta = false;
        }
      }; // Validación Pantalón


      if (!pantalon.value) {
        pantalon.style.borderColor = "red";
        pantalonError.style.color = "red";
        pantalonError.innerHTML = "Debes seleccionar una talla de pantalón";
      } else {
        okPantalon = true;
      }

      pantalon.onchange = function () {
        if (pantalon.value !== '') {
          pantalon.style.borderColor = "green";
          pantalonError.innerHTML = "";
          okPantalon = true;
        } else {
          okPantalon = false;
        }
      }; // Validación Medias


      if (!medias.value) {
        medias.style.borderColor = "red";
        mediasError.style.color = "red";
        mediasError.innerHTML = "Debes seleccionar una talla de medias";
      } else {
        okMedias = true;
      }

      medias.onchange = function () {
        if (medias.value !== '') {
          medias.style.borderColor = "green";
          mediasError.innerHTML = "";
          okMedias = true;
        } else {
          okMedias = false;
        }
      }; // Validación Abrigo


      if (!abrigo.value) {
        abrigo.style.borderColor = "red";
        abrigoError.style.color = "red";
        abrigoError.innerHTML = "Debes seleccionar una talla de abrigo";
      } else {
        okAbrigo = true;
      }

      abrigo.onchange = function () {
        if (abrigo.value !== '') {
          abrigo.style.borderColor = "green";
          abrigoError.innerHTML = "";
          okAbrigo = true;
        } else {
          okAbrigo = false;
        }
      }; // Validación Método de pago


      if (!pago.value) {
        pago.style.borderColor = "red";
        pagoError.style.color = "red";
        pagoError.innerHTML = "Debes seleccionar un método de pago";
      } else {
        okPago = true;
      }

      pago.onchange = function () {
        if (pago.value !== '') {
          pago.style.borderColor = "green";
          pagoError.innerHTML = "";
          okPago = true;
        } else {
          okPago = false;
        }
      };

      if (okCategoria && okCamiseta && okPantalon && okMedias && okAbrigo && okPago) {
        $.ajax({
          type: 'POST',
          url: '/pago-jugadores',
          data: {
            pagoJugador: EleccionPagoJugador,
            categoria: EleccionCategoria,
            tallaCamiseta: EleccionTallaCamiseta,
            tallaPantalon: EleccionTallaPantalon,
            tallaMedias: EleccionTallaMedias,
            tallaAbrigo: EleccionTallaAbrigo
          },
          async: true,
          dataType: 'json',
          success: function success(data) {
            console.log(data);
          }
        });
        document.getElementById('botonJugador').style.display = 'none';
        this.dismissCountDown = this.dismissSecs;
        setTimeout(function () {
          return _this.$router.push({
            name: 'home'
          });
        }, 3000);
      } else {
        console.log('No puedo ejecutar aún. ' + 'Categoria: ' + okCategoria + ' Camiseta: ' + okCamiseta + ' Pantalón: ' + okPantalon + ' Medias: ' + okMedias + ' Abrigo: ' + okAbrigo + ' Pago: ' + okPago);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Perfil.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Perfil.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      usuario: [],
      jugador: [],
      socio: [],
      entrenador: [],
      file: [],
      existeJugador: false,
      existeSocio: false,
      existeEntrenador: false,
      editar: false,
      parrafo: false,
      mensajeContraseña: false,
      copyright: false,
      eliminar: '',
      eliminarSocio: '',
      eliminarJugador: '',
      eliminarEntrenador: '',
      fecha: '',
      confirmarPass: '',
      contraseñaGuardada: '',
      categorias: [{
        value: 'Benjamin',
        text: 'Benjamín'
      }, {
        value: 'Alevin',
        text: 'Alevín'
      }, {
        value: 'Infantil',
        text: 'Infantil'
      }, {
        value: 'Cadete',
        text: 'Cadete'
      }, {
        value: 'Juvenil',
        text: 'Juvenil'
      }, {
        value: 'Aficionado',
        text: 'Aficionado'
      }, {
        value: 'Veterano',
        text: 'Veterano'
      }],
      tallas: [{
        value: 'S',
        text: 'S'
      }, {
        value: 'M',
        text: 'M'
      }, {
        value: 'L',
        text: 'L'
      }, {
        value: 'XL',
        text: 'XL'
      }],
      pago: [{
        value: 'Paypal',
        text: 'Paypal'
      }, {
        value: 'Tarjeta crédito/débito',
        text: 'Tarjeta crédito/débito'
      }, {
        value: 'Domiciliación bancaria',
        text: 'Domiciliación bancaria'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/misdatos').then(function (response) {
      return _this.usuario = response.data, _this.parrafo = true, _this.copyright = true, _this.mensajeContraseña = false;
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/datos-jugadores').then(function (response) {
      if (response.data.id) {
        _this.jugador = response.data, _this.existeJugador = true;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/datos-socios').then(function (response) {
      if (response.data.id) {
        _this.socio = response.data, _this.existeSocio = true;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/datos-entrenadores').then(function (response) {
      if (response.data.id) {
        _this.entrenador = response.data, _this.existeEntrenador = true;
      }
    });
  },
  methods: {
    editarPerfil: function editarPerfil() {
      this.editar = true;
      this.parrafo = false;
      this.mensajeContraseña = true;
      this.fecha = this.usuario.fechaNacimiento.date.substring(0, 10);
      this.$nextTick(function () {
        // Puntero body
        document.querySelector('body').style.cursor = "pointer"; // Variables del usuario

        var usuarioNombre = document.getElementById("nombre");
        var usuarioApellidos = document.getElementById("usuarioApellidos");
        var usuarioEmail = document.getElementById("usuarioEmail");
        var usuarioPassword = document.getElementById("usuarioPassword");
        var confirmarPassword = document.getElementById("confirmPass");
        var usuarioDni = document.getElementById("usuarioDni");
        var usuarioCalle = document.getElementById("usuarioCalle");
        var usuarioLocalidad = document.getElementById("usuarioLocalidad");
        var usuarioProvincia = document.getElementById("usuarioProvincia");
        var usuarioCp = document.getElementById("usuarioCp");
        var showPasswords = document.getElementById("showPasswords");
        var botonSave = document.getElementById("saveChanges"); // Variables del usuario Jugador

        var categoria = document.getElementById("validarCategoria");
        var camiseta = document.getElementById("validarCamiseta");
        var pantalon = document.getElementById("validarPantalon");
        var medias = document.getElementById("validarMedias");
        var abrigo = document.getElementById("validarAbrigo");
        var pagoJugador = document.getElementById("validarPagoJugador"); // Variable del usuario Socio

        var pagoSocio = document.getElementById("validarPagoSocio"); // Variable del usuario Entrenador

        var entrenador = document.getElementById("file");
        var botonEntrenador = document.getElementById("botonEntrenador"); // Errores de usuario

        var nombreError = document.getElementById("nombreError");
        var apellidosError = document.getElementById("apellidosError");
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");
        var confirmPasswordError = document.getElementById("confirmPasswordError");
        var dniError = document.getElementById("dniError");
        var calleError = document.getElementById("calleError");
        var localidadError = document.getElementById("localidadError");
        var provinciaError = document.getElementById("provinciaError");
        var cpError = document.getElementById("cpError"); // Ok validaciones Usuario

        var nombreFill = true;
        var apellidosFill = true;
        var dniFill = true;
        var emailFill = true;
        var contraseñaFill = true;
        var confirmarContraseñaFill = true;
        var fechaNacimientoFill = true;
        var calleFill = true;
        var localidadFill = true;
        var provinciaFill = true;
        var cpFill = true;
        var modificacionesUsuario = false; // Ok validaciones Usuario Jugador

        var okCategoria = true;
        var okCamiseta = true;
        var okPantalon = true;
        var okMedias = true;
        var okAbrigo = true;
        var okPagoJugador = true; // Ok validación Usuario Socio                    

        var okPagoSocio = true; // Ok validación Usuario Entrenador                    

        var okEntrenador = true; // FUNCION COMPROBACION EDITAR PERFIL

        function comprobacion() {
          if (nombreFill && apellidosFill && dniFill && emailFill && fechaNacimientoFill && calleFill && localidadFill && provinciaFill && cpFill) {
            if (contraseñaFill && confirmarContraseñaFill || !contraseñaFill && !confirmarContraseñaFill) {
              // Comprobación de existencia de usuario Jugador + Socio + Entrenador
              if (categoria && pagoSocio && entrenador) {
                if (okCategoria && okCamiseta && okPantalon && okAbrigo && okMedias && okPagoJugador && okPagoSocio && okEntrenador) {
                  saveChanges.disabled = false;
                  botonSave.style.cursor = "pointer";
                  botonSave.className = "btn btn-outline-success";
                } else {
                  if (modificacionesUsuario) {
                    saveChanges.disabled = false;
                    botonSave.style.cursor = "pointer";
                    botonSave.className = "btn btn-outline-success";
                  } else {
                    saveChanges.disabled = true;
                    botonSave.style.cursor = "not-allowed";
                    botonSave.className = "btn btn-outline-danger";
                  }
                }
              } else {
                // Comprobación de existencia de usuario Jugador + Socio
                if (categoria && pagoSocio) {
                  if (okCategoria && okCamiseta && okPantalon && okAbrigo && okMedias && okPagoJugador && okPagoSocio) {
                    saveChanges.disabled = false;
                    botonSave.style.cursor = "pointer";
                    botonSave.className = "btn btn-outline-success";
                  } else {
                    if (modificacionesUsuario) {
                      saveChanges.disabled = false;
                      botonSave.style.cursor = "pointer";
                      botonSave.className = "btn btn-outline-success";
                    } else {
                      saveChanges.disabled = true;
                      botonSave.style.cursor = "not-allowed";
                      botonSave.className = "btn btn-outline-danger";
                    }
                  }
                } // Comprobación de existencia de usuario Jugador + Entrenador


                if (categoria && entrenador) {
                  if (okCategoria && okCamiseta && okPantalon && okAbrigo && okMedias && okPagoJugador && okEntrenador) {
                    saveChanges.disabled = false;
                    botonSave.style.cursor = "pointer";
                    botonSave.className = "btn btn-outline-success";
                  } else {
                    if (modificacionesUsuario) {
                      saveChanges.disabled = false;
                      botonSave.style.cursor = "pointer";
                      botonSave.className = "btn btn-outline-success";
                    } else {
                      saveChanges.disabled = true;
                      botonSave.style.cursor = "not-allowed";
                      botonSave.className = "btn btn-outline-danger";
                    }
                  }
                } // Comprobación de existencia de usuario Socio + Entrenador


                if (pagoSocio && entrenador) {
                  if (okPagoSocio && okEntrenador) {
                    saveChanges.disabled = false;
                    botonSave.style.cursor = "pointer";
                    botonSave.className = "btn btn-outline-success";
                  } else {
                    if (modificacionesUsuario) {
                      saveChanges.disabled = false;
                      botonSave.style.cursor = "pointer";
                      botonSave.className = "btn btn-outline-success";
                    } else {
                      saveChanges.disabled = true;
                      botonSave.style.cursor = "not-allowed";
                      botonSave.className = "btn btn-outline-danger";
                    }
                  }
                } // Comprobación de existencia de usuario Jugdor


                if (categoria && !pagoSocio && !entrenador) {
                  if (okCategoria) {
                    saveChanges.disabled = false;
                    botonSave.style.cursor = "pointer";
                    botonSave.className = "btn btn-outline-success";
                  } else {
                    if (modificacionesUsuario) {
                      saveChanges.disabled = false;
                      botonSave.style.cursor = "pointer";
                      botonSave.className = "btn btn-outline-success";
                    } else {
                      saveChanges.disabled = true;
                      botonSave.style.cursor = "not-allowed";
                      botonSave.className = "btn btn-outline-danger";
                    }
                  }
                } // Comprobación de existencia de usuario Socio


                if (pagoSocio && !categoria && !entrenador) {
                  if (okPagoSocio) {
                    saveChanges.disabled = false;
                    botonSave.style.cursor = "pointer";
                    botonSave.className = "btn btn-outline-success";
                  } else {
                    if (modificacionesUsuario) {
                      saveChanges.disabled = false;
                      botonSave.style.cursor = "pointer";
                      botonSave.className = "btn btn-outline-success";
                    } else {
                      saveChanges.disabled = true;
                      botonSave.style.cursor = "not-allowed";
                      botonSave.className = "btn btn-outline-danger";
                    }
                  }
                } // Comprobación de existencia de usuario Entrenador


                if (entrenador && !categoria && !pagoSocio) {
                  if (okEntrenador) {
                    saveChanges.disabled = false;
                    botonSave.style.cursor = "pointer";
                    botonSave.className = "btn btn-outline-success";
                  } else {
                    if (modificacionesUsuario) {
                      saveChanges.disabled = false;
                      botonSave.style.cursor = "pointer";
                      botonSave.className = "btn btn-outline-success";
                    } else {
                      saveChanges.disabled = true;
                      botonSave.style.cursor = "not-allowed";
                      botonSave.className = "btn btn-outline-danger";
                    }
                  }
                }
              }
            } else {
              saveChanges.disabled = true;
              botonSave.style.cursor = "not-allowed";
              botonSave.className = "btn btn-outline-danger";
            }
          } else {
            saveChanges.disabled = true;
            botonSave.style.cursor = "not-allowed";
            botonSave.className = "btn btn-outline-danger";
          }
        } // Cierre de función conprobación


        botonSave.disabled = true;
        botonSave.style.cursor = "not-allowed";
        botonSave.className = "btn btn-outline-danger";

        showPasswords.onclick = function () {
          if (showPasswords.checked) {
            console.log('checked');
            usuarioPassword.type = "text";
            confirmarPassword.type = "text";
          } else {
            console.log('not checked');
            usuarioPassword.type = "password";
            confirmarPassword.type = "password";
          }
        };
        /* VALIDACIONES USUARIO */
        // Validación: Nombre


        nombreError.innerHTML = "";

        usuarioNombre.onkeyup = function () {
          var regExpNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpNombre.test(usuarioNombre.value)) {
            nombreError.innerHTML = "";
            usuarioNombre.style.borderColor = "";
            modificacionesUsuario = true;
            nombreFill = true;
            comprobacion();
          }

          if (!regExpNombre.test(usuarioNombre.value)) {
            nombreError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioNombre.style.borderColor = "red";
            nombreFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioNombre.value == "") {
            nombreError.innerHTML = "El campo no puede estar vacío";
            usuarioNombre.style.borderColor = "red";
            nombreFill = false;
            modificacionesUsuario = false;
          }
        }; // Validación: Apellidos


        apellidosError.innerHTML = "";

        usuarioApellidos.onkeyup = function () {
          var regExpApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpApellidos.test(usuarioApellidos.value)) {
            apellidosError.innerHTML = "";
            usuarioApellidos.style.borderColor = "";
            apellidosFill = true;
            modificacionesUsuario = true;
            comprobacion();
          }

          if (!regExpApellidos.test(usuarioApellidos.value)) {
            apellidosError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioApellidos.style.borderColor = "red";
            apellidosFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioApellidos.value == "") {
            apellidosError.innerHTML = "El campo no puede estar vacío";
            usuarioApellidos.style.borderColor = "red";
            apellidosFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        }; // Validación: Dni                        


        dniError.innerHTML = "";

        usuarioDni.onkeyup = function () {
          var numero = usuarioDni.value.substr(0, usuarioDni.value.length - 1);
          var letra = usuarioDni.value.substr(usuarioDni.value.length - 1, 1);
          var letraMayuscula = letra.toUpperCase();
          usuarioDni.value = numero + letraMayuscula;
          var regExpDni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;

          if (regExpDni.test(usuarioDni.value)) {
            dniError.innerHTML = "";
            usuarioDni.style.borderColor = "";
            $.ajax({
              type: 'POST',
              url: '/comprobar-dni',
              data: {
                dni: usuarioDni.value.toString()
              },
              async: true,
              dataType: 'json',
              success: function success(data) {
                comprobarDni(data);
              }
            });
            dniFill = true;
            modificacionesUsuario = true;
            comprobacion();
          }

          if (!regExpDni.test(usuarioDni.value)) {
            dniError.innerHTML = "El campo debe contener 8 números y 1 letra válida";
            usuarioDni.style.borderColor = "red";
            dniFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioDni.value == "") {
            dniError.innerHTML = "El campo no puede estar vacío";
            usuarioDni.style.borderColor = "red";
            dniFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        };

        function comprobarDni(valor) {
          // dni
          if (valor) {
            console.log('DNI repetido');
            dniError.innerHTML = "Este DNI ya existe, introduce otro";
            usuarioDni.style.borderColor = "red";
            dniFill = false;
            modificacionesUsuario = false;
            console.log('DNI: ' + dniFill);
            comprobacion();
          } else {
            console.log('DNI correcto');
            dniError.innerHTML = "";
            usuarioDni.style.borderColor = "";
            dniFill = true;
            modificacionesUsuario = true;
            console.log('DNI: ' + dniFill);
            comprobacion();
          }
        } // Validación: Email


        emailError.innerHTML = "";

        usuarioEmail.onkeyup = function () {
          var regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

          if (regExpEmail.test(usuarioEmail.value)) {
            emailError.innerHTML = "";
            usuarioEmail.style.borderColor = "";
            var ruta = '/comprobar-email';
            $.ajax({
              type: 'POST',
              url: ruta,
              data: {
                email: usuarioEmail.value.toString()
              },
              async: true,
              dataType: 'json',
              success: function success(data) {
                comprobarEmail(data);
              }
            });
          }

          if (!regExpEmail.test(usuarioEmail.value)) {
            emailError.innerHTML = "El campo debe tener formato email";
            usuarioEmail.style.borderColor = "red";
            emailFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioEmail.value == "") {
            emailError.innerHTML = "El campo no puede estar vacío";
            usuarioEmail.style.borderColor = "red";
            emailFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        };

        function comprobarEmail(valor) {
          // email
          if (valor) {
            console.log('email repetido');
            emailError.innerHTML = "Este email ya existe, introduce otro";
            usuarioEmail.style.borderColor = "red";
            emailFill = false;
            modificacionesUsuario = false;
            console.log('email: ' + emailFill);
            comprobacion();
          } else {
            console.log('email correcto');
            emailError.innerHTML = "";
            usuarioEmail.style.borderColor = "";
            emailFill = true;
            modificacionesUsuario = true;
            console.log('email: ' + emailFill);
            comprobacion();
          }
        } // Validación Contraseña


        this.usuario.password = null;
        passwordError.innerHTML = "";

        usuarioPassword.onkeyup = function () {
          if (usuarioPassword.value === '') {
            if (confirmarPassword.value === '') {
              confirmPasswordError.innerHTML = "";
              confirmarPassword.style.borderColor = "";
              contraseñaFill = true;
              confirmarContraseñaFill = true;
              modificacionesUsuario = true;
              comprobacion();
            } else {
              contraseñaFill = false;
              modificacionesUsuario = false;
              console.log('Contraseña: ' + contraseñaFill);
              confirmarContraseñaFill = false;
              console.log('Confirmar Contraseña: ' + confirmarContraseñaFill);
              comprobacion();
            }
          } else {
            passwordError.innerHTML = "";
            usuarioPassword.style.borderColor = "";
          }

          if (usuarioPassword.value) {
            contraseñaFill = true;
            modificacionesUsuario = true;

            if (confirmarPassword.value) {
              console.log('Valor pass: ' + usuarioPassword.value);
              usuarioPassword.style.borderColor = "";
              passwordError.innerHTML = "";
              confirmPasswordError.innerHTML = "";
              confirmarPassword.value = '';
              confirmarPassword.style.borderColor = "";
              contraseñaFill = true;
              modificacionesUsuario = true;
              confirmarContraseñaFill = true;
              console.log('Contraseña: ' + contraseñaFill);
              console.log('Confirmar Contraseña: ' + confirmarContraseñaFill);
              comprobacion();
            } else {
              confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
              confirmarPassword.style.borderColor = "red";
              confirmarContraseñaFill = false;
              modificacionesUsuario = false;
              console.log('Contraseña: ' + contraseñaFill);
              console.log('Confirmar Contraseña: ' + confirmarContraseñaFill);
              comprobacion();
            }
          }
        }; // Validación Confirmar contraseña 


        confirmPasswordError.innerHTML = "";

        confirmarPassword.onkeyup = function () {
          if (usuarioPassword.value) {
            if (confirmarPassword.value === '') {
              modificacionesUsuario = false;
              confirmarContraseñaFill = false;
              console.log('Contraseña: ' + contraseñaFill);
              console.log('Confirmar Contraseña: ' + confirmarContraseñaFill);
              comprobacion();
            }

            if (confirmarPassword.value != usuarioPassword.value) {
              confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
              confirmarPassword.style.borderColor = "red";
              confirmarContraseñaFill = false;
              modificacionesUsuario = false;
              console.log('Contraseña: ' + contraseñaFill);
              console.log('Confirmar Contraseña: ' + confirmarContraseñaFill);
              comprobacion();
            }

            if (confirmarPassword.value == usuarioPassword.value) {
              confirmPasswordError.innerHTML = "";
              confirmarPassword.style.borderColor = "";
              confirmarContraseñaFill = true;
              modificacionesUsuario = false;
              console.log('Contraseña: ' + contraseñaFill);
              console.log('Confirmar Contraseña: ' + confirmarContraseñaFill);
              comprobacion();
            }
          } else {
            confirmPasswordError.innerHTML = "Primero debes ingresar la contraseña";
            confirmarPassword.style.borderColor = "red";
            confirmarContraseñaFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        }; // Validación: Calle


        calleError.innerHTML = "";

        usuarioCalle.onkeyup = function () {
          var regExpCalle = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+[0-9]+$/;

          if (regExpCalle.test(usuarioCalle.value)) {
            calleError.innerHTML = "";
            usuarioCalle.style.borderColor = "";
            calleFill = true;
            modificacionesUsuario = true;
            comprobacion();
          }

          if (!regExpCalle.test(usuarioCalle.value)) {
            calleError.style.color = "red";
            calleError.innerHTML = "El campo debe tener una cadena de caracteres y un número";
            usuarioCalle.style.borderColor = "red";
            calleFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioCalle.value == "") {
            calleError.style.color = "red";
            calleError.innerHTML = "El campo no puede estar vacío";
            usuarioCalle.style.borderColor = "red";
            calleFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        }; // Validación: Localidad


        localidadError.innerHTML = "";

        usuarioLocalidad.onkeyup = function () {
          var regExpLocalidad = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpLocalidad.test(usuarioLocalidad.value)) {
            localidadError.innerHTML = "";
            usuarioLocalidad.style.borderColor = "";
            localidadFill = true;
            modificacionesUsuario = true;
            comprobacion();
          }

          if (!regExpLocalidad.test(usuarioLocalidad.value)) {
            localidadError.style.color = "red";
            localidadError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioLocalidad.style.borderColor = "red";
            localidadFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioLocalidad.value == "") {
            localidadError.style.color = "red";
            localidadError.innerHTML = "El campo no puede estar vacío";
            usuarioLocalidad.style.borderColor = "red";
            localidadFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        }; // Validación: Provincia


        provinciaError.innerHTML = "";

        usuarioProvincia.onkeyup = function () {
          var regExpLocalidad = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpLocalidad.test(usuarioProvincia.value)) {
            provinciaError.innerHTML = "";
            usuarioProvincia.style.borderColor = "";
            provinciaFill = true;
            modificacionesUsuario = true;
            comprobacion();
          }

          if (!regExpLocalidad.test(usuarioProvincia.value)) {
            provinciaError.style.color = "red";
            provinciaError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioProvincia.style.borderColor = "red";
            provinciaFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioProvincia.value == "") {
            provinciaError.style.color = "red";
            provinciaError.innerHTML = "El campo no puede estar vacío";
            usuarioProvincia.style.borderColor = "red";
            provinciaFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        }; // Validación: CP


        cpError.innerHTML = "";

        usuarioCp.onkeyup = function () {
          var regExpCp = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;

          if (regExpCp.test(usuarioCp.value)) {
            cpError.innerHTML = "";
            usuarioCp.style.borderColor = "";
            cpFill = true;
            modificacionesUsuario = true;
            comprobacion();
          }

          if (!regExpCp.test(usuarioCp.value)) {
            cpError.style.color = "red";
            cpError.innerHTML = "El campo debe tener 5 numeros comprendidos entre 01000 y 52999";
            usuarioCp.style.borderColor = "red";
            cpFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }

          if (usuarioCp.value == "") {
            cpError.style.color = "red";
            cpError.innerHTML = "El campo no puede estar vacío";
            usuarioCp.style.borderColor = "red";
            cpFill = false;
            modificacionesUsuario = false;
            comprobacion();
          }
        };
        /* VALIDACIONES USUARIO JUGADOR */
        // Validación Categoría


        if (categoria) {
          var valorCategoria = categoria.value;

          categoria.onchange = function () {
            if (categoria.value === valorCategoria) {
              okCategoria = false;
              comprobacion();
            } else {
              okCategoria = true;
              comprobacion();
            }
          };
        } // Validación Camiseta


        if (camiseta) {
          var valorCamiseta = camiseta.value;

          camiseta.onchange = function () {
            if (camiseta.value === valorCamiseta) {
              okCamiseta = false;
              comprobacion();
            } else {
              okCamiseta = true;
              comprobacion();
            }
          };
        } // Validación Pantalon


        if (pantalon) {
          var valorPantalon = pantalon.value;

          pantalon.onchange = function () {
            if (pantalon.value === valorPantalon) {
              okPantalon = false;
              comprobacion();
            } else {
              okPantalon = true;
              comprobacion();
            }
          };
        } // Validación Medias


        if (medias) {
          var valorMedias = medias.value;

          medias.onchange = function () {
            if (medias.value === valorMedias) {
              okMedias = false;
              comprobacion();
            } else {
              okMedias = true;
              comprobacion();
            }
          };
        } // Validación Abrigo


        if (abrigo) {
          var valorAbrigo = abrigo.value;

          abrigo.onchange = function () {
            if (abrigo.value === valorAbrigo) {
              okAbrigo = false;
              comprobacion();
            } else {
              okAbrigo = true;
              comprobacion();
            }
          };
        } // Validación Pago jugador


        if (pagoJugador) {
          var jugadorPago = pagoJugador.value;

          pagoJugador.onchange = function () {
            if (pagoJugador.value === jugadorPago) {
              okPagoJugador = false;
              comprobacion();
            } else {
              okPagoJugador = true;
              comprobacion();
            }
          };
        }
        /* VALIDACIONES USUARIO SOCIO */
        // Validación Pago Socio


        if (pagoSocio) {
          var socioPago = pagoSocio.value;

          pagoSocio.onchange = function () {
            if (pagoSocio.value === socioPago) {
              okPagoSocio = false;
              comprobacion();
            } else {
              okPagoSocio = true;
              comprobacion();
            }
          };
        }
        /* VALIDACIONES USUARIO ENTRENADOR */


        if (entrenador) {
          botonEntrenador.disabled = true;

          entrenador.onchange = function () {
            if (entrenador.value) {
              console.log('existe');
              botonEntrenador.disabled = false;
            } else {
              botonEntrenador.disabled = true;
              console.log('No existe');
            }
          };
        }
      });
    },
    cancelarEdicion: function cancelarEdicion() {
      if (location.reload(true)) {
        this.editar = false;
        this.parrafo = true;
        this.mensajeContraseña = false;
      }
    },
    enviarTitulo: function enviarTitulo() {
      var ruta = '/editar-entrenador';
      var formData = new FormData();
      formData.append('file', document.getElementById('file').files[0]);
      $.ajax({
        type: 'POST',
        url: ruta,
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        success: function success(data) {
          console.log(data);
        }
      });

      if (location.reload(true)) {
        this.editar = false;
      }
    },
    actualizarPerfil: function actualizarPerfil() {
      var ruta = '/editar-datos';
      $.ajax({
        type: 'PUT',
        url: ruta,
        data: {
          // Datos Usuario
          nombre: this.usuario.nombre,
          apellidos: this.usuario.apellidos,
          email: this.usuario.email,
          fecha: this.fecha,
          pass: this.usuario.password,
          dni: this.usuario.dni,
          calle: this.usuario.calle,
          localidad: this.usuario.localidad,
          provincia: this.usuario.provincia,
          cp: this.usuario.cp,
          // Datos Jugador
          categoria: this.jugador.categoria,
          camiseta: this.jugador.camiseta,
          pantalon: this.jugador.pantalon,
          medias: this.jugador.medias,
          abrigo: this.jugador.abrigo,
          pagoJugador: this.jugador.pago,
          // Datos Socio
          pagoSocio: this.socio.pago
        },
        async: true,
        dataType: 'json',
        success: function success(data) {
          console.log(data);
          this.usuario = data;
        }
      });

      if (location.reload(true)) {
        this.editar = false;
      }
    },
    cancelarAbono: function cancelarAbono() {
      var _this2 = this;

      this.eliminarSocio = '';
      this.$bvModal.msgBoxConfirm('¿Estás segur@?', {
        title: 'Cancelación del abono de socio',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        cancelVariant: 'success',
        okTitle: 'SI',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        _this2.eliminarSocio = value;

        if (_this2.eliminarSocio) {
          $.ajax({
            type: 'POST',
            url: '/eliminar-socio',
            data: {
              id: _this2.socio.id
            },
            async: true,
            datatype: 'json',
            success: function success(data) {
              console.log(data);
            }
          });
          console.log('Abono cancelado correctamente');

          if (location.reload(true)) {
            _this2.editar = false;
          }
        } else {
          console.log('Abono NO cancelado');
        }
      });
    },
    bajaJugador: function bajaJugador() {
      var _this3 = this;

      this.eliminarJugador = '';
      this.$bvModal.msgBoxConfirm('¿Estás segur@?', {
        title: 'Baja de jugador/a',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        cancelVariant: 'success',
        okTitle: 'SI',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        _this3.eliminarJugador = value;

        if (_this3.eliminarJugador) {
          $.ajax({
            type: 'POST',
            url: '/eliminar-jugador',
            data: {
              id: _this3.jugador.id
            },
            async: true,
            datatype: 'json',
            success: function success(data) {
              console.log(data);
            }
          });
          console.log('Baja jugador tramitada correctamente');

          if (location.reload(true)) {
            _this3.editar = false;
          }
        } else {
          console.log('Baja jugador NO tramitada');
        }
      });
    },
    bajaEntrenador: function bajaEntrenador() {
      var _this4 = this;

      this.eliminarEntrenador = '';
      this.$bvModal.msgBoxConfirm('¿Estás segur@?', {
        title: 'Baja de entrenador/a',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        cancelVariant: 'success',
        okTitle: 'SI',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        _this4.eliminarEntrenador = value;

        if (_this4.eliminarEntrenador) {
          $.ajax({
            type: 'POST',
            url: '/eliminar-entrenador',
            data: {
              id: _this4.entrenador.id
            },
            async: true,
            datatype: 'json',
            success: function success(data) {
              console.log(data);
            }
          });
          console.log('Baja entrenador tramitada correctamente');

          if (location.reload(true)) {
            _this4.editar = false;
          }
        } else {
          console.log('Baja entrenador NO tramitada');
        }
      });
    },
    eliminarPerfil: function eliminarPerfil(idUsuario) {
      var _this5 = this;

      this.eliminar = '';
      this.$bvModal.msgBoxConfirm('¿Realmente quieres eliminar tu cuenta?', {
        title: 'Eliminar cuenta',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        cancelVariant: 'success',
        okTitle: 'SI',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        _this5.eliminar = value;

        if (_this5.eliminar) {
          var ruta = '/eliminar-usuario';
          $.ajax({
            type: 'POST',
            url: ruta,
            data: {
              id: idUsuario
            },
            async: true,
            dataType: 'json',
            success: function success(data) {
              console.log(data);
              window.location = "/login";
            }
          });
        } else {
          console.log('Usuario NO eliminado');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Socio.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Socio.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Socio',
  data: function data() {
    return {
      metodoPago: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      pago: [{
        value: null,
        text: 'Seleccione un método de pago'
      }, {
        value: 'Paypal',
        text: 'Paypal'
      }, {
        value: 'Tarjeta crédito/débito',
        text: 'Tarjeta crédito/débito'
      }, {
        value: 'Domiciliación bancaria',
        text: 'Domiciliación bancaria'
      }]
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    pagar: function pagar(tipoPago) {
      var _this = this;

      var pago = document.getElementById("validarPagoSocio");
      var pagoError = document.getElementById("pagoSocioError");
      var enviar = document.getElementById("botonSocios");
      var okPagoSocio = false; // Validación Método de pago

      if (!pago.value) {
        pago.style.borderColor = "red";
        pagoError.style.color = "red";
        pagoError.innerHTML = "Debes seleccionar un método de pago";
      } else {
        okPagoSocio = true;
      }

      pago.onchange = function () {
        if (pago.value !== '') {
          pago.style.borderColor = "green";
          pagoError.innerHTML = "";
          okPagoSocio = true;
        } else {
          okPagoSocio = false;
        }
      };

      if (okPagoSocio) {
        var ruta = '/pago-socios';
        $.ajax({
          type: 'POST',
          url: ruta,
          data: {
            pago: tipoPago
          },
          async: true,
          dataType: 'json',
          success: function success(data) {
            console.log(data);
          }
        });
        document.getElementById('botonSocios').style.display = 'none';
        this.dismissCountDown = this.dismissSecs;
        setTimeout(function () {
          return _this.$router.push({
            name: 'home'
          });
        }, 3000);
      } else {
        console.log('No puedo ejecutame porque el pago está: ' + okPagoSocio);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=1cde5e23":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=template&id=1cde5e23 ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      [
        _vm.cargaEnProceso
          ? _c(
              "b-navbar",
              {
                staticClass:
                  "text-center d-flex justify-content-center align-items-center",
                attrs: {
                  sticky: "",
                  toggleable: "md",
                  type: "dark",
                  variant: "primary"
                }
              },
              [
                _c(
                  "div",
                  [
                    _c("b-spinner", {
                      attrs: { variant: "white", label: "Spinning" }
                    })
                  ],
                  1
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.cargaCompletada
          ? _c(
              "b-navbar",
              {
                attrs: {
                  sticky: "",
                  toggleable: "md",
                  type: "dark",
                  variant: "primary"
                }
              },
              [
                _c("b-navbar-toggle", { attrs: { target: "nav-collapse" } }),
                _vm._v(" "),
                _c("b-navbar-brand", { attrs: { to: { name: "home" } } }, [
                  _c("img", {
                    attrs: { src: "/img/balon.png", width: "30", alt: "balon" }
                  }),
                  _vm._v("\r\n            IF-ormáticos FC\r\n          ")
                ]),
                _vm._v(" "),
                _c(
                  "b-collapse",
                  {
                    staticClass: "text-center",
                    attrs: { id: "nav-collapse", "is-nav": "" }
                  },
                  [
                    _c(
                      "b-navbar-nav",
                      [
                        _c("b-nav-item", { attrs: { to: { name: "home" } } }, [
                          _vm._v("Noticias del club")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.mostrarSocio,
                                expression: "mostrarSocio"
                              }
                            ],
                            attrs: { to: { name: "socio" } }
                          },
                          [_vm._v("Inscribirse como socio")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.mostrarJugador,
                                expression: "mostrarJugador"
                              }
                            ],
                            attrs: { to: { name: "jugador" } }
                          },
                          [_vm._v("Inscribirse como jugador")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.mostrarEntrenador,
                                expression: "mostrarEntrenador"
                              }
                            ],
                            attrs: { to: { name: "entrenador" } }
                          },
                          [_vm._v("Enviar solicitud de entrenador")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            staticClass: "pr-5",
                            attrs: { to: { name: "perfil" } }
                          },
                          [
                            _c("b-spinner", {
                              attrs: {
                                type: "grow",
                                small: "",
                                variant: "success"
                              }
                            }),
                            _vm._v(" Mi perfil")
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            attrs: { href: "/logout" },
                            on: { click: _vm.eliminarCookies }
                          },
                          [
                            _c("font-awesome-icon", {
                              style: { color: "#CD5C5C" },
                              attrs: { icon: "sign-out-alt", size: "lg" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "section",
          {
            staticClass: "bg-info p-3 fixed-bottom",
            attrs: { id: "cookiesSection" }
          },
          [
            _c("h2", [
              _vm._v(
                "Este sitio web utiliza cookies, si permanece aquí damos por hecho que acepta su uso."
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Puede leer más sobre el uso de cookies en política de cookies."
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "b-button",
                  {
                    attrs: { variant: "light" },
                    on: { click: _vm.aceptarCookies }
                  },
                  [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Aceptar cookies")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { variant: "light" } },
                  [
                    _c("router-link", { attrs: { to: "/politicaCookies" } }, [
                      _vm._v("Politica de cookies")
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("small", [_vm._v("Pulsa aceptar para eliminar este mensaje")])
          ]
        ),
        _vm._v(" "),
        _c("router-view")
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "footer",
      { staticClass: "footer sticky-bottom container text-center" },
      [
        _c("hr"),
        _vm._v(" "),
        _c("span", { staticClass: "text-muted" }, [
          _vm._v("© 2020 IF-ormáticos FC")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Entrenador.vue?vue&type=template&id=0d0e2b84":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Entrenador.vue?vue&type=template&id=0d0e2b84 ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mt-5 mb-5 text-center container" },
    [
      _c("h1", [_vm._v("¿Tienes el título de entrenador?")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Envíanoslo y dirige a alguno de nuestros equipos")]),
      _vm._v(" "),
      _c("b-img", { attrs: { src: "/img/entrenador.png", fluid: "" } }),
      _vm._v(" "),
      !_vm.dismissCountDown
        ? _c(
            "b-row",
            { staticClass: "mt-3" },
            [
              _c(
                "b-col",
                [
                  _c("b-form-file", {
                    attrs: {
                      state: Boolean(_vm.file),
                      placeholder: "Elija un archivo o desplácelo aquí...",
                      "drop-placeholder": "Soltar archivo aquí...",
                      "browse-text": "Elegir",
                      id: "file",
                      name: "file"
                    },
                    on: { change: _vm.archivo },
                    model: {
                      value: _vm.file,
                      callback: function($$v) {
                        _vm.file = $$v
                      },
                      expression: "file"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { attrs: { id: "entrenadorError" } })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-3 justify-content-center" },
        [
          _c(
            "b-alert",
            {
              attrs: {
                show: _vm.dismissCountDown,
                dismissible: "",
                variant: "success"
              },
              on: {
                dismissed: function($event) {
                  _vm.dismissCountDown = 0
                },
                "dismiss-count-down": _vm.countDownChanged
              }
            },
            [
              _c("p", [
                _vm._v(
                  "Enviando archivo: " +
                    _vm._s(_vm.dismissCountDown) +
                    " segundos..."
                )
              ]),
              _vm._v(" "),
              _c("b-progress", {
                attrs: {
                  variant: "warning",
                  max: _vm.dismissSecs,
                  value: _vm.dismissCountDown,
                  height: "4px"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-3" },
        [
          _c(
            "b-col",
            [
              _c(
                "b-button",
                {
                  attrs: { variant: "success", id: "botonEntrenador" },
                  on: { click: _vm.enviarTitulo }
                },
                [_vm._v("Enviar")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=template&id=1ef7334d":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Home.vue?vue&type=template&id=1ef7334d ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        { staticClass: "mt-2" },
        [
          _c(
            "b-carousel",
            {
              staticStyle: { "text-shadow": "0px 0px 2px #000" },
              attrs: {
                id: "carousel-fade",
                fade: "",
                indicators: "",
                "img-width": "1024",
                "img-height": "480"
              }
            },
            [
              _c("b-carousel-slide", {
                attrs: {
                  caption: "Bienvenid@ a nuestra web",
                  "img-src": "/img/balon-de-futbol.jpg"
                }
              }),
              _vm._v(" "),
              _c("b-carousel-slide", {
                attrs: {
                  caption: "Comparte nuestra pasión",
                  "img-src": "/img/campo.jpg"
                }
              }),
              _vm._v(" "),
              _c("b-carousel-slide", {
                attrs: {
                  caption: "Aquí encontrarás las noticias del club",
                  "img-src": "/img/escuela.jpg"
                }
              }),
              _vm._v(" "),
              _c("b-carousel-slide", {
                attrs: { caption: "Resultados", "img-src": "/img/futbol.jpg" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-3 mb-3" }, [
            _c(
              "div",
              [
                _c(
                  "b-card-group",
                  { attrs: { deck: "deck" } },
                  [
                    _c(
                      "b-card",
                      {
                        staticClass: "text-center",
                        attrs: {
                          "bg-variant": "primary",
                          "text-variant": "white",
                          header: "Historia del club",
                          href: "#"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "a",
                            { staticClass: "text-white", attrs: { href: "#" } },
                            [_vm._v("Conoce nuestra historia")]
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      {
                        staticClass: "text-center",
                        attrs: {
                          "bg-variant": "secondary",
                          "text-variant": "white",
                          header: "Instalaciones"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "a",
                            { staticClass: "text-white", attrs: { href: "#" } },
                            [_vm._v("Contempla nuestras instalaciones")]
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      {
                        staticClass: "text-center",
                        attrs: {
                          "bg-variant": "success",
                          "text-variant": "white",
                          header: "Plantillas"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "a",
                            { staticClass: "text-white", attrs: { href: "#" } },
                            [_vm._v("Conoce nuestras plantillas")]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "b-card-group",
                  { attrs: { deck: "deck" } },
                  [
                    _c(
                      "b-card",
                      {
                        staticClass: "text-center",
                        attrs: {
                          "bg-variant": "info",
                          "text-variant": "white",
                          header: "Clasificación"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "a",
                            { staticClass: "text-white", attrs: { href: "#" } },
                            [
                              _vm._v(
                                "Observa nuestra clasificación en la tabla"
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      {
                        staticClass: "text-center",
                        attrs: {
                          "bg-variant": "warning",
                          "text-variant": "white",
                          header: "Próximos partidos"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "a",
                            { staticClass: "text-white", attrs: { href: "#" } },
                            [
                              _vm._v(
                                "Aquí puedes ver contra quien jugamos el próximo encuentro"
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      {
                        staticClass: "text-center",
                        attrs: {
                          "bg-variant": "danger",
                          "text-variant": "white",
                          header: "Resultados"
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c(
                            "a",
                            { staticClass: "text-white", attrs: { href: "#" } },
                            [
                              _vm._v(
                                "Mira como nos ha ido en los últimos partidos"
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "overflow-hidden",
                    attrs: { "no-body": "no-body" }
                  },
                  [
                    _c(
                      "b-row",
                      { attrs: { "no-gutters": "no-gutters" } },
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("b-card-img", {
                              staticClass: "rounded-0",
                              attrs: {
                                src: "/img/recomendaciones.jpg",
                                alt: "logo"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c(
                              "b-card-body",
                              {
                                attrs: {
                                  title:
                                    "Recomendaciones para evitar los riesgos sobre la salud en la vuelta a la competición en el fútbol",
                                  "sub-title": "30 mayo, 2020"
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "\n                                    El Departamento Médico de la Real Federación Española de Fútbol, con la colaboración de profesionales expertos de nivel internacional, ha elaborado un Protocolo médico y de preparación física basado en recomendaciones para evitar los riesgos para la salud en la vuelta a los entrenamientos y a la competición en el fútbol.\n                                    "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "https://cdn1.sefutbol.com/sites/default/files/pdf/recomendaciones_para_evitar_los_riegos_sobra_la_salud_en_la_vuelta_a_la_competicion_en_el_futbol.pdf"
                                      }
                                    },
                                    [_vm._v("Aquí el enlace")]
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "overflow-hidden",
                    attrs: { "no-body": "no-body" }
                  },
                  [
                    _c(
                      "b-row",
                      { attrs: { "no-gutters": "no-gutters" } },
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("b-card-img", {
                              staticClass: "rounded-0",
                              attrs: { src: "/img/fase2.jpg", alt: "logo" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c(
                              "b-card-body",
                              {
                                attrs: {
                                  title: "Fase 2 de la desescalada",
                                  "sub-title": "27 mayo, 2020"
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "\n                                    El Consejo Superior de Deportes ha preparado un documento que da respuesta a las dudas más frecuentes de los deportistas profesionales y federados de cara a la Fase 2 de la desescalada, que esta semana ha comenzado en gran parte del país.\n                                    "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "https://cdn1.sefutbol.com/sites/default/files/faqs_deporte_fase_2.pdf"
                                      }
                                    },
                                    [_vm._v("Aquí el enlace")]
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "overflow-hidden",
                    attrs: { "no-body": "no-body" }
                  },
                  [
                    _c(
                      "b-row",
                      { attrs: { "no-gutters": "no-gutters" } },
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("b-card-img", {
                              staticClass: "rounded-0",
                              attrs: { src: "/img/logo_rfef.jpg", alt: "logo" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c(
                              "b-card-body",
                              {
                                attrs: {
                                  title: "Suspensión de las competiciones",
                                  "sub-title": "27 marzo, 2020"
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "\n                                    La RFEF aprueba la suspensión de todas las competiciones no profesionales hasta que las autoridades consideren que se pueden reanudar sin riesgo\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "overflow-hidden",
                    attrs: { "no-body": "no-body" }
                  },
                  [
                    _c(
                      "b-row",
                      { attrs: { "no-gutters": "no-gutters" } },
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("b-card-img", {
                              staticClass: "rounded-0",
                              attrs: {
                                src: "/img/Comunicado_oficial.jpg",
                                alt: "comunicado"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c(
                              "b-card-body",
                              {
                                attrs: {
                                  title: "Comunicado Oficial | Coronavirus",
                                  "sub-title": "10 marzo, 2020"
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "\n                                    Quedan suspendidos todos los entrenamientos desde mañana miércoles 11 de marzo de 2020 hasta nuevo aviso. La Real Federación de Fútbol de Madrid ha anunciado la suspensión de las competiciones territoriales durante las próximas dos semanas.\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "overflow-hidden",
                    attrs: { "no-body": "no-body" }
                  },
                  [
                    _c(
                      "b-row",
                      { attrs: { "no-gutters": "no-gutters" } },
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("b-card-img", {
                              staticClass: "rounded-0",
                              attrs: {
                                src: "/img/resultados.jpg",
                                alt: "resultados"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c(
                              "b-card-body",
                              {
                                attrs: {
                                  title: "Resultados del fin de semana",
                                  "sub-title": "9 marzo, 2020"
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "\n                                    Nuestros equipos continuan con la buena dinámica de estas últimas 7 jornadas. Tras el tropiezo inicial a la vuelta de navidad, se cuentan los partidos por victoria.\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "b-card",
                  {
                    staticClass: "overflow-hidden",
                    attrs: { "no-body": "no-body" }
                  },
                  [
                    _c(
                      "b-row",
                      { attrs: { "no-gutters": "no-gutters" } },
                      [
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c("b-card-img", {
                              staticClass: "rounded-0",
                              attrs: {
                                src: "/img/puesto_entrenador.jpg",
                                alt: "puesto_entrenador"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { md: "6" } },
                          [
                            _c(
                              "b-card-body",
                              {
                                attrs: {
                                  title: "Puestos de entrenadores vacantes",
                                  "sub-title": "2 marzo, 2020"
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "\n                                    Tenemos disponibles algunas vacantes de entrenadores de algunas de nuestras plantillas, si tienes el título mandalo y forma parte del club.\n                                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Jugador.vue?vue&type=template&id=67bac244":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Jugador.vue?vue&type=template&id=67bac244 ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mt-5 text-center" },
    [
      _c("h1", [_vm._v("Rellena este formulario")]),
      _vm._v(" "),
      _c("h2", [_vm._v("¡y únete a nuestro equipo!")]),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt-5" },
        [
          !_vm.dismissCountDown
            ? _c(
                "b-form-row",
                { staticClass: "mb-3" },
                [
                  _c("b-col", { attrs: { "no-gutters": "" } }, [
                    _c("label", { attrs: { for: "categorias" } }, [
                      _vm._v("Categoría:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-select", {
                        attrs: {
                          id: "validarCategoria",
                          options: _vm.categorias
                        },
                        model: {
                          value: _vm.categoria,
                          callback: function($$v) {
                            _vm.categoria = $$v
                          },
                          expression: "categoria"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "categoriaError" } })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.dismissCountDown
            ? _c(
                "b-form-row",
                { staticClass: "mb-3" },
                [
                  _c("b-col", [
                    _c("label", { attrs: { for: "tallaCamiseta" } }, [
                      _vm._v("Talla de camiseta:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-select", {
                        attrs: { id: "validarCamiseta", options: _vm.tallas },
                        model: {
                          value: _vm.tallaCamiseta,
                          callback: function($$v) {
                            _vm.tallaCamiseta = $$v
                          },
                          expression: "tallaCamiseta"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "camisetaError" } })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.dismissCountDown
            ? _c(
                "b-form-row",
                { staticClass: "mb-3" },
                [
                  _c("b-col", [
                    _c("label", { attrs: { for: "tallaPantalon" } }, [
                      _vm._v("Talla de pantalón:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-select", {
                        attrs: { id: "validarPantalon", options: _vm.tallas },
                        model: {
                          value: _vm.tallaPantalon,
                          callback: function($$v) {
                            _vm.tallaPantalon = $$v
                          },
                          expression: "tallaPantalon"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "pantalonError" } })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.dismissCountDown
            ? _c(
                "b-form-row",
                { staticClass: "mb-3" },
                [
                  _c("b-col", [
                    _c("label", { attrs: { for: "tallaMedias" } }, [
                      _vm._v("Talla de medias:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-select", {
                        attrs: { id: "validarMedias", options: _vm.tallas },
                        model: {
                          value: _vm.tallaMedias,
                          callback: function($$v) {
                            _vm.tallaMedias = $$v
                          },
                          expression: "tallaMedias"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "mediasError" } })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.dismissCountDown
            ? _c(
                "b-form-row",
                { staticClass: "mb-3" },
                [
                  _c("b-col", [
                    _c("label", { attrs: { for: "tallaAbrigo" } }, [
                      _vm._v("Talla de abrigo:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-select", {
                        attrs: { id: "validarAbrigo", options: _vm.tallas },
                        model: {
                          value: _vm.tallaAbrigo,
                          callback: function($$v) {
                            _vm.tallaAbrigo = $$v
                          },
                          expression: "tallaAbrigo"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "abrigoError" } })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.dismissCountDown
            ? _c(
                "b-form-row",
                { staticClass: "mb-3" },
                [
                  _c("b-col", [
                    _c("label", { attrs: { for: "metodoPago" } }, [
                      _vm._v("Método de pago:")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-select", {
                        attrs: { id: "validarPago", options: _vm.pago },
                        model: {
                          value: _vm.metodoPago,
                          callback: function($$v) {
                            _vm.metodoPago = $$v
                          },
                          expression: "metodoPago"
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "pagoError" } })
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mt-3 justify-content-center" },
            [
              _c(
                "b-alert",
                {
                  attrs: {
                    show: _vm.dismissCountDown,
                    dismissible: "",
                    variant: "success"
                  },
                  on: {
                    dismissed: function($event) {
                      _vm.dismissCountDown = 0
                    },
                    "dismiss-count-down": _vm.countDownChanged
                  }
                },
                [
                  _c("p", [
                    _vm._v(
                      "Enviando información: " +
                        _vm._s(_vm.dismissCountDown) +
                        " segundos..."
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-progress", {
                    attrs: {
                      variant: "warning",
                      max: _vm.dismissSecs,
                      value: _vm.dismissCountDown,
                      height: "4px"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form-row",
            { staticClass: "mt-2" },
            [
              _c(
                "b-col",
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "primary", id: "botonJugador" },
                      on: {
                        click: function($event) {
                          return _vm.inscribirJugador(
                            _vm.metodoPago,
                            _vm.categoria,
                            _vm.tallaCamiseta,
                            _vm.tallaPantalon,
                            _vm.tallaMedias,
                            _vm.tallaAbrigo
                          )
                        }
                      }
                    },
                    [_vm._v("Enviar")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Perfil.vue?vue&type=template&id=9438278c":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Perfil.vue?vue&type=template&id=9438278c ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mt-5 mb-5 text-center" },
    [
      _c(
        "b-container",
        {
          staticClass:
            "text-center d-flex justify-content-center align-items-center"
        },
        [
          !_vm.usuario.fechaNacimiento
            ? _c(
                "b-button",
                { attrs: { variant: "info", disabled: "" } },
                [
                  _c("b-spinner", { attrs: { small: "", type: "grow" } }),
                  _vm._v("\n            Cargando...\n        ")
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.usuario.fechaNacimiento
            ? _c(
                "b-card",
                {
                  staticStyle: { width: "50em" },
                  attrs: {
                    header: "Mi perfil",
                    "header-text-variant": "white",
                    "header-tag": "header",
                    "header-bg-variant": "info"
                  }
                },
                [
                  !_vm.editar
                    ? _c("h3", [
                        _vm._v(
                          _vm._s(_vm.usuario.nombre) +
                            " " +
                            _vm._s(_vm.usuario.apellidos)
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editar
                    ? _c(
                        "b-row",
                        { staticClass: "mb-2" },
                        [
                          _c("b-col", [
                            _c("strong", { staticClass: "text-dark" }, [
                              _vm._v("Nombre:")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                ref: "usuarioNombre",
                                attrs: {
                                  name: "nombre",
                                  id: "nombre",
                                  placeholder: "Introduce aquí tu nombre"
                                },
                                model: {
                                  value: _vm.usuario.nombre,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "nombre", $$v)
                                  },
                                  expression: "usuario.nombre"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "nombreError" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editar
                    ? _c(
                        "b-row",
                        { staticClass: "mb-2" },
                        [
                          _c("b-col", [
                            _c("strong", { staticClass: "text-dark" }, [
                              _vm._v("Apellidos:")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "usuarioApellidos",
                                  placeholder: "Introduce aquí tus apellidos"
                                },
                                model: {
                                  value: _vm.usuario.apellidos,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "apellidos", $$v)
                                  },
                                  expression: "usuario.apellidos"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "apellidosError" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mb-2" },
                    [
                      _c("b-col", [
                        _c("strong", { staticClass: "text-dark" }, [
                          _vm._v("Email:")
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.editar
                        ? _c("b-col", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.usuario.email) +
                                "\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "usuarioEmail",
                                  placeholder: "Introduce aquí tu email"
                                },
                                model: {
                                  value: _vm.usuario.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "email", $$v)
                                  },
                                  expression: "usuario.email"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "emailError" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.editar
                    ? _c(
                        "b-row",
                        { staticClass: "mb-2" },
                        [
                          _c("b-col", [
                            _c("strong", { staticClass: "text-dark" }, [
                              _vm._v("Contraseña:")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  type: "password",
                                  id: "usuarioPassword",
                                  placeholder: "Introduce aquí una contraseña"
                                },
                                model: {
                                  value: _vm.usuario.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "password", $$v)
                                  },
                                  expression: "usuario.password"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "passwordError" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editar
                    ? _c(
                        "b-row",
                        { staticClass: "mb-2" },
                        [
                          _c("b-col", [
                            _c("strong", { staticClass: "text-dark" }, [
                              _vm._v("Confirmar contraseña:")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  type: "password",
                                  id: "confirmPass",
                                  placeholder: "Repite la contraseña"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "confirmPasswordError" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editar
                    ? _c(
                        "b-row",
                        { staticClass: "mb-2" },
                        [
                          _c("b-col"),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c("strong", { staticClass: "text-dark" }, [
                                _vm._v("Ver contraseñas")
                              ]),
                              _vm._v(" "),
                              _c("b-form-checkbox", {
                                attrs: { id: "showPasswords" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mb-2" },
                    [
                      _c("b-col", [
                        _c("strong", { staticClass: "text-dark" }, [
                          _vm._v("Dni:")
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.editar
                        ? _c("b-col", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.usuario.dni) +
                                "\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "usuarioDni",
                                  maxlength: "9",
                                  placeholder: "Introduce aquí tu dni"
                                },
                                model: {
                                  value: _vm.usuario.dni,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "dni", $$v)
                                  },
                                  expression: "usuario.dni"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "dniError" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mb-2" },
                    [
                      _c("b-col", [
                        _c("strong", { staticClass: "text-dark" }, [
                          _vm._v("Fecha de nacimiento:")
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.editar
                        ? _c("b-col", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(
                                  _vm.usuario.fechaNacimiento.date.substring(
                                    0,
                                    10
                                  )
                                ) +
                                "                       \n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  type: "date",
                                  id: "date",
                                  placeholder:
                                    "Introduce aquí tu fecha de nacimiento"
                                },
                                model: {
                                  value: _vm.fecha,
                                  callback: function($$v) {
                                    _vm.fecha = $$v
                                  },
                                  expression: "fecha"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _c("span", { staticClass: "text-info mb-5" }, [
                    _vm._v("Dirección")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mb-2 mt-2" },
                    [
                      _c("b-col", [
                        _c("strong", { staticClass: "text-dark" }, [
                          _vm._v("Calle:")
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.editar
                        ? _c("b-col", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.usuario.calle) +
                                "\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "usuarioCalle",
                                  placeholder: "Introduce aquí tu calle"
                                },
                                model: {
                                  value: _vm.usuario.calle,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "calle", $$v)
                                  },
                                  expression: "usuario.calle"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "calleError" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mb-2" },
                    [
                      _c("b-col", [
                        _c("strong", { staticClass: "text-dark" }, [
                          _vm._v("Localidad:")
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.editar
                        ? _c("b-col", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.usuario.localidad) +
                                "\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "usuarioLocalidad",
                                  placeholder: "Introduce aquí tu localidad"
                                },
                                model: {
                                  value: _vm.usuario.localidad,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "localidad", $$v)
                                  },
                                  expression: "usuario.localidad"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "localidadError" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mb-2" },
                    [
                      _c("b-col", [
                        _c("strong", { staticClass: "text-dark" }, [
                          _vm._v("Provincia:")
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.editar
                        ? _c("b-col", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.usuario.provincia) +
                                "\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "usuarioProvincia",
                                  placeholder: "Introduce aquí tu provincia"
                                },
                                model: {
                                  value: _vm.usuario.provincia,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "provincia", $$v)
                                  },
                                  expression: "usuario.provincia"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "provinciaError" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mb-2" },
                    [
                      _c("b-col", [
                        _c("strong", { staticClass: "text-dark" }, [
                          _vm._v("Código postal:")
                        ])
                      ]),
                      _vm._v(" "),
                      !_vm.editar
                        ? _c("b-col", [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.usuario.cp) +
                                "\n                "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editar
                        ? _c(
                            "b-col",
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "usuarioCp",
                                  maxlength: "5",
                                  placeholder: "Introduce aquí tu código postal"
                                },
                                model: {
                                  value: _vm.usuario.cp,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "cp", $$v)
                                  },
                                  expression: "usuario.cp"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "text-danger",
                                attrs: { id: "cpError" }
                              })
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.existeJugador
                    ? _c(
                        "div",
                        [
                          _c("hr"),
                          _c("span", { staticClass: "text-info mb-5" }, [
                            _vm._v("Jugador")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Categoria:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.jugador.categoria) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          options: _vm.categorias,
                                          id: "validarCategoria"
                                        },
                                        model: {
                                          value: _vm.jugador.categoria,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.jugador,
                                              "categoria",
                                              $$v
                                            )
                                          },
                                          expression: "jugador.categoria"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-danger",
                                        attrs: { id: "categoriaError" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Talla de Camiseta:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.jugador.camiseta) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          options: _vm.tallas,
                                          id: "validarCamiseta"
                                        },
                                        model: {
                                          value: _vm.jugador.camiseta,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.jugador,
                                              "camiseta",
                                              $$v
                                            )
                                          },
                                          expression: "jugador.camiseta"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-danger",
                                        attrs: { id: "camisetaError" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Talla de pantalón:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.jugador.pantalon) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          options: _vm.tallas,
                                          id: "validarPantalon"
                                        },
                                        model: {
                                          value: _vm.jugador.pantalon,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.jugador,
                                              "pantalon",
                                              $$v
                                            )
                                          },
                                          expression: "jugador.pantalon"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-danger",
                                        attrs: { id: "pantalonError" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Talla de medias:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.jugador.medias) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          options: _vm.tallas,
                                          id: "validarMedias"
                                        },
                                        model: {
                                          value: _vm.jugador.medias,
                                          callback: function($$v) {
                                            _vm.$set(_vm.jugador, "medias", $$v)
                                          },
                                          expression: "jugador.medias"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-danger",
                                        attrs: { id: "mediasError" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Talla de abrigo:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.jugador.abrigo) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          options: _vm.tallas,
                                          id: "validarAbrigo"
                                        },
                                        model: {
                                          value: _vm.jugador.abrigo,
                                          callback: function($$v) {
                                            _vm.$set(_vm.jugador, "abrigo", $$v)
                                          },
                                          expression: "jugador.abrigo"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-danger",
                                        attrs: { id: "abrigoError" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Método de pago:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.jugador.pago) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          options: _vm.pago,
                                          id: "validarPagoJugador"
                                        },
                                        model: {
                                          value: _vm.jugador.pago,
                                          callback: function($$v) {
                                            _vm.$set(_vm.jugador, "pago", $$v)
                                          },
                                          expression: "jugador.pago"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass: "text-danger",
                                        attrs: { id: "pagoJugadorError" }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-col",
                                [
                                  _vm.editar
                                    ? _c(
                                        "b-button",
                                        {
                                          attrs: { variant: "outline-danger" },
                                          on: { click: _vm.bajaJugador }
                                        },
                                        [_vm._v("Baja jugador")]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.existeSocio
                    ? _c(
                        "div",
                        [
                          _c("hr"),
                          _c("span", { staticClass: "text-info mb-5" }, [
                            _vm._v("Socio")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Método de pago:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.socio.pago) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    [
                                      _c("b-form-select", {
                                        attrs: {
                                          id: "validarPagoSocio",
                                          options: _vm.pago
                                        },
                                        model: {
                                          value: _vm.socio.pago,
                                          callback: function($$v) {
                                            _vm.$set(_vm.socio, "pago", $$v)
                                          },
                                          expression: "socio.pago"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-col",
                                [
                                  _vm.editar
                                    ? _c(
                                        "b-button",
                                        {
                                          attrs: { variant: "outline-danger" },
                                          on: { click: _vm.cancelarAbono }
                                        },
                                        [_vm._v("Cancelar abono socio")]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.existeEntrenador
                    ? _c(
                        "div",
                        [
                          _c("hr"),
                          _c("span", { staticClass: "text-info mb-5" }, [
                            _vm._v("Entrenador")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2" },
                            [
                              _c("b-col", { staticClass: "mt-3" }, [
                                _c("strong", { staticClass: "text-dark" }, [
                                  _vm._v("Titulo enviado:")
                                ])
                              ]),
                              _vm._v(" "),
                              !_vm.editar
                                ? _c("b-col", { staticClass: "mt-3" }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.entrenador.titulo) +
                                        "\n                    "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editar
                                ? _c(
                                    "b-col",
                                    { staticClass: "mt-3" },
                                    [
                                      _c("b-form-file", {
                                        attrs: {
                                          state: Boolean(_vm.file),
                                          placeholder:
                                            "Elija un archivo o desplácelo aquí...",
                                          "drop-placeholder":
                                            "Soltar archivo aquí...",
                                          "browse-text": "Elegir",
                                          id: "file",
                                          name: "file"
                                        },
                                        model: {
                                          value: _vm.file,
                                          callback: function($$v) {
                                            _vm.file = $$v
                                          },
                                          expression: "file"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            { staticClass: "mb-2 mt-3" },
                            [
                              _c(
                                "b-col",
                                [
                                  _vm.editar
                                    ? _c(
                                        "b-button",
                                        {
                                          attrs: { variant: "outline-danger" },
                                          on: { click: _vm.bajaEntrenador }
                                        },
                                        [_vm._v("Baja entrenador")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.editar
                                    ? _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            variant: "outline-success",
                                            id: "botonEntrenador"
                                          },
                                          on: { click: _vm.enviarTitulo }
                                        },
                                        [_vm._v("Enviar otro título")]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "b-col",
                        [
                          !_vm.editar
                            ? _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "outline-primary",
                                    id: "edicion"
                                  },
                                  on: { click: _vm.editarPerfil }
                                },
                                [_vm._v("Editar")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.editar
                            ? _c(
                                "b-button",
                                {
                                  attrs: { variant: "outline-danger" },
                                  on: {
                                    click: function($event) {
                                      return _vm.eliminarPerfil(_vm.usuario.id)
                                    }
                                  }
                                },
                                [_vm._v("Eliminar cuenta")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.editar
                            ? _c(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "outline-success",
                                    id: "saveChanges"
                                  },
                                  on: { click: _vm.actualizarPerfil }
                                },
                                [_vm._v("Actualizar")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.editar
                            ? _c(
                                "b-button",
                                {
                                  attrs: { variant: "outline-danger" },
                                  on: { click: _vm.cancelarEdicion }
                                },
                                [_vm._v("Cancelar")]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _vm.parrafo
        ? _c("small", [
            _vm._v(
              "Si eres jugador/a, soci@ o entrenador/a y deseas tramitar la baja, pulsa antes el botón editar."
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.mensajeContraseña
        ? _c("small", [
            _vm._v(
              "Si no quieres modificar las contraseñas, deja el campo vacío"
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/PoliticaCookies.vue?vue&type=template&id=3b68d5c2":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/PoliticaCookies.vue?vue&type=template&id=3b68d5c2 ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-container",
        { staticClass: "mt-2" },
        [
          _c(
            "b-button",
            { staticClass: "mb-2", attrs: { variant: "light" } },
            [
              _c("router-link", { attrs: { to: "/" } }, [
                _vm._v("Volver a inicio")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("h1", [_vm._v("Política de cookies")]),
          _vm._v(" "),
          _c("div", [
            _c("p", [
              _vm._v(
                "La presente política de cookies tiene por finalidad informarle de manera clara y precisa sobre las cookies que se utilizan en la página web de IF-ormáticos FC."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("h3", [_c("u", [_vm._v("¿Qué son las cookies?")])]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                Una cookie es un pequeño fragmento de texto que los sitios web que visita envían al navegador y que permite que el sitio web recuerde información sobre su visita, como su idioma preferido y otras opciones, con el fin de facilitar su próxima visita y hacer que el sitio le resulte más útil. Las cookies desempeñan un papel muy importante y contribuyen a tener una mejor experiencia de navegación para el usuario.\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("h3", [_c("u", [_vm._v("Tipos de cookies")])]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                Según quién sea la entidad que gestione el dominio desde dónde se envían las cookies y se traten los datos que se obtengan, se pueden distinguir dos tipos: cookies propias y cookies de terceros.\n                Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de cookies de sesión o cookies persistentes.\n                Por último, existe otra clasificación con cinco tipos de cookies según la finalidad para la que se traten los datos obtenidos: cookies técnicas, cookies de personalización, cookies de análisis, cookies publicitarias y cookies de publicidad comportamental.\n                Para más información a este respecto puede consultar la Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos.\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("h3", [_c("u", [_vm._v("Cookies utilizadas en la web")])]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                A continuación se identifican las cookies que están siendo utilizadas en esta página: "
              ),
              _c("br"),
              _vm._v(
                "\n                - Nuestra página utiliza una sola cookie que simplemente guarda un mensaje de bienvenida a la página.\n            "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("h3", [
              _c("u", [_vm._v("Aceptación de la política de cookies")])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Pulsando el botón Aceptar cookies se asume que usted acepta el uso de cookies."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("h3", [
              _c("u", [
                _vm._v("Cómo modificar la configuración de las cookies")
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                '\n                Usted puede restringir, bloquear o borrar las cookies de IF-ormáticos FC o cualquier otra página web utilizando su navegador. En cada navegador la operativa es diferente, la función de "Ayuda" le mostrará cómo hacerlo.\n            '
              )
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Socio.vue?vue&type=template&id=1828506f":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Socio.vue?vue&type=template&id=1828506f ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "mt-5 mb-5 text-center container" },
    [
      _c("h1", [_vm._v("Contigo seguimos creciendo")]),
      _vm._v(" "),
      _c("h2", [_vm._v("¡Hazte socio!")]),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-5" },
        [
          _c(
            "b-col",
            [
              _c(
                "b-card",
                [
                  _c("b-card-img", { attrs: { src: "/img/Socios.jpg" } }),
                  _vm._v(" "),
                  !_vm.dismissCountDown
                    ? _c(
                        "b-row",
                        { staticClass: "mt-3" },
                        [
                          _c("b-col", [
                            _c("label", { attrs: { for: "metodoPago" } }, [
                              _vm._v("Método de pago:")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c("b-form-select", {
                                attrs: {
                                  options: _vm.pago,
                                  id: "validarPagoSocio"
                                },
                                model: {
                                  value: _vm.metodoPago,
                                  callback: function($$v) {
                                    _vm.metodoPago = $$v
                                  },
                                  expression: "metodoPago"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { attrs: { id: "pagoSocioError" } })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3 justify-content-center" },
                    [
                      _c(
                        "b-alert",
                        {
                          attrs: {
                            show: _vm.dismissCountDown,
                            dismissible: "",
                            variant: "success"
                          },
                          on: {
                            dismissed: function($event) {
                              _vm.dismissCountDown = 0
                            },
                            "dismiss-count-down": _vm.countDownChanged
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "Enviando información: " +
                                _vm._s(_vm.dismissCountDown) +
                                " segundos..."
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-progress", {
                            attrs: {
                              variant: "warning",
                              max: _vm.dismissSecs,
                              value: _vm.dismissCountDown,
                              height: "4px"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "b-col",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "primary", id: "botonSocios" },
                              on: {
                                click: function($event) {
                                  return _vm.pagar(_vm.metodoPago)
                                }
                              }
                            },
                            [_vm._v("Enviar")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./assets/js/app.js","runtime","vendors~css/app~js/app","vendors~js/app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT8zNDFmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/NjU4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZT9kZjIxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzYxOGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/ZDMyYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZT9jY2I0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlP2FiY2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSnVnYWRvci52dWU/NjMzNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/N2ZmNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlPzY3MGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUG9saXRpY2FDb29raWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlPzA1NTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9lYzQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9hOTU3Iiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84Zjg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzY3MGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/NjlhMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hY2IyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/NDg3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlPzdiMDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlPzE3N2QiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhVXNlclNlY3JldCIsImZhU2lnbk91dEFsdCIsIlZ1ZSIsImNvbXBvbmVudCIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZSIsIkJvb3RzdHJhcFZ1ZSIsIlZ1ZVJvdXRlciIsInJvdXRlcyIsInBhdGgiLCJuYW1lIiwiSG9tZSIsIkp1Z2Fkb3IiLCJTb2NpbyIsIkVudHJlbmFkb3IiLCJQZXJmaWwiLCJQb2xpdGljYUNvb2tpZXMiLCJyb3V0ZXIiLCJlbCIsImNvbXBvbmVudHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEseUVBQU8sQ0FBQ0MsR0FBUixDQUFZQyw4RUFBWjtBQUNBRix5RUFBTyxDQUFDQyxHQUFSLENBQVlFLDhFQUFaO0FBRUFDLDJDQUFHLENBQUNDLFNBQUosQ0FBYyxtQkFBZCxFQUFtQ0MsNEVBQW5DO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUYsMkNBQUcsQ0FBQ0csR0FBSixDQUFRQyxxREFBUjtBQUNBSiwyQ0FBRyxDQUFDRyxHQUFKLENBQVFFLGtEQUFSO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFBRUMsTUFBSSxFQUFFLEdBQVI7QUFBYUMsTUFBSSxFQUFFLE1BQW5CO0FBQTJCUCxXQUFTLEVBQUVRLDREQUFJQTtBQUExQyxDQURXLEVBRVg7QUFBRUYsTUFBSSxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRSxTQUE1QjtBQUF1Q1AsV0FBUyxFQUFFUyxnRUFBT0E7QUFBekQsQ0FGVyxFQUdYO0FBQUVILE1BQUksRUFBRSxTQUFSO0FBQW1CQyxNQUFJLEVBQUUsT0FB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TUE7QUFDQTtBQUNBO0FBUkE7QUFVQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBL0JBOztBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBUkEsTUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWhhQSxDQWthQTs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQVBBLE1BUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBakJBLE1Ba0JBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBYkEsTUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBakRBLENBcmFBLENBd2RBOzs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBMUJBLE1BMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FsQ0EsQ0ExZEEsQ0E2ZkE7OztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F6QkEsQ0Ev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QUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0JBQXNCO0FBQy9DO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUyxvQkFBb0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSwwQ0FBMEMsU0FBUyx1QkFBdUIsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBNkM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdDQUF3QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcclxuaW1wb3J0IEJvb3RzdHJhcFZ1ZSBmcm9tICdib290c3RyYXAtdnVlJ1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQgeyBmYVVzZXJTZWNyZXQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhU2lnbk91dEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSdcclxuXHJcbmxpYnJhcnkuYWRkKGZhVXNlclNlY3JldClcclxubGlicmFyeS5hZGQoZmFTaWduT3V0QWx0KVxyXG5cclxuVnVlLmNvbXBvbmVudCgnZm9udC1hd2Vzb21lLWljb24nLCBGb250QXdlc29tZUljb24pXHJcblxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAudnVlJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS52dWUnXHJcbmltcG9ydCBKdWdhZG9yIGZyb20gJy4vY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSdcclxuaW1wb3J0IFNvY2lvIGZyb20gJy4vY29tcG9uZW50cy9Tb2Npby52dWUnXHJcbmltcG9ydCBFbnRyZW5hZG9yIGZyb20gJy4vY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSdcclxuaW1wb3J0IFBlcmZpbCBmcm9tICcuL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZSdcclxuaW1wb3J0IFBvbGl0aWNhQ29va2llcyBmcm9tICcuL2NvbXBvbmVudHMvUG9saXRpY2FDb29raWVzLnZ1ZSdcclxuXHJcblZ1ZS51c2UoQm9vdHN0cmFwVnVlKVxyXG5WdWUudXNlKFZ1ZVJvdXRlcilcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJy8nLCBuYW1lOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZSB9LFxyXG4gICAgeyBwYXRoOiAnL2p1Z2Fkb3JlcycsIG5hbWU6ICdqdWdhZG9yJywgY29tcG9uZW50OiBKdWdhZG9yIH0sXHJcbiAgICB7IHBhdGg6ICcvc29jaW9zJywgbmFtZTogJ3NvY2lvJywgY29tcG9uZW50OiBTb2NpbyB9LFxyXG4gICAgeyBwYXRoOiAnL2VudHJlbmFkb3JlcycsIG5hbWU6ICdlbnRyZW5hZG9yJywgY29tcG9uZW50OiBFbnRyZW5hZG9yIH0sXHJcbiAgICB7IHBhdGg6ICcvbWlwZXJmaWwnLCBuYW1lOiAncGVyZmlsJywgY29tcG9uZW50OiBQZXJmaWwgfSxcclxuICAgIHsgcGF0aDogJy9wb2xpdGljYUNvb2tpZXMnLCBuYW1lOiAncG9saXRpY2FDb29raWVzJywgY29tcG9uZW50OiBQb2xpdGljYUNvb2tpZXMgfVxyXG5dXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICAgIHJvdXRlcyAvLyBzaG9ydCBmb3IgYHJvdXRlczogcm91dGVzYFxyXG59KTtcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgZWw6IFwiI2FwcFwiLFxyXG4gICAgY29tcG9uZW50czoge0FwcCwgSG9tZSwgSnVnYWRvciwgU29jaW8sIEVudHJlbmFkb3IsIFBlcmZpbCwgUG9saXRpY2FDb29raWVzfSxcclxuICAgIHJvdXRlclxyXG59KSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xY2RlNWUyM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjZGU1ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjZGU1ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWNkZTVlMjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xY2RlNWUyM1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDBlMmI4NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGQwZTJiODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGQwZTJiODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMGUyYjg0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGQwZTJiODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEVudHJlbmFkb3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwZTJiODRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWVmNzMzNGRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFlZjczMzRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFlZjczMzRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFlZjczMzRkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxIb21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlZjczMzRkXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YmFjMjQ0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSnVnYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSnVnYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2N2JhYzI0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2N2JhYzI0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSnVnYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdiYWMyNDRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2N2JhYzI0NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcSnVnYWRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSnVnYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2JhYzI0NFwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk0MzgyNzhjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTQzODI3OGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTQzODI3OGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTQzODI3OGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NDM4Mjc4YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUGVyZmlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyZmlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk0MzgyNzhjXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BvbGl0aWNhQ29va2llcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I2OGQ1YzJcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNiNjhkNWMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNiNjhkNWMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qb2xpdGljYUNvb2tpZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiNjhkNWMyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2I2OGQ1YzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFBvbGl0aWNhQ29va2llcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9saXRpY2FDb29raWVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjY4ZDVjMlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgyODUwNmZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTgyODUwNmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTgyODUwNmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4Mjg1MDZmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxTb2Npby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiIiwiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gIDxkaXY+XHJcbiAgICAgIDxiLW5hdmJhciB2LWlmPVwiY2FyZ2FFblByb2Nlc29cIiBzdGlja3kgdG9nZ2xlYWJsZT1cIm1kXCIgdHlwZT1cImRhcmtcIiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxiLXNwaW5uZXIgdmFyaWFudD1cIndoaXRlXCIgbGFiZWw9XCJTcGlubmluZ1wiPjwvYi1zcGlubmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2ItbmF2YmFyPlxyXG5cclxuICAgICAgPGItbmF2YmFyIHYtaWY9XCJjYXJnYUNvbXBsZXRhZGFcIiBzdGlja3kgdG9nZ2xlYWJsZT1cIm1kXCIgdHlwZT1cImRhcmtcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgPGItbmF2YmFyLXRvZ2dsZSB0YXJnZXQ9XCJuYXYtY29sbGFwc2VcIj48L2ItbmF2YmFyLXRvZ2dsZT5cclxuICAgICAgICAgIDxiLW5hdmJhci1icmFuZCA6dG89XCJ7bmFtZTogJ2hvbWUnfVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvYmFsb24ucG5nXCIgd2lkdGg9XCIzMFwiIGFsdD1cImJhbG9uXCI+XHJcbiAgICAgICAgICAgIElGLW9ybcOhdGljb3MgRkNcclxuICAgICAgICAgIDwvYi1uYXZiYXItYnJhbmQ+XHJcblxyXG4gICAgICAgICAgPGItY29sbGFwc2UgaWQ9XCJuYXYtY29sbGFwc2VcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgaXMtbmF2PlxyXG4gICAgICAgICAgICA8Yi1uYXZiYXItbmF2PlxyXG4gICAgICAgICAgICAgIDxiLW5hdi1pdGVtIDp0bz1cIntuYW1lOiAnaG9tZSd9XCIgPk5vdGljaWFzIGRlbCBjbHViPC9iLW5hdi1pdGVtPlxyXG4gICAgICAgICAgICAgIDxiLW5hdi1pdGVtIDp0bz1cIntuYW1lOiAnc29jaW8nfVwiIHYtc2hvdz1cIm1vc3RyYXJTb2Npb1wiPkluc2NyaWJpcnNlIGNvbW8gc29jaW88L2ItbmF2LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdqdWdhZG9yJ31cIiB2LXNob3c9XCJtb3N0cmFySnVnYWRvclwiPkluc2NyaWJpcnNlIGNvbW8ganVnYWRvcjwvYi1uYXYtaXRlbT4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxiLW5hdi1pdGVtIDp0bz1cIntuYW1lOiAnZW50cmVuYWRvcid9XCIgdi1zaG93PVwibW9zdHJhckVudHJlbmFkb3JcIj5FbnZpYXIgc29saWNpdHVkIGRlIGVudHJlbmFkb3I8L2ItbmF2LWl0ZW0+ICAgICAgIFxyXG4gICAgICAgICAgICAgIDxiLW5hdi1pdGVtIDp0bz1cIntuYW1lOiAncGVyZmlsJ31cIiBjbGFzcz1cInByLTVcIj48Yi1zcGlubmVyIHR5cGU9XCJncm93XCIgc21hbGwgdmFyaWFudD1cInN1Y2Nlc3NcIj48L2Itc3Bpbm5lcj4gTWkgcGVyZmlsPC9iLW5hdi1pdGVtPiAgICAgICBcclxuICAgICAgICAgICAgICA8Yi1uYXYtaXRlbSBAY2xpY2s9XCJlbGltaW5hckNvb2tpZXNcIiBocmVmPVwiL2xvZ291dFwiPjxmb250LWF3ZXNvbWUtaWNvbiBpY29uPVwic2lnbi1vdXQtYWx0XCIgOnN0eWxlPVwieyBjb2xvcjogJyNDRDVDNUMnIH1cIiBzaXplPVwibGdcIi8+PC9iLW5hdi1pdGVtPiAgICBcclxuICAgICAgICAgICAgPC9iLW5hdmJhci1uYXY+XHJcbiAgICAgICAgICA8L2ItY29sbGFwc2U+XHJcbiAgICAgIDwvYi1uYXZiYXI+XHJcblxyXG4gICAgICA8IS0tIENvb2tpZXMgLS0+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYmctaW5mbyBwLTMgZml4ZWQtYm90dG9tXCIgaWQ9XCJjb29raWVzU2VjdGlvblwiID5cclxuICAgICAgICAgIDxoMj5Fc3RlIHNpdGlvIHdlYiB1dGlsaXphIGNvb2tpZXMsIHNpIHBlcm1hbmVjZSBhcXXDrSBkYW1vcyBwb3IgaGVjaG8gcXVlIGFjZXB0YSBzdSB1c28uPC9oMj5cclxuICAgICAgICAgIDxwPlB1ZWRlIGxlZXIgbcOhcyBzb2JyZSBlbCB1c28gZGUgY29va2llcyBlbiBwb2zDrXRpY2EgZGUgY29va2llcy48L3A+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIiBAY2xpY2s9XCJhY2VwdGFyQ29va2llc1wiPjxhIGhyZWY9JyMnPkFjZXB0YXIgY29va2llczwvYT48L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIj48cm91dGVyLWxpbmsgdG89XCIvcG9saXRpY2FDb29raWVzXCI+UG9saXRpY2EgZGUgY29va2llczwvcm91dGVyLWxpbms+PC9iLWJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNtYWxsPlB1bHNhIGFjZXB0YXIgcGFyYSBlbGltaW5hciBlc3RlIG1lbnNhamU8L3NtYWxsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8cm91dGVyLXZpZXcvPlxyXG4gIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyIHN0aWNreS1ib3R0b20gY29udGFpbmVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGhyPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZFwiPiZjb3B5OyAyMDIwIElGLW9ybcOhdGljb3MgRkM8L3NwYW4+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4gICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xyXG4gICAgICAgICAgICBzb2NpbzogW10sXHJcbiAgICAgICAgICAgIG1vc3RyYXJTb2NpbzogdHJ1ZSxcclxuICAgICAgICAgICAgbW9zdHJhckp1Z2Fkb3I6IHRydWUsXHJcbiAgICAgICAgICAgIG1vc3RyYXJFbnRyZW5hZG9yOiB0cnVlLFxyXG4gICAgICAgICAgICBjYXJnYUVuUHJvY2VzbzogdHJ1ZSxcclxuICAgICAgICAgICAgY2FyZ2FDb21wbGV0YWRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGFkb3I6IDBcclxuICAgICAgICB9KSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGFjZXB0YXJDb29raWVzKCkge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiQ29va2llQWNlcHRhZGEgPSBCaWVudmVuaWRAIGEgSUYtb3Jtw6F0aWNvcyBGQywgYWNhYmFzIGRlIGFjZXB0YXIgbnVlc3RyYXMgY29va2llc1wiO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzU2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxpbWluYXJDb29raWVzKCkge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiQ29va2llQWNlcHRhZGE9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDO1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkICgpIHsgXHJcbiAgICAgICAgICBpZihkb2N1bWVudC5jb29raWUpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llc1NlY3Rpb24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICBheGlvcy5nZXQoJy9kYXRvcy1zb2Npb3MnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb250YWRvcisrXHJcbiAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc29jaW8gPSByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLm1vc3RyYXJTb2NpbyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29jaW86IFwiK3RoaXMuY29udGFkb3IpIFxyXG4gICAgICAgICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJnYUNvbXBsZXRhZGEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmdhRW5Qcm9jZXNvID0gZmFsc2VcclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLWp1Z2Fkb3JlcycpXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWRvcisrXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmp1Z2Fkb3IgPSByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhckp1Z2Fkb3IgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSnVnYWRvcjogXCIrdGhpcy5jb250YWRvcikgXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAzKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJnYUNvbXBsZXRhZGEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZ2FFblByb2Nlc28gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICBheGlvcy5nZXQoJy9kYXRvcy1lbnRyZW5hZG9yZXMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb250YWRvcisrXHJcbiAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZW50cmVuYWRvciA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhckVudHJlbmFkb3IgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVudHJlbmFkb3I6IFwiK3RoaXMuY29udGFkb3IpICBcclxuICAgICAgICAgICAgICBpZih0aGlzLmNvbnRhZG9yID09PSAzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZ2FDb21wbGV0YWRhID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJnYUVuUHJvY2VzbyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSBtYi01IHRleHQtY2VudGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT7Cv1RpZW5lcyBlbCB0w610dWxvIGRlIGVudHJlbmFkb3I/PC9oMT5cclxuICAgICAgICA8aDI+RW52w61hbm9zbG8geSBkaXJpZ2UgYSBhbGd1bm8gZGUgbnVlc3Ryb3MgZXF1aXBvczwvaDI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGItaW1nIHNyYz1cIi9pbWcvZW50cmVuYWRvci5wbmdcIiBmbHVpZD48L2ItaW1nPiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBTZWxlY2Npb25hciBhcmNoaXZvIC0tPlxyXG4gICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIiB2LWlmPVwiIWRpc21pc3NDb3VudERvd25cIj5cclxuICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItZm9ybS1maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpzdGF0ZT1cIkJvb2xlYW4oZmlsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWxpamEgdW4gYXJjaGl2byBvIGRlc3Bsw6FjZWxvIGFxdcOtLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICBkcm9wLXBsYWNlaG9sZGVyPVwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJyb3dzZS10ZXh0PVwiRWxlZ2lyXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVcIiBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImFyY2hpdm9cIiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID48L2ItZm9ybS1maWxlPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbnRyZW5hZG9yRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4gXHJcbiAgICAgICAgICAgIDxiLWFsZXJ0XHJcbiAgICAgICAgICAgIDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgIGRpc21pc3NpYmxlXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudERvd249MFwiXHJcbiAgICAgICAgICAgIEBkaXNtaXNzLWNvdW50LWRvd249XCJjb3VudERvd25DaGFuZ2VkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD5FbnZpYW5kbyBhcmNoaXZvOiB7eyBkaXNtaXNzQ291bnREb3duIH19IHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICA8Yi1wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgOm1heD1cImRpc21pc3NTZWNzXCJcclxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNHB4XCJcclxuICAgICAgICAgICAgPjwvYi1wcm9ncmVzcz5cclxuICAgICAgICAgICAgPC9iLWFsZXJ0PlxyXG4gICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgIDwhLS0gQm90w7NuIGRlIGVudmlhci0tPlxyXG4gICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJzdWNjZXNzXCIgaWQ9XCJib3RvbkVudHJlbmFkb3JcIiBAY2xpY2s9XCJlbnZpYXJUaXR1bG9cIj5FbnZpYXI8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgIDwvYi1yb3c+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdFbnRyZW5hZG9yJyxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmlsZTogdW5kZWZpbmVkLFxyXG4gICAgICAgIG9rRW50cmVuYWRvcjogZmFsc2UsXHJcbiAgICAgICAgZGlzbWlzc1NlY3M6IDMsXHJcbiAgICAgICAgZGlzbWlzc0NvdW50RG93bjogMCxcclxuICAgICAgICBzaG93RGlzbWlzc2libGVBbGVydDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGNvdW50RG93bkNoYW5nZWQoZGlzbWlzc0NvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnZpYXJUaXR1bG8oKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKS5maWxlc1swXSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnV0YSA9ICcvZW52aW8tdGl0dWxvJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykuZmlsZXNbMF0pXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHJ1dGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5jdHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IHRoaXMuZGlzbWlzc1NlY3M7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDEwKTsgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b25FbnRyZW5hZG9yJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXJjaGl2bygpIHtcclxuICAgICAgICAgICAgdmFyIGVudmlhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90b25FbnRyZW5hZG9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgZW50cmVuYWRvckVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRyZW5hZG9yRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUJvb2xlYW4odGhpcy5maWxlKSkge1xyXG4gICAgICAgICAgICAgICAgZW50cmVuYWRvckVycm9yLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgZW50cmVuYWRvckVycm9yLmlubmVySFRNTCA9IFwiQXJjaGl2byBhZGp1bnRhZG8gY29ycmVjdGFtZW50ZVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZW50cmVuYWRvckVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGVudHJlbmFkb3JFcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuIGFyY2hpdm9cIjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOTyBFeGlzdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCb29sZWFuKHRoaXMuZmlsZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxiLWNvbnRhaW5lciBjbGFzcz1cIm10LTJcIj5cclxuICAgICAgICAgICAgPCEtLSBDYWJlY2VyYSBzbGlkZXMgLS0+XHJcbiAgICAgICAgICAgIDxiLWNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBpZD1cImNhcm91c2VsLWZhZGVcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzAwMFwiXHJcbiAgICAgICAgICAgICAgICBmYWRlXHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzXHJcbiAgICAgICAgICAgICAgICBpbWctd2lkdGg9XCIxMDI0XCJcclxuICAgICAgICAgICAgICAgIGltZy1oZWlnaHQ9XCI0ODBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPVwiQmllbnZlbmlkQCBhIG51ZXN0cmEgd2ViXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWctc3JjPVwiL2ltZy9iYWxvbi1kZS1mdXRib2wuanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPVwiQ29tcGFydGUgbnVlc3RyYSBwYXNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWctc3JjPVwiL2ltZy9jYW1wby5qcGdcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCJBcXXDrSBlbmNvbnRyYXLDoXMgbGFzIG5vdGljaWFzIGRlbCBjbHViXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWctc3JjPVwiL2ltZy9lc2N1ZWxhLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgICAgIDxiLWNhcm91c2VsLXNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbj1cIlJlc3VsdGFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2Z1dGJvbC5qcGdcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XHJcbiAgICAgICAgICAgIDwvYi1jYXJvdXNlbD5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gY2FyZHMgY29uIG5vdGljaWFzIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIFByaW1lcmEgbMOtbmVhIGRlIGNhcmRzIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWdyb3VwIGRlY2s9XCJkZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkhpc3RvcmlhIGRlbCBjbHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkNvbm9jZSBudWVzdHJhIGhpc3RvcmlhPC9hPjwvYi1jYXJkLXRleHQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkluc3RhbGFjaW9uZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+Q29udGVtcGxhIG51ZXN0cmFzIGluc3RhbGFjaW9uZXM8L2E+PC9iLWNhcmQtdGV4dD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUGxhbnRpbGxhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5Db25vY2UgbnVlc3RyYXMgcGxhbnRpbGxhczwvYT48L2ItY2FyZC10ZXh0PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIFNlZ3VuZGEgbMOtbmVhIGRlIGNhcmRzIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWdyb3VwIGRlY2s9XCJkZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkNsYXNpZmljYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPk9ic2VydmEgbnVlc3RyYSBjbGFzaWZpY2FjacOzbiBlbiBsYSB0YWJsYTwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlByw7N4aW1vcyBwYXJ0aWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5BcXXDrSBwdWVkZXMgdmVyIGNvbnRyYSBxdWllbiBqdWdhbW9zIGVsIHByw7N4aW1vIGVuY3VlbnRybzwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUmVzdWx0YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5NaXJhIGNvbW8gbm9zIGhhIGlkbyBlbiBsb3Mgw7psdGltb3MgcGFydGlkb3M8L2E+PC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIFJlY29tZW5kYWNpb25lcy0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9yZWNvbWVuZGFjaW9uZXMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJSZWNvbWVuZGFjaW9uZXMgcGFyYSBldml0YXIgbG9zIHJpZXNnb3Mgc29icmUgbGEgc2FsdWQgZW4gbGEgdnVlbHRhIGEgbGEgY29tcGV0aWNpw7NuIGVuIGVsIGbDunRib2xcIiBzdWItdGl0bGU9XCIzMCBtYXlvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsIERlcGFydGFtZW50byBNw6lkaWNvIGRlIGxhIFJlYWwgRmVkZXJhY2nDs24gRXNwYcOxb2xhIGRlIEbDunRib2wsIGNvbiBsYSBjb2xhYm9yYWNpw7NuIGRlIHByb2Zlc2lvbmFsZXMgZXhwZXJ0b3MgZGUgbml2ZWwgaW50ZXJuYWNpb25hbCwgaGEgZWxhYm9yYWRvIHVuIFByb3RvY29sbyBtw6lkaWNvIHkgZGUgcHJlcGFyYWNpw7NuIGbDrXNpY2EgYmFzYWRvIGVuIHJlY29tZW5kYWNpb25lcyBwYXJhIGV2aXRhciBsb3Mgcmllc2dvcyBwYXJhIGxhIHNhbHVkIGVuIGxhIHZ1ZWx0YSBhIGxvcyBlbnRyZW5hbWllbnRvcyB5IGEgbGEgY29tcGV0aWNpw7NuIGVuIGVsIGbDunRib2wuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jZG4xLnNlZnV0Ym9sLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL3BkZi9yZWNvbWVuZGFjaW9uZXNfcGFyYV9ldml0YXJfbG9zX3JpZWdvc19zb2JyYV9sYV9zYWx1ZF9lbl9sYV92dWVsdGFfYV9sYV9jb21wZXRpY2lvbl9lbl9lbF9mdXRib2wucGRmXCI+QXF1w60gZWwgZW5sYWNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBub3RpY2lhIFJGRUYgRkFTRSBJSS0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9mYXNlMi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIkZhc2UgMiBkZSBsYSBkZXNlc2NhbGFkYVwiIHN1Yi10aXRsZT1cIjI3IG1heW8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgQ29uc2VqbyBTdXBlcmlvciBkZSBEZXBvcnRlcyBoYSBwcmVwYXJhZG8gdW4gZG9jdW1lbnRvIHF1ZSBkYSByZXNwdWVzdGEgYSBsYXMgZHVkYXMgbcOhcyBmcmVjdWVudGVzIGRlIGxvcyBkZXBvcnRpc3RhcyBwcm9mZXNpb25hbGVzIHkgZmVkZXJhZG9zIGRlIGNhcmEgYSBsYSBGYXNlIDIgZGUgbGEgZGVzZXNjYWxhZGEsIHF1ZSBlc3RhIHNlbWFuYSBoYSBjb21lbnphZG8gZW4gZ3JhbiBwYXJ0ZSBkZWwgcGHDrXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jZG4xLnNlZnV0Ym9sLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ZhcXNfZGVwb3J0ZV9mYXNlXzIucGRmXCI+QXF1w60gZWwgZW5sYWNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBub3RpY2lhIFJGRUYtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvbG9nb19yZmVmLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiU3VzcGVuc2nDs24gZGUgbGFzIGNvbXBldGljaW9uZXNcIiBzdWItdGl0bGU9XCIyNyBtYXJ6bywgMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBSRkVGIGFwcnVlYmEgbGEgc3VzcGVuc2nDs24gZGUgdG9kYXMgbGFzIGNvbXBldGljaW9uZXMgbm8gcHJvZmVzaW9uYWxlcyBoYXN0YSBxdWUgbGFzIGF1dG9yaWRhZGVzIGNvbnNpZGVyZW4gcXVlIHNlIHB1ZWRlbiByZWFudWRhciBzaW4gcmllc2dvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIGNvbXVuaWNhZG8gb2ZpY2lhbCAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvQ29tdW5pY2Fkb19vZmljaWFsLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImNvbXVuaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiQ29tdW5pY2FkbyBPZmljaWFsIHwgQ29yb25hdmlydXNcIiBzdWItdGl0bGU9XCIxMCBtYXJ6bywgMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWVkYW4gc3VzcGVuZGlkb3MgdG9kb3MgbG9zIGVudHJlbmFtaWVudG9zIGRlc2RlIG1hw7FhbmEgbWnDqXJjb2xlcyAxMSBkZSBtYXJ6byBkZSAyMDIwIGhhc3RhIG51ZXZvIGF2aXNvLiBMYSBSZWFsIEZlZGVyYWNpw7NuIGRlIEbDunRib2wgZGUgTWFkcmlkIGhhIGFudW5jaWFkbyBsYSBzdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lcyB0ZXJyaXRvcmlhbGVzIGR1cmFudGUgbGFzIHByw7N4aW1hcyBkb3Mgc2VtYW5hcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gcmVzdWx0YWRvcyAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcmVzdWx0YWRvcy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJyZXN1bHRhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlJlc3VsdGFkb3MgZGVsIGZpbiBkZSBzZW1hbmFcIiBzdWItdGl0bGU9XCI5IG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51ZXN0cm9zIGVxdWlwb3MgY29udGludWFuIGNvbiBsYSBidWVuYSBkaW7DoW1pY2EgZGUgZXN0YXMgw7psdGltYXMgNyBqb3JuYWRhcy4gVHJhcyBlbCB0cm9waWV6byBpbmljaWFsIGEgbGEgdnVlbHRhIGRlIG5hdmlkYWQsIHNlIGN1ZW50YW4gbG9zIHBhcnRpZG9zIHBvciB2aWN0b3JpYS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gUHVlc3RvIGRlIGVudHJlbmFkb3IgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3B1ZXN0b19lbnRyZW5hZG9yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInB1ZXN0b19lbnRyZW5hZG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlB1ZXN0b3MgZGUgZW50cmVuYWRvcmVzIHZhY2FudGVzXCIgc3ViLXRpdGxlPVwiMiBtYXJ6bywgMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5lbW9zIGRpc3BvbmlibGVzIGFsZ3VuYXMgdmFjYW50ZXMgZGUgZW50cmVuYWRvcmVzIGRlIGFsZ3VuYXMgZGUgbnVlc3RyYXMgcGxhbnRpbGxhcywgc2kgdGllbmVzIGVsIHTDrXR1bG8gbWFuZGFsbyB5IGZvcm1hIHBhcnRlIGRlbCBjbHViLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8L2ItY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvblNsaWRlU3RhcnQoc2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGluZyA9IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TbGlkZUVuZChzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVsb2FkZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIHBhZ2Ugd2FzIGp1c3QgcmVsb2FkZWQuIENsZWFyIHRoZSB2YWx1ZSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgaXQgd2lsbCByZWxvYWQgdGhlIG5leHQgdGltZSB0aGlzIHBhZ2UgaXMgdmlzaXRlZC5cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWxvYWRlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IGEgZmxhZyBzbyB0aGF0IHdlIGtub3cgbm90IHRvIHJlbG9hZCB0aGUgcGFnZSB0d2ljZS5cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWxvYWRlZCcsICcxJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDE+UmVsbGVuYSBlc3RlIGZvcm11bGFyaW88L2gxPlxyXG4gICAgICAgIDxoMj7CoXkgw7puZXRlIGEgbnVlc3RybyBlcXVpcG8hPC9oMj4gIFxyXG5cclxuICAgICAgICA8Yi1jb250YWluZXIgY2xhc3M9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDE6IGNhdGVnb3LDrWEgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sIG5vLWd1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhdGVnb3JpYXNcIj5DYXRlZ29yw61hOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJjYXRlZ29yaWFcIiBpZD1cInZhbGlkYXJDYXRlZ29yaWFcIiA6b3B0aW9ucz1cImNhdGVnb3JpYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjYXRlZ29yaWFFcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDI6IHRhbGxhIGRlIGNhbWlzZXRhIC0tPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLXJvdyBjbGFzcz1cIm1iLTNcIiB2LWlmPVwiIWRpc21pc3NDb3VudERvd25cIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFsbGFDYW1pc2V0YVwiPlRhbGxhIGRlIGNhbWlzZXRhOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYUNhbWlzZXRhXCIgaWQ9XCJ2YWxpZGFyQ2FtaXNldGFcIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNhbWlzZXRhRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSAzOiB0YWxsYSBkZSBwYW50YWzDs24gLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYVBhbnRhbG9uXCI+VGFsbGEgZGUgcGFudGFsw7NuOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYVBhbnRhbG9uXCIgaWQ9XCJ2YWxpZGFyUGFudGFsb25cIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInBhbnRhbG9uRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA0OiB0YWxsYSBkZSBtZWRpYXMgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYU1lZGlhc1wiPlRhbGxhIGRlIG1lZGlhczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwidGFsbGFNZWRpYXNcIiBpZD1cInZhbGlkYXJNZWRpYXNcIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm1lZGlhc0Vycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgNTogdGFsbGEgZGUgYWJyaWdvIC0tPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLXJvdyBjbGFzcz1cIm1iLTNcIiB2LWlmPVwiIWRpc21pc3NDb3VudERvd25cIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFsbGFBYnJpZ29cIj5UYWxsYSBkZSBhYnJpZ286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhQWJyaWdvXCIgaWQ9XCJ2YWxpZGFyQWJyaWdvXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJhYnJpZ29FcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDY6IG3DqXRvZG8gZGUgcGFnbyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1ldG9kb1BhZ29cIj5Nw6l0b2RvIGRlIHBhZ286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cIm1ldG9kb1BhZ29cIiBpZD1cInZhbGlkYXJQYWdvXCIgOm9wdGlvbnM9XCJwYWdvXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGFnb0Vycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgNzogQWxlcnRhIGFuaW1hZGEgLS0+XHJcbiAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPiBcclxuICAgICAgICAgICAgICAgIDxiLWFsZXJ0XHJcbiAgICAgICAgICAgICAgICA6c2hvdz1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgZGlzbWlzc2libGVcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIEBkaXNtaXNzZWQ9XCJkaXNtaXNzQ291bnREb3duPTBcIlxyXG4gICAgICAgICAgICAgICAgQGRpc21pc3MtY291bnQtZG93bj1cImNvdW50RG93bkNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+RW52aWFuZG8gaW5mb3JtYWNpw7NuOiB7eyBkaXNtaXNzQ291bnREb3duIH19IHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGItcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOm1heD1cImRpc21pc3NTZWNzXCJcclxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkaXNtaXNzQ291bnREb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0cHhcIlxyXG4gICAgICAgICAgICAgICAgPjwvYi1wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgIDwvYi1hbGVydD5cclxuICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDg6IGVudmlhciAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaWQ9XCJib3Rvbkp1Z2Fkb3JcIiBAY2xpY2s9XCJpbnNjcmliaXJKdWdhZG9yKG1ldG9kb1BhZ28sIGNhdGVnb3JpYSwgdGFsbGFDYW1pc2V0YSwgdGFsbGFQYW50YWxvbiwgdGFsbGFNZWRpYXMsIHRhbGxhQWJyaWdvKVwiPkVudmlhcjwvYi1idXR0b24+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG4gICAgICAgIDwvYi1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdKdWdhZG9yJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWE6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhQ2FtaXNldGE6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhUGFudGFsb246IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhTWVkaWFzOiBudWxsLFxyXG4gICAgICAgICAgICB0YWxsYUFicmlnbzogbnVsbCxcclxuICAgICAgICAgICAgbWV0b2RvUGFnbzogbnVsbCxcclxuICAgICAgICAgICAgZGlzbWlzc1NlY3M6IDMsXHJcbiAgICAgICAgICAgIGRpc21pc3NDb3VudERvd246IDAsXHJcbiAgICAgICAgICAgIHNob3dEaXNtaXNzaWJsZUFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgY2F0ZWdvcmlhczpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIGNhdGVnb3LDrWEnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0JlbmphbWluJywgdGV4dDogJ0JlbmphbcOtbid9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQWxldmluJywgdGV4dDogJ0FsZXbDrW4nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0luZmFudGlsJywgdGV4dDogJ0luZmFudGlsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdDYWRldGUnLCB0ZXh0OiAnQ2FkZXRlJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdKdXZlbmlsJywgdGV4dDogJ0p1dmVuaWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0FmaWNpb25hZG8nLCB0ZXh0OiAnQWZpY2lvbmFkbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVmV0ZXJhbm8nLCB0ZXh0OiAnVmV0ZXJhbm8nfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0YWxsYXM6W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiBudWxsLCB0ZXh0OiAnU2VsZWNjaW9uZSB1bmEgdGFsbGEnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1MnLCB0ZXh0OiAnUyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnTScsIHRleHQ6ICdNJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdMJywgdGV4dDogJ0wnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1hMJywgdGV4dDogJ1hMJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcGFnbzpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIG3DqXRvZG8gZGUgcGFnbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUGF5cGFsJywgdGV4dDogJ1BheXBhbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJywgdGV4dDogJ1RhcmpldGEgY3LDqWRpdG8vZMOpYml0byd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnRG9taWNpbGlhY2nDs24gYmFuY2FyaWEnLCB0ZXh0OiAnRG9taWNpbGlhY2nDs24gYmFuY2FyaWEnfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjb3VudERvd25DaGFuZ2VkKGRpc21pc3NDb3VudERvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gZGlzbWlzc0NvdW50RG93blxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5zY3JpYmlySnVnYWRvcihFbGVjY2lvblBhZ29KdWdhZG9yLCBFbGVjY2lvbkNhdGVnb3JpYSwgRWxlY2Npb25UYWxsYUNhbWlzZXRhLCBFbGVjY2lvblRhbGxhUGFudGFsb24sIEVsZWNjaW9uVGFsbGFNZWRpYXMsIEVsZWNjaW9uVGFsbGFBYnJpZ28pe1xyXG5cclxuICAgICAgICAgICAgLy8gVmFyaWFibGVzIGRlbCBmb3JtdWxhcmlvXHJcbiAgICAgICAgICAgIHZhciBjYXRlZ29yaWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJDYXRlZ29yaWFcIik7XHJcbiAgICAgICAgICAgIHZhciBjYW1pc2V0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhckNhbWlzZXRhXCIpO1xyXG4gICAgICAgICAgICB2YXIgcGFudGFsb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJQYW50YWxvblwiKTtcclxuICAgICAgICAgICAgdmFyIG1lZGlhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhck1lZGlhc1wiKTtcclxuICAgICAgICAgICAgdmFyIGFicmlnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhckFicmlnb1wiKTtcclxuICAgICAgICAgICAgdmFyIHBhZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJQYWdvXCIpO1xyXG4gICAgICAgICAgICB2YXIgZW52aWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3Rvbkp1Z2Fkb3JcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBFcnJvcmVzIGRlIGxhcyB2YXJpYWJsZXNcclxuICAgICAgICAgICAgdmFyIGNhdGVnb3JpYUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yaWFFcnJvclwiKTtcclxuICAgICAgICAgICAgdmFyIGNhbWlzZXRhRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbWlzZXRhRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBwYW50YWxvbkVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYW50YWxvbkVycm9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgbWVkaWFzRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lZGlhc0Vycm9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgYWJyaWdvRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFicmlnb0Vycm9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgcGFnb0Vycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdvRXJyb3JcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBPayB2YWxpZGFjaW9uZXNcclxuICAgICAgICAgICAgdmFyIG9rQ2F0ZWdvcmlhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBva0NhbWlzZXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBva1BhbnRhbG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBva01lZGlhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgb2tBYnJpZ28gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG9rUGFnbyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIENhdGVnb3LDrWFcclxuICAgICAgICAgICAgaWYoIWNhdGVnb3JpYS52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWEuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlhRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1bmEgY2F0ZWdvcsOtYVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQ2F0ZWdvcmlhID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRlZ29yaWEub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWEudmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWEuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBva0NhdGVnb3JpYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQ2F0ZWdvcmlhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIENhbWlzZXRhXHJcbiAgICAgICAgICAgIGlmKCFjYW1pc2V0YS52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBjYW1pc2V0YS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBjYW1pc2V0YUVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGNhbWlzZXRhRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1bmEgdGFsbGEgZGUgY2FtaXNldGFcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rQ2FtaXNldGEgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbWlzZXRhLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY2FtaXNldGEudmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBjYW1pc2V0YS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjYW1pc2V0YUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tDYW1pc2V0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQ2FtaXNldGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gUGFudGFsw7NuXHJcbiAgICAgICAgICAgIGlmKCFwYW50YWxvbi52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBwYW50YWxvbi5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBwYW50YWxvbkVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIHBhbnRhbG9uRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1bmEgdGFsbGEgZGUgcGFudGFsw7NuXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBva1BhbnRhbG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYW50YWxvbi5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHBhbnRhbG9uLnZhbHVlICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFudGFsb24uc3R5bGUuYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFudGFsb25FcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFudGFsb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBva1BhbnRhbG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIE1lZGlhc1xyXG4gICAgICAgICAgICBpZighbWVkaWFzLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIG1lZGlhcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBtZWRpYXNFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBtZWRpYXNFcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSB0YWxsYSBkZSBtZWRpYXNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rTWVkaWFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZWRpYXMub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihtZWRpYXMudmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYXMuc3R5bGUuYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFzRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBva01lZGlhcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rTWVkaWFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIEFicmlnb1xyXG4gICAgICAgICAgICBpZighYWJyaWdvLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGFicmlnby5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBhYnJpZ29FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBhYnJpZ29FcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSB0YWxsYSBkZSBhYnJpZ29cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rQWJyaWdvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhYnJpZ28ub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihhYnJpZ28udmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBhYnJpZ28uc3R5bGUuYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJyaWdvRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBva0FicmlnbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQWJyaWdvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIE3DqXRvZG8gZGUgcGFnb1xyXG4gICAgICAgICAgICBpZighcGFnby52YWx1ZSApe1xyXG4gICAgICAgICAgICAgICAgcGFnby5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdvRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgcGFnb0Vycm9yLmlubmVySFRNTCA9IFwiRGViZXMgc2VsZWNjaW9uYXIgdW4gbcOpdG9kbyBkZSBwYWdvXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBva1BhZ28gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhZ28ub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihwYWdvLnZhbHVlICE9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnby5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBwYWdvRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBva1BhZ28gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBva1BhZ28gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob2tDYXRlZ29yaWEgJiYgb2tDYW1pc2V0YSAmJiBva1BhbnRhbG9uICYmIG9rTWVkaWFzICYmIG9rQWJyaWdvICYmIG9rUGFnbyl7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnby1qdWdhZG9yZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7cGFnb0p1Z2Fkb3I6IEVsZWNjaW9uUGFnb0p1Z2Fkb3IsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiBFbGVjY2lvbkNhdGVnb3JpYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhbGxhQ2FtaXNldGE6IEVsZWNjaW9uVGFsbGFDYW1pc2V0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhbGxhUGFudGFsb246IEVsZWNjaW9uVGFsbGFQYW50YWxvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhbGxhTWVkaWFzOiBFbGVjY2lvblRhbGxhTWVkaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFBYnJpZ286IEVsZWNjaW9uVGFsbGFBYnJpZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3Rvbkp1Z2Fkb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gdGhpcy5kaXNtaXNzU2Vjc1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZSd9KSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gcHVlZG8gZWplY3V0YXIgYcO6bi4gJytcclxuICAgICAgICAgICAgICAgICdDYXRlZ29yaWE6ICcrb2tDYXRlZ29yaWErXHJcbiAgICAgICAgICAgICAgICAnIENhbWlzZXRhOiAnK29rQ2FtaXNldGErXHJcbiAgICAgICAgICAgICAgICAnIFBhbnRhbMOzbjogJytva1BhbnRhbG9uK1xyXG4gICAgICAgICAgICAgICAgJyBNZWRpYXM6ICcrb2tNZWRpYXMrXHJcbiAgICAgICAgICAgICAgICAnIEFicmlnbzogJytva0FicmlnbytcclxuICAgICAgICAgICAgICAgICcgUGFnbzogJytva1BhZ28pO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgbWItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxiLWNvbnRhaW5lciBjbGFzcz1cInRleHQtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8IS0tIEJvdMOzbiBhbmltYWRvIG1pZW50cmFzIHNlIGNhcmdhIGVsIGFqYXggLS0+XHJcbiAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiIGRpc2FibGVkIHYtaWY9XCIhdXN1YXJpby5mZWNoYU5hY2ltaWVudG9cIj5cclxuICAgICAgICAgICAgICAgIDxiLXNwaW5uZXIgc21hbGwgdHlwZT1cImdyb3dcIj48L2Itc3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgIENhcmdhbmRvLi4uXHJcbiAgICAgICAgICAgIDwvYi1idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8IS0tIENhcmQgY29uIHRvZG8gZWwgY29udGVuaWRvIGRlIE1pIHBlcmZpbCAtLT5cclxuICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiTWkgcGVyZmlsXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlci10ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXItdGFnPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlci1iZy12YXJpYW50PVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA1MGVtO1wiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwidXN1YXJpby5mZWNoYU5hY2ltaWVudG9cIlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDwhLS0gTm9tYnJlIHkgYXBlbGxpZG9zIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGgzIHYtaWY9XCIhZWRpdGFyXCI+e3sgdXN1YXJpby5ub21icmUgfX0ge3sgdXN1YXJpby5hcGVsbGlkb3MgfX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBOb21icmUgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCIgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPk5vbWJyZTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCBuYW1lPVwibm9tYnJlXCIgaWQ9XCJub21icmVcIiByZWY9XCJ1c3VhcmlvTm9tYnJlXCIgdi1tb2RlbD1cInVzdWFyaW8ubm9tYnJlXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHUgbm9tYnJlXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibm9tYnJlRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBBcGVsbGlkb3MgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCIgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkFwZWxsaWRvczo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5hcGVsbGlkb3NcIiBpZD1cInVzdWFyaW9BcGVsbGlkb3NcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dXMgYXBlbGxpZG9zXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYXBlbGxpZG9zRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBFbWFpbCBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5FbWFpbDo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmVtYWlsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5lbWFpbFwiIGlkPVwidXN1YXJpb0VtYWlsXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHUgZW1haWxcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbWFpbEVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEVkaWNpw7NuIHkgdmFsaWRhY2nDs24gQ29udHJhc2XDsWEgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCIgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkNvbnRyYXNlw7FhOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwidXN1YXJpby5wYXNzd29yZFwiIGlkPVwidXN1YXJpb1Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdW5hIGNvbnRyYXNlw7FhXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGFzc3dvcmRFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIENvbmZpcm1hciBjb250cmFzZcOxYSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Q29uZmlybWFyIGNvbnRyYXNlw7FhOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm1QYXNzXCIgcGxhY2Vob2xkZXI9XCJSZXBpdGUgbGEgY29udHJhc2XDsWFcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjb25maXJtUGFzc3dvcmRFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gTW9zdHJhci9vY3VsdGFyIGNvbnRyYXNlw7FhIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+PC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+VmVyIGNvbnRyYXNlw7Fhczwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWNoZWNrYm94IGlkPVwic2hvd1Bhc3N3b3Jkc1wiPjwvYi1mb3JtLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEVkaWNpw7NuIHkgdmFsaWRhY2nDs24gRG5pIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkRuaTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmRuaSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8uZG5pXCIgaWQ9XCJ1c3VhcmlvRG5pXCIgbWF4bGVuZ3RoPVwiOVwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIGFxdcOtIHR1IGRuaVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImRuaUVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEVkaWNpw7NuIHkgdmFsaWRhY2nDs24gRmVjaGEgZGUgbmFjaW1pZW50byBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5GZWNoYSBkZSBuYWNpbWllbnRvOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uZmVjaGFOYWNpbWllbnRvLmRhdGUuc3Vic3RyaW5nKDAsMTApfX0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdHlwZT1cImRhdGVcIiB2LW1vZGVsPVwiZmVjaGFcIiBpZD1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBmZWNoYSBkZSBuYWNpbWllbnRvXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvIG1iLTVcIj5EaXJlY2Npw7NuPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBDYWxsZSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkNhbGxlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uY2FsbGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmNhbGxlXCIgaWQ9XCJ1c3VhcmlvQ2FsbGVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBjYWxsZVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNhbGxlRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBMb2NhbGlkYWQgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+TG9jYWxpZGFkOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8ubG9jYWxpZGFkIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5sb2NhbGlkYWRcIiBpZD1cInVzdWFyaW9Mb2NhbGlkYWRcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBsb2NhbGlkYWRcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsb2NhbGlkYWRFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIFByb3ZpbmNpYSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Qcm92aW5jaWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5wcm92aW5jaWEgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8ucHJvdmluY2lhXCIgaWQ9XCJ1c3VhcmlvUHJvdmluY2lhXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHUgcHJvdmluY2lhXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicHJvdmluY2lhRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBDw7NkaWdvIHBvc3RhbCBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Dw7NkaWdvIHBvc3RhbDo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmNwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmNwXCIgaWQ9XCJ1c3VhcmlvQ3BcIiBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHUgY8OzZGlnbyBwb3N0YWxcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjcEVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPCEtLSBEYXRvcyBKdWdhZG9yIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhpc3RlSnVnYWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48c3BhbiBjbGFzcz1cInRleHQtaW5mbyBtYi01XCI+SnVnYWRvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5DYXRlZ29yaWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sganVnYWRvci5jYXRlZ29yaWEgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLmNhdGVnb3JpYVwiIDpvcHRpb25zPVwiY2F0ZWdvcmlhc1wiIGlkPVwidmFsaWRhckNhdGVnb3JpYVwiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2F0ZWdvcmlhRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlRhbGxhIGRlIENhbWlzZXRhOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGp1Z2Fkb3IuY2FtaXNldGEgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLmNhbWlzZXRhXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIiBpZD1cInZhbGlkYXJDYW1pc2V0YVwiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2FtaXNldGFFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlRhbGxhIGRlIHBhbnRhbMOzbjo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqdWdhZG9yLnBhbnRhbG9uIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwianVnYWRvci5wYW50YWxvblwiIDpvcHRpb25zPVwidGFsbGFzXCIgaWQ9XCJ2YWxpZGFyUGFudGFsb25cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInBhbnRhbG9uRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5UYWxsYSBkZSBtZWRpYXM6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sganVnYWRvci5tZWRpYXMgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLm1lZGlhc1wiIDpvcHRpb25zPVwidGFsbGFzXCIgaWQ9XCJ2YWxpZGFyTWVkaWFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJtZWRpYXNFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlRhbGxhIGRlIGFicmlnbzo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqdWdhZG9yLmFicmlnbyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImp1Z2Fkb3IuYWJyaWdvXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIiBpZD1cInZhbGlkYXJBYnJpZ29cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImFicmlnb0Vycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Nw6l0b2RvIGRlIHBhZ286PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sganVnYWRvci5wYWdvIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwianVnYWRvci5wYWdvXCIgOm9wdGlvbnM9XCJwYWdvXCIgaWQ9XCJ2YWxpZGFyUGFnb0p1Z2Fkb3JcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInBhZ29KdWdhZG9yRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIEBjbGljaz1cImJhamFKdWdhZG9yXCIgdi1pZj1cImVkaXRhclwiPkJhamEganVnYWRvcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBEYXRvcyBTb2NpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImV4aXN0ZVNvY2lvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvIG1iLTVcIj5Tb2Npbzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Nw6l0b2RvIGRlIHBhZ286PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc29jaW8ucGFnbyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInNvY2lvLnBhZ29cIiBpZD1cInZhbGlkYXJQYWdvU29jaW9cIiA6b3B0aW9ucz1cInBhZ29cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBAY2xpY2s9XCJjYW5jZWxhckFib25vXCIgdi1pZj1cImVkaXRhclwiPkNhbmNlbGFyIGFib25vIHNvY2lvPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIERhdG9zIEVudHJlbmFkb3IgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGlzdGVFbnRyZW5hZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvIG1iLTVcIj5FbnRyZW5hZG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlRpdHVsbyBlbnZpYWRvOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVudHJlbmFkb3IudGl0dWxvIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCIgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0YXRlPVwiQm9vbGVhbihmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbGlqYSB1biBhcmNoaXZvIG8gZGVzcGzDoWNlbG8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3AtcGxhY2Vob2xkZXI9XCJTb2x0YXIgYXJjaGl2byBhcXXDrS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlLXRleHQ9XCJFbGVnaXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2ItZm9ybS1maWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBAY2xpY2s9XCJiYWphRW50cmVuYWRvclwiIHYtaWY9XCJlZGl0YXJcIj5CYWphIGVudHJlbmFkb3I8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIiBpZD1cImJvdG9uRW50cmVuYWRvclwiIHYtaWY9XCJlZGl0YXJcIiBAY2xpY2s9XCJlbnZpYXJUaXR1bG9cIj5FbnZpYXIgb3RybyB0w610dWxvPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXByaW1hcnlcIiB2LWlmPVwiIWVkaXRhclwiIGlkPVwiZWRpY2lvblwiIEBjbGljaz1cImVkaXRhclBlcmZpbFwiPkVkaXRhcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiB2LWlmPVwiIWVkaXRhclwiIEBjbGljaz1cImVsaW1pbmFyUGVyZmlsKHVzdWFyaW8uaWQpXCI+RWxpbWluYXIgY3VlbnRhPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIiB2LWlmPVwiZWRpdGFyXCIgaWQ9XCJzYXZlQ2hhbmdlc1wiIEBjbGljaz1cImFjdHVhbGl6YXJQZXJmaWxcIj5BY3R1YWxpemFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHYtaWY9XCJlZGl0YXJcIiBAY2xpY2s9XCJjYW5jZWxhckVkaWNpb25cIj5DYW5jZWxhcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2ItY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8IS0tIE1lbnNhamUgZWxpbWluYWNpw7NuIGp1Z2Fkb3IsIHNvY2lvIG8gZW50cmVuYWRvciAtLT5cclxuICAgICAgICA8c21hbGwgdi1pZj1cInBhcnJhZm9cIj5TaSBlcmVzIGp1Z2Fkb3IvYSwgc29jaUAgbyBlbnRyZW5hZG9yL2EgeSBkZXNlYXMgdHJhbWl0YXIgbGEgYmFqYSwgcHVsc2EgYW50ZXMgZWwgYm90w7NuIGVkaXRhci48L3NtYWxsPlxyXG4gICAgICAgIDxzbWFsbCB2LWlmPVwibWVuc2FqZUNvbnRyYXNlw7FhXCI+U2kgbm8gcXVpZXJlcyBtb2RpZmljYXIgbGFzIGNvbnRyYXNlw7FhcywgZGVqYSBlbCBjYW1wbyB2YWPDrW88L3NtYWxsPlxyXG5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgICAgICAgIHVzdWFyaW86IFtdLFxyXG4gICAgICAgICAgICBqdWdhZG9yOiBbXSxcclxuICAgICAgICAgICAgc29jaW86IFtdLFxyXG4gICAgICAgICAgICBlbnRyZW5hZG9yOiBbXSxcclxuICAgICAgICAgICAgZmlsZTpbXSxcclxuICAgICAgICAgICAgZXhpc3RlSnVnYWRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGV4aXN0ZVNvY2lvOiBmYWxzZSxcclxuICAgICAgICAgICAgZXhpc3RlRW50cmVuYWRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGVkaXRhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhcnJhZm86IGZhbHNlLFxyXG4gICAgICAgICAgICBtZW5zYWplQ29udHJhc2XDsWE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb3B5cmlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBlbGltaW5hcjogJycsXHJcbiAgICAgICAgICAgIGVsaW1pbmFyU29jaW86ICcnLFxyXG4gICAgICAgICAgICBlbGltaW5hckp1Z2Fkb3I6ICcnLFxyXG4gICAgICAgICAgICBlbGltaW5hckVudHJlbmFkb3I6ICcnLFxyXG4gICAgICAgICAgICBmZWNoYTogJycsXHJcbiAgICAgICAgICAgIGNvbmZpcm1hclBhc3M6ICcnLFxyXG4gICAgICAgICAgICBjb250cmFzZcOxYUd1YXJkYWRhOiAnJyxcclxuICAgICAgICAgICAgY2F0ZWdvcmlhczpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdCZW5qYW1pbicsIHRleHQ6ICdCZW5qYW3DrW4nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0FsZXZpbicsIHRleHQ6ICdBbGV2w61uJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdJbmZhbnRpbCcsIHRleHQ6ICdJbmZhbnRpbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQ2FkZXRlJywgdGV4dDogJ0NhZGV0ZSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnSnV2ZW5pbCcsIHRleHQ6ICdKdXZlbmlsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdBZmljaW9uYWRvJywgdGV4dDogJ0FmaWNpb25hZG8nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1ZldGVyYW5vJywgdGV4dDogJ1ZldGVyYW5vJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGFsbGFzOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1MnLCB0ZXh0OiAnUyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnTScsIHRleHQ6ICdNJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdMJywgdGV4dDogJ0wnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1hMJywgdGV4dDogJ1hMJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcGFnbzpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdQYXlwYWwnLCB0ZXh0OiAnUGF5cGFsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nLCB0ZXh0OiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYScsIHRleHQ6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYSd9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvbWlzZGF0b3MnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpbyA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJyYWZvID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcHlyaWdodCA9IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW5zYWplQ29udHJhc2XDsWEgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLWp1Z2Fkb3JlcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5pZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuanVnYWRvciA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpc3RlSnVnYWRvciA9IHRydWUgXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9kYXRvcy1zb2Npb3MnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2lvID0gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXN0ZVNvY2lvID0gdHJ1ZSBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9kYXRvcy1lbnRyZW5hZG9yZXMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJlbmFkb3IgPSByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpc3RlRW50cmVuYWRvciA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBlZGl0YXJQZXJmaWwoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFycmFmbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW5zYWplQ29udHJhc2XDsWEgPSB0cnVlOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWNoYSA9IHRoaXMudXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoMCwxMCk7ICAgXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBQdW50ZXJvIGJvZHlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhcmlhYmxlcyBkZWwgdXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c3VhcmlvTm9tYnJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21icmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzdWFyaW9BcGVsbGlkb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzdWFyaW9BcGVsbGlkb3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzdWFyaW9FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb0VtYWlsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c3VhcmlvUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzdWFyaW9QYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWFyUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1QYXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c3VhcmlvRG5pID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c3VhcmlvRG5pXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c3VhcmlvQ2FsbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzdWFyaW9DYWxsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXN1YXJpb0xvY2FsaWRhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb0xvY2FsaWRhZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXN1YXJpb1Byb3ZpbmNpYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb1Byb3ZpbmNpYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXN1YXJpb0NwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c3VhcmlvQ3BcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNob3dQYXNzd29yZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dQYXNzd29yZHNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdG9uU2F2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZUNoYW5nZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhcmlhYmxlcyBkZWwgdXN1YXJpbyBKdWdhZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3JpYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhckNhdGVnb3JpYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FtaXNldGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJDYW1pc2V0YVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFudGFsb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJQYW50YWxvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVkaWFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyTWVkaWFzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhYnJpZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJBYnJpZ29cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ29KdWdhZG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyUGFnb0p1Z2Fkb3JcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhcmlhYmxlIGRlbCB1c3VhcmlvIFNvY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ29Tb2NpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhclBhZ29Tb2Npb1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFyaWFibGUgZGVsIHVzdWFyaW8gRW50cmVuYWRvclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRyZW5hZG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib3RvbkVudHJlbmFkb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uRW50cmVuYWRvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBFcnJvcmVzIGRlIHVzdWFyaW9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9tYnJlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWJyZUVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcGVsbGlkb3NFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBlbGxpZG9zRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtYWlsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1QYXNzd29yZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtUGFzc3dvcmRFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZG5pRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRuaUVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWxsZUVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbGlkYWRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYWxpZGFkRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpbmNpYUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm92aW5jaWFFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3BFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3BFcnJvclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2sgdmFsaWRhY2lvbmVzIFVzdWFyaW9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9tYnJlRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwZWxsaWRvc0ZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkbmlGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWxGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udHJhc2XDsWFGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWFyQ29udHJhc2XDsWFGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmVjaGFOYWNpbWllbnRvRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxlRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsaWRhZEZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm92aW5jaWFGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3BGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9rIHZhbGlkYWNpb25lcyBVc3VhcmlvIEp1Z2Fkb3JcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2tDYXRlZ29yaWEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva0NhbWlzZXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2tQYW50YWxvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9rTWVkaWFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2tBYnJpZ28gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva1BhZ29KdWdhZG9yID0gdHJ1ZTsgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBPayB2YWxpZGFjacOzbiBVc3VhcmlvIFNvY2lvICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2tQYWdvU29jaW8gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBPayB2YWxpZGFjacOzbiBVc3VhcmlvIEVudHJlbmFkb3IgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva0VudHJlbmFkb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBGVU5DSU9OIENPTVBST0JBQ0lPTiBFRElUQVIgUEVSRklMXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY29tcHJvYmFjaW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG5vbWJyZUZpbGwgJiYgYXBlbGxpZG9zRmlsbCAmJiBkbmlGaWxsICYmIGVtYWlsRmlsbCAmJiBmZWNoYU5hY2ltaWVudG9GaWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBjYWxsZUZpbGwgJiYgbG9jYWxpZGFkRmlsbCAmJiBwcm92aW5jaWFGaWxsICYmIGNwRmlsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoKGNvbnRyYXNlw7FhRmlsbCAmJiBjb25maXJtYXJDb250cmFzZcOxYUZpbGwpIHx8ICghY29udHJhc2XDsWFGaWxsICYmICFjb25maXJtYXJDb250cmFzZcOxYUZpbGwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wcm9iYWNpw7NuIGRlIGV4aXN0ZW5jaWEgZGUgdXN1YXJpbyBKdWdhZG9yICsgU29jaW8gKyBFbnRyZW5hZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2F0ZWdvcmlhICYmIHBhZ29Tb2NpbyAmJiBlbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9rQ2F0ZWdvcmlhICYmIG9rQ2FtaXNldGEgJiYgb2tQYW50YWxvbiAmJiBva0FicmlnbyAmJiBva01lZGlhcyAmJiBva1BhZ29KdWdhZG9yICYmIG9rUGFnb1NvY2lvICYmIG9rRW50cmVuYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWNhY2lvbmVzVXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXByb2JhY2nDs24gZGUgZXhpc3RlbmNpYSBkZSB1c3VhcmlvIEp1Z2Fkb3IgKyBTb2Npb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWEgJiYgcGFnb1NvY2lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihva0NhdGVnb3JpYSAmJiBva0NhbWlzZXRhICYmIG9rUGFudGFsb24gJiYgb2tBYnJpZ28gJiYgb2tNZWRpYXMgJiYgb2tQYWdvSnVnYWRvciAmJiBva1BhZ29Tb2Npbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpY2FjaW9uZXNVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXByb2JhY2nDs24gZGUgZXhpc3RlbmNpYSBkZSB1c3VhcmlvIEp1Z2Fkb3IgKyBFbnRyZW5hZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpYSAmJiBlbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihva0NhdGVnb3JpYSAmJiBva0NhbWlzZXRhICYmIG9rUGFudGFsb24gJiYgb2tBYnJpZ28gJiYgb2tNZWRpYXMgJiYgb2tQYWdvSnVnYWRvciAmJiBva0VudHJlbmFkb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpY2FjaW9uZXNVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXByb2JhY2nDs24gZGUgZXhpc3RlbmNpYSBkZSB1c3VhcmlvIFNvY2lvICsgRW50cmVuYWRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYWdvU29jaW8gJiYgZW50cmVuYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2tQYWdvU29jaW8gJiYgb2tFbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWNhY2lvbmVzVXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcHJvYmFjacOzbiBkZSBleGlzdGVuY2lhIGRlIHVzdWFyaW8gSnVnZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpYSAmJiAhcGFnb1NvY2lvICYmICFlbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihva0NhdGVnb3JpYSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWNhY2lvbmVzVXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wcm9iYWNpw7NuIGRlIGV4aXN0ZW5jaWEgZGUgdXN1YXJpbyBTb2Npb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYWdvU29jaW8gJiYgIWNhdGVnb3JpYSAmJiAhZW50cmVuYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2tQYWdvU29jaW8pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmljYWNpb25lc1VzdWFyaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcHJvYmFjacOzbiBkZSBleGlzdGVuY2lhIGRlIHVzdWFyaW8gRW50cmVuYWRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbnRyZW5hZG9yICYmICFjYXRlZ29yaWEgJiYgIXBhZ29Tb2Npbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2tFbnRyZW5hZG9yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpY2FjaW9uZXNVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDaWVycmUgZGUgZnVuY2nDs24gY29ucHJvYmFjacOzblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzaG93UGFzc3dvcmRzLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNob3dQYXNzd29yZHMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9QYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGNoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9QYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQudHlwZSA9IFwicGFzc3dvcmRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogVkFMSURBQ0lPTkVTIFVTVUFSSU8gKi9cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTm9tYnJlLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cE5vbWJyZSA9L15bQS1aYS16w4HDicONw5PDmsOhw6nDrcOzw7rDscORIF0rJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cE5vbWJyZS50ZXN0KHVzdWFyaW9Ob21icmUudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTm9tYnJlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBOb21icmUudGVzdCh1c3VhcmlvTm9tYnJlLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIGRlYmUgdGVuZXIgdW5hIGNhZGVuYSBkZSBjYXJhY3RlcmVzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTm9tYnJlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb05vbWJyZS52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTm9tYnJlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogQXBlbGxpZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQXBlbGxpZG9zLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cEFwZWxsaWRvcyA9L15bQS1aYS16w4HDicONw5PDmsOhw6nDrcOzw7rDscORIF0rJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHBBcGVsbGlkb3MudGVzdCh1c3VhcmlvQXBlbGxpZG9zLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0FwZWxsaWRvcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwQXBlbGxpZG9zLnRlc3QodXN1YXJpb0FwZWxsaWRvcy52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIHRlbmVyIHVuYSBjYWRlbmEgZGUgY2FyYWN0ZXJlc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0FwZWxsaWRvcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9BcGVsbGlkb3MudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0FwZWxsaWRvcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogRG5pICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZG5pRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRG5pLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1lcm8gPSB1c3VhcmlvRG5pLnZhbHVlLnN1YnN0cigwLHVzdWFyaW9EbmkudmFsdWUubGVuZ3RoLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGV0cmEgPSB1c3VhcmlvRG5pLnZhbHVlLnN1YnN0cih1c3VhcmlvRG5pLnZhbHVlLmxlbmd0aC0xLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGV0cmFNYXl1c2N1bGEgPSBsZXRyYS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRG5pLnZhbHVlID0gbnVtZXJvK2xldHJhTWF5dXNjdWxhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwRG5pID0vXlswLTldezh9W1RSV0FHTVlGUERYQk5KWlNRVkhMQ0tFVF0kL2k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cERuaS50ZXN0KHVzdWFyaW9EbmkudmFsdWUpKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0RuaS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvY29tcHJvYmFyLWRuaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7ZG5pOiB1c3VhcmlvRG5pLnZhbHVlLnRvU3RyaW5nKCl9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYXJEbmkoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cERuaS50ZXN0KHVzdWFyaW9EbmkudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSBjb250ZW5lciA4IG7Dum1lcm9zIHkgMSBsZXRyYSB2w6FsaWRhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRG5pLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb0RuaS52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRG5pLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXByb2JhckRuaSh2YWxvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkbmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRE5JIHJlcGV0aWRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlFcnJvci5pbm5lckhUTUwgPSBcIkVzdGUgRE5JIHlhIGV4aXN0ZSwgaW50cm9kdWNlIG90cm9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ebmkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRE5JOiAnK2RuaUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRE5JIGNvcnJlY3RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0RuaS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRE5JOiAnK2RuaUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogRW1haWxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0VtYWlsLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cEVtYWlsID0vXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLihbYS16QS1aXXsyLDR9KSskLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwRW1haWwudGVzdCh1c3VhcmlvRW1haWwudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9FbWFpbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBydXRhID0gJy9jb21wcm9iYXItZW1haWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAgcnV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoe2VtYWlsOiB1c3VhcmlvRW1haWwudmFsdWUudG9TdHJpbmcoKX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFyRW1haWwoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBFbWFpbC50ZXN0KHVzdWFyaW9FbWFpbC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIGRlYmUgdGVuZXIgZm9ybWF0byBlbWFpbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0VtYWlsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvRW1haWwudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRW1haWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb21wcm9iYXJFbWFpbCh2YWxvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbWFpbCByZXBldGlkbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSBcIkVzdGUgZW1haWwgeWEgZXhpc3RlLCBpbnRyb2R1Y2Ugb3Ryb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0VtYWlsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW1haWw6ICcrZW1haWxGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VtYWlsIGNvcnJlY3RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRW1haWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW1haWw6ICcrZW1haWxGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIENvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvLnBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Bhc3N3b3JkLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9QYXNzd29yZC52YWx1ZSA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybWFyUGFzc3dvcmQudmFsdWUgPT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFzZcOxYUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhc2XDsWFGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyYXNlw7FhOiAnK2NvbnRyYXNlw7FhRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyQ29udHJhc2XDsWFGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1hciBDb250cmFzZcOxYTogJytjb25maXJtYXJDb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9QYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFzZcOxYUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm1hclBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIHBhc3M6ICcrdXN1YXJpb1Bhc3N3b3JkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvUGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXNlw7FhRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJDb250cmFzZcOxYUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250cmFzZcOxYTogJytjb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maXJtYXIgQ29udHJhc2XDsWE6ICcrY29uZmlybWFyQ29udHJhc2XDsWFGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gXCJMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJDb250cmFzZcOxYUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJhc2XDsWE6ICcgKyBjb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maXJtYXIgQ29udHJhc2XDsWE6ICcrY29uZmlybWFyQ29udHJhc2XDsWFGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIENvbmZpcm1hciBjb250cmFzZcOxYSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gXCJcIjsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9QYXNzd29yZC52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybWFyUGFzc3dvcmQudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJDb250cmFzZcOxYUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyYXNlw7FhOiAnICsgY29udHJhc2XDsWFGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1hciBDb250cmFzZcOxYTogJytjb25maXJtYXJDb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybWFyUGFzc3dvcmQudmFsdWUgIT0gdXN1YXJpb1Bhc3N3b3JkLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gXCJMYXMgY29udHJhc2XDsWFzIG5vIGNvaW5jaWRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyYXNlw7FhOiAnICsgY29udHJhc2XDsWFGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1hciBDb250cmFzZcOxYTogJytjb25maXJtYXJDb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybWFyUGFzc3dvcmQudmFsdWUgPT0gdXN1YXJpb1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyQ29udHJhc2XDsWFGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250cmFzZcOxYTogJyArIGNvbnRyYXNlw7FhRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25maXJtYXIgQ29udHJhc2XDsWE6ICcrY29uZmlybWFyQ29udHJhc2XDsWFGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlByaW1lcm8gZGViZXMgaW5ncmVzYXIgbGEgY29udHJhc2XDsWFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyQ29udHJhc2XDsWFGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs246IENhbGxlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGVFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DYWxsZS5vbmtleXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBDYWxsZSA9L15bQS1aYS16w4HDicONw5PDmsOhw6nDrcOzw7rDscORIF0rWzAtOV0rJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cENhbGxlLnRlc3QodXN1YXJpb0NhbGxlLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQ2FsbGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwQ2FsbGUudGVzdCh1c3VhcmlvQ2FsbGUudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIGRlYmUgdGVuZXIgdW5hIGNhZGVuYSBkZSBjYXJhY3RlcmVzIHkgdW4gbsO6bWVyb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0NhbGxlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvQ2FsbGUudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZUVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DYWxsZS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs246IExvY2FsaWRhZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0xvY2FsaWRhZC5vbmtleXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBMb2NhbGlkYWQgPS9eW0EtWmEtesOBw4nDjcOTw5rDocOpw63Ds8O6w7HDkSBdKyQvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHBMb2NhbGlkYWQudGVzdCh1c3VhcmlvTG9jYWxpZGFkLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0xvY2FsaWRhZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwTG9jYWxpZGFkLnRlc3QodXN1YXJpb0xvY2FsaWRhZC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpZGFkRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpZGFkRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIHRlbmVyIHVuYSBjYWRlbmEgZGUgY2FyYWN0ZXJlc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0xvY2FsaWRhZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9Mb2NhbGlkYWQudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0xvY2FsaWRhZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBQcm92aW5jaWFcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Qcm92aW5jaWEub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwTG9jYWxpZGFkID0vXltBLVphLXrDgcOJw43Dk8Oaw6HDqcOtw7PDusOxw5EgXSskLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwTG9jYWxpZGFkLnRlc3QodXN1YXJpb1Byb3ZpbmNpYS52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Qcm92aW5jaWEuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cExvY2FsaWRhZC50ZXN0KHVzdWFyaW9Qcm92aW5jaWEudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNpYUVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNpYUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciB1bmEgY2FkZW5hIGRlIGNhcmFjdGVyZXNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Qcm92aW5jaWEuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvUHJvdmluY2lhLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Qcm92aW5jaWEuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBDUFxyXG4gICAgICAgICAgICAgICAgICAgIGNwRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQ3Aub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwQ3AgPS9eKD86MFsxLTldXFxkezN9fFsxLTRdXFxkezR9fDVbMC0yXVxcZHszfSkkLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwQ3AudGVzdCh1c3VhcmlvQ3AudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DcC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBDcC50ZXN0KHVzdWFyaW9DcC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciA1IG51bWVyb3MgY29tcHJlbmRpZG9zIGVudHJlIDAxMDAwIHkgNTI5OTlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DcC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb0NwLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQ3Auc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBWQUxJREFDSU9ORVMgVVNVQVJJTyBKVUdBRE9SICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIENhdGVnb3LDrWFcclxuICAgICAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbG9yQ2F0ZWdvcmlhID0gY2F0ZWdvcmlhLnZhbHVlOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2F0ZWdvcmlhLnZhbHVlID09PSB2YWxvckNhdGVnb3JpYSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tDYXRlZ29yaWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tDYXRlZ29yaWEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBDYW1pc2V0YVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhbWlzZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxvckNhbWlzZXRhID0gY2FtaXNldGEudmFsdWU7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtaXNldGEub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjYW1pc2V0YS52YWx1ZSA9PT0gdmFsb3JDYW1pc2V0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tDYW1pc2V0YSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0NhbWlzZXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gUGFudGFsb25cclxuICAgICAgICAgICAgICAgICAgICBpZihwYW50YWxvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsb3JQYW50YWxvbiA9IHBhbnRhbG9uLnZhbHVlOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFudGFsb24ub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYW50YWxvbi52YWx1ZSA9PT0gdmFsb3JQYW50YWxvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tQYW50YWxvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva1BhbnRhbG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gTWVkaWFzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWVkaWFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxvck1lZGlhcyA9IG1lZGlhcy52YWx1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhcy5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1lZGlhcy52YWx1ZSA9PT0gdmFsb3JNZWRpYXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rTWVkaWFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rTWVkaWFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQWJyaWdvXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWJyaWdvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxvckFicmlnbyA9IGFicmlnby52YWx1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFicmlnby5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFicmlnby52YWx1ZSA9PT0gdmFsb3JBYnJpZ28pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQWJyaWdvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQWJyaWdvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gUGFnbyBqdWdhZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFnb0p1Z2Fkb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGp1Z2Fkb3JQYWdvID0gcGFnb0p1Z2Fkb3IudmFsdWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdvSnVnYWRvci5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhZ29KdWdhZG9yLnZhbHVlID09PSBqdWdhZG9yUGFnbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tQYWdvSnVnYWRvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva1BhZ29KdWdhZG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogVkFMSURBQ0lPTkVTIFVTVUFSSU8gU09DSU8gKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gUGFnbyBTb2Npb1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhZ29Tb2Npbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc29jaW9QYWdvID0gcGFnb1NvY2lvLnZhbHVlOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnb1NvY2lvLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFnb1NvY2lvLnZhbHVlID09PSBzb2Npb1BhZ28pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rUGFnb1NvY2lvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rUGFnb1NvY2lvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogVkFMSURBQ0lPTkVTIFVTVUFSSU8gRU5UUkVOQURPUiAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihlbnRyZW5hZG9yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90b25FbnRyZW5hZG9yLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJlbmFkb3Iub25jaGFuZ2UgPSAoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVudHJlbmFkb3IudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGlzdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvbkVudHJlbmFkb3IuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25FbnRyZW5hZG9yLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gZXhpc3RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICBjYW5jZWxhckVkaWNpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5yZWxvYWQodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFycmFmbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW5zYWplQ29udHJhc2XDsWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBlbnZpYXJUaXR1bG8oKXtcclxuICAgICAgICAgICAgICAgIHZhciBydXRhID0gJy9lZGl0YXItZW50cmVuYWRvcidcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucmVsb2FkKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgICAgICAgICBcclxuICAgICAgICAgICAgYWN0dWFsaXphclBlcmZpbCgpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL2VkaXRhci1kYXRvcydcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRvcyBVc3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiB0aGlzLnVzdWFyaW8ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy51c3VhcmlvLmFwZWxsaWRvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhOiB0aGlzLmZlY2hhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3M6IHRoaXMudXN1YXJpby5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmk6IHRoaXMudXN1YXJpby5kbmksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IHRoaXMudXN1YXJpby5jYWxsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWQ6IHRoaXMudXN1YXJpby5sb2NhbGlkYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhOiB0aGlzLnVzdWFyaW8ucHJvdmluY2lhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwOiB0aGlzLnVzdWFyaW8uY3AsXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRvcyBKdWdhZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiB0aGlzLmp1Z2Fkb3IuY2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbWlzZXRhOiB0aGlzLmp1Z2Fkb3IuY2FtaXNldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFudGFsb246IHRoaXMuanVnYWRvci5wYW50YWxvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYXM6IHRoaXMuanVnYWRvci5tZWRpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJyaWdvOiB0aGlzLmp1Z2Fkb3IuYWJyaWdvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ29KdWdhZG9yOiB0aGlzLmp1Z2Fkb3IucGFnbyxcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdG9zIFNvY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnb1NvY2lvOiB0aGlzLnNvY2lvLnBhZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpbyA9IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5yZWxvYWQodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsYXJBYm9ubygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxpbWluYXJTb2NpbyA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VyQD8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWxhY2nDs24gZGVsIGFib25vIGRlIHNvY2lvJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxWYXJpYW50OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUaXRsZTogJ1NJJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyU29jaW8gPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsaW1pbmFyU29jaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9lbGltaW5hci1zb2NpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoe2lkOiB0aGlzLnNvY2lvLmlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBYm9ubyBjYW5jZWxhZG8gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucmVsb2FkKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fib25vIE5PIGNhbmNlbGFkbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhamFKdWdhZG9yKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFySnVnYWRvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VyQD8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCYWphIGRlIGp1Z2Fkb3IvYScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ3NtJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVmFyaWFudDogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVmFyaWFudDogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdTSScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGl0bGU6ICdOTycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGltaW5hckp1Z2Fkb3IgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsaW1pbmFySnVnYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2VsaW1pbmFyLWp1Z2Fkb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtpZDogdGhpcy5qdWdhZG9yLmlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYWphIGp1Z2Fkb3IgdHJhbWl0YWRhIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnJlbG9hZCh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYWphIGp1Z2Fkb3IgTk8gdHJhbWl0YWRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFqYUVudHJlbmFkb3IoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxpbWluYXJFbnRyZW5hZG9yID0gJydcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJ2TW9kYWwubXNnQm94Q29uZmlybSgnwr9Fc3TDoXMgc2VndXJAPycsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JhamEgZGUgZW50cmVuYWRvci9hJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxWYXJpYW50OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUaXRsZTogJ1NJJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyRW50cmVuYWRvciA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxpbWluYXJFbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZWxpbWluYXItZW50cmVuYWRvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoe2lkOiB0aGlzLmVudHJlbmFkb3IuaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JhamEgZW50cmVuYWRvciB0cmFtaXRhZGEgY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucmVsb2FkKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JhamEgZW50cmVuYWRvciBOTyB0cmFtaXRhZGEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxpbWluYXJQZXJmaWwoaWRVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyID0gJydcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJ2TW9kYWwubXNnQm94Q29uZmlybSgnwr9SZWFsbWVudGUgcXVpZXJlcyBlbGltaW5hciB0dSBjdWVudGE/Jywge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFbGltaW5hciBjdWVudGEnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogJ3NtJyxcclxuICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICBva1ZhcmlhbnQ6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVmFyaWFudDogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgb2tUaXRsZTogJ1NJJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRpdGxlOiAnTk8nLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxyXG4gICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxpbWluYXIgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsaW1pbmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBydXRhID0gJy9lbGltaW5hci11c3VhcmlvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtpZDogaWRVc3VhcmlvfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdWFyaW8gTk8gZWxpbWluYWRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC01IG1iLTUgdGV4dC1jZW50ZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPkNvbnRpZ28gc2VndWltb3MgY3JlY2llbmRvPC9oMT5cclxuICAgICAgICA8aDI+wqFIYXp0ZSBzb2NpbyE8L2gyPlxyXG5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWcgc3JjPVwiL2ltZy9Tb2Npb3MuanBnXCI+PC9iLWNhcmQtaW1nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE3DqXRpZG8gZGUgcGFnbyAtLT4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXRvZG9QYWdvXCI+TcOpdG9kbyBkZSBwYWdvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJtZXRvZG9QYWdvXCIgOm9wdGlvbnM9XCJwYWdvXCIgaWQ9XCJ2YWxpZGFyUGFnb1NvY2lvXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwYWdvU29jaW9FcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQWxlcnQgYW5pbWFkYSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudERvd249MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkaXNtaXNzLWNvdW50LWRvd249XCJjb3VudERvd25DaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbnZpYW5kbyBpbmZvcm1hY2nDs246IHt7IGRpc21pc3NDb3VudERvd24gfX0gc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWF4PVwiZGlzbWlzc1NlY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9iLXByb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItYWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBib3RvbiBlbnZpYXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBpZD1cImJvdG9uU29jaW9zXCIgQGNsaWNrPVwicGFnYXIobWV0b2RvUGFnbylcIj5FbnZpYXI8L2ItYnV0dG9uPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9iLXJvdz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1NvY2lvJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRvZG9QYWdvOiBudWxsLFxyXG4gICAgICAgICAgICBkaXNtaXNzU2VjczogMyxcclxuICAgICAgICAgICAgZGlzbWlzc0NvdW50RG93bjogMCxcclxuICAgICAgICAgICAgc2hvd0Rpc21pc3NpYmxlQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgcGFnbzpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIG3DqXRvZG8gZGUgcGFnbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUGF5cGFsJywgdGV4dDogJ1BheXBhbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJywgdGV4dDogJ1RhcmpldGEgY3LDqWRpdG8vZMOpYml0byd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnRG9taWNpbGlhY2nDs24gYmFuY2FyaWEnLCB0ZXh0OiAnRG9taWNpbGlhY2nDs24gYmFuY2FyaWEnfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGNvdW50RG93bkNoYW5nZWQoZGlzbWlzc0NvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdhcih0aXBvUGFnbyl7XHJcbiAgICAgICAgICAgIHZhciBwYWdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyUGFnb1NvY2lvXCIpO1xyXG4gICAgICAgICAgICB2YXIgcGFnb0Vycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdvU29jaW9FcnJvclwiKTtcclxuICAgICAgICAgICAgdmFyIGVudmlhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90b25Tb2Npb3NcIik7XHJcbiAgICAgICAgICAgIHZhciBva1BhZ29Tb2NpbyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gTcOpdG9kbyBkZSBwYWdvXHJcbiAgICAgICAgICAgIGlmKCFwYWdvLnZhbHVlICl7XHJcbiAgICAgICAgICAgICAgICBwYWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIHBhZ29FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdvRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1biBtw6l0b2RvIGRlIHBhZ29cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rUGFnb1NvY2lvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYWdvLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocGFnby52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ28uc3R5bGUuYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnb0Vycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tQYWdvU29jaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBva1BhZ29Tb2NpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihva1BhZ29Tb2Npbyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnV0YSA9ICcvcGFnby1zb2Npb3MnXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHJ1dGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtwYWdvOiB0aXBvUGFnb30pLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3RvblNvY2lvcycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDAwKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHB1ZWRvIGVqZWN1dGFtZSBwb3JxdWUgZWwgcGFnbyBlc3TDoTogJytva1BhZ29Tb2Npbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1xuICAgICAgICBfdm0uY2FyZ2FFblByb2Nlc29cbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImItbmF2YmFyXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0aWNreTogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZWFibGU6IFwibWRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcIndoaXRlXCIsIGxhYmVsOiBcIlNwaW5uaW5nXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY2FyZ2FDb21wbGV0YWRhXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJiLW5hdmJhclwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0aWNreTogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZWFibGU6IFwibWRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItbmF2YmFyLXRvZ2dsZVwiLCB7IGF0dHJzOiB7IHRhcmdldDogXCJuYXYtY29sbGFwc2VcIiB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiLW5hdmJhci1icmFuZFwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2JhbG9uLnBuZ1wiLCB3aWR0aDogXCIzMFwiLCBhbHQ6IFwiYmFsb25cIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICAgIElGLW9ybcOhdGljb3MgRkNcXHJcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXYtY29sbGFwc2VcIiwgXCJpcy1uYXZcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItbmF2YmFyLW5hdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vdGljaWFzIGRlbCBjbHViXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vc3RyYXJTb2NpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb3N0cmFyU29jaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJzb2Npb1wiIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSW5zY3JpYmlyc2UgY29tbyBzb2Npb1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb3N0cmFySnVnYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb3N0cmFySnVnYWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImp1Z2Fkb3JcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkluc2NyaWJpcnNlIGNvbW8ganVnYWRvclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb3N0cmFyRW50cmVuYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb3N0cmFyRW50cmVuYWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImVudHJlbmFkb3JcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhciBzb2xpY2l0dWQgZGUgZW50cmVuYWRvclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHItNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwicGVyZmlsXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE1pIHBlcmZpbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2xvZ291dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbGltaW5hckNvb2tpZXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmb250LWF3ZXNvbWUtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogXCIjQ0Q1QzVDXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwic2lnbi1vdXQtYWx0XCIsIHNpemU6IFwibGdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWluZm8gcC0zIGZpeGVkLWJvdHRvbVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29va2llc1NlY3Rpb25cIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiRXN0ZSBzaXRpbyB3ZWIgdXRpbGl6YSBjb29raWVzLCBzaSBwZXJtYW5lY2UgYXF1w60gZGFtb3MgcG9yIGhlY2hvIHF1ZSBhY2VwdGEgc3UgdXNvLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlB1ZWRlIGxlZXIgbcOhcyBzb2JyZSBlbCB1c28gZGUgY29va2llcyBlbiBwb2zDrXRpY2EgZGUgY29va2llcy5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImxpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY2VwdGFyQ29va2llcyB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBY2VwdGFyIGNvb2tpZXNcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwibGlnaHRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvcG9saXRpY2FDb29raWVzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUG9saXRpY2EgZGUgY29va2llc1wiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCBbX3ZtLl92KFwiUHVsc2EgYWNlcHRhciBwYXJhIGVsaW1pbmFyIGVzdGUgbWVuc2FqZVwiKV0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInJvdXRlci12aWV3XCIpXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJmb290ZXJcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9vdGVyIHN0aWNreS1ib3R0b20gY29udGFpbmVyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLCqSAyMDIwIElGLW9ybcOhdGljb3MgRkNcIilcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi01IHRleHQtY2VudGVyIGNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiwr9UaWVuZXMgZWwgdMOtdHVsbyBkZSBlbnRyZW5hZG9yP1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkVudsOtYW5vc2xvIHkgZGlyaWdlIGEgYWxndW5vIGRlIG51ZXN0cm9zIGVxdWlwb3NcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImItaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWcvZW50cmVuYWRvci5wbmdcIiwgZmx1aWQ6IFwiXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1maWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogQm9vbGVhbihfdm0uZmlsZSksXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRWxpamEgdW4gYXJjaGl2byBvIGRlc3Bsw6FjZWxvIGFxdcOtLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkcm9wLXBsYWNlaG9sZGVyXCI6IFwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZS10ZXh0XCI6IFwiRWxlZ2lyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmFyY2hpdm8gfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImVudHJlbmFkb3JFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItYWxlcnRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZGlzbWlzc0NvdW50RG93biA9IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBhcmNoaXZvOiBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzbWlzc0NvdW50RG93bikgK1xuICAgICAgICAgICAgICAgICAgICBcIiBzZWd1bmRvcy4uLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLXByb2dyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICBtYXg6IF92bS5kaXNtaXNzU2VjcyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwic3VjY2Vzc1wiLCBpZDogXCJib3RvbkVudHJlbmFkb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbnZpYXJUaXR1bG8gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhclwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY2Fyb3VzZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LXNoYWRvd1wiOiBcIjBweCAwcHggMnB4ICMwMDBcIiB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImNhcm91c2VsLWZhZGVcIixcbiAgICAgICAgICAgICAgICBmYWRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGluZGljYXRvcnM6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctd2lkdGhcIjogXCIxMDI0XCIsXG4gICAgICAgICAgICAgICAgXCJpbWctaGVpZ2h0XCI6IFwiNDgwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY2FwdGlvbjogXCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIixcbiAgICAgICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvYmFsb24tZGUtZnV0Ym9sLmpwZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY2FwdGlvbjogXCJDb21wYXJ0ZSBudWVzdHJhIHBhc2nDs25cIixcbiAgICAgICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvY2FtcG8uanBnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjYXB0aW9uOiBcIkFxdcOtIGVuY29udHJhcsOhcyBsYXMgbm90aWNpYXMgZGVsIGNsdWJcIixcbiAgICAgICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvZXNjdWVsYS5qcGdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgY2FwdGlvbjogXCJSZXN1bHRhZG9zXCIsIFwiaW1nLXNyY1wiOiBcIi9pbWcvZnV0Ym9sLmpwZ1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRlY2s6IFwiZGVja1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJIaXN0b3JpYSBkZWwgY2x1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbm9jZSBudWVzdHJhIGhpc3RvcmlhXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiSW5zdGFsYWNpb25lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGVtcGxhIG51ZXN0cmFzIGluc3RhbGFjaW9uZXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiUGxhbnRpbGxhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29ub2NlIG51ZXN0cmFzIHBsYW50aWxsYXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkZWNrOiBcImRlY2tcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiQ2xhc2lmaWNhY2nDs25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9ic2VydmEgbnVlc3RyYSBjbGFzaWZpY2FjacOzbiBlbiBsYSB0YWJsYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIlByw7N4aW1vcyBwYXJ0aWRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXF1w60gcHVlZGVzIHZlciBjb250cmEgcXVpZW4ganVnYW1vcyBlbCBwcsOzeGltbyBlbmN1ZW50cm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIlJlc3VsdGFkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL3JlY29tZW5kYWNpb25lcy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlY29tZW5kYWNpb25lcyBwYXJhIGV2aXRhciBsb3Mgcmllc2dvcyBzb2JyZSBsYSBzYWx1ZCBlbiBsYSB2dWVsdGEgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMzAgbWF5bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgRGVwYXJ0YW1lbnRvIE3DqWRpY28gZGUgbGEgUmVhbCBGZWRlcmFjacOzbiBFc3Bhw7FvbGEgZGUgRsO6dGJvbCwgY29uIGxhIGNvbGFib3JhY2nDs24gZGUgcHJvZmVzaW9uYWxlcyBleHBlcnRvcyBkZSBuaXZlbCBpbnRlcm5hY2lvbmFsLCBoYSBlbGFib3JhZG8gdW4gUHJvdG9jb2xvIG3DqWRpY28geSBkZSBwcmVwYXJhY2nDs24gZsOtc2ljYSBiYXNhZG8gZW4gcmVjb21lbmRhY2lvbmVzIHBhcmEgZXZpdGFyIGxvcyByaWVzZ29zIHBhcmEgbGEgc2FsdWQgZW4gbGEgdnVlbHRhIGEgbG9zIGVudHJlbmFtaWVudG9zIHkgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2NkbjEuc2VmdXRib2wuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvcGRmL3JlY29tZW5kYWNpb25lc19wYXJhX2V2aXRhcl9sb3NfcmllZ29zX3NvYnJhX2xhX3NhbHVkX2VuX2xhX3Z1ZWx0YV9hX2xhX2NvbXBldGljaW9uX2VuX2VsX2Z1dGJvbC5wZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFxdcOtIGVsIGVubGFjZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2Zhc2UyLmpwZ1wiLCBhbHQ6IFwibG9nb1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZhc2UgMiBkZSBsYSBkZXNlc2NhbGFkYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMjcgbWF5bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgQ29uc2VqbyBTdXBlcmlvciBkZSBEZXBvcnRlcyBoYSBwcmVwYXJhZG8gdW4gZG9jdW1lbnRvIHF1ZSBkYSByZXNwdWVzdGEgYSBsYXMgZHVkYXMgbcOhcyBmcmVjdWVudGVzIGRlIGxvcyBkZXBvcnRpc3RhcyBwcm9mZXNpb25hbGVzIHkgZmVkZXJhZG9zIGRlIGNhcmEgYSBsYSBGYXNlIDIgZGUgbGEgZGVzZXNjYWxhZGEsIHF1ZSBlc3RhIHNlbWFuYSBoYSBjb21lbnphZG8gZW4gZ3JhbiBwYXJ0ZSBkZWwgcGHDrXMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4xLnNlZnV0Ym9sLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ZhcXNfZGVwb3J0ZV9mYXNlXzIucGRmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBcXXDrSBlbCBlbmxhY2VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltZy9sb2dvX3JmZWYuanBnXCIsIGFsdDogXCJsb2dvXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VzcGVuc2nDs24gZGUgbGFzIGNvbXBldGljaW9uZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjI3IG1hcnpvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBSRkVGIGFwcnVlYmEgbGEgc3VzcGVuc2nDs24gZGUgdG9kYXMgbGFzIGNvbXBldGljaW9uZXMgbm8gcHJvZmVzaW9uYWxlcyBoYXN0YSBxdWUgbGFzIGF1dG9yaWRhZGVzIGNvbnNpZGVyZW4gcXVlIHNlIHB1ZWRlbiByZWFudWRhciBzaW4gcmllc2dvXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvQ29tdW5pY2Fkb19vZmljaWFsLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiY29tdW5pY2Fkb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMTAgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZWRhbiBzdXNwZW5kaWRvcyB0b2RvcyBsb3MgZW50cmVuYW1pZW50b3MgZGVzZGUgbWHDsWFuYSBtacOpcmNvbGVzIDExIGRlIG1hcnpvIGRlIDIwMjAgaGFzdGEgbnVldm8gYXZpc28uIExhIFJlYWwgRmVkZXJhY2nDs24gZGUgRsO6dGJvbCBkZSBNYWRyaWQgaGEgYW51bmNpYWRvIGxhIHN1c3BlbnNpw7NuIGRlIGxhcyBjb21wZXRpY2lvbmVzIHRlcnJpdG9yaWFsZXMgZHVyYW50ZSBsYXMgcHLDs3hpbWFzIGRvcyBzZW1hbmFzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL3Jlc3VsdGFkb3MuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJyZXN1bHRhZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlc3VsdGFkb3MgZGVsIGZpbiBkZSBzZW1hbmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjkgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51ZXN0cm9zIGVxdWlwb3MgY29udGludWFuIGNvbiBsYSBidWVuYSBkaW7DoW1pY2EgZGUgZXN0YXMgw7psdGltYXMgNyBqb3JuYWRhcy4gVHJhcyBlbCB0cm9waWV6byBpbmljaWFsIGEgbGEgdnVlbHRhIGRlIG5hdmlkYWQsIHNlIGN1ZW50YW4gbG9zIHBhcnRpZG9zIHBvciB2aWN0b3JpYS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9wdWVzdG9fZW50cmVuYWRvci5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInB1ZXN0b19lbnRyZW5hZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1ZXN0b3MgZGUgZW50cmVuYWRvcmVzIHZhY2FudGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIyIG1hcnpvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5lbW9zIGRpc3BvbmlibGVzIGFsZ3VuYXMgdmFjYW50ZXMgZGUgZW50cmVuYWRvcmVzIGRlIGFsZ3VuYXMgZGUgbnVlc3RyYXMgcGxhbnRpbGxhcywgc2kgdGllbmVzIGVsIHTDrXR1bG8gbWFuZGFsbyB5IGZvcm1hIHBhcnRlIGRlbCBjbHViLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgdGV4dC1jZW50ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlJlbGxlbmEgZXN0ZSBmb3JtdWxhcmlvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiwqF5IMO6bmV0ZSBhIG51ZXN0cm8gZXF1aXBvIVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiY2F0ZWdvcmlhc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhdGVnb3LDrWE6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJDYXRlZ29yaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNhdGVnb3JpYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhdGVnb3JpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yaWEgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiY2F0ZWdvcmlhRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhQ2FtaXNldGFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBjYW1pc2V0YTpcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidmFsaWRhckNhbWlzZXRhXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFDYW1pc2V0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUNhbWlzZXRhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFDYW1pc2V0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJjYW1pc2V0YUVycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0YWxsYVBhbnRhbG9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgcGFudGFsw7NuOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ2YWxpZGFyUGFudGFsb25cIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYVBhbnRhbG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhUGFudGFsb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYVBhbnRhbG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInBhbnRhbG9uRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhTWVkaWFzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgbWVkaWFzOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ2YWxpZGFyTWVkaWFzXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFNZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFNZWRpYXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYU1lZGlhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJtZWRpYXNFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFBYnJpZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBhYnJpZ286XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInZhbGlkYXJBYnJpZ29cIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYUFicmlnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUFicmlnbyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhbGxhQWJyaWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImFicmlnb0Vycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtZXRvZG9QYWdvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTcOpdG9kbyBkZSBwYWdvOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ2YWxpZGFyUGFnb1wiLCBvcHRpb25zOiBfdm0ucGFnbyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRvZG9QYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldG9kb1BhZ28gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRvZG9QYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInBhZ29FcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1hbGVydFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNtaXNzQ291bnREb3duID0gMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImRpc21pc3MtY291bnQtZG93blwiOiBfdm0uY291bnREb3duQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiRW52aWFuZG8gaW5mb3JtYWNpw7NuOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc21pc3NDb3VudERvd24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIHNlZ3VuZG9zLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLXByb2dyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IF92bS5kaXNtaXNzU2VjcyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBpZDogXCJib3Rvbkp1Z2Fkb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaW5zY3JpYmlySnVnYWRvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0b2RvUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUNhbWlzZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYVBhbnRhbG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYU1lZGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFBYnJpZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhclwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYi1jb250YWluZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJ0ZXh0LWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgIV92bS51c3VhcmlvLmZlY2hhTmFjaW1pZW50b1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YXJpYW50OiBcImluZm9cIiwgZGlzYWJsZWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1zcGlubmVyXCIsIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIsIHR5cGU6IFwiZ3Jvd1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBDYXJnYW5kby4uLlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udXN1YXJpby5mZWNoYU5hY2ltaWVudG9cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI1MGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJNaSBwZXJmaWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItdGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItdGFnXCI6IFwiaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyLWJnLXZhcmlhbnRcIjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5ub21icmUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmFwZWxsaWRvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm9tYnJlOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidXN1YXJpb05vbWJyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IG5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJub21icmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLm5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm5vbWJyZUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBcGVsbGlkb3M6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0FwZWxsaWRvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB0dXMgYXBlbGxpZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uYXBlbGxpZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcImFwZWxsaWRvc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8uYXBlbGxpZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYXBlbGxpZG9zRXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1haWw6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ1c3VhcmlvRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8uZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJlbWFpbEVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29udHJhc2XDsWE6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9QYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB1bmEgY29udHJhc2XDsWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXNzd29yZEVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb25maXJtYXIgY29udHJhc2XDsWE6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbmZpcm1QYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUmVwaXRlIGxhIGNvbnRyYXNlw7FhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29uZmlybVBhc3N3b3JkRXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlZlciBjb250cmFzZcOxYXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwic2hvd1Bhc3N3b3Jkc1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEbmk6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmRuaSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0RuaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGRuaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmRuaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJkbmlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmRuaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRuaUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGZWNoYSBkZSBuYWNpbWllbnRvOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjZSBhcXXDrSB0dSBmZWNoYSBkZSBuYWNpbWllbnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZlY2hhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mZWNoYSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmZWNoYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1pbmZvIG1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRpcmVjY2nDs25cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMiBtdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhbGxlOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5jYWxsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0NhbGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY2FsbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY2FsbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY2FsbGVFcnJvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTG9jYWxpZGFkOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5sb2NhbGlkYWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9Mb2NhbGlkYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgbG9jYWxpZGFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8ubG9jYWxpZGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcImxvY2FsaWRhZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8ubG9jYWxpZGFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibG9jYWxpZGFkRXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlByb3ZpbmNpYTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8ucHJvdmluY2lhKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ1c3VhcmlvUHJvdmluY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IHByb3ZpbmNpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLnByb3ZpbmNpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJwcm92aW5jaWFcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLnByb3ZpbmNpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInByb3ZpbmNpYUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDw7NkaWdvIHBvc3RhbDpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8uY3ApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9DcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGPDs2RpZ28gcG9zdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY3BcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY3BFcnJvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZXhpc3RlSnVnYWRvclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1pbmZvIG1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSnVnYWRvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhdGVnb3JpYTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5jYXRlZ29yaWEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNhdGVnb3JpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ2YWxpZGFyQ2F0ZWdvcmlhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmp1Z2Fkb3IuY2F0ZWdvcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVnYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3JpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmNhdGVnb3JpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNhdGVnb3JpYUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIENhbWlzZXRhOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qdWdhZG9yLmNhbWlzZXRhKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS50YWxsYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ2YWxpZGFyQ2FtaXNldGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5jYW1pc2V0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1Z2Fkb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYW1pc2V0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmNhbWlzZXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY2FtaXNldGFFcnJvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBwYW50YWzDs246XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmp1Z2Fkb3IucGFudGFsb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhbGxhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJQYW50YWxvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5qdWdhZG9yLnBhbnRhbG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVnYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhbnRhbG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImp1Z2Fkb3IucGFudGFsb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYW50YWxvbkVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIG1lZGlhczpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5tZWRpYXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhbGxhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJNZWRpYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5tZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5qdWdhZG9yLCBcIm1lZGlhc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLm1lZGlhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm1lZGlhc0Vycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIGFicmlnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5hYnJpZ28pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhbGxhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJBYnJpZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5hYnJpZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5qdWdhZG9yLCBcImFicmlnb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmFicmlnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFicmlnb0Vycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5wYWdvKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5wYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidmFsaWRhclBhZ29KdWdhZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmp1Z2Fkb3IucGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmp1Z2Fkb3IsIFwicGFnb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLnBhZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYWdvSnVnYWRvckVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iYWphSnVnYWRvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQmFqYSBqdWdhZG9yXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmV4aXN0ZVNvY2lvXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm8gbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTb2Npb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc29jaW8ucGFnbykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ2YWxpZGFyUGFnb1NvY2lvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucGFnb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc29jaW8ucGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNvY2lvLCBcInBhZ29cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic29jaW8ucGFnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jYW5jZWxhckFib25vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxhciBhYm9ubyBzb2Npb1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5leGlzdGVFbnRyZW5hZG9yXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm8gbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFbnRyZW5hZG9yXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGl0dWxvIGVudmlhZG86XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVudHJlbmFkb3IudGl0dWxvKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1maWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IEJvb2xlYW4oX3ZtLmZpbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRWxpamEgdW4gYXJjaGl2byBvIGRlc3Bsw6FjZWxvIGFxdcOtLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRyb3AtcGxhY2Vob2xkZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTb2x0YXIgYXJjaGl2byBhcXXDrS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJicm93c2UtdGV4dFwiOiBcIkVsZWdpclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yIG10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcIm91dGxpbmUtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYmFqYUVudHJlbmFkb3IgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkJhamEgZW50cmVuYWRvclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwib3V0bGluZS1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJvdG9uRW50cmVuYWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbnZpYXJUaXR1bG8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhciBvdHJvIHTDrXR1bG9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJvdXRsaW5lLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImVkaWNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lZGl0YXJQZXJmaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdGFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbGltaW5hclBlcmZpbChfdm0udXN1YXJpby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbGltaW5hciBjdWVudGFcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIm91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2F2ZUNoYW5nZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3R1YWxpemFyUGVyZmlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdHVhbGl6YXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2FuY2VsYXJFZGljaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbGFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFycmFmb1xuICAgICAgICA/IF9jKFwic21hbGxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlNpIGVyZXMganVnYWRvci9hLCBzb2NpQCBvIGVudHJlbmFkb3IvYSB5IGRlc2VhcyB0cmFtaXRhciBsYSBiYWphLCBwdWxzYSBhbnRlcyBlbCBib3TDs24gZWRpdGFyLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubWVuc2FqZUNvbnRyYXNlw7FhXG4gICAgICAgID8gX2MoXCJzbWFsbFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiU2kgbm8gcXVpZXJlcyBtb2RpZmljYXIgbGFzIGNvbnRyYXNlw7FhcywgZGVqYSBlbCBjYW1wbyB2YWPDrW9cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiwgYXR0cnM6IHsgdmFyaWFudDogXCJsaWdodFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJWb2x2ZXIgYSBpbmljaW9cIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlBvbMOtdGljYSBkZSBjb29raWVzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJMYSBwcmVzZW50ZSBwb2zDrXRpY2EgZGUgY29va2llcyB0aWVuZSBwb3IgZmluYWxpZGFkIGluZm9ybWFybGUgZGUgbWFuZXJhIGNsYXJhIHkgcHJlY2lzYSBzb2JyZSBsYXMgY29va2llcyBxdWUgc2UgdXRpbGl6YW4gZW4gbGEgcMOhZ2luYSB3ZWIgZGUgSUYtb3Jtw6F0aWNvcyBGQy5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX2MoXCJ1XCIsIFtfdm0uX3YoXCLCv1F1w6kgc29uIGxhcyBjb29raWVzP1wiKV0pXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFVuYSBjb29raWUgZXMgdW4gcGVxdWXDsW8gZnJhZ21lbnRvIGRlIHRleHRvIHF1ZSBsb3Mgc2l0aW9zIHdlYiBxdWUgdmlzaXRhIGVudsOtYW4gYWwgbmF2ZWdhZG9yIHkgcXVlIHBlcm1pdGUgcXVlIGVsIHNpdGlvIHdlYiByZWN1ZXJkZSBpbmZvcm1hY2nDs24gc29icmUgc3UgdmlzaXRhLCBjb21vIHN1IGlkaW9tYSBwcmVmZXJpZG8geSBvdHJhcyBvcGNpb25lcywgY29uIGVsIGZpbiBkZSBmYWNpbGl0YXIgc3UgcHLDs3hpbWEgdmlzaXRhIHkgaGFjZXIgcXVlIGVsIHNpdGlvIGxlIHJlc3VsdGUgbcOhcyDDunRpbC4gTGFzIGNvb2tpZXMgZGVzZW1wZcOxYW4gdW4gcGFwZWwgbXV5IGltcG9ydGFudGUgeSBjb250cmlidXllbiBhIHRlbmVyIHVuYSBtZWpvciBleHBlcmllbmNpYSBkZSBuYXZlZ2FjacOzbiBwYXJhIGVsIHVzdWFyaW8uXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW19jKFwidVwiLCBbX3ZtLl92KFwiVGlwb3MgZGUgY29va2llc1wiKV0pXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFNlZ8O6biBxdWnDqW4gc2VhIGxhIGVudGlkYWQgcXVlIGdlc3Rpb25lIGVsIGRvbWluaW8gZGVzZGUgZMOzbmRlIHNlIGVudsOtYW4gbGFzIGNvb2tpZXMgeSBzZSB0cmF0ZW4gbG9zIGRhdG9zIHF1ZSBzZSBvYnRlbmdhbiwgc2UgcHVlZGVuIGRpc3Rpbmd1aXIgZG9zIHRpcG9zOiBjb29raWVzIHByb3BpYXMgeSBjb29raWVzIGRlIHRlcmNlcm9zLlxcbiAgICAgICAgICAgICAgICBFeGlzdGUgdGFtYmnDqW4gdW5hIHNlZ3VuZGEgY2xhc2lmaWNhY2nDs24gc2Vnw7puIGVsIHBsYXpvIGRlIHRpZW1wbyBxdWUgcGVybWFuZWNlbiBhbG1hY2VuYWRhcyBlbiBlbCBuYXZlZ2Fkb3IgZGVsIGNsaWVudGUsIHB1ZGllbmRvIHRyYXRhcnNlIGRlIGNvb2tpZXMgZGUgc2VzacOzbiBvIGNvb2tpZXMgcGVyc2lzdGVudGVzLlxcbiAgICAgICAgICAgICAgICBQb3Igw7psdGltbywgZXhpc3RlIG90cmEgY2xhc2lmaWNhY2nDs24gY29uIGNpbmNvIHRpcG9zIGRlIGNvb2tpZXMgc2Vnw7puIGxhIGZpbmFsaWRhZCBwYXJhIGxhIHF1ZSBzZSB0cmF0ZW4gbG9zIGRhdG9zIG9idGVuaWRvczogY29va2llcyB0w6ljbmljYXMsIGNvb2tpZXMgZGUgcGVyc29uYWxpemFjacOzbiwgY29va2llcyBkZSBhbsOhbGlzaXMsIGNvb2tpZXMgcHVibGljaXRhcmlhcyB5IGNvb2tpZXMgZGUgcHVibGljaWRhZCBjb21wb3J0YW1lbnRhbC5cXG4gICAgICAgICAgICAgICAgUGFyYSBtw6FzIGluZm9ybWFjacOzbiBhIGVzdGUgcmVzcGVjdG8gcHVlZGUgY29uc3VsdGFyIGxhIEd1w61hIHNvYnJlIGVsIHVzbyBkZSBsYXMgY29va2llcyBkZSBsYSBBZ2VuY2lhIEVzcGHDsW9sYSBkZSBQcm90ZWNjacOzbiBkZSBEYXRvcy5cXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX2MoXCJ1XCIsIFtfdm0uX3YoXCJDb29raWVzIHV0aWxpemFkYXMgZW4gbGEgd2ViXCIpXSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgQSBjb250aW51YWNpw7NuIHNlIGlkZW50aWZpY2FuIGxhcyBjb29raWVzIHF1ZSBlc3TDoW4gc2llbmRvIHV0aWxpemFkYXMgZW4gZXN0YSBww6FnaW5hOiBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgLSBOdWVzdHJhIHDDoWdpbmEgdXRpbGl6YSB1bmEgc29sYSBjb29raWUgcXVlIHNpbXBsZW1lbnRlIGd1YXJkYSB1biBtZW5zYWplIGRlIGJpZW52ZW5pZGEgYSBsYSBww6FnaW5hLlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ1XCIsIFtfdm0uX3YoXCJBY2VwdGFjacOzbiBkZSBsYSBwb2zDrXRpY2EgZGUgY29va2llc1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJQdWxzYW5kbyBlbCBib3TDs24gQWNlcHRhciBjb29raWVzIHNlIGFzdW1lIHF1ZSB1c3RlZCBhY2VwdGEgZWwgdXNvIGRlIGNvb2tpZXMuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkPDs21vIG1vZGlmaWNhciBsYSBjb25maWd1cmFjacOzbiBkZSBsYXMgY29va2llc1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICdcXG4gICAgICAgICAgICAgICAgVXN0ZWQgcHVlZGUgcmVzdHJpbmdpciwgYmxvcXVlYXIgbyBib3JyYXIgbGFzIGNvb2tpZXMgZGUgSUYtb3Jtw6F0aWNvcyBGQyBvIGN1YWxxdWllciBvdHJhIHDDoWdpbmEgd2ViIHV0aWxpemFuZG8gc3UgbmF2ZWdhZG9yLiBFbiBjYWRhIG5hdmVnYWRvciBsYSBvcGVyYXRpdmEgZXMgZGlmZXJlbnRlLCBsYSBmdW5jacOzbiBkZSBcIkF5dWRhXCIgbGUgbW9zdHJhcsOhIGPDs21vIGhhY2VybG8uXFxuICAgICAgICAgICAgJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlciBjb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkNvbnRpZ28gc2VndWltb3MgY3JlY2llbmRvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiwqFIYXp0ZSBzb2NpbyFcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWcvU29jaW9zLmpwZ1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1ldG9kb1BhZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnBhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidmFsaWRhclBhZ29Tb2Npb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRvZG9QYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRvZG9QYWdvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldG9kb1BhZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJwYWdvU29jaW9FcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzbWlzc0NvdW50RG93biA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBpbmZvcm1hY2nDs246IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaXNtaXNzQ291bnREb3duKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHNlZ3VuZG9zLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItcHJvZ3Jlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogX3ZtLmRpc21pc3NTZWNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGlkOiBcImJvdG9uU29jaW9zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBhZ2FyKF92bS5tZXRvZG9QYWdvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW52aWFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==