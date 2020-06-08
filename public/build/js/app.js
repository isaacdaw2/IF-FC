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
/*! exports provided: default */
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
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
router.beforeEach(function (to, from, next) {
  axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/datos-jugadores').then(function (response) {
    if (response.data.id) {
      if (to.path === '/jugadores') {
        next('/');
        console.log('Estoy en home porque ya estoy inscrito como jugador');
      } else {
        console.log('Soy jugador pero me dirijo a otra página');
        next();
      }
    } else {
      next();
      console.log('No soy jugador, desvio con éxito hacia la página elegida');
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (router);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT8zNDFmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/NjU4YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZT9kZjIxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzYxOGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/ZDMyYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Ib21lLnZ1ZT9jY2I0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlP2FiY2IiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSnVnYWRvci52dWU/NjMzNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/N2ZmNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlPzY3MGQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUG9saXRpY2FDb29raWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlPzA1NTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9lYzQwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1NvY2lvLnZ1ZT9hOTU3Iiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9FbnRyZW5hZG9yLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL0p1Z2Fkb3IudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9QZXJmaWwudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9Tb2Npby52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT84Zjg5Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlPzY3MGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSG9tZS52dWU/NjlhMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9KdWdhZG9yLnZ1ZT9hY2IyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1BlcmZpbC52dWU/NDg3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlPzdiMDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU29jaW8udnVlPzE3N2QiXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhVXNlclNlY3JldCIsImZhU2lnbk91dEFsdCIsIlZ1ZSIsImNvbXBvbmVudCIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZSIsIkJvb3RzdHJhcFZ1ZSIsIlZ1ZVJvdXRlciIsInJvdXRlcyIsInBhdGgiLCJuYW1lIiwiSG9tZSIsIkp1Z2Fkb3IiLCJTb2NpbyIsIkVudHJlbmFkb3IiLCJQZXJmaWwiLCJQb2xpdGljYUNvb2tpZXMiLCJyb3V0ZXIiLCJiZWZvcmVFYWNoIiwidG8iLCJmcm9tIiwibmV4dCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImlkIiwiY29uc29sZSIsImxvZyIsImVsIiwiY29tcG9uZW50cyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEseUVBQU8sQ0FBQ0MsR0FBUixDQUFZQyw4RUFBWjtBQUNBRix5RUFBTyxDQUFDQyxHQUFSLENBQVlFLDhFQUFaO0FBRUFDLDJDQUFHLENBQUNDLFNBQUosQ0FBYyxtQkFBZCxFQUFtQ0MsNEVBQW5DO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBRiwyQ0FBRyxDQUFDRyxHQUFKLENBQVFDLHFEQUFSO0FBQ0FKLDJDQUFHLENBQUNHLEdBQUosQ0FBUUUsa0RBQVI7QUFFQSxJQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUFFQyxNQUFJLEVBQUUsR0FBUjtBQUFhQyxNQUFJLEVBQUUsTUFBbkI7QUFBMkJQLFdBQVMsRUFBRVEsNERBQUlBO0FBQTFDLENBRFcsRUFFWDtBQUFFRixNQUFJLEVBQUUsWUFBUjtBQUFzQkMsTUFBSSxFQUFFLFNBQTVCO0FBQXVDUCxXQUFTLEVBQUVTLGdFQUFPQTtBQUF6RCxDQUZXLEVBR1g7QUFBRUgsTUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUksRUFBRSxPQUF6QjtBQUFrQ1AsV0FBUyxFQUFFVSw4REFBS0E7QUFBbEQsQ0FIVyxFQUlYO0FBQUVKLE1BQUksRUFBRSxlQUFSO0FBQXlCQyxNQUFJLEVBQUUsWUFBL0I7QUFBNkNQLFdBQVMsRUFBRVcsbUVBQVVBO0FBQWxFLENBSlcsRUFLWDtBQUFFTCxNQUFJLEVBQUUsV0FBUjtBQUFxQkMsTUFBSSxFQUFFLFFBQTNCO0FBQXFDUCxXQUFTLEVBQUVZLCtEQUFNQTtBQUF0RCxDQUxXLEVBTVg7QUFBRU4sTUFBSSxFQUFFLGtCQUFSO0FBQTRCQyxNQUFJLEVBQUUsaUJBQWxDO0FBQXFEUCxXQUFTLEVBQUVhLHdFQUFlQTtBQUEvRSxDQU5XLENBQWY7QUFTQSxJQUFNQyxNQUFNLEdBQUcsSUFBSVYsa0RBQUosQ0FBYztBQUN6QkMsUUFBTSxFQUFOQSxNQUR5QixDQUNsQjs7QUFEa0IsQ0FBZCxDQUFmO0FBSUFTLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixVQUFDQyxFQUFELEVBQUtDLElBQUwsRUFBV0MsSUFBWCxFQUFvQjtBQUVsQ0MsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLGtCQUFWLEVBQ0tDLElBREwsQ0FDVSxVQUFBQyxRQUFRLEVBQUk7QUFFZCxRQUFHQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsRUFBakIsRUFBb0I7QUFDaEIsVUFBR1IsRUFBRSxDQUFDVixJQUFILEtBQVksWUFBZixFQUE0QjtBQUN4QlksWUFBSSxDQUFDLEdBQUQsQ0FBSjtBQUNBTyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxxREFBWjtBQUNILE9BSEQsTUFHUTtBQUNKRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBWjtBQUNBUixZQUFJO0FBQ1A7QUFDSixLQVJELE1BUU87QUFDSEEsVUFBSTtBQUNKTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwwREFBWjtBQUNIO0FBQ0osR0FmTDtBQWdCSCxDQWxCRDtBQW9CZVoscUVBQWY7QUFFQSxJQUFJZiwyQ0FBSixDQUFRO0FBQ0o0QixJQUFFLEVBQUUsTUFEQTtBQUVKQyxZQUFVLEVBQUU7QUFBQ0MsT0FBRyxFQUFIQSwyREFBRDtBQUFNckIsUUFBSSxFQUFKQSw0REFBTjtBQUFZQyxXQUFPLEVBQVBBLGdFQUFaO0FBQXFCQyxTQUFLLEVBQUxBLDhEQUFyQjtBQUE0QkMsY0FBVSxFQUFWQSxtRUFBNUI7QUFBd0NDLFVBQU0sRUFBTkEsK0RBQXhDO0FBQWdEQyxtQkFBZSxFQUFmQSx3RUFBZUE7QUFBL0QsR0FGUjtBQUdKQyxRQUFNLEVBQU5BO0FBSEksQ0FBUixFOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBaUY7QUFDM0I7QUFDTDs7O0FBR2pEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHdFQUFNO0FBQ1IsRUFBRSw2RUFBTTtBQUNSLEVBQUUsc0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWtMLENBQWdCLDhPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXdGO0FBQzNCO0FBQ0w7OztBQUd4RDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixFQUFFLDZGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF5TCxDQUFnQixxUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRjtBQUMzQjtBQUNMOzs7QUFHbEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUixFQUFFLDhFQUFNO0FBQ1IsRUFBRSx1RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBbUwsQ0FBZ0IsK09BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXNMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFxTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F6TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBNkY7QUFDN0Y7OztBQUdBO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQjtBQUNBLEVBQUUseUZBQU07QUFDUixFQUFFLGtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNyQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9MLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrREE7QUFFQTtBQUNBO0FBQUE7QUFDQSxlQURBO0FBRUEsd0JBRkE7QUFHQSwwQkFIQTtBQUlBLDZCQUpBO0FBS0EsMEJBTEE7QUFNQSw0QkFOQTtBQU9BO0FBUEE7QUFBQSxHQURBO0FBVUE7QUFDQSxrQkFEQSw0QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQSxtQkFOQSw2QkFNQTtBQUNBO0FBQ0E7QUFSQSxHQVZBO0FBb0JBLFNBcEJBLHFCQW9CQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRUFDQSxJQURBLENBQ0E7QUFDQTs7QUFDQTtBQUNBLHFDQUNBLDBCQURBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVpBO0FBY0EseUVBQ0EsSUFEQSxDQUNBO0FBQ0E7O0FBQ0E7QUFDQSx1Q0FDQSw0QkFEQTtBQUVBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTtBQWNBLDRFQUNBLElBREEsQ0FDQTtBQUNBOztBQUNBO0FBQ0EsMENBQ0EsK0JBREE7QUFFQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkE7QUFhQTtBQWxFQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0Esb0JBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHlCQUZBO0FBR0Esb0JBSEE7QUFJQSx5QkFKQTtBQUtBO0FBTEE7QUFPQSxHQVZBO0FBV0E7QUFDQSxvQkFEQSw0QkFDQSxnQkFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsZ0JBSkEsMEJBSUE7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxtQkFGQTtBQUdBLHdCQUhBO0FBSUEsd0NBSkE7QUFLQSw0QkFMQTtBQU1BLDRCQU5BO0FBT0Esc0JBUEE7QUFRQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxLQTdCQTtBQThCQSxXQTlCQSxxQkE4QkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQVhBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwS0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEdBTkE7QUFPQTtBQUNBLGdCQURBLHdCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGNBSkEsc0JBSUEsS0FKQSxFQUlBO0FBQ0E7QUFDQTtBQU5BLEdBUEE7QUFlQSxTQWZBLHFCQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUNBLGlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EscUJBREE7QUFFQSx5QkFGQTtBQUdBLHlCQUhBO0FBSUEsdUJBSkE7QUFLQSx1QkFMQTtBQU1BLHNCQU5BO0FBT0Esb0JBUEE7QUFRQSx5QkFSQTtBQVNBLGlDQVRBO0FBVUEsbUJBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQSxFQUtBO0FBQUE7QUFBQTtBQUFBLE9BTEEsRUFNQTtBQUFBO0FBQUE7QUFBQSxPQU5BLEVBT0E7QUFBQTtBQUFBO0FBQUEsT0FQQSxFQVFBO0FBQUE7QUFBQTtBQUFBLE9BUkEsQ0FWQTtBQW9CQSxlQUNBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQSxPQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUEsT0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBLE9BSkEsRUFLQTtBQUFBO0FBQUE7QUFBQSxPQUxBLENBcEJBO0FBMkJBLGFBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQTtBQTNCQTtBQWtDQSxHQXJDQTtBQXNDQTtBQUNBLG9CQURBLDRCQUNBLGdCQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxvQkFKQSw0QkFJQSxtQkFKQSxFQUlBLGlCQUpBLEVBSUEscUJBSkEsRUFJQSxxQkFKQSxFQUlBLG1CQUpBLEVBSUEsbUJBSkEsRUFJQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBVEEsQ0FXQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBakJBLENBbUJBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkF6QkEsQ0E0QkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FSQSxDQXBDQSxDQThDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FSQSxDQXREQSxDQWdFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FSQSxDQXhFQSxDQWtGQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FSQSxDQTFGQSxDQW9HQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FSQSxDQTVHQSxDQXNIQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FSQTs7QUFVQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxnQ0FGQTtBQUdBO0FBQUE7QUFDQSx3Q0FEQTtBQUVBLGdEQUZBO0FBR0EsZ0RBSEE7QUFJQSw0Q0FKQTtBQUtBO0FBTEEsV0FIQTtBQVVBLHFCQVZBO0FBV0EsMEJBWEE7QUFZQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE9BcEJBLE1Bb0JBO0FBQ0EsZ0RBQ0EsYUFEQSxHQUNBLFdBREEsR0FFQSxhQUZBLEdBRUEsVUFGQSxHQUdBLGFBSEEsR0FHQSxVQUhBLEdBSUEsV0FKQSxHQUlBLFFBSkEsR0FLQSxXQUxBLEdBS0EsUUFMQSxHQU1BLFNBTkEsR0FNQSxNQU5BO0FBT0E7QUFDQTtBQXpLQTtBQXRDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpUEE7QUFDQTtBQUNBO0FBQUE7QUFDQSxpQkFEQTtBQUVBLGlCQUZBO0FBR0EsZUFIQTtBQUlBLG9CQUpBO0FBS0EsY0FMQTtBQU1BLDBCQU5BO0FBT0Esd0JBUEE7QUFRQSw2QkFSQTtBQVNBLG1CQVRBO0FBVUEsb0JBVkE7QUFXQSw4QkFYQTtBQVlBLHNCQVpBO0FBYUEsa0JBYkE7QUFjQSx1QkFkQTtBQWVBLHlCQWZBO0FBZ0JBLDRCQWhCQTtBQWlCQSxlQWpCQTtBQWtCQSx1QkFsQkE7QUFtQkEsNEJBbkJBO0FBb0JBLG1CQUNBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQSxPQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUEsT0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBLE9BSkEsRUFLQTtBQUFBO0FBQUE7QUFBQSxPQUxBLEVBTUE7QUFBQTtBQUFBO0FBQUEsT0FOQSxFQU9BO0FBQUE7QUFBQTtBQUFBLE9BUEEsQ0FwQkE7QUE2QkEsZUFDQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsT0FGQSxFQUdBO0FBQUE7QUFBQTtBQUFBLE9BSEEsRUFJQTtBQUFBO0FBQUE7QUFBQSxPQUpBLENBN0JBO0FBbUNBLGFBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBO0FBbkNBO0FBQUEsR0FEQTtBQTBDQSxTQTFDQSxxQkEwQ0E7QUFBQTs7QUFDQSxrRUFDQSxJQURBLENBQ0E7QUFBQSxhQUNBLCtCQUNBLG9CQURBLEVBRUEsc0JBRkEsRUFHQSwrQkFKQTtBQUFBLEtBREE7QUFRQSx5RUFDQSxJQURBLENBQ0E7QUFDQTtBQUNBLHVDQUNBLDBCQURBO0FBRUE7QUFDQSxLQU5BO0FBT0Esc0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQSxxQ0FDQSx3QkFEQTtBQUVBO0FBQ0EsS0FOQTtBQU9BLDRFQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0EsMENBQ0EsNkJBREE7QUFFQTtBQUNBLEtBTkE7QUFPQSxHQXhFQTtBQXlFQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsZ0VBSEEsQ0FLQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBakJBLENBbUJBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUF6QkEsQ0EyQkE7O0FBQ0Esb0VBNUJBLENBOEJBOztBQUNBO0FBQ0EseUVBaENBLENBa0NBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQTVDQSxDQThDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBMURBLENBNERBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FsRUEsQ0FvRUE7O0FBQ0EsK0JBckVBLENBdUVBOztBQUNBLGdDQXhFQSxDQTJFQTs7QUFDQTtBQUNBLDRGQUNBLFNBREEsSUFDQSxhQURBLElBQ0EsYUFEQSxJQUNBLE1BREEsRUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQWhCQSxNQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBbEJBLENBb0JBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFyQ0EsQ0F1Q0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLGlCQXpEQSxDQTJEQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBNUVBLENBOEVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkEvRkEsQ0FpR0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQXZJQSxNQXVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0E5SUEsTUE4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBaE9BLENBaU9BOzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FWQTtBQVlBO0FBRUE7OztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F0QkEsQ0F2UEEsQ0ErUUE7OztBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQXhCQSxDQWpSQSxDQTJTQTs7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSxtQ0FGQTtBQUdBO0FBQUE7QUFBQSxlQUhBO0FBSUEseUJBSkE7QUFLQSw4QkFMQTtBQU1BO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQXRDQTs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQVJBLE1BUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F4V0EsQ0EwV0E7OztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUFBO0FBQUEsZUFIQTtBQUlBLHlCQUpBO0FBS0EsOEJBTEE7QUFNQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0EvQkE7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FSQSxNQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBaGFBLENBa2FBOzs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBUEEsTUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FqQkEsTUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFiQSxNQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FqREEsQ0FyYUEsQ0F3ZEE7OztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0ExQkEsTUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWxDQSxDQTFkQSxDQTZmQTs7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQXpCQSxDQS9mQSxDQXloQkE7OztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F6QkEsQ0EzaEJBLENBcWpCQTs7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQXpCQSxDQXZqQkEsQ0FrbEJBOzs7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBekJBO0FBMkJBO0FBRUE7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQVJBO0FBU0EsU0E5bkJBLENBZ29CQTs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBUkE7QUFTQSxTQTdvQkEsQ0Erb0JBOzs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FSQTtBQVNBLFNBNXBCQSxDQThwQkE7OztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQVJBO0FBU0EsU0EzcUJBLENBNnFCQTs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBUkE7QUFTQSxTQTFyQkEsQ0E0ckJBOzs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FSQTtBQVNBO0FBRUE7QUFFQTs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBUkE7QUFTQTtBQUVBOzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FSQTtBQVVBO0FBRUEsT0E3dUJBO0FBOHVCQSxLQXJ2QkE7QUFzdkJBLG1CQXR2QkEsNkJBc3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxLQTd2QkE7QUE4dkJBLGdCQTl2QkEsMEJBOHZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxpQkFGQTtBQUdBLHNCQUhBO0FBSUEsc0NBSkE7QUFLQSwwQkFMQTtBQU1BLDBCQU5BO0FBT0Esb0JBUEE7QUFRQTtBQUNBO0FBQ0E7QUFWQTs7QUFZQTtBQUNBO0FBQ0E7QUFDQSxLQWp4QkE7QUFreEJBLG9CQWx4QkEsOEJBa3hCQTtBQUVBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFDQTtBQUNBLHFDQUZBO0FBR0EsMkNBSEE7QUFJQSxtQ0FKQTtBQUtBLDJCQUxBO0FBTUEscUNBTkE7QUFPQSwrQkFQQTtBQVFBLG1DQVJBO0FBU0EsMkNBVEE7QUFVQSwyQ0FWQTtBQVdBLDZCQVhBO0FBYUE7QUFDQSwyQ0FkQTtBQWVBLHlDQWZBO0FBZ0JBLHlDQWhCQTtBQWlCQSxxQ0FqQkE7QUFrQkEscUNBbEJBO0FBbUJBLHdDQW5CQTtBQXFCQTtBQUNBO0FBdEJBLFNBSEE7QUEyQkEsbUJBM0JBO0FBNEJBLHdCQTVCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTs7QUFrQ0E7QUFDQTtBQUNBO0FBRUEsS0EzekJBO0FBNHpCQSxpQkE1ekJBLDJCQTR6QkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsK0NBREE7QUFFQSxrQkFGQTtBQUdBLHdCQUhBO0FBSUEsMkJBSkE7QUFLQSxnQ0FMQTtBQU1BLHFCQU5BO0FBT0EseUJBUEE7QUFRQSwwQkFSQTtBQVNBLDhCQVRBO0FBVUE7QUFWQSxTQVlBLElBWkEsQ0FZQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLGtDQUZBO0FBR0E7QUFBQTtBQUFBLGFBSEE7QUFJQSx1QkFKQTtBQUtBLDRCQUxBO0FBTUE7QUFDQTtBQUNBO0FBUkE7QUFVQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWZBLE1BZUE7QUFDQTtBQUNBO0FBQ0EsT0FoQ0E7QUFpQ0EsS0EvMUJBO0FBZzJCQSxlQWgyQkEseUJBZzJCQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLGtCQUZBO0FBR0Esd0JBSEE7QUFJQSwyQkFKQTtBQUtBLGdDQUxBO0FBTUEscUJBTkE7QUFPQSx5QkFQQTtBQVFBLDBCQVJBO0FBU0EsOEJBVEE7QUFVQTtBQVZBLFNBWUEsSUFaQSxDQVlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsb0NBRkE7QUFHQTtBQUFBO0FBQUEsYUFIQTtBQUlBLHVCQUpBO0FBS0EsNEJBTEE7QUFNQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBZkEsTUFlQTtBQUNBO0FBQ0E7QUFDQSxPQWhDQTtBQWlDQSxLQW40QkE7QUFvNEJBLGtCQXA0QkEsNEJBbzRCQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBLGtCQUZBO0FBR0Esd0JBSEE7QUFJQSwyQkFKQTtBQUtBLGdDQUxBO0FBTUEscUJBTkE7QUFPQSx5QkFQQTtBQVFBLDBCQVJBO0FBU0EsOEJBVEE7QUFVQTtBQVZBLFNBWUEsSUFaQSxDQVlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsdUNBRkE7QUFHQTtBQUFBO0FBQUEsYUFIQTtBQUlBLHVCQUpBO0FBS0EsNEJBTEE7QUFNQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBZkEsTUFlQTtBQUNBO0FBQ0E7QUFDQSxPQWhDQTtBQWlDQSxLQXY2QkE7QUF3NkJBLGtCQXg2QkEsMEJBdzZCQSxTQXg2QkEsRUF3NkJBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUEsa0JBRkE7QUFHQSx3QkFIQTtBQUlBLDJCQUpBO0FBS0EsZ0NBTEE7QUFNQSxxQkFOQTtBQU9BLHlCQVBBO0FBUUEsMEJBUkE7QUFTQSw4QkFUQTtBQVVBO0FBVkEsU0FZQSxJQVpBLENBWUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFBQTtBQUFBLGFBSEE7QUFJQSx1QkFKQTtBQUtBLDRCQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBLFNBYkEsTUFhQTtBQUNBO0FBQ0E7QUFDQSxPQTlCQTtBQStCQTtBQXo4QkE7QUF6RUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuU0E7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxvQkFGQTtBQUdBLHlCQUhBO0FBSUEsaUNBSkE7QUFLQSxhQUNBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQSxPQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUEsT0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBLE9BSkE7QUFMQTtBQVlBLEdBZkE7QUFnQkE7QUFDQSxvQkFEQSw0QkFDQSxnQkFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsU0FKQSxpQkFJQSxRQUpBLEVBSUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFKQSxDQU1BOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBLE9BUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxtQkFGQTtBQUdBO0FBQUE7QUFBQSxXQUhBO0FBSUEscUJBSkE7QUFLQSwwQkFMQTtBQU1BO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxPQWZBLE1BZUE7QUFDQTtBQUNBO0FBQ0E7QUE5Q0E7QUFoQkEsRzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLHVDQUF1QyxTQUFTLHlCQUF5QixFQUFFO0FBQzNFO0FBQ0Esc0NBQXNDLFNBQVMsTUFBTSxlQUFlLEVBQUUsRUFBRTtBQUN4RTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVMsTUFBTSxlQUFlLEVBQUUsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU0sZ0JBQWdCO0FBQzFELDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU0sa0JBQWtCO0FBQzVELDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLE1BQU0scUJBQXFCO0FBQy9ELDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxNQUFNLGlCQUFpQjtBQUMzRCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQsaUNBQWlDO0FBQ2pDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esc0NBQXNDLG1CQUFtQjtBQUN6RCxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQSw2QkFBNkIsU0FBUyxZQUFZLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxtQkFBbUIsRUFBRTtBQUNqRDtBQUNBLHVDQUF1QyxTQUFTLHlCQUF5QixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw0REFBNEQ7QUFDbkU7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpREFBaUQ7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLHdDQUF3QyxFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHlCQUF5QixzQkFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDhCQUE4QixTQUFTLHdCQUF3QixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2Q0FBNkM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBNEM7QUFDdEUsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvQ0FBb0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxlQUFlLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvQ0FBb0MsWUFBWSxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9DQUFvQyxZQUFZLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0NBQW9DLFlBQVksRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxlQUFlLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsb0NBQW9DLFlBQVksRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9DQUFvQyxZQUFZLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvQ0FBb0MsWUFBWSxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsNkJBQTZCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsVUFBVSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDZCQUE2QixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyw2QkFBNkIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxVQUFVLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxVQUFVLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUyw2QkFBNkIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxVQUFVLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsVUFBVSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsNkJBQTZCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsVUFBVSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLDZCQUE2QixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxVQUFVLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4bkJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0NBQWtDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0EsK0JBQStCLFNBQVMsbUJBQW1CLEVBQUU7QUFDN0QsaUNBQWlDLFNBQVMsb0JBQW9CLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0NBQWtDLFNBQVMsdUJBQXVCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHVCQUF1QixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQTZDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxrQ0FBa0MsU0FBUyxzQkFBc0IsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsdUJBQXVCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBNkM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLGtDQUFrQyxTQUFTLHNCQUFzQixFQUFFO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxxQkFBcUIsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDJDQUEyQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0Esa0NBQWtDLFNBQVMsb0JBQW9CLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLHFCQUFxQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkNBQTJDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxrQ0FBa0MsU0FBUyxvQkFBb0IsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsb0JBQW9CLEVBQUU7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1Q0FBdUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLGtDQUFrQyxTQUFTLGtCQUFrQixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2Q0FBNkM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5Q0FBeUM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbFRBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssdUNBQXVDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLGdDQUFnQyxFQUFFO0FBQzVEO0FBQ0EsbUNBQW1DLFNBQVMsMEJBQTBCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0EsMENBQTBDLDJCQUEyQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0M7QUFDQTtBQUNBLDBDQUEwQywyQkFBMkI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQSxzQ0FBc0MsMkJBQTJCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0EsMENBQTBDLDJCQUEyQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0JBQXNCO0FBQy9DO0FBQ0E7QUFDQSwwQ0FBMEMsMkJBQTJCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJCQUEyQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQSxzQ0FBc0MsMkJBQTJCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0Esc0NBQXNDLDJCQUEyQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdDQUFnQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0Esc0NBQXNDLDJCQUEyQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQSxzQ0FBc0MsMkJBQTJCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBLHNDQUFzQywyQkFBMkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0Esc0NBQXNDLDJCQUEyQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQ0FBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQ7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQSw4Q0FBOEMsMkJBQTJCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNCQUFzQjtBQUNuRDtBQUNBO0FBQ0EsOENBQThDLDJCQUEyQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQ7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNCQUFzQjtBQUNuRDtBQUNBO0FBQ0EsOENBQThDLDJCQUEyQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQSw4Q0FBOEMsMkJBQTJCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0QkFBNEI7QUFDOUUsK0NBQStDO0FBQy9DLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQ0FBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQ7QUFDQTtBQUNBLDhDQUE4QywyQkFBMkI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0QkFBNEI7QUFDOUUsK0NBQStDO0FBQy9DLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxnQ0FBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixzQkFBc0I7QUFDbkQ7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFLDhDQUE4QywyQkFBMkI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxzQkFBc0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJCQUEyQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDRCQUE0QjtBQUM5RSwrQ0FBK0M7QUFDL0MseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsK0NBQStDO0FBQy9DLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsdUNBQXVDO0FBQ3ZDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSx1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcnNDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNCQUFzQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhCQUE4QixtQkFBbUIsRUFBRTtBQUNoRTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssaURBQWlEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzQkFBc0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUyx5QkFBeUIsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0M7QUFDQTtBQUNBLHlDQUF5QyxTQUFTLG9CQUFvQixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLDBDQUEwQyxTQUFTLHVCQUF1QixFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZDQUE2QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0Msd0NBQXdDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvYXBwLmNzcyc7XHJcblxyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xyXG5pbXBvcnQgQm9vdHN0cmFwVnVlIGZyb20gJ2Jvb3RzdHJhcC12dWUnXHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXHJcbmltcG9ydCB7IGZhVXNlclNlY3JldCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFTaWduT3V0QWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJ1xyXG5cclxubGlicmFyeS5hZGQoZmFVc2VyU2VjcmV0KVxyXG5saWJyYXJ5LmFkZChmYVNpZ25PdXRBbHQpXHJcblxyXG5WdWUuY29tcG9uZW50KCdmb250LWF3ZXNvbWUtaWNvbicsIEZvbnRBd2Vzb21lSWNvbilcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC52dWUnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lLnZ1ZSdcclxuaW1wb3J0IEp1Z2Fkb3IgZnJvbSAnLi9jb21wb25lbnRzL0p1Z2Fkb3IudnVlJ1xyXG5pbXBvcnQgU29jaW8gZnJvbSAnLi9jb21wb25lbnRzL1NvY2lvLnZ1ZSdcclxuaW1wb3J0IEVudHJlbmFkb3IgZnJvbSAnLi9jb21wb25lbnRzL0VudHJlbmFkb3IudnVlJ1xyXG5pbXBvcnQgUGVyZmlsIGZyb20gJy4vY29tcG9uZW50cy9QZXJmaWwudnVlJ1xyXG5pbXBvcnQgUG9saXRpY2FDb29raWVzIGZyb20gJy4vY29tcG9uZW50cy9Qb2xpdGljYUNvb2tpZXMudnVlJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuVnVlLnVzZShCb290c3RyYXBWdWUpXHJcblZ1ZS51c2UoVnVlUm91dGVyKVxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnLycsIG5hbWU6ICdob21lJywgY29tcG9uZW50OiBIb21lIH0sXHJcbiAgICB7IHBhdGg6ICcvanVnYWRvcmVzJywgbmFtZTogJ2p1Z2Fkb3InLCBjb21wb25lbnQ6IEp1Z2Fkb3IgfSxcclxuICAgIHsgcGF0aDogJy9zb2Npb3MnLCBuYW1lOiAnc29jaW8nLCBjb21wb25lbnQ6IFNvY2lvIH0sXHJcbiAgICB7IHBhdGg6ICcvZW50cmVuYWRvcmVzJywgbmFtZTogJ2VudHJlbmFkb3InLCBjb21wb25lbnQ6IEVudHJlbmFkb3IgfSxcclxuICAgIHsgcGF0aDogJy9taXBlcmZpbCcsIG5hbWU6ICdwZXJmaWwnLCBjb21wb25lbnQ6IFBlcmZpbCB9LFxyXG4gICAgeyBwYXRoOiAnL3BvbGl0aWNhQ29va2llcycsIG5hbWU6ICdwb2xpdGljYUNvb2tpZXMnLCBjb21wb25lbnQ6IFBvbGl0aWNhQ29va2llcyB9XHJcbl1cclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xyXG4gICAgcm91dGVzIC8vIHNob3J0IGZvciBgcm91dGVzOiByb3V0ZXNgXHJcbn0pO1xyXG5cclxucm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XHJcblxyXG4gICAgYXhpb3MuZ2V0KCcvZGF0b3MtanVnYWRvcmVzJylcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5pZCl7XHJcbiAgICAgICAgICAgICAgICBpZih0by5wYXRoID09PSAnL2p1Z2Fkb3Jlcycpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoJy8nKSBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXN0b3kgZW4gaG9tZSBwb3JxdWUgeWEgZXN0b3kgaW5zY3JpdG8gY29tbyBqdWdhZG9yJykgXHJcbiAgICAgICAgICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU295IGp1Z2Fkb3IgcGVybyBtZSBkaXJpam8gYSBvdHJhIHDDoWdpbmEnKSBcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KCkgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV4dCgpIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHNveSBqdWdhZG9yLCBkZXN2aW8gY29uIMOpeGl0byBoYWNpYSBsYSBww6FnaW5hIGVsZWdpZGEnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogXCIjYXBwXCIsXHJcbiAgICBjb21wb25lbnRzOiB7QXBwLCBIb21lLCBKdWdhZG9yLCBTb2NpbywgRW50cmVuYWRvciwgUGVyZmlsLCBQb2xpdGljYUNvb2tpZXN9LFxyXG4gICAgcm91dGVyXHJcbn0pIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWNkZTVlMjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNkZTVlMjNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxY2RlNWUyMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjZGU1ZTIzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMGUyYjg0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZDBlMmI4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwZTJiODRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZDBlMmI4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcRW50cmVuYWRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudHJlbmFkb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW50cmVuYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRyZW5hZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDBlMmI4NFwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZWY3MzM0ZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWVmNzMzNGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlZjczMzRkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWVmNzMzNGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXEhvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWVmNzMzNGRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSnVnYWRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdiYWMyNDRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcSUYtRkNcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3YmFjMjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3YmFjMjQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2JhYzI0NFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY3YmFjMjQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxKdWdhZG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSnVnYWRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KdWdhZG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0p1Z2Fkb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YmFjMjQ0XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTQzODI3OGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BlcmZpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5NDM4Mjc4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5NDM4Mjc4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGVyZmlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NDM4Mjc4Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk0MzgyNzhjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHNcXFxcanNcXFxcY29tcG9uZW50c1xcXFxQZXJmaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJmaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVyZmlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BlcmZpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTQzODI3OGNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUG9saXRpY2FDb29raWVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjY4ZDVjMlwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxJRi1GQ1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2I2OGQ1YzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2I2OGQ1YzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BvbGl0aWNhQ29va2llcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I2OGQ1YzJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYjY4ZDVjMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzXFxcXGpzXFxcXGNvbXBvbmVudHNcXFxcUG9saXRpY2FDb29raWVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb2xpdGljYUNvb2tpZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiNjhkNWMyXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODI4NTA2ZlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NvY2lvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Tb2Npby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXElGLUZDXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODI4NTA2ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODI4NTA2ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU29jaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4Mjg1MDZmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTgyODUwNmYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0c1xcXFxqc1xcXFxjb21wb25lbnRzXFxcXFNvY2lvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29jaW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4Mjg1MDZmXCIiLCI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgPGRpdj5cclxuICAgICAgPGItbmF2YmFyIHYtaWY9XCJjYXJnYUVuUHJvY2Vzb1wiIHN0aWNreSB0b2dnbGVhYmxlPVwibWRcIiB0eXBlPVwiZGFya1wiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGItc3Bpbm5lciB2YXJpYW50PVwid2hpdGVcIiBsYWJlbD1cIlNwaW5uaW5nXCI+PC9iLXNwaW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYi1uYXZiYXI+XHJcblxyXG4gICAgICA8Yi1uYXZiYXIgdi1pZj1cImNhcmdhQ29tcGxldGFkYVwiIHN0aWNreSB0b2dnbGVhYmxlPVwibWRcIiB0eXBlPVwiZGFya1wiIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICA8Yi1uYXZiYXItdG9nZ2xlIHRhcmdldD1cIm5hdi1jb2xsYXBzZVwiPjwvYi1uYXZiYXItdG9nZ2xlPlxyXG4gICAgICAgICAgPGItbmF2YmFyLWJyYW5kIDp0bz1cIntuYW1lOiAnaG9tZSd9XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9iYWxvbi5wbmdcIiB3aWR0aD1cIjMwXCIgYWx0PVwiYmFsb25cIj5cclxuICAgICAgICAgICAgSUYtb3Jtw6F0aWNvcyBGQ1xyXG4gICAgICAgICAgPC9iLW5hdmJhci1icmFuZD5cclxuXHJcbiAgICAgICAgICA8Yi1jb2xsYXBzZSBpZD1cIm5hdi1jb2xsYXBzZVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiBpcy1uYXY+XHJcbiAgICAgICAgICAgIDxiLW5hdmJhci1uYXY+XHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdob21lJ31cIiA+Tm90aWNpYXMgZGVsIGNsdWI8L2ItbmF2LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdzb2Npbyd9XCIgdi1zaG93PVwibW9zdHJhclNvY2lvXCI+SW5zY3JpYmlyc2UgY29tbyBzb2NpbzwvYi1uYXYtaXRlbT5cclxuICAgICAgICAgICAgICA8Yi1uYXYtaXRlbSA6dG89XCJ7bmFtZTogJ2p1Z2Fkb3InfVwiIHYtc2hvdz1cIm1vc3RyYXJKdWdhZG9yXCI+SW5zY3JpYmlyc2UgY29tbyBqdWdhZG9yPC9iLW5hdi1pdGVtPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdlbnRyZW5hZG9yJ31cIiB2LXNob3c9XCJtb3N0cmFyRW50cmVuYWRvclwiPkVudmlhciBzb2xpY2l0dWQgZGUgZW50cmVuYWRvcjwvYi1uYXYtaXRlbT4gICAgICAgXHJcbiAgICAgICAgICAgICAgPGItbmF2LWl0ZW0gOnRvPVwie25hbWU6ICdwZXJmaWwnfVwiIGNsYXNzPVwicHItNVwiPjxiLXNwaW5uZXIgdHlwZT1cImdyb3dcIiBzbWFsbCB2YXJpYW50PVwic3VjY2Vzc1wiPjwvYi1zcGlubmVyPiBNaSBwZXJmaWw8L2ItbmF2LWl0ZW0+ICAgICAgIFxyXG4gICAgICAgICAgICAgIDxiLW5hdi1pdGVtIEBjbGljaz1cImVsaW1pbmFyQ29va2llc1wiIGhyZWY9XCIvbG9nb3V0XCI+PGZvbnQtYXdlc29tZS1pY29uIGljb249XCJzaWduLW91dC1hbHRcIiA6c3R5bGU9XCJ7IGNvbG9yOiAnI0NENUM1QycgfVwiIHNpemU9XCJsZ1wiLz48L2ItbmF2LWl0ZW0+ICAgIFxyXG4gICAgICAgICAgICA8L2ItbmF2YmFyLW5hdj5cclxuICAgICAgICAgIDwvYi1jb2xsYXBzZT5cclxuICAgICAgPC9iLW5hdmJhcj5cclxuXHJcbiAgICAgIDwhLS0gQ29va2llcyAtLT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJiZy1pbmZvIHAtMyBmaXhlZC1ib3R0b21cIiBpZD1cImNvb2tpZXNTZWN0aW9uXCIgPlxyXG4gICAgICAgICAgPGgyPkVzdGUgc2l0aW8gd2ViIHV0aWxpemEgY29va2llcywgc2kgcGVybWFuZWNlIGFxdcOtIGRhbW9zIHBvciBoZWNobyBxdWUgYWNlcHRhIHN1IHVzby48L2gyPlxyXG4gICAgICAgICAgPHA+UHVlZGUgbGVlciBtw6FzIHNvYnJlIGVsIHVzbyBkZSBjb29raWVzIGVuIHBvbMOtdGljYSBkZSBjb29raWVzLjwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiIEBjbGljaz1cImFjZXB0YXJDb29raWVzXCI+PGEgaHJlZj0nIyc+QWNlcHRhciBjb29raWVzPC9hPjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJsaWdodFwiPjxyb3V0ZXItbGluayB0bz1cIi9wb2xpdGljYUNvb2tpZXNcIj5Qb2xpdGljYSBkZSBjb29raWVzPC9yb3V0ZXItbGluaz48L2ItYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c21hbGw+UHVsc2EgYWNlcHRhciBwYXJhIGVsaW1pbmFyIGVzdGUgbWVuc2FqZTwvc21hbGw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxyb3V0ZXItdmlldy8+XHJcbiAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXIgc3RpY2t5LWJvdHRvbSBjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkXCI+JmNvcHk7IDIwMjAgSUYtb3Jtw6F0aWNvcyBGQzwvc3Bhbj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbiAgICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XHJcbiAgICAgICAgICAgIHNvY2lvOiBbXSxcclxuICAgICAgICAgICAgbW9zdHJhclNvY2lvOiB0cnVlLFxyXG4gICAgICAgICAgICBtb3N0cmFySnVnYWRvcjogdHJ1ZSxcclxuICAgICAgICAgICAgbW9zdHJhckVudHJlbmFkb3I6IHRydWUsXHJcbiAgICAgICAgICAgIGNhcmdhRW5Qcm9jZXNvOiB0cnVlLFxyXG4gICAgICAgICAgICBjYXJnYUNvbXBsZXRhZGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250YWRvcjogMFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYWNlcHRhckNvb2tpZXMoKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJDb29raWVBY2VwdGFkYSA9IEJpZW52ZW5pZEAgYSBJRi1vcm3DoXRpY29zIEZDLCBhY2FiYXMgZGUgYWNlcHRhciBudWVzdHJhcyBjb29raWVzXCI7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXNTZWN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5jb29raWUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbGltaW5hckNvb2tpZXMoKSB7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJDb29raWVBY2VwdGFkYT07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQgKCkgeyBcclxuICAgICAgICAgIGlmKGRvY3VtZW50LmNvb2tpZSl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzU2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLXNvY2lvcycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yKytcclxuICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zb2NpbyA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubW9zdHJhclNvY2lvID0gZmFsc2VcclxuICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb2NpbzogXCIrdGhpcy5jb250YWRvcikgXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5jb250YWRvciA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmdhQ29tcGxldGFkYSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZ2FFblByb2Nlc28gPSBmYWxzZVxyXG4gICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgYXhpb3MuZ2V0KCcvZGF0b3MtanVnYWRvcmVzJylcclxuICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yKytcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanVnYWRvciA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFySnVnYWRvciA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKdWdhZG9yOiBcIit0aGlzLmNvbnRhZG9yKSBcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmNhcmdhQ29tcGxldGFkYSA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jYXJnYUVuUHJvY2VzbyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLWVudHJlbmFkb3JlcycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRhZG9yKytcclxuICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lbnRyZW5hZG9yID0gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5tb3N0cmFyRW50cmVuYWRvciA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW50cmVuYWRvcjogXCIrdGhpcy5jb250YWRvcikgIFxyXG4gICAgICAgICAgICAgIGlmKHRoaXMuY29udGFkb3IgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJnYUNvbXBsZXRhZGEgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmdhRW5Qcm9jZXNvID0gZmFsc2VcclxuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC01IG1iLTUgdGV4dC1jZW50ZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPsK/VGllbmVzIGVsIHTDrXR1bG8gZGUgZW50cmVuYWRvcj88L2gxPlxyXG4gICAgICAgIDxoMj5FbnbDrWFub3NsbyB5IGRpcmlnZSBhIGFsZ3VubyBkZSBudWVzdHJvcyBlcXVpcG9zPC9oMj5cclxuICAgICAgICBcclxuICAgICAgICA8Yi1pbWcgc3JjPVwiL2ltZy9lbnRyZW5hZG9yLnBuZ1wiIGZsdWlkPjwvYi1pbWc+ICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8IS0tIFNlbGVjY2lvbmFyIGFyY2hpdm8gLS0+XHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1mb3JtLWZpbGVcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOnN0YXRlPVwiQm9vbGVhbihmaWxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbGlqYSB1biBhcmNoaXZvIG8gZGVzcGzDoWNlbG8gYXF1w60uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3AtcGxhY2Vob2xkZXI9XCJTb2x0YXIgYXJjaGl2byBhcXXDrS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnJvd3NlLXRleHQ9XCJFbGVnaXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiYXJjaGl2b1wiICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPjwvYi1mb3JtLWZpbGU+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVudHJlbmFkb3JFcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPiBcclxuICAgICAgICAgICAgPGItYWxlcnRcclxuICAgICAgICAgICAgOnNob3c9XCJkaXNtaXNzQ291bnREb3duXCJcclxuICAgICAgICAgICAgZGlzbWlzc2libGVcclxuICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICBAZGlzbWlzc2VkPVwiZGlzbWlzc0NvdW50RG93bj0wXCJcclxuICAgICAgICAgICAgQGRpc21pc3MtY291bnQtZG93bj1cImNvdW50RG93bkNoYW5nZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwPkVudmlhbmRvIGFyY2hpdm86IHt7IGRpc21pc3NDb3VudERvd24gfX0gc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgIDxiLXByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICA6bWF4PVwiZGlzbWlzc1NlY3NcIlxyXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0cHhcIlxyXG4gICAgICAgICAgICA+PC9iLXByb2dyZXNzPlxyXG4gICAgICAgICAgICA8L2ItYWxlcnQ+XHJcbiAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgPCEtLSBCb3TDs24gZGUgZW52aWFyLS0+XHJcbiAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInN1Y2Nlc3NcIiBpZD1cImJvdG9uRW50cmVuYWRvclwiIEBjbGljaz1cImVudmlhclRpdHVsb1wiPkVudmlhcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgPC9iLXJvdz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0VudHJlbmFkb3InLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaWxlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgb2tFbnRyZW5hZG9yOiBmYWxzZSxcclxuICAgICAgICBkaXNtaXNzU2VjczogMyxcclxuICAgICAgICBkaXNtaXNzQ291bnREb3duOiAwLFxyXG4gICAgICAgIHNob3dEaXNtaXNzaWJsZUFsZXJ0OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgICAgY291bnREb3duQ2hhbmdlZChkaXNtaXNzQ291bnREb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzc0NvdW50RG93biA9IGRpc21pc3NDb3VudERvd25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudmlhclRpdHVsbygpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVcIik7XHJcblxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzWzBdKXtcclxuICAgICAgICAgICAgICAgIHZhciBydXRhID0gJy9lbnZpby10aXR1bG8nXHJcbiAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKS5maWxlc1swXSlcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcnV0YSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBlbmN0eXBlOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzQ291bnREb3duID0gdGhpcy5kaXNtaXNzU2VjcztcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWUnfSksIDMwMTApOyBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3RvbkVudHJlbmFkb3InKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmNoaXZvKCkge1xyXG4gICAgICAgICAgICB2YXIgZW52aWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3RvbkVudHJlbmFkb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBlbnRyZW5hZG9yRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudHJlbmFkb3JFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghQm9vbGVhbih0aGlzLmZpbGUpKSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyZW5hZG9yRXJyb3Iuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICBlbnRyZW5hZG9yRXJyb3IuaW5uZXJIVE1MID0gXCJBcmNoaXZvIGFkanVudGFkbyBjb3JyZWN0YW1lbnRlXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyZW5hZG9yRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgZW50cmVuYWRvckVycm9yLmlubmVySFRNTCA9IFwiRGViZXMgc2VsZWNjaW9uYXIgdW4gYXJjaGl2b1wiO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05PIEV4aXN0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEJvb2xlYW4odGhpcy5maWxlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGItY29udGFpbmVyIGNsYXNzPVwibXQtMlwiPlxyXG4gICAgICAgICAgICA8IS0tIENhYmVjZXJhIHNsaWRlcyAtLT5cclxuICAgICAgICAgICAgPGItY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIGlkPVwiY2Fyb3VzZWwtZmFkZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT1cInRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjMDAwXCJcclxuICAgICAgICAgICAgICAgIGZhZGVcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnNcclxuICAgICAgICAgICAgICAgIGltZy13aWR0aD1cIjEwMjRcIlxyXG4gICAgICAgICAgICAgICAgaW1nLWhlaWdodD1cIjQ4MFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2JhbG9uLWRlLWZ1dGJvbC5qcGdcIj48L2ItY2Fyb3VzZWwtc2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8Yi1jYXJvdXNlbC1zbGlkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb249XCJDb21wYXJ0ZSBudWVzdHJhIHBhc2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2NhbXBvLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgICAgIDxiLWNhcm91c2VsLXNsaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbj1cIkFxdcOtIGVuY29udHJhcsOhcyBsYXMgbm90aWNpYXMgZGVsIGNsdWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZy1zcmM9XCIvaW1nL2VzY3VlbGEuanBnXCI+PC9iLWNhcm91c2VsLXNsaWRlPlxyXG4gICAgICAgICAgICAgICAgPGItY2Fyb3VzZWwtc2xpZGVcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPVwiUmVzdWx0YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLXNyYz1cIi9pbWcvZnV0Ym9sLmpwZ1wiPjwvYi1jYXJvdXNlbC1zbGlkZT5cclxuICAgICAgICAgICAgPC9iLWNhcm91c2VsPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBjYXJkcyBjb24gbm90aWNpYXMgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gUHJpbWVyYSBsw61uZWEgZGUgY2FyZHMgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtZ3JvdXAgZGVjaz1cImRlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiSGlzdG9yaWEgZGVsIGNsdWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+Q29ub2NlIG51ZXN0cmEgaGlzdG9yaWE8L2E+PC9iLWNhcmQtdGV4dD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnLXZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiSW5zdGFsYWNpb25lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInRleHQtd2hpdGVcIj5Db250ZW1wbGEgbnVlc3RyYXMgaW5zdGFsYWNpb25lczwvYT48L2ItY2FyZC10ZXh0PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZy12YXJpYW50PVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJQbGFudGlsbGFzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkNvbm9jZSBudWVzdHJhcyBwbGFudGlsbGFzPC9hPjwvYi1jYXJkLXRleHQ+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gU2VndW5kYSBsw61uZWEgZGUgY2FyZHMgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtZ3JvdXAgZGVjaz1cImRlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiQ2xhc2lmaWNhY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+T2JzZXJ2YSBudWVzdHJhIGNsYXNpZmljYWNpw7NuIGVuIGxhIHRhYmxhPC9hPjwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC12YXJpYW50PVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPVwiUHLDs3hpbW9zIHBhcnRpZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPkFxdcOtIHB1ZWRlcyB2ZXIgY29udHJhIHF1aWVuIGp1Z2Ftb3MgZWwgcHLDs3hpbW8gZW5jdWVudHJvPC9hPjwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmctdmFyaWFudD1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXZhcmlhbnQ9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9XCJSZXN1bHRhZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD48YSBocmVmPVwiI1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvczwvYT48L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gUmVjb21lbmRhY2lvbmVzLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3JlY29tZW5kYWNpb25lcy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTBcIj48L2ItY2FyZC1pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtYm9keSB0aXRsZT1cIlJlY29tZW5kYWNpb25lcyBwYXJhIGV2aXRhciBsb3Mgcmllc2dvcyBzb2JyZSBsYSBzYWx1ZCBlbiBsYSB2dWVsdGEgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbFwiIHN1Yi10aXRsZT1cIjMwIG1heW8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgRGVwYXJ0YW1lbnRvIE3DqWRpY28gZGUgbGEgUmVhbCBGZWRlcmFjacOzbiBFc3Bhw7FvbGEgZGUgRsO6dGJvbCwgY29uIGxhIGNvbGFib3JhY2nDs24gZGUgcHJvZmVzaW9uYWxlcyBleHBlcnRvcyBkZSBuaXZlbCBpbnRlcm5hY2lvbmFsLCBoYSBlbGFib3JhZG8gdW4gUHJvdG9jb2xvIG3DqWRpY28geSBkZSBwcmVwYXJhY2nDs24gZsOtc2ljYSBiYXNhZG8gZW4gcmVjb21lbmRhY2lvbmVzIHBhcmEgZXZpdGFyIGxvcyByaWVzZ29zIHBhcmEgbGEgc2FsdWQgZW4gbGEgdnVlbHRhIGEgbG9zIGVudHJlbmFtaWVudG9zIHkgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NkbjEuc2VmdXRib2wuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvcGRmL3JlY29tZW5kYWNpb25lc19wYXJhX2V2aXRhcl9sb3NfcmllZ29zX3NvYnJhX2xhX3NhbHVkX2VuX2xhX3Z1ZWx0YV9hX2xhX2NvbXBldGljaW9uX2VuX2VsX2Z1dGJvbC5wZGZcIj5BcXXDrSBlbCBlbmxhY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIG5vdGljaWEgUkZFRiBGQVNFIElJLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNhcmQgbm8tYm9keT1cIm5vLWJvZHlcIiBjbGFzcz1cIm92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgbm8tZ3V0dGVycz1cIm5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL2Zhc2UyLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiRmFzZSAyIGRlIGxhIGRlc2VzY2FsYWRhXCIgc3ViLXRpdGxlPVwiMjcgbWF5bywgMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbCBDb25zZWpvIFN1cGVyaW9yIGRlIERlcG9ydGVzIGhhIHByZXBhcmFkbyB1biBkb2N1bWVudG8gcXVlIGRhIHJlc3B1ZXN0YSBhIGxhcyBkdWRhcyBtw6FzIGZyZWN1ZW50ZXMgZGUgbG9zIGRlcG9ydGlzdGFzIHByb2Zlc2lvbmFsZXMgeSBmZWRlcmFkb3MgZGUgY2FyYSBhIGxhIEZhc2UgMiBkZSBsYSBkZXNlc2NhbGFkYSwgcXVlIGVzdGEgc2VtYW5hIGhhIGNvbWVuemFkbyBlbiBncmFuIHBhcnRlIGRlbCBwYcOtcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NkbjEuc2VmdXRib2wuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvZmFxc19kZXBvcnRlX2Zhc2VfMi5wZGZcIj5BcXXDrSBlbCBlbmxhY2U8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIG5vdGljaWEgUkZFRi0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvX3JmZWYuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJTdXNwZW5zacOzbiBkZSBsYXMgY29tcGV0aWNpb25lc1wiIHN1Yi10aXRsZT1cIjI3IG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhIFJGRUYgYXBydWViYSBsYSBzdXNwZW5zacOzbiBkZSB0b2RhcyBsYXMgY29tcGV0aWNpb25lcyBubyBwcm9mZXNpb25hbGVzIGhhc3RhIHF1ZSBsYXMgYXV0b3JpZGFkZXMgY29uc2lkZXJlbiBxdWUgc2UgcHVlZGVuIHJlYW51ZGFyIHNpbiByaWVzZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC1ib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gY29tdW5pY2FkbyBvZmljaWFsIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9Db211bmljYWRvX29maWNpYWwuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY29tdW5pY2Fkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZC0wXCI+PC9iLWNhcmQtaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkLWJvZHkgdGl0bGU9XCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiIHN1Yi10aXRsZT1cIjEwIG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZWRhbiBzdXNwZW5kaWRvcyB0b2RvcyBsb3MgZW50cmVuYW1pZW50b3MgZGVzZGUgbWHDsWFuYSBtacOpcmNvbGVzIDExIGRlIG1hcnpvIGRlIDIwMjAgaGFzdGEgbnVldm8gYXZpc28uIExhIFJlYWwgRmVkZXJhY2nDs24gZGUgRsO6dGJvbCBkZSBNYWRyaWQgaGEgYW51bmNpYWRvIGxhIHN1c3BlbnNpw7NuIGRlIGxhcyBjb21wZXRpY2lvbmVzIHRlcnJpdG9yaWFsZXMgZHVyYW50ZSBsYXMgcHLDs3hpbWFzIGRvcyBzZW1hbmFzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSByZXN1bHRhZG9zIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jYXJkIG5vLWJvZHk9XCJuby1ib2R5XCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItcm93IG5vLWd1dHRlcnM9XCJuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9yZXN1bHRhZG9zLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJlc3VsdGFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiUmVzdWx0YWRvcyBkZWwgZmluIGRlIHNlbWFuYVwiIHN1Yi10aXRsZT1cIjkgbWFyem8sIDIwMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVlc3Ryb3MgZXF1aXBvcyBjb250aW51YW4gY29uIGxhIGJ1ZW5hIGRpbsOhbWljYSBkZSBlc3RhcyDDumx0aW1hcyA3IGpvcm5hZGFzLiBUcmFzIGVsIHRyb3BpZXpvIGluaWNpYWwgYSBsYSB2dWVsdGEgZGUgbmF2aWRhZCwgc2UgY3VlbnRhbiBsb3MgcGFydGlkb3MgcG9yIHZpY3RvcmlhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY2FyZC10ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLWJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBQdWVzdG8gZGUgZW50cmVuYWRvciAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZCBuby1ib2R5PVwibm8tYm9keVwiIGNsYXNzPVwib3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXJvdyBuby1ndXR0ZXJzPVwibm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcHVlc3RvX2VudHJlbmFkb3IuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHVlc3RvX2VudHJlbmFkb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMFwiPjwvYi1jYXJkLWltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1ib2R5IHRpdGxlPVwiUHVlc3RvcyBkZSBlbnRyZW5hZG9yZXMgdmFjYW50ZXNcIiBzdWItdGl0bGU9XCIyIG1hcnpvLCAyMDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlbmVtb3MgZGlzcG9uaWJsZXMgYWxndW5hcyB2YWNhbnRlcyBkZSBlbnRyZW5hZG9yZXMgZGUgYWxndW5hcyBkZSBudWVzdHJhcyBwbGFudGlsbGFzLCBzaSB0aWVuZXMgZWwgdMOtdHVsbyBtYW5kYWxvIHkgZm9ybWEgcGFydGUgZGVsIGNsdWIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jYXJkLXRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQtYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvYi1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGluZzogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uU2xpZGVTdGFydChzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkaW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblNsaWRlRW5kKHNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkICgpIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWxvYWRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgcGFnZSB3YXMganVzdCByZWxvYWRlZC4gQ2xlYXIgdGhlIHZhbHVlIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgLy8gc28gdGhhdCBpdCB3aWxsIHJlbG9hZCB0aGUgbmV4dCB0aW1lIHRoaXMgcGFnZSBpcyB2aXNpdGVkLlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JlbG9hZGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgYSBmbGFnIHNvIHRoYXQgd2Uga25vdyBub3QgdG8gcmVsb2FkIHRoZSBwYWdlIHR3aWNlLlxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbG9hZGVkJywgJzEnKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMT5SZWxsZW5hIGVzdGUgZm9ybXVsYXJpbzwvaDE+XHJcbiAgICAgICAgPGgyPsKheSDDum5ldGUgYSBudWVzdHJvIGVxdWlwbyE8L2gyPiAgXHJcblxyXG4gICAgICAgIDxiLWNvbnRhaW5lciBjbGFzcz1cIm10LTVcIj5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMTogY2F0ZWdvcsOtYSAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2wgbm8tZ3V0dGVycz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2F0ZWdvcmlhc1wiPkNhdGVnb3LDrWE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImNhdGVnb3JpYVwiIGlkPVwidmFsaWRhckNhdGVnb3JpYVwiIDpvcHRpb25zPVwiY2F0ZWdvcmlhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNhdGVnb3JpYUVycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgMjogdGFsbGEgZGUgY2FtaXNldGEgLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYUNhbWlzZXRhXCI+VGFsbGEgZGUgY2FtaXNldGE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhQ2FtaXNldGFcIiBpZD1cInZhbGlkYXJDYW1pc2V0YVwiIDpvcHRpb25zPVwidGFsbGFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2FtaXNldGFFcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDM6IHRhbGxhIGRlIHBhbnRhbMOzbiAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhUGFudGFsb25cIj5UYWxsYSBkZSBwYW50YWzDs246PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cInRhbGxhUGFudGFsb25cIiBpZD1cInZhbGlkYXJQYW50YWxvblwiIDpvcHRpb25zPVwidGFsbGFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGFudGFsb25FcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgIDwvYi1mb3JtLXJvdz5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gbMOtbmVhIDQ6IHRhbGxhIGRlIG1lZGlhcyAtLT5cclxuICAgICAgICAgICAgPGItZm9ybS1yb3cgY2xhc3M9XCJtYi0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRhbGxhTWVkaWFzXCI+VGFsbGEgZGUgbWVkaWFzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJ0YWxsYU1lZGlhc1wiIGlkPVwidmFsaWRhck1lZGlhc1wiIDpvcHRpb25zPVwidGFsbGFzXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibWVkaWFzRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA1OiB0YWxsYSBkZSBhYnJpZ28gLS0+XHJcbiAgICAgICAgICAgIDxiLWZvcm0tcm93IGNsYXNzPVwibWItM1wiIHYtaWY9XCIhZGlzbWlzc0NvdW50RG93blwiPlxyXG4gICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWxsYUFicmlnb1wiPlRhbGxhIGRlIGFicmlnbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwidGFsbGFBYnJpZ29cIiBpZD1cInZhbGlkYXJBYnJpZ29cIiA6b3B0aW9ucz1cInRhbGxhc1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImFicmlnb0Vycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPC9iLWZvcm0tcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgNjogbcOpdG9kbyBkZSBwYWdvIC0tPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLXJvdyBjbGFzcz1cIm1iLTNcIiB2LWlmPVwiIWRpc21pc3NDb3VudERvd25cIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWV0b2RvUGFnb1wiPk3DqXRvZG8gZGUgcGFnbzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwibWV0b2RvUGFnb1wiIGlkPVwidmFsaWRhclBhZ29cIiA6b3B0aW9ucz1cInBhZ29cIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwYWdvRXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcblxyXG4gICAgICAgICAgICA8IS0tIGzDrW5lYSA3OiBBbGVydGEgYW5pbWFkYSAtLT5cclxuICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtMyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGItYWxlcnRcclxuICAgICAgICAgICAgICAgIDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudERvd249MFwiXHJcbiAgICAgICAgICAgICAgICBAZGlzbWlzcy1jb3VudC1kb3duPVwiY291bnREb3duQ2hhbmdlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5FbnZpYW5kbyBpbmZvcm1hY2nDs246IHt7IGRpc21pc3NDb3VudERvd24gfX0gc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgICAgICA8Yi1wcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA6bWF4PVwiZGlzbWlzc1NlY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRpc21pc3NDb3VudERvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjRweFwiXHJcbiAgICAgICAgICAgICAgICA+PC9iLXByb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgPC9iLWFsZXJ0PlxyXG4gICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBsw61uZWEgODogZW52aWFyIC0tPlxyXG4gICAgICAgICAgICA8Yi1mb3JtLXJvdyBjbGFzcz1cIm10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBpZD1cImJvdG9uSnVnYWRvclwiIEBjbGljaz1cImluc2NyaWJpckp1Z2Fkb3IobWV0b2RvUGFnbywgY2F0ZWdvcmlhLCB0YWxsYUNhbWlzZXRhLCB0YWxsYVBhbnRhbG9uLCB0YWxsYU1lZGlhcywgdGFsbGFBYnJpZ28pXCI+RW52aWFyPC9iLWJ1dHRvbj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9iLWNvbD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2ItZm9ybS1yb3c+XHJcbiAgICAgICAgPC9iLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0p1Z2Fkb3InLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpYTogbnVsbCxcclxuICAgICAgICAgICAgdGFsbGFDYW1pc2V0YTogbnVsbCxcclxuICAgICAgICAgICAgdGFsbGFQYW50YWxvbjogbnVsbCxcclxuICAgICAgICAgICAgdGFsbGFNZWRpYXM6IG51bGwsXHJcbiAgICAgICAgICAgIHRhbGxhQWJyaWdvOiBudWxsLFxyXG4gICAgICAgICAgICBtZXRvZG9QYWdvOiBudWxsLFxyXG4gICAgICAgICAgICBkaXNtaXNzU2VjczogMyxcclxuICAgICAgICAgICAgZGlzbWlzc0NvdW50RG93bjogMCxcclxuICAgICAgICAgICAgc2hvd0Rpc21pc3NpYmxlQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWFzOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW4gY2F0ZWdvcsOtYSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQmVuamFtaW4nLCB0ZXh0OiAnQmVuamFtw61uJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdBbGV2aW4nLCB0ZXh0OiAnQWxldsOtbid9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnSW5mYW50aWwnLCB0ZXh0OiAnSW5mYW50aWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0NhZGV0ZScsIHRleHQ6ICdDYWRldGUnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0p1dmVuaWwnLCB0ZXh0OiAnSnV2ZW5pbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQWZpY2lvbmFkbycsIHRleHQ6ICdBZmljaW9uYWRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdWZXRlcmFubycsIHRleHQ6ICdWZXRlcmFubyd9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHRhbGxhczpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuYSB0YWxsYSd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUycsIHRleHQ6ICdTJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdNJywgdGV4dDogJ00nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0wnLCB0ZXh0OiAnTCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnWEwnLCB0ZXh0OiAnWEwnfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwYWdvOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogbnVsbCwgdGV4dDogJ1NlbGVjY2lvbmUgdW4gbcOpdG9kbyBkZSBwYWdvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdQYXlwYWwnLCB0ZXh0OiAnUGF5cGFsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nLCB0ZXh0OiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYScsIHRleHQ6ICdEb21pY2lsaWFjacOzbiBiYW5jYXJpYSd9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGNvdW50RG93bkNoYW5nZWQoZGlzbWlzc0NvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnNjcmliaXJKdWdhZG9yKEVsZWNjaW9uUGFnb0p1Z2Fkb3IsIEVsZWNjaW9uQ2F0ZWdvcmlhLCBFbGVjY2lvblRhbGxhQ2FtaXNldGEsIEVsZWNjaW9uVGFsbGFQYW50YWxvbiwgRWxlY2Npb25UYWxsYU1lZGlhcywgRWxlY2Npb25UYWxsYUFicmlnbyl7XHJcblxyXG4gICAgICAgICAgICAvLyBWYXJpYWJsZXMgZGVsIGZvcm11bGFyaW9cclxuICAgICAgICAgICAgdmFyIGNhdGVnb3JpYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhckNhdGVnb3JpYVwiKTtcclxuICAgICAgICAgICAgdmFyIGNhbWlzZXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyQ2FtaXNldGFcIik7XHJcbiAgICAgICAgICAgIHZhciBwYW50YWxvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhclBhbnRhbG9uXCIpO1xyXG4gICAgICAgICAgICB2YXIgbWVkaWFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyTWVkaWFzXCIpO1xyXG4gICAgICAgICAgICB2YXIgYWJyaWdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyQWJyaWdvXCIpO1xyXG4gICAgICAgICAgICB2YXIgcGFnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhclBhZ29cIik7XHJcbiAgICAgICAgICAgIHZhciBlbnZpYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdG9uSnVnYWRvclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVycm9yZXMgZGUgbGFzIHZhcmlhYmxlc1xyXG4gICAgICAgICAgICB2YXIgY2F0ZWdvcmlhRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhdGVnb3JpYUVycm9yXCIpO1xyXG4gICAgICAgICAgICB2YXIgY2FtaXNldGFFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtaXNldGFFcnJvclwiKTtcclxuICAgICAgICAgICAgdmFyIHBhbnRhbG9uRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbnRhbG9uRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBtZWRpYXNFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVkaWFzRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBhYnJpZ29FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJyaWdvRXJyb3JcIik7XHJcbiAgICAgICAgICAgIHZhciBwYWdvRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ29FcnJvclwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE9rIHZhbGlkYWNpb25lc1xyXG4gICAgICAgICAgICB2YXIgb2tDYXRlZ29yaWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG9rQ2FtaXNldGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG9rUGFudGFsb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG9rTWVkaWFzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBva0FicmlnbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgb2tQYWdvID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQ2F0ZWdvcsOtYVxyXG4gICAgICAgICAgICBpZighY2F0ZWdvcmlhLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFFcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSBjYXRlZ29yw61hXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tDYXRlZ29yaWEgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGVnb3JpYS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpYS52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWFFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQ2F0ZWdvcmlhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tDYXRlZ29yaWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQ2FtaXNldGFcclxuICAgICAgICAgICAgaWYoIWNhbWlzZXRhLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGNhbWlzZXRhLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGNhbWlzZXRhRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FtaXNldGFFcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSB0YWxsYSBkZSBjYW1pc2V0YVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2tDYW1pc2V0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FtaXNldGEub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjYW1pc2V0YS52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWlzZXRhLnN0eWxlLmJvcmRlckNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWlzZXRhRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBva0NhbWlzZXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tDYW1pc2V0YSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBQYW50YWzDs25cclxuICAgICAgICAgICAgaWYoIXBhbnRhbG9uLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHBhbnRhbG9uLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIHBhbnRhbG9uRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgcGFudGFsb25FcnJvci5pbm5lckhUTUwgPSBcIkRlYmVzIHNlbGVjY2lvbmFyIHVuYSB0YWxsYSBkZSBwYW50YWzDs25cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rUGFudGFsb24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhbnRhbG9uLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocGFudGFsb24udmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBwYW50YWxvbi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBwYW50YWxvbkVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tQYW50YWxvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFudGFsb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gTWVkaWFzXHJcbiAgICAgICAgICAgIGlmKCFtZWRpYXMudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgbWVkaWFzLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIG1lZGlhc0Vycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIG1lZGlhc0Vycm9yLmlubmVySFRNTCA9IFwiRGViZXMgc2VsZWNjaW9uYXIgdW5hIHRhbGxhIGRlIG1lZGlhc1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2tNZWRpYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1lZGlhcy5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKG1lZGlhcy52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lZGlhcy5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYXNFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rTWVkaWFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tNZWRpYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQWJyaWdvXHJcbiAgICAgICAgICAgIGlmKCFhYnJpZ28udmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgYWJyaWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGFicmlnb0Vycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIGFicmlnb0Vycm9yLmlubmVySFRNTCA9IFwiRGViZXMgc2VsZWNjaW9uYXIgdW5hIHRhbGxhIGRlIGFicmlnb1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2tBYnJpZ28gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFicmlnby5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGFicmlnby52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFicmlnby5zdHlsZS5ib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICBhYnJpZ29FcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rQWJyaWdvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tBYnJpZ28gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gTcOpdG9kbyBkZSBwYWdvXHJcbiAgICAgICAgICAgIGlmKCFwYWdvLnZhbHVlICl7XHJcbiAgICAgICAgICAgICAgICBwYWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIHBhZ29FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdvRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1biBtw6l0b2RvIGRlIHBhZ29cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rUGFnbyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGFnby5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHBhZ28udmFsdWUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICBwYWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ29FcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFnbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9rUGFnbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihva0NhdGVnb3JpYSAmJiBva0NhbWlzZXRhICYmIG9rUGFudGFsb24gJiYgb2tNZWRpYXMgJiYgb2tBYnJpZ28gJiYgb2tQYWdvKXtcclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdvLWp1Z2Fkb3JlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtwYWdvSnVnYWRvcjogRWxlY2Npb25QYWdvSnVnYWRvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWE6IEVsZWNjaW9uQ2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFDYW1pc2V0YTogRWxlY2Npb25UYWxsYUNhbWlzZXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFQYW50YWxvbjogRWxlY2Npb25UYWxsYVBhbnRhbG9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFsbGFNZWRpYXM6IEVsZWNjaW9uVGFsbGFNZWRpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWxsYUFicmlnbzogRWxlY2Npb25UYWxsYUFicmlnb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdG9uSnVnYWRvcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDAwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBwdWVkbyBlamVjdXRhciBhw7puLiAnK1xyXG4gICAgICAgICAgICAgICAgJ0NhdGVnb3JpYTogJytva0NhdGVnb3JpYStcclxuICAgICAgICAgICAgICAgICcgQ2FtaXNldGE6ICcrb2tDYW1pc2V0YStcclxuICAgICAgICAgICAgICAgICcgUGFudGFsw7NuOiAnK29rUGFudGFsb24rXHJcbiAgICAgICAgICAgICAgICAnIE1lZGlhczogJytva01lZGlhcytcclxuICAgICAgICAgICAgICAgICcgQWJyaWdvOiAnK29rQWJyaWdvK1xyXG4gICAgICAgICAgICAgICAgJyBQYWdvOiAnK29rUGFnbyk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibXQtNSBtYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGItY29udGFpbmVyIGNsYXNzPVwidGV4dC1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDwhLS0gQm90w7NuIGFuaW1hZG8gbWllbnRyYXMgc2UgY2FyZ2EgZWwgYWpheCAtLT5cclxuICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJpbmZvXCIgZGlzYWJsZWQgdi1pZj1cIiF1c3VhcmlvLmZlY2hhTmFjaW1pZW50b1wiPlxyXG4gICAgICAgICAgICAgICAgPGItc3Bpbm5lciBzbWFsbCB0eXBlPVwiZ3Jvd1wiPjwvYi1zcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgQ2FyZ2FuZG8uLi5cclxuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gQ2FyZCBjb24gdG9kbyBlbCBjb250ZW5pZG8gZGUgTWkgcGVyZmlsIC0tPlxyXG4gICAgICAgICAgICA8Yi1jYXJkXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCJNaSBwZXJmaWxcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyLXRleHQtdmFyaWFudD1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIGhlYWRlci10YWc9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgaGVhZGVyLWJnLXZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDUwZW07XCJcclxuICAgICAgICAgICAgICAgIHYtaWY9XCJ1c3VhcmlvLmZlY2hhTmFjaW1pZW50b1wiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBOb21icmUgeSBhcGVsbGlkb3MgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8aDMgdi1pZj1cIiFlZGl0YXJcIj57eyB1c3VhcmlvLm5vbWJyZSB9fSB7eyB1c3VhcmlvLmFwZWxsaWRvcyB9fTwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIE5vbWJyZSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Tm9tYnJlOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IG5hbWU9XCJub21icmVcIiBpZD1cIm5vbWJyZVwiIHJlZj1cInVzdWFyaW9Ob21icmVcIiB2LW1vZGVsPVwidXN1YXJpby5ub21icmVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBub21icmVcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJub21icmVFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIEFwZWxsaWRvcyBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+QXBlbGxpZG9zOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmFwZWxsaWRvc1wiIGlkPVwidXN1YXJpb0FwZWxsaWRvc1wiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIGFxdcOtIHR1cyBhcGVsbGlkb3NcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJhcGVsbGlkb3NFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIEVtYWlsIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkVtYWlsOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uZW1haWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmVtYWlsXCIgaWQ9XCJ1c3VhcmlvRW1haWxcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBlbWFpbFwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtYWlsRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBDb250cmFzZcOxYSBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIiB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Q29udHJhc2XDsWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJ1c3VhcmlvLnBhc3N3b3JkXCIgaWQ9XCJ1c3VhcmlvUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB1bmEgY29udHJhc2XDsWFcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwYXNzd29yZEVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEVkaWNpw7NuIHkgdmFsaWRhY2nDs24gQ29uZmlybWFyIGNvbnRyYXNlw7FhIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Db25maXJtYXIgY29udHJhc2XDsWE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwiY29uZmlybVBhc3NcIiBwbGFjZWhvbGRlcj1cIlJlcGl0ZSBsYSBjb250cmFzZcOxYVwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNvbmZpcm1QYXNzd29yZEVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBNb3N0cmFyL29jdWx0YXIgY29udHJhc2XDsWEgLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCIgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD48L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5WZXIgY29udHJhc2XDsWFzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tY2hlY2tib3ggaWQ9XCJzaG93UGFzc3dvcmRzXCI+PC9iLWZvcm0tY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBEbmkgZGVsIHVzdWFyaW8gLS0+XHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+RG5pOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uZG5pIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5kbmlcIiBpZD1cInVzdWFyaW9EbmlcIiBtYXhsZW5ndGg9XCI5XCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgYXF1w60gdHUgZG5pXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZG5pRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRWRpY2nDs24geSB2YWxpZGFjacOzbiBGZWNoYSBkZSBuYWNpbWllbnRvIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkZlY2hhIGRlIG5hY2ltaWVudG86PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoMCwxMCl9fSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB0eXBlPVwiZGF0ZVwiIHYtbW9kZWw9XCJmZWNoYVwiIGlkPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIGFxdcOtIHR1IGZlY2hhIGRlIG5hY2ltaWVudG9cIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8aHI+PHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm8gbWItNVwiPkRpcmVjY2nDs248L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIENhbGxlIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMiBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+Q2FsbGU6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5jYWxsZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8uY2FsbGVcIiBpZD1cInVzdWFyaW9DYWxsZVwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIGFxdcOtIHR1IGNhbGxlXCI+PC9iLWZvcm0taW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2FsbGVFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIExvY2FsaWRhZCBkZWwgdXN1YXJpbyAtLT5cclxuICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5Mb2NhbGlkYWQ6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgdXN1YXJpby5sb2NhbGlkYWQgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0IHYtbW9kZWw9XCJ1c3VhcmlvLmxvY2FsaWRhZFwiIGlkPVwidXN1YXJpb0xvY2FsaWRhZFwiIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIGFxdcOtIHR1IGxvY2FsaWRhZFwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImxvY2FsaWRhZEVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEVkaWNpw7NuIHkgdmFsaWRhY2nDs24gUHJvdmluY2lhIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlByb3ZpbmNpYTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyB1c3VhcmlvLnByb3ZpbmNpYSB9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dCB2LW1vZGVsPVwidXN1YXJpby5wcm92aW5jaWFcIiBpZD1cInVzdWFyaW9Qcm92aW5jaWFcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBwcm92aW5jaWFcIj48L2ItZm9ybS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwcm92aW5jaWFFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBFZGljacOzbiB5IHZhbGlkYWNpw7NuIEPDs2RpZ28gcG9zdGFsIGRlbCB1c3VhcmlvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkPDs2RpZ28gcG9zdGFsOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IHVzdWFyaW8uY3AgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0taW5wdXQgdi1tb2RlbD1cInVzdWFyaW8uY3BcIiBpZD1cInVzdWFyaW9DcFwiIG1heGxlbmd0aD1cIjVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSBhcXXDrSB0dSBjw7NkaWdvIHBvc3RhbFwiPjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImNwRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8IS0tIERhdG9zIEp1Z2Fkb3IgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJleGlzdGVKdWdhZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyPjxzcGFuIGNsYXNzPVwidGV4dC1pbmZvIG1iLTVcIj5KdWdhZG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPkNhdGVnb3JpYTo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqdWdhZG9yLmNhdGVnb3JpYSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImp1Z2Fkb3IuY2F0ZWdvcmlhXCIgOm9wdGlvbnM9XCJjYXRlZ29yaWFzXCIgaWQ9XCJ2YWxpZGFyQ2F0ZWdvcmlhXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjYXRlZ29yaWFFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+VGFsbGEgZGUgQ2FtaXNldGE6PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sganVnYWRvci5jYW1pc2V0YSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImp1Z2Fkb3IuY2FtaXNldGFcIiA6b3B0aW9ucz1cInRhbGxhc1wiIGlkPVwidmFsaWRhckNhbWlzZXRhXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjYW1pc2V0YUVycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+VGFsbGEgZGUgcGFudGFsw7NuOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGp1Z2Fkb3IucGFudGFsb24gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLnBhbnRhbG9uXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIiBpZD1cInZhbGlkYXJQYW50YWxvblwiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGFudGFsb25FcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPlRhbGxhIGRlIG1lZGlhczo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqdWdhZG9yLm1lZGlhcyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cImVkaXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qgdi1tb2RlbD1cImp1Z2Fkb3IubWVkaWFzXCIgOm9wdGlvbnM9XCJ0YWxsYXNcIiBpZD1cInZhbGlkYXJNZWRpYXNcIj48L2ItZm9ybS1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm1lZGlhc0Vycm9yXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+VGFsbGEgZGUgYWJyaWdvOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgdi1pZj1cIiFlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGp1Z2Fkb3IuYWJyaWdvIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwianVnYWRvci5hYnJpZ29cIiA6b3B0aW9ucz1cInRhbGxhc1wiIGlkPVwidmFsaWRhckFicmlnb1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiYWJyaWdvRXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPk3DqXRvZG8gZGUgcGFnbzo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqdWdhZG9yLnBhZ28gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJqdWdhZG9yLnBhZ29cIiA6b3B0aW9ucz1cInBhZ29cIiBpZD1cInZhbGlkYXJQYWdvSnVnYWRvclwiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGFnb0p1Z2Fkb3JFcnJvclwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj48L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgQGNsaWNrPVwiYmFqYUp1Z2Fkb3JcIiB2LWlmPVwiZWRpdGFyXCI+QmFqYSBqdWdhZG9yPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIERhdG9zIFNvY2lvIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXhpc3RlU29jaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm8gbWItNVwiPlNvY2lvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cInRleHQtZGFya1wiPk3DqXRvZG8gZGUgcGFnbzo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCIhZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzb2Npby5wYWdvIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiZWRpdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdCB2LW1vZGVsPVwic29jaW8ucGFnb1wiIGlkPVwidmFsaWRhclBhZ29Tb2Npb1wiIDpvcHRpb25zPVwicGFnb1wiPjwvYi1mb3JtLXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiLXJvdyBjbGFzcz1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIEBjbGljaz1cImNhbmNlbGFyQWJvbm9cIiB2LWlmPVwiZWRpdGFyXCI+Q2FuY2VsYXIgYWJvbm8gc29jaW88L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRGF0b3MgRW50cmVuYWRvciAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImV4aXN0ZUVudHJlbmFkb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHI+PHNwYW4gY2xhc3M9XCJ0ZXh0LWluZm8gbWItNVwiPkVudHJlbmFkb3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwidGV4dC1kYXJrXCI+VGl0dWxvIGVudmlhZG86PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbCB2LWlmPVwiIWVkaXRhclwiIGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW50cmVuYWRvci50aXR1bG8gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sIHYtaWY9XCJlZGl0YXJcIiBjbGFzcz1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3RhdGU9XCJCb29sZWFuKGZpbGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVsaWphIHVuIGFyY2hpdm8gbyBkZXNwbMOhY2VsbyBhcXXDrS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcC1wbGFjZWhvbGRlcj1cIlNvbHRhciBhcmNoaXZvIGFxdcOtLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm93c2UtdGV4dD1cIkVsZWdpclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxlXCIgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYi1mb3JtLWZpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtYi0yIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIEBjbGljaz1cImJhamFFbnRyZW5hZG9yXCIgdi1pZj1cImVkaXRhclwiPkJhamEgZW50cmVuYWRvcjwvYi1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIGlkPVwiYm90b25FbnRyZW5hZG9yXCIgdi1pZj1cImVkaXRhclwiIEBjbGljaz1cImVudmlhclRpdHVsb1wiPkVudmlhciBvdHJvIHTDrXR1bG88L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItY29sPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxocj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIHYtaWY9XCIhZWRpdGFyXCIgaWQ9XCJlZGljaW9uXCIgQGNsaWNrPVwiZWRpdGFyUGVyZmlsXCI+RWRpdGFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLWRhbmdlclwiIHYtaWY9XCIhZWRpdGFyXCIgQGNsaWNrPVwiZWxpbWluYXJQZXJmaWwodXN1YXJpby5pZClcIj5FbGltaW5hciBjdWVudGE8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHYtaWY9XCJlZGl0YXJcIiBpZD1cInNhdmVDaGFuZ2VzXCIgQGNsaWNrPVwiYWN0dWFsaXphclBlcmZpbFwiPkFjdHVhbGl6YXI8L2ItYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cIm91dGxpbmUtZGFuZ2VyXCIgdi1pZj1cImVkaXRhclwiIEBjbGljaz1cImNhbmNlbGFyRWRpY2lvblwiPkNhbmNlbGFyPC9iLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgICAgICAgICAgPC9iLXJvdz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvYi1jYXJkPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvYi1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDwhLS0gTWVuc2FqZSBlbGltaW5hY2nDs24ganVnYWRvciwgc29jaW8gbyBlbnRyZW5hZG9yIC0tPlxyXG4gICAgICAgIDxzbWFsbCB2LWlmPVwicGFycmFmb1wiPlNpIGVyZXMganVnYWRvci9hLCBzb2NpQCBvIGVudHJlbmFkb3IvYSB5IGRlc2VhcyB0cmFtaXRhciBsYSBiYWphLCBwdWxzYSBhbnRlcyBlbCBib3TDs24gZWRpdGFyLjwvc21hbGw+XHJcbiAgICAgICAgPHNtYWxsIHYtaWY9XCJtZW5zYWplQ29udHJhc2XDsWFcIj5TaSBubyBxdWllcmVzIG1vZGlmaWNhciBsYXMgY29udHJhc2XDsWFzLCBkZWphIGVsIGNhbXBvIHZhY8Otbzwvc21hbGw+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogKCkgPT4gKHtcclxuICAgICAgICAgICAgdXN1YXJpbzogW10sXHJcbiAgICAgICAgICAgIGp1Z2Fkb3I6IFtdLFxyXG4gICAgICAgICAgICBzb2NpbzogW10sXHJcbiAgICAgICAgICAgIGVudHJlbmFkb3I6IFtdLFxyXG4gICAgICAgICAgICBmaWxlOltdLFxyXG4gICAgICAgICAgICBleGlzdGVKdWdhZG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgZXhpc3RlU29jaW86IGZhbHNlLFxyXG4gICAgICAgICAgICBleGlzdGVFbnRyZW5hZG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgZWRpdGFyOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFycmFmbzogZmFsc2UsXHJcbiAgICAgICAgICAgIG1lbnNhamVDb250cmFzZcOxYTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvcHlyaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgIGVsaW1pbmFyOiAnJyxcclxuICAgICAgICAgICAgZWxpbWluYXJTb2NpbzogJycsXHJcbiAgICAgICAgICAgIGVsaW1pbmFySnVnYWRvcjogJycsXHJcbiAgICAgICAgICAgIGVsaW1pbmFyRW50cmVuYWRvcjogJycsXHJcbiAgICAgICAgICAgIGZlY2hhOiAnJyxcclxuICAgICAgICAgICAgY29uZmlybWFyUGFzczogJycsXHJcbiAgICAgICAgICAgIGNvbnRyYXNlw7FhR3VhcmRhZGE6ICcnLFxyXG4gICAgICAgICAgICBjYXRlZ29yaWFzOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0JlbmphbWluJywgdGV4dDogJ0JlbmphbcOtbid9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnQWxldmluJywgdGV4dDogJ0FsZXbDrW4nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0luZmFudGlsJywgdGV4dDogJ0luZmFudGlsJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdDYWRldGUnLCB0ZXh0OiAnQ2FkZXRlJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdKdXZlbmlsJywgdGV4dDogJ0p1dmVuaWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0FmaWNpb25hZG8nLCB0ZXh0OiAnQWZpY2lvbmFkbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVmV0ZXJhbm8nLCB0ZXh0OiAnVmV0ZXJhbm8nfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB0YWxsYXM6W1xyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUycsIHRleHQ6ICdTJ30sXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6ICdNJywgdGV4dDogJ00nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0wnLCB0ZXh0OiAnTCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnWEwnLCB0ZXh0OiAnWEwnfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwYWdvOltcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1BheXBhbCcsIHRleHQ6ICdQYXlwYWwnfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ1RhcmpldGEgY3LDqWRpdG8vZMOpYml0bycsIHRleHQ6ICdUYXJqZXRhIGNyw6lkaXRvL2TDqWJpdG8nfSxcclxuICAgICAgICAgICAgICAgIHt2YWx1ZTogJ0RvbWljaWxpYWNpw7NuIGJhbmNhcmlhJywgdGV4dDogJ0RvbWljaWxpYWNpw7NuIGJhbmNhcmlhJ31cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9taXNkYXRvcycpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c3VhcmlvID0gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnJhZm8gPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29weXJpZ2h0ID0gdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnNhamVDb250cmFzZcOxYSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvZGF0b3MtanVnYWRvcmVzJylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLmlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5qdWdhZG9yID0gcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leGlzdGVKdWdhZG9yID0gdHJ1ZSBcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLXNvY2lvcycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc29jaW8gPSByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXhpc3RlU29jaW8gPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2RhdG9zLWVudHJlbmFkb3JlcycpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50cmVuYWRvciA9IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leGlzdGVFbnRyZW5hZG9yID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGVkaXRhclBlcmZpbCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJyYWZvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnNhamVDb250cmFzZcOxYSA9IHRydWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZlY2hhID0gdGhpcy51c3VhcmlvLmZlY2hhTmFjaW1pZW50by5kYXRlLnN1YnN0cmluZygwLDEwKTsgICBcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFB1bnRlcm8gYm9keVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFyaWFibGVzIGRlbCB1c3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzdWFyaW9Ob21icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWJyZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXN1YXJpb0FwZWxsaWRvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb0FwZWxsaWRvc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXN1YXJpb0VtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c3VhcmlvRW1haWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzdWFyaW9QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb1Bhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXJQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZmlybVBhc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzdWFyaW9EbmkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzdWFyaW9EbmlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzdWFyaW9DYWxsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXN1YXJpb0NhbGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c3VhcmlvTG9jYWxpZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c3VhcmlvTG9jYWxpZGFkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c3VhcmlvUHJvdmluY2lhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c3VhcmlvUHJvdmluY2lhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c3VhcmlvQ3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzdWFyaW9DcFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvd1Bhc3N3b3JkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd1Bhc3N3b3Jkc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm90b25TYXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlQ2hhbmdlc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFyaWFibGVzIGRlbCB1c3VhcmlvIEp1Z2Fkb3JcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcmlhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyQ2F0ZWdvcmlhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW1pc2V0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhckNhbWlzZXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYW50YWxvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhclBhbnRhbG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZWRpYXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJNZWRpYXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFicmlnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmFsaWRhckFicmlnb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnb0p1Z2Fkb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZhbGlkYXJQYWdvSnVnYWRvclwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFyaWFibGUgZGVsIHVzdWFyaW8gU29jaW9cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFnb1NvY2lvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyUGFnb1NvY2lvXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYXJpYWJsZSBkZWwgdXN1YXJpbyBFbnRyZW5hZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJlbmFkb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdG9uRW50cmVuYWRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90b25FbnRyZW5hZG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVycm9yZXMgZGUgdXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub21icmVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm9tYnJlRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwZWxsaWRvc0Vycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcGVsbGlkb3NFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybVBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1QYXNzd29yZEVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkbmlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG5pRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGxlRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsaWRhZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhbGlkYWRFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvdmluY2lhRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb3ZpbmNpYUVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjcEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcEVycm9yXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBPayB2YWxpZGFjaW9uZXMgVXN1YXJpb1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub21icmVGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXBlbGxpZG9zRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRuaUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbWFpbEZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250cmFzZcOxYUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXJDb250cmFzZcOxYUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmZWNoYU5hY2ltaWVudG9GaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGVGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxpZGFkRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3ZpbmNpYUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjcEZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2sgdmFsaWRhY2lvbmVzIFVzdWFyaW8gSnVnYWRvclxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva0NhdGVnb3JpYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9rQ2FtaXNldGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva1BhbnRhbG9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb2tNZWRpYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva0FicmlnbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9rUGFnb0p1Z2Fkb3IgPSB0cnVlOyAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9rIHZhbGlkYWNpw7NuIFVzdWFyaW8gU29jaW8gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBva1BhZ29Tb2NpbyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9rIHZhbGlkYWNpw7NuIFVzdWFyaW8gRW50cmVuYWRvciAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9rRW50cmVuYWRvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZVTkNJT04gQ09NUFJPQkFDSU9OIEVESVRBUiBQRVJGSUxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjb21wcm9iYWNpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobm9tYnJlRmlsbCAmJiBhcGVsbGlkb3NGaWxsICYmIGRuaUZpbGwgJiYgZW1haWxGaWxsICYmIGZlY2hhTmFjaW1pZW50b0ZpbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGNhbGxlRmlsbCAmJiBsb2NhbGlkYWRGaWxsICYmIHByb3ZpbmNpYUZpbGwgJiYgY3BGaWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigoY29udHJhc2XDsWFGaWxsICYmIGNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCkgfHwgKCFjb250cmFzZcOxYUZpbGwgJiYgIWNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXByb2JhY2nDs24gZGUgZXhpc3RlbmNpYSBkZSB1c3VhcmlvIEp1Z2Fkb3IgKyBTb2NpbyArIEVudHJlbmFkb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWEgJiYgcGFnb1NvY2lvICYmIGVudHJlbmFkb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2tDYXRlZ29yaWEgJiYgb2tDYW1pc2V0YSAmJiBva1BhbnRhbG9uICYmIG9rQWJyaWdvICYmIG9rTWVkaWFzICYmIG9rUGFnb0p1Z2Fkb3IgJiYgb2tQYWdvU29jaW8gJiYgb2tFbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpY2FjaW9uZXNVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcHJvYmFjacOzbiBkZSBleGlzdGVuY2lhIGRlIHVzdWFyaW8gSnVnYWRvciArIFNvY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpYSAmJiBwYWdvU29jaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9rQ2F0ZWdvcmlhICYmIG9rQ2FtaXNldGEgJiYgb2tQYW50YWxvbiAmJiBva0FicmlnbyAmJiBva01lZGlhcyAmJiBva1BhZ29KdWdhZG9yICYmIG9rUGFnb1NvY2lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmljYWNpb25lc1VzdWFyaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcHJvYmFjacOzbiBkZSBleGlzdGVuY2lhIGRlIHVzdWFyaW8gSnVnYWRvciArIEVudHJlbmFkb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2F0ZWdvcmlhICYmIGVudHJlbmFkb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9rQ2F0ZWdvcmlhICYmIG9rQ2FtaXNldGEgJiYgb2tQYW50YWxvbiAmJiBva0FicmlnbyAmJiBva01lZGlhcyAmJiBva1BhZ29KdWdhZG9yICYmIG9rRW50cmVuYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmljYWNpb25lc1VzdWFyaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcHJvYmFjacOzbiBkZSBleGlzdGVuY2lhIGRlIHVzdWFyaW8gU29jaW8gKyBFbnRyZW5hZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhZ29Tb2NpbyAmJiBlbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihva1BhZ29Tb2NpbyAmJiBva0VudHJlbmFkb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpY2FjaW9uZXNVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wcm9iYWNpw7NuIGRlIGV4aXN0ZW5jaWEgZGUgdXN1YXJpbyBKdWdkb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY2F0ZWdvcmlhICYmICFwYWdvU29jaW8gJiYgIWVudHJlbmFkb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9rQ2F0ZWdvcmlhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kaWZpY2FjaW9uZXNVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXByb2JhY2nDs24gZGUgZXhpc3RlbmNpYSBkZSB1c3VhcmlvIFNvY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhZ29Tb2NpbyAmJiAhY2F0ZWdvcmlhICYmICFlbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihva1BhZ29Tb2Npbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmaWNhY2lvbmVzVXN1YXJpbykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlQ2hhbmdlcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb21wcm9iYWNpw7NuIGRlIGV4aXN0ZW5jaWEgZGUgdXN1YXJpbyBFbnRyZW5hZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVudHJlbmFkb3IgJiYgIWNhdGVnb3JpYSAmJiAhcGFnb1NvY2lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihva0VudHJlbmFkb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmljYWNpb25lc1VzdWFyaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVDaGFuZ2VzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUNoYW5nZXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5jbGFzc05hbWUgPSBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENpZXJyZSBkZSBmdW5jacOzbiBjb25wcm9iYWNpw7NuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvdG9uU2F2ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90b25TYXZlLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBib3RvblNhdmUuY2xhc3NOYW1lID0gXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZHMub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hvd1Bhc3N3b3Jkcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Bhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Bhc3N3b3JkLnR5cGUgPSBcInBhc3N3b3JkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC50eXBlID0gXCJwYXNzd29yZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBWQUxJREFDSU9ORVMgVVNVQVJJTyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICBub21icmVFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ob21icmUub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwTm9tYnJlID0vXltBLVphLXrDgcOJw43Dk8Oaw6HDqcOtw7PDusOxw5EgXSskLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwTm9tYnJlLnRlc3QodXN1YXJpb05vbWJyZS52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ob21icmUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cE5vbWJyZS50ZXN0KHVzdWFyaW9Ob21icmUudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciB1bmEgY2FkZW5hIGRlIGNhcmFjdGVyZXNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ob21icmUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvTm9tYnJlLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ob21icmUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBBcGVsbGlkb3NcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9BcGVsbGlkb3Mub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwQXBlbGxpZG9zID0vXltBLVphLXrDgcOJw43Dk8Oaw6HDqcOtw7PDusOxw5EgXSskLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cEFwZWxsaWRvcy50ZXN0KHVzdWFyaW9BcGVsbGlkb3MudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvc0Vycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQXBlbGxpZG9zLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvc0ZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBBcGVsbGlkb3MudGVzdCh1c3VhcmlvQXBlbGxpZG9zLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb3NFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIGRlYmUgdGVuZXIgdW5hIGNhZGVuYSBkZSBjYXJhY3RlcmVzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQXBlbGxpZG9zLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvc0ZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb0FwZWxsaWRvcy52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvc0Vycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQXBlbGxpZG9zLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvc0ZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBEbmkgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkbmlFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ebmkub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bWVybyA9IHVzdWFyaW9EbmkudmFsdWUuc3Vic3RyKDAsdXN1YXJpb0RuaS52YWx1ZS5sZW5ndGgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZXRyYSA9IHVzdWFyaW9EbmkudmFsdWUuc3Vic3RyKHVzdWFyaW9EbmkudmFsdWUubGVuZ3RoLTEsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZXRyYU1heXVzY3VsYSA9IGxldHJhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9EbmkudmFsdWUgPSBudW1lcm8rbGV0cmFNYXl1c2N1bGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBEbmkgPS9eWzAtOV17OH1bVFJXQUdNWUZQRFhCTkpaU1FWSExDS0VUXSQvaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwRG5pLnRlc3QodXN1YXJpb0RuaS52YWx1ZSkpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRG5pLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9jb21wcm9iYXItZG5pJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtkbmk6IHVzdWFyaW9EbmkudmFsdWUudG9TdHJpbmcoKX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhckRuaShkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwRG5pLnRlc3QodXN1YXJpb0RuaS52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIGNvbnRlbmVyIDggbsO6bWVyb3MgeSAxIGxldHJhIHbDoWxpZGFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ebmkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvRG5pLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9Ebmkuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5pRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY29tcHJvYmFyRG5pKHZhbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRuaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdETkkgcmVwZXRpZG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUVycm9yLmlubmVySFRNTCA9IFwiRXN0ZSBETkkgeWEgZXhpc3RlLCBpbnRyb2R1Y2Ugb3Ryb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0RuaS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmlGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdETkk6ICcrZG5pRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdETkkgY29ycmVjdG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRG5pLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuaUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdETkk6ICcrZG5pRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuOiBFbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRW1haWwub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnRXhwRW1haWwgPS9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuKFthLXpBLVpdezIsNH0pKyQvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHBFbWFpbC50ZXN0KHVzdWFyaW9FbWFpbC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0VtYWlsLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJ1dGEgPSAnL2NvbXByb2Jhci1lbWFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6ICh7ZW1haWw6IHVzdWFyaW9FbWFpbC52YWx1ZS50b1N0cmluZygpfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYXJFbWFpbChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cEVtYWlsLnRlc3QodXN1YXJpb0VtYWlsLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciBmb3JtYXRvIGVtYWlsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRW1haWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9FbWFpbC52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9FbWFpbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXByb2JhckVtYWlsKHZhbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VtYWlsIHJlcGV0aWRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9IFwiRXN0ZSBlbWFpbCB5YSBleGlzdGUsIGludHJvZHVjZSBvdHJvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvRW1haWwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbWFpbDogJytlbWFpbEZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW1haWwgY29ycmVjdG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9FbWFpbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbEZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbWFpbDogJytlbWFpbEZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQ29udHJhc2XDsWFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzdWFyaW8ucGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvUGFzc3dvcmQub25rZXl1cCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb1Bhc3N3b3JkLnZhbHVlID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtYXJQYXNzd29yZC52YWx1ZSA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXNlw7FhRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyQ29udHJhc2XDsWFGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFzZcOxYUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJhc2XDsWE6ICcrY29udHJhc2XDsWFGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJDb250cmFzZcOxYUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZmlybWFyIENvbnRyYXNlw7FhOiAnK2NvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Bhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXNlw7FhRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybWFyUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsb3IgcGFzczogJyt1c3VhcmlvUGFzc3dvcmQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9QYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhc2XDsWFGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyYXNlw7FhOiAnK2NvbnRyYXNlw7FhRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1hciBDb250cmFzZcOxYTogJytjb25maXJtYXJDb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb250cmFzZcOxYTogJyArIGNvbnRyYXNlw7FhRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1hciBDb250cmFzZcOxYTogJytjb25maXJtYXJDb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQ29uZmlybWFyIGNvbnRyYXNlw7FhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIlwiOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJQYXNzd29yZC5vbmtleXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb1Bhc3N3b3JkLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtYXJQYXNzd29yZC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJhc2XDsWE6ICcgKyBjb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZmlybWFyIENvbnRyYXNlw7FhOiAnK2NvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtYXJQYXNzd29yZC52YWx1ZSAhPSB1c3VhcmlvUGFzc3dvcmQudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBcIkxhcyBjb250cmFzZcOxYXMgbm8gY29pbmNpZGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyQ29udHJhc2XDsWFGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udHJhc2XDsWE6ICcgKyBjb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZmlybWFyIENvbnRyYXNlw7FhOiAnK2NvbmZpcm1hckNvbnRyYXNlw7FhRmlsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtYXJQYXNzd29yZC52YWx1ZSA9PSB1c3VhcmlvUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybWFyUGFzc3dvcmQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJDb250cmFzZcOxYUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRyYXNlw7FhOiAnICsgY29udHJhc2XDsWFGaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1hciBDb250cmFzZcOxYTogJytjb25maXJtYXJDb250cmFzZcOxYUZpbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLmlubmVySFRNTCA9IFwiUHJpbWVybyBkZWJlcyBpbmdyZXNhciBsYSBjb250cmFzZcOxYVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1hclBhc3N3b3JkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtYXJDb250cmFzZcOxYUZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogQ2FsbGVcclxuICAgICAgICAgICAgICAgICAgICBjYWxsZUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0NhbGxlLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cENhbGxlID0vXltBLVphLXrDgcOJw43Dk8Oaw6HDqcOtw7PDusOxw5EgXStbMC05XSskLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVnRXhwQ2FsbGUudGVzdCh1c3VhcmlvQ2FsbGUudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DYWxsZS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZUZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBDYWxsZS50ZXN0KHVzdWFyaW9DYWxsZS52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZUVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gZGViZSB0ZW5lciB1bmEgY2FkZW5hIGRlIGNhcmFjdGVyZXMgeSB1biBuw7ptZXJvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvQ2FsbGUuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9DYWxsZS52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0NhbGxlLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbjogTG9jYWxpZGFkXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpZGFkRXJyb3IuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTG9jYWxpZGFkLm9ua2V5dXAgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ0V4cExvY2FsaWRhZCA9L15bQS1aYS16w4HDicONw5PDmsOhw6nDrcOzw7rDscORIF0rJC87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlZ0V4cExvY2FsaWRhZC50ZXN0KHVzdWFyaW9Mb2NhbGlkYWQudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTG9jYWxpZGFkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEZpbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZWdFeHBMb2NhbGlkYWQudGVzdCh1c3VhcmlvTG9jYWxpZGFkLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWRFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIGRlYmUgdGVuZXIgdW5hIGNhZGVuYSBkZSBjYXJhY3RlcmVzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTG9jYWxpZGFkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXN1YXJpb0xvY2FsaWRhZC52YWx1ZSA9PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEVycm9yLmlubmVySFRNTCA9IFwiRWwgY2FtcG8gbm8gcHVlZGUgZXN0YXIgdmFjw61vXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c3VhcmlvTG9jYWxpZGFkLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsaWRhZEZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs246IFByb3ZpbmNpYVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3ZpbmNpYUVycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Byb3ZpbmNpYS5vbmtleXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBMb2NhbGlkYWQgPS9eW0EtWmEtesOBw4nDjcOTw5rDocOpw63Ds8O6w7HDkSBdKyQvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHBMb2NhbGlkYWQudGVzdCh1c3VhcmlvUHJvdmluY2lhLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Byb3ZpbmNpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFGaWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVnRXhwTG9jYWxpZGFkLnRlc3QodXN1YXJpb1Byb3ZpbmNpYS52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRXJyb3Iuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIHRlbmVyIHVuYSBjYWRlbmEgZGUgY2FyYWN0ZXJlc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Byb3ZpbmNpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzdWFyaW9Qcm92aW5jaWEudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFFcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFFcnJvci5pbm5lckhUTUwgPSBcIkVsIGNhbXBvIG5vIHB1ZWRlIGVzdGFyIHZhY8Otb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb1Byb3ZpbmNpYS5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aW5jaWFGaWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs246IENQXHJcbiAgICAgICAgICAgICAgICAgICAgY3BFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DcC5vbmtleXVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdFeHBDcCA9L14oPzowWzEtOV1cXGR7M318WzEtNF1cXGR7NH18NVswLTJdXFxkezN9KSQvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWdFeHBDcC50ZXN0KHVzdWFyaW9DcC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3BFcnJvci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0NwLnN0eWxlLmJvcmRlckNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwRmlsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYWNpb25lc1VzdWFyaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXJlZ0V4cENwLnRlc3QodXN1YXJpb0NwLnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBkZWJlIHRlbmVyIDUgbnVtZXJvcyBjb21wcmVuZGlkb3MgZW50cmUgMDEwMDAgeSA1Mjk5OVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb0NwLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwRmlsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2FjaW9uZXNVc3VhcmlvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c3VhcmlvQ3AudmFsdWUgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEVycm9yLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwRXJyb3IuaW5uZXJIVE1MID0gXCJFbCBjYW1wbyBubyBwdWVkZSBlc3RhciB2YWPDrW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9DcC5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcEZpbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhY2lvbmVzVXN1YXJpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIFZBTElEQUNJT05FUyBVU1VBUklPIEpVR0FET1IgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gQ2F0ZWdvcsOtYVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNhdGVnb3JpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsb3JDYXRlZ29yaWEgPSBjYXRlZ29yaWEudmFsdWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWEub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjYXRlZ29yaWEudmFsdWUgPT09IHZhbG9yQ2F0ZWdvcmlhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0NhdGVnb3JpYSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0NhdGVnb3JpYSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZhbGlkYWNpw7NuIENhbWlzZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FtaXNldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbG9yQ2FtaXNldGEgPSBjYW1pc2V0YS52YWx1ZTsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1pc2V0YS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhbWlzZXRhLnZhbHVlID09PSB2YWxvckNhbWlzZXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0NhbWlzZXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQ2FtaXNldGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBQYW50YWxvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhbnRhbG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxvclBhbnRhbG9uID0gcGFudGFsb24udmFsdWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYW50YWxvbi5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhbnRhbG9uLnZhbHVlID09PSB2YWxvclBhbnRhbG9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva1BhbnRhbG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rUGFudGFsb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBNZWRpYXNcclxuICAgICAgICAgICAgICAgICAgICBpZihtZWRpYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbG9yTWVkaWFzID0gbWVkaWFzLnZhbHVlOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFzLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWVkaWFzLnZhbHVlID09PSB2YWxvck1lZGlhcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tNZWRpYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tNZWRpYXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBBYnJpZ29cclxuICAgICAgICAgICAgICAgICAgICBpZihhYnJpZ28pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbG9yQWJyaWdvID0gYWJyaWdvLnZhbHVlOyBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWJyaWdvLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYWJyaWdvLnZhbHVlID09PSB2YWxvckFicmlnbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tBYnJpZ28gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tBYnJpZ28gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBQYWdvIGp1Z2Fkb3JcclxuICAgICAgICAgICAgICAgICAgICBpZihwYWdvSnVnYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIganVnYWRvclBhZ28gPSBwYWdvSnVnYWRvci52YWx1ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ29KdWdhZG9yLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFnb0p1Z2Fkb3IudmFsdWUgPT09IGp1Z2Fkb3JQYWdvKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva1BhZ29KdWdhZG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcHJvYmFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rUGFnb0p1Z2Fkb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBWQUxJREFDSU9ORVMgVVNVQVJJTyBTT0NJTyAqL1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGFjacOzbiBQYWdvIFNvY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFnb1NvY2lvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzb2Npb1BhZ28gPSBwYWdvU29jaW8udmFsdWU7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdvU29jaW8ub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYWdvU29jaW8udmFsdWUgPT09IHNvY2lvUGFnbyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tQYWdvU29jaW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wcm9iYWNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tQYWdvU29jaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXByb2JhY2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBWQUxJREFDSU9ORVMgVVNVQVJJTyBFTlRSRU5BRE9SICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVudHJlbmFkb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3RvbkVudHJlbmFkb3IuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmVuYWRvci5vbmNoYW5nZSA9ICgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZW50cmVuYWRvci52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4aXN0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdG9uRW50cmVuYWRvci5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3RvbkVudHJlbmFkb3IuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBleGlzdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSwgIFxyXG4gICAgICAgICAgICBjYW5jZWxhckVkaWNpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5yZWxvYWQodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFycmFmbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW5zYWplQ29udHJhc2XDsWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBlbnZpYXJUaXR1bG8oKXtcclxuICAgICAgICAgICAgICAgIHZhciBydXRhID0gJy9lZGl0YXItZW50cmVuYWRvcidcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuY3R5cGU6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucmVsb2FkKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgICAgICAgICBcclxuICAgICAgICAgICAgYWN0dWFsaXphclBlcmZpbCgpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1dGEgPSAnL2VkaXRhci1kYXRvcydcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRvcyBVc3VhcmlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiB0aGlzLnVzdWFyaW8ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvczogdGhpcy51c3VhcmlvLmFwZWxsaWRvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy51c3VhcmlvLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhOiB0aGlzLmZlY2hhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3M6IHRoaXMudXN1YXJpby5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmk6IHRoaXMudXN1YXJpby5kbmksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IHRoaXMudXN1YXJpby5jYWxsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGlkYWQ6IHRoaXMudXN1YXJpby5sb2NhbGlkYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmluY2lhOiB0aGlzLnVzdWFyaW8ucHJvdmluY2lhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNwOiB0aGlzLnVzdWFyaW8uY3AsXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRvcyBKdWdhZG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmlhOiB0aGlzLmp1Z2Fkb3IuY2F0ZWdvcmlhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbWlzZXRhOiB0aGlzLmp1Z2Fkb3IuY2FtaXNldGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFudGFsb246IHRoaXMuanVnYWRvci5wYW50YWxvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYXM6IHRoaXMuanVnYWRvci5tZWRpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJyaWdvOiB0aGlzLmp1Z2Fkb3IuYWJyaWdvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ29KdWdhZG9yOiB0aGlzLmp1Z2Fkb3IucGFnbyxcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdG9zIFNvY2lvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnb1NvY2lvOiB0aGlzLnNvY2lvLnBhZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXN1YXJpbyA9IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5yZWxvYWQodHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsYXJBYm9ubygpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxpbWluYXJTb2NpbyA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VyQD8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYW5jZWxhY2nDs24gZGVsIGFib25vIGRlIHNvY2lvJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxWYXJpYW50OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUaXRsZTogJ1NJJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyU29jaW8gPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsaW1pbmFyU29jaW8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9lbGltaW5hci1zb2NpbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoe2lkOiB0aGlzLnNvY2lvLmlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBYm9ubyBjYW5jZWxhZG8gY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucmVsb2FkKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fib25vIE5PIGNhbmNlbGFkbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhamFKdWdhZG9yKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFySnVnYWRvciA9ICcnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ8K/RXN0w6FzIHNlZ3VyQD8nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCYWphIGRlIGp1Z2Fkb3IvYScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ3NtJyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVmFyaWFudDogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVmFyaWFudDogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdTSScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGl0bGU6ICdOTycsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGltaW5hckp1Z2Fkb3IgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsaW1pbmFySnVnYWRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2VsaW1pbmFyLWp1Z2Fkb3InLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtpZDogdGhpcy5qdWdhZG9yLmlkfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0eXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYWphIGp1Z2Fkb3IgdHJhbWl0YWRhIGNvcnJlY3RhbWVudGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnJlbG9hZCh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYWphIGp1Z2Fkb3IgTk8gdHJhbWl0YWRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFqYUVudHJlbmFkb3IoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxpbWluYXJFbnRyZW5hZG9yID0gJydcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJ2TW9kYWwubXNnQm94Q29uZmlybSgnwr9Fc3TDoXMgc2VndXJAPycsIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0JhamEgZGUgZW50cmVuYWRvci9hJyxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiAnc20nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxWYXJpYW50OiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgb2tUaXRsZTogJ1NJJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyRW50cmVuYWRvciA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxpbWluYXJFbnRyZW5hZG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvZWxpbWluYXItZW50cmVuYWRvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiAoe2lkOiB0aGlzLmVudHJlbmFkb3IuaWR9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JhamEgZW50cmVuYWRvciB0cmFtaXRhZGEgY29ycmVjdGFtZW50ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucmVsb2FkKHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JhamEgZW50cmVuYWRvciBOTyB0cmFtaXRhZGEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZWxpbWluYXJQZXJmaWwoaWRVc3VhcmlvKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsaW1pbmFyID0gJydcclxuICAgICAgICAgICAgICAgIHRoaXMuJGJ2TW9kYWwubXNnQm94Q29uZmlybSgnwr9SZWFsbWVudGUgcXVpZXJlcyBlbGltaW5hciB0dSBjdWVudGE/Jywge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFbGltaW5hciBjdWVudGEnLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogJ3NtJyxcclxuICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXHJcbiAgICAgICAgICAgICAgICBva1ZhcmlhbnQ6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVmFyaWFudDogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgb2tUaXRsZTogJ1NJJyxcclxuICAgICAgICAgICAgICAgIGNhbmNlbFRpdGxlOiAnTk8nLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxyXG4gICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxpbWluYXIgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsaW1pbmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBydXRhID0gJy9lbGltaW5hci11c3VhcmlvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBydXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtpZDogaWRVc3VhcmlvfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzdWFyaW8gTk8gZWxpbWluYWRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJtdC01IG1iLTUgdGV4dC1jZW50ZXIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPkNvbnRpZ28gc2VndWltb3MgY3JlY2llbmRvPC9oMT5cclxuICAgICAgICA8aDI+wqFIYXp0ZSBzb2NpbyE8L2gyPlxyXG5cclxuICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC01XCI+XHJcbiAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgIDxiLWNhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItY2FyZC1pbWcgc3JjPVwiL2ltZy9Tb2Npb3MuanBnXCI+PC9iLWNhcmQtaW1nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE3DqXRpZG8gZGUgcGFnbyAtLT4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCIgdi1pZj1cIiFkaXNtaXNzQ291bnREb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZXRvZG9QYWdvXCI+TcOpdG9kbyBkZSBwYWdvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0IHYtbW9kZWw9XCJtZXRvZG9QYWdvXCIgOm9wdGlvbnM9XCJwYWdvXCIgaWQ9XCJ2YWxpZGFyUGFnb1NvY2lvXCI+PC9iLWZvcm0tc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwYWdvU29jaW9FcnJvclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQWxlcnQgYW5pbWFkYSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzaG93PVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGRpc21pc3NlZD1cImRpc21pc3NDb3VudERvd249MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBkaXNtaXNzLWNvdW50LWRvd249XCJjb3VudERvd25DaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5FbnZpYW5kbyBpbmZvcm1hY2nDs246IHt7IGRpc21pc3NDb3VudERvd24gfX0gc2VndW5kb3MuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLXByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bWF4PVwiZGlzbWlzc1NlY3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGlzbWlzc0NvdW50RG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9iLXByb2dyZXNzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItYWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBib3RvbiBlbnZpYXIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBpZD1cImJvdG9uU29jaW9zXCIgQGNsaWNrPVwicGFnYXIobWV0b2RvUGFnbylcIj5FbnZpYXI8L2ItYnV0dG9uPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgICAgICAgICAgPC9iLWNhcmQ+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9iLXJvdz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1NvY2lvJyxcclxuICAgIGRhdGEoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBtZXRvZG9QYWdvOiBudWxsLFxyXG4gICAgICAgICAgICBkaXNtaXNzU2VjczogMyxcclxuICAgICAgICAgICAgZGlzbWlzc0NvdW50RG93bjogMCxcclxuICAgICAgICAgICAgc2hvd0Rpc21pc3NpYmxlQWxlcnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgcGFnbzpbXHJcbiAgICAgICAgICAgICAgICB7dmFsdWU6IG51bGwsIHRleHQ6ICdTZWxlY2Npb25lIHVuIG3DqXRvZG8gZGUgcGFnbyd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnUGF5cGFsJywgdGV4dDogJ1BheXBhbCd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnVGFyamV0YSBjcsOpZGl0by9kw6liaXRvJywgdGV4dDogJ1RhcmpldGEgY3LDqWRpdG8vZMOpYml0byd9LFxyXG4gICAgICAgICAgICAgICAge3ZhbHVlOiAnRG9taWNpbGlhY2nDs24gYmFuY2FyaWEnLCB0ZXh0OiAnRG9taWNpbGlhY2nDs24gYmFuY2FyaWEnfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICAgIGNvdW50RG93bkNoYW5nZWQoZGlzbWlzc0NvdW50RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSBkaXNtaXNzQ291bnREb3duXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdhcih0aXBvUGFnbyl7XHJcbiAgICAgICAgICAgIHZhciBwYWdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2YWxpZGFyUGFnb1NvY2lvXCIpO1xyXG4gICAgICAgICAgICB2YXIgcGFnb0Vycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdvU29jaW9FcnJvclwiKTtcclxuICAgICAgICAgICAgdmFyIGVudmlhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90b25Tb2Npb3NcIik7XHJcbiAgICAgICAgICAgIHZhciBva1BhZ29Tb2NpbyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWRhY2nDs24gTcOpdG9kbyBkZSBwYWdvXHJcbiAgICAgICAgICAgIGlmKCFwYWdvLnZhbHVlICl7XHJcbiAgICAgICAgICAgICAgICBwYWdvLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgICAgIHBhZ29FcnJvci5zdHlsZS5jb2xvciA9IFwicmVkXCI7XHJcbiAgICAgICAgICAgICAgICBwYWdvRXJyb3IuaW5uZXJIVE1MID0gXCJEZWJlcyBzZWxlY2Npb25hciB1biBtw6l0b2RvIGRlIHBhZ29cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9rUGFnb1NvY2lvID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYWdvLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocGFnby52YWx1ZSAhPT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ28uc3R5bGUuYm9yZGVyQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnb0Vycm9yLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgb2tQYWdvU29jaW8gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBva1BhZ29Tb2NpbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihva1BhZ29Tb2Npbyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnV0YSA9ICcvcGFnby1zb2Npb3MnXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHJ1dGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogKHtwYWdvOiB0aXBvUGFnb30pLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3RvblNvY2lvcycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3NDb3VudERvd24gPSB0aGlzLmRpc21pc3NTZWNzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdob21lJ30pLCAzMDAwKTsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHB1ZWRvIGVqZWN1dGFtZSBwb3JxdWUgZWwgcGFnbyBlc3TDoTogJytva1BhZ29Tb2Npbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1xuICAgICAgICBfdm0uY2FyZ2FFblByb2Nlc29cbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImItbmF2YmFyXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0aWNreTogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZWFibGU6IFwibWRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcIndoaXRlXCIsIGxhYmVsOiBcIlNwaW5uaW5nXCIgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uY2FyZ2FDb21wbGV0YWRhXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJiLW5hdmJhclwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0aWNreTogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZWFibGU6IFwibWRcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItbmF2YmFyLXRvZ2dsZVwiLCB7IGF0dHJzOiB7IHRhcmdldDogXCJuYXYtY29sbGFwc2VcIiB9IH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiLW5hdmJhci1icmFuZFwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2JhbG9uLnBuZ1wiLCB3aWR0aDogXCIzMFwiLCBhbHQ6IFwiYmFsb25cIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICAgIElGLW9ybcOhdGljb3MgRkNcXHJcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXYtY29sbGFwc2VcIiwgXCJpcy1uYXZcIjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItbmF2YmFyLW5hdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1uYXYtaXRlbVwiLCB7IGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaG9tZVwiIH0gfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vdGljaWFzIGRlbCBjbHViXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLW5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vc3RyYXJTb2NpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb3N0cmFyU29jaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJzb2Npb1wiIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSW5zY3JpYmlyc2UgY29tbyBzb2Npb1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb3N0cmFySnVnYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb3N0cmFySnVnYWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImp1Z2Fkb3JcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkluc2NyaWJpcnNlIGNvbW8ganVnYWRvclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb3N0cmFyRW50cmVuYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb3N0cmFyRW50cmVuYWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImVudHJlbmFkb3JcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhciBzb2xpY2l0dWQgZGUgZW50cmVuYWRvclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1uYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHItNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwicGVyZmlsXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE1pIHBlcmZpbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2xvZ291dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbGltaW5hckNvb2tpZXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmb250LWF3ZXNvbWUtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogXCIjQ0Q1QzVDXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwic2lnbi1vdXQtYWx0XCIsIHNpemU6IFwibGdcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWluZm8gcC0zIGZpeGVkLWJvdHRvbVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29va2llc1NlY3Rpb25cIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImgyXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiRXN0ZSBzaXRpbyB3ZWIgdXRpbGl6YSBjb29raWVzLCBzaSBwZXJtYW5lY2UgYXF1w60gZGFtb3MgcG9yIGhlY2hvIHF1ZSBhY2VwdGEgc3UgdXNvLlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlB1ZWRlIGxlZXIgbcOhcyBzb2JyZSBlbCB1c28gZGUgY29va2llcyBlbiBwb2zDrXRpY2EgZGUgY29va2llcy5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImxpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY2VwdGFyQ29va2llcyB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBY2VwdGFyIGNvb2tpZXNcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwibGlnaHRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvcG9saXRpY2FDb29raWVzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUG9saXRpY2EgZGUgY29va2llc1wiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCBbX3ZtLl92KFwiUHVsc2EgYWNlcHRhciBwYXJhIGVsaW1pbmFyIGVzdGUgbWVuc2FqZVwiKV0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInJvdXRlci12aWV3XCIpXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJmb290ZXJcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9vdGVyIHN0aWNreS1ib3R0b20gY29udGFpbmVyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1tdXRlZFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLCqSAyMDIwIElGLW9ybcOhdGljb3MgRkNcIilcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi01IHRleHQtY2VudGVyIGNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiwr9UaWVuZXMgZWwgdMOtdHVsbyBkZSBlbnRyZW5hZG9yP1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkVudsOtYW5vc2xvIHkgZGlyaWdlIGEgYWxndW5vIGRlIG51ZXN0cm9zIGVxdWlwb3NcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImItaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWcvZW50cmVuYWRvci5wbmdcIiwgZmx1aWQ6IFwiXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1maWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogQm9vbGVhbihfdm0uZmlsZSksXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRWxpamEgdW4gYXJjaGl2byBvIGRlc3Bsw6FjZWxvIGFxdcOtLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkcm9wLXBsYWNlaG9sZGVyXCI6IFwiU29sdGFyIGFyY2hpdm8gYXF1w60uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImJyb3dzZS10ZXh0XCI6IFwiRWxlZ2lyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmFyY2hpdm8gfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImVudHJlbmFkb3JFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItYWxlcnRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZGlzbWlzc0NvdW50RG93biA9IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBhcmNoaXZvOiBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzbWlzc0NvdW50RG93bikgK1xuICAgICAgICAgICAgICAgICAgICBcIiBzZWd1bmRvcy4uLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLXByb2dyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICBtYXg6IF92bS5kaXNtaXNzU2VjcyxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0cHhcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwic3VjY2Vzc1wiLCBpZDogXCJib3RvbkVudHJlbmFkb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbnZpYXJUaXR1bG8gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhclwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY2Fyb3VzZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LXNoYWRvd1wiOiBcIjBweCAwcHggMnB4ICMwMDBcIiB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImNhcm91c2VsLWZhZGVcIixcbiAgICAgICAgICAgICAgICBmYWRlOiBcIlwiLFxuICAgICAgICAgICAgICAgIGluZGljYXRvcnM6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpbWctd2lkdGhcIjogXCIxMDI0XCIsXG4gICAgICAgICAgICAgICAgXCJpbWctaGVpZ2h0XCI6IFwiNDgwXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY2FwdGlvbjogXCJCaWVudmVuaWRAIGEgbnVlc3RyYSB3ZWJcIixcbiAgICAgICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvYmFsb24tZGUtZnV0Ym9sLmpwZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLWNhcm91c2VsLXNsaWRlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgY2FwdGlvbjogXCJDb21wYXJ0ZSBudWVzdHJhIHBhc2nDs25cIixcbiAgICAgICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvY2FtcG8uanBnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItY2Fyb3VzZWwtc2xpZGVcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBjYXB0aW9uOiBcIkFxdcOtIGVuY29udHJhcsOhcyBsYXMgbm90aWNpYXMgZGVsIGNsdWJcIixcbiAgICAgICAgICAgICAgICAgIFwiaW1nLXNyY1wiOiBcIi9pbWcvZXNjdWVsYS5qcGdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYi1jYXJvdXNlbC1zbGlkZVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgY2FwdGlvbjogXCJSZXN1bHRhZG9zXCIsIFwiaW1nLXNyY1wiOiBcIi9pbWcvZnV0Ym9sLmpwZ1wiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRlY2s6IFwiZGVja1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtdmFyaWFudFwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJIaXN0b3JpYSBkZWwgY2x1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbm9jZSBudWVzdHJhIGhpc3RvcmlhXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJzZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiSW5zdGFsYWNpb25lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGVtcGxhIG51ZXN0cmFzIGluc3RhbGFjaW9uZXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiUGxhbnRpbGxhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29ub2NlIG51ZXN0cmFzIHBsYW50aWxsYXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBkZWNrOiBcImRlY2tcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctdmFyaWFudFwiOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXZhcmlhbnRcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFwiQ2xhc2lmaWNhY2nDs25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9ic2VydmEgbnVlc3RyYSBjbGFzaWZpY2FjacOzbiBlbiBsYSB0YWJsYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXZhcmlhbnRcIjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIlByw7N4aW1vcyBwYXJ0aWRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXF1w60gcHVlZGVzIHZlciBjb250cmEgcXVpZW4ganVnYW1vcyBlbCBwcsOzeGltbyBlbmN1ZW50cm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy12YXJpYW50XCI6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBcIlJlc3VsdGFkb3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1pcmEgY29tbyBub3MgaGEgaWRvIGVuIGxvcyDDumx0aW1vcyBwYXJ0aWRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL3JlY29tZW5kYWNpb25lcy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlY29tZW5kYWNpb25lcyBwYXJhIGV2aXRhciBsb3Mgcmllc2dvcyBzb2JyZSBsYSBzYWx1ZCBlbiBsYSB2dWVsdGEgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMzAgbWF5bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgRGVwYXJ0YW1lbnRvIE3DqWRpY28gZGUgbGEgUmVhbCBGZWRlcmFjacOzbiBFc3Bhw7FvbGEgZGUgRsO6dGJvbCwgY29uIGxhIGNvbGFib3JhY2nDs24gZGUgcHJvZmVzaW9uYWxlcyBleHBlcnRvcyBkZSBuaXZlbCBpbnRlcm5hY2lvbmFsLCBoYSBlbGFib3JhZG8gdW4gUHJvdG9jb2xvIG3DqWRpY28geSBkZSBwcmVwYXJhY2nDs24gZsOtc2ljYSBiYXNhZG8gZW4gcmVjb21lbmRhY2lvbmVzIHBhcmEgZXZpdGFyIGxvcyByaWVzZ29zIHBhcmEgbGEgc2FsdWQgZW4gbGEgdnVlbHRhIGEgbG9zIGVudHJlbmFtaWVudG9zIHkgYSBsYSBjb21wZXRpY2nDs24gZW4gZWwgZsO6dGJvbC5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2NkbjEuc2VmdXRib2wuY29tL3NpdGVzL2RlZmF1bHQvZmlsZXMvcGRmL3JlY29tZW5kYWNpb25lc19wYXJhX2V2aXRhcl9sb3NfcmllZ29zX3NvYnJhX2xhX3NhbHVkX2VuX2xhX3Z1ZWx0YV9hX2xhX2NvbXBldGljaW9uX2VuX2VsX2Z1dGJvbC5wZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFxdcOtIGVsIGVubGFjZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1nL2Zhc2UyLmpwZ1wiLCBhbHQ6IFwibG9nb1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZhc2UgMiBkZSBsYSBkZXNlc2NhbGFkYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMjcgbWF5bywgMjAyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWwgQ29uc2VqbyBTdXBlcmlvciBkZSBEZXBvcnRlcyBoYSBwcmVwYXJhZG8gdW4gZG9jdW1lbnRvIHF1ZSBkYSByZXNwdWVzdGEgYSBsYXMgZHVkYXMgbcOhcyBmcmVjdWVudGVzIGRlIGxvcyBkZXBvcnRpc3RhcyBwcm9mZXNpb25hbGVzIHkgZmVkZXJhZG9zIGRlIGNhcmEgYSBsYSBGYXNlIDIgZGUgbGEgZGVzZXNjYWxhZGEsIHF1ZSBlc3RhIHNlbWFuYSBoYSBjb21lbnphZG8gZW4gZ3JhbiBwYXJ0ZSBkZWwgcGHDrXMuXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4xLnNlZnV0Ym9sLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ZhcXNfZGVwb3J0ZV9mYXNlXzIucGRmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBcXXDrSBlbCBlbmxhY2VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltZy9sb2dvX3JmZWYuanBnXCIsIGFsdDogXCJsb2dvXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY2FyZC1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU3VzcGVuc2nDs24gZGUgbGFzIGNvbXBldGljaW9uZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjI3IG1hcnpvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYSBSRkVGIGFwcnVlYmEgbGEgc3VzcGVuc2nDs24gZGUgdG9kYXMgbGFzIGNvbXBldGljaW9uZXMgbm8gcHJvZmVzaW9uYWxlcyBoYXN0YSBxdWUgbGFzIGF1dG9yaWRhZGVzIGNvbnNpZGVyZW4gcXVlIHNlIHB1ZWRlbiByZWFudWRhciBzaW4gcmllc2dvXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY2FyZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvdmVyZmxvdy1oaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwibm8tYm9keVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwibm8tZ3V0dGVyc1wiOiBcIm5vLWd1dHRlcnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvQ29tdW5pY2Fkb19vZmljaWFsLmpwZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiY29tdW5pY2Fkb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jYXJkLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb211bmljYWRvIE9maWNpYWwgfCBDb3JvbmF2aXJ1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViLXRpdGxlXCI6IFwiMTAgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1ZWRhbiBzdXNwZW5kaWRvcyB0b2RvcyBsb3MgZW50cmVuYW1pZW50b3MgZGVzZGUgbWHDsWFuYSBtacOpcmNvbGVzIDExIGRlIG1hcnpvIGRlIDIwMjAgaGFzdGEgbnVldm8gYXZpc28uIExhIFJlYWwgRmVkZXJhY2nDs24gZGUgRsO6dGJvbCBkZSBNYWRyaWQgaGEgYW51bmNpYWRvIGxhIHN1c3BlbnNpw7NuIGRlIGxhcyBjb21wZXRpY2lvbmVzIHRlcnJpdG9yaWFsZXMgZHVyYW50ZSBsYXMgcHLDs3hpbWFzIGRvcyBzZW1hbmFzLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3ctaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibm8tYm9keVwiOiBcIm5vLWJvZHlcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcIm5vLWd1dHRlcnNcIjogXCJuby1ndXR0ZXJzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jYXJkLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL3Jlc3VsdGFkb3MuanBnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJyZXN1bHRhZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlc3VsdGFkb3MgZGVsIGZpbiBkZSBzZW1hbmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN1Yi10aXRsZVwiOiBcIjkgbWFyem8sIDIwMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51ZXN0cm9zIGVxdWlwb3MgY29udGludWFuIGNvbiBsYSBidWVuYSBkaW7DoW1pY2EgZGUgZXN0YXMgw7psdGltYXMgNyBqb3JuYWRhcy4gVHJhcyBlbCB0cm9waWV6byBpbmljaWFsIGEgbGEgdnVlbHRhIGRlIG5hdmlkYWQsIHNlIGN1ZW50YW4gbG9zIHBhcnRpZG9zIHBvciB2aWN0b3JpYS5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJuby1ib2R5XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwibm8tZ3V0dGVyc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY2FyZC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9wdWVzdG9fZW50cmVuYWRvci5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcInB1ZXN0b19lbnRyZW5hZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNhcmQtYm9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1ZXN0b3MgZGUgZW50cmVuYWRvcmVzIHZhY2FudGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWItdGl0bGVcIjogXCIyIG1hcnpvLCAyMDIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZW5lbW9zIGRpc3BvbmlibGVzIGFsZ3VuYXMgdmFjYW50ZXMgZGUgZW50cmVuYWRvcmVzIGRlIGFsZ3VuYXMgZGUgbnVlc3RyYXMgcGxhbnRpbGxhcywgc2kgdGllbmVzIGVsIHTDrXR1bG8gbWFuZGFsbyB5IGZvcm1hIHBhcnRlIGRlbCBjbHViLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgdGV4dC1jZW50ZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlJlbGxlbmEgZXN0ZSBmb3JtdWxhcmlvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiwqF5IMO6bmV0ZSBhIG51ZXN0cm8gZXF1aXBvIVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItY29udGFpbmVyXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgYXR0cnM6IHsgXCJuby1ndXR0ZXJzXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiY2F0ZWdvcmlhc1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhdGVnb3LDrWE6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJDYXRlZ29yaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNhdGVnb3JpYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhdGVnb3JpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yaWEgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXRlZ29yaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiY2F0ZWdvcmlhRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhQ2FtaXNldGFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBjYW1pc2V0YTpcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidmFsaWRhckNhbWlzZXRhXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFDYW1pc2V0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUNhbWlzZXRhID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFsbGFDYW1pc2V0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJjYW1pc2V0YUVycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0YWxsYVBhbnRhbG9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgcGFudGFsw7NuOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ2YWxpZGFyUGFudGFsb25cIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYVBhbnRhbG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhbGxhUGFudGFsb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYVBhbnRhbG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInBhbnRhbG9uRXJyb3JcIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICFfdm0uZGlzbWlzc0NvdW50RG93blxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItZm9ybS1yb3dcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTNcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhbGxhTWVkaWFzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGFsbGEgZGUgbWVkaWFzOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ2YWxpZGFyTWVkaWFzXCIsIG9wdGlvbnM6IF92bS50YWxsYXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFsbGFNZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFNZWRpYXMgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWxsYU1lZGlhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJtZWRpYXNFcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtLXJvd1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwidGFsbGFBYnJpZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBhYnJpZ286XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInZhbGlkYXJBYnJpZ29cIiwgb3B0aW9uczogX3ZtLnRhbGxhcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWxsYUFicmlnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUFicmlnbyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhbGxhQWJyaWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcImFicmlnb0Vycm9yXCIgfSB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmRpc21pc3NDb3VudERvd25cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtZXRvZG9QYWdvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTcOpdG9kbyBkZSBwYWdvOlwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ2YWxpZGFyUGFnb1wiLCBvcHRpb25zOiBfdm0ucGFnbyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRvZG9QYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1ldG9kb1BhZ28gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtZXRvZG9QYWdvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IGlkOiBcInBhZ29FcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTMganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1hbGVydFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBkaXNtaXNzZWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNtaXNzQ291bnREb3duID0gMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImRpc21pc3MtY291bnQtZG93blwiOiBfdm0uY291bnREb3duQ2hhbmdlZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiRW52aWFuZG8gaW5mb3JtYWNpw7NuOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc21pc3NDb3VudERvd24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIHNlZ3VuZG9zLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLXByb2dyZXNzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXg6IF92bS5kaXNtaXNzU2VjcyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpc21pc3NDb3VudERvd24sXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWZvcm0tcm93XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBpZDogXCJib3Rvbkp1Z2Fkb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uaW5zY3JpYmlySnVnYWRvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWV0b2RvUGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYUNhbWlzZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYVBhbnRhbG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWxsYU1lZGlhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGFsbGFBYnJpZ29cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhclwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYi1jb250YWluZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJ0ZXh0LWNlbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgIV92bS51c3VhcmlvLmZlY2hhTmFjaW1pZW50b1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YXJpYW50OiBcImluZm9cIiwgZGlzYWJsZWQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1zcGlubmVyXCIsIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIsIHR5cGU6IFwiZ3Jvd1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBDYXJnYW5kby4uLlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udXN1YXJpby5mZWNoYU5hY2ltaWVudG9cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNhcmRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI1MGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogXCJNaSBwZXJmaWxcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItdGV4dC12YXJpYW50XCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXItdGFnXCI6IFwiaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyLWJnLXZhcmlhbnRcIjogXCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5ub21icmUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmFwZWxsaWRvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm9tYnJlOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidXN1YXJpb05vbWJyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibm9tYnJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IG5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLm5vbWJyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJub21icmVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLm5vbWJyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm5vbWJyZUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBcGVsbGlkb3M6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0FwZWxsaWRvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB0dXMgYXBlbGxpZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uYXBlbGxpZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcImFwZWxsaWRvc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8uYXBlbGxpZG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYXBlbGxpZG9zRXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1haWw6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmVtYWlsKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ1c3VhcmlvRW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8uZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJlbWFpbEVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29udHJhc2XDsWE6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9QYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkludHJvZHVjZSBhcXXDrSB1bmEgY29udHJhc2XDsWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXN1YXJpby5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYXNzd29yZEVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb25maXJtYXIgY29udHJhc2XDsWE6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbmZpcm1QYXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiUmVwaXRlIGxhIGNvbnRyYXNlw7FhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY29uZmlybVBhc3N3b3JkRXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlZlciBjb250cmFzZcOxYXNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwic2hvd1Bhc3N3b3Jkc1wiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEbmk6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c3VhcmlvLmRuaSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0RuaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCI5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGRuaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLmRuaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJkbmlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmRuaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRuaUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGZWNoYSBkZSBuYWNpbWllbnRvOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXN1YXJpby5mZWNoYU5hY2ltaWVudG8uZGF0ZS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjZSBhcXXDrSB0dSBmZWNoYSBkZSBuYWNpbWllbnRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZlY2hhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mZWNoYSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmZWNoYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1pbmZvIG1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRpcmVjY2nDs25cIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMiBtdC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhbGxlOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5jYWxsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXN1YXJpb0NhbGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY2FsbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY2FsbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNhbGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY2FsbGVFcnJvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTG9jYWxpZGFkOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXN1YXJpby5sb2NhbGlkYWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9Mb2NhbGlkYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnRyb2R1Y2UgYXF1w60gdHUgbG9jYWxpZGFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8ubG9jYWxpZGFkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS51c3VhcmlvLCBcImxvY2FsaWRhZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzdWFyaW8ubG9jYWxpZGFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibG9jYWxpZGFkRXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlByb3ZpbmNpYTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8ucHJvdmluY2lhKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ1c3VhcmlvUHJvdmluY2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IHByb3ZpbmNpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c3VhcmlvLnByb3ZpbmNpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXN1YXJpbywgXCJwcm92aW5jaWFcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLnByb3ZpbmNpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInByb3ZpbmNpYUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDw7NkaWdvIHBvc3RhbDpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzdWFyaW8uY3ApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInVzdWFyaW9DcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiSW50cm9kdWNlIGFxdcOtIHR1IGPDs2RpZ28gcG9zdGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzdWFyaW8uY3AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzdWFyaW8sIFwiY3BcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c3VhcmlvLmNwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY3BFcnJvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZXhpc3RlSnVnYWRvclxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1pbmZvIG1iLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSnVnYWRvclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNhdGVnb3JpYTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5jYXRlZ29yaWEpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNhdGVnb3JpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ2YWxpZGFyQ2F0ZWdvcmlhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmp1Z2Fkb3IuY2F0ZWdvcmlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVnYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhdGVnb3JpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmNhdGVnb3JpYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNhdGVnb3JpYUVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIENhbWlzZXRhOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5qdWdhZG9yLmNhbWlzZXRhKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS50YWxsYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ2YWxpZGFyQ2FtaXNldGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5jYW1pc2V0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1Z2Fkb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYW1pc2V0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmNhbWlzZXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY2FtaXNldGFFcnJvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUYWxsYSBkZSBwYW50YWzDs246XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmp1Z2Fkb3IucGFudGFsb24pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhbGxhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJQYW50YWxvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5qdWdhZG9yLnBhbnRhbG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVnYWRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhbnRhbG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImp1Z2Fkb3IucGFudGFsb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYW50YWxvbkVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIG1lZGlhczpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5tZWRpYXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhbGxhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJNZWRpYXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5tZWRpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5qdWdhZG9yLCBcIm1lZGlhc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLm1lZGlhc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm1lZGlhc0Vycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRhbGxhIGRlIGFicmlnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5hYnJpZ28pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnRhbGxhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZhbGlkYXJBYnJpZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uanVnYWRvci5hYnJpZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5qdWdhZG9yLCBcImFicmlnb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLmFicmlnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFicmlnb0Vycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uanVnYWRvci5wYWdvKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5wYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidmFsaWRhclBhZ29KdWdhZG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmp1Z2Fkb3IucGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmp1Z2Fkb3IsIFwicGFnb1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJqdWdhZG9yLnBhZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwYWdvSnVnYWRvckVycm9yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iYWphSnVnYWRvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQmFqYSBqdWdhZG9yXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmV4aXN0ZVNvY2lvXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm8gbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTb2Npb1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc29jaW8ucGFnbykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ2YWxpZGFyUGFnb1NvY2lvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucGFnb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc29jaW8ucGFnbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNvY2lvLCBcInBhZ29cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic29jaW8ucGFnb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jYW5jZWxhckFib25vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxhciBhYm9ubyBzb2Npb1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5leGlzdGVFbnRyZW5hZG9yXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZm8gbWItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFbnRyZW5hZG9yXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGl0dWxvIGVudmlhZG86XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVudHJlbmFkb3IudGl0dWxvKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1maWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IEJvb2xlYW4oX3ZtLmZpbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRWxpamEgdW4gYXJjaGl2byBvIGRlc3Bsw6FjZWxvIGFxdcOtLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRyb3AtcGxhY2Vob2xkZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTb2x0YXIgYXJjaGl2byBhcXXDrS4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJicm93c2UtdGV4dFwiOiBcIkVsZWdpclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0yIG10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcIm91dGxpbmUtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYmFqYUVudHJlbmFkb3IgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkJhamEgZW50cmVuYWRvclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwib3V0bGluZS1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImJvdG9uRW50cmVuYWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lbnZpYXJUaXR1bG8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVudmlhciBvdHJvIHTDrXR1bG9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5lZGl0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJvdXRsaW5lLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImVkaWNpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5lZGl0YXJQZXJmaWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdGFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uZWRpdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJvdXRsaW5lLWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbGltaW5hclBlcmZpbChfdm0udXN1YXJpby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFbGltaW5hciBjdWVudGFcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIm91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2F2ZUNoYW5nZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5hY3R1YWxpemFyUGVyZmlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjdHVhbGl6YXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwib3V0bGluZS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2FuY2VsYXJFZGljaW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbGFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucGFycmFmb1xuICAgICAgICA/IF9jKFwic21hbGxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlNpIGVyZXMganVnYWRvci9hLCBzb2NpQCBvIGVudHJlbmFkb3IvYSB5IGRlc2VhcyB0cmFtaXRhciBsYSBiYWphLCBwdWxzYSBhbnRlcyBlbCBib3TDs24gZWRpdGFyLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubWVuc2FqZUNvbnRyYXNlw7FhXG4gICAgICAgID8gX2MoXCJzbWFsbFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiU2kgbm8gcXVpZXJlcyBtb2RpZmljYXIgbGFzIGNvbnRyYXNlw7FhcywgZGVqYSBlbCBjYW1wbyB2YWPDrW9cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTJcIiwgYXR0cnM6IHsgdmFyaWFudDogXCJsaWdodFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJWb2x2ZXIgYSBpbmljaW9cIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIlBvbMOtdGljYSBkZSBjb29raWVzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJMYSBwcmVzZW50ZSBwb2zDrXRpY2EgZGUgY29va2llcyB0aWVuZSBwb3IgZmluYWxpZGFkIGluZm9ybWFybGUgZGUgbWFuZXJhIGNsYXJhIHkgcHJlY2lzYSBzb2JyZSBsYXMgY29va2llcyBxdWUgc2UgdXRpbGl6YW4gZW4gbGEgcMOhZ2luYSB3ZWIgZGUgSUYtb3Jtw6F0aWNvcyBGQy5cIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX2MoXCJ1XCIsIFtfdm0uX3YoXCLCv1F1w6kgc29uIGxhcyBjb29raWVzP1wiKV0pXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFVuYSBjb29raWUgZXMgdW4gcGVxdWXDsW8gZnJhZ21lbnRvIGRlIHRleHRvIHF1ZSBsb3Mgc2l0aW9zIHdlYiBxdWUgdmlzaXRhIGVudsOtYW4gYWwgbmF2ZWdhZG9yIHkgcXVlIHBlcm1pdGUgcXVlIGVsIHNpdGlvIHdlYiByZWN1ZXJkZSBpbmZvcm1hY2nDs24gc29icmUgc3UgdmlzaXRhLCBjb21vIHN1IGlkaW9tYSBwcmVmZXJpZG8geSBvdHJhcyBvcGNpb25lcywgY29uIGVsIGZpbiBkZSBmYWNpbGl0YXIgc3UgcHLDs3hpbWEgdmlzaXRhIHkgaGFjZXIgcXVlIGVsIHNpdGlvIGxlIHJlc3VsdGUgbcOhcyDDunRpbC4gTGFzIGNvb2tpZXMgZGVzZW1wZcOxYW4gdW4gcGFwZWwgbXV5IGltcG9ydGFudGUgeSBjb250cmlidXllbiBhIHRlbmVyIHVuYSBtZWpvciBleHBlcmllbmNpYSBkZSBuYXZlZ2FjacOzbiBwYXJhIGVsIHVzdWFyaW8uXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW19jKFwidVwiLCBbX3ZtLl92KFwiVGlwb3MgZGUgY29va2llc1wiKV0pXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFNlZ8O6biBxdWnDqW4gc2VhIGxhIGVudGlkYWQgcXVlIGdlc3Rpb25lIGVsIGRvbWluaW8gZGVzZGUgZMOzbmRlIHNlIGVudsOtYW4gbGFzIGNvb2tpZXMgeSBzZSB0cmF0ZW4gbG9zIGRhdG9zIHF1ZSBzZSBvYnRlbmdhbiwgc2UgcHVlZGVuIGRpc3Rpbmd1aXIgZG9zIHRpcG9zOiBjb29raWVzIHByb3BpYXMgeSBjb29raWVzIGRlIHRlcmNlcm9zLlxcbiAgICAgICAgICAgICAgICBFeGlzdGUgdGFtYmnDqW4gdW5hIHNlZ3VuZGEgY2xhc2lmaWNhY2nDs24gc2Vnw7puIGVsIHBsYXpvIGRlIHRpZW1wbyBxdWUgcGVybWFuZWNlbiBhbG1hY2VuYWRhcyBlbiBlbCBuYXZlZ2Fkb3IgZGVsIGNsaWVudGUsIHB1ZGllbmRvIHRyYXRhcnNlIGRlIGNvb2tpZXMgZGUgc2VzacOzbiBvIGNvb2tpZXMgcGVyc2lzdGVudGVzLlxcbiAgICAgICAgICAgICAgICBQb3Igw7psdGltbywgZXhpc3RlIG90cmEgY2xhc2lmaWNhY2nDs24gY29uIGNpbmNvIHRpcG9zIGRlIGNvb2tpZXMgc2Vnw7puIGxhIGZpbmFsaWRhZCBwYXJhIGxhIHF1ZSBzZSB0cmF0ZW4gbG9zIGRhdG9zIG9idGVuaWRvczogY29va2llcyB0w6ljbmljYXMsIGNvb2tpZXMgZGUgcGVyc29uYWxpemFjacOzbiwgY29va2llcyBkZSBhbsOhbGlzaXMsIGNvb2tpZXMgcHVibGljaXRhcmlhcyB5IGNvb2tpZXMgZGUgcHVibGljaWRhZCBjb21wb3J0YW1lbnRhbC5cXG4gICAgICAgICAgICAgICAgUGFyYSBtw6FzIGluZm9ybWFjacOzbiBhIGVzdGUgcmVzcGVjdG8gcHVlZGUgY29uc3VsdGFyIGxhIEd1w61hIHNvYnJlIGVsIHVzbyBkZSBsYXMgY29va2llcyBkZSBsYSBBZ2VuY2lhIEVzcGHDsW9sYSBkZSBQcm90ZWNjacOzbiBkZSBEYXRvcy5cXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX2MoXCJ1XCIsIFtfdm0uX3YoXCJDb29raWVzIHV0aWxpemFkYXMgZW4gbGEgd2ViXCIpXSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgQSBjb250aW51YWNpw7NuIHNlIGlkZW50aWZpY2FuIGxhcyBjb29raWVzIHF1ZSBlc3TDoW4gc2llbmRvIHV0aWxpemFkYXMgZW4gZXN0YSBww6FnaW5hOiBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgLSBOdWVzdHJhIHDDoWdpbmEgdXRpbGl6YSB1bmEgc29sYSBjb29raWUgcXVlIHNpbXBsZW1lbnRlIGd1YXJkYSB1biBtZW5zYWplIGRlIGJpZW52ZW5pZGEgYSBsYSBww6FnaW5hLlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ1XCIsIFtfdm0uX3YoXCJBY2VwdGFjacOzbiBkZSBsYSBwb2zDrXRpY2EgZGUgY29va2llc1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJQdWxzYW5kbyBlbCBib3TDs24gQWNlcHRhciBjb29raWVzIHNlIGFzdW1lIHF1ZSB1c3RlZCBhY2VwdGEgZWwgdXNvIGRlIGNvb2tpZXMuXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkPDs21vIG1vZGlmaWNhciBsYSBjb25maWd1cmFjacOzbiBkZSBsYXMgY29va2llc1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICdcXG4gICAgICAgICAgICAgICAgVXN0ZWQgcHVlZGUgcmVzdHJpbmdpciwgYmxvcXVlYXIgbyBib3JyYXIgbGFzIGNvb2tpZXMgZGUgSUYtb3Jtw6F0aWNvcyBGQyBvIGN1YWxxdWllciBvdHJhIHDDoWdpbmEgd2ViIHV0aWxpemFuZG8gc3UgbmF2ZWdhZG9yLiBFbiBjYWRhIG5hdmVnYWRvciBsYSBvcGVyYXRpdmEgZXMgZGlmZXJlbnRlLCBsYSBmdW5jacOzbiBkZSBcIkF5dWRhXCIgbGUgbW9zdHJhcsOhIGPDs21vIGhhY2VybG8uXFxuICAgICAgICAgICAgJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItNSB0ZXh0LWNlbnRlciBjb250YWluZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIkNvbnRpZ28gc2VndWltb3MgY3JlY2llbmRvXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiwqFIYXp0ZSBzb2NpbyFcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLWNhcmQtaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWcvU29jaW9zLmpwZ1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgIV92bS5kaXNtaXNzQ291bnREb3duXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm1ldG9kb1BhZ29cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk3DqXRvZG8gZGUgcGFnbzpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnBhZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidmFsaWRhclBhZ29Tb2Npb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tZXRvZG9QYWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXRvZG9QYWdvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1ldG9kb1BhZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJwYWdvU29jaW9FcnJvclwiIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBfdm0uZGlzbWlzc0NvdW50RG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NlZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzbWlzc0NvdW50RG93biA9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzbWlzcy1jb3VudC1kb3duXCI6IF92bS5jb3VudERvd25DaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnZpYW5kbyBpbmZvcm1hY2nDs246IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaXNtaXNzQ291bnREb3duKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHNlZ3VuZG9zLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItcHJvZ3Jlc3NcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogX3ZtLmRpc21pc3NTZWNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXNtaXNzQ291bnREb3duLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjRweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIGlkOiBcImJvdG9uU29jaW9zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBhZ2FyKF92bS5tZXRvZG9QYWdvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRW52aWFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==