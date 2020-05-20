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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      usuario: [],
      editar: false,
      fecha: '1950-05-15'
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
      this.editar = true; // var ruta = '/editar-usuario'
      // $.ajax({
      //     type: 'POST',
      //     url: ruta,
      //     data: ({pago: tipoPago}),
      //     async: true,
      //     dataType: 'json',
      //     success: function (data) {
      //         console.log(data)
      //     }
      // })
    },
    guardarPerfil: function guardarPerfil() {
      this.editar = false;
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
                        "h3",
                        [
                          _c("b-form-input", {
                            model: {
                              value: _vm.usuario.nombre,
                              callback: function($$v) {
                                _vm.$set(_vm.usuario, "nombre", $$v)
                              },
                              expression: "usuario.nombre"
                            }
                          }),
                          _vm._v(" "),
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
                          _vm.editar
                            ? _c(
                                "b-button",
                                {
                                  attrs: { variant: "outline-success" },
                                  on: { click: _vm.guardarPerfil }
                                },
                                [_vm._v("Guardar")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT82NThhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlP2RmMjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW50cmVuYWRvci52dWU/NjE4ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZT9kMzJiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlPzVmMDgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/MjFlMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hYmNiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlPzYzMzQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlPzdmZjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZT82NzBkIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWU/ZWM0MCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWU/YTk1NyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW50cmVuYWRvci52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGVyZmlsLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hvbWUudnVlPzljODYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84Zjg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzY3MGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/OTYxNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hY2IyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/NDg3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWU/MTc3ZCJdLCJuYW1lcyI6WyJsaWJyYXJ5IiwiYWRkIiwiZmFVc2VyU2VjcmV0IiwiZmFTaWduT3V0QWx0IiwiVnVlIiwiY29tcG9uZW50IiwiRm9udEF3ZXNvbWVJY29uIiwidXNlIiwiQm9vdHN0cmFwVnVlIiwiVnVlUm91dGVyIiwicm91dGVzIiwicGF0aCIsIm5hbWUiLCJIb21lIiwiSnVnYWRvciIsIlNvY2lvIiwiRW50cmVuYWRv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QzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHVCQUF1QixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkNBQTJDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHVCQUF1QixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkNBQTJDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHFCQUFxQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUNBQXlDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHFCQUFxQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xyXG5pbXBvcnQgQm9vdHN0cmFwVnVlIGZyb20gJ2Jvb3RzdHJhcC12dWUnXHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXHJcbmltcG9ydCB7IGZhVXNlclNlY3JldCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFTaWduT3V0QWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJ1xyXG5cclxubGlicmFyeS5hZGQoZmFVc2VyU2VjcmV0KVxyXG5saWJyYXJ5LmFkZChmYVNpZ25PdXRBbHQpXHJcblxyXG5WdWUuY29tcG9uZW50KCdmb250LWF3ZXNvbWUtaWNvbicsIEZvbnRBd2Vzb21lSWNvbilcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lLnZ1ZSdcclxuaW1wb3J0IEp1Z2Fkb3IgZnJvbSAnLi9jb21wb25lbnRzL0p1Z2Fkb3IudnVlJ1xyXG5pbXBvcnQgU29jaW8gZnJvbSAnLi9jb21wb25lbnRzL1NvY2lvLnZ1ZSdcclxuaW1wb3J0IEVudHJlbmFkb3IgZnJvbSAnLi9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlJ1xyXG5pbXBvcnQgUGVyZmlsIGZyb20gJy4vY29tcG9uZW50cy9QZXJmaWwudnVlJ1xyXG5cclxuVnVlLnVzZShCb290c3RyYXBWdWUpXHJcblZ1ZS51c2UoVnVlUm91dGVyKVxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnLycsIG5hbWU6ICdob21lJywgY29tcG9uZW50OiBIb21lIH0sXHJcbiAgICB7IHBhdGg6ICcvanVnYWRvcmVzJywgbmFtZTogJ2p1Z2Fkb3InLCBjb21wb25lbnQ6IEp1Z2Fkb3IgfSxcclxuICAgIHsgcGF0aDogJy9zb2Npb3MnLCBuYW1lOiAnc29jaW8nLCBjb21wb25lbnQ6IFNvY2lvIH0sXHJcbiAgICB7IHBhdGg6ICcvZW50cmVuYWRvcmVzJywgbmFtZTogJ2VudHJlbmFkb3InLCBjb21wb25lbnQ6IEVudHJlbmFkb3IgfSxcclxuICAgIHsgcGF0aDogJy9taXBlcmZpbCcsIG5hbWU6ICdwZXJmaWwnLCBjb21wb25lbnQ6IFBlcmZpbCB9XHJcbl1cclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gICAgcm91dGVzIC8vIHNob3J0IGZvciBgcm91dGVzOiByb3V0ZXNgXHJcbn0pO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjYXBwXCIsXHJcbiAgICBjb21wb25lbnRzOiB7QXBwLCBIb21lLCBKdWdhZG9yLCBTb2NpbywgRW50cmVuYWRvciwgUGVyZmlsfSxcclxuICAgIHJvdXRlclxyXG59KSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xY2RlNWUyM1wiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNkZTVlMjNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxY2RlNWUyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMGUyYjg0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwZTJiODRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZDBlMmI4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRW50cmVuYWRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDBlMmI4NFwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxZWY3MzM0ZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlZjczMzRkJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWVmNzMzNGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEhvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFlZjczMzRkJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWVmNzMzNGQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZCZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2JhYzI0NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjdiYWMyNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjdiYWMyNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YmFjMjQ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjdiYWMyNDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEp1Z2Fkb3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSnVnYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdiYWMyNDRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NDM4Mjc4Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk0MzgyNzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk0MzgyNzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk0MzgyNzhjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTQzODI3OGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFBlcmZpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyZmlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NDM4Mjc4Y1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTgyODUwNmZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTgyODUwNmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTgyODUwNmYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE4Mjg1MDZmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxTb2Npby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgbWItNSB0ZXh0LWNlbnRlciBjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+wr9UaWVuZXMgZWwgdMOtdHVsbyBkZSBlbnRyZW5hZG9yPzwvaDE+XHJcbiAgICAgICAgPGgyPkVudsOtYW5vc2xvIHkgZGlyaWdlIGEgYWxndW5vIGRlIG51ZXN0cm9zIGVxdWlwb3M8L2gyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxiLWltZyBzcmM9XCIvaW1nL2VudHJlbmFkb3IucG5nXCIgZmx1aWQ+PC9iLWltZz4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gU2VsZWNjaW9uYXIgYXJjaGl2byAtLT5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tZmlsZVxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgOnN0YXRlPVwiQm9vbGVhbihmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVsaWphIHVuIGFyY2hpdm8gbyBkZXNwbMOhY2VsbyBhcXXDrS4uLlwiXHJcbiAgICAgICAgICAgICAgICBkcm9wLXBsYWNlaG9sZGVyPVwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgYnJvd3NlLXRleHQ9XCJFbGVnaXJcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJmaWxlXCIgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgID48L2ItZm9ybS1maWxlPlxyXG4gICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+IFxyXG4gICAgICAgICAgICA8Yi1hbGVydFxyXG4gICAgICAgICAgICA6c2hvdz1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICBkaXNtaXNzaWJsZVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgIEBkaXNtaXNzZWQ9XCJkaXNtaXNzQ291bnREb3duPTBcIlxyXG4gICAgICAgICAgICBAZGlzbWlzcy1jb3VudC1kb3duPVwiY291bnREb3duQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+RW52aWFuZG8gYXJjaGl2bzoge3sgZGlzbWlzc0NvdW50RG93biB9fSBzZWd1bmRvcy4uLjwvcD5cclxuICAgICAgICAgICAgPGItcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgIDptYXg9XCJkaXNtaXNzU2Vjc1wiXHJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJkaXNtaXNzQ291bnREb3duXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjRweFwiXHJcbiAgICAgICAgICAgID48L2ItcHJvZ3Jlc3M+XHJcbiAgICAgICAgICAgIDwvYi1hbGVydD5cclxuICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICA8IS0tIEJvdMOzbiBkZSBlbnZpYXItLT5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIGlkPVwiYm90b25FbnRyZW5hZG9yXCIgQGNsaWNrPVwiZW52aWFyVGl0dWxvXCI+RW52aWFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICA8L2Itcm93PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnRW50cmVuYWRvcicsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpbGU6IFtdLFxyXG4gICAgICAgIGRpc21pc3NTZWNzOiAzLFxyXG4gICAgICAgIGRpc21pc3NDb3VudERvd246IDAsXHJcbiAgICAgICAgc2hvd0Rpc21pc3NpYmxlQWxlcnQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBjb3VudERvd25DaGFuZ2VkKGRpc21pc3NDb3VudERvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gZGlzbWlzc0NvdW50RG93blxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW52aWFyVGl0dWxvKCl7XHJcbiAgICAgICAgICAgIHZhciBydXRhID0gJy9lbnZpby10aXR1bG8nXHJcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykuZmlsZXNbMF0pXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHJ1dGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnfSksIDMwMTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8Yi1jb250YWluZXIgY2xhc3M9XCJtdC0yXCI+XHJcbiAgICAgICAgPCEtLSBDYWJlY2VyYSBzbGlkZXMgLS0+XHJcbiAgICAgICAgPGItY2Fyb3VzZWxcclxuICAgICAgICAgICAgaWQ9XCJjYXJvdXNlbC1mYWRlXCJcclxuICAgICAgICAgICAgc3R5bGU9XCJ0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzAwMFwiXHJcbiAgICAgICAgICAgIGZhZGVcclxuICAgICAgICAgICAgaW5kaWNhdG9yc1xyXG4gICAgICAgICAgICBpbWctd2lkdGg9XCIxMDI0XCJcclxuICAgICAgICAgICAgaW1nLWhlaWdodD1cIjQ4MFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgIGNhcHRpb249XCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIlxyXG4gICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvYmFsb24tZGUtZnV0Ym9sLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgIGNhcHRpb249XCJDb21wYXJ0ZSBudWVzdHJhIHBhc2nDs25cIlxyXG4gICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvY2FtcG8uanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbj1cIkFxdcOtIGVuY29udHJhcsOhcyBsYXMgbm90aWNpYXMgZGVsIGNsdWJcIlxyXG4gICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvZXNjdWVsYS5qcGdcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XHJcbiAgICAgICAgICAgIDxiLWNhcm91c2VsLXNsaWRlXHJcbiAgICAgICAgICAgICAgICBjYXB0aW9uPVwiUmVzdWx0YWRvc1wiXHJcbiAgICAgICAgICAgICAgICBpbWctc3JjPVwiL2ltZy9mdXRib2wuanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgIDwvYi1jYXJvdXNlbD5cclxuXHJcbiAgICAgICAgPCEtLSBjYXJkcyBjb24gbm90aWNpYXMgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICA8IS0tIFByaW1lcmEgbMOtbmVhIGRlIGNhcmRzIC0tPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZC1ncm91cCBkZWNrPVwiZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkhpc3RvcmlhIGRlbCBjbHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkNvbm9jZSBudWVzdHJhIGhpc3RvcmlhPC9hPjwvYi1jYXJkLXRleHQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJJbnN0YWxhY2lvbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5Db250ZW1wbGEgbnVlc3RyYXMgaW5zdGFsYWNpb25lczwvYT48L2ItY2FyZC10ZXh0PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUGxhbnRpbGxhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+Q29ub2NlIG51ZXN0cmFzIHBsYW50aWxsYXM8L2E+PC9iLWNhcmQtdGV4dD4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2ItY2FyZC1ncm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFNlZ3VuZGEgbMOtbmVhIGRlIGNhcmRzIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZC1ncm91cCBkZWNrPVwiZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIkNsYXNpZmljYWNpw7NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5PYnNlcnZhIG51ZXN0cmEgY2xhc2lmaWNhY2nDs24gZW4gbGEgdGFibGE8L2E+PC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUHLDs3hpbW9zIHBhcnRpZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5BcXXDrSBwdWVkZXMgdmVyIGNvbnRyYSBxdWllbiBqdWdhbW9zIGVsIHByw7N4aW1vIGVuY3VlbnRybzwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj1cIlJlc3VsdGFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvczwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQtZ3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBub3RpY2lhIFJGRUYtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvbG9nb19yZmVmLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlN1c3BlbnNpw7NuIGRlIGxhcyBjb21wZXRpY2lvbmVzXCIgc3ViLXRpdGxlPVwiMjcgbWFyem8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIFJGRUYgYXBydWViYSBsYSBzdXNwZW5zacOzbiBkZSB0b2RhcyBsYXMgY29tcGV0aWNpb25lcyBubyBwcm9mZXNpb25hbGVzIGhhc3RhIHF1ZSBsYXMgYXV0b3JpZGFkZXMgY29uc2lkZXJlbiBxdWUgc2UgcHVlZGVuIHJlYW51ZGFyIHNpbiByaWVzZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBjb211bmljYWRvIG9maWNpYWwgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL0NvbXVuaWNhZG9fb2ZpY2lhbC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImNvbXVuaWNhZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiIHN1Yi10aXRsZT1cIjEwIG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWVkYW4gc3VzcGVuZGlkb3MgdG9kb3MgbG9zIGVudHJlbmFtaWVudG9zIGRlc2RlIG1hw7FhbmEgbWnDqXJjb2xlcyAxMSBkZSBtYXJ6byBkZSAyMDIwIGhhc3RhIG51ZXZvIGF2aXNvLiBMYSBSZWFsIEZlZGVyYWNpw7NuIGRlIEbDunRib2wgZGUgTWFkcmlkIGhhIGFudW5jaWFkbyBsYSBzdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lcyB0ZXJyaXRvcmlhbGVzIGR1cmFudGUgbGFzIHByw7N4aW1hcyBkb3Mgc2VtYW5hcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSByZXN1bHRhZG9zIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9yZXN1bHRhZG9zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicmVzdWx0YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlJlc3VsdGFkb3MgZGVsIGZpbiBkZSBzZW1hbmFcIiBzdWItdGl0bGU9XCI5IG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWVzdHJvcyBlcXVpcG9zIGNvbnRpbnVhbiBjb24gbGEgYnVlbmEgZGluw6FtaWNhIGRlIGVzdGFzIMO6bHRpbWFzIDcgam9ybmFkYXMuIFRyYXMgZWwgdHJvcGllem8gaW5pY2lhbCBhIGxhIHZ1ZWx0YSBkZSBuYXZpZGFkLCBzZSBjdWVudGFuIGxvcyBwYXJ0aWRvcyBwb3IgdmljdG9yaWEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gUHVlc3RvIGRlIGVudHJlbmFkb3IgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3B1ZXN0b19lbnRyZW5hZG9yLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHVlc3RvX2VudHJlbmFkb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJQdWVzdG9zIGRlIGVudHJlbmFkb3JlcyB2YWNhbnRlc1wiIHN1Yi10aXRsZT1cIjIgbWFyem8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmVtb3MgZGlzcG9uaWJsZXMgYWxndW5hcyB2YWNhbnRlcyBkZSBlbnRyZW5hZG9yZXMgZGUgYWxndW5hcyBkZSBudWVzdHJhcyBwbGFudGlsbGFzLCBzaSB0aWVuZXMgZWwgdMOtdHVsbyBtYW5kYWxvIHkgZm9ybWEgcGFydGUgZGVsIGNsdWIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICA8L2ItY29udGFpbmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNsaWRlOiAwLFxyXG4gICAgICAgIHNsaWRpbmc6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgb25TbGlkZVN0YXJ0KHNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkaW5nID0gdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBvblNsaWRlRW5kKHNsaWRlKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uc2VwYXJhY2lvbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiAgICBcclxuXHJcblxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMT5SZWxsZW5hIGVzdGUgZm9ybXVsYXJpbzwvaDE+XHJcbiAgICAgICAgPGgyPsKheSDDum5ldGUgYSBudWVzdHJvIGVxdWlwbyE8L2gyPiAgXHJcblxyXG4gICAgICAgIDxiLWNvbnRhaW5lciBjbGFzcz1cIm10LTVcIj5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMTogY2F0ZWdvcsOtYSAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2wgbm8tZ3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2F0ZWdvcmlhc1wiPkNhdGVnb3LDrWE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImNhdGVnb3JpYVwiIGlkPVwiY2F0ZWdvcmlhXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMjogdGFsbGEgZGUgY2FtaXNldGEgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYUNhbWlzZXRhXCI+VGFsbGEgZGUgY2FtaXNldGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhQ2FtaXNldGFcIiBpZD1cInRhbGxhQ2FtaXNldGFcIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDM6IHRhbGxhIGRlIHBhbnRhbMOzbiAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhUGFudGFsb25cIj5UYWxsYSBkZSBwYW50YWzDs246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhUGFudGFsb25cIiBpZD1cInRhbGxhUGFudGFsb25cIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDQ6IHRhbGxhIGRlIG1lZGlhcyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhTWVkaWFzXCI+VGFsbGEgZGUgbWVkaWFzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYU1lZGlhc1wiIGlkPVwidGFsbGFNZWRpYXNcIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDU6IHRhbGxhIGRlIGFicmlnbyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhQWJyaWdvXCI+VGFsbGEgZGUgYWJyaWdvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYUFicmlnb1wiIGlkPVwidGFsbGFBYnJpZ29cIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDY6IG3DqXRvZG8gZGUgcGFnbyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1ldG9kb1BhZ29cIj5Nw6l0b2RvIGRlIHBhZ286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cIm1ldG9kb1BhZ29cIiBpZD1cIm1ldG9kb1BhZ29cIiA6b3B0aW9ucz1cInBhZ29cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA3OiBBbGVydGEgYW5pbWFkYSAtLT5cclxuICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGItYWxlcnRcclxuICAgICAgICAgICAgICAgIDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudERvd249MFwiXHJcbiAgICAgICAgICAgICAgICBAZGlzbWlzcy1jb3VudC1kb3duPVwiY291bnREb3duQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5FbnZpYW5kbyBhcmNoaXZvOiB7eyBkaXNtaXNzQ291bnREb3duIH19IHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGItcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOm1heD1cImRpc21pc3NTZWNzXCJcclxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkaXNtaXNzQ291bnREb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0cHhcIlxyXG4gICAgICAgICAgICAgICAgPjwvYi1wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgIDwvYi1hbGVydD5cclxuICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDg6IGVudmlhciAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaWQ9XCJib3Rvbkp1Z2Fkb3JcIiBAY2xpY2s9XCJpbnNjcmliaXJKdWdhZG9yKG1ldG9kb1BhZ28sIGNhdGVnb3JpYSwgdGFsbGFDYW1pc2V0YSwgdGFsbGFQYW50YWxvbiwgdGFsbGFNZWRpYXMsIHRhbGxhQWJyaWdvKVwiPkVudmlhcjwvYi1idXR0b24+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG4gICAgICAgIDwvYi1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdKdWdhZG9yJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWE6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhQ2FtaXNldGE6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhUGFudGFsb246IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhTWVkaWFzOiBudWxsLFxyXG4gICAgICAgICAgICB0YWxsYUFicmlnbzogbnVsbCxcclxuICAgICAgICAgICAgbWV0b2RvUGFnbzogbnVsbCxcclxuICAgICAgICAgICAgZGlzbWlzc1NlY3M6IDMsXHJcbiAgICAgICAgICAgIGRpc21pc3NDb3VudERvd246IDAsXHJcbiAgICAgICAgICAgIHNob3dEaXNtaXNzaWJsZUFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgY2F0ZWdvcmlhczpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIGNhdGVnb3LDrWEnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0JlbmphbWluJywgdGV4dDogJ0JlbmphbcOtbid9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQWxldmluJywgdGV4dDogJ0FsZXbDrW4nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0luZmFudGlsJywgdGV4dDogJ0luZmFudGlsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdDYWRldGUnLCB0ZXh0OiAnQ2FkZXRlJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdKdXZlbmlsJywgdGV4dDogJ0p1dmVuaWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0FmaWNpb25hZG8nLCB0ZXh0OiAnQWZpY2lvbmFkbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVmV0ZXJhbm8nLCB0ZXh0OiAnVmV0ZXJhbm8nfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0YWxsYXM6W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiBudWxsLCB0ZXh0OiAnU2VsZWNjaW9uZSB1bmEgdGFsbGEnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1MnLCB0ZXh0OiAnUyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnTScsIHRleHQ6ICdNJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdMJywgdGV4dDogJ0wnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1hMJywgdGV4dDogJ1hMJ31cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcGFnbzpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIG3DqXRvZG8gZGUgcGFnbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUGF5cGFsJywgdGV4dDogJ1BheXBhbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVGFyamV0YScsIHRleHQ6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1RyYW5zZmVyZW5jaWEnLCB0ZXh0OiAnVHJhbnNmZXJlbmNpYSBiYW5jYXJpYSd9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgY291bnREb3duQ2hhbmdlZChkaXNtaXNzQ291bnREb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IGRpc21pc3NDb3VudERvd25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGluc2NyaWJpckp1Z2Fkb3IoRWxlY2Npb25QYWdvSnVnYWRvciwgRWxlY2Npb25DYXRlZ29yaWEsIEVsZWNjaW9uVGFsbGFDYW1pc2V0YSwgRWxlY2Npb25UYWxsYVBhbnRhbG9uLCBFbGVjY2lvblRhbGxhTWVkaWFzLCBFbGVjY2lvblRhbGxhQWJyaWdvKXtcclxuICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL3BhZ28tanVnYWRvcmVzJ1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogKHtwYWdvSnVnYWRvcjogRWxlY2Npb25QYWdvSnVnYWRvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYTogRWxlY2Npb25DYXRlZ29yaWEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhbGxhQ2FtaXNldGE6IEVsZWNjaW9uVGFsbGFDYW1pc2V0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFQYW50YWxvbjogRWxlY2Npb25UYWxsYVBhbnRhbG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWxsYU1lZGlhczogRWxlY2Npb25UYWxsYU1lZGlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFBYnJpZ286IEVsZWNjaW9uVGFsbGFBYnJpZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3Rvbkp1Z2Fkb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IHRoaXMuZGlzbWlzc1NlY3NcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxiLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJpbmZvXCIgZGlzYWJsZWQgdi1pZj1cIiF1c3VhcmlvLmZlY2hhTmFjaW1pZW50b1wiPlxyXG4gICAgICAgICAgICAgICAgPGItc3Bpbm5lciBzbWFsbCB0eXBlPVwiZ3Jvd1wiPjwvYi1zcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgQ2FyZ2FuZG8uLi5cclxuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwiTWkgcGVyZmlsXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlci10ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBoZWFkZXItdGFnPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlci1iZy12YXJpYW50PVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogNDByZW07XCJcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJ1c3VhcmlvLmZlY2hhTmFjaW1pZW50b1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMyB2LWlmPVwiIWVkaXRhclwiPnt7IHVzdWFyaW8ubm9tYnJlIH19IHt7IHVzdWFyaW8uYXBlbGxpZG9zIH19PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMyB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5ub21icmVcIj48L2ItZm9ybS1pbnB1dD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5hcGVsbGlkb3NcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkVtYWlsOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uZW1haWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmVtYWlsXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkRuaTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmRuaSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8uZG5pXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkZlY2hhIGRlIG5hY2ltaWVudG86PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoMCwxMCl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cImZlY2hhXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvIG1iLTVcIj5EaXJlY2Npw7NuPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkNhbGxlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uY2FsbGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmNhbGxlXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkxvY2FsaWRhZDo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmxvY2FsaWRhZCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8ubG9jYWxpZGFkXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlByb3ZpbmNpYTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLnByb3ZpbmNpYSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5wcm92aW5jaWFcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Q8OzZGlnbyBwb3N0YWw6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5jcCB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5jcFwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgdi1pZj1cIiFlZGl0YXJcIiBAY2xpY2s9XCJlZGl0YXJQZXJmaWxcIj5FZGl0YXI8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHYtaWY9XCJlZGl0YXJcIiBAY2xpY2s9XCJndWFyZGFyUGVyZmlsXCI+R3VhcmRhcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgPC9iLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgICAgICAgdXN1YXJpbzogW10sXHJcbiAgICAgICAgICAgIGVkaXRhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGZlY2hhOiAnMTk1MC0wNS0xNSdcclxuICAgICAgICB9KSxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgIC5nZXQoJy9taXNkYXRvcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZWRpdGFyUGVyZmlsKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIHJ1dGEgPSAnL2VkaXRhci11c3VhcmlvJ1xyXG4gICAgICAgICAgICAgICAgLy8gJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRhdGE6ICh7cGFnbzogdGlwb1BhZ299KSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3VhcmRhclBlcmZpbCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIm10LTUgbWItNSB0ZXh0LWNlbnRlciBjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+Q29udGlnbyBzZWd1aW1vcyBjcmVjaWVuZG88L2gxPlxyXG4gICAgICAgIDxoMj7CoUhhenRlIHNvY2lvITwvaDI+XHJcblxyXG4gICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTVcIj5cclxuICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZyBzcmM9XCIvaW1nL1NvY2lvcy5qcGdcIj48L2ItY2FyZC1pbWc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTcOpdGlkbyBkZSBwYWdvIC0tPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIiB2LWlmPVwiIWRpc21pc3NDb3VudERvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1ldG9kb1BhZ29cIj5Nw6l0b2RvIGRlIHBhZ286PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cIm1ldG9kb1BhZ29cIiA6b3B0aW9ucz1cInBhZ29cIiBpZD1cInBhZ29Tb2Npb3NcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEFsZXJ0IGFuaW1hZGEgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1hbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6c2hvdz1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkaXNtaXNzZWQ9XCJkaXNtaXNzQ291bnREb3duPTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZGlzbWlzcy1jb3VudC1kb3duPVwiY291bnREb3duQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW52aWFuZG8gYXJjaGl2bzoge3sgZGlzbWlzc0NvdW50RG93biB9fSBzZWd1bmRvcy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptYXg9XCJkaXNtaXNzU2Vjc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkaXNtaXNzQ291bnREb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ItcHJvZ3Jlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1hbGVydD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGJvdG9uIGVudmlhciAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGlkPVwiYm90b25Tb2Npb3NcIiBAY2xpY2s9XCJwYWdhcihtZXRvZG9QYWdvKVwiPkVudmlhcjwvYi1idXR0b24+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgPC9iLWNvbD4gICAgICAgICAgICBcclxuICAgICAgICA8L2Itcm93PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnU29jaW8nLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldG9kb1BhZ286IG51bGwsXHJcbiAgICAgICAgICAgIGRpc21pc3NTZWNzOiAzLFxyXG4gICAgICAgICAgICBkaXNtaXNzQ291bnREb3duOiAwLFxyXG4gICAgICAgICAgICBzaG93RGlzbWlzc2libGVBbGVydDogZmFsc2UsXHJcbiAgICAgICAgICAgICBwYWdvOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW4gbcOpdG9kbyBkZSBwYWdvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdQYXlwYWwnLCB0ZXh0OiAnUGF5cGFsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdUYXJqZXRhJywgdGV4dDogJ1RhcmpldGEgY3LDqWRpdG8vZMOpYml0byd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVHJhbnNmZXJlbmNpYScsIHRleHQ6ICdUcmFuc2ZlcmVuY2lhIGJhbmNhcmlhJ31cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBjb3VudERvd25DaGFuZ2VkKGRpc21pc3NDb3VudERvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gZGlzbWlzc0NvdW50RG93blxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnYXIodGlwb1BhZ28pe1xyXG4gICAgICAgICAgICB2YXIgcnV0YSA9ICcvcGFnby1zb2Npb3MnXHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHJ1dGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAoe3BhZ286IHRpcG9QYWdvfSksXHJcbiAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdG9uU29jaW9zJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZSd9KSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLW5hdmJhclwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHN0aWNreTogXCJcIixcbiAgICAgICAgICAgIHRvZ2dsZWFibGU6IFwibWRcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZGFya1wiLFxuICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImItbmF2YmFyLXRvZ2dsZVwiLCB7IGF0dHJzOiB7IHRhcmdldDogXCJuYXYtY29sbGFwc2VcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLW5hdmJhci1icmFuZFwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2JhbG9uLnBuZ1wiLCB3aWR0aDogXCIzMFwiLCBhbHQ6IFwiYmFsb25cIiB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBJRi1vcm3DoXRpY29zIEZDXFxuICAgICAgICBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbGxhcHNlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm5hdi1jb2xsYXBzZVwiLCBcImlzLW5hdlwiOiBcIlwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1uYXZiYXItbmF2XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLW5hdi1pdGVtXCIsIHsgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJob21lXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm90aWNpYXMgZGVsIGNsdWJcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwic29jaW9cIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbnNjcmliaXJzZSBjb21vIHNvY2lvXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImp1Z2Fkb3JcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbnNjcmliaXJzZSBjb21vIGp1Z2Fkb3JcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZW50cmVuYWRvclwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVudmlhciBzb2xpY2l0dWQgZGUgZW50cmVuYWRvclwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInByLTVcIiwgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJwZXJmaWxcIiB9IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZ3Jvd1wiLCBzbWFsbDogXCJcIiwgdmFyaWFudDogXCJzdWNjZXNzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBNaSBwZXJmaWxcIilcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCIvbG9nb3V0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmb250LWF3ZXNvbWUtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogXCIjQ0Q1QzVDXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwic2lnbi1vdXQtYWx0XCIsIHNpemU6IFwibGdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInJvdXRlci12aWV3XCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtdC01IG1iLTUgdGV4dC1jZW50ZXIgY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLCv1RpZW5lcyBlbCB0w610dWxvIGRlIGVudHJlbmFkb3I/XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiRW52w61hbm9zbG8geSBkaXJpZ2UgYSBhbGd1bm8gZGUgbnVlc3Ryb3MgZXF1aXBvc1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYi1pbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltZy9lbnRyZW5hZG9yLnBuZ1wiLCBmbHVpZDogXCJcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tZmlsZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0YXRlOiBCb29sZWFuKF92bS5maWxlKSxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVsaWphIHVuIGFyY2hpdm8gbyBkZXNwbMOhY2VsbyBhcXXDrS4uLlwiLFxuICAgICAgICAgICAgICAgICAgXCJkcm9wLXBsYWNlaG9sZGVyXCI6IFwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIixcbiAgICAgICAgICAgICAgICAgIFwiYnJvd3NlLXRleHRcIjogXCJFbGVnaXJcIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWxlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItYWxlcnRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZGlzbWlzc0NvdW50RG93biA9IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBhcmNoaXZvOiBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzbWlzc0NvdW50RG93bikgK1xuICAgICAgICAgICAgICAgICAgICBcIiBzZWd1bmRvcy4uLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLXByb2dyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICBtYXg6IF92bS5kaXNtaXNzU2VjcyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwic3VjY2Vzc1wiLCBpZDogXCJib3RvbkVudHJlbmFkb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbnZpYXJUaXR1bG8gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhclwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJiLWNvbnRhaW5lclwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYi1jYXJvdXNlbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LXNoYWRvd1wiOiBcIjBweCAwcHggMnB4ICMwMDBcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJjYXJvdXNlbC1mYWRlXCIsXG4gICAgICAgICAgICBmYWRlOiBcIlwiLFxuICAgICAgICAgICAgaW5kaWNhdG9yczogXCJcIixcbiAgICAgICAgICAgIFwiaW1nLXdpZHRoXCI6IFwiMTAyNFwiLFxuICAgICAgICAgICAgXCJpbWctaGVpZ2h0XCI6IFwiNDgwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY2FwdGlvbjogXCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIixcbiAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiL2ltZy9iYWxvbi1kZS1mdXRib2wuanBnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBjYXB0aW9uOiBcIkNvbXBhcnRlIG51ZXN0cmEgcGFzacOzblwiLFxuICAgICAgICAgICAgICBcImltZy1zcmNcIjogXCIvaW1nL2NhbXBvLmpwZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY2FwdGlvbjogXCJBcXXDrSBlbmNvbnRyYXLDoXMgbGFzIG5vdGljaWFzIGRlbCBjbHViXCIsXG4gICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvZXNjdWVsYS5qcGdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGNhcHRpb246IFwiUmVzdWx0YWRvc1wiLCBcImltZy1zcmNcIjogXCIvaW1nL2Z1dGJvbC5qcGdcIiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTMgbWItM1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcmQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBkZWNrOiBcImRlY2tcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiSGlzdG9yaWEgZGVsIGNsdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25vY2UgbnVlc3RyYSBoaXN0b3JpYVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwic2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJJbnN0YWxhY2lvbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGVtcGxhIG51ZXN0cmFzIGluc3RhbGFjaW9uZXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIlBsYW50aWxsYXNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25vY2UgbnVlc3RyYXMgcGxhbnRpbGxhc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1jYXJkLWdyb3VwXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgZGVjazogXCJkZWNrXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIkNsYXNpZmljYWNpw7NuXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT2JzZXJ2YSBudWVzdHJhIGNsYXNpZmljYWNpw7NuIGVuIGxhIHRhYmxhXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJQcsOzeGltb3MgcGFydGlkb3NcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXF1w60gcHVlZGVzIHZlciBjb250cmEgcXVpZW4ganVnYW1vcyBlbCBwcsOzeGltbyBlbmN1ZW50cm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcImRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiUmVzdWx0YWRvc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2xvZ29fcmZlZi5qcGdcIiwgYWx0OiBcImxvZ29cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VzcGVuc2nDs24gZGUgbGFzIGNvbXBldGljaW9uZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMjcgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGEgUkZFRiBhcHJ1ZWJhIGxhIHN1c3BlbnNpw7NuIGRlIHRvZGFzIGxhcyBjb21wZXRpY2lvbmVzIG5vIHByb2Zlc2lvbmFsZXMgaGFzdGEgcXVlIGxhcyBhdXRvcmlkYWRlcyBjb25zaWRlcmVuIHF1ZSBzZSBwdWVkZW4gcmVhbnVkYXIgc2luIHJpZXNnb1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL0NvbXVuaWNhZG9fb2ZpY2lhbC5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiY29tdW5pY2Fkb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIxMCBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWVkYW4gc3VzcGVuZGlkb3MgdG9kb3MgbG9zIGVudHJlbmFtaWVudG9zIGRlc2RlIG1hw7FhbmEgbWnDqXJjb2xlcyAxMSBkZSBtYXJ6byBkZSAyMDIwIGhhc3RhIG51ZXZvIGF2aXNvLiBMYSBSZWFsIEZlZGVyYWNpw7NuIGRlIEbDunRib2wgZGUgTWFkcmlkIGhhIGFudW5jaWFkbyBsYSBzdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lcyB0ZXJyaXRvcmlhbGVzIGR1cmFudGUgbGFzIHByw7N4aW1hcyBkb3Mgc2VtYW5hcy5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9yZXN1bHRhZG9zLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJyZXN1bHRhZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlc3VsdGFkb3MgZGVsIGZpbiBkZSBzZW1hbmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiOSBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdWVzdHJvcyBlcXVpcG9zIGNvbnRpbnVhbiBjb24gbGEgYnVlbmEgZGluw6FtaWNhIGRlIGVzdGFzIMO6bHRpbWFzIDcgam9ybmFkYXMuIFRyYXMgZWwgdHJvcGllem8gaW5pY2lhbCBhIGxhIHZ1ZWx0YSBkZSBuYXZpZGFkLCBzZSBjdWVudGFuIGxvcyBwYXJ0aWRvcyBwb3IgdmljdG9yaWEuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvcHVlc3RvX2VudHJlbmFkb3IuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInB1ZXN0b19lbnRyZW5hZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1ZXN0b3MgZGUgZW50cmVuYWRvcmVzIHZhY2FudGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjIgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVuZW1vcyBkaXNwb25pYmxlcyBhbGd1bmFzIHZhY2FudGVzIGRlIGVudHJlbmFkb3JlcyBkZSBhbGd1bmFzIGRlIG51ZXN0cmFzIHBsYW50aWxsYXMsIHNpIHRpZW5lcyBlbCB0w610dWxvIG1hbmRhbG8geSBmb3JtYSBwYXJ0ZSBkZWwgY2x1Yi5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtdC01IHRleHQtY2VudGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJSZWxsZW5hIGVzdGUgZm9ybXVsYXJpb1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIsKheSDDum5ldGUgYSBudWVzdHJvIGVxdWlwbyFcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImNhdGVnb3JpYXNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDYXRlZ29yw61hOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjYXRlZ29yaWFcIiwgb3B0aW9uczogX3ZtLmNhdGVnb3JpYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3JpYSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhdGVnb3JpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFDYW1pc2V0YVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIGNhbWlzZXRhOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWxsYUNhbWlzZXRhXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFDYW1pc2V0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUNhbWlzZXRhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFDYW1pc2V0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFQYW50YWxvblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIHBhbnRhbMOzbjpcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidGFsbGFQYW50YWxvblwiLCBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhbGxhUGFudGFsb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFQYW50YWxvbiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhbGxhUGFudGFsb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhTWVkaWFzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgbWVkaWFzOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWxsYU1lZGlhc1wiLCBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhbGxhTWVkaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhTWVkaWFzID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFNZWRpYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhQWJyaWdvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgYWJyaWdvOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0YWxsYUFicmlnb1wiLCBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhbGxhQWJyaWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhQWJyaWdvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFBYnJpZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1ldG9kb1BhZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNw6l0b2RvIGRlIHBhZ286XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm1ldG9kb1BhZ29cIiwgb3B0aW9uczogX3ZtLnBhZ28gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0b2RvUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRvZG9QYWdvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0b2RvUGFnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1hbGVydFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNtaXNzQ291bnREb3duID0gMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImRpc21pc3MtY291bnQtZG93blwiOiBfdm0uY291bnREb3duQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiRW52aWFuZG8gYXJjaGl2bzogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaXNtaXNzQ291bnREb3duKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBzZWd1bmRvcy4uLlwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1wcm9ncmVzc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWF4OiBfdm0uZGlzbWlzc1NlY3MsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0cHhcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiwgaWQ6IFwiYm90b25KdWdhZG9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmluc2NyaWJpckp1Z2Fkb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldG9kb1BhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3JpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFDYW1pc2V0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFQYW50YWxvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFNZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhQWJyaWdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbnZpYXJcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtdC01IHRleHQtY2VudGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICBbXG4gICAgICAgICAgIV92bS51c3VhcmlvLmZlY2hhTmFjaW1pZW50b1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YXJpYW50OiBcImluZm9cIiwgZGlzYWJsZWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1zcGlubmVyXCIsIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIsIHR5cGU6IFwiZ3Jvd1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBDYXJnYW5kby4uLlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udXN1YXJpby5mZWNoYU5hY2ltaWVudG9cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1heC13aWR0aFwiOiBcIjQwcmVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJNaSBwZXJmaWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItdGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItdGFnXCI6IFwiaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyLWJnLXZhcmlhbnRcIjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5ub21icmUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmFwZWxsaWRvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8ubm9tYnJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJub21icmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5ub21icmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmFwZWxsaWRvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiYXBlbGxpZG9zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8uYXBlbGxpZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1haWw6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiZW1haWxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEbmk6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmRuaSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmRuaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJkbmlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmRuaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmVjaGEgZGUgbmFjaW1pZW50bzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzdWFyaW8uZmVjaGFOYWNpbWllbnRvLmRhdGUuc3Vic3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmVjaGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZlY2hhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZlY2hhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm8gbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGlyZWNjacOzblwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yIG10LTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2FsbGU6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmNhbGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY2FsbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY2FsbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMb2NhbGlkYWQ6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmxvY2FsaWRhZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmxvY2FsaWRhZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJsb2NhbGlkYWRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmxvY2FsaWRhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUHJvdmluY2lhOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5wcm92aW5jaWEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5wcm92aW5jaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwicHJvdmluY2lhXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5wcm92aW5jaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkPDs2RpZ28gcG9zdGFsOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5jcCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmNwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcImNwXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5jcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZWRpdGFyUGVyZmlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVkaXRhclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLXN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ3VhcmRhclBlcmZpbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHdWFyZGFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi01IHRleHQtY2VudGVyIGNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiQ29udGlnbyBzZWd1aW1vcyBjcmVjaWVuZG9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLCoUhhenRlIHNvY2lvIVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltZy9Tb2Npb3MuanBnXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWV0b2RvUGFnb1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTcOpdG9kbyBkZSBwYWdvOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnBhZ28sIGlkOiBcInBhZ29Tb2Npb3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWV0b2RvUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0b2RvUGFnbyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRvZG9QYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzbWlzc0NvdW50RG93biA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBhcmNoaXZvOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzbWlzc0NvdW50RG93bikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBzZWd1bmRvcy4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXByb2dyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IF92bS5kaXNtaXNzU2VjcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBpZDogXCJib3RvblNvY2lvc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wYWdhcihfdm0ubWV0b2RvUGFnbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=