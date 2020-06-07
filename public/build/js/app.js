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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Entrenador',
  data: function data() {
    return {
      file: [],
      okEntrenador: false,
      dismissSecs: 3,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  computed: {},
  methods: {
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    enviarTitulo: function enviarTitulo() {
      var _this = this;

      var entrenadorError = document.getElementById("entrenadorError");
      var enviar = document.getElementById("botonEntrenador");
      var file = document.getElementById("file");

      if (document.getElementById('file').files[0]) {
        entrenadorError.innerHTML = "";
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
        document.getElementById('botonEntrenador').style.display = 'none';
        this.dismissCountDown = this.dismissSecs;
        setTimeout(function () {
          return _this.$router.push({
            name: 'home'
          });
        }, 3010);
      } else {
        file.style.borderColor = "red";
        entrenadorError.style.color = "red";
        entrenadorError.innerHTML = "Debes seleccionar un archivo";
        console.log('NO Existe');
      }
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      copyright: false,
      eliminar: '',
      eliminarSocio: '',
      eliminarJugador: '',
      eliminarEntrenador: '',
      fecha: '',
      confirmarPass: '',
      contraseñaGuardada: '',
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
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/misdatos').then(function (response) {
      return _this.usuario = response.data, _this.parrafo = true, _this.copyright = true;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/datos-jugadores').then(function (response) {
      if (response.data.id) {
        _this.jugador = response.data, _this.existeJugador = true;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/datos-socios').then(function (response) {
      if (response.data.id) {
        _this.socio = response.data, _this.existeSocio = true;
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/datos-entrenadores').then(function (response) {
      if (response.data.id) {
        _this.entrenador = response.data, _this.existeEntrenador = true;
      }
    });
  },
  methods: {
    editarPerfil: function editarPerfil() {
      this.editar = true;
      this.parrafo = false;
      this.fecha = this.usuario.fechaNacimiento.date.substring(0, 10);
      this.$nextTick(function () {
        // Puntero body
        document.querySelector('body').style.cursor = "pointer"; // Variables del formulario

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
        var botonSave = document.getElementById("saveChanges"); // Errores de las variables

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

        var nombreFill = false;
        var apellidosFill = false;
        var dniFill = false;
        var emailFill = false;
        var contraseñaFill = false;
        var confirmarContraseñaFill = false;
        var fechaNacimientoFill = false;
        var calleFill = false;
        var localidadFill = false;
        var provinciaFill = false;
        var cpFill = false; // Ok validaciones

        var okCategoria = false;
        var okCamiseta = false;
        var okPantalon = false;
        var okMedias = false;
        var okAbrigo = false;
        var okPagoJugador = false;
        console.log(this.usuario.password);
        this.usuario.password = null;
        console.log(this.usuario.password); // Validación: mostrar contraseña

        if (confirmarPassword.value == "") {
          saveChanges.style.cursor = "not-allowed";
          saveChanges.disabled = true;
        } else {
          saveChanges.style.cursor = "pointer";
          saveChanges.disabled = false;
        }

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
        }; // Validación: Nombre


        nombreError.innerHTML = "";

        usuarioNombre.onkeyup = function () {
          var regExpNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpNombre.test(usuarioNombre.value)) {
            nombreError.innerHTML = "";
            usuarioNombre.style.borderColor = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpNombre.test(usuarioNombre.value)) {
            nombreError.style.color = "red";
            nombreError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioNombre.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioNombre.value == "") {
            nombreError.style.color = "red";
            nombreError.innerHTML = "El campo no puede estar vacío";
            usuarioNombre.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }
        }; // Validación: Apellidos


        apellidosError.innerHTML = "";

        usuarioApellidos.onkeyup = function () {
          var regExpApellidos = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpApellidos.test(usuarioApellidos.value)) {
            apellidosError.innerHTML = "";
            usuarioApellidos.style.borderColor = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpApellidos.test(usuarioApellidos.value)) {
            apellidosError.style.color = "red";
            apellidosError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioApellidos.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioApellidos.value == "") {
            apellidosError.style.color = "red";
            apellidosError.innerHTML = "El campo no puede estar vacío";
            usuarioApellidos.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
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
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpDni.test(usuarioDni.value)) {
            dniError.style.color = "red";
            dniError.innerHTML = "El campo debe contener 8 números y 1 letra válida";
            usuarioDni.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioDni.value == "") {
            dniError.style.color = "red";
            dniError.innerHTML = "El campo no puede estar vacío";
            usuarioDni.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }
        }; // Validación: Email


        emailError.innerHTML = "";

        usuarioEmail.onkeyup = function () {
          var regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;

          if (regExpEmail.test(usuarioEmail.value)) {
            emailError.innerHTML = "";
            usuarioEmail.style.borderColor = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpEmail.test(usuarioEmail.value)) {
            emailError.style.color = "red";
            emailError.innerHTML = "El campo debe tener formato email";
            usuarioEmail.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioEmail.value == "") {
            emailError.style.color = "red";
            emailError.innerHTML = "El campo no puede estar vacío";
            usuarioEmail.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }
        }; // Validación: Confirmar contraseña 


        confirmPasswordError.innerHTML = "";

        confirmarPassword.onkeyup = function () {
          if (confirmarPassword.value != usuarioPassword.value) {
            confirmPasswordError.style.color = "red";
            confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
            confirmarPassword.style.borderColor = "red";
          } else {
            confirmPasswordError.innerHTML = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
            confirmarPassword.style.borderColor = "";
          }
        }; // Validación: Calle


        calleError.innerHTML = "";

        usuarioCalle.onkeyup = function () {
          var regExpCalle = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+[0-9]+$/;

          if (regExpCalle.test(usuarioCalle.value)) {
            calleError.innerHTML = "";
            usuarioCalle.style.borderColor = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpCalle.test(usuarioCalle.value)) {
            calleError.style.color = "red";
            calleError.innerHTML = "El campo debe tener una cadena de caracteres y un número";
            usuarioCalle.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioCalle.value == "") {
            calleError.style.color = "red";
            calleError.innerHTML = "El campo no puede estar vacío";
            usuarioCalle.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }
        }; // Validación: Localidad


        localidadError.innerHTML = "";

        usuarioLocalidad.onkeyup = function () {
          var regExpLocalidad = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpLocalidad.test(usuarioLocalidad.value)) {
            localidadError.innerHTML = "";
            usuarioLocalidad.style.borderColor = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpLocalidad.test(usuarioLocalidad.value)) {
            localidadError.style.color = "red";
            localidadError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioLocalidad.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioLocalidad.value == "") {
            localidadError.style.color = "red";
            localidadError.innerHTML = "El campo no puede estar vacío";
            usuarioLocalidad.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }
        }; // Validación: Provincia


        provinciaError.innerHTML = "";

        usuarioProvincia.onkeyup = function () {
          var regExpLocalidad = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

          if (regExpLocalidad.test(usuarioProvincia.value)) {
            provinciaError.innerHTML = "";
            usuarioProvincia.style.borderColor = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpLocalidad.test(usuarioProvincia.value)) {
            provinciaError.style.color = "red";
            provinciaError.innerHTML = "El campo debe tener una cadena de caracteres";
            usuarioProvincia.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioProvincia.value == "") {
            provinciaError.style.color = "red";
            provinciaError.innerHTML = "El campo no puede estar vacío";
            usuarioProvincia.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }
        }; // Validación: CP


        cpError.innerHTML = "";

        usuarioCp.onkeyup = function () {
          var regExpCp = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;

          if (regExpCp.test(usuarioCp.value)) {
            cpError.innerHTML = "";
            usuarioCp.style.borderColor = "";
            saveChanges.style.cursor = "pointer";
            saveChanges.disabled = false;
          }

          if (!regExpCp.test(usuarioCp.value)) {
            cpError.style.color = "red";
            cpError.innerHTML = "El campo debe tener 5 numeros comprendidos entre 01000 y 52999";
            usuarioCp.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }

          if (usuarioCp.value == "") {
            cpError.style.color = "red";
            cpError.innerHTML = "El campo no puede estar vacío";
            usuarioCp.style.borderColor = "red";
            saveChanges.style.cursor = "not-allowed";
            saveChanges.disabled = true;
          }
        };
      });
    },
    cancelarEdicion: function cancelarEdicion() {
      this.editar = false;
      this.parrafo = true;
      this.$nextTick(function () {
        document.getElementById('edicion').disabled = false;
        document.getElementById('edicion').style.cursor = 'pointer';
      });
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
      if (this.nombreFill && this.apellidosFill && this.dniFill && this.emailFill && this.contraseñaFill && this.confirmarContraseñaFill && this.fechaNacimientoFill && this.calleFill && this.localidadFill && this.provinciaFill && this.cpFill) {
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
                              _c("span", { attrs: { id: "nombreError" } })
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
                              _c("span", { attrs: { id: "apellidosError" } })
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
                              _c("span", { attrs: { id: "emailError" } })
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
                              _c("span", { attrs: { id: "passwordError" } })
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
                              _c("span", { attrs: { id: "dniError" } })
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
                              _c("span", { attrs: { id: "calleError" } })
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
                              _c("span", { attrs: { id: "localidadError" } })
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
                              _c("span", { attrs: { id: "provinciaError" } })
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
                              _c("span", { attrs: { id: "cpError" } })
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
                                        attrs: { options: _vm.categorias },
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
                                        attrs: { options: _vm.tallas },
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
                                        attrs: { options: _vm.tallas },
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
                                        attrs: { options: _vm.tallas },
                                        model: {
                                          value: _vm.jugador.medias,
                                          callback: function($$v) {
                                            _vm.$set(_vm.jugador, "medias", $$v)
                                          },
                                          expression: "jugador.medias"
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
                                        attrs: { options: _vm.tallas },
                                        model: {
                                          value: _vm.jugador.abrigo,
                                          callback: function($$v) {
                                            _vm.$set(_vm.jugador, "abrigo", $$v)
                                          },
                                          expression: "jugador.abrigo"
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
                                        attrs: { options: _vm.pago },
                                        model: {
                                          value: _vm.jugador.pago,
                                          callback: function($$v) {
                                            _vm.$set(_vm.jugador, "pago", $$v)
                                          },
                                          expression: "jugador.pago"
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
                                        attrs: { options: _vm.pago },
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
                                          attrs: { variant: "outline-success" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT8zNDFmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/NjU4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZT9kZjIxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzYxOGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/ZDMyYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZT9jY2I0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlP2FiY2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSnVnYWRvci52dWU/NjMzNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/N2ZmNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlPzY3MGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUG9saXRpY2FDb29raWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlPzA1NTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9lYzQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9hOTU3Iiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84Zjg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzY3MGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/NjlhMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hY2IyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/NDg3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlPzdiMDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlPzE3N2QiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhVXNlclNlY3JldCIsImZhU2lnbk91dEFsdCIsIlZ1ZSIsImNvbXBvbmVudCIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZSIsIkJvb3RzdHJhcFZ1ZSIsIlZ1ZVJvdXRlciIsInJvdXRlcyIsInBhdGgiLCJuYW1lIiwiSG9tZSIsIkp1Z2Fkb3IiLCJTb2NpbyIsIkVudHJlbmFkb3IiLCJQZXJmaWwiLCJQb2xpdGljYUNvb2tpZXMiLCJyb3V0ZXIiLCJlbCIsImNvbXBvbmVudHMiLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEseUVBQU8sQ0FBQ0MsR0FBUixDQUFZQyw4RUFBWjtBQUNBRix5RUFBTyxDQUFDQyxHQUFSLENBQVlFLDhFQUFaO0FBRUFDLDJDQUFHLENBQUNDLFNBQUosQ0FBYyxtQkFBZCxFQUFtQ0MsNEVBQW5DO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUYsMkNBQUcsQ0FBQ0csR0FBSixDQUFRQyxxREFBUjtBQUNBSiwyQ0FBRyxDQUFDRyxHQUFKLENBQVFFLGtEQUFSO0FBRUEsSUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFBRUMsTUFBSSxFQUFFLEdBQVI7QUFBYUMsTUFBSSxFQUFFLE1BQW5CO0FBQTJCUCxXQUFTLEVBQUVRLDREQUFJQTtBQUExQyxDQURXLEVBRVg7QUFBRUYsTUFBSSxFQUFFLFlBQVI7QUFBc0JDLE1BQUksRUFBRSxTQUE1QjtBQUF1Q1AsV0FBUyxFQUFFUyxnRUFBT0E7QUFBekQsQ0FGVyxFQUdYO0FBQUVILE1BQUksRUFBRSxTQUFSO0FBQW1CQyxNQUFJLEVBQUUsT0FB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QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBeEJBLENBN0VBLENBdUdBOzs7QUFDQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBdkJBLENBekdBLENBa0lBOzs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0EzQkEsQ0FwSUEsQ0FpS0E7OztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F0QkEsQ0FuS0EsQ0EyTEE7OztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBYkEsQ0E3TEEsQ0E0TUE7OztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F0QkEsQ0E5TUEsQ0FzT0E7OztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F0QkEsQ0F4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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0NBQXdDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xyXG5pbXBvcnQgQm9vdHN0cmFwVnVlIGZyb20gJ2Jvb3RzdHJhcC12dWUnXHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXHJcbmltcG9ydCB7IGZhVXNlclNlY3JldCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFTaWduT3V0QWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJ1xyXG5cclxubGlicmFyeS5hZGQoZmFVc2VyU2VjcmV0KVxyXG5saWJyYXJ5LmFkZChmYVNpZ25PdXRBbHQpXHJcblxyXG5WdWUuY29tcG9uZW50KCdmb250LWF3ZXNvbWUtaWNvbicsIEZvbnRBd2Vzb21lSWNvbilcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lLnZ1ZSdcclxuaW1wb3J0IEp1Z2Fkb3IgZnJvbSAnLi9jb21wb25lbnRzL0p1Z2Fkb3IudnVlJ1xyXG5pbXBvcnQgU29jaW8gZnJvbSAnLi9jb21wb25lbnRzL1NvY2lvLnZ1ZSdcclxuaW1wb3J0IEVudHJlbmFkb3IgZnJvbSAnLi9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlJ1xyXG5pbXBvcnQgUGVyZmlsIGZyb20gJy4vY29tcG9uZW50cy9QZXJmaWwudnVlJ1xyXG5pbXBvcnQgUG9saXRpY2FDb29raWVzIGZyb20gJy4vY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlJ1xyXG5cclxuVnVlLnVzZShCb290c3RyYXBWdWUpXHJcblZ1ZS51c2UoVnVlUm91dGVyKVxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnLycsIG5hbWU6ICdob21lJywgY29tcG9uZW50OiBIb21lIH0sXHJcbiAgICB7IHBhdGg6ICcvanVnYWRvcmVzJywgbmFtZTogJ2p1Z2Fkb3InLCBjb21wb25lbnQ6IEp1Z2Fkb3IgfSxcclxuICAgIHsgcGF0aDogJy9zb2Npb3MnLCBuYW1lOiAnc29jaW8nLCBjb21wb25lbnQ6IFNvY2lvIH0sXHJcbiAgICB7IHBhdGg6ICcvZW50cmVuYWRvcmVzJywgbmFtZTogJ2VudHJlbmFkb3InLCBjb21wb25lbnQ6IEVudHJlbmFkb3IgfSxcclxuICAgIHsgcGF0aDogJy9taXBlcmZpbCcsIG5hbWU6ICdwZXJmaWwnLCBjb21wb25lbnQ6IFBlcmZpbCB9LFxyXG4gICAgeyBwYXRoOiAnL3BvbGl0aWNhQ29va2llcycsIG5hbWU6ICdwb2xpdGljYUNvb2tpZXMnLCBjb21wb25lbnQ6IFBvbGl0aWNhQ29va2llcyB9XHJcbl1cclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gICAgcm91dGVzIC8vIHNob3J0IGZvciBgcm91dGVzOiByb3V0ZXNgXHJcbn0pO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjYXBwXCIsXHJcbiAgICBjb21wb25lbnRzOiB7QXBwLCBIb21lLCBKdWdhZG9yLCBTb2NpbywgRW50cmVuYWRvciwgUGVyZmlsLCBQb2xpdGljYUNvb2tpZXN9LFxyXG4gICAgcm91dGVyXHJcbn0pIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNkZTVlMjNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxY2RlNWUyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMGUyYjg0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwZTJiODRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZDBlMmI4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRW50cmVuYWRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDBlMmI4NFwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlZjczMzRkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWVmNzMzNGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEhvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWVmNzMzNGRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSnVnYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdiYWMyNDRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3YmFjMjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3YmFjMjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2JhYzI0NFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3YmFjMjQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxKdWdhZG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSnVnYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YmFjMjQ0XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTQzODI3OGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5NDM4Mjc4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5NDM4Mjc4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NDM4Mjc4Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk0MzgyNzhjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxQZXJmaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyZmlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlcmZpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTQzODI3OGNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUG9saXRpY2FDb29raWVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjY4ZDVjMlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2I2OGQ1YzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2I2OGQ1YzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BvbGl0aWNhQ29va2llcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I2OGQ1YzJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYjY4ZDVjMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUG9saXRpY2FDb29raWVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb2xpdGljYUNvb2tpZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiNjhkNWMyXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODI4NTA2ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODI4NTA2ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU29jaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4Mjg1MDZmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTgyODUwNmYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFNvY2lvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4Mjg1MDZmXCIiLCI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgPGRpdj5cclxuICAgICAgPGItbmF2YmFyIHYtaWY9XCJjYXJnYUVuUHJvY2Vzb1wiIHN0aWNreSB0b2dnbGVhYmxlPVwibWRcIiB0eXBlPVwiZGFya1wiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGItc3Bpbm5lciB2YXJpYW50PVwid2hpdGVcIiBsYWJlbD1cIlNwaW5uaW5nXCI+PC9iLXNwaW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYi1uYXZiYXI+XHJcblxyXG4gICAgICA8Yi1uYXZiYXIgdi1pZj1cImNhcmdhQ29tcGxldGFkYVwiIHN0aWNreSB0b2dnbGVhYmxlPVwibWRcIiB0eXBlPVwiZGFya1wiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICA8Yi1uYXZiYXItdG9nZ2xlIHRhcmdldD1cIm5hdi1jb2xsYXBzZVwiPjwvYi1uYXZiYXItdG9nZ2xlPlxyXG4gICAgICAgICAgPGItbmF2YmFyLWJyYW5kIDp0bz1cIntuYW1lOiAnaG9tZSd9XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9iYWxvbi5wbmdcIiB3aWR0aD1cIjMwXCIgYWx0PVwiYmFsb25cIj5cclxuICAgICAgICAgICAgSUYtb3Jtw6F0aWNvcyBGQ1xyXG4gICAgICAgICAgPC9iLW5hdmJhci1icmFuZD5cclxuXHJcbiAgICAgICAgICA8Yi1jb2xsYXBzZSBpZD1cIm5hdi1jb2xsYXBzZVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiBpcy1uYXY+XHJcbiAgICAgICAgICAgIDxiLW5hdmJhci1uYXY+XHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdob21lJ31cIiA+Tm90aWNpYXMgZGVsIGNsdWI8L2ItbmF2LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdzb2Npbyd9XCIgdi1zaG93PVwibW9zdHJhclNvY2lvXCI+SW5zY3JpYmlyc2UgY29tbyBzb2NpbzwvYi1uYXYtaXRlbT5cclxuICAgICAgICAgICAgICA8Yi1uYXYtaXRlbSA6dG89XCJ7bmFtZTogJ2p1Z2Fkb3InfVwiIHYtc2hvdz1cIm1vc3RyYXJKdWdhZG9yXCI+SW5zY3JpYmlyc2UgY29tbyBqdWdhZG9yPC9iLW5hdi1pdGVtPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdlbnRyZW5hZG9yJ31cIiB2LXNob3c9XCJtb3N0cmFyRW50cmVuYWRvclwiPkVudmlhciBzb2xpY2l0dWQgZGUgZW50cmVuYWRvcjwvYi1uYXYtaXRlbT4gICAgICAgXHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdwZXJmaWwnfVwiIGNsYXNzPVwicHItNVwiPjxiLXNwaW5uZXIgdHlwZT1cImdyb3dcIiBzbWFsbCB2YXJpYW50PVwic3VjY2Vzc1wiPjwvYi1zcGlubmVyPiBNaSBwZXJmaWw8L2ItbmF2LWl0ZW0+ICAgICAgIFxyXG4gICAgICAgICAgICAgIDxiLW5hdi1pdGVtIEBjbGljaz1cImVsaW1pbmFyQ29va2llc1wiIGhyZWY9XCIvbG9nb3V0XCI+PGZvbnQtYXdlc29tZS1pY29uIGljb249XCJzaWduLW91dC1hbHRcIiA6c3R5bGU9XCJ7IGNvbG9yOiAnI0NENUM1QycgfVwiIHNpemU9XCJsZ1wiLz48L2ItbmF2LWl0ZW0+ICAgIFxyXG4gICAgICAgICAgICA8L2ItbmF2YmFyLW5hdj5cclxuICAgICAgICAgIDwvYi1jb2xsYXBzZT5cclxuICAgICAgPC9iLW5hdmJhcj5cclxuXHJcbiAgICAgIDwhLS0gQ29va2llcyAtLT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiZy1pbmZvIHAtMyBmaXhlZC1ib3R0b21cIiBpZD1cImNvb2tpZXNTZWN0aW9uXCIgPlxyXG4gICAgICAgICAgPGgyPkVzdGUgc2l0aW8gd2ViIHV0aWxpemEgY29va2llcywgc2kgcGVybWFuZWNlIGFxdcOtIGRhbW9zIHBvciBoZWNobyBxdWUgYWNlcHRhIHN1IHVzby48L2gyPlxyXG4gICAgICAgICAgPHA+UHVlZGUgbGVlciBtw6FzIHNvYnJlIGVsIHVzbyBkZSBjb29raWVzIGVuIHBvbMOtdGljYSBkZSBjb29raWVzLjwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiIEBjbGljaz1cImFjZXB0YXJDb29raWVzXCI+PGEgaHJlZj0nIyc+QWNlcHRhciBjb29raWVzPC9hPjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiPjxyb3V0ZXItbGluayB0bz1cIi9wb2xpdGljYUNvb2tpZXNcIj5Qb2xpdGljYSBkZSBjb29raWVzPC9yb3V0ZXItbGluaz48L2ItYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c21hbGw+UHVsc2EgYWNlcHRhciBwYXJhIGVsaW1pbmFyIGVzdGUgbWVuc2FqZTwvc21hbGw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxyb3V0ZXItdmlldy8+XHJcbiAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXIgc3RpY2t5LWJvdHRvbSBjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7IDIwMjAgSUYtb3Jtw6F0aWNvcyBGQzwvc3Bhbj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgICAgICAgIHNvY2lvOiBbXSxcclxuICAgICAgICAgICAgbW9zdHJhclNvY2lvOiB0cnVlLFxyXG4gICAgICAgICAgICBtb3N0cmFySnVnYWRvcjogdHJ1ZSxcclxuICAgICAgICAgICAgbW9zdHJhckVudHJlbmFkb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGNhcmdhRW5Qcm9jZXNvOiB0cnVlLFxyXG4gICAgICAgICAgICBjYXJnYUNvbXBsZXRhZGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250YWRvcjogMFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYWNlcHRhckNvb2tpZXMoKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJDb29raWVBY2VwdGFkYSA9IEJpZW52ZW5pZEAgYSBJRi1vcm3DoXRpY29zIEZDLCBhY2FiYXMgZGUgYWNlcHRhciBudWVzdHJhcyBjb29raWVzXCI7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXNTZWN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5jb29raWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbGltaW5hckNvb2tpZXMoKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJDb29raWVBY2VwdGFkYT07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQgKCkgeyBcclxuICAgICAgICAgIGlmKGRvY3VtZW50LmNvb2tpZSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzU2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLXNvY2lvcycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yKytcclxuICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpbyA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhclNvY2lvID0gZmFsc2VcclxuICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb2NpbzogXCIrdGhpcy5jb250YWRvcikgXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmdhQ29tcGxldGFkYSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZ2FFblByb2Nlc28gPSBmYWxzZVxyXG4gICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgYXhpb3MuZ2V0KCcvZGF0b3MtanVnYWRvcmVzJylcclxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yKytcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVnYWRvciA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFySnVnYWRvciA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKdWdhZG9yOiBcIit0aGlzLmNvbnRhZG9yKSBcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNhcmdhQ29tcGxldGFkYSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJnYUVuUHJvY2VzbyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLWVudHJlbmFkb3JlcycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yKytcclxuICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbnRyZW5hZG9yID0gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyRW50cmVuYWRvciA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50cmVuYWRvcjogXCIrdGhpcy5jb250YWRvcikgIFxyXG4gICAgICAgICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJnYUNvbXBsZXRhZGEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmdhRW5Qcm9jZXNvID0gZmFsc2VcclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC01IG1iLTUgdGV4dC1jZW50ZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPsK/VGllbmVzIGVsIHTDrXR1bG8gZGUgZW50cmVuYWRvcj88L2gxPlxyXG4gICAgICAgIDxoMj5FbnbDrWFub3NsbyB5IGRpcmlnZSBhIGFsZ3VubyBkZSBudWVzdHJvcyBlcXVpcG9zPC9oMj5cclxuICAgICAgICBcclxuICAgICAgICA8Yi1pbWcgc3JjPVwiL2ltZy9lbnRyZW5hZG9yLnBuZ1wiIGZsdWlkPjwvYi1pbWc+ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8IS0tIFNlbGVjY2lvbmFyIGFyY2hpdm8gLS0+XHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1mb3JtLWZpbGVcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnN0YXRlPVwiQm9vbGVhbihmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbGlqYSB1biBhcmNoaXZvIG8gZGVzcGzDoWNlbG8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3AtcGxhY2Vob2xkZXI9XCJTb2x0YXIgYXJjaGl2byBhcXXDrS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnJvd3NlLXRleHQ9XCJFbGVnaXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA+PC9iLWZvcm0tZmlsZT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZW50cmVuYWRvckVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+IFxyXG4gICAgICAgICAgICA8Yi1hbGVydFxyXG4gICAgICAgICAgICA6c2hvdz1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICBkaXNtaXNzaWJsZVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgIEBkaXNtaXNzZWQ9XCJkaXNtaXNzQ291bnREb3duPTBcIlxyXG4gICAgICAgICAgICBAZGlzbWlzcy1jb3VudC1kb3duPVwiY291bnREb3duQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+RW52aWFuZG8gYXJjaGl2bzoge3sgZGlzbWlzc0NvdW50RG93biB9fSBzZWd1bmRvcy4uLjwvcD5cclxuICAgICAgICAgICAgPGItcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgIDptYXg9XCJkaXNtaXNzU2Vjc1wiXHJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJkaXNtaXNzQ291bnREb3duXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjRweFwiXHJcbiAgICAgICAgICAgID48L2ItcHJvZ3Jlc3M+XHJcbiAgICAgICAgICAgIDwvYi1hbGVydD5cclxuICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICA8IS0tIEJvdMOzbiBkZSBlbnZpYXItLT5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwic3VjY2Vzc1wiIGlkPVwiYm90b25FbnRyZW5hZG9yXCIgQGNsaWNrPVwiZW52aWFyVGl0dWxvXCI+RW52aWFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICA8L2Itcm93PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnRW50cmVuYWRvcicsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpbGU6IFtdLFxyXG4gICAgICAgIG9rRW50cmVuYWRvcjogZmFsc2UsXHJcbiAgICAgICAgZGlzbWlzc1NlY3M6IDMsXHJcbiAgICAgICAgZGlzbWlzc0NvdW50RG93bjogMCxcclxuICAgICAgICBzaG93RGlzbWlzc2libGVBbGVydDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgY291bnREb3duQ2hhbmdlZChkaXNtaXNzQ291bnREb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IGRpc21pc3NDb3VudERvd25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudmlhclRpdHVsbygpe1xyXG4gICAgICAgICAgICB2YXIgZW50cmVuYWRvckVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbnRyZW5hZG9yRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBlbnZpYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uRW50cmVuYWRvclwiKTtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVcIik7XHJcblxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzWzBdKXtcclxuICAgICAgICAgICAgICAgIGVudHJlbmFkb3JFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL2VudmlvLXRpdHVsbydcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b25FbnRyZW5hZG9yJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IHRoaXMuZGlzbWlzc1NlY3M7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDEwKTsgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGVudHJlbmFkb3JFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBlbnRyZW5hZG9yRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1biBhcmNoaXZvXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05PIEV4aXN0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGItY29udGFpbmVyIGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgICAgICA8IS0tIENhYmVjZXJhIHNsaWRlcyAtLT5cclxuICAgICAgICAgICAgPGItY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIGlkPVwiY2Fyb3VzZWwtZmFkZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cInRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjMDAwXCJcclxuICAgICAgICAgICAgICAgIGZhZGVcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnNcclxuICAgICAgICAgICAgICAgIGltZy13aWR0aD1cIjEwMjRcIlxyXG4gICAgICAgICAgICAgICAgaW1nLWhlaWdodD1cIjQ4MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2JhbG9uLWRlLWZ1dGJvbC5qcGdcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCJDb21wYXJ0ZSBudWVzdHJhIHBhc2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2NhbXBvLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgICAgIDxiLWNhcm91c2VsLXNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbj1cIkFxdcOtIGVuY29udHJhcsOhcyBsYXMgbm90aWNpYXMgZGVsIGNsdWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2VzY3VlbGEuanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPVwiUmVzdWx0YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvZnV0Ym9sLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgPC9iLWNhcm91c2VsPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBjYXJkcyBjb24gbm90aWNpYXMgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gUHJpbWVyYSBsw61uZWEgZGUgY2FyZHMgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtZ3JvdXAgZGVjaz1cImRlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiSGlzdG9yaWEgZGVsIGNsdWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+Q29ub2NlIG51ZXN0cmEgaGlzdG9yaWE8L2E+PC9iLWNhcmQtdGV4dD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiSW5zdGFsYWNpb25lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5Db250ZW1wbGEgbnVlc3RyYXMgaW5zdGFsYWNpb25lczwvYT48L2ItY2FyZC10ZXh0PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJQbGFudGlsbGFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkNvbm9jZSBudWVzdHJhcyBwbGFudGlsbGFzPC9hPjwvYi1jYXJkLXRleHQ+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gU2VndW5kYSBsw61uZWEgZGUgY2FyZHMgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtZ3JvdXAgZGVjaz1cImRlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiQ2xhc2lmaWNhY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+T2JzZXJ2YSBudWVzdHJhIGNsYXNpZmljYWNpw7NuIGVuIGxhIHRhYmxhPC9hPjwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUHLDs3hpbW9zIHBhcnRpZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkFxdcOtIHB1ZWRlcyB2ZXIgY29udHJhIHF1aWVuIGp1Z2Ftb3MgZWwgcHLDs3hpbW8gZW5jdWVudHJvPC9hPjwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJSZXN1bHRhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvczwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gUmVjb21lbmRhY2lvbmVzLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3JlY29tZW5kYWNpb25lcy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlJlY29tZW5kYWNpb25lcyBwYXJhIGV2aXRhciBsb3Mgcmllc2dvcyBzb2JyZSBsYSBzYWx1ZCBlbiBsYSB2dWVsdGEgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbFwiIHN1Yi10aXRsZT1cIjMwIG1heW8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgRGVwYXJ0YW1lbnRvIE3DqWRpY28gZGUgbGEgUmVhbCBGZWRlcmFjacOzbiBFc3Bhw7FvbGEgZGUgRsO6dGJvbCwgY29uIGxhIGNvbGFib3JhY2nDs24gZGUgcHJvZmVzaW9uYWxlcyBleHBlcnRvcyBkZSBuaXZlbCBpbnRlcm5hY2lvbmFsLCBoYSBlbGFib3JhZG8gdW4gUHJvdG9jb2xvIG3DqWRpY28geSBkZSBwcmVwYXJhY2nDs24gZsOtc2ljYSBiYXNhZG8gZW4gcmVjb21lbmRhY2lvbmVzIHBhcmEgZXZpdGFyIGxvcyByaWVzZ29zIHBhcmEgbGEgc2FsdWQgZW4gbGEgdnVlbHRhIGEgbG9zIGVudHJlbmFtaWVudG9zIHkgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NkbjEuc2VmdXRib2wuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvcGRmL3JlY29tZW5kYWNpb25lc19wYXJhX2V2aXRhcl9sb3NfcmllZ29zX3NvYnJhX2xhX3NhbHVkX2VuX2xhX3Z1ZWx0YV9hX2xhX2NvbXBldGljaW9uX2VuX2VsX2Z1dGJvbC5wZGZcIj5BcXXDrSBlbCBlbmxhY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIG5vdGljaWEgUkZFRiBGQVNFIElJLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2Zhc2UyLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiRmFzZSAyIGRlIGxhIGRlc2VzY2FsYWRhXCIgc3ViLXRpdGxlPVwiMjcgbWF5bywgMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBDb25zZWpvIFN1cGVyaW9yIGRlIERlcG9ydGVzIGhhIHByZXBhcmFkbyB1biBkb2N1bWVudG8gcXVlIGRhIHJlc3B1ZXN0YSBhIGxhcyBkdWRhcyBtw6FzIGZyZWN1ZW50ZXMgZGUgbG9zIGRlcG9ydGlzdGFzIHByb2Zlc2lvbmFsZXMgeSBmZWRlcmFkb3MgZGUgY2FyYSBhIGxhIEZhc2UgMiBkZSBsYSBkZXNlc2NhbGFkYSwgcXVlIGVzdGEgc2VtYW5hIGhhIGNvbWVuemFkbyBlbiBncmFuIHBhcnRlIGRlbCBwYcOtcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NkbjEuc2VmdXRib2wuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvZmFxc19kZXBvcnRlX2Zhc2VfMi5wZGZcIj5BcXXDrSBlbCBlbmxhY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIG5vdGljaWEgUkZFRi0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvX3JmZWYuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJTdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lc1wiIHN1Yi10aXRsZT1cIjI3IG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIFJGRUYgYXBydWViYSBsYSBzdXNwZW5zacOzbiBkZSB0b2RhcyBsYXMgY29tcGV0aWNpb25lcyBubyBwcm9mZXNpb25hbGVzIGhhc3RhIHF1ZSBsYXMgYXV0b3JpZGFkZXMgY29uc2lkZXJlbiBxdWUgc2UgcHVlZGVuIHJlYW51ZGFyIHNpbiByaWVzZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gY29tdW5pY2FkbyBvZmljaWFsIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9Db211bmljYWRvX29maWNpYWwuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY29tdW5pY2Fkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiIHN1Yi10aXRsZT1cIjEwIG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZWRhbiBzdXNwZW5kaWRvcyB0b2RvcyBsb3MgZW50cmVuYW1pZW50b3MgZGVzZGUgbWHDsWFuYSBtacOpcmNvbGVzIDExIGRlIG1hcnpvIGRlIDIwMjAgaGFzdGEgbnVldm8gYXZpc28uIExhIFJlYWwgRmVkZXJhY2nDs24gZGUgRsO6dGJvbCBkZSBNYWRyaWQgaGEgYW51bmNpYWRvIGxhIHN1c3BlbnNpw7NuIGRlIGxhcyBjb21wZXRpY2lvbmVzIHRlcnJpdG9yaWFsZXMgZHVyYW50ZSBsYXMgcHLDs3hpbWFzIGRvcyBzZW1hbmFzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSByZXN1bHRhZG9zIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9yZXN1bHRhZG9zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJlc3VsdGFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiUmVzdWx0YWRvcyBkZWwgZmluIGRlIHNlbWFuYVwiIHN1Yi10aXRsZT1cIjkgbWFyem8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVlc3Ryb3MgZXF1aXBvcyBjb250aW51YW4gY29uIGxhIGJ1ZW5hIGRpbsOhbWljYSBkZSBlc3RhcyDDumx0aW1hcyA3IGpvcm5hZGFzLiBUcmFzIGVsIHRyb3BpZXpvIGluaWNpYWwgYSBsYSB2dWVsdGEgZGUgbmF2aWRhZCwgc2UgY3VlbnRhbiBsb3MgcGFydGlkb3MgcG9yIHZpY3RvcmlhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBQdWVzdG8gZGUgZW50cmVuYWRvciAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcHVlc3RvX2VudHJlbmFkb3IuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHVlc3RvX2VudHJlbmFkb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiUHVlc3RvcyBkZSBlbnRyZW5hZG9yZXMgdmFjYW50ZXNcIiBzdWItdGl0bGU9XCIyIG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmVtb3MgZGlzcG9uaWJsZXMgYWxndW5hcyB2YWNhbnRlcyBkZSBlbnRyZW5hZG9yZXMgZGUgYWxndW5hcyBkZSBudWVzdHJhcyBwbGFudGlsbGFzLCBzaSB0aWVuZXMgZWwgdMOtdHVsbyBtYW5kYWxvIHkgZm9ybWEgcGFydGUgZGVsIGNsdWIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvYi1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGluZzogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uU2xpZGVTdGFydChzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblNsaWRlRW5kKHNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWxvYWRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcGFnZSB3YXMganVzdCByZWxvYWRlZC4gQ2xlYXIgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLy8gc28gdGhhdCBpdCB3aWxsIHJlbG9hZCB0aGUgbmV4dCB0aW1lIHRoaXMgcGFnZSBpcyB2aXNpdGVkLlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JlbG9hZGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgYSBmbGFnIHNvIHRoYXQgd2Uga25vdyBub3QgdG8gcmVsb2FkIHRoZSBwYWdlIHR3aWNlLlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbG9hZGVkJywgJzEnKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMT5SZWxsZW5hIGVzdGUgZm9ybXVsYXJpbzwvaDE+XHJcbiAgICAgICAgPGgyPsKheSDDum5ldGUgYSBudWVzdHJvIGVxdWlwbyE8L2gyPiAgXHJcblxyXG4gICAgICAgIDxiLWNvbnRhaW5lciBjbGFzcz1cIm10LTVcIj5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMTogY2F0ZWdvcsOtYSAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2wgbm8tZ3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2F0ZWdvcmlhc1wiPkNhdGVnb3LDrWE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImNhdGVnb3JpYVwiIGlkPVwidmFsaWRhckNhdGVnb3JpYVwiIDpvcHRpb25zPVwiY2F0ZWdvcmlhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNhdGVnb3JpYUVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMjogdGFsbGEgZGUgY2FtaXNldGEgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYUNhbWlzZXRhXCI+VGFsbGEgZGUgY2FtaXNldGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhQ2FtaXNldGFcIiBpZD1cInZhbGlkYXJDYW1pc2V0YVwiIDpvcHRpb25zPVwidGFsbGFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2FtaXNldGFFcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDM6IHRhbGxhIGRlIHBhbnRhbMOzbiAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhUGFudGFsb25cIj5UYWxsYSBkZSBwYW50YWzDs246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhUGFudGFsb25cIiBpZD1cInZhbGlkYXJQYW50YWxvblwiIDpvcHRpb25zPVwidGFsbGFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGFudGFsb25FcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDQ6IHRhbGxhIGRlIG1lZGlhcyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhTWVkaWFzXCI+VGFsbGEgZGUgbWVkaWFzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYU1lZGlhc1wiIGlkPVwidmFsaWRhck1lZGlhc1wiIDpvcHRpb25zPVwidGFsbGFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibWVkaWFzRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA1OiB0YWxsYSBkZSBhYnJpZ28gLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYUFicmlnb1wiPlRhbGxhIGRlIGFicmlnbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwidGFsbGFBYnJpZ29cIiBpZD1cInZhbGlkYXJBYnJpZ29cIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImFicmlnb0Vycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgNjogbcOpdG9kbyBkZSBwYWdvIC0tPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLXJvdyBjbGFzcz1cIm1iLTNcIiB2LWlmPVwiIWRpc21pc3NDb3VudERvd25cIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWV0b2RvUGFnb1wiPk3DqXRvZG8gZGUgcGFnbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwibWV0b2RvUGFnb1wiIGlkPVwidmFsaWRhclBhZ29cIiA6b3B0aW9ucz1cInBhZ29cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwYWdvRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA3OiBBbGVydGEgYW5pbWFkYSAtLT5cclxuICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGItYWxlcnRcclxuICAgICAgICAgICAgICAgIDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudERvd249MFwiXHJcbiAgICAgICAgICAgICAgICBAZGlzbWlzcy1jb3VudC1kb3duPVwiY291bnREb3duQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5FbnZpYW5kbyBpbmZvcm1hY2nDs246IHt7IGRpc21pc3NDb3VudERvd24gfX0gc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Yi1wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA6bWF4PVwiZGlzbWlzc1NlY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjRweFwiXHJcbiAgICAgICAgICAgICAgICA+PC9iLXByb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgPC9iLWFsZXJ0PlxyXG4gICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgODogZW52aWFyIC0tPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLXJvdyBjbGFzcz1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBpZD1cImJvdG9uSnVnYWRvclwiIEBjbGljaz1cImluc2NyaWJpckp1Z2Fkb3IobWV0b2RvUGFnbywgY2F0ZWdvcmlhLCB0YWxsYUNhbWlzZXRhLCB0YWxsYVBhbnRhbG9uLCB0YWxsYU1lZGlhcywgdGFsbGFBYnJpZ28pXCI+RW52aWFyPC9iLWJ1dHRvbj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcbiAgICAgICAgPC9iLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0p1Z2Fkb3InLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpYTogbnVsbCxcclxuICAgICAgICAgICAgdGFsbGFDYW1pc2V0YTogbnVsbCxcclxuICAgICAgICAgICAgdGFsbGFQYW50YWxvbjogbnVsbCxcclxuICAgICAgICAgICAgdGFsbGFNZWRpYXM6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhQWJyaWdvOiBudWxsLFxyXG4gICAgICAgICAgICBtZXRvZG9QYWdvOiBudWxsLFxyXG4gICAgICAgICAgICBkaXNtaXNzU2VjczogMyxcclxuICAgICAgICAgICAgZGlzbWlzc0NvdW50RG93bjogMCxcclxuICAgICAgICAgICAgc2hvd0Rpc21pc3NpYmxlQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWFzOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW4gY2F0ZWdvcsOtYSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQmVuamFtaW4nLCB0ZXh0OiAnQmVuamFtw61uJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdBbGV2aW4nLCB0ZXh0OiAnQWxldsOtbid9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnSW5mYW50aWwnLCB0ZXh0OiAnSW5mYW50aWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0NhZGV0ZScsIHRleHQ6ICdDYWRldGUnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0p1dmVuaWwnLCB0ZXh0OiAnSnV2ZW5pbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQWZpY2lvbmFkbycsIHRleHQ6ICdBZmljaW9uYWRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdWZXRlcmFubycsIHRleHQ6ICdWZXRlcmFubyd9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRhbGxhczpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuYSB0YWxsYSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUycsIHRleHQ6ICdTJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdNJywgdGV4dDogJ00nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0wnLCB0ZXh0OiAnTCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnWEwnLCB0ZXh0OiAnWEwnfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwYWdvOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW4gbcOpdG9kbyBkZSBwYWdvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdQYXlwYWwnLCB0ZXh0OiAnUGF5cGFsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nLCB0ZXh0OiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYScsIHRleHQ6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYSd9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNvdW50RG93bkNoYW5nZWQoZGlzbWlzc0NvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnNjcmliaXJKdWdhZG9yKEVsZWNjaW9uUGFnb0p1Z2Fkb3IsIEVsZWNjaW9uQ2F0ZWdvcmlhLCBFbGVjY2lvblRhbGxhQ2FtaXNldGEsIEVsZWNjaW9uVGFsbGFQYW50YWxvbiwgRWxlY2Npb25UYWxsYU1lZGlhcywgRWxlY2Npb25UYWxsYUFicmlnbyl7XHJcblxyXG4gICAgICAgICAgICAvLyBWYXJpYWJsZXMgZGVsIGZvcm11bGFyaW9cclxuICAgICAgICAgICAgdmFyIGNhdGVnb3JpYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhckNhdGVnb3JpYVwiKTtcclxuICAgICAgICAgICAgdmFyIGNhbWlzZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyQ2FtaXNldGFcIik7XHJcbiAgICAgICAgICAgIHZhciBwYW50YWxvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhclBhbnRhbG9uXCIpO1xyXG4gICAgICAgICAgICB2YXIgbWVkaWFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyTWVkaWFzXCIpO1xyXG4gICAgICAgICAgICB2YXIgYWJyaWdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyQWJyaWdvXCIpO1xyXG4gICAgICAgICAgICB2YXIgcGFnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhclBhZ29cIik7XHJcbiAgICAgICAgICAgIHZhciBlbnZpYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uSnVnYWRvclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVycm9yZXMgZGUgbGFzIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICB2YXIgY2F0ZWdvcmlhRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3JpYUVycm9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgY2FtaXNldGFFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtaXNldGFFcnJvclwiKTtcclxuICAgICAgICAgICAgdmFyIHBhbnRhbG9uRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbnRhbG9uRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBtZWRpYXNFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaWFzRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBhYnJpZ29FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJyaWdvRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBwYWdvRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ29FcnJvclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9rIHZhbGlkYWNpb25lc1xyXG4gICAgICAgICAgICB2YXIgb2tDYXRlZ29yaWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG9rQ2FtaXNldGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG9rUGFudGFsb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG9rTWVkaWFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBva0FicmlnbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgb2tQYWdvID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQ2F0ZWdvcsOtYVxyXG4gICAgICAgICAgICBpZighY2F0ZWdvcmlhLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFFcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSBjYXRlZ29yw61hXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tDYXRlZ29yaWEgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGVnb3JpYS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpYS52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWFFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQ2F0ZWdvcmlhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tDYXRlZ29yaWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQ2FtaXNldGFcclxuICAgICAgICAgICAgaWYoIWNhbWlzZXRhLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGNhbWlzZXRhLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGNhbWlzZXRhRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FtaXNldGFFcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSB0YWxsYSBkZSBjYW1pc2V0YVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2tDYW1pc2V0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FtaXNldGEub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjYW1pc2V0YS52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWlzZXRhLnN0eWxlLmJvcmRlckNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWlzZXRhRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBva0NhbWlzZXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tDYW1pc2V0YSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBQYW50YWzDs25cclxuICAgICAgICAgICAgaWYoIXBhbnRhbG9uLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHBhbnRhbG9uLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIHBhbnRhbG9uRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgcGFudGFsb25FcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSB0YWxsYSBkZSBwYW50YWzDs25cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rUGFudGFsb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhbnRhbG9uLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocGFudGFsb24udmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBwYW50YWxvbi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBwYW50YWxvbkVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tQYW50YWxvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFudGFsb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gTWVkaWFzXHJcbiAgICAgICAgICAgIGlmKCFtZWRpYXMudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgbWVkaWFzLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIG1lZGlhc0Vycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIG1lZGlhc0Vycm9yLmlubmVySFRNTCA9IFwiRGViZXMgc2VsZWNjaW9uYXIgdW5hIHRhbGxhIGRlIG1lZGlhc1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2tNZWRpYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhcy5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKG1lZGlhcy52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYXNFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rTWVkaWFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tNZWRpYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQWJyaWdvXHJcbiAgICAgICAgICAgIGlmKCFhYnJpZ28udmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgYWJyaWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGFicmlnb0Vycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGFicmlnb0Vycm9yLmlubmVySFRNTCA9IFwiRGViZXMgc2VsZWNjaW9uYXIgdW5hIHRhbGxhIGRlIGFicmlnb1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2tBYnJpZ28gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFicmlnby5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGFicmlnby52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFicmlnby5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBhYnJpZ29FcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQWJyaWdvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tBYnJpZ28gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gTcOpdG9kbyBkZSBwYWdvXHJcbiAgICAgICAgICAgIGlmKCFwYWdvLnZhbHVlICl7XHJcbiAgICAgICAgICAgICAgICBwYWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIHBhZ29FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdvRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1biBtw6l0b2RvIGRlIHBhZ29cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rUGFnbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnby5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHBhZ28udmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBwYWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ29FcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFnbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFnbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihva0NhdGVnb3JpYSAmJiBva0NhbWlzZXRhICYmIG9rUGFudGFsb24gJiYgb2tNZWRpYXMgJiYgb2tBYnJpZ28gJiYgb2tQYWdvKXtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdvLWp1Z2Fkb3JlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtwYWdvSnVnYWRvcjogRWxlY2Npb25QYWdvSnVnYWRvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6IEVsZWNjaW9uQ2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFDYW1pc2V0YTogRWxlY2Npb25UYWxsYUNhbWlzZXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFQYW50YWxvbjogRWxlY2Npb25UYWxsYVBhbnRhbG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFNZWRpYXM6IEVsZWNjaW9uVGFsbGFNZWRpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWxsYUFicmlnbzogRWxlY2Npb25UYWxsYUFicmlnb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdG9uSnVnYWRvcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBwdWVkbyBlamVjdXRhciBhw7puLiAnK1xyXG4gICAgICAgICAgICAgICAgJ0NhdGVnb3JpYTogJytva0NhdGVnb3JpYStcclxuICAgICAgICAgICAgICAgICcgQ2FtaXNldGE6ICcrb2tDYW1pc2V0YStcclxuICAgICAgICAgICAgICAgICcgUGFudGFsw7NuOiAnK29rUGFudGFsb24rXHJcbiAgICAgICAgICAgICAgICAnIE1lZGlhczogJytva01lZGlhcytcclxuICAgICAgICAgICAgICAgICcgQWJyaWdvOiAnK29rQWJyaWdvK1xyXG4gICAgICAgICAgICAgICAgJyBQYWdvOiAnK29rUGFnbyk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSBtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGItY29udGFpbmVyIGNsYXNzPVwidGV4dC1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDwhLS0gQm90w7NuIGFuaW1hZG8gbWllbnRyYXMgc2UgY2FyZ2EgZWwgYWpheCAtLT5cclxuICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJpbmZvXCIgZGlzYWJsZWQgdi1pZj1cIiF1c3VhcmlvLmZlY2hhTmFjaW1pZW50b1wiPlxyXG4gICAgICAgICAgICAgICAgPGItc3Bpbm5lciBzbWFsbCB0eXBlPVwiZ3Jvd1wiPjwvYi1zcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgQ2FyZ2FuZG8uLi5cclxuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQ2FyZCBjb24gdG9kbyBlbCBjb250ZW5pZG8gZGUgTWkgcGVyZmlsIC0tPlxyXG4gICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJNaSBwZXJmaWxcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyLXRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlci10YWc9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyLWJnLXZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDUwZW07XCJcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJ1c3VhcmlvLmZlY2hhTmFjaW1pZW50b1wiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBOb21icmUgeSBhcGVsbGlkb3MgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIiFlZGl0YXJcIj57eyB1c3VhcmlvLm5vbWJyZSB9fSB7eyB1c3VhcmlvLmFwZWxsaWRvcyB9fTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIE5vbWJyZSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Tm9tYnJlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IG5hbWU9XCJub21icmVcIiBpZD1cIm5vbWJyZVwiIHJlZj1cInVzdWFyaW9Ob21icmVcIiB2LW1vZGVsPVwidXN1YXJpby5ub21icmVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBub21icmVcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJub21icmVFcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEVkaWNpw7NuIHkgdmFsaWRhY2nDs24gQXBlbGxpZG9zIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5BcGVsbGlkb3M6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8uYXBlbGxpZG9zXCIgaWQ9XCJ1c3VhcmlvQXBlbGxpZG9zXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHVzIGFwZWxsaWRvc1wiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImFwZWxsaWRvc0Vycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBFbWFpbCBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5FbWFpbDo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmVtYWlsIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5lbWFpbFwiIGlkPVwidXN1YXJpb0VtYWlsXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHUgZW1haWxcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbWFpbEVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBDb250cmFzZcOxYSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Q29udHJhc2XDsWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1c3VhcmlvLnBhc3N3b3JkXCIgaWQ9XCJ1c3VhcmlvUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB1bmEgY29udHJhc2XDsWFcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwYXNzd29yZEVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBDb25maXJtYXIgY29udHJhc2XDsWEgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCIgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkNvbmZpcm1hciBjb250cmFzZcOxYTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJjb25maXJtUGFzc1wiIHBsYWNlaG9sZGVyPVwiUmVwaXRlIGxhIGNvbnRyYXNlw7FhXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY29uZmlybVBhc3N3b3JkRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBNb3N0cmFyL29jdWx0YXIgY29udHJhc2XDsWEgLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCIgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD48L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5WZXIgY29udHJhc2XDsWFzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tY2hlY2tib3ggaWQ9XCJzaG93UGFzc3dvcmRzXCI+PC9iLWZvcm0tY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIERuaSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Ebmk6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5kbmkgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmRuaVwiIGlkPVwidXN1YXJpb0RuaVwiIG1heGxlbmd0aD1cIjlcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBkbmlcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJkbmlFcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEVkaWNpw7NuIHkgdmFsaWRhY2nDs24gRmVjaGEgZGUgbmFjaW1pZW50byBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5GZWNoYSBkZSBuYWNpbWllbnRvOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uZmVjaGFOYWNpbWllbnRvLmRhdGUuc3Vic3RyaW5nKDAsMTApfX0gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdHlwZT1cImRhdGVcIiB2LW1vZGVsPVwiZmVjaGFcIiBpZD1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBmZWNoYSBkZSBuYWNpbWllbnRvXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGhyPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvIG1iLTVcIj5EaXJlY2Npw7NuPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBDYWxsZSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTIgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkNhbGxlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uY2FsbGUgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmNhbGxlXCIgaWQ9XCJ1c3VhcmlvQ2FsbGVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBjYWxsZVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNhbGxlRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIExvY2FsaWRhZCBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Mb2NhbGlkYWQ6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5sb2NhbGlkYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmxvY2FsaWRhZFwiIGlkPVwidXN1YXJpb0xvY2FsaWRhZFwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIGFxdcOtIHR1IGxvY2FsaWRhZFwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxvY2FsaWRhZEVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBQcm92aW5jaWEgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+UHJvdmluY2lhOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8ucHJvdmluY2lhIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLnByb3ZpbmNpYVwiIGlkPVwidXN1YXJpb1Byb3ZpbmNpYVwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIGFxdcOtIHR1IHByb3ZpbmNpYVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInByb3ZpbmNpYUVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBDw7NkaWdvIHBvc3RhbCBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Dw7NkaWdvIHBvc3RhbDo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLmNwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmNwXCIgaWQ9XCJ1c3VhcmlvQ3BcIiBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHUgY8OzZGlnbyBwb3N0YWxcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjcEVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8IS0tIERhdG9zIEp1Z2Fkb3IgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGlzdGVKdWdhZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvIG1iLTVcIj5KdWdhZG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkNhdGVnb3JpYTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqdWdhZG9yLmNhdGVnb3JpYSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImp1Z2Fkb3IuY2F0ZWdvcmlhXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlRhbGxhIGRlIENhbWlzZXRhOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGp1Z2Fkb3IuY2FtaXNldGEgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLmNhbWlzZXRhXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+VGFsbGEgZGUgcGFudGFsw7NuOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGp1Z2Fkb3IucGFudGFsb24gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLnBhbnRhbG9uXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+VGFsbGEgZGUgbWVkaWFzOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGp1Z2Fkb3IubWVkaWFzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwianVnYWRvci5tZWRpYXNcIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5UYWxsYSBkZSBhYnJpZ286PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sganVnYWRvci5hYnJpZ28gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLmFicmlnb1wiIDpvcHRpb25zPVwidGFsbGFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPk3DqXRvZG8gZGUgcGFnbzo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqdWdhZG9yLnBhZ28gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLnBhZ29cIiA6b3B0aW9ucz1cInBhZ29cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1kYW5nZXJcIiBAY2xpY2s9XCJiYWphSnVnYWRvclwiIHYtaWY9XCJlZGl0YXJcIj5CYWphIGp1Z2Fkb3I8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRGF0b3MgU29jaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGlzdGVTb2Npb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48c3BhbiBjbGFzcz1cInRleHQtaW5mbyBtYi01XCI+U29jaW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+TcOpdG9kbyBkZSBwYWdvOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHNvY2lvLnBhZ28gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJzb2Npby5wYWdvXCIgOm9wdGlvbnM9XCJwYWdvXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgQGNsaWNrPVwiY2FuY2VsYXJBYm9ub1wiIHYtaWY9XCJlZGl0YXJcIj5DYW5jZWxhciBhYm9ubyBzb2NpbzwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBEYXRvcyBFbnRyZW5hZG9yIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhpc3RlRW50cmVuYWRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxocj48c3BhbiBjbGFzcz1cInRleHQtaW5mbyBtYi01XCI+RW50cmVuYWRvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5UaXR1bG8gZW52aWFkbzo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCIgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbnRyZW5hZG9yLnRpdHVsbyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiIGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzdGF0ZT1cIkJvb2xlYW4oZmlsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWxpamEgdW4gYXJjaGl2byBvIGRlc3Bsw6FjZWxvIGFxdcOtLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wLXBsYWNlaG9sZGVyPVwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyb3dzZS10ZXh0PVwiRWxlZ2lyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVcIiBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9iLWZvcm0tZmlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgQGNsaWNrPVwiYmFqYUVudHJlbmFkb3JcIiB2LWlmPVwiZWRpdGFyXCI+QmFqYSBlbnRyZW5hZG9yPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCIgdi1pZj1cImVkaXRhclwiIEBjbGljaz1cImVudmlhclRpdHVsb1wiPkVudmlhciBvdHJvIHTDrXR1bG88L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxocj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHYtaWY9XCIhZWRpdGFyXCIgaWQ9XCJlZGljaW9uXCIgQGNsaWNrPVwiZWRpdGFyUGVyZmlsXCI+RWRpdGFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHYtaWY9XCIhZWRpdGFyXCIgQGNsaWNrPVwiZWxpbWluYXJQZXJmaWwodXN1YXJpby5pZClcIj5FbGltaW5hciBjdWVudGE8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHYtaWY9XCJlZGl0YXJcIiBpZD1cInNhdmVDaGFuZ2VzXCIgQGNsaWNrPVwiYWN0dWFsaXphclBlcmZpbFwiPkFjdHVhbGl6YXI8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgdi1pZj1cImVkaXRhclwiIEBjbGljaz1cImNhbmNlbGFyRWRpY2lvblwiPkNhbmNlbGFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvYi1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDwhLS0gTWVuc2FqZSBlbGltaW5hY2nDs24ganVnYWRvciwgc29jaW8gbyBlbnRyZW5hZG9yIC0tPlxyXG4gICAgICAgIDxzbWFsbCB2LWlmPVwicGFycmFmb1wiPlNpIGVyZXMganVnYWRvci9hLCBzb2NpQCBvIGVudHJlbmFkb3IvYSB5IGRlc2VhcyB0cmFtaXRhciBsYSBiYWphLCBwdWxzYSBhbnRlcyBlbCBib3TDs24gZWRpdGFyLjwvc21hbGw+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgICAgICAgdXN1YXJpbzogW10sXHJcbiAgICAgICAgICAgIGp1Z2Fkb3I6IFtdLFxyXG4gICAgICAgICAgICBzb2NpbzogW10sXHJcbiAgICAgICAgICAgIGVudHJlbmFkb3I6IFtdLFxyXG4gICAgICAgICAgICBmaWxlOltdLFxyXG4gICAgICAgICAgICBleGlzdGVKdWdhZG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgZXhpc3RlU29jaW86IGZhbHNlLFxyXG4gICAgICAgICAgICBleGlzdGVFbnRyZW5hZG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgZWRpdGFyOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFycmFmbzogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVsaW1pbmFyOiAnJyxcclxuICAgICAgICAgICAgZWxpbWluYXJTb2NpbzogJycsXHJcbiAgICAgICAgICAgIGVsaW1pbmFySnVnYWRvcjogJycsXHJcbiAgICAgICAgICAgIGVsaW1pbmFyRW50cmVuYWRvcjogJycsXHJcbiAgICAgICAgICAgIGZlY2hhOiAnJyxcclxuICAgICAgICAgICAgY29uZmlybWFyUGFzczogJycsXHJcbiAgICAgICAgICAgIGNvbnRyYXNlw7FhR3VhcmRhZGE6ICcnLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWFzOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW4gY2F0ZWdvcsOtYSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQmVuamFtaW4nLCB0ZXh0OiAnQmVuamFtw61uJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdBbGV2aW4nLCB0ZXh0OiAnQWxldsOtbid9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnSW5mYW50aWwnLCB0ZXh0OiAnSW5mYW50aWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0NhZGV0ZScsIHRleHQ6ICdDYWRldGUnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0p1dmVuaWwnLCB0ZXh0OiAnSnV2ZW5pbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQWZpY2lvbmFkbycsIHRleHQ6ICdBZmljaW9uYWRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdWZXRlcmFubycsIHRleHQ6ICdWZXRlcmFubyd9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRhbGxhczpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuYSB0YWxsYSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUycsIHRleHQ6ICdTJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdNJywgdGV4dDogJ00nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0wnLCB0ZXh0OiAnTCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnWEwnLCB0ZXh0OiAnWEwnfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwYWdvOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW4gbcOpdG9kbyBkZSBwYWdvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdQYXlwYWwnLCB0ZXh0OiAnUGF5cGFsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nLCB0ZXh0OiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYScsIHRleHQ6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYSd9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KSxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvbWlzZGF0b3MnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpbyA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJyYWZvID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcHlyaWdodCA9IHRydWVcclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9kYXRvcy1qdWdhZG9yZXMnKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmp1Z2Fkb3IgPSByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4aXN0ZUp1Z2Fkb3IgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLXNvY2lvcycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaW8gPSByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpc3RlU29jaW8gPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9kYXRvcy1lbnRyZW5hZG9yZXMnKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJlbmFkb3IgPSByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpc3RlRW50cmVuYWRvciA9IHRydWVcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBlZGl0YXJQZXJmaWwoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFycmFmbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZWNoYSA9IHRoaXMudXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoMCwxMCk7ICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBQdW50ZXJvIGJvZHlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhcmlhYmxlcyBkZWwgZm9ybXVsYXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzdWFyaW9Ob21icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWJyZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c3VhcmlvQXBlbGxpZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c3VhcmlvQXBlbGxpZG9zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzdWFyaW9FbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb0VtYWlsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzdWFyaW9QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb1Bhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1hclBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtUGFzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c3VhcmlvRG5pID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c3VhcmlvRG5pXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzdWFyaW9DYWxsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb0NhbGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzdWFyaW9Mb2NhbGlkYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzdWFyaW9Mb2NhbGlkYWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXN1YXJpb1Byb3ZpbmNpYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb1Byb3ZpbmNpYVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1c3VhcmlvQ3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzdWFyaW9DcFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG93UGFzc3dvcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93UGFzc3dvcmRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvdG9uU2F2ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZUNoYW5nZXNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVycm9yZXMgZGUgbGFzIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbWJyZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21icmVFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGVsbGlkb3NFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBlbGxpZG9zRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXNzd29yZEVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maXJtUGFzc3dvcmRFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkbmlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG5pRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsbGVFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGlkYWRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYWxpZGFkRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvdmluY2lhRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3ZpbmNpYUVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNwRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNwRXJyb3JcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9rIHZhbGlkYWNpb25lcyBVc3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5vbWJyZUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXBlbGxpZG9zRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkbmlGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtYWlsRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250cmFzZcOxYUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWFyQ29udHJhc2XDsWFGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlY2hhTmFjaW1pZW50b0ZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGVGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsaWRhZEZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmluY2lhRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjcEZpbGwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2sgdmFsaWRhY2lvbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9rQ2F0ZWdvcmlhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9rQ2FtaXNldGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2tQYW50YWxvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva01lZGlhcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva0FicmlnbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva1BhZ29KdWdhZG9yID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXN1YXJpby5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvLnBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzdWFyaW8ucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogbW9zdHJhciBjb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm1hclBhc3N3b3JkLnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZHMub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hvd1Bhc3N3b3Jkcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Bhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Bhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICBub21icmVFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ob21icmUub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwTm9tYnJlID0vXltBLVphLXrDgcOJw43Dk8Oaw6HDqcOtw7PDusOxw5EgXSskLztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cE5vbWJyZS50ZXN0KHVzdWFyaW9Ob21icmUudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTm9tYnJlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwTm9tYnJlLnRlc3QodXN1YXJpb05vbWJyZS52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIHRlbmVyIHVuYSBjYWRlbmEgZGUgY2FyYWN0ZXJlc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb05vbWJyZS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvTm9tYnJlLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ob21icmUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogQXBlbGxpZG9zXHJcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9zRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQXBlbGxpZG9zLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cEFwZWxsaWRvcyA9L15bQS1aYS16w4HDicONw5PDmsOhw6nDrcOzw7rDscORIF0rJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHBBcGVsbGlkb3MudGVzdCh1c3VhcmlvQXBlbGxpZG9zLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0FwZWxsaWRvcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cEFwZWxsaWRvcy50ZXN0KHVzdWFyaW9BcGVsbGlkb3MudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvc0Vycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvc0Vycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciB1bmEgY2FkZW5hIGRlIGNhcmFjdGVyZXNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9BcGVsbGlkb3Muc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9BcGVsbGlkb3MudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0FwZWxsaWRvcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBEbmkgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkbmlFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ebmkub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybyA9IHVzdWFyaW9EbmkudmFsdWUuc3Vic3RyKDAsdXN1YXJpb0RuaS52YWx1ZS5sZW5ndGgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZXRyYSA9IHVzdWFyaW9EbmkudmFsdWUuc3Vic3RyKHVzdWFyaW9EbmkudmFsdWUubGVuZ3RoLTEsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZXRyYU1heXVzY3VsYSA9IGxldHJhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9EbmkudmFsdWUgPSBudW1lcm8rbGV0cmFNYXl1c2N1bGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBEbmkgPS9eWzAtOV17OH1bVFJXQUdNWUZQRFhCTkpaU1FWSExDS0VUXSQvaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwRG5pLnRlc3QodXN1YXJpb0RuaS52YWx1ZSkpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRG5pLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwRG5pLnRlc3QodXN1YXJpb0RuaS52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIGNvbnRlbmVyIDggbsO6bWVyb3MgeSAxIGxldHJhIHbDoWxpZGFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ebmkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9EbmkudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0RuaS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs246IEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9FbWFpbC5vbmtleXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBFbWFpbCA9L15bYS16QS1aMC05Ll8tXStAW2EtekEtWjAtOS4tXStcXC4oW2EtekEtWl17Miw0fSkrJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cEVtYWlsLnRlc3QodXN1YXJpb0VtYWlsLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRW1haWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBFbWFpbC50ZXN0KHVzdWFyaW9FbWFpbC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciBmb3JtYXRvIGVtYWlsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRW1haWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9FbWFpbC52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0VtYWlsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs246IENvbmZpcm1hciBjb250cmFzZcOxYSBcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm1hclBhc3N3b3JkLnZhbHVlICE9IHVzdWFyaW9QYXNzd29yZC52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogQ2FsbGVcclxuICAgICAgICAgICAgICAgICAgICBjYWxsZUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0NhbGxlLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cENhbGxlID0vXltBLVphLXrDgcOJw43Dk8Oaw6HDqcOtw7PDusOxw5EgXStbMC05XSskLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwQ2FsbGUudGVzdCh1c3VhcmlvQ2FsbGUudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DYWxsZS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cENhbGxlLnRlc3QodXN1YXJpb0NhbGxlLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZUVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIHRlbmVyIHVuYSBjYWRlbmEgZGUgY2FyYWN0ZXJlcyB5IHVuIG7Dum1lcm9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DYWxsZS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb0NhbGxlLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQ2FsbGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogTG9jYWxpZGFkXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpZGFkRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTG9jYWxpZGFkLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cExvY2FsaWRhZCA9L15bQS1aYS16w4HDicONw5PDmsOhw6nDrcOzw7rDscORIF0rJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cExvY2FsaWRhZC50ZXN0KHVzdWFyaW9Mb2NhbGlkYWQudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTG9jYWxpZGFkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwTG9jYWxpZGFkLnRlc3QodXN1YXJpb0xvY2FsaWRhZC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpZGFkRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxpZGFkRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIHRlbmVyIHVuYSBjYWRlbmEgZGUgY2FyYWN0ZXJlc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0xvY2FsaWRhZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb0xvY2FsaWRhZC52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTG9jYWxpZGFkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs246IFByb3ZpbmNpYVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpbmNpYUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Byb3ZpbmNpYS5vbmtleXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBMb2NhbGlkYWQgPS9eW0EtWmEtesOBw4nDjcOTw5rDocOpw63Ds8O6w7HDkSBdKyQvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHBMb2NhbGlkYWQudGVzdCh1c3VhcmlvUHJvdmluY2lhLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Byb3ZpbmNpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cExvY2FsaWRhZC50ZXN0KHVzdWFyaW9Qcm92aW5jaWEudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNpYUVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNpYUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciB1bmEgY2FkZW5hIGRlIGNhcmFjdGVyZXNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Qcm92aW5jaWEuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9Qcm92aW5jaWEudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Byb3ZpbmNpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogQ1BcclxuICAgICAgICAgICAgICAgICAgICBjcEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0NwLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cENwID0vXig/OjBbMS05XVxcZHszfXxbMS00XVxcZHs0fXw1WzAtMl1cXGR7M30pJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cENwLnRlc3QodXN1YXJpb0NwLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQ3Auc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBDcC50ZXN0KHVzdWFyaW9DcC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciA1IG51bWVyb3MgY29tcHJlbmRpZG9zIGVudHJlIDAxMDAwIHkgNTI5OTlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DcC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb0NwLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQ3Auc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0sICBcclxuICAgICAgICAgICAgY2FuY2VsYXJFZGljaW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJyYWZvID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaWNpb24nKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGljaW9uJykuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGVudmlhclRpdHVsbygpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL2VkaXRhci1lbnRyZW5hZG9yJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykuZmlsZXNbMF0pXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHJ1dGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5jdHlwZTogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5yZWxvYWQodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAgICAgICAgIFxyXG4gICAgICAgICAgICBhY3R1YWxpemFyUGVyZmlsKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLm5vbWJyZUZpbGwgJiYgdGhpcy5hcGVsbGlkb3NGaWxsICYmIHRoaXMuZG5pRmlsbCAmJiB0aGlzLmVtYWlsRmlsbCAmJiB0aGlzLmNvbnRyYXNlw7FhRmlsbCAmJiB0aGlzLmNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCAmJiB0aGlzLmZlY2hhTmFjaW1pZW50b0ZpbGwgJiYgdGhpcy5jYWxsZUZpbGwgJiYgdGhpcy5sb2NhbGlkYWRGaWxsICYmIHRoaXMucHJvdmluY2lhRmlsbCAmJiB0aGlzLmNwRmlsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL2VkaXRhci1kYXRvcydcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRvcyBVc3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiB0aGlzLnVzdWFyaW8ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy51c3VhcmlvLmFwZWxsaWRvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhOiB0aGlzLmZlY2hhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3M6IHRoaXMudXN1YXJpby5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmk6IHRoaXMudXN1YXJpby5kbmksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IHRoaXMudXN1YXJpby5jYWxsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWQ6IHRoaXMudXN1YXJpby5sb2NhbGlkYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhOiB0aGlzLnVzdWFyaW8ucHJvdmluY2lhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwOiB0aGlzLnVzdWFyaW8uY3AsXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRvcyBKdWdhZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiB0aGlzLmp1Z2Fkb3IuY2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbWlzZXRhOiB0aGlzLmp1Z2Fkb3IuY2FtaXNldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFudGFsb246IHRoaXMuanVnYWRvci5wYW50YWxvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYXM6IHRoaXMuanVnYWRvci5tZWRpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJyaWdvOiB0aGlzLmp1Z2Fkb3IuYWJyaWdvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ29KdWdhZG9yOiB0aGlzLmp1Z2Fkb3IucGFnbyxcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdG9zIFNvY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnb1NvY2lvOiB0aGlzLnNvY2lvLnBhZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpbyA9IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5yZWxvYWQodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNhbmNlbGFyQWJvbm8oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyU29jaW8gPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYnZNb2RhbC5tc2dCb3hDb25maXJtKCfCv0VzdMOhcyBzZWd1ckA/Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsYWNpw7NuIGRlbCBhYm9ubyBkZSBzb2NpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ3NtJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVmFyaWFudDogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVmFyaWFudDogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdTSScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGl0bGU6ICdOTycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGltaW5hclNvY2lvID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGltaW5hclNvY2lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZWxpbWluYXItc29jaW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtpZDogdGhpcy5zb2Npby5pZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWJvbm8gY2FuY2VsYWRvIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnJlbG9hZCh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBYm9ubyBOTyBjYW5jZWxhZG8nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYWphSnVnYWRvcigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGltaW5hckp1Z2Fkb3IgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYnZNb2RhbC5tc2dCb3hDb25maXJtKCfCv0VzdMOhcyBzZWd1ckA/Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQmFqYSBkZSBqdWdhZG9yL2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uU2l6ZTogJ3NtJyxcclxuICAgICAgICAgICAgICAgICAgICBva1ZhcmlhbnQ6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFZhcmlhbnQ6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBva1RpdGxlOiAnU0knLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFRpdGxlOiAnTk8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlckNsYXNzOiAncC0yJyxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlSGVhZGVyQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxpbWluYXJKdWdhZG9yID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGltaW5hckp1Z2Fkb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9lbGltaW5hci1qdWdhZG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7aWQ6IHRoaXMuanVnYWRvci5pZH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQmFqYSBqdWdhZG9yIHRyYW1pdGFkYSBjb3JyZWN0YW1lbnRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5yZWxvYWQodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQmFqYSBqdWdhZG9yIE5PIHRyYW1pdGFkYScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhamFFbnRyZW5hZG9yKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyRW50cmVuYWRvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VyQD8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCYWphIGRlIGVudHJlbmFkb3IvYScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ3NtJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVmFyaWFudDogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVmFyaWFudDogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdTSScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGl0bGU6ICdOTycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGltaW5hckVudHJlbmFkb3IgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsaW1pbmFyRW50cmVuYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2VsaW1pbmFyLWVudHJlbmFkb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtpZDogdGhpcy5lbnRyZW5hZG9yLmlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYWphIGVudHJlbmFkb3IgdHJhbWl0YWRhIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnJlbG9hZCh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYWphIGVudHJlbmFkb3IgTk8gdHJhbWl0YWRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVsaW1pbmFyUGVyZmlsKGlkVXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGltaW5hciA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ8K/UmVhbG1lbnRlIHF1aWVyZXMgZWxpbWluYXIgdHUgY3VlbnRhPycsIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRWxpbWluYXIgY3VlbnRhJyxcclxuICAgICAgICAgICAgICAgIHNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbFZhcmlhbnQ6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdTSScsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcclxuICAgICAgICAgICAgICAgIGZvb3RlckNsYXNzOiAncC0yJyxcclxuICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyID0gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGltaW5hcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnV0YSA9ICcvZWxpbWluYXItdXN1YXJpbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcnV0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7aWQ6IGlkVXN1YXJpb30pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc3VhcmlvIE5PIGVsaW1pbmFkbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSBtYi01IHRleHQtY2VudGVyIGNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5Db250aWdvIHNlZ3VpbW9zIGNyZWNpZW5kbzwvaDE+XHJcbiAgICAgICAgPGgyPsKhSGF6dGUgc29jaW8hPC9oMj5cclxuXHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtNVwiPlxyXG4gICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nIHNyYz1cIi9pbWcvU29jaW9zLmpwZ1wiPjwvYi1jYXJkLWltZz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNw6l0aWRvIGRlIHBhZ28gLS0+ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWV0b2RvUGFnb1wiPk3DqXRvZG8gZGUgcGFnbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwibWV0b2RvUGFnb1wiIDpvcHRpb25zPVwicGFnb1wiIGlkPVwidmFsaWRhclBhZ29Tb2Npb1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGFnb1NvY2lvRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEFsZXJ0IGFuaW1hZGEgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1hbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6c2hvdz1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkaXNtaXNzZWQ9XCJkaXNtaXNzQ291bnREb3duPTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAZGlzbWlzcy1jb3VudC1kb3duPVwiY291bnREb3duQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW52aWFuZG8gaW5mb3JtYWNpw7NuOiB7eyBkaXNtaXNzQ291bnREb3duIH19IHNlZ3VuZG9zLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm1heD1cImRpc21pc3NTZWNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvYi1wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWFsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gYm90b24gZW52aWFyIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaWQ9XCJib3RvblNvY2lvc1wiIEBjbGljaz1cInBhZ2FyKG1ldG9kb1BhZ28pXCI+RW52aWFyPC9iLWJ1dHRvbj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICA8L2ItY29sPiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvYi1yb3c+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdTb2NpbycsXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWV0b2RvUGFnbzogbnVsbCxcclxuICAgICAgICAgICAgZGlzbWlzc1NlY3M6IDMsXHJcbiAgICAgICAgICAgIGRpc21pc3NDb3VudERvd246IDAsXHJcbiAgICAgICAgICAgIHNob3dEaXNtaXNzaWJsZUFsZXJ0OiBmYWxzZSxcclxuICAgICAgICAgICAgIHBhZ286W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiBudWxsLCB0ZXh0OiAnU2VsZWNjaW9uZSB1biBtw6l0b2RvIGRlIHBhZ28nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1BheXBhbCcsIHRleHQ6ICdQYXlwYWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1RhcmpldGEgY3LDqWRpdG8vZMOpYml0bycsIHRleHQ6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0RvbWljaWxpYWNpw7NuIGJhbmNhcmlhJywgdGV4dDogJ0RvbWljaWxpYWNpw7NuIGJhbmNhcmlhJ31cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICBjb3VudERvd25DaGFuZ2VkKGRpc21pc3NDb3VudERvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gZGlzbWlzc0NvdW50RG93blxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnYXIodGlwb1BhZ28pe1xyXG4gICAgICAgICAgICB2YXIgcGFnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhclBhZ29Tb2Npb1wiKTtcclxuICAgICAgICAgICAgdmFyIHBhZ29FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnb1NvY2lvRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBlbnZpYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uU29jaW9zXCIpO1xyXG4gICAgICAgICAgICB2YXIgb2tQYWdvU29jaW8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIE3DqXRvZG8gZGUgcGFnb1xyXG4gICAgICAgICAgICBpZighcGFnby52YWx1ZSApe1xyXG4gICAgICAgICAgICAgICAgcGFnby5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdvRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgcGFnb0Vycm9yLmlubmVySFRNTCA9IFwiRGViZXMgc2VsZWNjaW9uYXIgdW4gbcOpdG9kbyBkZSBwYWdvXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBva1BhZ29Tb2NpbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnby5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHBhZ28udmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBwYWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ29FcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFnb1NvY2lvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tQYWdvU29jaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYob2tQYWdvU29jaW8pe1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL3BhZ28tc29jaW9zJ1xyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7cGFnbzogdGlwb1BhZ299KSxcclxuICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90b25Tb2Npb3MnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gdGhpcy5kaXNtaXNzU2Vjc1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiAnaG9tZSd9KSwgMzAwMCk7ICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBwdWVkbyBlamVjdXRhbWUgcG9ycXVlIGVsIHBhZ28gZXN0w6E6ICcrb2tQYWdvU29jaW8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIFtcbiAgICAgICAgX3ZtLmNhcmdhRW5Qcm9jZXNvXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJiLW5hdmJhclwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInRleHQtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzdGlja3k6IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0b2dnbGVhYmxlOiBcIm1kXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJ3aGl0ZVwiLCBsYWJlbDogXCJTcGlubmluZ1wiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmNhcmdhQ29tcGxldGFkYVxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiYi1uYXZiYXJcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzdGlja3k6IFwiXCIsXG4gICAgICAgICAgICAgICAgICB0b2dnbGVhYmxlOiBcIm1kXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRhcmtcIixcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLW5hdmJhci10b2dnbGVcIiwgeyBhdHRyczogeyB0YXJnZXQ6IFwibmF2LWNvbGxhcHNlXCIgfSB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYi1uYXZiYXItYnJhbmRcIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImhvbWVcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltZy9iYWxvbi5wbmdcIiwgd2lkdGg6IFwiMzBcIiwgYWx0OiBcImJhbG9uXCIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgICBJRi1vcm3DoXRpY29zIEZDXFxyXFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2LWNvbGxhcHNlXCIsIFwiaXMtbmF2XCI6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLW5hdmJhci1uYXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItbmF2LWl0ZW1cIiwgeyBhdHRyczogeyB0bzogeyBuYW1lOiBcImhvbWVcIiB9IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb3RpY2lhcyBkZWwgY2x1YlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb3N0cmFyU29jaW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9zdHJhclNvY2lvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwic29jaW9cIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkluc2NyaWJpcnNlIGNvbW8gc29jaW9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9zdHJhckp1Z2Fkb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9zdHJhckp1Z2Fkb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJqdWdhZG9yXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJJbnNjcmliaXJzZSBjb21vIGp1Z2Fkb3JcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9zdHJhckVudHJlbmFkb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9zdHJhckVudHJlbmFkb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJlbnRyZW5hZG9yXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbnZpYXIgc29saWNpdHVkIGRlIGVudHJlbmFkb3JcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByLTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInBlcmZpbFwiIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJncm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBNaSBwZXJmaWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9sb2dvdXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZWxpbWluYXJDb29raWVzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZm9udC1hd2Vzb21lLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6IFwiI0NENUM1Q1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInNpZ24tb3V0LWFsdFwiLCBzaXplOiBcImxnXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInNlY3Rpb25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1pbmZvIHAtMyBmaXhlZC1ib3R0b21cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNvb2tpZXNTZWN0aW9uXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIkVzdGUgc2l0aW8gd2ViIHV0aWxpemEgY29va2llcywgc2kgcGVybWFuZWNlIGFxdcOtIGRhbW9zIHBvciBoZWNobyBxdWUgYWNlcHRhIHN1IHVzby5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJQdWVkZSBsZWVyIG3DoXMgc29icmUgZWwgdXNvIGRlIGNvb2tpZXMgZW4gcG9sw610aWNhIGRlIGNvb2tpZXMuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJsaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWNlcHRhckNvb2tpZXMgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWNlcHRhciBjb29raWVzXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YXJpYW50OiBcImxpZ2h0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IFwiL3BvbGl0aWNhQ29va2llc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBvbGl0aWNhIGRlIGNvb2tpZXNcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW192bS5fdihcIlB1bHNhIGFjZXB0YXIgcGFyYSBlbGltaW5hciBlc3RlIG1lbnNhamVcIildKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJyb3V0ZXItdmlld1wiKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZm9vdGVyXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZvb3RlciBzdGlja3ktYm90dG9tIGNvbnRhaW5lciB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiwqkgMjAyMCBJRi1vcm3DoXRpY29zIEZDXCIpXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlciBjb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIsK/VGllbmVzIGVsIHTDrXR1bG8gZGUgZW50cmVuYWRvcj9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJFbnbDrWFub3NsbyB5IGRpcmlnZSBhIGFsZ3VubyBkZSBudWVzdHJvcyBlcXVpcG9zXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiLWltZ1wiLCB7IGF0dHJzOiB7IHNyYzogXCIvaW1nL2VudHJlbmFkb3IucG5nXCIsIGZsdWlkOiBcIlwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tZmlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IEJvb2xlYW4oX3ZtLmZpbGUpLFxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVsaWphIHVuIGFyY2hpdm8gbyBkZXNwbMOhY2VsbyBhcXXDrS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcC1wbGFjZWhvbGRlclwiOiBcIlNvbHRhciBhcmNoaXZvIGFxdcOtLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJicm93c2UtdGV4dFwiOiBcIkVsZWdpclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiZW50cmVuYWRvckVycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1hbGVydFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNob3c6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kaXNtaXNzQ291bnREb3duID0gMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkaXNtaXNzLWNvdW50LWRvd25cIjogX3ZtLmNvdW50RG93bkNoYW5nZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIkVudmlhbmRvIGFyY2hpdm86IFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaXNtaXNzQ291bnREb3duKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIHNlZ3VuZG9zLi4uXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItcHJvZ3Jlc3NcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgIG1heDogX3ZtLmRpc21pc3NTZWNzLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRweFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJzdWNjZXNzXCIsIGlkOiBcImJvdG9uRW50cmVuYWRvclwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmVudmlhclRpdHVsbyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW52aWFyXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jYXJvdXNlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtc2hhZG93XCI6IFwiMHB4IDBweCAycHggIzAwMFwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiY2Fyb3VzZWwtZmFkZVwiLFxuICAgICAgICAgICAgICAgIGZhZGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yczogXCJcIixcbiAgICAgICAgICAgICAgICBcImltZy13aWR0aFwiOiBcIjEwMjRcIixcbiAgICAgICAgICAgICAgICBcImltZy1oZWlnaHRcIjogXCI0ODBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjYXB0aW9uOiBcIkJpZW52ZW5pZEAgYSBudWVzdHJhIHdlYlwiLFxuICAgICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiL2ltZy9iYWxvbi1kZS1mdXRib2wuanBnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjYXB0aW9uOiBcIkNvbXBhcnRlIG51ZXN0cmEgcGFzacOzblwiLFxuICAgICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiL2ltZy9jYW1wby5qcGdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNhcHRpb246IFwiQXF1w60gZW5jb250cmFyw6FzIGxhcyBub3RpY2lhcyBkZWwgY2x1YlwiLFxuICAgICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IFwiL2ltZy9lc2N1ZWxhLmpwZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBjYXB0aW9uOiBcIlJlc3VsdGFkb3NcIiwgXCJpbWctc3JjXCI6IFwiL2ltZy9mdXRib2wuanBnXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0zIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZGVjazogXCJkZWNrXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIkhpc3RvcmlhIGRlbCBjbHViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29ub2NlIG51ZXN0cmEgaGlzdG9yaWFcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcInNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJJbnN0YWxhY2lvbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250ZW1wbGEgbnVlc3RyYXMgaW5zdGFsYWNpb25lc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJQbGFudGlsbGFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25vY2UgbnVlc3RyYXMgcGxhbnRpbGxhc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRlY2s6IFwiZGVja1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJDbGFzaWZpY2FjacOzblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT2JzZXJ2YSBudWVzdHJhIGNsYXNpZmljYWNpw7NuIGVuIGxhIHRhYmxhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiUHLDs3hpbW9zIHBhcnRpZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtd2hpdGVcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcXXDrSBwdWVkZXMgdmVyIGNvbnRyYSBxdWllbiBqdWdhbW9zIGVsIHByw7N4aW1vIGVuY3VlbnRyb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJkYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiUmVzdWx0YWRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWlyYSBjb21vIG5vcyBoYSBpZG8gZW4gbG9zIMO6bHRpbW9zIHBhcnRpZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvcmVjb21lbmRhY2lvbmVzLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwibG9nb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVjb21lbmRhY2lvbmVzIHBhcmEgZXZpdGFyIGxvcyByaWVzZ29zIHNvYnJlIGxhIHNhbHVkIGVuIGxhIHZ1ZWx0YSBhIGxhIGNvbXBldGljacOzbiBlbiBlbCBmw7p0Ym9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIzMCBtYXlvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBEZXBhcnRhbWVudG8gTcOpZGljbyBkZSBsYSBSZWFsIEZlZGVyYWNpw7NuIEVzcGHDsW9sYSBkZSBGw7p0Ym9sLCBjb24gbGEgY29sYWJvcmFjacOzbiBkZSBwcm9mZXNpb25hbGVzIGV4cGVydG9zIGRlIG5pdmVsIGludGVybmFjaW9uYWwsIGhhIGVsYWJvcmFkbyB1biBQcm90b2NvbG8gbcOpZGljbyB5IGRlIHByZXBhcmFjacOzbiBmw61zaWNhIGJhc2FkbyBlbiByZWNvbWVuZGFjaW9uZXMgcGFyYSBldml0YXIgbG9zIHJpZXNnb3MgcGFyYSBsYSBzYWx1ZCBlbiBsYSB2dWVsdGEgYSBsb3MgZW50cmVuYW1pZW50b3MgeSBhIGxhIGNvbXBldGljacOzbiBlbiBlbCBmw7p0Ym9sLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY2RuMS5zZWZ1dGJvbC5jb20vc2l0ZXMvZGVmYXVsdC9maWxlcy9wZGYvcmVjb21lbmRhY2lvbmVzX3BhcmFfZXZpdGFyX2xvc19yaWVnb3Nfc29icmFfbGFfc2FsdWRfZW5fbGFfdnVlbHRhX2FfbGFfY29tcGV0aWNpb25fZW5fZWxfZnV0Ym9sLnBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQXF1w60gZWwgZW5sYWNlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWcvZmFzZTIuanBnXCIsIGFsdDogXCJsb2dvXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRmFzZSAyIGRlIGxhIGRlc2VzY2FsYWRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIyNyBtYXlvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBDb25zZWpvIFN1cGVyaW9yIGRlIERlcG9ydGVzIGhhIHByZXBhcmFkbyB1biBkb2N1bWVudG8gcXVlIGRhIHJlc3B1ZXN0YSBhIGxhcyBkdWRhcyBtw6FzIGZyZWN1ZW50ZXMgZGUgbG9zIGRlcG9ydGlzdGFzIHByb2Zlc2lvbmFsZXMgeSBmZWRlcmFkb3MgZGUgY2FyYSBhIGxhIEZhc2UgMiBkZSBsYSBkZXNlc2NhbGFkYSwgcXVlIGVzdGEgc2VtYW5hIGhhIGNvbWVuemFkbyBlbiBncmFuIHBhcnRlIGRlbCBwYcOtcy5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2NkbjEuc2VmdXRib2wuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvZmFxc19kZXBvcnRlX2Zhc2VfMi5wZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFxdcOtIGVsIGVubGFjZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2xvZ29fcmZlZi5qcGdcIiwgYWx0OiBcImxvZ29cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMjcgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIFJGRUYgYXBydWViYSBsYSBzdXNwZW5zacOzbiBkZSB0b2RhcyBsYXMgY29tcGV0aWNpb25lcyBubyBwcm9mZXNpb25hbGVzIGhhc3RhIHF1ZSBsYXMgYXV0b3JpZGFkZXMgY29uc2lkZXJlbiBxdWUgc2UgcHVlZGVuIHJlYW51ZGFyIHNpbiByaWVzZ29cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9Db211bmljYWRvX29maWNpYWwuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJjb211bmljYWRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbXVuaWNhZG8gT2ZpY2lhbCB8IENvcm9uYXZpcnVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIxMCBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVlZGFuIHN1c3BlbmRpZG9zIHRvZG9zIGxvcyBlbnRyZW5hbWllbnRvcyBkZXNkZSBtYcOxYW5hIG1pw6lyY29sZXMgMTEgZGUgbWFyem8gZGUgMjAyMCBoYXN0YSBudWV2byBhdmlzby4gTGEgUmVhbCBGZWRlcmFjacOzbiBkZSBGw7p0Ym9sIGRlIE1hZHJpZCBoYSBhbnVuY2lhZG8gbGEgc3VzcGVuc2nDs24gZGUgbGFzIGNvbXBldGljaW9uZXMgdGVycml0b3JpYWxlcyBkdXJhbnRlIGxhcyBwcsOzeGltYXMgZG9zIHNlbWFuYXMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvcmVzdWx0YWRvcy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInJlc3VsdGFkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVzdWx0YWRvcyBkZWwgZmluIGRlIHNlbWFuYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiOSBtYXJ6bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVlc3Ryb3MgZXF1aXBvcyBjb250aW51YW4gY29uIGxhIGJ1ZW5hIGRpbsOhbWljYSBkZSBlc3RhcyDDumx0aW1hcyA3IGpvcm5hZGFzLiBUcmFzIGVsIHRyb3BpZXpvIGluaWNpYWwgYSBsYSB2dWVsdGEgZGUgbmF2aWRhZCwgc2UgY3VlbnRhbiBsb3MgcGFydGlkb3MgcG9yIHZpY3RvcmlhLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL3B1ZXN0b19lbnRyZW5hZG9yLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwicHVlc3RvX2VudHJlbmFkb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUHVlc3RvcyBkZSBlbnRyZW5hZG9yZXMgdmFjYW50ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjIgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmVtb3MgZGlzcG9uaWJsZXMgYWxndW5hcyB2YWNhbnRlcyBkZSBlbnRyZW5hZG9yZXMgZGUgYWxndW5hcyBkZSBudWVzdHJhcyBwbGFudGlsbGFzLCBzaSB0aWVuZXMgZWwgdMOtdHVsbyBtYW5kYWxvIHkgZm9ybWEgcGFydGUgZGVsIGNsdWIuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNSB0ZXh0LWNlbnRlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiUmVsbGVuYSBlc3RlIGZvcm11bGFyaW9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLCoXkgw7puZXRlIGEgbnVlc3RybyBlcXVpcG8hXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1jb250YWluZXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC01XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJjYXRlZ29yaWFzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2F0ZWdvcsOtYTpcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidmFsaWRhckNhdGVnb3JpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY2F0ZWdvcmlhc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2F0ZWdvcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3JpYSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhdGVnb3JpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJjYXRlZ29yaWFFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFDYW1pc2V0YVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIGNhbWlzZXRhOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ2YWxpZGFyQ2FtaXNldGFcIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYUNhbWlzZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhQ2FtaXNldGEgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYUNhbWlzZXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImNhbWlzZXRhRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhUGFudGFsb25cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBwYW50YWzDs246XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInZhbGlkYXJQYW50YWxvblwiLCBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhbGxhUGFudGFsb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFQYW50YWxvbiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhbGxhUGFudGFsb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwicGFudGFsb25FcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFNZWRpYXNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBtZWRpYXM6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInZhbGlkYXJNZWRpYXNcIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYU1lZGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYU1lZGlhcyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhbGxhTWVkaWFzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcIm1lZGlhc0Vycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0YWxsYUFicmlnb1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIGFicmlnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidmFsaWRhckFicmlnb1wiLCBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhbGxhQWJyaWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhQWJyaWdvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFBYnJpZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiYWJyaWdvRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1ldG9kb1BhZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNw6l0b2RvIGRlIHBhZ286XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInZhbGlkYXJQYWdvXCIsIG9wdGlvbnM6IF92bS5wYWdvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1ldG9kb1BhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0b2RvUGFnbyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldG9kb1BhZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwicGFnb0Vycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWFsZXJ0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc21pc3NDb3VudERvd24gPSAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBpbmZvcm1hY2nDs246IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzbWlzc0NvdW50RG93bikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgc2VndW5kb3MuLi5cIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImItcHJvZ3Jlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIG1heDogX3ZtLmRpc21pc3NTZWNzLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGlkOiBcImJvdG9uSnVnYWRvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5pbnNjcmliaXJKdWdhZG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRvZG9QYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhQ2FtaXNldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhUGFudGFsb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhTWVkaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUFicmlnb1xuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW52aWFyXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi01IHRleHQtY2VudGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInRleHQtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAhX3ZtLnVzdWFyaW8uZmVjaGFOYWNpbWllbnRvXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwiaW5mb1wiLCBkaXNhYmxlZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwgeyBhdHRyczogeyBzbWFsbDogXCJcIiwgdHlwZTogXCJncm93XCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIENhcmdhbmRvLi4uXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS51c3VhcmlvLmZlY2hhTmFjaW1pZW50b1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjUwZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIk1pIHBlcmZpbFwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRlci10ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImhlYWRlci10YWdcIjogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItYmctdmFyaWFudFwiOiBcImluZm9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLm5vbWJyZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8uYXBlbGxpZG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOb21icmU6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ1c3VhcmlvTm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJub21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJub21icmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgbm9tYnJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8ubm9tYnJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcIm5vbWJyZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8ubm9tYnJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwibm9tYnJlRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXBlbGxpZG9zOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9BcGVsbGlkb3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHVzIGFwZWxsaWRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmFwZWxsaWRvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJhcGVsbGlkb3NcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmFwZWxsaWRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImFwZWxsaWRvc0Vycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1haWw6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ1c3VhcmlvRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8uZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJlbWFpbEVycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb250cmFzZcOxYTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb1Bhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHVuYSBjb250cmFzZcOxYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcInBhc3N3b3JkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInBhc3N3b3JkRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29uZmlybWFyIGNvbnRyYXNlw7FhOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJjb25maXJtUGFzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlJlcGl0ZSBsYSBjb250cmFzZcOxYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNvbmZpcm1QYXNzd29yZEVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJWZXIgY29udHJhc2XDsWFzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInNob3dQYXNzd29yZHNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRG5pOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5kbmkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9EbmlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IFwiOVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB0dSBkbmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5kbmksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiZG5pXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5kbmlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJkbmlFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGZWNoYSBkZSBuYWNpbWllbnRvOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjZSBhcXXDrSB0dSBmZWNoYSBkZSBuYWNpbWllbnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZlY2hhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mZWNoYSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmZWNoYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1pbmZvIG1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRpcmVjY2nDs25cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMiBtdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhbGxlOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5jYWxsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0NhbGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY2FsbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY2FsbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiY2FsbGVFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMb2NhbGlkYWQ6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmxvY2FsaWRhZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0xvY2FsaWRhZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB0dSBsb2NhbGlkYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5sb2NhbGlkYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwibG9jYWxpZGFkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5sb2NhbGlkYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJsb2NhbGlkYWRFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcm92aW5jaWE6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLnByb3ZpbmNpYSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb1Byb3ZpbmNpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB0dSBwcm92aW5jaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5wcm92aW5jaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwicHJvdmluY2lhXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXN1YXJpby5wcm92aW5jaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJwcm92aW5jaWFFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDw7NkaWdvIHBvc3RhbDpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8uY3ApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9DcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGPDs2RpZ28gcG9zdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY3BcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiY3BFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5leGlzdGVKdWdhZG9yXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm8gbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJKdWdhZG9yXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2F0ZWdvcmlhOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qdWdhZG9yLmNhdGVnb3JpYSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9wdGlvbnM6IF92bS5jYXRlZ29yaWFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5jYXRlZ29yaWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWdhZG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2F0ZWdvcmlhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImp1Z2Fkb3IuY2F0ZWdvcmlhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgQ2FtaXNldGE6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmp1Z2Fkb3IuY2FtaXNldGEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5jYW1pc2V0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1Z2Fkb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYW1pc2V0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmNhbWlzZXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgcGFudGFsw7NuOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qdWdhZG9yLnBhbnRhbG9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmp1Z2Fkb3IucGFudGFsb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWdhZG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFudGFsb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwianVnYWRvci5wYW50YWxvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIG1lZGlhczpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5tZWRpYXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5tZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5qdWdhZG9yLCBcIm1lZGlhc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLm1lZGlhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIGFicmlnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5hYnJpZ28pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0udGFsbGFzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5hYnJpZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5qdWdhZG9yLCBcImFicmlnb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmFicmlnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5wYWdvKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnBhZ28gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5qdWdhZG9yLnBhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5qdWdhZG9yLCBcInBhZ29cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwianVnYWRvci5wYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmJhamFKdWdhZG9yIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCYWphIGp1Z2Fkb3JcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZXhpc3RlU29jaW9cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtaW5mbyBtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNvY2lvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTcOpdG9kbyBkZSBwYWdvOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zb2Npby5wYWdvKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnBhZ28gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zb2Npby5wYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc29jaW8sIFwicGFnb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzb2Npby5wYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNhbmNlbGFyQWJvbm8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbGFyIGFib25vIHNvY2lvXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmV4aXN0ZUVudHJlbmFkb3JcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtaW5mbyBtYi01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVudHJlbmFkb3JcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUaXR1bG8gZW52aWFkbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZW50cmVuYWRvci50aXR1bG8pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWZpbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogQm9vbGVhbihfdm0uZmlsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbGlqYSB1biBhcmNoaXZvIG8gZGVzcGzDoWNlbG8gYXF1w60uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcC1wbGFjZWhvbGRlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNvbHRhciBhcmNoaXZvIGFxdcOtLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZS10ZXh0XCI6IFwiRWxlZ2lyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTIgbXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iYWphRW50cmVuYWRvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQmFqYSBlbnRyZW5hZG9yXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLXN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbnZpYXJUaXR1bG8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhciBvdHJvIHTDrXR1bG9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJvdXRsaW5lLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImVkaWNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lZGl0YXJQZXJmaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdGFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbGltaW5hclBlcmZpbChfdm0udXN1YXJpby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbGltaW5hciBjdWVudGFcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIm91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2F2ZUNoYW5nZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3R1YWxpemFyUGVyZmlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdHVhbGl6YXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2FuY2VsYXJFZGljaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbGFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFycmFmb1xuICAgICAgICA/IF9jKFwic21hbGxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlNpIGVyZXMganVnYWRvci9hLCBzb2NpQCBvIGVudHJlbmFkb3IvYSB5IGRlc2VhcyB0cmFtaXRhciBsYSBiYWphLCBwdWxzYSBhbnRlcyBlbCBib3TDs24gZWRpdGFyLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImItY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiLCBhdHRyczogeyB2YXJpYW50OiBcImxpZ2h0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlZvbHZlciBhIGluaWNpb1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiUG9sw610aWNhIGRlIGNvb2tpZXNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIkxhIHByZXNlbnRlIHBvbMOtdGljYSBkZSBjb29raWVzIHRpZW5lIHBvciBmaW5hbGlkYWQgaW5mb3JtYXJsZSBkZSBtYW5lcmEgY2xhcmEgeSBwcmVjaXNhIHNvYnJlIGxhcyBjb29raWVzIHF1ZSBzZSB1dGlsaXphbiBlbiBsYSBww6FnaW5hIHdlYiBkZSBJRi1vcm3DoXRpY29zIEZDLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtfYyhcInVcIiwgW192bS5fdihcIsK/UXXDqSBzb24gbGFzIGNvb2tpZXM/XCIpXSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgVW5hIGNvb2tpZSBlcyB1biBwZXF1ZcOxbyBmcmFnbWVudG8gZGUgdGV4dG8gcXVlIGxvcyBzaXRpb3Mgd2ViIHF1ZSB2aXNpdGEgZW52w61hbiBhbCBuYXZlZ2Fkb3IgeSBxdWUgcGVybWl0ZSBxdWUgZWwgc2l0aW8gd2ViIHJlY3VlcmRlIGluZm9ybWFjacOzbiBzb2JyZSBzdSB2aXNpdGEsIGNvbW8gc3UgaWRpb21hIHByZWZlcmlkbyB5IG90cmFzIG9wY2lvbmVzLCBjb24gZWwgZmluIGRlIGZhY2lsaXRhciBzdSBwcsOzeGltYSB2aXNpdGEgeSBoYWNlciBxdWUgZWwgc2l0aW8gbGUgcmVzdWx0ZSBtw6FzIMO6dGlsLiBMYXMgY29va2llcyBkZXNlbXBlw7FhbiB1biBwYXBlbCBtdXkgaW1wb3J0YW50ZSB5IGNvbnRyaWJ1eWVuIGEgdGVuZXIgdW5hIG1lam9yIGV4cGVyaWVuY2lhIGRlIG5hdmVnYWNpw7NuIHBhcmEgZWwgdXN1YXJpby5cXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX2MoXCJ1XCIsIFtfdm0uX3YoXCJUaXBvcyBkZSBjb29raWVzXCIpXSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgU2Vnw7puIHF1acOpbiBzZWEgbGEgZW50aWRhZCBxdWUgZ2VzdGlvbmUgZWwgZG9taW5pbyBkZXNkZSBkw7NuZGUgc2UgZW52w61hbiBsYXMgY29va2llcyB5IHNlIHRyYXRlbiBsb3MgZGF0b3MgcXVlIHNlIG9idGVuZ2FuLCBzZSBwdWVkZW4gZGlzdGluZ3VpciBkb3MgdGlwb3M6IGNvb2tpZXMgcHJvcGlhcyB5IGNvb2tpZXMgZGUgdGVyY2Vyb3MuXFxuICAgICAgICAgICAgICAgIEV4aXN0ZSB0YW1iacOpbiB1bmEgc2VndW5kYSBjbGFzaWZpY2FjacOzbiBzZWfDum4gZWwgcGxhem8gZGUgdGllbXBvIHF1ZSBwZXJtYW5lY2VuIGFsbWFjZW5hZGFzIGVuIGVsIG5hdmVnYWRvciBkZWwgY2xpZW50ZSwgcHVkaWVuZG8gdHJhdGFyc2UgZGUgY29va2llcyBkZSBzZXNpw7NuIG8gY29va2llcyBwZXJzaXN0ZW50ZXMuXFxuICAgICAgICAgICAgICAgIFBvciDDumx0aW1vLCBleGlzdGUgb3RyYSBjbGFzaWZpY2FjacOzbiBjb24gY2luY28gdGlwb3MgZGUgY29va2llcyBzZWfDum4gbGEgZmluYWxpZGFkIHBhcmEgbGEgcXVlIHNlIHRyYXRlbiBsb3MgZGF0b3Mgb2J0ZW5pZG9zOiBjb29raWVzIHTDqWNuaWNhcywgY29va2llcyBkZSBwZXJzb25hbGl6YWNpw7NuLCBjb29raWVzIGRlIGFuw6FsaXNpcywgY29va2llcyBwdWJsaWNpdGFyaWFzIHkgY29va2llcyBkZSBwdWJsaWNpZGFkIGNvbXBvcnRhbWVudGFsLlxcbiAgICAgICAgICAgICAgICBQYXJhIG3DoXMgaW5mb3JtYWNpw7NuIGEgZXN0ZSByZXNwZWN0byBwdWVkZSBjb25zdWx0YXIgbGEgR3XDrWEgc29icmUgZWwgdXNvIGRlIGxhcyBjb29raWVzIGRlIGxhIEFnZW5jaWEgRXNwYcOxb2xhIGRlIFByb3RlY2Npw7NuIGRlIERhdG9zLlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtfYyhcInVcIiwgW192bS5fdihcIkNvb2tpZXMgdXRpbGl6YWRhcyBlbiBsYSB3ZWJcIildKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBBIGNvbnRpbnVhY2nDs24gc2UgaWRlbnRpZmljYW4gbGFzIGNvb2tpZXMgcXVlIGVzdMOhbiBzaWVuZG8gdXRpbGl6YWRhcyBlbiBlc3RhIHDDoWdpbmE6IFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAtIE51ZXN0cmEgcMOhZ2luYSB1dGlsaXphIHVuYSBzb2xhIGNvb2tpZSBxdWUgc2ltcGxlbWVudGUgZ3VhcmRhIHVuIG1lbnNhamUgZGUgYmllbnZlbmlkYSBhIGxhIHDDoWdpbmEuXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICBfYyhcInVcIiwgW192bS5fdihcIkFjZXB0YWNpw7NuIGRlIGxhIHBvbMOtdGljYSBkZSBjb29raWVzXCIpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlB1bHNhbmRvIGVsIGJvdMOzbiBBY2VwdGFyIGNvb2tpZXMgc2UgYXN1bWUgcXVlIHVzdGVkIGFjZXB0YSBlbCB1c28gZGUgY29va2llcy5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiQ8OzbW8gbW9kaWZpY2FyIGxhIGNvbmZpZ3VyYWNpw7NuIGRlIGxhcyBjb29raWVzXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICBVc3RlZCBwdWVkZSByZXN0cmluZ2lyLCBibG9xdWVhciBvIGJvcnJhciBsYXMgY29va2llcyBkZSBJRi1vcm3DoXRpY29zIEZDIG8gY3VhbHF1aWVyIG90cmEgcMOhZ2luYSB3ZWIgdXRpbGl6YW5kbyBzdSBuYXZlZ2Fkb3IuIEVuIGNhZGEgbmF2ZWdhZG9yIGxhIG9wZXJhdGl2YSBlcyBkaWZlcmVudGUsIGxhIGZ1bmNpw7NuIGRlIFwiQXl1ZGFcIiBsZSBtb3N0cmFyw6EgY8OzbW8gaGFjZXJsby5cXG4gICAgICAgICAgICAnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi01IHRleHQtY2VudGVyIGNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiQ29udGlnbyBzZWd1aW1vcyBjcmVjaWVuZG9cIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCLCoUhhenRlIHNvY2lvIVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwgeyBhdHRyczogeyBzcmM6IFwiL2ltZy9Tb2Npb3MuanBnXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWV0b2RvUGFnb1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTcOpdG9kbyBkZSBwYWdvOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ2YWxpZGFyUGFnb1NvY2lvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1ldG9kb1BhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldG9kb1BhZ28gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWV0b2RvUGFnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInBhZ29Tb2Npb0Vycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1hbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzbWlzc2VkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNtaXNzQ291bnREb3duID0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNtaXNzLWNvdW50LWRvd25cIjogX3ZtLmNvdW50RG93bkNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVudmlhbmRvIGluZm9ybWFjacOzbjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc21pc3NDb3VudERvd24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgc2VndW5kb3MuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1wcm9ncmVzc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiBfdm0uZGlzbWlzc1NlY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiwgaWQ6IFwiYm90b25Tb2Npb3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucGFnYXIoX3ZtLm1ldG9kb1BhZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbnZpYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9