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
/* harmony import */ var _components_Registro_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Registro.vue */ "./assets/js/components/Registro.vue");
/* harmony import */ var _components_Login_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Login.vue */ "./assets/js/components/Login.vue");
/* harmony import */ var _components_Jugador_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Jugador.vue */ "./assets/js/components/Jugador.vue");
/* harmony import */ var _components_Socio_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Socio.vue */ "./assets/js/components/Socio.vue");
/* harmony import */ var _components_Entrenador_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Entrenador.vue */ "./assets/js/components/Entrenador.vue");
/* harmony import */ var _components_Perfil_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Perfil.vue */ "./assets/js/components/Perfil.vue");
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
  path: '/registro',
  name: 'registro',
  component: _components_Registro_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
}, {
  path: '/login',
  name: 'login',
  component: _components_Login_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  path: '/jugadores',
  name: 'jugador',
  component: _components_Jugador_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
}, {
  path: '/socios',
  name: 'socio',
  component: _components_Socio_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
}, {
  path: '/entrenadores',
  name: 'entrenador',
  component: _components_Entrenador_vue__WEBPACK_IMPORTED_MODULE_14__["default"]
}, {
  path: '/miperfil',
  name: 'perfil',
  component: _components_Perfil_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  routes: routes // short for `routes: routes`

});
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: "#app",
  components: {
    App: _components_App_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Home: _components_Home_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Registro: _components_Registro_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    Login: _components_Login_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    Jugador: _components_Jugador_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    Socio: _components_Socio_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    Entrenador: _components_Entrenador_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    Perfil: _components_Perfil_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
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
/* harmony import */ var _Home_vue_vue_type_template_id_1ef7334d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=1ef7334d&scoped=true */ "./assets/js/components/Home.vue?vue&type=template&id=1ef7334d&scoped=true");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./assets/js/components/Home.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_1ef7334d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css */ "./assets/js/components/Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_1ef7334d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_1ef7334d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ef7334d",
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

/***/ "./assets/js/components/Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css":
/*!***********************************************************************************************!*\
  !*** ./assets/js/components/Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1ef7334d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1ef7334d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1ef7334d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1ef7334d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1ef7334d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_1ef7334d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/Home.vue?vue&type=template&id=1ef7334d&scoped=true":
/*!*********************************************************************************!*\
  !*** ./assets/js/components/Home.vue?vue&type=template&id=1ef7334d&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1ef7334d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=1ef7334d&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=template&id=1ef7334d&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1ef7334d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_1ef7334d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./assets/js/components/Login.vue":
/*!****************************************!*\
  !*** ./assets/js/components/Login.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4457c62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4457c62a */ "./assets/js/components/Login.vue?vue&type=template&id=4457c62a");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Login_vue_vue_type_template_id_4457c62a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4457c62a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Login.vue?vue&type=template&id=4457c62a":
/*!**********************************************************************!*\
  !*** ./assets/js/components/Login.vue?vue&type=template&id=4457c62a ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4457c62a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4457c62a */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Login.vue?vue&type=template&id=4457c62a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4457c62a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4457c62a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./assets/js/components/Registro.vue":
/*!*******************************************!*\
  !*** ./assets/js/components/Registro.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registro_vue_vue_type_template_id_432709a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registro.vue?vue&type=template&id=432709a1 */ "./assets/js/components/Registro.vue?vue&type=template&id=432709a1");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Registro_vue_vue_type_template_id_432709a1__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registro_vue_vue_type_template_id_432709a1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets\\js\\components\\Registro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/Registro.vue?vue&type=template&id=432709a1":
/*!*************************************************************************!*\
  !*** ./assets/js/components/Registro.vue?vue&type=template&id=432709a1 ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_432709a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=template&id=432709a1 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Registro.vue?vue&type=template&id=432709a1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_432709a1__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_432709a1__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Entrenador.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Entrenador.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Entrenador',
  data: function data() {
    return {
      file: null
    };
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        value: 'Tarjeta',
        text: 'Tarjeta crédito/débito'
      }, {
        value: 'Transferencia',
        text: 'Transferencia bancaria'
      }]
    };
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      usuario: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/misdatos').then(function (response) {
      return _this.usuario = response.data;
    });
  },
  methods: {
    editar: function editar() {
      var ruta = '/editar-usuario';
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      pago: [{
        value: null,
        text: 'Seleccione un método de pago'
      }, {
        value: 'Paypal',
        text: 'Paypal'
      }, {
        value: 'Tarjeta',
        text: 'Tarjeta crédito/débito'
      }, {
        value: 'Transferencia',
        text: 'Transferencia bancaria'
      }]
    };
  },
  methods: {
    pagar: function pagar(tipoPago) {
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
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Home.vue?vue&type=style&index=0&id=1ef7334d&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
  return _c(
    "div",
    [
      _c(
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
            _vm._v("\n          IF-ormáticos FC\n        ")
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
                  _c("b-nav-item", { attrs: { to: { name: "socio" } } }, [
                    _vm._v("Inscribirse como socio")
                  ]),
                  _vm._v(" "),
                  _c("b-nav-item", { attrs: { to: { name: "jugador" } } }, [
                    _vm._v("Inscribirse como jugador")
                  ]),
                  _vm._v(" "),
                  _c("b-nav-item", { attrs: { to: { name: "entrenador" } } }, [
                    _vm._v("Enviar solicitud de entrenador")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-nav-item",
                    { staticClass: "pr-5", attrs: { to: { name: "perfil" } } },
                    [
                      _c("b-spinner", {
                        attrs: { type: "grow", small: "", variant: "success" }
                      }),
                      _vm._v(" Mi perfil")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-nav-item",
                    { attrs: { href: "/logout" } },
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
      ),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
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
    { staticClass: "mt-5 text-center" },
    [
      _c("h1", [_vm._v("¿Tienes el título de entrenador?")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Envíanoslo y dirige a alguno de nuestros equipos")]),
      _vm._v(" "),
      _c("b-img", { attrs: { src: "/img/entrenador.png", fluid: "" } }),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-3" },
        [
          _c("b-form-file", {
            attrs: {
              state: Boolean(_vm.file),
              placeholder: "Elija un archivo o desplácelo aquí...",
              "drop-placeholder": "Soltar archivo aquí...",
              "browse-text": "Elegir"
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
      ),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-3" },
        [
          _c(
            "b-col",
            [
              _c("b-button", { attrs: { variant: "success" } }, [
                _vm._v("Enviar")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Home.vue?vue&type=template&id=1ef7334d&scoped=true":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Home.vue?vue&type=template&id=1ef7334d&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************/
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
                        [_vm._v("Observa nuestra clasificación en la tabla")]
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
                        [_vm._v("Mira como nos ha ido en los últimos partidos")]
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
                                "\n                                La RFEF aprueba la suspensión de todas las competiciones no profesionales hasta que las autoridades consideren que se pueden reanudar sin riesgo\n                            "
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
                                "\n                                Quedan suspendidos todos los entrenamientos desde mañana miércoles 11 de marzo de 2020 hasta nuevo aviso. La Real Federación de Fútbol de Madrid ha anunciado la suspensión de las competiciones territoriales durante las próximas dos semanas.\n                            "
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
                                "\n                                Nuestros equipos continuan con la buena dinámica de estas últimas 7 jornadas. Tras el tropiezo inicial a la vuelta de navidad, se cuentan los partidos por victoria.\n                            "
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
                                "\n                                Tenemos disponibles algunas vacantes de entrenadores de algunas de nuestras plantillas, si tienes el título mandalo y forma parte del club.\n                            "
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
          _c(
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
                    attrs: { id: "categoria", options: _vm.categorias },
                    model: {
                      value: _vm.categoria,
                      callback: function($$v) {
                        _vm.categoria = $$v
                      },
                      expression: "categoria"
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
                    attrs: { id: "tallaCamiseta", options: _vm.tallas },
                    model: {
                      value: _vm.tallaCamiseta,
                      callback: function($$v) {
                        _vm.tallaCamiseta = $$v
                      },
                      expression: "tallaCamiseta"
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
                    attrs: { id: "tallaPantalon", options: _vm.tallas },
                    model: {
                      value: _vm.tallaPantalon,
                      callback: function($$v) {
                        _vm.tallaPantalon = $$v
                      },
                      expression: "tallaPantalon"
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
                    attrs: { id: "tallaMedias", options: _vm.tallas },
                    model: {
                      value: _vm.tallaMedias,
                      callback: function($$v) {
                        _vm.tallaMedias = $$v
                      },
                      expression: "tallaMedias"
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
                    attrs: { id: "tallaAbrigo", options: _vm.tallas },
                    model: {
                      value: _vm.tallaAbrigo,
                      callback: function($$v) {
                        _vm.tallaAbrigo = $$v
                      },
                      expression: "tallaAbrigo"
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
                    attrs: { id: "metodoPago", options: _vm.pago },
                    model: {
                      value: _vm.metodoPago,
                      callback: function($$v) {
                        _vm.metodoPago = $$v
                      },
                      expression: "metodoPago"
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
                    { attrs: { variant: "primary", id: "enviarJugador" } },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Login.vue?vue&type=template&id=4457c62a":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Login.vue?vue&type=template&id=4457c62a ***!
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
    [
      _c(
        "b-container",
        { staticClass: "mt-5 text-center" },
        [
          _c(
            "b-card",
            {
              attrs: {
                title: "¡Bienvenid@ a IF-ORMATICOS FC!",
                "header-tag": "nav"
              },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function() {
                    return [
                      _c(
                        "b-nav",
                        { attrs: { "card-header": "", tabs: "" } },
                        [
                          _c("b-nav-item", { attrs: { active: "" } }, [
                            _vm._v("Iniciar sesión")
                          ]),
                          _vm._v(" "),
                          _c("b-nav-item", { attrs: { href: "registro" } }, [
                            _vm._v("Registrarme")
                          ])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("b-alert", { attrs: { id: "alertas", variant: "danger" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Email:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          name: "email",
                          id: "emailLogin",
                          onkeypress: "validar(event)",
                          placeholder: "Introduce aquí tu email",
                          required: "",
                          autofocus: ""
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
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Contraseña:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password",
                          onkeypress: "validar(event)",
                          placeholder: "Introduce aquí tu contraseña",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            type: "submit",
                            id: "acceder",
                            variant: "outline-success"
                          }
                        },
                        [_vm._v("Acceder")]
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
    { staticClass: "mt-5 text-center" },
    [
      _c(
        "b-card",
        {
          attrs: {
            header: "Mi perfil",
            "header-text-variant": "white",
            "header-tag": "header",
            "header-bg-variant": "info",
            "max-width": "10"
          }
        },
        [
          _c("h3", [
            _vm._v(
              _vm._s(_vm.usuario.nombre) + " " + _vm._s(_vm.usuario.apellidos)
            )
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mb-2" },
            [
              _c("b-col", [
                _c("strong", { staticClass: "text-dark" }, [_vm._v("Email:")])
              ]),
              _vm._v(" "),
              _c("b-col", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.usuario.email) +
                    "\n            "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mb-2" },
            [
              _c("b-col", [
                _c("strong", { staticClass: "text-dark" }, [_vm._v("Dni:")])
              ]),
              _vm._v(" "),
              _c("b-col", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.usuario.dni) +
                    "\n            "
                )
              ])
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
              _c("b-col", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.usuario.fechaNacimiento.date.substring(0, 10)) +
                    "\n            "
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _c("span", { staticClass: "text-info" }, [_vm._v("Dirección")]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "mb-2" },
            [
              _c("b-col", [
                _c("strong", { staticClass: "text-dark" }, [_vm._v("Calle:")])
              ]),
              _vm._v(" "),
              _c("b-col", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.usuario.calle) +
                    "\n            "
                )
              ])
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
              _c("b-col", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.usuario.localidad) +
                    "\n            "
                )
              ])
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
              _c("b-col", [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.usuario.provincia) +
                    "\n            "
                )
              ])
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
              _c(
                "b-col",
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.usuario.cp) +
                      "\n                "
                  ),
                  _c("b-form-input", {
                    attrs: { placeholder: "Enter your name" },
                    model: {
                      value: _vm.usuario.cp,
                      callback: function($$v) {
                        _vm.$set(_vm.usuario, "cp", $$v)
                      },
                      expression: "usuario.cp"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-button", { on: { click: _vm.editar } }, [
                    _vm._v("Editar")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/Registro.vue?vue&type=template&id=432709a1":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/Registro.vue?vue&type=template&id=432709a1 ***!
  \*******************************************************************************************************************************************************************************************************/
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
        { staticClass: "mt-5 mb-5 text-center" },
        [
          _c(
            "b-card",
            {
              attrs: {
                title: "¡Rellena este formulario!",
                "header-tag": "nav"
              },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function() {
                    return [
                      _c(
                        "b-nav",
                        { attrs: { "card-header": "", tabs: "" } },
                        [
                          _c("b-nav-item", { attrs: { href: "login" } }, [
                            _vm._v("Iniciar sesión")
                          ]),
                          _vm._v(" "),
                          _c("b-nav-item", { attrs: { active: "" } }, [
                            _vm._v("Registrarme")
                          ])
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Nombre:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "text",
                          id: "nombre",
                          placeholder: "Introduce aquí tu nombre",
                          required: "",
                          autofocus: ""
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
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Apellidos:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "text",
                          id: "apellidos",
                          placeholder: "Introduce aquí tus apellidos",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Email:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "email",
                          id: "emailRegistro",
                          placeholder: "Introduce aquí tu email",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Dni:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "text",
                          id: "dni",
                          placeholder: "Introduce aquí tu dni",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c(
                    "b-col",
                    [_c("b-card-text", [_vm._v("Fecha de nacimiento:")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "date",
                          id: "fechaNacimiento",
                          placeholder: "Introduce aquí tu fecha de nacimiento"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _c("span", { staticClass: "text-success" }, [
                _vm._v("Dirección")
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Calle:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "text",
                          id: "calle",
                          placeholder: "Introduce aquí el nombre de tu calle",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Localidad:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "text",
                          id: "localidad",
                          placeholder: "Introduce aquí la localidad",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Provincia:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "text",
                          id: "provincia",
                          placeholder: "Introduce aquí la provincia",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("CP:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "text",
                          id: "cp",
                          placeholder: "Introduce aquí el código póstal",
                          required: ""
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "mt-4" },
                [
                  _c("b-col", [_c("b-card-text", [_vm._v("Contraseña:")])], 1),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "input-formulario",
                        attrs: {
                          type: "password",
                          id: "pass",
                          placeholder: "Introduce una contraseña",
                          required: ""
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
                { staticClass: "mt-4" },
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "input-formulario",
                          attrs: {
                            variant: "outline-success",
                            type: "submit",
                            id: "registrarme"
                          }
                        },
                        [_vm._v("Registrarme")]
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
    { staticClass: "mt-5 text-center" },
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
                  _c(
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
                            attrs: { options: _vm.pago, id: "pagoSocios" },
                            model: {
                              value: _vm.metodoPago,
                              callback: function($$v) {
                                _vm.metodoPago = $$v
                              },
                              expression: "metodoPago"
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
                              attrs: { variant: "primary", id: "enviarSocios" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT82NThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlP2RmMjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW50cmVuYWRvci52dWU/NjE4ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZT9kMzJiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlPzVmMDgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/MjFlMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hYmNiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlPzYzMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xvZ2luLnZ1ZT9hMjg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZT83ZmY2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/NjcwZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9SZWdpc3Ryby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVnaXN0cm8udnVlP2QzMGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9lYzQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9hOTU3Iiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/OWM4NiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlPzhmODkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW50cmVuYWRvci52dWU/NjcwYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZT85NjE2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlP2FjYjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTG9naW4udnVlPzhkYmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZT80ODdkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZ2lzdHJvLnZ1ZT80OWI3Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT8xNzdkIl0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYVVzZXJTZWNyZXQiLCJmYVNpZ25PdXRBbHQiLCJWdWUiLCJjb21wb25lbnQiLCJGb250QXdlc29tZUljb24iLCJ1c2UiLCJCb290c3RyYXBWdWUiLCJWdWVSb3V0ZXIiLCJyb3V0ZXMiLCJwYXRoIiwibmFtZSIsIkhvbWUiLCJSZWdpc3RybyIsIkxvZ2luIiwiSnVnYWRvciIsIlNvY2lvIiwiRW50cmVuYWRvciIsIlBlcmZpbCIsInJvdXRlciIsImVsIiwiY29tcG9uZW50cyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLHlFQUFPLENBQUNDLEdBQVIsQ0FBWUMsOEVBQVo7QUFDQUYseUVBQU8sQ0FBQ0MsR0FBUixDQUFZRSw4RUFBWjtBQUVBQywyQ0FBRyxDQUFDQyxTQUFKLENBQWMsbUJBQWQsRUFBbUNDLDRFQUFuQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUYsMkNBQUcsQ0FBQ0csR0FBSixDQUFRQyxxREFBUjtBQUNBSiwyQ0FBRyxDQUFDRyxHQUFKLENBQVFFLGtEQUFSO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFBRUMsTUFBSSxFQUFFLEdBQVI7QUFBYUMsTUFBSSxFQUFFLE1BQW5CO0FBQTJCUCxXQUFTLEVBQUVRLDREQUFJQTtBQUExQyxDQURXLEVBRVg7QUFBRUYsTUFBSSxFQUFFLFdBQVI7QUFBcUJDLE1BQUksRUFBRSxVQUEzQjtBQUF1Q1AsV0FBUyxFQUFFUyxpRUFBUUE7QUFBMUQsQ0FGVyxFQUdYO0FBQUVILE1BQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsT0FBeEI7QUFBaUNQLFdBQVMsRUFBRVUsOERBQUtBO0FBQWpELENBSFcsRUFJWDtBQUFFSixNQUFJLEVBQUUsWUFBUjtBQUFzQkMsTUFBSSxFQUFFLFNBQTVCO0FBQXVDUCxXQUFTLEVBQUVXLGdFQUFPQTtBQUF6RCxDQUpXLEVBS1g7QUFBRUwsTUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRSxPQUF6QjtBQUFrQ1AsV0FBUyxFQUFFWSw4REFBS0E7QUFBbEQsQ0FMVyxFQU1YO0FBQUVOLE1BQUksRUFBRSxlQUFSO0FBQXlCQyxNQUFJLEVBQUUsWUFBL0I7QUFBNkNQLFdBQVMsRUFBRWEsbUVBQVVBO0FBQWxFLENBTlcsRUFPWDtBQUFFUCxNQUFJLEVBQUUsV0FBUjtBQUFxQkMsTUFBSSxFQUFFLFFBQTNCO0FBQXFDUCxXQUFTLEVBQUVjLCtEQUFNQTtBQUF0RCxDQVBXLENBQWY7QUFVQSxJQUFNQyxNQUFNLEdBQUcsSUFBSVgsa0RBQUosQ0FBYztBQUN6QkMsUUFBTSxFQUFOQSxNQUR5QixDQUNsQjs7QUFEa0IsQ0FBZCxDQUFmO0FBSUEsSUFBSU4sMkNBQUosQ0FBUTtBQUNKaUIsSUFBRSxFQUFFLE1BREE7QUFFSkMsWUFBVSxFQUFFO0FBQUNDLE9BQUcsRUFBSEEsMkRBQUQ7QUFBTVYsUUFBSSxFQUFKQSw0REFBTjtBQUFZQyxZQUFRLEVBQVJBLGlFQUFaO0FBQXNCQyxTQUFLLEVBQUxBLDhEQUF0QjtBQUE2QkMsV0FBTyxFQUFQQSxnRUFBN0I7QUFBc0NDLFNBQUssRUFBTEEsOERBQXRDO0FBQTZDQyxjQUFVLEVBQVZBLG1FQUE3QztBQUF5REMsVUFBTSxFQUFOQSwrREFBTUE7QUFBL0QsR0FGUjtBQUdKQyxRQUFNLEVBQU5BO0FBSEksQ0FBUixFOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQWlGO0FBQ2pGOzs7QUFHQTtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUI7QUFDQSxFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDckNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF5TCxDQUFnQixxUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThGO0FBQ3ZDO0FBQ0w7QUFDcUM7OztBQUd2RjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSLEVBQUUsMEZBQU07QUFDUixFQUFFLG1HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFtTCxDQUFnQiwrT0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2TTtBQUFBO0FBQUE7QUFBQTtBQUFxVixDQUFnQiw4WEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6VztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBc0wsQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQW1GO0FBQ25GOzs7QUFHQTtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUI7QUFDQSxFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDckNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBc0Y7QUFDdEY7OztBQUdBO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQjtBQUNBLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNyQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9MLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0QkE7QUFDQSxvQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tKQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTtBQU9BO0FBQ0EsZ0JBREEsd0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsY0FKQSxzQkFJQSxLQUpBLEVBSUE7QUFDQTtBQUNBO0FBTkE7QUFQQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBLGlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EscUJBREE7QUFFQSx5QkFGQTtBQUdBLHlCQUhBO0FBSUEsdUJBSkE7QUFLQSx1QkFMQTtBQU1BLHNCQU5BO0FBT0EsbUJBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQSxFQUtBO0FBQUE7QUFBQTtBQUFBLE9BTEEsRUFNQTtBQUFBO0FBQUE7QUFBQSxPQU5BLEVBT0E7QUFBQTtBQUFBO0FBQUEsT0FQQSxFQVFBO0FBQUE7QUFBQTtBQUFBLE9BUkEsQ0FQQTtBQWlCQSxlQUNBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQSxPQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUEsT0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBLE9BSkEsRUFLQTtBQUFBO0FBQUE7QUFBQSxPQUxBLENBakJBO0FBd0JBLGFBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQTtBQXhCQTtBQStCQTtBQWxDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBLEdBREE7QUFJQSxTQUpBLHFCQUlBO0FBQUE7O0FBQ0EsaURBQ0EsR0FEQSxDQUNBLFdBREEsRUFFQSxJQUZBLENBRUE7QUFBQSxhQUNBLDZCQURBO0FBQUEsS0FGQTtBQUtBLEdBVkE7QUFXQTtBQUNBLFVBREEsb0JBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxpQkFGQTtBQUdBO0FBQUE7QUFBQSxTQUhBO0FBSUEsbUJBSkE7QUFLQSx3QkFMQTtBQU1BO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFiQTtBQVhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsYUFDQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsT0FGQSxFQUdBO0FBQUE7QUFBQTtBQUFBLE9BSEEsRUFJQTtBQUFBO0FBQUE7QUFBQSxPQUpBO0FBRkE7QUFTQSxHQVpBO0FBYUE7QUFDQSxTQURBLGlCQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFBQTtBQUFBLFNBSEE7QUFJQSxtQkFKQTtBQUtBLHdCQUxBO0FBTUE7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQWJBO0FBYkEsRzs7Ozs7Ozs7Ozs7QUNoQ0EsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDLFNBQVMseUJBQXlCLEVBQUU7QUFDckU7QUFDQSxnQ0FBZ0MsU0FBUyxNQUFNLGVBQWUsRUFBRSxFQUFFO0FBQ2xFO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUyxNQUFNLGVBQWUsRUFBRSxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLE1BQU0sZ0JBQWdCLEVBQUUsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUyxNQUFNLGtCQUFrQixFQUFFLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsTUFBTSxxQkFBcUIsRUFBRSxFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCLE1BQU0saUJBQWlCLEVBQUUsRUFBRTtBQUM5RTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLGtCQUFrQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxnQ0FBZ0MsbUJBQW1CO0FBQ25ELGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1RkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrQ0FBa0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLHdDQUF3QyxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQXNCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUyxxQkFBcUIsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHNCQUFzQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsZUFBZSxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0NBQW9DLFlBQVksRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQ0FBb0MsWUFBWSxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9DQUFvQyxZQUFZLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTLGVBQWUsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQ0FBb0MsWUFBWSxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9DQUFvQyxZQUFZLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvQ0FBb0MsWUFBWSxFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLDZCQUE2QixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLDZCQUE2QixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxVQUFVLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyw2QkFBNkIsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyxVQUFVLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsVUFBVSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsNkJBQTZCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsVUFBVSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hkQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtDQUFrQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0JBQXNCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0EsMkJBQTJCLFNBQVMsbUJBQW1CLEVBQUU7QUFDekQsNkJBQTZCLFNBQVMsb0JBQW9CLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsdUJBQXVCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsdUJBQXVCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLFNBQVMscUJBQXFCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLFNBQVMscUJBQXFCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsb0JBQW9CLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQ0FBc0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUywwQ0FBMEMsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGtDQUFrQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLDhCQUE4QixFQUFFO0FBQ2xFO0FBQ0EsNENBQTRDLFNBQVMsYUFBYSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxTQUFTLG1CQUFtQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLG1DQUFtQyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0lBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0NBQWtDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQSw4QkFBOEIsMkJBQTJCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0EsOEJBQThCLDJCQUEyQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBLDhCQUE4QiwyQkFBMkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxrQ0FBa0MsTUFBTSxvQkFBb0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVDQUF1QztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixTQUFTLDhCQUE4QixFQUFFO0FBQ2xFO0FBQ0EsNENBQTRDLFNBQVMsZ0JBQWdCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFNBQVMsYUFBYSxFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4QkFBOEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0VkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxrQ0FBa0M7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxTQUFTLHlCQUF5QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBLHFDQUFxQyxTQUFTLG9CQUFvQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msc0NBQXNDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx5Q0FBeUM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuY3NzJztcclxuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXHJcbmltcG9ydCBCb290c3RyYXBWdWUgZnJvbSAnYm9vdHN0cmFwLXZ1ZSdcclxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcclxuaW1wb3J0IHsgZmFVc2VyU2VjcmV0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBmYVNpZ25PdXRBbHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWUnXHJcblxyXG5saWJyYXJ5LmFkZChmYVVzZXJTZWNyZXQpXHJcbmxpYnJhcnkuYWRkKGZhU2lnbk91dEFsdClcclxuXHJcblZ1ZS5jb21wb25lbnQoJ2ZvbnQtYXdlc29tZS1pY29uJywgRm9udEF3ZXNvbWVJY29uKVxyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLnZ1ZSdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUudnVlJ1xyXG5pbXBvcnQgUmVnaXN0cm8gZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdHJvLnZ1ZSdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi52dWUnXHJcbmltcG9ydCBKdWdhZG9yIGZyb20gJy4vY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSdcclxuaW1wb3J0IFNvY2lvIGZyb20gJy4vY29tcG9uZW50cy9Tb2Npby52dWUnXHJcbmltcG9ydCBFbnRyZW5hZG9yIGZyb20gJy4vY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSdcclxuaW1wb3J0IFBlcmZpbCBmcm9tICcuL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZSdcclxuXHJcblZ1ZS51c2UoQm9vdHN0cmFwVnVlKVxyXG5WdWUudXNlKFZ1ZVJvdXRlcilcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJy8nLCBuYW1lOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZSB9LFxyXG4gICAgeyBwYXRoOiAnL3JlZ2lzdHJvJywgbmFtZTogJ3JlZ2lzdHJvJywgY29tcG9uZW50OiBSZWdpc3RybyB9LFxyXG4gICAgeyBwYXRoOiAnL2xvZ2luJywgbmFtZTogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbiB9LFxyXG4gICAgeyBwYXRoOiAnL2p1Z2Fkb3JlcycsIG5hbWU6ICdqdWdhZG9yJywgY29tcG9uZW50OiBKdWdhZG9yIH0sXHJcbiAgICB7IHBhdGg6ICcvc29jaW9zJywgbmFtZTogJ3NvY2lvJywgY29tcG9uZW50OiBTb2NpbyB9LFxyXG4gICAgeyBwYXRoOiAnL2VudHJlbmFkb3JlcycsIG5hbWU6ICdlbnRyZW5hZG9yJywgY29tcG9uZW50OiBFbnRyZW5hZG9yIH0sXHJcbiAgICB7IHBhdGg6ICcvbWlwZXJmaWwnLCBuYW1lOiAncGVyZmlsJywgY29tcG9uZW50OiBQZXJmaWwgfVxyXG5dXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICAgIHJvdXRlcyAvLyBzaG9ydCBmb3IgYHJvdXRlczogcm91dGVzYFxyXG59KTtcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgZWw6IFwiI2FwcFwiLFxyXG4gICAgY29tcG9uZW50czoge0FwcCwgSG9tZSwgUmVnaXN0cm8sIExvZ2luLCBKdWdhZG9yLCBTb2NpbywgRW50cmVuYWRvciwgUGVyZmlsfSxcclxuICAgIHJvdXRlclxyXG59KSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xY2RlNWUyM1wiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNkZTVlMjNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxY2RlNWUyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMGUyYjg0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwZTJiODRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZDBlMmI4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRW50cmVuYWRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDBlMmI4NFwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxZWY3MzM0ZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlZjczMzRkJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWVmNzMzNGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEhvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFlZjczMzRkJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWVmNzMzNGQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2JhYzI0NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjdiYWMyNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjdiYWMyNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YmFjMjQ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjdiYWMyNDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEp1Z2Fkb3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSnVnYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdiYWMyNDRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0NTdjNjJhXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NDU3YzYyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NDU3YzYyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0NTdjNjJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDQ1N2M2MmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXExvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDQ1N2M2MmFcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NDM4Mjc4Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk0MzgyNzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk0MzgyNzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk0MzgyNzhjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTQzODI3OGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFBlcmZpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyZmlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NDM4Mjc4Y1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpc3Ryby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDMyNzA5YTFcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQzMjcwOWExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQzMjcwOWExJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZWdpc3Ryby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDMyNzA5YTFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MzI3MDlhMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUmVnaXN0cm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lzdHJvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MzI3MDlhMVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgyODUwNmZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTgyODUwNmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTgyODUwNmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4Mjg1MDZmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxTb2Npby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDE+wr9UaWVuZXMgZWwgdMOtdHVsbyBkZSBlbnRyZW5hZG9yPzwvaDE+XHJcbiAgICAgICAgPGgyPkVudsOtYW5vc2xvIHkgZGlyaWdlIGEgYWxndW5vIGRlIG51ZXN0cm9zIGVxdWlwb3M8L2gyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxiLWltZyBzcmM9XCIvaW1nL2VudHJlbmFkb3IucG5nXCIgZmx1aWQ+PC9iLWltZz4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gU2VsZWNjaW9uYXIgYXJjaGl2byAtLT5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tZmlsZVxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgOnN0YXRlPVwiQm9vbGVhbihmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVsaWphIHVuIGFyY2hpdm8gbyBkZXNwbMOhY2VsbyBhcXXDrS4uLlwiXHJcbiAgICAgICAgICAgICAgICBkcm9wLXBsYWNlaG9sZGVyPVwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgYnJvd3NlLXRleHQ9XCJFbGVnaXJcIlxyXG4gICAgICAgICAgICA+PC9iLWZvcm0tZmlsZT5cclxuICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICA8IS0tIEJvdMOzbiBkZSBlbnZpYXItLT5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiPkVudmlhcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgPC9iLXJvdz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0VudHJlbmFkb3InLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaWxlOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8Yi1jb250YWluZXIgY2xhc3M9XCJtdC0yXCI+XHJcbiAgICAgICAgPCEtLSBDYWJlY2VyYSBzbGlkZXMgLS0+XHJcbiAgICAgICAgPGItY2Fyb3VzZWxcclxuICAgICAgICAgICAgaWQ9XCJjYXJvdXNlbC1mYWRlXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJ0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzAwMFwiXHJcbiAgICAgICAgICAgIGZhZGVcclxuICAgICAgICAgICAgaW5kaWNhdG9yc1xyXG4gICAgICAgICAgICBpbWctd2lkdGg9XCIxMDI0XCJcclxuICAgICAgICAgICAgaW1nLWhlaWdodD1cIjQ4MFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgIGNhcHRpb249XCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIlxyXG4gICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvYmFsb24tZGUtZnV0Ym9sLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgIGNhcHRpb249XCJDb21wYXJ0ZSBudWVzdHJhIHBhc2nDs25cIlxyXG4gICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvY2FtcG8uanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbj1cIkFxdcOtIGVuY29udHJhcsOhcyBsYXMgbm90aWNpYXMgZGVsIGNsdWJcIlxyXG4gICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvZXNjdWVsYS5qcGdcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XHJcbiAgICAgICAgICAgIDxiLWNhcm91c2VsLXNsaWRlXHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uPVwiUmVzdWx0YWRvc1wiXHJcbiAgICAgICAgICAgICAgICBpbWctc3JjPVwiL2ltZy9mdXRib2wuanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgIDwvYi1jYXJvdXNlbD5cclxuXHJcbiAgICAgICAgPCEtLSBjYXJkcyBjb24gbm90aWNpYXMgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICA8IS0tIFByaW1lcmEgbMOtbmVhIGRlIGNhcmRzIC0tPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZC1ncm91cCBkZWNrPVwiZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkhpc3RvcmlhIGRlbCBjbHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkNvbm9jZSBudWVzdHJhIGhpc3RvcmlhPC9hPjwvYi1jYXJkLXRleHQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJJbnN0YWxhY2lvbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5Db250ZW1wbGEgbnVlc3RyYXMgaW5zdGFsYWNpb25lczwvYT48L2ItY2FyZC10ZXh0PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUGxhbnRpbGxhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+Q29ub2NlIG51ZXN0cmFzIHBsYW50aWxsYXM8L2E+PC9iLWNhcmQtdGV4dD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2ItY2FyZC1ncm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFNlZ3VuZGEgbMOtbmVhIGRlIGNhcmRzIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZC1ncm91cCBkZWNrPVwiZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkNsYXNpZmljYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5PYnNlcnZhIG51ZXN0cmEgY2xhc2lmaWNhY2nDs24gZW4gbGEgdGFibGE8L2E+PC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUHLDs3hpbW9zIHBhcnRpZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5BcXXDrSBwdWVkZXMgdmVyIGNvbnRyYSBxdWllbiBqdWdhbW9zIGVsIHByw7N4aW1vIGVuY3VlbnRybzwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlJlc3VsdGFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvczwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQtZ3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBub3RpY2lhIFJGRUYtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvbG9nb19yZmVmLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlN1c3BlbnNpw7NuIGRlIGxhcyBjb21wZXRpY2lvbmVzXCIgc3ViLXRpdGxlPVwiMjcgbWFyem8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIFJGRUYgYXBydWViYSBsYSBzdXNwZW5zacOzbiBkZSB0b2RhcyBsYXMgY29tcGV0aWNpb25lcyBubyBwcm9mZXNpb25hbGVzIGhhc3RhIHF1ZSBsYXMgYXV0b3JpZGFkZXMgY29uc2lkZXJlbiBxdWUgc2UgcHVlZGVuIHJlYW51ZGFyIHNpbiByaWVzZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBjb211bmljYWRvIG9maWNpYWwgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL0NvbXVuaWNhZG9fb2ZpY2lhbC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImNvbXVuaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiIHN1Yi10aXRsZT1cIjEwIG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWVkYW4gc3VzcGVuZGlkb3MgdG9kb3MgbG9zIGVudHJlbmFtaWVudG9zIGRlc2RlIG1hw7FhbmEgbWnDqXJjb2xlcyAxMSBkZSBtYXJ6byBkZSAyMDIwIGhhc3RhIG51ZXZvIGF2aXNvLiBMYSBSZWFsIEZlZGVyYWNpw7NuIGRlIEbDunRib2wgZGUgTWFkcmlkIGhhIGFudW5jaWFkbyBsYSBzdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lcyB0ZXJyaXRvcmlhbGVzIGR1cmFudGUgbGFzIHByw7N4aW1hcyBkb3Mgc2VtYW5hcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSByZXN1bHRhZG9zIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9yZXN1bHRhZG9zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicmVzdWx0YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlJlc3VsdGFkb3MgZGVsIGZpbiBkZSBzZW1hbmFcIiBzdWItdGl0bGU9XCI5IG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWVzdHJvcyBlcXVpcG9zIGNvbnRpbnVhbiBjb24gbGEgYnVlbmEgZGluw6FtaWNhIGRlIGVzdGFzIMO6bHRpbWFzIDcgam9ybmFkYXMuIFRyYXMgZWwgdHJvcGllem8gaW5pY2lhbCBhIGxhIHZ1ZWx0YSBkZSBuYXZpZGFkLCBzZSBjdWVudGFuIGxvcyBwYXJ0aWRvcyBwb3IgdmljdG9yaWEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gUHVlc3RvIGRlIGVudHJlbmFkb3IgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3B1ZXN0b19lbnRyZW5hZG9yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHVlc3RvX2VudHJlbmFkb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJQdWVzdG9zIGRlIGVudHJlbmFkb3JlcyB2YWNhbnRlc1wiIHN1Yi10aXRsZT1cIjIgbWFyem8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmVtb3MgZGlzcG9uaWJsZXMgYWxndW5hcyB2YWNhbnRlcyBkZSBlbnRyZW5hZG9yZXMgZGUgYWxndW5hcyBkZSBudWVzdHJhcyBwbGFudGlsbGFzLCBzaSB0aWVuZXMgZWwgdMOtdHVsbyBtYW5kYWxvIHkgZm9ybWEgcGFydGUgZGVsIGNsdWIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNsaWRlOiAwLFxyXG4gICAgICAgIHNsaWRpbmc6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgb25TbGlkZVN0YXJ0KHNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkaW5nID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBvblNsaWRlRW5kKHNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uc2VwYXJhY2lvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiAgICBcclxuXHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMT5SZWxsZW5hIGVzdGUgZm9ybXVsYXJpbzwvaDE+XHJcbiAgICAgICAgPGgyPsKheSDDum5ldGUgYSBudWVzdHJvIGVxdWlwbyE8L2gyPiAgXHJcblxyXG4gICAgICAgIDxiLWNvbnRhaW5lciBjbGFzcz1cIm10LTVcIj5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMTogY2F0ZWdvcsOtYSAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2wgbm8tZ3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2F0ZWdvcmlhc1wiPkNhdGVnb3LDrWE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImNhdGVnb3JpYVwiIGlkPVwiY2F0ZWdvcmlhXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMjogdGFsbGEgZGUgY2FtaXNldGEgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYUNhbWlzZXRhXCI+VGFsbGEgZGUgY2FtaXNldGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhQ2FtaXNldGFcIiBpZD1cInRhbGxhQ2FtaXNldGFcIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDM6IHRhbGxhIGRlIHBhbnRhbMOzbiAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhUGFudGFsb25cIj5UYWxsYSBkZSBwYW50YWzDs246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhUGFudGFsb25cIiBpZD1cInRhbGxhUGFudGFsb25cIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDQ6IHRhbGxhIGRlIG1lZGlhcyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhTWVkaWFzXCI+VGFsbGEgZGUgbWVkaWFzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYU1lZGlhc1wiIGlkPVwidGFsbGFNZWRpYXNcIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDU6IHRhbGxhIGRlIGFicmlnbyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhQWJyaWdvXCI+VGFsbGEgZGUgYWJyaWdvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYUFicmlnb1wiIGlkPVwidGFsbGFBYnJpZ29cIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDY6IG3DqXRvZG8gZGUgcGFnbyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1ldG9kb1BhZ29cIj5Nw6l0b2RvIGRlIHBhZ286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cIm1ldG9kb1BhZ29cIiBpZD1cIm1ldG9kb1BhZ29cIiA6b3B0aW9ucz1cInBhZ29cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA3OiBlbnZpYXIgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGlkPVwiZW52aWFySnVnYWRvclwiPkVudmlhcjwvYi1idXR0b24+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG4gICAgICAgIDwvYi1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdKdWdhZG9yJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWE6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhQ2FtaXNldGE6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhUGFudGFsb246IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhTWVkaWFzOiBudWxsLFxyXG4gICAgICAgICAgICB0YWxsYUFicmlnbzogbnVsbCxcclxuICAgICAgICAgICAgbWV0b2RvUGFnbzogbnVsbCxcclxuICAgICAgICAgICAgY2F0ZWdvcmlhczpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIGNhdGVnb3LDrWEnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0JlbmphbWluJywgdGV4dDogJ0JlbmphbcOtbid9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQWxldmluJywgdGV4dDogJ0FsZXbDrW4nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0luZmFudGlsJywgdGV4dDogJ0luZmFudGlsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdDYWRldGUnLCB0ZXh0OiAnQ2FkZXRlJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdKdXZlbmlsJywgdGV4dDogJ0p1dmVuaWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0FmaWNpb25hZG8nLCB0ZXh0OiAnQWZpY2lvbmFkbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVmV0ZXJhbm8nLCB0ZXh0OiAnVmV0ZXJhbm8nfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0YWxsYXM6W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiBudWxsLCB0ZXh0OiAnU2VsZWNjaW9uZSB1bmEgdGFsbGEnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1MnLCB0ZXh0OiAnUyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnTScsIHRleHQ6ICdNJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdMJywgdGV4dDogJ0wnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1hMJywgdGV4dDogJ1hMJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcGFnbzpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIG3DqXRvZG8gZGUgcGFnbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUGF5cGFsJywgdGV4dDogJ1BheXBhbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVGFyamV0YScsIHRleHQ6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1RyYW5zZmVyZW5jaWEnLCB0ZXh0OiAnVHJhbnNmZXJlbmNpYSBiYW5jYXJpYSd9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICBoZWFkZXI9XCJNaSBwZXJmaWxcIlxyXG4gICAgICAgICAgICBoZWFkZXItdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICBoZWFkZXItdGFnPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgaGVhZGVyLWJnLXZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICAgICAgbWF4LXdpZHRoPVwiMTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMz57eyB1c3VhcmlvLm5vbWJyZSB9fSB7eyB1c3VhcmlvLmFwZWxsaWRvcyB9fTwvaDM+XHJcbiAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+RW1haWw6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uZW1haWwgfX1cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkRuaTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5kbmkgfX1cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkZlY2hhIGRlIG5hY2ltaWVudG86PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uZmVjaGFOYWNpbWllbnRvLmRhdGUuc3Vic3RyaW5nKDAsMTApfX1cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aHI+PHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm9cIj5EaXJlY2Npw7NuPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5DYWxsZTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5jYWxsZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+TG9jYWxpZGFkOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmxvY2FsaWRhZCB9fVxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+UHJvdmluY2lhOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLnByb3ZpbmNpYSB9fVxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Q8OzZGlnbyBwb3N0YWw6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uY3AgfX1cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmNwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gQGNsaWNrPVwiZWRpdGFyXCI+RWRpdGFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgICAgICAgIHVzdWFyaW86IFtdXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KCcvbWlzZGF0b3MnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpbyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGVkaXRhcigpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL2VkaXRhci11c3VhcmlvJ1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7cGFnbzogdGlwb1BhZ299KSxcclxuICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDE+Q29udGlnbyBzZWd1aW1vcyBjcmVjaWVuZG88L2gxPlxyXG4gICAgICAgIDxoMj7CoUhhenRlIHNvY2lvITwvaDI+XHJcblxyXG4gICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTVcIj5cclxuICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZyBzcmM9XCIvaW1nL1NvY2lvcy5qcGdcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1ldG9kb1BhZ29cIj5Nw6l0b2RvIGRlIHBhZ286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cIm1ldG9kb1BhZ29cIiA6b3B0aW9ucz1cInBhZ29cIiBpZD1cInBhZ29Tb2Npb3NcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGJvdG9uIGVudmlhciAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGlkPVwiZW52aWFyU29jaW9zXCIgQGNsaWNrPVwicGFnYXIobWV0b2RvUGFnbylcIj5FbnZpYXI8L2ItYnV0dG9uPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9iLXJvdz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1NvY2lvJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRvZG9QYWdvOiBudWxsLFxyXG4gICAgICAgICAgICAgcGFnbzpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIG3DqXRvZG8gZGUgcGFnbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUGF5cGFsJywgdGV4dDogJ1BheXBhbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVGFyamV0YScsIHRleHQ6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1RyYW5zZmVyZW5jaWEnLCB0ZXh0OiAnVHJhbnNmZXJlbmNpYSBiYW5jYXJpYSd9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgcGFnYXIodGlwb1BhZ28pe1xyXG4gICAgICAgICAgICB2YXIgcnV0YSA9ICcvcGFnby1zb2Npb3MnXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHJ1dGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAoe3BhZ286IHRpcG9QYWdvfSksXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItbmF2YmFyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgc3RpY2t5OiBcIlwiLFxuICAgICAgICAgICAgdG9nZ2xlYWJsZTogXCJtZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJkYXJrXCIsXG4gICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1uYXZiYXItdG9nZ2xlXCIsIHsgYXR0cnM6IHsgdGFyZ2V0OiBcIm5hdi1jb2xsYXBzZVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItbmF2YmFyLWJyYW5kXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJob21lXCIgfSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWcvYmFsb24ucG5nXCIsIHdpZHRoOiBcIjMwXCIsIGFsdDogXCJiYWxvblwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIElGLW9ybcOhdGljb3MgRkNcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sbGFwc2VcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2LWNvbGxhcHNlXCIsIFwiaXMtbmF2XCI6IFwiXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImhvbWVcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb3RpY2lhcyBkZWwgY2x1YlwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJzb2Npb1wiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluc2NyaWJpcnNlIGNvbW8gc29jaW9cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwianVnYWRvclwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluc2NyaWJpcnNlIGNvbW8ganVnYWRvclwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJlbnRyZW5hZG9yXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW52aWFyIHNvbGljaXR1ZCBkZSBlbnRyZW5hZG9yXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHItNVwiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcInBlcmZpbFwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJncm93XCIsIHNtYWxsOiBcIlwiLCB2YXJpYW50OiBcInN1Y2Nlc3NcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE1pIHBlcmZpbFwiKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIi9sb2dvdXRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZvbnQtYXdlc29tZS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBcIiNDRDVDNUNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJzaWduLW91dC1hbHRcIiwgc2l6ZTogXCJsZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicm91dGVyLXZpZXdcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgdGV4dC1jZW50ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIsK/VGllbmVzIGVsIHTDrXR1bG8gZGUgZW50cmVuYWRvcj9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJFbnbDrWFub3NsbyB5IGRpcmlnZSBhIGFsZ3VubyBkZSBudWVzdHJvcyBlcXVpcG9zXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiLWltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1nL2VudHJlbmFkb3IucG5nXCIsIGZsdWlkOiBcIlwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1mb3JtLWZpbGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3RhdGU6IEJvb2xlYW4oX3ZtLmZpbGUpLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJFbGlqYSB1biBhcmNoaXZvIG8gZGVzcGzDoWNlbG8gYXF1w60uLi5cIixcbiAgICAgICAgICAgICAgXCJkcm9wLXBsYWNlaG9sZGVyXCI6IFwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIixcbiAgICAgICAgICAgICAgXCJicm93c2UtdGV4dFwiOiBcIkVsZWdpclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWxlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZpbGUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWJ1dHRvblwiLCB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwic3VjY2Vzc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkVudmlhclwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJiLWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYi1jYXJvdXNlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LXNoYWRvd1wiOiBcIjBweCAwcHggMnB4ICMwMDBcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJjYXJvdXNlbC1mYWRlXCIsXG4gICAgICAgICAgICBmYWRlOiBcIlwiLFxuICAgICAgICAgICAgaW5kaWNhdG9yczogXCJcIixcbiAgICAgICAgICAgIFwiaW1nLXdpZHRoXCI6IFwiMTAyNFwiLFxuICAgICAgICAgICAgXCJpbWctaGVpZ2h0XCI6IFwiNDgwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY2FwdGlvbjogXCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIixcbiAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiL2ltZy9iYWxvbi1kZS1mdXRib2wuanBnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjYXB0aW9uOiBcIkNvbXBhcnRlIG51ZXN0cmEgcGFzacOzblwiLFxuICAgICAgICAgICAgICBcImltZy1zcmNcIjogXCIvaW1nL2NhbXBvLmpwZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY2FwdGlvbjogXCJBcXXDrSBlbmNvbnRyYXLDoXMgbGFzIG5vdGljaWFzIGRlbCBjbHViXCIsXG4gICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvZXNjdWVsYS5qcGdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGNhcHRpb246IFwiUmVzdWx0YWRvc1wiLCBcImltZy1zcmNcIjogXCIvaW1nL2Z1dGJvbC5qcGdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTMgbWItM1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcmQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBkZWNrOiBcImRlY2tcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiSGlzdG9yaWEgZGVsIGNsdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25vY2UgbnVlc3RyYSBoaXN0b3JpYVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwic2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJJbnN0YWxhY2lvbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGVtcGxhIG51ZXN0cmFzIGluc3RhbGFjaW9uZXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIlBsYW50aWxsYXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25vY2UgbnVlc3RyYXMgcGxhbnRpbGxhc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1jYXJkLWdyb3VwXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgZGVjazogXCJkZWNrXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIkNsYXNpZmljYWNpw7NuXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT2JzZXJ2YSBudWVzdHJhIGNsYXNpZmljYWNpw7NuIGVuIGxhIHRhYmxhXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJQcsOzeGltb3MgcGFydGlkb3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXF1w60gcHVlZGVzIHZlciBjb250cmEgcXVpZW4ganVnYW1vcyBlbCBwcsOzeGltbyBlbmN1ZW50cm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcImRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiUmVzdWx0YWRvc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2xvZ29fcmZlZi5qcGdcIiwgYWx0OiBcImxvZ29cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VzcGVuc2nDs24gZGUgbGFzIGNvbXBldGljaW9uZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMjcgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgUkZFRiBhcHJ1ZWJhIGxhIHN1c3BlbnNpw7NuIGRlIHRvZGFzIGxhcyBjb21wZXRpY2lvbmVzIG5vIHByb2Zlc2lvbmFsZXMgaGFzdGEgcXVlIGxhcyBhdXRvcmlkYWRlcyBjb25zaWRlcmVuIHF1ZSBzZSBwdWVkZW4gcmVhbnVkYXIgc2luIHJpZXNnb1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL0NvbXVuaWNhZG9fb2ZpY2lhbC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiY29tdW5pY2Fkb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIxMCBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWVkYW4gc3VzcGVuZGlkb3MgdG9kb3MgbG9zIGVudHJlbmFtaWVudG9zIGRlc2RlIG1hw7FhbmEgbWnDqXJjb2xlcyAxMSBkZSBtYXJ6byBkZSAyMDIwIGhhc3RhIG51ZXZvIGF2aXNvLiBMYSBSZWFsIEZlZGVyYWNpw7NuIGRlIEbDunRib2wgZGUgTWFkcmlkIGhhIGFudW5jaWFkbyBsYSBzdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lcyB0ZXJyaXRvcmlhbGVzIGR1cmFudGUgbGFzIHByw7N4aW1hcyBkb3Mgc2VtYW5hcy5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9yZXN1bHRhZG9zLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJyZXN1bHRhZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlc3VsdGFkb3MgZGVsIGZpbiBkZSBzZW1hbmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiOSBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWVzdHJvcyBlcXVpcG9zIGNvbnRpbnVhbiBjb24gbGEgYnVlbmEgZGluw6FtaWNhIGRlIGVzdGFzIMO6bHRpbWFzIDcgam9ybmFkYXMuIFRyYXMgZWwgdHJvcGllem8gaW5pY2lhbCBhIGxhIHZ1ZWx0YSBkZSBuYXZpZGFkLCBzZSBjdWVudGFuIGxvcyBwYXJ0aWRvcyBwb3IgdmljdG9yaWEuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvcHVlc3RvX2VudHJlbmFkb3IuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInB1ZXN0b19lbnRyZW5hZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1ZXN0b3MgZGUgZW50cmVuYWRvcmVzIHZhY2FudGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjIgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVuZW1vcyBkaXNwb25pYmxlcyBhbGd1bmFzIHZhY2FudGVzIGRlIGVudHJlbmFkb3JlcyBkZSBhbGd1bmFzIGRlIG51ZXN0cmFzIHBsYW50aWxsYXMsIHNpIHRpZW5lcyBlbCB0w610dWxvIG1hbmRhbG8geSBmb3JtYSBwYXJ0ZSBkZWwgY2x1Yi5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtdC01IHRleHQtY2VudGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJSZWxsZW5hIGVzdGUgZm9ybXVsYXJpb1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIsKheSDDum5ldGUgYSBudWVzdHJvIGVxdWlwbyFcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImNhdGVnb3JpYXNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhdGVnb3LDrWE6XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjYXRlZ29yaWFcIiwgb3B0aW9uczogX3ZtLmNhdGVnb3JpYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhdGVnb3JpYSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcmlhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhdGVnb3JpYVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhQ2FtaXNldGFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIGNhbWlzZXRhOlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidGFsbGFDYW1pc2V0YVwiLCBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYUNhbWlzZXRhLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUNhbWlzZXRhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhbGxhQ2FtaXNldGFcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0YWxsYVBhbnRhbG9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBwYW50YWzDs246XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWxsYVBhbnRhbG9uXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhbGxhUGFudGFsb24sXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhUGFudGFsb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFQYW50YWxvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhTWVkaWFzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBtZWRpYXM6XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWxsYU1lZGlhc1wiLCBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYU1lZGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFNZWRpYXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFNZWRpYXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0YWxsYUFicmlnb1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgYWJyaWdvOlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidGFsbGFBYnJpZ29cIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFBYnJpZ28sXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhQWJyaWdvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhbGxhQWJyaWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWV0b2RvUGFnb1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTcOpdG9kbyBkZSBwYWdvOlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWV0b2RvUGFnb1wiLCBvcHRpb25zOiBfdm0ucGFnbyB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0b2RvUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0b2RvUGFnbyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRvZG9QYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBpZDogXCJlbnZpYXJKdWdhZG9yXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW52aWFyXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNSB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiwqFCaWVudmVuaWRAIGEgSUYtT1JNQVRJQ09TIEZDIVwiLFxuICAgICAgICAgICAgICAgIFwiaGVhZGVyLXRhZ1wiOiBcIm5hdlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJjYXJkLWhlYWRlclwiOiBcIlwiLCB0YWJzOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgYWN0aXZlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluaWNpYXIgc2VzacOzblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJyZWdpc3Ryb1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlZ2lzdHJhcm1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItYWxlcnRcIiwgeyBhdHRyczogeyBpZDogXCJhbGVydGFzXCIsIHZhcmlhbnQ6IFwiZGFuZ2VyXCIgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtfYyhcImItY2FyZC10ZXh0XCIsIFtfdm0uX3YoXCJFbWFpbDpcIildKV0sIDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJlbWFpbExvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9ua2V5cHJlc3M6IFwidmFsaWRhcihldmVudClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW19jKFwiYi1jYXJkLXRleHRcIiwgW192bS5fdihcIkNvbnRyYXNlw7FhOlwiKV0pXSwgMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9ua2V5cHJlc3M6IFwidmFsaWRhcihldmVudClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGNvbnRyYXNlw7FhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJhY2NlZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJvdXRsaW5lLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjY2VkZXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtdC01IHRleHQtY2VudGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBoZWFkZXI6IFwiTWkgcGVyZmlsXCIsXG4gICAgICAgICAgICBcImhlYWRlci10ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgXCJoZWFkZXItdGFnXCI6IFwiaGVhZGVyXCIsXG4gICAgICAgICAgICBcImhlYWRlci1iZy12YXJpYW50XCI6IFwiaW5mb1wiLFxuICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIxMFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5ub21icmUpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLnVzdWFyaW8uYXBlbGxpZG9zKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtfdm0uX3YoXCJFbWFpbDpcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8uZW1haWwpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbX3ZtLl92KFwiRG5pOlwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5kbmkpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGZWNoYSBkZSBuYWNpbWllbnRvOlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoMCwgMTApKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtaW5mb1wiIH0sIFtfdm0uX3YoXCJEaXJlY2Npw7NuXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW192bS5fdihcIkNhbGxlOlwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5jYWxsZSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxvY2FsaWRhZDpcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8ubG9jYWxpZGFkKSArXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvdmluY2lhOlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5wcm92aW5jaWEpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDw7NkaWdvIHBvc3RhbDpcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5jcCkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJFbnRlciB5b3VyIG5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5jcCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJjcFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8uY3BcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImItYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5lZGl0YXIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVkaXRhclwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiwqFSZWxsZW5hIGVzdGUgZm9ybXVsYXJpbyFcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlci10YWdcIjogXCJuYXZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItbmF2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiY2FyZC1oZWFkZXJcIjogXCJcIiwgdGFiczogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwibG9naW5cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbmljaWFyIHNlc2nDs25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IGFjdGl2ZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSZWdpc3RyYXJtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW19jKFwiYi1jYXJkLXRleHRcIiwgW192bS5fdihcIk5vbWJyZTpcIildKV0sIDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1mb3JtdWxhcmlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB0dSBub21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbX2MoXCJiLWNhcmQtdGV4dFwiLCBbX3ZtLl92KFwiQXBlbGxpZG9zOlwiKV0pXSwgMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZvcm11bGFyaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJhcGVsbGlkb3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1cyBhcGVsbGlkb3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW19jKFwiYi1jYXJkLXRleHRcIiwgW192bS5fdihcIkVtYWlsOlwiKV0pXSwgMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZvcm11bGFyaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1haWxSZWdpc3Ryb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW19jKFwiYi1jYXJkLXRleHRcIiwgW192bS5fdihcIkRuaTpcIildKV0sIDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1mb3JtdWxhcmlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZG5pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB0dSBkbmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImItY2FyZC10ZXh0XCIsIFtfdm0uX3YoXCJGZWNoYSBkZSBuYWNpbWllbnRvOlwiKV0pXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZm9ybXVsYXJpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZlY2hhTmFjaW1pZW50b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgZmVjaGEgZGUgbmFjaW1pZW50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiRGlyZWNjacOzblwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbX2MoXCJiLWNhcmQtdGV4dFwiLCBbX3ZtLl92KFwiQ2FsbGU6XCIpXSldLCAxKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZm9ybXVsYXJpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNhbGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSBlbCBub21icmUgZGUgdHUgY2FsbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW19jKFwiYi1jYXJkLXRleHRcIiwgW192bS5fdihcIkxvY2FsaWRhZDpcIildKV0sIDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1mb3JtdWxhcmlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibG9jYWxpZGFkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSBsYSBsb2NhbGlkYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW19jKFwiYi1jYXJkLXRleHRcIiwgW192bS5fdihcIlByb3ZpbmNpYTpcIildKV0sIDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1mb3JtdWxhcmlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicHJvdmluY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSBsYSBwcm92aW5jaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW19jKFwiYi1jYXJkLXRleHRcIiwgW192bS5fdihcIkNQOlwiKV0pXSwgMSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZvcm11bGFyaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gZWwgY8OzZGlnbyBww7NzdGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtfYyhcImItY2FyZC10ZXh0XCIsIFtfdm0uX3YoXCJDb250cmFzZcOxYTpcIildKV0sIDEpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1mb3JtdWxhcmlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIHVuYSBjb250cmFzZcOxYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1mb3JtdWxhcmlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJvdXRsaW5lLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInJlZ2lzdHJhcm1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZWdpc3RyYXJtZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgdGV4dC1jZW50ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkNvbnRpZ28gc2VndWltb3MgY3JlY2llbmRvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiwqFIYXp0ZSBzb2NpbyFcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWcvU29jaW9zLmpwZ1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtZXRvZG9QYWdvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0ucGFnbywgaWQ6IFwicGFnb1NvY2lvc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0b2RvUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldG9kb1BhZ28gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldG9kb1BhZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBpZDogXCJlbnZpYXJTb2Npb3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucGFnYXIoX3ZtLm1ldG9kb1BhZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbnZpYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9