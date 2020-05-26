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
    Perfil: _components_Perfil_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Entrenador',
  data: function data() {
    return {
      file: [],
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
          var _this = this;

          console.log(data);
          this.dismissCountDown = this.dismissSecs;
          setTimeout(function () {
            return _this.$router.push({
              name: 'home'
            });
          }, 3010);
        }
      });
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
        value: 'Tarjeta',
        text: 'Tarjeta crédito/débito'
      }, {
        value: 'Transferencia',
        text: 'Transferencia bancaria'
      }]
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    inscribirJugador: function inscribirJugador(EleccionPagoJugador, EleccionCategoria, EleccionTallaCamiseta, EleccionTallaPantalon, EleccionTallaMedias, EleccionTallaAbrigo) {
      var ruta = '/pago-jugadores';
      $.ajax({
        type: 'POST',
        url: ruta,
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
          var _this = this;

          console.log(data);
          document.getElementById('botonJugador').style.display = 'none';
          this.dismissCountDown = this.dismissSecs;
          setTimeout(function () {
            return _this.$router.push({
              name: 'home'
            });
          }, 3000);
        }
      });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      editar: false,
      eliminar: '',
      adios: '',
      fecha: '',
      confirmarPass: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/misdatos').then(function (response) {
      return _this.usuario = response.data;
    });
  },
  methods: {
    editarPerfil: function editarPerfil() {
      this.editar = true;
      this.fecha = this.usuario.fechaNacimiento.date.substring(0, 10);
      console.log(this.fecha);
    },
    actualizarPerfil: function actualizarPerfil(nombreEdit, apellidosEdit, emailEdit, fechaedit, passEdit, dniEdit, calleEdit, localidadEdit, provinciaEdit, cpEdit) {
      var ruta = '/editar-datos';
      $.ajax({
        type: 'PUT',
        url: ruta,
        data: {
          nombre: nombreEdit,
          apellidos: apellidosEdit,
          email: emailEdit,
          fecha: fechaedit,
          pass: passEdit,
          dni: dniEdit,
          calle: calleEdit,
          localidad: localidadEdit,
          provincia: provinciaEdit,
          cp: cpEdit
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
    eliminarPerfil: function eliminarPerfil(idUsuario) {
      var _this2 = this;

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
        _this2.eliminar = value;

        if (_this2.eliminar) {
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
        value: 'Tarjeta',
        text: 'Tarjeta crédito/débito'
      }, {
        value: 'Transferencia',
        text: 'Transferencia bancaria'
      }]
    };
  },
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
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
          var _this = this;

          console.log(data);
          document.getElementById('botonSocios').style.display = 'none';
          this.dismissCountDown = this.dismissSecs;
          setTimeout(function () {
            return _this.$router.push({
              name: 'home'
            });
          }, 3000);
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
              _c("b-form-file", {
                attrs: {
                  state: Boolean(_vm.file),
                  placeholder: "Elija un archivo o desplácelo aquí...",
                  "drop-placeholder": "Soltar archivo aquí...",
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
    { staticClass: "mt-5 text-center" },
    [
      _c(
        "b-container",
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
                  staticStyle: { "max-width": "40rem" },
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
                                attrs: {
                                  name: "nombre",
                                  id: "nombre",
                                  placeholder: "usuario.nombre"
                                },
                                model: {
                                  value: _vm.usuario.nombre,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "nombre", $$v)
                                  },
                                  expression: "usuario.nombre"
                                }
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
                                model: {
                                  value: _vm.usuario.apellidos,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "apellidos", $$v)
                                  },
                                  expression: "usuario.apellidos"
                                }
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
                                model: {
                                  value: _vm.usuario.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "email", $$v)
                                  },
                                  expression: "usuario.email"
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
                                attrs: { type: "password" },
                                model: {
                                  value: _vm.usuario.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "password", $$v)
                                  },
                                  expression: "usuario.password"
                                }
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
                                attrs: { type: "password" },
                                model: {
                                  value: _vm.confirmarPass,
                                  callback: function($$v) {
                                    _vm.confirmarPass = $$v
                                  },
                                  expression: "confirmarPass"
                                }
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
                                model: {
                                  value: _vm.usuario.dni,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "dni", $$v)
                                  },
                                  expression: "usuario.dni"
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
                                attrs: { type: "date" },
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
                                model: {
                                  value: _vm.usuario.calle,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "calle", $$v)
                                  },
                                  expression: "usuario.calle"
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
                                model: {
                                  value: _vm.usuario.localidad,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "localidad", $$v)
                                  },
                                  expression: "usuario.localidad"
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
                                model: {
                                  value: _vm.usuario.provincia,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "provincia", $$v)
                                  },
                                  expression: "usuario.provincia"
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
                                model: {
                                  value: _vm.usuario.cp,
                                  callback: function($$v) {
                                    _vm.$set(_vm.usuario, "cp", $$v)
                                  },
                                  expression: "usuario.cp"
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
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "b-col",
                        [
                          !_vm.editar
                            ? _c(
                                "b-button",
                                {
                                  attrs: { variant: "outline-primary" },
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
                                  attrs: { variant: "outline-success" },
                                  on: {
                                    click: function($event) {
                                      return _vm.actualizarPerfil(
                                        _vm.usuario.nombre,
                                        _vm.usuario.apellidos,
                                        _vm.usuario.email,
                                        _vm.fecha,
                                        _vm.usuario.password,
                                        _vm.usuario.dni,
                                        _vm.usuario.calle,
                                        _vm.usuario.localidad,
                                        _vm.usuario.provincia,
                                        _vm.usuario.cp
                                      )
                                    }
                                  }
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
                                  on: {
                                    click: function($event) {
                                      _vm.editar = false
                                    }
                                  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT82NThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlP2RmMjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW50cmVuYWRvci52dWU/NjE4ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZT9kMzJiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlPzVmMDgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/MjFlMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hYmNiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlPzYzMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlPzdmZjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZT82NzBkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWU/ZWM0MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWU/YTk1NyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW50cmVuYWRvci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlPzljODYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84Zjg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzY3MGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/OTYxNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hY2IyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/NDg3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWU/MTc3ZCJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFVc2VyU2VjcmV0IiwiZmFTaWduT3V0QWx0IiwiVnVlIiwiY29tcG9uZW50IiwiRm9udEF3ZXNvbWVJY29uIiwidXNlIiwiQm9vdHN0cmFwVnVlIiwiVnVlUm91dGVyIiwicm91dGVzIiwicGF0aCIsIm5hbWUiLCJIb21lIiwiSnVnYWRvciIsIlNvY2lvIiwiRW50cmVuYWRv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b0JBQW9CLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxzQ0FBc0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBNkM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdDQUF3QztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4uL2Nzcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcclxuaW1wb3J0IEJvb3RzdHJhcFZ1ZSBmcm9tICdib290c3RyYXAtdnVlJ1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQgeyBmYVVzZXJTZWNyZXQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhU2lnbk91dEFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSdcclxuXHJcbmxpYnJhcnkuYWRkKGZhVXNlclNlY3JldClcclxubGlicmFyeS5hZGQoZmFTaWduT3V0QWx0KVxyXG5cclxuVnVlLmNvbXBvbmVudCgnZm9udC1hd2Vzb21lLWljb24nLCBGb250QXdlc29tZUljb24pXHJcblxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAudnVlJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS52dWUnXHJcbmltcG9ydCBKdWdhZG9yIGZyb20gJy4vY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSdcclxuaW1wb3J0IFNvY2lvIGZyb20gJy4vY29tcG9uZW50cy9Tb2Npby52dWUnXHJcbmltcG9ydCBFbnRyZW5hZG9yIGZyb20gJy4vY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSdcclxuaW1wb3J0IFBlcmZpbCBmcm9tICcuL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZSdcclxuXHJcblZ1ZS51c2UoQm9vdHN0cmFwVnVlKVxyXG5WdWUudXNlKFZ1ZVJvdXRlcilcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJy8nLCBuYW1lOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZSB9LFxyXG4gICAgeyBwYXRoOiAnL2p1Z2Fkb3JlcycsIG5hbWU6ICdqdWdhZG9yJywgY29tcG9uZW50OiBKdWdhZG9yIH0sXHJcbiAgICB7IHBhdGg6ICcvc29jaW9zJywgbmFtZTogJ3NvY2lvJywgY29tcG9uZW50OiBTb2NpbyB9LFxyXG4gICAgeyBwYXRoOiAnL2VudHJlbmFkb3JlcycsIG5hbWU6ICdlbnRyZW5hZG9yJywgY29tcG9uZW50OiBFbnRyZW5hZG9yIH0sXHJcbiAgICB7IHBhdGg6ICcvbWlwZXJmaWwnLCBuYW1lOiAncGVyZmlsJywgY29tcG9uZW50OiBQZXJmaWwgfVxyXG5dXHJcblxyXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICAgIHJvdXRlcyAvLyBzaG9ydCBmb3IgYHJvdXRlczogcm91dGVzYFxyXG59KTtcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgZWw6IFwiI2FwcFwiLFxyXG4gICAgY29tcG9uZW50czoge0FwcCwgSG9tZSwgSnVnYWRvciwgU29jaW8sIEVudHJlbmFkb3IsIFBlcmZpbH0sXHJcbiAgICByb3V0ZXJcclxufSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNkZTVlMjNcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjZGU1ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjZGU1ZTIzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWNkZTVlMjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xY2RlNWUyM1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDBlMmI4NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGQwZTJiODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGQwZTJiODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMGUyYjg0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGQwZTJiODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEVudHJlbmFkb3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwZTJiODRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWVmNzMzNGQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWVmNzMzNGQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWVmNzMzNGRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFlZjczMzRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFlZjczMzRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFlZjczMzRkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxIb21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFlZjczMzRkJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWVmNzMzNGQmc2NvcGVkPXRydWVcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSnVnYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdiYWMyNDRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3YmFjMjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3YmFjMjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2JhYzI0NFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3YmFjMjQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxKdWdhZG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSnVnYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YmFjMjQ0XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTQzODI3OGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5NDM4Mjc4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5NDM4Mjc4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NDM4Mjc4Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk0MzgyNzhjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxQZXJmaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyZmlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlcmZpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTQzODI3OGNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU29jaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4Mjg1MDZmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE4Mjg1MDZmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE4Mjg1MDZmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgyODUwNmZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxODI4NTA2ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcU29jaW8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb2Npby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb2Npby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Tb2Npby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgyODUwNmZcIiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC01IG1iLTUgdGV4dC1jZW50ZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPsK/VGllbmVzIGVsIHTDrXR1bG8gZGUgZW50cmVuYWRvcj88L2gxPlxyXG4gICAgICAgIDxoMj5FbnbDrWFub3NsbyB5IGRpcmlnZSBhIGFsZ3VubyBkZSBudWVzdHJvcyBlcXVpcG9zPC9oMj5cclxuICAgICAgICBcclxuICAgICAgICA8Yi1pbWcgc3JjPVwiL2ltZy9lbnRyZW5hZG9yLnBuZ1wiIGZsdWlkPjwvYi1pbWc+ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8IS0tIFNlbGVjY2lvbmFyIGFyY2hpdm8gLS0+XHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLWZpbGVcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIDpzdGF0ZT1cIkJvb2xlYW4oZmlsZSlcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbGlqYSB1biBhcmNoaXZvIG8gZGVzcGzDoWNlbG8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgZHJvcC1wbGFjZWhvbGRlcj1cIlNvbHRhciBhcmNoaXZvIGFxdcOtLi4uXCJcclxuICAgICAgICAgICAgICAgIGJyb3dzZS10ZXh0PVwiRWxlZ2lyXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA+PC9iLWZvcm0tZmlsZT5cclxuICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPiBcclxuICAgICAgICAgICAgPGItYWxlcnRcclxuICAgICAgICAgICAgOnNob3c9XCJkaXNtaXNzQ291bnREb3duXCJcclxuICAgICAgICAgICAgZGlzbWlzc2libGVcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICBAZGlzbWlzc2VkPVwiZGlzbWlzc0NvdW50RG93bj0wXCJcclxuICAgICAgICAgICAgQGRpc21pc3MtY291bnQtZG93bj1cImNvdW50RG93bkNoYW5nZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPkVudmlhbmRvIGFyY2hpdm86IHt7IGRpc21pc3NDb3VudERvd24gfX0gc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgIDxiLXByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICA6bWF4PVwiZGlzbWlzc1NlY3NcIlxyXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0cHhcIlxyXG4gICAgICAgICAgICA+PC9iLXByb2dyZXNzPlxyXG4gICAgICAgICAgICA8L2ItYWxlcnQ+XHJcbiAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgPCEtLSBCb3TDs24gZGUgZW52aWFyLS0+XHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInN1Y2Nlc3NcIiBpZD1cImJvdG9uRW50cmVuYWRvclwiIEBjbGljaz1cImVudmlhclRpdHVsb1wiPkVudmlhcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgPC9iLXJvdz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0VudHJlbmFkb3InLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaWxlOiBbXSxcclxuICAgICAgICBkaXNtaXNzU2VjczogMyxcclxuICAgICAgICBkaXNtaXNzQ291bnREb3duOiAwLFxyXG4gICAgICAgIHNob3dEaXNtaXNzaWJsZUFsZXJ0OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgY291bnREb3duQ2hhbmdlZChkaXNtaXNzQ291bnREb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IGRpc21pc3NDb3VudERvd25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudmlhclRpdHVsbygpe1xyXG4gICAgICAgICAgICB2YXIgcnV0YSA9ICcvZW52aW8tdGl0dWxvJ1xyXG4gICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzWzBdKVxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICBlbmN0eXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gdGhpcy5kaXNtaXNzU2Vjc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGItY29udGFpbmVyIGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgIDwhLS0gQ2FiZWNlcmEgc2xpZGVzIC0tPlxyXG4gICAgICAgIDxiLWNhcm91c2VsXHJcbiAgICAgICAgICAgIGlkPVwiY2Fyb3VzZWwtZmFkZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwidGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICMwMDBcIlxyXG4gICAgICAgICAgICBmYWRlXHJcbiAgICAgICAgICAgIGluZGljYXRvcnNcclxuICAgICAgICAgICAgaW1nLXdpZHRoPVwiMTAyNFwiXHJcbiAgICAgICAgICAgIGltZy1oZWlnaHQ9XCI0ODBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxiLWNhcm91c2VsLXNsaWRlXHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uPVwiQmllbnZlbmlkQCBhIG51ZXN0cmEgd2ViXCJcclxuICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2JhbG9uLWRlLWZ1dGJvbC5qcGdcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XHJcbiAgICAgICAgICAgIDxiLWNhcm91c2VsLXNsaWRlXHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uPVwiQ29tcGFydGUgbnVlc3RyYSBwYXNpw7NuXCJcclxuICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2NhbXBvLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgIGNhcHRpb249XCJBcXXDrSBlbmNvbnRyYXLDoXMgbGFzIG5vdGljaWFzIGRlbCBjbHViXCJcclxuICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2VzY3VlbGEuanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbj1cIlJlc3VsdGFkb3NcIlxyXG4gICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvZnV0Ym9sLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICA8L2ItY2Fyb3VzZWw+XHJcblxyXG4gICAgICAgIDwhLS0gY2FyZHMgY29uIG5vdGljaWFzIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgPCEtLSBQcmltZXJhIGzDrW5lYSBkZSBjYXJkcyAtLT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxiLWNhcmQtZ3JvdXAgZGVjaz1cImRlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJIaXN0b3JpYSBkZWwgY2x1YlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5Db25vY2UgbnVlc3RyYSBoaXN0b3JpYTwvYT48L2ItY2FyZC10ZXh0PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiSW5zdGFsYWNpb25lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+Q29udGVtcGxhIG51ZXN0cmFzIGluc3RhbGFjaW9uZXM8L2E+PC9iLWNhcmQtdGV4dD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlBsYW50aWxsYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkNvbm9jZSBudWVzdHJhcyBwbGFudGlsbGFzPC9hPjwvYi1jYXJkLXRleHQ+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQtZ3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBTZWd1bmRhIGzDrW5lYSBkZSBjYXJkcyAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNhcmQtZ3JvdXAgZGVjaz1cImRlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJDbGFzaWZpY2FjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+T2JzZXJ2YSBudWVzdHJhIGNsYXNpZmljYWNpw7NuIGVuIGxhIHRhYmxhPC9hPjwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlByw7N4aW1vcyBwYXJ0aWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+QXF1w60gcHVlZGVzIHZlciBjb250cmEgcXVpZW4ganVnYW1vcyBlbCBwcsOzeGltbyBlbmN1ZW50cm88L2E+PC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwiZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJSZXN1bHRhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5NaXJhIGNvbW8gbm9zIGhhIGlkbyBlbiBsb3Mgw7psdGltb3MgcGFydGlkb3M8L2E+PC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkLWdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbm90aWNpYSBSRkVGLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ29fcmZlZi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJTdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lc1wiIHN1Yi10aXRsZT1cIjI3IG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBSRkVGIGFwcnVlYmEgbGEgc3VzcGVuc2nDs24gZGUgdG9kYXMgbGFzIGNvbXBldGljaW9uZXMgbm8gcHJvZmVzaW9uYWxlcyBoYXN0YSBxdWUgbGFzIGF1dG9yaWRhZGVzIGNvbnNpZGVyZW4gcXVlIHNlIHB1ZWRlbiByZWFudWRhciBzaW4gcmllc2dvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gY29tdW5pY2FkbyBvZmljaWFsIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9Db211bmljYWRvX29maWNpYWwuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjb211bmljYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiQ29tdW5pY2FkbyBPZmljaWFsIHwgQ29yb25hdmlydXNcIiBzdWItdGl0bGU9XCIxMCBtYXJ6bywgMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVlZGFuIHN1c3BlbmRpZG9zIHRvZG9zIGxvcyBlbnRyZW5hbWllbnRvcyBkZXNkZSBtYcOxYW5hIG1pw6lyY29sZXMgMTEgZGUgbWFyem8gZGUgMjAyMCBoYXN0YSBudWV2byBhdmlzby4gTGEgUmVhbCBGZWRlcmFjacOzbiBkZSBGw7p0Ym9sIGRlIE1hZHJpZCBoYSBhbnVuY2lhZG8gbGEgc3VzcGVuc2nDs24gZGUgbGFzIGNvbXBldGljaW9uZXMgdGVycml0b3JpYWxlcyBkdXJhbnRlIGxhcyBwcsOzeGltYXMgZG9zIHNlbWFuYXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gcmVzdWx0YWRvcyAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcmVzdWx0YWRvcy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJlc3VsdGFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJSZXN1bHRhZG9zIGRlbCBmaW4gZGUgc2VtYW5hXCIgc3ViLXRpdGxlPVwiOSBtYXJ6bywgMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVlc3Ryb3MgZXF1aXBvcyBjb250aW51YW4gY29uIGxhIGJ1ZW5hIGRpbsOhbWljYSBkZSBlc3RhcyDDumx0aW1hcyA3IGpvcm5hZGFzLiBUcmFzIGVsIHRyb3BpZXpvIGluaWNpYWwgYSBsYSB2dWVsdGEgZGUgbmF2aWRhZCwgc2UgY3VlbnRhbiBsb3MgcGFydGlkb3MgcG9yIHZpY3RvcmlhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFB1ZXN0byBkZSBlbnRyZW5hZG9yIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9wdWVzdG9fZW50cmVuYWRvci5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInB1ZXN0b19lbnRyZW5hZG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiUHVlc3RvcyBkZSBlbnRyZW5hZG9yZXMgdmFjYW50ZXNcIiBzdWItdGl0bGU9XCIyIG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5lbW9zIGRpc3BvbmlibGVzIGFsZ3VuYXMgdmFjYW50ZXMgZGUgZW50cmVuYWRvcmVzIGRlIGFsZ3VuYXMgZGUgbnVlc3RyYXMgcGxhbnRpbGxhcywgc2kgdGllbmVzIGVsIHTDrXR1bG8gbWFuZGFsbyB5IGZvcm1hIHBhcnRlIGRlbCBjbHViLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgPC9iLWNvbnRhaW5lcj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzbGlkZTogMCxcclxuICAgICAgICBzbGlkaW5nOiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG9uU2xpZGVTdGFydChzbGlkZSkge1xyXG4gICAgICAgIHRoaXMuc2xpZGluZyA9IHRydWVcclxuICAgICAgfSxcclxuICAgICAgb25TbGlkZUVuZChzbGlkZSkge1xyXG4gICAgICAgIHRoaXMuc2xpZGluZyA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnNlcGFyYWNpb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4gICAgXHJcblxyXG5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDE+UmVsbGVuYSBlc3RlIGZvcm11bGFyaW88L2gxPlxyXG4gICAgICAgIDxoMj7CoXkgw7puZXRlIGEgbnVlc3RybyBlcXVpcG8hPC9oMj4gIFxyXG5cclxuICAgICAgICA8Yi1jb250YWluZXIgY2xhc3M9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDE6IGNhdGVnb3LDrWEgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sIG5vLWd1dHRlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhdGVnb3JpYXNcIj5DYXRlZ29yw61hOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJjYXRlZ29yaWFcIiBpZD1cImNhdGVnb3JpYVwiIDpvcHRpb25zPVwiY2F0ZWdvcmlhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDI6IHRhbGxhIGRlIGNhbWlzZXRhIC0tPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLXJvdyBjbGFzcz1cIm1iLTNcIiB2LWlmPVwiIWRpc21pc3NDb3VudERvd25cIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFsbGFDYW1pc2V0YVwiPlRhbGxhIGRlIGNhbWlzZXRhOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYUNhbWlzZXRhXCIgaWQ9XCJ0YWxsYUNhbWlzZXRhXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSAzOiB0YWxsYSBkZSBwYW50YWzDs24gLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYVBhbnRhbG9uXCI+VGFsbGEgZGUgcGFudGFsw7NuOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYVBhbnRhbG9uXCIgaWQ9XCJ0YWxsYVBhbnRhbG9uXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA0OiB0YWxsYSBkZSBtZWRpYXMgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYU1lZGlhc1wiPlRhbGxhIGRlIG1lZGlhczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwidGFsbGFNZWRpYXNcIiBpZD1cInRhbGxhTWVkaWFzXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA1OiB0YWxsYSBkZSBhYnJpZ28gLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYUFicmlnb1wiPlRhbGxhIGRlIGFicmlnbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwidGFsbGFBYnJpZ29cIiBpZD1cInRhbGxhQWJyaWdvXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA2OiBtw6l0b2RvIGRlIHBhZ28gLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXRvZG9QYWdvXCI+TcOpdG9kbyBkZSBwYWdvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJtZXRvZG9QYWdvXCIgaWQ9XCJtZXRvZG9QYWdvXCIgOm9wdGlvbnM9XCJwYWdvXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgNzogQWxlcnRhIGFuaW1hZGEgLS0+XHJcbiAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPiBcclxuICAgICAgICAgICAgICAgIDxiLWFsZXJ0XHJcbiAgICAgICAgICAgICAgICA6c2hvdz1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgZGlzbWlzc2libGVcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgIEBkaXNtaXNzZWQ9XCJkaXNtaXNzQ291bnREb3duPTBcIlxyXG4gICAgICAgICAgICAgICAgQGRpc21pc3MtY291bnQtZG93bj1cImNvdW50RG93bkNoYW5nZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+RW52aWFuZG8gYXJjaGl2bzoge3sgZGlzbWlzc0NvdW50RG93biB9fSBzZWd1bmRvcy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDxiLXByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIDptYXg9XCJkaXNtaXNzU2Vjc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNHB4XCJcclxuICAgICAgICAgICAgICAgID48L2ItcHJvZ3Jlc3M+XHJcbiAgICAgICAgICAgICAgICA8L2ItYWxlcnQ+XHJcbiAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA4OiBlbnZpYXIgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGlkPVwiYm90b25KdWdhZG9yXCIgQGNsaWNrPVwiaW5zY3JpYmlySnVnYWRvcihtZXRvZG9QYWdvLCBjYXRlZ29yaWEsIHRhbGxhQ2FtaXNldGEsIHRhbGxhUGFudGFsb24sIHRhbGxhTWVkaWFzLCB0YWxsYUFicmlnbylcIj5FbnZpYXI8L2ItYnV0dG9uPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuICAgICAgICA8L2ItY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnSnVnYWRvcicsXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2F0ZWdvcmlhOiBudWxsLFxyXG4gICAgICAgICAgICB0YWxsYUNhbWlzZXRhOiBudWxsLFxyXG4gICAgICAgICAgICB0YWxsYVBhbnRhbG9uOiBudWxsLFxyXG4gICAgICAgICAgICB0YWxsYU1lZGlhczogbnVsbCxcclxuICAgICAgICAgICAgdGFsbGFBYnJpZ286IG51bGwsXHJcbiAgICAgICAgICAgIG1ldG9kb1BhZ286IG51bGwsXHJcbiAgICAgICAgICAgIGRpc21pc3NTZWNzOiAzLFxyXG4gICAgICAgICAgICBkaXNtaXNzQ291bnREb3duOiAwLFxyXG4gICAgICAgICAgICBzaG93RGlzbWlzc2libGVBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhdGVnb3JpYXM6W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiBudWxsLCB0ZXh0OiAnU2VsZWNjaW9uZSB1biBjYXRlZ29yw61hJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdCZW5qYW1pbicsIHRleHQ6ICdCZW5qYW3DrW4nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0FsZXZpbicsIHRleHQ6ICdBbGV2w61uJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdJbmZhbnRpbCcsIHRleHQ6ICdJbmZhbnRpbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQ2FkZXRlJywgdGV4dDogJ0NhZGV0ZSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnSnV2ZW5pbCcsIHRleHQ6ICdKdXZlbmlsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdBZmljaW9uYWRvJywgdGV4dDogJ0FmaWNpb25hZG8nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1ZldGVyYW5vJywgdGV4dDogJ1ZldGVyYW5vJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgdGFsbGFzOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW5hIHRhbGxhJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdTJywgdGV4dDogJ1MnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ00nLCB0ZXh0OiAnTSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnTCcsIHRleHQ6ICdMJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdYTCcsIHRleHQ6ICdYTCd9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHBhZ286W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiBudWxsLCB0ZXh0OiAnU2VsZWNjaW9uZSB1biBtw6l0b2RvIGRlIHBhZ28nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1BheXBhbCcsIHRleHQ6ICdQYXlwYWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1RhcmpldGEnLCB0ZXh0OiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdUcmFuc2ZlcmVuY2lhJywgdGV4dDogJ1RyYW5zZmVyZW5jaWEgYmFuY2FyaWEnfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGNvdW50RG93bkNoYW5nZWQoZGlzbWlzc0NvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnNjcmliaXJKdWdhZG9yKEVsZWNjaW9uUGFnb0p1Z2Fkb3IsIEVsZWNjaW9uQ2F0ZWdvcmlhLCBFbGVjY2lvblRhbGxhQ2FtaXNldGEsIEVsZWNjaW9uVGFsbGFQYW50YWxvbiwgRWxlY2Npb25UYWxsYU1lZGlhcywgRWxlY2Npb25UYWxsYUFicmlnbyl7XHJcbiAgICAgICAgICAgIHZhciBydXRhID0gJy9wYWdvLWp1Z2Fkb3JlcydcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVybDogcnV0YSxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICh7cGFnb0p1Z2Fkb3I6IEVsZWNjaW9uUGFnb0p1Z2Fkb3IsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6IEVsZWNjaW9uQ2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWxsYUNhbWlzZXRhOiBFbGVjY2lvblRhbGxhQ2FtaXNldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbGxhUGFudGFsb246IEVsZWNjaW9uVGFsbGFQYW50YWxvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFNZWRpYXM6IEVsZWNjaW9uVGFsbGFNZWRpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbGxhQWJyaWdvOiBFbGVjY2lvblRhbGxhQWJyaWdvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b25KdWdhZG9yJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZSd9KSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8Yi1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiIGRpc2FibGVkIHYtaWY9XCIhdXN1YXJpby5mZWNoYU5hY2ltaWVudG9cIj5cclxuICAgICAgICAgICAgICAgIDxiLXNwaW5uZXIgc21hbGwgdHlwZT1cImdyb3dcIj48L2Itc3Bpbm5lcj5cclxuICAgICAgICAgICAgICAgIENhcmdhbmRvLi4uXHJcbiAgICAgICAgICAgIDwvYi1idXR0b24+XHJcbiAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIk1pIHBlcmZpbFwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXItdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyLXRhZz1cImhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXItYmctdmFyaWFudD1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDQwcmVtO1wiXHJcbiAgICAgICAgICAgICAgICB2LWlmPVwidXN1YXJpby5mZWNoYU5hY2ltaWVudG9cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIiFlZGl0YXJcIj57eyB1c3VhcmlvLm5vbWJyZSB9fSB7eyB1c3VhcmlvLmFwZWxsaWRvcyB9fTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Ob21icmU6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgbmFtZT1cIm5vbWJyZVwiIGlkPVwibm9tYnJlXCIgdi1tb2RlbD1cInVzdWFyaW8ubm9tYnJlXCIgcGxhY2Vob2xkZXI9XCJ1c3VhcmlvLm5vbWJyZVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+QXBlbGxpZG9zOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmFwZWxsaWRvc1wiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5FbWFpbDo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmVtYWlsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5lbWFpbFwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Q29udHJhc2XDsWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1c3VhcmlvLnBhc3N3b3JkXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Db25maXJtYXIgY29udHJhc2XDsWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJjb25maXJtYXJQYXNzXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkRuaTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmRuaSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8uZG5pXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkZlY2hhIGRlIG5hY2ltaWVudG86PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoMCwxMCl9fSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB0eXBlPVwiZGF0ZVwiIHYtbW9kZWw9XCJmZWNoYVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxocj48c3BhbiBjbGFzcz1cInRleHQtaW5mbyBtYi01XCI+RGlyZWNjacOzbjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5DYWxsZTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmNhbGxlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5jYWxsZVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Mb2NhbGlkYWQ6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5sb2NhbGlkYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmxvY2FsaWRhZFwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Qcm92aW5jaWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5wcm92aW5jaWEgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8ucHJvdmluY2lhXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkPDs2RpZ28gcG9zdGFsOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uY3AgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8uY3BcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHYtaWY9XCIhZWRpdGFyXCIgQGNsaWNrPVwiZWRpdGFyUGVyZmlsXCI+RWRpdGFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHYtaWY9XCIhZWRpdGFyXCIgQGNsaWNrPVwiZWxpbWluYXJQZXJmaWwodXN1YXJpby5pZClcIj5FbGltaW5hciBjdWVudGE8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHYtaWY9XCJlZGl0YXJcIiBAY2xpY2s9XCJhY3R1YWxpemFyUGVyZmlsKHVzdWFyaW8ubm9tYnJlLCB1c3VhcmlvLmFwZWxsaWRvcywgdXN1YXJpby5lbWFpbCwgZmVjaGEsIHVzdWFyaW8ucGFzc3dvcmQsIHVzdWFyaW8uZG5pLCB1c3VhcmlvLmNhbGxlLCB1c3VhcmlvLmxvY2FsaWRhZCwgdXN1YXJpby5wcm92aW5jaWEsIHVzdWFyaW8uY3ApXCI+QWN0dWFsaXphcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiB2LWlmPVwiZWRpdGFyXCIgQGNsaWNrPVwiZWRpdGFyID0gZmFsc2VcIj5DYW5jZWxhcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgPC9iLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgICAgICAgdXN1YXJpbzogW10sXHJcbiAgICAgICAgICAgIGVkaXRhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGVsaW1pbmFyOiAnJyxcclxuICAgICAgICAgICAgYWRpb3M6ICcnLFxyXG4gICAgICAgICAgICBmZWNoYTogJycsXHJcbiAgICAgICAgICAgIGNvbmZpcm1hclBhc3M6ICcnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KCcvbWlzZGF0b3MnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpbyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGVkaXRhclBlcmZpbCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWNoYSA9IHRoaXMudXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoMCwxMClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmVjaGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYWN0dWFsaXphclBlcmZpbChub21icmVFZGl0LCBhcGVsbGlkb3NFZGl0LCBlbWFpbEVkaXQsIGZlY2hhZWRpdCwgcGFzc0VkaXQsIGRuaUVkaXQsIGNhbGxlRWRpdCwgbG9jYWxpZGFkRWRpdCwgcHJvdmluY2lhRWRpdCwgY3BFZGl0KXtcclxuICAgICAgICAgICAgICAgIHZhciBydXRhID0gJy9lZGl0YXItZGF0b3MnXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcnV0YSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiAoe25vbWJyZTogbm9tYnJlRWRpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogYXBlbGxpZG9zRWRpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbEVkaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWNoYTogZmVjaGFlZGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzczogcGFzc0VkaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmk6IGRuaUVkaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZTogY2FsbGVFZGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpZGFkOiBsb2NhbGlkYWRFZGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhOiBwcm92aW5jaWFFZGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3A6IGNwRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvID0gZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnJlbG9hZCh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVsaW1pbmFyUGVyZmlsKGlkVXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGltaW5hciA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ8K/UmVhbG1lbnRlIHF1aWVyZXMgZWxpbWluYXIgdHUgY3VlbnRhPycsIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRWxpbWluYXIgY3VlbnRhJyxcclxuICAgICAgICAgICAgICAgIHNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbFZhcmlhbnQ6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdTSScsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcclxuICAgICAgICAgICAgICAgIGZvb3RlckNsYXNzOiAncC0yJyxcclxuICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGltaW5hcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnV0YSA9ICcvZWxpbWluYXItdXN1YXJpbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcnV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7aWQ6IGlkVXN1YXJpb30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc3VhcmlvIE5PIGVsaW1pbmFkbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSBtYi01IHRleHQtY2VudGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5Db250aWdvIHNlZ3VpbW9zIGNyZWNpZW5kbzwvaDE+XHJcbiAgICAgICAgPGgyPsKhSGF6dGUgc29jaW8hPC9oMj5cclxuXHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtNVwiPlxyXG4gICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nIHNyYz1cIi9pbWcvU29jaW9zLmpwZ1wiPjwvYi1jYXJkLWltZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNw6l0aWRvIGRlIHBhZ28gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWV0b2RvUGFnb1wiPk3DqXRvZG8gZGUgcGFnbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwibWV0b2RvUGFnb1wiIDpvcHRpb25zPVwicGFnb1wiIGlkPVwicGFnb1NvY2lvc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQWxlcnQgYW5pbWFkYSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudERvd249MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkaXNtaXNzLWNvdW50LWRvd249XCJjb3VudERvd25DaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbnZpYW5kbyBhcmNoaXZvOiB7eyBkaXNtaXNzQ291bnREb3duIH19IHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1heD1cImRpc21pc3NTZWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYi1wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWFsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gYm90b24gZW52aWFyIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaWQ9XCJib3RvblNvY2lvc1wiIEBjbGljaz1cInBhZ2FyKG1ldG9kb1BhZ28pXCI+RW52aWFyPC9iLWJ1dHRvbj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2ItY29sPiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvYi1yb3c+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdTb2NpbycsXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWV0b2RvUGFnbzogbnVsbCxcclxuICAgICAgICAgICAgZGlzbWlzc1NlY3M6IDMsXHJcbiAgICAgICAgICAgIGRpc21pc3NDb3VudERvd246IDAsXHJcbiAgICAgICAgICAgIHNob3dEaXNtaXNzaWJsZUFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgIHBhZ286W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiBudWxsLCB0ZXh0OiAnU2VsZWNjaW9uZSB1biBtw6l0b2RvIGRlIHBhZ28nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1BheXBhbCcsIHRleHQ6ICdQYXlwYWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1RhcmpldGEnLCB0ZXh0OiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdUcmFuc2ZlcmVuY2lhJywgdGV4dDogJ1RyYW5zZmVyZW5jaWEgYmFuY2FyaWEnfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGNvdW50RG93bkNoYW5nZWQoZGlzbWlzc0NvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdhcih0aXBvUGFnbyl7XHJcbiAgICAgICAgICAgIHZhciBydXRhID0gJy9wYWdvLXNvY2lvcydcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVybDogcnV0YSxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICh7cGFnbzogdGlwb1BhZ299KSxcclxuICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b25Tb2Npb3MnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IHRoaXMuZGlzbWlzc1NlY3NcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItbmF2YmFyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgc3RpY2t5OiBcIlwiLFxuICAgICAgICAgICAgdG9nZ2xlYWJsZTogXCJtZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJkYXJrXCIsXG4gICAgICAgICAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1uYXZiYXItdG9nZ2xlXCIsIHsgYXR0cnM6IHsgdGFyZ2V0OiBcIm5hdi1jb2xsYXBzZVwiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItbmF2YmFyLWJyYW5kXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJob21lXCIgfSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWcvYmFsb24ucG5nXCIsIHdpZHRoOiBcIjMwXCIsIGFsdDogXCJiYWxvblwiIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIElGLW9ybcOhdGljb3MgRkNcXG4gICAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sbGFwc2VcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2LWNvbGxhcHNlXCIsIFwiaXMtbmF2XCI6IFwiXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImhvbWVcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb3RpY2lhcyBkZWwgY2x1YlwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJzb2Npb1wiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluc2NyaWJpcnNlIGNvbW8gc29jaW9cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwianVnYWRvclwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluc2NyaWJpcnNlIGNvbW8ganVnYWRvclwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJlbnRyZW5hZG9yXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW52aWFyIHNvbGljaXR1ZCBkZSBlbnRyZW5hZG9yXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHItNVwiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcInBlcmZpbFwiIH0gfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJncm93XCIsIHNtYWxsOiBcIlwiLCB2YXJpYW50OiBcInN1Y2Nlc3NcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE1pIHBlcmZpbFwiKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIi9sb2dvdXRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImZvbnQtYXdlc29tZS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiBcIiNDRDVDNUNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJzaWduLW91dC1hbHRcIiwgc2l6ZTogXCJsZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicm91dGVyLXZpZXdcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlciBjb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIsK/VGllbmVzIGVsIHTDrXR1bG8gZGUgZW50cmVuYWRvcj9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJFbnbDrWFub3NsbyB5IGRpcmlnZSBhIGFsZ3VubyBkZSBudWVzdHJvcyBlcXVpcG9zXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiLWltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1nL2VudHJlbmFkb3IucG5nXCIsIGZsdWlkOiBcIlwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImItZm9ybS1maWxlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3RhdGU6IEJvb2xlYW4oX3ZtLmZpbGUpLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRWxpamEgdW4gYXJjaGl2byBvIGRlc3Bsw6FjZWxvIGFxdcOtLi4uXCIsXG4gICAgICAgICAgICAgICAgICBcImRyb3AtcGxhY2Vob2xkZXJcIjogXCJTb2x0YXIgYXJjaGl2byBhcXXDrS4uLlwiLFxuICAgICAgICAgICAgICAgICAgXCJicm93c2UtdGV4dFwiOiBcIkVsZWdpclwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5maWxlID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1hbGVydFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNob3c6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kaXNtaXNzQ291bnREb3duID0gMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkaXNtaXNzLWNvdW50LWRvd25cIjogX3ZtLmNvdW50RG93bkNoYW5nZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIkVudmlhbmRvIGFyY2hpdm86IFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaXNtaXNzQ291bnREb3duKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIHNlZ3VuZG9zLi4uXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItcHJvZ3Jlc3NcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgIG1heDogX3ZtLmRpc21pc3NTZWNzLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJzdWNjZXNzXCIsIGlkOiBcImJvdG9uRW50cmVuYWRvclwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmVudmlhclRpdHVsbyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW52aWFyXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImItY29udGFpbmVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtdC0yXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNhcm91c2VsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtc2hhZG93XCI6IFwiMHB4IDBweCAycHggIzAwMFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcImNhcm91c2VsLWZhZGVcIixcbiAgICAgICAgICAgIGZhZGU6IFwiXCIsXG4gICAgICAgICAgICBpbmRpY2F0b3JzOiBcIlwiLFxuICAgICAgICAgICAgXCJpbWctd2lkdGhcIjogXCIxMDI0XCIsXG4gICAgICAgICAgICBcImltZy1oZWlnaHRcIjogXCI0ODBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjYXB0aW9uOiBcIkJpZW52ZW5pZEAgYSBudWVzdHJhIHdlYlwiLFxuICAgICAgICAgICAgICBcImltZy1zcmNcIjogXCIvaW1nL2JhbG9uLWRlLWZ1dGJvbC5qcGdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGNhcHRpb246IFwiQ29tcGFydGUgbnVlc3RyYSBwYXNpw7NuXCIsXG4gICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvY2FtcG8uanBnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjYXB0aW9uOiBcIkFxdcOtIGVuY29udHJhcsOhcyBsYXMgbm90aWNpYXMgZGVsIGNsdWJcIixcbiAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiL2ltZy9lc2N1ZWxhLmpwZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgY2FwdGlvbjogXCJSZXN1bHRhZG9zXCIsIFwiaW1nLXNyY1wiOiBcIi9pbWcvZnV0Ym9sLmpwZ1wiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBtYi0zXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItY2FyZC1ncm91cFwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRlY2s6IFwiZGVja1wiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJIaXN0b3JpYSBkZWwgY2x1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbm9jZSBudWVzdHJhIGhpc3RvcmlhXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIkluc3RhbGFjaW9uZXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250ZW1wbGEgbnVlc3RyYXMgaW5zdGFsYWNpb25lc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiUGxhbnRpbGxhc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbm9jZSBudWVzdHJhcyBwbGFudGlsbGFzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcmQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBkZWNrOiBcImRlY2tcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiQ2xhc2lmaWNhY2nDs25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPYnNlcnZhIG51ZXN0cmEgY2xhc2lmaWNhY2nDs24gZW4gbGEgdGFibGFcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIlByw7N4aW1vcyBwYXJ0aWRvc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcXXDrSBwdWVkZXMgdmVyIGNvbnRyYSBxdWllbiBqdWdhbW9zIGVsIHByw7N4aW1vIGVuY3VlbnRyb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJSZXN1bHRhZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTWlyYSBjb21vIG5vcyBoYSBpZG8gZW4gbG9zIMO6bHRpbW9zIHBhcnRpZG9zXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWcvbG9nb19yZmVmLmpwZ1wiLCBhbHQ6IFwibG9nb1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIyNyBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBSRkVGIGFwcnVlYmEgbGEgc3VzcGVuc2nDs24gZGUgdG9kYXMgbGFzIGNvbXBldGljaW9uZXMgbm8gcHJvZmVzaW9uYWxlcyBoYXN0YSBxdWUgbGFzIGF1dG9yaWRhZGVzIGNvbnNpZGVyZW4gcXVlIHNlIHB1ZWRlbiByZWFudWRhciBzaW4gcmllc2dvXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvQ29tdW5pY2Fkb19vZmljaWFsLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJjb211bmljYWRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbXVuaWNhZG8gT2ZpY2lhbCB8IENvcm9uYXZpcnVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjEwIG1hcnpvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZWRhbiBzdXNwZW5kaWRvcyB0b2RvcyBsb3MgZW50cmVuYW1pZW50b3MgZGVzZGUgbWHDsWFuYSBtacOpcmNvbGVzIDExIGRlIG1hcnpvIGRlIDIwMjAgaGFzdGEgbnVldm8gYXZpc28uIExhIFJlYWwgRmVkZXJhY2nDs24gZGUgRsO6dGJvbCBkZSBNYWRyaWQgaGEgYW51bmNpYWRvIGxhIHN1c3BlbnNpw7NuIGRlIGxhcyBjb21wZXRpY2lvbmVzIHRlcnJpdG9yaWFsZXMgZHVyYW50ZSBsYXMgcHLDs3hpbWFzIGRvcyBzZW1hbmFzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL3Jlc3VsdGFkb3MuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInJlc3VsdGFkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVzdWx0YWRvcyBkZWwgZmluIGRlIHNlbWFuYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCI5IG1hcnpvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51ZXN0cm9zIGVxdWlwb3MgY29udGludWFuIGNvbiBsYSBidWVuYSBkaW7DoW1pY2EgZGUgZXN0YXMgw7psdGltYXMgNyBqb3JuYWRhcy4gVHJhcyBlbCB0cm9waWV6byBpbmljaWFsIGEgbGEgdnVlbHRhIGRlIG5hdmlkYWQsIHNlIGN1ZW50YW4gbG9zIHBhcnRpZG9zIHBvciB2aWN0b3JpYS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9wdWVzdG9fZW50cmVuYWRvci5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwicHVlc3RvX2VudHJlbmFkb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUHVlc3RvcyBkZSBlbnRyZW5hZG9yZXMgdmFjYW50ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMiBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5lbW9zIGRpc3BvbmlibGVzIGFsZ3VuYXMgdmFjYW50ZXMgZGUgZW50cmVuYWRvcmVzIGRlIGFsZ3VuYXMgZGUgbnVlc3RyYXMgcGxhbnRpbGxhcywgc2kgdGllbmVzIGVsIHTDrXR1bG8gbWFuZGFsbyB5IGZvcm1hIHBhcnRlIGRlbCBjbHViLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgdGV4dC1jZW50ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlJlbGxlbmEgZXN0ZSBmb3JtdWxhcmlvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiwqF5IMO6bmV0ZSBhIG51ZXN0cm8gZXF1aXBvIVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiY2F0ZWdvcmlhc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhdGVnb3LDrWE6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNhdGVnb3JpYVwiLCBvcHRpb25zOiBfdm0uY2F0ZWdvcmlhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXRlZ29yaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcmlhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2F0ZWdvcmlhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0YWxsYUNhbWlzZXRhXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgY2FtaXNldGE6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRhbGxhQ2FtaXNldGFcIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYUNhbWlzZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhQ2FtaXNldGEgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYUNhbWlzZXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0YWxsYVBhbnRhbG9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgcGFudGFsw7NuOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWxsYVBhbnRhbG9uXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFQYW50YWxvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYVBhbnRhbG9uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFQYW50YWxvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFNZWRpYXNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBtZWRpYXM6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRhbGxhTWVkaWFzXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFNZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFNZWRpYXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYU1lZGlhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFBYnJpZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBhYnJpZ286XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRhbGxhQWJyaWdvXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFBYnJpZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFBYnJpZ28gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYUFicmlnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWV0b2RvUGFnb1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibWV0b2RvUGFnb1wiLCBvcHRpb25zOiBfdm0ucGFnbyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRvZG9QYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldG9kb1BhZ28gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRvZG9QYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc21pc3NDb3VudERvd24gPSAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBhcmNoaXZvOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc21pc3NDb3VudERvd24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIHNlZ3VuZG9zLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLXByb2dyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IF92bS5kaXNtaXNzU2VjcyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBpZDogXCJib3Rvbkp1Z2Fkb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaW5zY3JpYmlySnVnYWRvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0b2RvUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUNhbWlzZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYVBhbnRhbG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYU1lZGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFBYnJpZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhclwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgdGV4dC1jZW50ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItY29udGFpbmVyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICAhX3ZtLnVzdWFyaW8uZmVjaGFOYWNpbWllbnRvXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwiaW5mb1wiLCBkaXNhYmxlZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwgeyBhdHRyczogeyBzbWFsbDogXCJcIiwgdHlwZTogXCJncm93XCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIENhcmdhbmRvLi4uXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS51c3VhcmlvLmZlY2hhTmFjaW1pZW50b1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWF4LXdpZHRoXCI6IFwiNDByZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIk1pIHBlcmZpbFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRlci10ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRlci10YWdcIjogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItYmctdmFyaWFudFwiOiBcImluZm9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLm5vbWJyZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8uYXBlbGxpZG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb21icmU6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJub21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJub21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJ1c3VhcmlvLm5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJub21icmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLm5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXBlbGxpZG9zOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5hcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiYXBlbGxpZG9zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5hcGVsbGlkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1haWw6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiZW1haWxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29udHJhc2XDsWE6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbmZpcm1hciBjb250cmFzZcOxYTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb25maXJtYXJQYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb25maXJtYXJQYXNzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbmZpcm1hclBhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRG5pOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5kbmkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5kbmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiZG5pXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5kbmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZlY2hhIGRlIG5hY2ltaWVudG86XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c3VhcmlvLmZlY2hhTmFjaW1pZW50by5kYXRlLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImRhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmVjaGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZlY2hhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZlY2hhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm8gbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGlyZWNjacOzblwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yIG10LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2FsbGU6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmNhbGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY2FsbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY2FsbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMb2NhbGlkYWQ6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmxvY2FsaWRhZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmxvY2FsaWRhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJsb2NhbGlkYWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmxvY2FsaWRhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvdmluY2lhOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5wcm92aW5jaWEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5wcm92aW5jaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwicHJvdmluY2lhXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5wcm92aW5jaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkPDs2RpZ28gcG9zdGFsOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5jcCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmNwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcImNwXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5jcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZWRpdGFyUGVyZmlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVkaXRhclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWxpbWluYXJQZXJmaWwoX3ZtLnVzdWFyaW8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWxpbWluYXIgY3VlbnRhXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcIm91dGxpbmUtc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hY3R1YWxpemFyUGVyZmlsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c3VhcmlvLm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXN1YXJpby5hcGVsbGlkb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzdWFyaW8uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZlY2hhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c3VhcmlvLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c3VhcmlvLmRuaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXN1YXJpby5jYWxsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXN1YXJpby5sb2NhbGlkYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzdWFyaW8ucHJvdmluY2lhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c3VhcmlvLmNwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBY3R1YWxpemFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcIm91dGxpbmUtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxhclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlciBjb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkNvbnRpZ28gc2VndWltb3MgY3JlY2llbmRvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiwqFIYXp0ZSBzb2NpbyFcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWcvU29jaW9zLmpwZ1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1ldG9kb1BhZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IF92bS5wYWdvLCBpZDogXCJwYWdvU29jaW9zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1ldG9kb1BhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldG9kb1BhZ28gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0b2RvUGFnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzbWlzc2libGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc21pc3NDb3VudERvd24gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc21pc3MtY291bnQtZG93blwiOiBfdm0uY291bnREb3duQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW52aWFuZG8gYXJjaGl2bzogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc21pc3NDb3VudERvd24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgc2VndW5kb3MuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1wcm9ncmVzc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBfdm0uZGlzbWlzc1NlY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiwgaWQ6IFwiYm90b25Tb2Npb3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucGFnYXIoX3ZtLm1ldG9kb1BhZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbnZpYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9