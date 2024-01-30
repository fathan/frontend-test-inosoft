(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routers */ "./resources/js/routers/index.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stores */ "./resources/js/stores/index.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stores__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurations */ "./resources/js/configurations/index.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/app.scss */ "./resources/styles/app.scss");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  el: '#app',
  router: _routers__WEBPACK_IMPORTED_MODULE_0__["default"],
  store: (_stores__WEBPACK_IMPORTED_MODULE_1___default())
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.baseURL = process.env.MIX_APP_URL;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionFirst/index.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionFirst/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CardSectionFirst_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _CardSectionFirst_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardSectionFirst.vue */ "./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue");


/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionSecond/index.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionSecond/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _CardSectionSecond_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _CardSectionSecond_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardSectionSecond.vue */ "./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue");


/***/ }),

/***/ "./resources/js/components/Layouts/PageNotFound/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Layouts/PageNotFound/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _PageNotFound_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _PageNotFound_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNotFound.vue */ "./resources/js/components/Layouts/PageNotFound/PageNotFound.vue");


/***/ }),

/***/ "./resources/js/components/Layouts/TheFooter/index.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Layouts/TheFooter/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TheFooter_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TheFooter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue */ "./resources/js/components/Layouts/TheFooter/TheFooter.vue");


/***/ }),

/***/ "./resources/js/components/Layouts/TheNavigation/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Layouts/TheNavigation/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _TheNavigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _TheNavigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavigation.vue */ "./resources/js/components/Layouts/TheNavigation/TheNavigation.vue");


/***/ }),

/***/ "./resources/js/configurations/components.js":
/*!***************************************************!*\
  !*** ./resources/js/configurations/components.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _root_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/App.vue */ "./resources/js/App.vue");
/* harmony import */ var _components_Layouts_TheNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layouts/TheNavigation */ "./resources/js/components/Layouts/TheNavigation/index.js");
/* harmony import */ var _components_Layouts_TheFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layouts/TheFooter */ "./resources/js/components/Layouts/TheFooter/index.js");




vue__WEBPACK_IMPORTED_MODULE_3__["default"].component('App', _root_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].component('TheNavigation', _components_Layouts_TheNavigation__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_3__["default"].component('TheFooter', _components_Layouts_TheFooter__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./resources/js/configurations/event-bus.js":
/*!**************************************************!*\
  !*** ./resources/js/configurations/event-bus.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventBus: () => (/* binding */ EventBus)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var EventBus = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./resources/js/configurations/fort-awesome.js":
/*!*****************************************************!*\
  !*** ./resources/js/configurations/fort-awesome.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontAwesomeIcon: () => (/* reexport safe */ _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon),
/* harmony export */   add: () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");






var add = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add;
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.fas);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.fab);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library.add(_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.far);
vue__WEBPACK_IMPORTED_MODULE_5__["default"].component('FontAwesomeIcon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon);


/***/ }),

/***/ "./resources/js/configurations/index.js":
/*!**********************************************!*\
  !*** ./resources/js/configurations/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializer */ "./resources/js/configurations/initializer.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./resources/js/configurations/components.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins */ "./resources/js/configurations/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fort_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fort-awesome */ "./resources/js/configurations/fort-awesome.js");





/***/ }),

/***/ "./resources/js/configurations/initializer.js":
/*!****************************************************!*\
  !*** ./resources/js/configurations/initializer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _configurations_event_bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @configurations/event-bus */ "./resources/js/configurations/event-bus.js");


(function (i) {
  i.prototype.$api = {};
  i.prototype.$eventBus = _configurations_event_bus__WEBPACK_IMPORTED_MODULE_0__.EventBus;
})(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/configurations/plugins.js":
/*!************************************************!*\
  !*** ./resources/js/configurations/plugins.js ***!
  \************************************************/
/***/ (() => {

// import Vue from 'vue';

/***/ }),

/***/ "./resources/js/pages/About/index.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/About/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _About_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _About_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue */ "./resources/js/pages/About/About.vue");


/***/ }),

/***/ "./resources/js/pages/Home/index.js":
/*!******************************************!*\
  !*** ./resources/js/pages/Home/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Home_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue */ "./resources/js/pages/Home/Home.vue");


/***/ }),

/***/ "./resources/js/routers/index.js":
/*!***************************************!*\
  !*** ./resources/js/routers/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_Layouts_PageNotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Layouts/PageNotFound */ "./resources/js/components/Layouts/PageNotFound/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/Home */ "./resources/js/pages/Home/index.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/About */ "./resources/js/pages/About/index.js");





var routes = [{
  path: '/',
  name: 'Home',
  component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/about',
  name: 'About',
  component: _pages_About__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  path: '/:pathMatch(.*)*',
  name: 'Page Not Found',
  component: _components_Layouts_PageNotFound__WEBPACK_IMPORTED_MODULE_0__["default"]
}];
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]({
  mode: 'history',
  routes: routes
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./resources/js/stores/index.js":
/*!**************************************!*\
  !*** ./resources/js/stores/index.js ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      type: String,
      "default": ''
    },
    description: {
      type: String,
      "default": ''
    },
    icon: {
      type: String,
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    title: {
      type: String,
      "default": ''
    },
    description: {
      type: String,
      "default": ''
    },
    labelAction1: {
      type: String,
      "default": ''
    },
    linkAction1: {
      type: String,
      "default": ''
    },
    labelAction2: {
      type: String,
      "default": ''
    },
    linkAction2: {
      type: String,
      "default": ''
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../assets/images/pipesales.svg */ "./resources/assets/images/pipesales.svg");
/* harmony import */ var _assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      logo: (_assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0___default()),
      year: new Date().getFullYear()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../assets/images/pipesales.svg */ "./resources/assets/images/pipesales.svg");
/* harmony import */ var _assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      logo: (_assets_images_pipesales_svg__WEBPACK_IMPORTED_MODULE_0___default())
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Fragments_Home_CardSectionFirst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Fragments/Home/CardSectionFirst */ "./resources/js/components/Fragments/Home/CardSectionFirst/index.js");
/* harmony import */ var _components_Fragments_Home_CardSectionSecond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Fragments/Home/CardSectionSecond */ "./resources/js/components/Fragments/Home/CardSectionSecond/index.js");
/* harmony import */ var _assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/svg/globe.svg */ "./resources/assets/svg/globe.svg");
/* harmony import */ var _assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../assets/svg/dollar.svg */ "./resources/assets/svg/dollar.svg");
/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../assets/svg/pipa.svg */ "./resources/assets/svg/pipa.svg");
/* harmony import */ var _assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../assets/images/landing-image-1.png */ "./resources/assets/images/landing-image-1.png");
/* harmony import */ var _assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../assets/images/landing-image-2.png */ "./resources/assets/images/landing-image-2.png");
/* harmony import */ var _assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* eslint-disable max-len */







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CardSectionFirst: _components_Fragments_Home_CardSectionFirst__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardSectionSecond: _components_Fragments_Home_CardSectionSecond__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      cardSectionFirstList: [{
        id: 1,
        title: 'Buy or sell globally, manage it locally',
        description: 'Pipesales enables sellers to promote surplus inventory globally, opening buyers search horizons. We provide a secure and uncomplicated process, with both buyers and sellers enjoying the confidence of transaction management by their local Marubeni-Itochu Steel (MISI) network.',
        icon: (_assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_2___default())
      }, {
        id: 1,
        title: 'Supporting cost-effective inventory management',
        description: 'Pipesales marketplace allows organisations of all sizes to quickly trade tubular products and accessories at a fair price. You can now keep costs in line with expectations and easily access or offload excess inventory.',
        icon: (_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_3___default())
      }, {
        id: 1,
        title: 'Large range of ready-made pipes fit for purpose',
        description: 'Pipesales marketplace is home to a large range of quality Oil Country Tubular Goods (OCTG). Browse by product type, grade, size, connection and location. Be assured of suitable backup supplies to meet urgent demand.',
        icon: (_assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_4___default())
      }],
      landingImage1: (_assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_5___default()),
      landingImage2: (_assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_6___default())
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("router-view");
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=template&id=d3f36a54":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=template&id=d3f36a54 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "flex flex-col"
  }, [_c("div", {
    staticClass: "h-16 items-center justify-center"
  }, [_c("img", {
    staticClass: "m-auto",
    attrs: {
      src: _vm.icon,
      alt: "Icon"
    }
  })]), _vm._v(" "), _c("h2", {
    staticClass: "font-bold text-2xl text-gray-700 mb-3"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("p", {
    staticClass: "text-base text-gray-500"
  }, [_vm._v("\n    " + _vm._s(_vm.description) + "\n  ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=template&id=bc4d046c":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=template&id=bc4d046c ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "w-full"
  }, [_c("h2", {
    staticClass: "font-bold text-base lg:text-4xl text-gray-600 mb-4"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("p", {
    staticClass: "text-lg text-gray-500 mb-5"
  }, [_vm._v("\n    " + _vm._s(_vm.description) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-4"
  }, [_c("router-link", {
    attrs: {
      to: _vm.linkAction1
    }
  }, [_c("button", {
    staticClass: "rounded-full bg-white border border-gray-400 px-8 py-2"
  }, [_c("FontAwesomeIcon", {
    staticClass: "text-sm text-yellow-500",
    attrs: {
      icon: "info-circle"
    }
  }), _vm._v("\n        " + _vm._s(_vm.labelAction1) + "\n      ")], 1)]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: _vm.linkAction2
    }
  }, [_c("button", {
    staticClass: "rounded-full bg-yellow-500 border border-yellow-500 px-8 py-2 text-white"
  }, [_vm._v("\n        " + _vm._s(_vm.labelAction2) + "\n      ")])])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/PageNotFound/PageNotFound.vue?vue&type=template&id=b1c33de4":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/PageNotFound/PageNotFound.vue?vue&type=template&id=b1c33de4 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "flex items-center h-full p-16"
  }, [_c("div", {
    staticClass: "container flex flex-col items-center justify-center px-5 mx-auto my-8"
  }, [_c("div", {
    staticClass: "max-w-md text-center"
  }, [_vm._m(0), _vm._v(" "), _c("p", {
    staticClass: "text-2xl font-semibold md:text-3xl mb-10"
  }, [_vm._v("\n        Page Not Found\n      ")]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: {
        path: "/"
      }
    }
  }, [_c("button", {
    staticClass: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none",
    attrs: {
      type: "button"
    }
  }, [_vm._v("\n          Back to Dashboard\n        ")])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h2", {
    staticClass: "mb-8 font-extrabold text-9xl"
  }, [_c("span", {
    staticClass: "sr-only"
  }, [_vm._v("Error")]), _vm._v("404\n      ")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=template&id=78d53728":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=template&id=78d53728 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("nav", {
    staticClass: "w-full bg-white py-4 border-t border-gray-200"
  }, [_c("div", {
    staticClass: "container m-auto flex justify-between items-center"
  }, [_c("div", {
    staticClass: "flex gap-4 items-center justify-center"
  }, [_c("router-link", {
    staticClass: "mt-2",
    attrs: {
      to: "/"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.logo,
      alt: ""
    }
  })]), _vm._v(" "), _c("span", {
    staticClass: "ml-2"
  }, [_vm._v("\n        Pipesales © " + _vm._s(_vm.year) + " All Rights Reserved.\n      ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "flex gap-4 items-center justify-center"
  }, [_c("router-link", {
    staticClass: "text-yellow-500 underline",
    attrs: {
      to: "/"
    }
  }, [_vm._v("\n        Cookie Policy\n      ")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-yellow-500 underline",
    attrs: {
      to: "/"
    }
  }, [_vm._v("\n        Cookie Settings\n      ")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-yellow-500 underline",
    attrs: {
      to: "/"
    }
  }, [_vm._v("\n        Privacy Policy\n      ")]), _vm._v(" "), _c("router-link", {
    staticClass: "text-yellow-500 underline",
    attrs: {
      to: "/"
    }
  }, [_vm._v("\n        Terms and Conditions\n      ")])], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=template&id=14dad0da":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=template&id=14dad0da ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("nav", {
    staticClass: "w-full bg-white py-2 border-b border-gray-200"
  }, [_c("div", {
    staticClass: "container m-auto flex justify-between items-center"
  }, [_c("div", {
    staticClass: "flex gap-4 items-center justify-center"
  }, [_c("router-link", {
    staticClass: "mt-2",
    attrs: {
      to: "/"
    }
  }, [_c("img", {
    attrs: {
      src: _vm.logo,
      alt: ""
    }
  })]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "/login"
    }
  }, [_c("FontAwesomeIcon", {
    staticClass: "text-sm text-yellow-600",
    attrs: {
      icon: "key"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-2 font-semibold"
  }, [_vm._v("\n          Login\n        ")])], 1), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "/sign-up"
    }
  }, [_c("FontAwesomeIcon", {
    staticClass: "text-sm text-yellow-600",
    attrs: {
      icon: "user-plus"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "ml-2 font-semibold"
  }, [_vm._v("\n          Sign Up\n        ")])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "flex gap-4 items-center justify-center"
  }, [_c("button", {
    staticClass: "bg-white border border-gray-300 rounded-xl py-1 px-4"
  }, [_vm._v("\n        About Pipesales\n      ")]), _vm._v(" "), _c("button", {
    staticClass: "bg-white border border-gray-300 rounded-xl py-1 px-4"
  }, [_vm._v("\n        OCTG Marketplace\n      ")]), _vm._v(" "), _c("button", {
    staticClass: "bg-white border border-gray-300 rounded-xl py-1 px-4"
  }, [_vm._v("\n        Blog\n      ")]), _vm._v(" "), _c("button", {
    staticClass: "bg-gray-600 text-white border border-gray-300 rounded-xl py-1 px-8"
  }, [_vm._v("\n        Shell My Pipes\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col text-center justify-center items-center cursor-pointer"
  }, [_c("FontAwesomeIcon", {
    staticClass: "text-sm text-gray-500",
    attrs: {
      icon: "heart"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-sm text-gray-600"
  }, [_vm._v("\n          Wishlist\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col text-center justify-center items-center cursor-pointer"
  }, [_c("FontAwesomeIcon", {
    staticClass: "text-sm text-gray-500",
    attrs: {
      icon: "shopping-cart"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-sm text-gray-600"
  }, [_vm._v("\n          My Enquiry\n        ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "flex flex-col text-center justify-center items-center cursor-pointer"
  }, [_c("FontAwesomeIcon", {
    staticClass: "text-sm text-gray-500",
    attrs: {
      icon: "medal"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-sm text-gray-600"
  }, [_vm._v("\n          Compare\n        ")])], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/About/About.vue?vue&type=template&id=6f384c1c":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/About/About.vue?vue&type=template&id=6f384c1c ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm._v("\n  About\n")]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "w-full"
  }, [_c("TheNavigation"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("section", {
    staticClass: "w-full py-24"
  }, [_c("div", {
    staticClass: "container mx-auto flex flex-col lg:flex-row gap-4"
  }, _vm._l(_vm.cardSectionFirstList, function (item, idx) {
    return _c("CardSectionFirst", {
      key: idx,
      attrs: {
        title: item.title,
        description: item.description,
        icon: item.icon
      }
    });
  }), 1)]), _vm._v(" "), _c("section", {
    staticClass: "w-full py-24"
  }, [_c("div", {
    staticClass: "container mx-auto flex flex-col lg:flex-row gap-4"
  }, [_c("div", {
    staticClass: "w-full lg:w-1/2"
  }, [_c("div", [_c("img", {
    staticClass: "m-auto",
    attrs: {
      src: _vm.landingImage1,
      alt: "Landing Image 1"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "w-full lg:w-1/2"
  }, [_c("CardSectionSecond", {
    attrs: {
      title: "Urgent fulfilment for time-critical projects",
      description: "Pipesales marketplace assists in managing procurement shortfalls quickly and easily. Browse and find quality tubular products and accessories to your specifications, and Pipesales recognised trade partners will handle the order fulfilment, guaranteeing peace of mind.",
      labelAction1: "How to Buy?",
      linkAction1: "/",
      labelAction2: "Browse Inventory",
      linkAction2: "/"
    }
  })], 1)])]), _vm._v(" "), _c("section", {
    staticClass: "w-full py-8"
  }, [_c("div", {
    staticClass: "container mx-auto flex flex-col lg:flex-row gap-4"
  }, [_c("div", {
    staticClass: "w-full lg:w-1/2"
  }, [_c("CardSectionSecond", {
    attrs: {
      title: "Fair market rates for surplus inventory",
      description: "Target zero inventory by moving surplus products through a trusted network supported by Marubeni-Itochu Steel Inc (MISI). Pipesales can provide you with pricing recommendations to arrive at a fair open market value, then connect you with potential buyers globally.",
      labelAction1: "How to Buy?",
      linkAction1: "/",
      labelAction2: "Shell My Pipes",
      linkAction2: "/"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full lg:w-1/2"
  }, [_c("div", [_c("img", {
    staticClass: "m-auto",
    attrs: {
      src: _vm.landingImage2,
      alt: "Landing Image 1"
    }
  })])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("TheFooter")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "relative overflow-hidden w-full bg-center bg-cover bg-gray-700"
  }, [_c("div", {
    staticClass: "globe"
  }), _vm._v(" "), _c("div", {
    staticClass: "container mx-auto z-20 wrapper-banner"
  }, [_c("div", {
    staticClass: "absolute flex w-full"
  }, [_c("div", {
    staticClass: "mt-12"
  }, [_c("img", {
    attrs: {
      src: "https://pipesales.com/view2/image/webp/tomi-full.webp",
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("div", {
    staticClass: "container px-4 mx-auto mt-44"
  }, [_c("div", {
    staticClass: "max-w-4xl mx-auto text-center"
  }, [_c("h2", {
    staticClass: "mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100"
  }, [_vm._v("\n                Your global marketplace to\n              ")]), _vm._v(" "), _c("h2", {
    staticClass: "mt-8 mb-6 text-4xl lg:text-5xl font-bold text-yellow-600"
  }, [_vm._v("\n                buy & sell tubular products\n              ")]), _vm._v(" "), _c("p", {
    staticClass: "max-w-3xl mx-auto mb-10 text-lg text-gray-300"
  }, [_vm._v("\n                Quickly overcome supply gaps and target zero inventory with Pipesales.\n              ")])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "container mx-auto flex flex-col lg:flex-row gap-4"
  }, [_c("div", {
    staticClass: "w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10"
  }, [_vm._v("\n        test\n      ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "w-full py-8"
  }, [_c("div", {
    staticClass: "container mx-auto flex flex-col bg-gray-700 rounded-lg gap-4 p-16 py-24"
  }, [_c("div", {
    staticClass: "mb-10"
  }, [_c("div", [_c("span", {
    staticClass: "font-bold text-5xl text-white"
  }, [_vm._v("\n            Need more information?\n          ")])]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "font-bold text-5xl text-yellow-500"
  }, [_vm._v("\n            Contact Us\n          ")])])]), _vm._v(" "), _c("form", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "flex gap-4 flex-col lg:flex-row w-full"
  }, [_c("div", {
    staticClass: "w-full lg:w-1/2"
  }, [_c("div", {
    staticClass: "w-full mb-5 inline-block"
  }, [_c("input", {
    staticClass: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    attrs: {
      type: "text",
      placeholder: "Name*"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5 inline-block"
  }, [_c("input", {
    staticClass: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    attrs: {
      type: "text",
      placeholder: "Country*"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "w-full flex gap-4 flex-col lg:flex-row"
  }, [_c("div", {
    staticClass: "w-full lg:w-4/12"
  }, [_c("select", {
    staticClass: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  }, [_c("option", {
    attrs: {
      selected: ""
    }
  }, [_vm._v("Country Code")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "-"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "-"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "-"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "-"
    }
  }, [_vm._v("-")])])]), _vm._v(" "), _c("div", {
    staticClass: "w-full lg:w-8/12"
  }, [_c("input", {
    staticClass: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    attrs: {
      type: "text",
      placeholder: "Phone"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "w-full lg:w-1/2"
  }, [_c("div", {
    staticClass: "w-full mb-5 inline-block"
  }, [_c("input", {
    staticClass: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    attrs: {
      type: "email",
      placeholder: "Email*"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "w-full mb-5 inline-block"
  }, [_c("textarea", {
    staticClass: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
    attrs: {
      rows: "4",
      placeholder: "Your Message"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "flex gap-4 w-full"
  }, [_c("div", {
    staticClass: "flex justify-between w-full"
  }, [_c("div", {
    staticClass: "flex items-center"
  }, [_c("input", {
    staticClass: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2",
    attrs: {
      id: "aggre-check",
      type: "checkbox",
      value: ""
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "ml-2 text-sm font-medium text-white",
    attrs: {
      "for": "aggre-check"
    }
  }, [_vm._v("\n                Stay updated wit our latest news\n              ")])]), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "rounded-full bg-yellow-500 border border-yellow-500 px-24 py-2 text-white"
  }, [_vm._v("\n                Send\n              ")])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".globe[data-v-097fa176] {\n  background-image: url(https://pipesales.com/view2/image/header-background-2.png);\n  background-size: 1024px !important;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.wrapper-banner[data-v-097fa176] {\n  height: 450px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Home/Home.vue"],"names":[],"mappings":"AA2PA;EACA,gFAAA;EACA,kCAAA;EACA,4BAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AACA;AAEA;EACA,aAAA;AACA","sourcesContent":["<!-- eslint-disable max-len -->\n<template>\n  <div class=\"w-full\">\n    <TheNavigation />\n\n    <section class=\"relative overflow-hidden w-full bg-center bg-cover bg-gray-700\">\n      <div class=\"globe\" />\n      <div class=\"container mx-auto z-20 wrapper-banner\">\n        <div class=\"absolute flex w-full\">\n          <div class=\"mt-12\">\n            <img\n              src=\"https://pipesales.com/view2/image/webp/tomi-full.webp\"\n              alt=\"\"\n            >\n          </div>\n          <div class=\"text-center\">\n            <div class=\"container px-4 mx-auto mt-44\">\n              <div class=\"max-w-4xl mx-auto text-center\">\n                <h2 class=\"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100\">\n                  Your global marketplace to\n                </h2>\n                <h2 class=\"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-yellow-600\">\n                  buy & sell tubular products\n                </h2>\n                <p class=\"max-w-3xl mx-auto mb-10 text-lg text-gray-300\">\n                  Quickly overcome supply gaps and target zero inventory with Pipesales.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10\">\n          test\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-24\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <CardSectionFirst\n          v-for=\"(item, idx) in cardSectionFirstList\"\n          :key=\"idx\"\n          :title=\"item.title\"\n          :description=\"item.description\"\n          :icon=\"item.icon\"\n        />\n      </div>\n    </section>\n\n    <section class=\"w-full py-24\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full lg:w-1/2\">\n          <div>\n            <img\n              :src=\"landingImage1\"\n              alt=\"Landing Image 1\"\n              class=\"m-auto\"\n            >\n          </div>\n        </div>\n        <div class=\"w-full lg:w-1/2\">\n          <CardSectionSecond\n            title=\"Urgent fulfilment for time-critical projects\"\n            description=\"Pipesales marketplace assists in managing procurement shortfalls quickly and easily. Browse and find quality tubular products and accessories to your specifications, and Pipesales recognised trade partners will handle the order fulfilment, guaranteeing peace of mind.\"\n            labelAction1=\"How to Buy?\"\n            linkAction1=\"/\"\n            labelAction2=\"Browse Inventory\"\n            linkAction2=\"/\"\n          />\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-8\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full lg:w-1/2\">\n          <CardSectionSecond\n            title=\"Fair market rates for surplus inventory\"\n            description=\"Target zero inventory by moving surplus products through a trusted network supported by Marubeni-Itochu Steel Inc (MISI). Pipesales can provide you with pricing recommendations to arrive at a fair open market value, then connect you with potential buyers globally.\"\n            labelAction1=\"How to Buy?\"\n            linkAction1=\"/\"\n            labelAction2=\"Shell My Pipes\"\n            linkAction2=\"/\"\n          />\n        </div>\n        <div class=\"w-full lg:w-1/2\">\n          <div>\n            <img\n              :src=\"landingImage2\"\n              alt=\"Landing Image 1\"\n              class=\"m-auto\"\n            >\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-8\">\n      <div class=\"container mx-auto flex flex-col bg-gray-700 rounded-lg gap-4 p-16 py-24\">\n        <div class=\"mb-10\">\n          <div>\n            <span class=\"font-bold text-5xl text-white\">\n              Need more information?\n            </span>\n          </div>\n          <div>\n            <span class=\"font-bold text-5xl text-yellow-500\">\n              Contact Us\n            </span>\n          </div>\n        </div>\n\n        <form class=\"w-full\">\n          <div class=\"flex gap-4 flex-col lg:flex-row w-full\">\n            <div class=\"w-full lg:w-1/2\">\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"text\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Name*\"\n                >\n              </div>\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"text\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Country*\"\n                >\n              </div>\n              <div class=\"w-full flex gap-4 flex-col lg:flex-row\">\n                <div class=\"w-full lg:w-4/12\">\n                  <select\n                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  >\n                    <option selected>Country Code</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                  </select>\n                </div>\n                <div class=\"w-full lg:w-8/12\">\n                  <input\n                    type=\"text\"\n                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                    placeholder=\"Phone\"\n                  >\n                </div>\n              </div>\n            </div>\n            <div class=\"w-full lg:w-1/2\">\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"email\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Email*\"\n                >\n              </div>\n              <div class=\"w-full mb-5 inline-block\">\n                <textarea\n                  rows=\"4\"\n                  class=\"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500\"\n                  placeholder=\"Your Message\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"flex gap-4 w-full\">\n            <div class=\"flex justify-between w-full\">\n              <div class=\"flex items-center\">\n                <input\n                  id=\"aggre-check\"\n                  type=\"checkbox\"\n                  value=\"\"\n                  class=\"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2\"\n                >\n                <label\n                  for=\"aggre-check\"\n                  class=\"ml-2 text-sm font-medium text-white\"\n                >\n                  Stay updated wit our latest news\n                </label>\n              </div>\n\n              <div>\n                <button class=\"rounded-full bg-yellow-500 border border-yellow-500 px-24 py-2 text-white\">\n                  Send\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </section>\n\n    <TheFooter />\n  </div>\n</template>\n\n<script>\n/* eslint-disable max-len */\nimport CardSectionFirst from '@components/Fragments/Home/CardSectionFirst';\nimport CardSectionSecond from '@components/Fragments/Home/CardSectionSecond';\n\nimport GlobeSvg from './../../../assets/svg/globe.svg';\nimport DollarSvg from './../../../assets/svg/dollar.svg';\nimport PipaSvg from './../../../assets/svg/pipa.svg';\n\nimport LandingImage1 from './../../../assets/images/landing-image-1.png';\nimport LandingImage2 from './../../../assets/images/landing-image-2.png';\n\nexport default {\n  components: {\n    CardSectionFirst,\n    CardSectionSecond\n  },\n  data () {\n    return {\n      cardSectionFirstList: [\n        {\n          id: 1,\n          title: 'Buy or sell globally, manage it locally',\n          description: 'Pipesales enables sellers to promote surplus inventory globally, opening buyers search horizons. We provide a secure and uncomplicated process, with both buyers and sellers enjoying the confidence of transaction management by their local Marubeni-Itochu Steel (MISI) network.',\n          icon: GlobeSvg\n        },\n        {\n          id: 1,\n          title: 'Supporting cost-effective inventory management',\n          description: 'Pipesales marketplace allows organisations of all sizes to quickly trade tubular products and accessories at a fair price. You can now keep costs in line with expectations and easily access or offload excess inventory.',\n          icon: DollarSvg\n        },\n        {\n          id: 1,\n          title: 'Large range of ready-made pipes fit for purpose',\n          description: 'Pipesales marketplace is home to a large range of quality Oil Country Tubular Goods (OCTG). Browse by product type, grade, size, connection and location. Be assured of suitable backup supplies to meet urgent demand.',\n          icon: PipaSvg\n        }\n      ],\n      landingImage1: LandingImage1,\n      landingImage2: LandingImage2\n    };\n  }\n};\n</script>\n\n<style scoped>\n.globe {\n  background-image: url(https://pipesales.com/view2/image/header-background-2.png); \n  background-size: 1024px !important;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.wrapper-banner {\n  height: 450px;\n}\n</style>"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/images/landing-image-1.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/landing-image-1.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/landing-image-1.png?249d02f149abce916770e79b05fe38de";

/***/ }),

/***/ "./resources/assets/images/landing-image-2.png":
/*!*****************************************************!*\
  !*** ./resources/assets/images/landing-image-2.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/landing-image-2.png?9dc5496cec02d37b3ba9c1a867f3e809";

/***/ }),

/***/ "./resources/assets/images/pipesales.svg":
/*!***********************************************!*\
  !*** ./resources/assets/images/pipesales.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/pipesales.svg?6335486ed8905dad06c80e8c602bc360";

/***/ }),

/***/ "./resources/assets/svg/dollar.svg":
/*!*****************************************!*\
  !*** ./resources/assets/svg/dollar.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "/images/dollar.svg?9c226e9744eb06257fc1d2738ff938b1";

/***/ }),

/***/ "./resources/assets/svg/globe.svg":
/*!****************************************!*\
  !*** ./resources/assets/svg/globe.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "/images/globe.svg?7984caf3c70bd393456750e703bf6511";

/***/ }),

/***/ "./resources/assets/svg/pipa.svg":
/*!***************************************!*\
  !*** ./resources/assets/svg/pipa.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "/images/pipa.svg?0dc6e2a9000916e168bdc82228d1c277";

/***/ }),

/***/ "./resources/styles/app.scss":
/*!***********************************!*\
  !*** ./resources/styles/app.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_097fa176_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_097fa176_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_097fa176_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/App.vue":
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_f348271a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a */ "./resources/js/App.vue?vue&type=template&id=f348271a");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _App_vue_vue_type_template_id_f348271a__WEBPACK_IMPORTED_MODULE_0__.render,
  _App_vue_vue_type_template_id_f348271a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardSectionFirst_vue_vue_type_template_id_d3f36a54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardSectionFirst.vue?vue&type=template&id=d3f36a54 */ "./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=template&id=d3f36a54");
/* harmony import */ var _CardSectionFirst_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSectionFirst.vue?vue&type=script&lang=js */ "./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardSectionFirst_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardSectionFirst_vue_vue_type_template_id_d3f36a54__WEBPACK_IMPORTED_MODULE_0__.render,
  _CardSectionFirst_vue_vue_type_template_id_d3f36a54__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardSectionSecond_vue_vue_type_template_id_bc4d046c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardSectionSecond.vue?vue&type=template&id=bc4d046c */ "./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=template&id=bc4d046c");
/* harmony import */ var _CardSectionSecond_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSectionSecond.vue?vue&type=script&lang=js */ "./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardSectionSecond_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardSectionSecond_vue_vue_type_template_id_bc4d046c__WEBPACK_IMPORTED_MODULE_0__.render,
  _CardSectionSecond_vue_vue_type_template_id_bc4d046c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/PageNotFound/PageNotFound.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Layouts/PageNotFound/PageNotFound.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageNotFound_vue_vue_type_template_id_b1c33de4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNotFound.vue?vue&type=template&id=b1c33de4 */ "./resources/js/components/Layouts/PageNotFound/PageNotFound.vue?vue&type=template&id=b1c33de4");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _PageNotFound_vue_vue_type_template_id_b1c33de4__WEBPACK_IMPORTED_MODULE_0__.render,
  _PageNotFound_vue_vue_type_template_id_b1c33de4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/PageNotFound/PageNotFound.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/TheFooter/TheFooter.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Layouts/TheFooter/TheFooter.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheFooter_vue_vue_type_template_id_78d53728__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=78d53728 */ "./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=template&id=78d53728");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js */ "./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_78d53728__WEBPACK_IMPORTED_MODULE_0__.render,
  _TheFooter_vue_vue_type_template_id_78d53728__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/TheFooter/TheFooter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/TheNavigation/TheNavigation.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Layouts/TheNavigation/TheNavigation.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheNavigation_vue_vue_type_template_id_14dad0da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavigation.vue?vue&type=template&id=14dad0da */ "./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=template&id=14dad0da");
/* harmony import */ var _TheNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavigation.vue?vue&type=script&lang=js */ "./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavigation_vue_vue_type_template_id_14dad0da__WEBPACK_IMPORTED_MODULE_0__.render,
  _TheNavigation_vue_vue_type_template_id_14dad0da__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/TheNavigation/TheNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/About/About.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/About/About.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_6f384c1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=6f384c1c */ "./resources/js/pages/About/About.vue?vue&type=template&id=6f384c1c");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _About_vue_vue_type_template_id_6f384c1c__WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_6f384c1c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/About/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Home/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_097fa176_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=097fa176&scoped=true */ "./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&scoped=true");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/pages/Home/Home.vue?vue&type=script&lang=js");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_097fa176_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css */ "./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_097fa176_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_097fa176_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "097fa176",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionFirst_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardSectionFirst.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionFirst_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionSecond_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardSectionSecond.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionSecond_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheNavigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home/Home.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Home/Home.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=template&id=f348271a":
/*!************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./App.vue?vue&type=template&id=f348271a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a");


/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=template&id=d3f36a54":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=template&id=d3f36a54 ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionFirst_vue_vue_type_template_id_d3f36a54__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionFirst_vue_vue_type_template_id_d3f36a54__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionFirst_vue_vue_type_template_id_d3f36a54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardSectionFirst.vue?vue&type=template&id=d3f36a54 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionFirst/CardSectionFirst.vue?vue&type=template&id=d3f36a54");


/***/ }),

/***/ "./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=template&id=bc4d046c":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=template&id=bc4d046c ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionSecond_vue_vue_type_template_id_bc4d046c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionSecond_vue_vue_type_template_id_bc4d046c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardSectionSecond_vue_vue_type_template_id_bc4d046c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardSectionSecond.vue?vue&type=template&id=bc4d046c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Fragments/Home/CardSectionSecond/CardSectionSecond.vue?vue&type=template&id=bc4d046c");


/***/ }),

/***/ "./resources/js/components/Layouts/PageNotFound/PageNotFound.vue?vue&type=template&id=b1c33de4":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Layouts/PageNotFound/PageNotFound.vue?vue&type=template&id=b1c33de4 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_template_id_b1c33de4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_template_id_b1c33de4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNotFound_vue_vue_type_template_id_b1c33de4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PageNotFound.vue?vue&type=template&id=b1c33de4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/PageNotFound/PageNotFound.vue?vue&type=template&id=b1c33de4");


/***/ }),

/***/ "./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=template&id=78d53728":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=template&id=78d53728 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_78d53728__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_78d53728__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_78d53728__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheFooter.vue?vue&type=template&id=78d53728 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheFooter/TheFooter.vue?vue&type=template&id=78d53728");


/***/ }),

/***/ "./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=template&id=14dad0da":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=template&id=14dad0da ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavigation_vue_vue_type_template_id_14dad0da__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavigation_vue_vue_type_template_id_14dad0da__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavigation_vue_vue_type_template_id_14dad0da__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheNavigation.vue?vue&type=template&id=14dad0da */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/TheNavigation/TheNavigation.vue?vue&type=template&id=14dad0da");


/***/ }),

/***/ "./resources/js/pages/About/About.vue?vue&type=template&id=6f384c1c":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/About/About.vue?vue&type=template&id=6f384c1c ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_6f384c1c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_6f384c1c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_6f384c1c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=6f384c1c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/About/About.vue?vue&type=template&id=6f384c1c");


/***/ }),

/***/ "./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&scoped=true":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&scoped=true ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_097fa176_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_097fa176_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_097fa176_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=097fa176&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=template&id=097fa176&scoped=true");


/***/ }),

/***/ "./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_097fa176_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/styles/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9jb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9ldmVudC1idXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbmZpZ3VyYXRpb25zL2ZvcnQtYXdlc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbmZpZ3VyYXRpb25zL2luaXRpYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9wbHVnaW5zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9yb3V0ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvbkZpcnN0L0NhcmRTZWN0aW9uRmlyc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbi9UaGVOYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlTm90Rm91bmQvUGFnZU5vdEZvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbi9UaGVOYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQWJvdXQvQWJvdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlPzBiZTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0xLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nLWltYWdlLTIucG5nIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1hZ2VzL3BpcGVzYWxlcy5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zdmcvZG9sbGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3N2Zy9nbG9iZS5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zdmcvcGlwYS5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZT9lOTIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9BcHAudnVlP2RjYzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT82NjlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT82NjliIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvUGFnZU5vdEZvdW5kL1BhZ2VOb3RGb3VuZC52dWU/M2IyNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlPzUyMzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlPzZmMzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fib3V0L0Fib3V0LnZ1ZT9mNjQ0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlP2JkYmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT9mYTU0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT9jYzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWU/MTAxZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZU5hdmlnYXRpb24vVGhlTmF2aWdhdGlvbi52dWU/OGNlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZT82NDc0Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3Jlcyc7XG5pbXBvcnQgJy4vY29uZmlndXJhdGlvbnMnO1xuaW1wb3J0ICdAc3R5bGVzL2FwcC5zY3NzJztcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIHJvdXRlcjogcm91dGVyLFxuICBzdG9yZVxufSk7Iiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTUlYX0FQUF9VUkw7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IEFwcCBmcm9tICdAcm9vdC9BcHAudnVlJztcblxuaW1wb3J0IFRoZU5hdmlnYXRpb24gZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uJztcbmltcG9ydCBUaGVGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9UaGVGb290ZXInO1xuXG5WdWUuY29tcG9uZW50KCdBcHAnLCBBcHApO1xuVnVlLmNvbXBvbmVudCgnVGhlTmF2aWdhdGlvbicsIFRoZU5hdmlnYXRpb24pO1xuVnVlLmNvbXBvbmVudCgnVGhlRm9vdGVyJywgVGhlRm9vdGVyKTsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBjb25zdCBFdmVudEJ1cyA9IG5ldyBWdWUoKTsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJztcblxuZXhwb3J0IGNvbnN0IGFkZCA9IGxpYnJhcnkuYWRkO1xuXG5saWJyYXJ5LmFkZChmYXMpO1xubGlicmFyeS5hZGQoZmFiKTtcbmxpYnJhcnkuYWRkKGZhcik7XG5cblZ1ZS5jb21wb25lbnQoJ0ZvbnRBd2Vzb21lSWNvbicsIEZvbnRBd2Vzb21lSWNvbik7XG5cbmV4cG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9O1xuIiwiaW1wb3J0ICcuL2luaXRpYWxpemVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzJztcbmltcG9ydCAnLi9wbHVnaW5zJztcbmltcG9ydCAnLi9mb3J0LWF3ZXNvbWUnO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJ0Bjb25maWd1cmF0aW9ucy9ldmVudC1idXMnO1xuXG4oKGkpID0+IHtcbiAgaS5wcm90b3R5cGUuJGFwaSA9IHt9O1xuICBpLnByb3RvdHlwZS4kZXZlbnRCdXMgPSBFdmVudEJ1cztcbn0pKFZ1ZSk7XG4iLCIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnQHBhZ2VzL0hvbWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJ0BwYWdlcy9BYm91dCc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBuYW1lOiAnQWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvOnBhdGhNYXRjaCguKikqJyxcbiAgICBuYW1lOiAnUGFnZSBOb3QgRm91bmQnLFxuICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kXG4gIH1cbl07XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIG1vZGU6ICdoaXN0b3J5JyxcbiAgcm91dGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGltZ1xuICAgICAgICA6c3JjPVwiaWNvblwiXG4gICAgICAgIGFsdD1cIkljb25cIlxuICAgICAgICBjbGFzcz1cIm0tYXV0b1wiXG4gICAgICA+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtMnhsIHRleHQtZ3JheS03MDAgbWItM1wiPlxuICAgICAge3sgdGl0bGUgfX1cbiAgICA8L2gyPlxuICAgIDxwIGNsYXNzPVwidGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj5cbiAgICAgIHt7IGRlc2NyaXB0aW9uIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgPGgyIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtYmFzZSBsZzp0ZXh0LTR4bCB0ZXh0LWdyYXktNjAwIG1iLTRcIj5cbiAgICAgIHt7IHRpdGxlIH19XG4gICAgPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtbGcgdGV4dC1ncmF5LTUwMCBtYi01XCI+XG4gICAgICB7eyBkZXNjcmlwdGlvbiB9fVxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNFwiPlxuICAgICAgPHJvdXRlci1saW5rIDp0bz1cImxpbmtBY3Rpb24xXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC04IHB5LTJcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC15ZWxsb3ctNTAwXCJcbiAgICAgICAgICAgIGljb249XCJpbmZvLWNpcmNsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7eyBsYWJlbEFjdGlvbjEgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPHJvdXRlci1saW5rIDp0bz1cImxpbmtBY3Rpb24yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgcHgtOCBweS0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7eyBsYWJlbEFjdGlvbjIgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGxhYmVsQWN0aW9uMToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGxpbmtBY3Rpb24xOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgbGFiZWxBY3Rpb24yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgbGlua0FjdGlvbjI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8bmF2IGNsYXNzPVwidy1mdWxsIGJnLXdoaXRlIHB5LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwibXQtMlwiPlxuICAgICAgICAgIDxpbWcgOnNyYz1cImxvZ29cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMlwiPlxuICAgICAgICAgIFBpcGVzYWxlcyAmY29weTsge3sgeWVhciB9fSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBDb29raWUgUG9saWN5XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBDb29raWUgU2V0dGluZ3NcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiPlxuICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBsb2dvUGlwZXMgZnJvbSAnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BpcGVzYWxlcy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dvOiBsb2dvUGlwZXMsXG4gICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8bmF2IGNsYXNzPVwidy1mdWxsIGJnLXdoaXRlIHB5LTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwibXQtMlwiPlxuICAgICAgICAgIDxpbWcgOnNyYz1cImxvZ29cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiXG4gICAgICAgICAgICBpY29uPVwia2V5XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMiBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NpZ24tdXBcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCJcbiAgICAgICAgICAgIGljb249XCJ1c2VyLXBsdXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCI+XG4gICAgICAgICAgQWJvdXQgUGlwZXNhbGVzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiPlxuICAgICAgICAgIE9DVEcgTWFya2V0cGxhY2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCI+XG4gICAgICAgICAgQmxvZ1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLWdyYXktNjAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtOFwiPlxuICAgICAgICAgIFNoZWxsIE15IFBpcGVzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICBpY29uPVwiaGVhcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIFdpc2hsaXN0XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgaWNvbj1cInNob3BwaW5nLWNhcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIE15IEVucXVpcnlcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICBpY29uPVwibWVkYWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIENvbXBhcmVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBsb2dvUGlwZXMgZnJvbSAnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BpcGVzYWxlcy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dvOiBsb2dvUGlwZXNcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+IiwiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgPFRoZU5hdmlnYXRpb24gLz5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBiZy1jZW50ZXIgYmctY292ZXIgYmctZ3JheS03MDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJnbG9iZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gei0yMCB3cmFwcGVyLWJhbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL3dlYnAvdG9taS1mdWxsLndlYnBcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBweC00IG14LWF1dG8gbXQtNDRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIGdsb2JhbCBtYXJrZXRwbGFjZSB0b1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcIj5cbiAgICAgICAgICAgICAgICAgIGJ1eSAmIHNlbGwgdHVidWxhciBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXgtdy0zeGwgbXgtYXV0byBtYi0xMCB0ZXh0LWxnIHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIFF1aWNrbHkgb3ZlcmNvbWUgc3VwcGx5IGdhcHMgYW5kIHRhcmdldCB6ZXJvIGludmVudG9yeSB3aXRoIFBpcGVzYWxlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgLW10LTggei0xMFwiPlxuICAgICAgICAgIHRlc3RcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBweS0yNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPENhcmRTZWN0aW9uRmlyc3RcbiAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpZHgpIGluIGNhcmRTZWN0aW9uRmlyc3RMaXN0XCJcbiAgICAgICAgICA6a2V5PVwiaWR4XCJcbiAgICAgICAgICA6dGl0bGU9XCJpdGVtLnRpdGxlXCJcbiAgICAgICAgICA6ZGVzY3JpcHRpb249XCJpdGVtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICA6aWNvbj1cIml0ZW0uaWNvblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBweS0yNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIDpzcmM9XCJsYW5kaW5nSW1hZ2UxXCJcbiAgICAgICAgICAgICAgYWx0PVwiTGFuZGluZyBJbWFnZSAxXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtLWF1dG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxuICAgICAgICAgICAgdGl0bGU9XCJVcmdlbnQgZnVsZmlsbWVudCBmb3IgdGltZS1jcml0aWNhbCBwcm9qZWN0c1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBpcGVzYWxlcyBtYXJrZXRwbGFjZSBhc3Npc3RzIGluIG1hbmFnaW5nIHByb2N1cmVtZW50IHNob3J0ZmFsbHMgcXVpY2tseSBhbmQgZWFzaWx5LiBCcm93c2UgYW5kIGZpbmQgcXVhbGl0eSB0dWJ1bGFyIHByb2R1Y3RzIGFuZCBhY2Nlc3NvcmllcyB0byB5b3VyIHNwZWNpZmljYXRpb25zLCBhbmQgUGlwZXNhbGVzIHJlY29nbmlzZWQgdHJhZGUgcGFydG5lcnMgd2lsbCBoYW5kbGUgdGhlIG9yZGVyIGZ1bGZpbG1lbnQsIGd1YXJhbnRlZWluZyBwZWFjZSBvZiBtaW5kLlwiXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjE9XCJIb3cgdG8gQnV5P1wiXG4gICAgICAgICAgICBsaW5rQWN0aW9uMT1cIi9cIlxuICAgICAgICAgICAgbGFiZWxBY3Rpb24yPVwiQnJvd3NlIEludmVudG9yeVwiXG4gICAgICAgICAgICBsaW5rQWN0aW9uMj1cIi9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxuICAgICAgICAgICAgdGl0bGU9XCJGYWlyIG1hcmtldCByYXRlcyBmb3Igc3VycGx1cyBpbnZlbnRvcnlcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUYXJnZXQgemVybyBpbnZlbnRvcnkgYnkgbW92aW5nIHN1cnBsdXMgcHJvZHVjdHMgdGhyb3VnaCBhIHRydXN0ZWQgbmV0d29yayBzdXBwb3J0ZWQgYnkgTWFydWJlbmktSXRvY2h1IFN0ZWVsIEluYyAoTUlTSSkuIFBpcGVzYWxlcyBjYW4gcHJvdmlkZSB5b3Ugd2l0aCBwcmljaW5nIHJlY29tbWVuZGF0aW9ucyB0byBhcnJpdmUgYXQgYSBmYWlyIG9wZW4gbWFya2V0IHZhbHVlLCB0aGVuIGNvbm5lY3QgeW91IHdpdGggcG90ZW50aWFsIGJ1eWVycyBnbG9iYWxseS5cIlxuICAgICAgICAgICAgbGFiZWxBY3Rpb24xPVwiSG93IHRvIEJ1eT9cIlxuICAgICAgICAgICAgbGlua0FjdGlvbjE9XCIvXCJcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMj1cIlNoZWxsIE15IFBpcGVzXCJcbiAgICAgICAgICAgIGxpbmtBY3Rpb24yPVwiL1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICA6c3JjPVwibGFuZGluZ0ltYWdlMlwiXG4gICAgICAgICAgICAgIGFsdD1cIkxhbmRpbmcgSW1hZ2UgMVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibS1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBweS04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGdhcC00IHAtMTYgcHktMjRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTEwXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtNXhsIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgTmVlZCBtb3JlIGluZm9ybWF0aW9uP1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lKlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ291bnRyeSpcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy00LzEyXCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Q291bnRyeSBDb2RlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItXCI+LTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLVwiPi08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi1cIj4tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItXCI+LTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTgvMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwqXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHAtMi41IHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgdy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJhZ2dyZS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGZvcj1cImFnZ3JlLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN0YXkgdXBkYXRlZCB3aXQgb3VyIGxhdGVzdCBuZXdzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTI0IHB5LTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8VGhlRm9vdGVyIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBDYXJkU2VjdGlvbkZpcnN0IGZyb20gJ0Bjb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QnO1xuaW1wb3J0IENhcmRTZWN0aW9uU2Vjb25kIGZyb20gJ0Bjb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kJztcblxuaW1wb3J0IEdsb2JlU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9nbG9iZS5zdmcnO1xuaW1wb3J0IERvbGxhclN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvZG9sbGFyLnN2Zyc7XG5pbXBvcnQgUGlwYVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvcGlwYS5zdmcnO1xuXG5pbXBvcnQgTGFuZGluZ0ltYWdlMSBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0xLnBuZyc7XG5pbXBvcnQgTGFuZGluZ0ltYWdlMiBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIENhcmRTZWN0aW9uRmlyc3QsXG4gICAgQ2FyZFNlY3Rpb25TZWNvbmRcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRTZWN0aW9uRmlyc3RMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ0J1eSBvciBzZWxsIGdsb2JhbGx5LCBtYW5hZ2UgaXQgbG9jYWxseScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgZW5hYmxlcyBzZWxsZXJzIHRvIHByb21vdGUgc3VycGx1cyBpbnZlbnRvcnkgZ2xvYmFsbHksIG9wZW5pbmcgYnV5ZXJzIHNlYXJjaCBob3Jpem9ucy4gV2UgcHJvdmlkZSBhIHNlY3VyZSBhbmQgdW5jb21wbGljYXRlZCBwcm9jZXNzLCB3aXRoIGJvdGggYnV5ZXJzIGFuZCBzZWxsZXJzIGVuam95aW5nIHRoZSBjb25maWRlbmNlIG9mIHRyYW5zYWN0aW9uIG1hbmFnZW1lbnQgYnkgdGhlaXIgbG9jYWwgTWFydWJlbmktSXRvY2h1IFN0ZWVsIChNSVNJKSBuZXR3b3JrLicsXG4gICAgICAgICAgaWNvbjogR2xvYmVTdmdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHRpdGxlOiAnU3VwcG9ydGluZyBjb3N0LWVmZmVjdGl2ZSBpbnZlbnRvcnkgbWFuYWdlbWVudCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgYWxsb3dzIG9yZ2FuaXNhdGlvbnMgb2YgYWxsIHNpemVzIHRvIHF1aWNrbHkgdHJhZGUgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgYXQgYSBmYWlyIHByaWNlLiBZb3UgY2FuIG5vdyBrZWVwIGNvc3RzIGluIGxpbmUgd2l0aCBleHBlY3RhdGlvbnMgYW5kIGVhc2lseSBhY2Nlc3Mgb3Igb2ZmbG9hZCBleGNlc3MgaW52ZW50b3J5LicsXG4gICAgICAgICAgaWNvbjogRG9sbGFyU3ZnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ0xhcmdlIHJhbmdlIG9mIHJlYWR5LW1hZGUgcGlwZXMgZml0IGZvciBwdXJwb3NlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BpcGVzYWxlcyBtYXJrZXRwbGFjZSBpcyBob21lIHRvIGEgbGFyZ2UgcmFuZ2Ugb2YgcXVhbGl0eSBPaWwgQ291bnRyeSBUdWJ1bGFyIEdvb2RzIChPQ1RHKS4gQnJvd3NlIGJ5IHByb2R1Y3QgdHlwZSwgZ3JhZGUsIHNpemUsIGNvbm5lY3Rpb24gYW5kIGxvY2F0aW9uLiBCZSBhc3N1cmVkIG9mIHN1aXRhYmxlIGJhY2t1cCBzdXBwbGllcyB0byBtZWV0IHVyZ2VudCBkZW1hbmQuJyxcbiAgICAgICAgICBpY29uOiBQaXBhU3ZnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBsYW5kaW5nSW1hZ2UxOiBMYW5kaW5nSW1hZ2UxLFxuICAgICAgbGFuZGluZ0ltYWdlMjogTGFuZGluZ0ltYWdlMlxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5nbG9iZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2UvaGVhZGVyLWJhY2tncm91bmQtMi5wbmcpOyBcbiAgYmFja2dyb3VuZC1zaXplOiAxMDI0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi53cmFwcGVyLWJhbm5lciB7XG4gIGhlaWdodDogNDUwcHg7XG59XG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcInJvdXRlci12aWV3XCIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LWNvbFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImgtMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtLWF1dG9cIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uaWNvbiwgYWx0OiBcIkljb25cIiB9LFxuICAgICAgfSksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQtMnhsIHRleHQtZ3JheS03MDAgbWItM1wiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gIFwiKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtYmFzZSB0ZXh0LWdyYXktNTAwXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5kZXNjcmlwdGlvbikgKyBcIlxcbiAgXCIpLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiaDJcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQtYmFzZSBsZzp0ZXh0LTR4bCB0ZXh0LWdyYXktNjAwIG1iLTRcIiB9LFxuICAgICAgW192bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0udGl0bGUpICsgXCJcXG4gIFwiKV1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZyB0ZXh0LWdyYXktNTAwIG1iLTVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLmRlc2NyaXB0aW9uKSArIFwiXFxuICBcIiksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IF92bS5saW5rQWN0aW9uMSB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwicm91bmRlZC1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtOCBweS0yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LXllbGxvdy01MDBcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImluZm8tY2lyY2xlXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhYmVsQWN0aW9uMSkgKyBcIlxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogX3ZtLmxpbmtBY3Rpb24yIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgcHgtOCBweS0yIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFiZWxBY3Rpb24yKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBoLWZ1bGwgcC0xNlwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTUgbXgtYXV0byBteS04XCIsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWF4LXctbWQgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtZDp0ZXh0LTN4bCBtYi0xMFwiIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFBhZ2UgTm90IEZvdW5kXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IHsgcGF0aDogXCIvXCIgfSB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtZS0yIG1iLTIgZm9jdXM6b3V0bGluZS1ub25lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIEJhY2sgdG8gRGFzaGJvYXJkXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTggZm9udC1leHRyYWJvbGQgdGV4dC05eGxcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIkVycm9yXCIpXSksXG4gICAgICBfdm0uX3YoXCI0MDRcXG4gICAgICBcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgYmctd2hpdGUgcHktNCBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiLCBhdHRyczogeyB0bzogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5sb2dvLCBhbHQ6IFwiXCIgfSB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFBpcGVzYWxlcyDCqSBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ueWVhcikgK1xuICAgICAgICAgICAgICAgICAgICBcIiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgQ29va2llIFBvbGljeVxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgQ29va2llIFNldHRpbmdzXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBQcml2YWN5IFBvbGljeVxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnNcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgYmctd2hpdGUgcHktMiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMlwiLCBhdHRyczogeyB0bzogXCIvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5sb2dvLCBhbHQ6IFwiXCIgfSB9KSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9sb2dpblwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwia2V5XCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLTIgZm9udC1zZW1pYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIExvZ2luXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL3NpZ24tdXBcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInVzZXItcGx1c1wiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtbC0yIGZvbnQtc2VtaWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBTaWduIFVwXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIEFib3V0IFBpcGVzYWxlc1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBPQ1RHIE1hcmtldHBsYWNlXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIEJsb2dcXG4gICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJnLWdyYXktNjAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtOFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBTaGVsbCBNeSBQaXBlc1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJoZWFydFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgV2lzaGxpc3RcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInNob3BwaW5nLWNhcnRcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIE15IEVucXVpcnlcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIm1lZGFsXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTYwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBDb21wYXJlXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJcXG4gIEFib3V0XFxuXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJUaGVOYXZpZ2F0aW9uXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHB5LTI0XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFwiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5jYXJkU2VjdGlvbkZpcnN0TGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2FyZFNlY3Rpb25GaXJzdFwiLCB7XG4gICAgICAgICAgICAgIGtleTogaWR4LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHB5LTI0XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy0xLzJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLWF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmxhbmRpbmdJbWFnZTEsIGFsdDogXCJMYW5kaW5nIEltYWdlIDFcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkNhcmRTZWN0aW9uU2Vjb25kXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVyZ2VudCBmdWxmaWxtZW50IGZvciB0aW1lLWNyaXRpY2FsIHByb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgIFwiUGlwZXNhbGVzIG1hcmtldHBsYWNlIGFzc2lzdHMgaW4gbWFuYWdpbmcgcHJvY3VyZW1lbnQgc2hvcnRmYWxscyBxdWlja2x5IGFuZCBlYXNpbHkuIEJyb3dzZSBhbmQgZmluZCBxdWFsaXR5IHR1YnVsYXIgcHJvZHVjdHMgYW5kIGFjY2Vzc29yaWVzIHRvIHlvdXIgc3BlY2lmaWNhdGlvbnMsIGFuZCBQaXBlc2FsZXMgcmVjb2duaXNlZCB0cmFkZSBwYXJ0bmVycyB3aWxsIGhhbmRsZSB0aGUgb3JkZXIgZnVsZmlsbWVudCwgZ3VhcmFudGVlaW5nIHBlYWNlIG9mIG1pbmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQWN0aW9uMTogXCJIb3cgdG8gQnV5P1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rQWN0aW9uMTogXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQWN0aW9uMjogXCJCcm93c2UgSW52ZW50b3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24yOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHB5LThcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJDYXJkU2VjdGlvblNlY29uZFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGYWlyIG1hcmtldCByYXRlcyBmb3Igc3VycGx1cyBpbnZlbnRvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgXCJUYXJnZXQgemVybyBpbnZlbnRvcnkgYnkgbW92aW5nIHN1cnBsdXMgcHJvZHVjdHMgdGhyb3VnaCBhIHRydXN0ZWQgbmV0d29yayBzdXBwb3J0ZWQgYnkgTWFydWJlbmktSXRvY2h1IFN0ZWVsIEluYyAoTUlTSSkuIFBpcGVzYWxlcyBjYW4gcHJvdmlkZSB5b3Ugd2l0aCBwcmljaW5nIHJlY29tbWVuZGF0aW9ucyB0byBhcnJpdmUgYXQgYSBmYWlyIG9wZW4gbWFya2V0IHZhbHVlLCB0aGVuIGNvbm5lY3QgeW91IHdpdGggcG90ZW50aWFsIGJ1eWVycyBnbG9iYWxseS5cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24xOiBcIkhvdyB0byBCdXk/XCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24xOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24yOiBcIlNoZWxsIE15IFBpcGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24yOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy0xLzJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLWF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmxhbmRpbmdJbWFnZTIsIGFsdDogXCJMYW5kaW5nIEltYWdlIDFcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgyKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIlRoZUZvb3RlclwiKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXG4gICAgICBcInNlY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlciBiZy1ncmF5LTcwMFwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iZVwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBteC1hdXRvIHotMjAgd3JhcHBlci1iYW5uZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhYnNvbHV0ZSBmbGV4IHctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS93ZWJwL3RvbWktZnVsbC53ZWJwXCIsXG4gICAgICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBweC00IG14LWF1dG8gbXQtNDRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYXgtdy00eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBZb3VyIGdsb2JhbCBtYXJrZXRwbGFjZSB0b1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIGJ1eSAmIHNlbGwgdHVidWxhciBwcm9kdWN0c1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtdy0zeGwgbXgtYXV0byBtYi0xMCB0ZXh0LWxnIHRleHQtZ3JheS0zMDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFF1aWNrbHkgb3ZlcmNvbWUgc3VwcGx5IGdhcHMgYW5kIHRhcmdldCB6ZXJvIGludmVudG9yeSB3aXRoIFBpcGVzYWxlcy5cXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJ3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgLW10LTggei0xMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIHRlc3RcXG4gICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktOFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctZ3JheS03MDAgcm91bmRlZC1sZyBnYXAtNCBwLTE2IHB5LTI0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTEwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBOZWVkIG1vcmUgaW5mb3JtYXRpb24/XFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQtNXhsIHRleHQteWVsbG93LTUwMFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIENvbnRhY3QgVXNcXG4gICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93IHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJOYW1lKlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkNvdW50cnkqXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTQvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHNlbGVjdGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ291bnRyeSBDb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy04LzEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUGhvbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiRW1haWwqXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrIHAtMi41IHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjRcIiwgcGxhY2Vob2xkZXI6IFwiWW91ciBNZXNzYWdlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwidy00IGgtNCB0ZXh0LWJsdWUtNjAwIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFnZ3JlLWNoZWNrXCIsIHR5cGU6IFwiY2hlY2tib3hcIiwgdmFsdWU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJhZ2dyZS1jaGVja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBTdGF5IHVwZGF0ZWQgd2l0IG91ciBsYXRlc3QgbmV3c1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTI0IHB5LTIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFNlbmRcXG4gICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2xvYmVbZGF0YS12LTA5N2ZhMTc2XSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL2hlYWRlci1iYWNrZ3JvdW5kLTIucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAyNHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG4ud3JhcHBlci1iYW5uZXJbZGF0YS12LTA5N2ZhMTc2XSB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEyUEE7RUFDQSxnRkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDQTtBQUVBO0VBQ0EsYUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjwhLS0gZXNsaW50LWRpc2FibGUgbWF4LWxlbiAtLT5cXG48dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGxcXFwiPlxcbiAgICA8VGhlTmF2aWdhdGlvbiAvPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBiZy1jZW50ZXIgYmctY292ZXIgYmctZ3JheS03MDBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImdsb2JlXFxcIiAvPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIHotMjAgd3JhcHBlci1iYW5uZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgZmxleCB3LWZ1bGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtdC0xMlxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2Uvd2VicC90b21pLWZ1bGwud2VicFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgcHgtNCBteC1hdXRvIG10LTQ0XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIFlvdXIgZ2xvYmFsIG1hcmtldHBsYWNlIHRvXFxuICAgICAgICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIGJ1eSAmIHNlbGwgdHVidWxhciBwcm9kdWN0c1xcbiAgICAgICAgICAgICAgICA8L2gyPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibWF4LXctM3hsIG14LWF1dG8gbWItMTAgdGV4dC1sZyB0ZXh0LWdyYXktMzAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICBRdWlja2x5IG92ZXJjb21lIHN1cHBseSBnYXBzIGFuZCB0YXJnZXQgemVybyBpbnZlbnRvcnkgd2l0aCBQaXBlc2FsZXMuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ3LWZ1bGxcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00IC1tdC04IHotMTBcXFwiPlxcbiAgICAgICAgICB0ZXN0XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwidy1mdWxsIHB5LTI0XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XFxcIj5cXG4gICAgICAgIDxDYXJkU2VjdGlvbkZpcnN0XFxuICAgICAgICAgIHYtZm9yPVxcXCIoaXRlbSwgaWR4KSBpbiBjYXJkU2VjdGlvbkZpcnN0TGlzdFxcXCJcXG4gICAgICAgICAgOmtleT1cXFwiaWR4XFxcIlxcbiAgICAgICAgICA6dGl0bGU9XFxcIml0ZW0udGl0bGVcXFwiXFxuICAgICAgICAgIDpkZXNjcmlwdGlvbj1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCJcXG4gICAgICAgICAgOmljb249XFxcIml0ZW0uaWNvblxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbCBweS0yNFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy0xLzJcXFwiPlxcbiAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIDpzcmM9XFxcImxhbmRpbmdJbWFnZTFcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIkxhbmRpbmcgSW1hZ2UgMVxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJtLWF1dG9cXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgPENhcmRTZWN0aW9uU2Vjb25kXFxuICAgICAgICAgICAgdGl0bGU9XFxcIlVyZ2VudCBmdWxmaWxtZW50IGZvciB0aW1lLWNyaXRpY2FsIHByb2plY3RzXFxcIlxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVxcXCJQaXBlc2FsZXMgbWFya2V0cGxhY2UgYXNzaXN0cyBpbiBtYW5hZ2luZyBwcm9jdXJlbWVudCBzaG9ydGZhbGxzIHF1aWNrbHkgYW5kIGVhc2lseS4gQnJvd3NlIGFuZCBmaW5kIHF1YWxpdHkgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgdG8geW91ciBzcGVjaWZpY2F0aW9ucywgYW5kIFBpcGVzYWxlcyByZWNvZ25pc2VkIHRyYWRlIHBhcnRuZXJzIHdpbGwgaGFuZGxlIHRoZSBvcmRlciBmdWxmaWxtZW50LCBndWFyYW50ZWVpbmcgcGVhY2Ugb2YgbWluZC5cXFwiXFxuICAgICAgICAgICAgbGFiZWxBY3Rpb24xPVxcXCJIb3cgdG8gQnV5P1xcXCJcXG4gICAgICAgICAgICBsaW5rQWN0aW9uMT1cXFwiL1xcXCJcXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjI9XFxcIkJyb3dzZSBJbnZlbnRvcnlcXFwiXFxuICAgICAgICAgICAgbGlua0FjdGlvbjI9XFxcIi9cXFwiXFxuICAgICAgICAgIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwidy1mdWxsIHB5LThcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgPENhcmRTZWN0aW9uU2Vjb25kXFxuICAgICAgICAgICAgdGl0bGU9XFxcIkZhaXIgbWFya2V0IHJhdGVzIGZvciBzdXJwbHVzIGludmVudG9yeVxcXCJcXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cXFwiVGFyZ2V0IHplcm8gaW52ZW50b3J5IGJ5IG1vdmluZyBzdXJwbHVzIHByb2R1Y3RzIHRocm91Z2ggYSB0cnVzdGVkIG5ldHdvcmsgc3VwcG9ydGVkIGJ5IE1hcnViZW5pLUl0b2NodSBTdGVlbCBJbmMgKE1JU0kpLiBQaXBlc2FsZXMgY2FuIHByb3ZpZGUgeW91IHdpdGggcHJpY2luZyByZWNvbW1lbmRhdGlvbnMgdG8gYXJyaXZlIGF0IGEgZmFpciBvcGVuIG1hcmtldCB2YWx1ZSwgdGhlbiBjb25uZWN0IHlvdSB3aXRoIHBvdGVudGlhbCBidXllcnMgZ2xvYmFsbHkuXFxcIlxcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMT1cXFwiSG93IHRvIEJ1eT9cXFwiXFxuICAgICAgICAgICAgbGlua0FjdGlvbjE9XFxcIi9cXFwiXFxuICAgICAgICAgICAgbGFiZWxBY3Rpb24yPVxcXCJTaGVsbCBNeSBQaXBlc1xcXCJcXG4gICAgICAgICAgICBsaW5rQWN0aW9uMj1cXFwiL1xcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICA6c3JjPVxcXCJsYW5kaW5nSW1hZ2UyXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJMYW5kaW5nIEltYWdlIDFcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwibS1hdXRvXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwidy1mdWxsIHB5LThcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctZ3JheS03MDAgcm91bmRlZC1sZyBnYXAtNCBwLTE2IHB5LTI0XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1iLTEwXFxcIj5cXG4gICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtNXhsIHRleHQtd2hpdGVcXFwiPlxcbiAgICAgICAgICAgICAgTmVlZCBtb3JlIGluZm9ybWF0aW9uP1xcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXllbGxvdy01MDBcXFwiPlxcbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxmb3JtIGNsYXNzPVxcXCJ3LWZ1bGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93IHctZnVsbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcXFwiXFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIk5hbWUqXFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcXFwiXFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNvdW50cnkqXFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctNC8xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcXFwiXFxuICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZD5Db3VudHJ5IENvZGU8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi1cXFwiPi08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi1cXFwiPi08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi1cXFwiPi08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIi1cXFwiPi08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTgvMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlBob25lXFxcIlxcbiAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy0xLzJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcXFwiXFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVtYWlsKlxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcXG4gICAgICAgICAgICAgICAgICByb3dzPVxcXCI0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJibG9jayBwLTIuNSB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJZb3VyIE1lc3NhZ2VcXFwiXFxuICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZ2FwLTQgdy1mdWxsXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleCBpdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICBpZD1cXFwiYWdncmUtY2hlY2tcXFwiXFxuICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgICAgICAgdmFsdWU9XFxcIlxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidy00IGgtNCB0ZXh0LWJsdWUtNjAwIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy0yXFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxsYWJlbFxcbiAgICAgICAgICAgICAgICAgIGZvcj1cXFwiYWdncmUtY2hlY2tcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgU3RheSB1cGRhdGVkIHdpdCBvdXIgbGF0ZXN0IG5ld3NcXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTI0IHB5LTIgdGV4dC13aGl0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgU2VuZFxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8VGhlRm9vdGVyIC8+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xcbmltcG9ydCBDYXJkU2VjdGlvbkZpcnN0IGZyb20gJ0Bjb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QnO1xcbmltcG9ydCBDYXJkU2VjdGlvblNlY29uZCBmcm9tICdAY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZCc7XFxuXFxuaW1wb3J0IEdsb2JlU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9nbG9iZS5zdmcnO1xcbmltcG9ydCBEb2xsYXJTdmcgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvc3ZnL2RvbGxhci5zdmcnO1xcbmltcG9ydCBQaXBhU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9waXBhLnN2Zyc7XFxuXFxuaW1wb3J0IExhbmRpbmdJbWFnZTEgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMS5wbmcnO1xcbmltcG9ydCBMYW5kaW5nSW1hZ2UyIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nLWltYWdlLTIucG5nJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBjb21wb25lbnRzOiB7XFxuICAgIENhcmRTZWN0aW9uRmlyc3QsXFxuICAgIENhcmRTZWN0aW9uU2Vjb25kXFxuICB9LFxcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgY2FyZFNlY3Rpb25GaXJzdExpc3Q6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgIHRpdGxlOiAnQnV5IG9yIHNlbGwgZ2xvYmFsbHksIG1hbmFnZSBpdCBsb2NhbGx5JyxcXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgZW5hYmxlcyBzZWxsZXJzIHRvIHByb21vdGUgc3VycGx1cyBpbnZlbnRvcnkgZ2xvYmFsbHksIG9wZW5pbmcgYnV5ZXJzIHNlYXJjaCBob3Jpem9ucy4gV2UgcHJvdmlkZSBhIHNlY3VyZSBhbmQgdW5jb21wbGljYXRlZCBwcm9jZXNzLCB3aXRoIGJvdGggYnV5ZXJzIGFuZCBzZWxsZXJzIGVuam95aW5nIHRoZSBjb25maWRlbmNlIG9mIHRyYW5zYWN0aW9uIG1hbmFnZW1lbnQgYnkgdGhlaXIgbG9jYWwgTWFydWJlbmktSXRvY2h1IFN0ZWVsIChNSVNJKSBuZXR3b3JrLicsXFxuICAgICAgICAgIGljb246IEdsb2JlU3ZnXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMSxcXG4gICAgICAgICAgdGl0bGU6ICdTdXBwb3J0aW5nIGNvc3QtZWZmZWN0aXZlIGludmVudG9yeSBtYW5hZ2VtZW50JyxcXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgYWxsb3dzIG9yZ2FuaXNhdGlvbnMgb2YgYWxsIHNpemVzIHRvIHF1aWNrbHkgdHJhZGUgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgYXQgYSBmYWlyIHByaWNlLiBZb3UgY2FuIG5vdyBrZWVwIGNvc3RzIGluIGxpbmUgd2l0aCBleHBlY3RhdGlvbnMgYW5kIGVhc2lseSBhY2Nlc3Mgb3Igb2ZmbG9hZCBleGNlc3MgaW52ZW50b3J5LicsXFxuICAgICAgICAgIGljb246IERvbGxhclN2Z1xcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgIHRpdGxlOiAnTGFyZ2UgcmFuZ2Ugb2YgcmVhZHktbWFkZSBwaXBlcyBmaXQgZm9yIHB1cnBvc2UnLFxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BpcGVzYWxlcyBtYXJrZXRwbGFjZSBpcyBob21lIHRvIGEgbGFyZ2UgcmFuZ2Ugb2YgcXVhbGl0eSBPaWwgQ291bnRyeSBUdWJ1bGFyIEdvb2RzIChPQ1RHKS4gQnJvd3NlIGJ5IHByb2R1Y3QgdHlwZSwgZ3JhZGUsIHNpemUsIGNvbm5lY3Rpb24gYW5kIGxvY2F0aW9uLiBCZSBhc3N1cmVkIG9mIHN1aXRhYmxlIGJhY2t1cCBzdXBwbGllcyB0byBtZWV0IHVyZ2VudCBkZW1hbmQuJyxcXG4gICAgICAgICAgaWNvbjogUGlwYVN2Z1xcbiAgICAgICAgfVxcbiAgICAgIF0sXFxuICAgICAgbGFuZGluZ0ltYWdlMTogTGFuZGluZ0ltYWdlMSxcXG4gICAgICBsYW5kaW5nSW1hZ2UyOiBMYW5kaW5nSW1hZ2UyXFxuICAgIH07XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi5nbG9iZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL2hlYWRlci1iYWNrZ3JvdW5kLTIucG5nKTsgXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMjRweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLndyYXBwZXItYmFubmVyIHtcXG4gIGhlaWdodDogNDUwcHg7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMS5wbmc/MjQ5ZDAyZjE0OWFiY2U5MTY3NzBlNzliMDVmZTM4ZGVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9sYW5kaW5nLWltYWdlLTIucG5nPzlkYzU0OTZjZWMwMmQzN2IzYmE5YzFhODY3ZjNlODA5XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvcGlwZXNhbGVzLnN2Zz82MzM1NDg2ZWQ4OTA1ZGFkMDZjODBlOGM2MDJiYzM2MFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2RvbGxhci5zdmc/OWMyMjZlOTc0NGViMDYyNTdmYzFkMjczOGZmOTM4YjFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9nbG9iZS5zdmc/Nzk4NGNhZjNjNzBiZDM5MzQ1Njc1MGU3MDNiZjY1MTFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9waXBhLnN2Zz8wZGM2ZTJhOTAwMDkxNmUxNjhiZGM4MjIyOGQxYzI3N1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOTdmYTE3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMzQ4MjcxYVwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YzNDgyNzFhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YzNDgyNzFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YzNDgyNzFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzNDgyNzFhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjM0ODI3MWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kM2YzNmE1NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2QzZjM2YTU0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2QzZjM2YTU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2QzZjM2YTU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kM2YzNmE1NFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2QzZjM2YTU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvbkZpcnN0L0NhcmRTZWN0aW9uRmlyc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmM0ZDA0NmNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FyZFNlY3Rpb25TZWNvbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JjNGQwNDZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JjNGQwNDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JjNGQwNDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmM0ZDA0NmNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYzRkMDQ2YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25TZWNvbmQvQ2FyZFNlY3Rpb25TZWNvbmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYWdlTm90Rm91bmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxYzMzZGU0XCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjFjMzNkZTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjFjMzNkZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjFjMzNkZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2VOb3RGb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjFjMzNkZTRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMWMzM2RlNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlTm90Rm91bmQvUGFnZU5vdEZvdW5kLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGQ1MzcyOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZUZvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OGQ1MzcyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OGQ1MzcyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OGQ1MzcyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGQ1MzcyOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4ZDUzNzI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaGVOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGRhZDBkYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0ZGFkMGRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0ZGFkMGRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0ZGFkMGRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGRhZDBkYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0ZGFkMGRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZU5hdmlnYXRpb24vVGhlTmF2aWdhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjM4NGMxY1wiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZmMzg0YzFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZmMzg0YzFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZmMzg0YzFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmYzODRjMWNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZjM4NGMxYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0Fib3V0L0Fib3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDk3ZmExNzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOTdmYTE3NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOTdmYTE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOTdmYTE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOTdmYTE3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25TZWNvbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsInJvdXRlciIsInN0b3JlIiwiZWwiLCJ3aW5kb3ciLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTUlYX0FQUF9VUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiQXBwIiwiVGhlTmF2aWdhdGlvbiIsIlRoZUZvb3RlciIsImNvbXBvbmVudCIsIkV2ZW50QnVzIiwibGlicmFyeSIsImZhcyIsImZhYiIsImZhciIsIkZvbnRBd2Vzb21lSWNvbiIsImFkZCIsImkiLCJwcm90b3R5cGUiLCIkYXBpIiwiJGV2ZW50QnVzIiwiVnVlUm91dGVyIiwiUGFnZU5vdEZvdW5kIiwiSG9tZSIsIkFib3V0Iiwicm91dGVzIiwicGF0aCIsIm5hbWUiLCJ1c2UiLCJtb2RlIiwicHJvcHMiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJkZXNjcmlwdGlvbiIsImljb24iLCJsYWJlbEFjdGlvbjEiLCJsaW5rQWN0aW9uMSIsImxhYmVsQWN0aW9uMiIsImxpbmtBY3Rpb24yIiwibG9nb1BpcGVzIiwiZGF0YSIsImxvZ28iLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiQ2FyZFNlY3Rpb25GaXJzdCIsIkNhcmRTZWN0aW9uU2Vjb25kIiwiR2xvYmVTdmciLCJEb2xsYXJTdmciLCJQaXBhU3ZnIiwiTGFuZGluZ0ltYWdlMSIsIkxhbmRpbmdJbWFnZTIiLCJjb21wb25lbnRzIiwiY2FyZFNlY3Rpb25GaXJzdExpc3QiLCJpZCIsImxhbmRpbmdJbWFnZTEiLCJsYW5kaW5nSW1hZ2UyIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwic3JjIiwiYWx0IiwiX3YiLCJfcyIsInRvIiwiX20iLCJfbCIsIml0ZW0iLCJpZHgiLCJrZXkiLCJwbGFjZWhvbGRlciIsInNlbGVjdGVkIiwidmFsdWUiLCJyb3dzIl0sInNvdXJjZVJvb3QiOiIifQ==