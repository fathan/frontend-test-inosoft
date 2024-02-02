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
/* harmony import */ var _configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurations */ "./resources/js/configurations/index.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/app.scss */ "./resources/styles/app.scss");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  el: '#app',
  router: _routers__WEBPACK_IMPORTED_MODULE_0__["default"],
  store: _stores__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./resources/js/components/Common/LoaderFullPage/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Common/LoaderFullPage/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _LoaderFullPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _LoaderFullPage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaderFullPage.vue */ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue");


/***/ }),

/***/ "./resources/js/components/Common/SelectFilter/index.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Common/SelectFilter/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _SelectFilter_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _SelectFilter_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFilter.vue */ "./resources/js/components/Common/SelectFilter/SelectFilter.vue");


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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _root_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/App.vue */ "./resources/js/App.vue");
/* harmony import */ var _components_Layouts_TheNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layouts/TheNavigation */ "./resources/js/components/Layouts/TheNavigation/index.js");
/* harmony import */ var _components_Layouts_TheFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layouts/TheFooter */ "./resources/js/components/Layouts/TheFooter/index.js");
/* harmony import */ var _components_Common_LoaderFullPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/LoaderFullPage */ "./resources/js/components/Common/LoaderFullPage/index.js");
/* harmony import */ var _components_Common_SelectFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Common/SelectFilter */ "./resources/js/components/Common/SelectFilter/index.js");






vue__WEBPACK_IMPORTED_MODULE_5__["default"].component('App', _root_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5__["default"].component('TheNavigation', _components_Layouts_TheNavigation__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5__["default"].component('TheFooter', _components_Layouts_TheFooter__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5__["default"].component('LoaderFullPage', _components_Common_LoaderFullPage__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_5__["default"].component('SelectFilter', _components_Common_SelectFilter__WEBPACK_IMPORTED_MODULE_4__["default"]);

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

/***/ "./resources/js/services/api/product.js":
/*!**********************************************!*\
  !*** ./resources/js/services/api/product.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mocks_product_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../__mocks__/product.json */ "./resources/js/__mocks__/product.json");
// import http from '@services/http';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getProducts: function getProducts() {
    return _mocks_product_json__WEBPACK_IMPORTED_MODULE_0__;
  }
});

/***/ }),

/***/ "./resources/js/stores/index.js":
/*!**************************************!*\
  !*** ./resources/js/stores/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/app */ "./resources/js/stores/modules/app/index.js");



vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_2__["default"].Store({
  modules: {
    app: _modules_app__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
}));

/***/ }),

/***/ "./resources/js/stores/modules/app/actions.js":
/*!****************************************************!*\
  !*** ./resources/js/stores/modules/app/actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var actions = {
  setFilterOptionsProductType: function setFilterOptionsProductType(_ref, data) {
    var commit = _ref.commit;
    commit('SET_FILTER_OPTIONS_PRODUCT_TYPE', data);
  },
  setSelectedFilterProductType: function setSelectedFilterProductType(_ref2, data) {
    var commit = _ref2.commit;
    commit('SET_SELECTED_FILTER_PRODUCT_TYPE', data);
  },
  setFilterOptionsSize: function setFilterOptionsSize(_ref3, data) {
    var commit = _ref3.commit;
    commit('SET_FILTER_OPTIONS_SIZE', data);
  },
  setSelectedFilterSize: function setSelectedFilterSize(_ref4, data) {
    var commit = _ref4.commit;
    commit('SET_SELECTED_FILTER_SIZE', data);
  },
  setFilterOptionsGrade: function setFilterOptionsGrade(_ref5, data) {
    var commit = _ref5.commit;
    commit('SET_FILTER_OPTIONS_GRADE', data);
  },
  setSelectedFilterGrade: function setSelectedFilterGrade(_ref6, data) {
    var commit = _ref6.commit;
    commit('SET_SELECTED_FILTER_GRADE', data);
  },
  setFilterOptionsConnection: function setFilterOptionsConnection(_ref7, data) {
    var commit = _ref7.commit;
    commit('SET_FILTER_OPTIONS_CONNECTION', data);
  },
  setSelectedFilterConnection: function setSelectedFilterConnection(_ref8, data) {
    var commit = _ref8.commit;
    commit('SET_SELECTED_FILTER_CONNECTION', data);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actions);

/***/ }),

/***/ "./resources/js/stores/modules/app/getters.js":
/*!****************************************************!*\
  !*** ./resources/js/stores/modules/app/getters.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getters = {
  getFilterOptionsProductType: function getFilterOptionsProductType(state) {
    return state.filterOptionsProductType;
  },
  getSelectedFilterProductType: function getSelectedFilterProductType(state) {
    return state.selectedFilterProductType;
  },
  getFilterOptionsSize: function getFilterOptionsSize(state) {
    return state.filterOptionsSize;
  },
  getSelectedFilterSize: function getSelectedFilterSize(state) {
    return state.selectedFilterSize;
  },
  getFilterOptionsGrade: function getFilterOptionsGrade(state) {
    return state.filterOptionsGrade;
  },
  getSelectedFilterGrade: function getSelectedFilterGrade(state) {
    return state.selectedFilterGrade;
  },
  getFilterOptionsConnection: function getFilterOptionsConnection(state) {
    return state.filterOptionsConnection;
  },
  getSelectedFilterConnection: function getSelectedFilterConnection(state) {
    return state.selectedFilterConnection;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getters);

/***/ }),

/***/ "./resources/js/stores/modules/app/index.js":
/*!**************************************************!*\
  !*** ./resources/js/stores/modules/app/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./resources/js/stores/modules/app/state.js");
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getters */ "./resources/js/stores/modules/app/getters.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./resources/js/stores/modules/app/actions.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mutations */ "./resources/js/stores/modules/app/mutations.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  state: _state__WEBPACK_IMPORTED_MODULE_0__["default"],
  getters: _getters__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__["default"],
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/stores/modules/app/mutations.js":
/*!******************************************************!*\
  !*** ./resources/js/stores/modules/app/mutations.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var mutations = {
  SET_FILTER_OPTIONS_PRODUCT_TYPE: function SET_FILTER_OPTIONS_PRODUCT_TYPE(state, payload) {
    state.filterOptionsProductType = payload;
  },
  SET_SELECTED_FILTER_PRODUCT_TYPE: function SET_SELECTED_FILTER_PRODUCT_TYPE(state, payload) {
    state.selectedFilterProductType = payload;
  },
  SET_FILTER_OPTIONS_SIZE: function SET_FILTER_OPTIONS_SIZE(state, payload) {
    state.filterOptionsSize = payload;
  },
  SET_SELECTED_FILTER_SIZE: function SET_SELECTED_FILTER_SIZE(state, payload) {
    state.selectedFilterSize = payload;
  },
  SET_FILTER_OPTIONS_GRADE: function SET_FILTER_OPTIONS_GRADE(state, payload) {
    state.filterOptionsGrade = payload;
  },
  SET_SELECTED_FILTER_GRADE: function SET_SELECTED_FILTER_GRADE(state, payload) {
    state.selectedFilterGrade = payload;
  },
  SET_FILTER_OPTIONS_CONNECTION: function SET_FILTER_OPTIONS_CONNECTION(state, payload) {
    state.filterOptionsConnection = payload;
  },
  SET_SELECTED_FILTER_CONNECTION: function SET_SELECTED_FILTER_CONNECTION(state, payload) {
    state.selectedFilterConnection = payload;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mutations);

/***/ }),

/***/ "./resources/js/stores/modules/app/state.js":
/*!**************************************************!*\
  !*** ./resources/js/stores/modules/app/state.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** eslint-disable */
var state = {
  filterOptionsProductType: [],
  selectedFilterProductType: '',
  filterOptionsSize: [],
  selectedFilterSize: '',
  filterOptionsGrade: [],
  selectedFilterGrade: '',
  filterOptionsConnection: [],
  selectedFilterConnection: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./resources/js/utils/app.js":
/*!***********************************!*\
  !*** ./resources/js/utils/app.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatedNumber: () => (/* binding */ formatedNumber),
/* harmony export */   sleep: () => (/* binding */ sleep)
/* harmony export */ });
function formatedNumber(number) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  var formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, format);
  return formattedNumber;
}
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      showLoader: false
    };
  },
  created: function created() {
    this.$eventBus.$on('openLoaderFullPage', this.onHandleOpen);
    this.$eventBus.$on('closeLoaderFullPage', this.onHandleClose);
  },
  methods: {
    onHandleOpen: function onHandleOpen() {
      this.showLoader = true;
    },
    onHandleClose: function onHandleClose() {
      this.showLoader = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/app */ "./resources/js/utils/app.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    category: {
      type: String,
      "default": ''
    },
    title: {
      type: String,
      "default": ''
    },
    selectedValue: {
      type: String,
      "default": ''
    },
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      visibleDropdown: false,
      searchValue: '',
      debounce: null
    };
  },
  created: function created() {
    var _this = this;
    this.$eventBus.$on('closeSelectFilter', function () {
      _this.visibleDropdown = false;
    });
  },
  methods: {
    onHandleVisibleDropdown: function onHandleVisibleDropdown() {
      if (!this.visibleDropdown) {
        this.$eventBus.$emit('closeSelectFilter');
        this.visibleDropdown = true;
      } else {
        this.visibleDropdown = false;
      }
    },
    onClickResetFilter: function onClickResetFilter(category) {
      this.$emit('onResetData', {
        category: category
      });
      this.visibleDropdown = false;
    },
    computeTitleList: function computeTitleList(type) {
      var result = '';
      if (type === 'Product Type') {
        result = 'Select a <strong>Product Type</strong> below';
      }
      if (type === 'Size') {
        result = 'Select an <strong>OD</strong> below';
      }
      if (type === 'Grade') {
        result = 'Select a <strong>Grade Type</strong> below';
      }
      if (type === 'Connection') {
        result = 'Select a <strong>Connection Type</strong> below';
      }
      return result;
    },
    computeFormatQty: function computeFormatQty(param) {
      return (0,_utils_app__WEBPACK_IMPORTED_MODULE_0__.formatedNumber)(param);
    },
    onHandleSelectItem: function onHandleSelectItem(category, data) {
      this.$emit('onSelectData', {
        category: category,
        data: data
      });
      this.onHandleVisibleDropdown();
    },
    onHandleFilterListItem: function onHandleFilterListItem() {
      var _this2 = this;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(function () {
        var value = _this2.searchValue;
        var category = _this2.category;
        _this2.$emit('filterListItem', {
          category: category,
          value: value
        });
      }, 1000);
    }
  }
});

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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/app */ "./resources/js/utils/app.js");
/* harmony import */ var _components_Fragments_Home_CardSectionFirst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Fragments/Home/CardSectionFirst */ "./resources/js/components/Fragments/Home/CardSectionFirst/index.js");
/* harmony import */ var _components_Fragments_Home_CardSectionSecond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Fragments/Home/CardSectionSecond */ "./resources/js/components/Fragments/Home/CardSectionSecond/index.js");
/* harmony import */ var _services_api_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/api/product */ "./resources/js/services/api/product.js");
/* harmony import */ var _assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../assets/svg/globe.svg */ "./resources/assets/svg/globe.svg");
/* harmony import */ var _assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../assets/svg/dollar.svg */ "./resources/assets/svg/dollar.svg");
/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../assets/svg/pipa.svg */ "./resources/assets/svg/pipa.svg");
/* harmony import */ var _assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../assets/images/landing-image-1.png */ "./resources/assets/images/landing-image-1.png");
/* harmony import */ var _assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../assets/images/landing-image-2.png */ "./resources/assets/images/landing-image-2.png");
/* harmony import */ var _assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable max-len */










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CardSectionFirst: _components_Fragments_Home_CardSectionFirst__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardSectionSecond: _components_Fragments_Home_CardSectionSecond__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      cardSectionFirstList: [{
        id: 1,
        title: 'Buy or sell globally, manage it locally',
        description: 'Pipesales enables sellers to promote surplus inventory globally, opening buyers search horizons. We provide a secure and uncomplicated process, with both buyers and sellers enjoying the confidence of transaction management by their local Marubeni-Itochu Steel (MISI) network.',
        icon: (_assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_4___default())
      }, {
        id: 1,
        title: 'Supporting cost-effective inventory management',
        description: 'Pipesales marketplace allows organisations of all sizes to quickly trade tubular products and accessories at a fair price. You can now keep costs in line with expectations and easily access or offload excess inventory.',
        icon: (_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_5___default())
      }, {
        id: 1,
        title: 'Large range of ready-made pipes fit for purpose',
        description: 'Pipesales marketplace is home to a large range of quality Oil Country Tubular Goods (OCTG). Browse by product type, grade, size, connection and location. Be assured of suitable backup supplies to meet urgent demand.',
        icon: (_assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_6___default())
      }],
      landingImage1: (_assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_7___default()),
      landingImage2: (_assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_8___default())
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapState)('app', {
    filterOptionsProductType: function filterOptionsProductType(state) {
      return state.filterOptionsProductType;
    },
    selectedFilterProductType: function selectedFilterProductType(state) {
      return state.selectedFilterProductType;
    },
    filterOptionsSize: function filterOptionsSize(state) {
      return state.filterOptionsSize;
    },
    selectedFilterSize: function selectedFilterSize(state) {
      return state.selectedFilterSize;
    },
    filterOptionsGrade: function filterOptionsGrade(state) {
      return state.filterOptionsGrade;
    },
    selectedFilterGrade: function selectedFilterGrade(state) {
      return state.selectedFilterGrade;
    },
    filterOptionsConnection: function filterOptionsConnection(state) {
      return state.filterOptionsConnection;
    },
    selectedFilterConnection: function selectedFilterConnection(state) {
      return state.selectedFilterConnection;
    }
  })),
  mounted: function mounted() {
    this.initialize();
  },
  methods: {
    getAllProduct: function getAllProduct() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_api_product__WEBPACK_IMPORTED_MODULE_3__["default"].getProducts();
            case 3:
              response = _context.sent;
              return _context.abrupt("return", response);
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    filterData: function filterData(data, paramFilter) {
      var filterCriteria = paramFilter;
      var applyFilter = function applyFilter(data, criteria) {
        if (!criteria) {
          return data;
        }
        return data.filter(function (item) {
          for (var key in criteria) {
            if (item[key] !== criteria[key]) {
              return false;
            }
          }
          return true;
        });
      };
      var filteredData = applyFilter(data, filterCriteria);
      var notFilteredData = data.filter(function (item) {
        return !applyFilter([item], filterCriteria).length;
      });
      var modifiedNotFilteredData = notFilteredData.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          qty: 0
        });
      });
      var combinedData = [].concat(_toConsumableArray(filteredData), _toConsumableArray(modifiedNotFilteredData));
      return combinedData;
    },
    getDataProductType: function getDataProductType(data) {
      var productTypeQtySum = data.reduce(function (acc, curr) {
        if (acc[curr.product_type]) {
          acc[curr.product_type] += parseInt(curr.qty);
        } else {
          acc[curr.product_type] = parseInt(curr.qty);
        }
        return acc;
      }, {});
      var productTypeQtyArray = Object.keys(productTypeQtySum).map(function (productType) {
        return {
          product_type: productType,
          total_qty: productTypeQtySum[productType]
        };
      });
      return productTypeQtyArray;
    },
    getDataSize: function getDataSize(data) {
      var sizeQtySum = data.reduce(function (acc, curr) {
        if (acc[curr.size]) {
          acc[curr.size] += parseInt(curr.qty);
        } else {
          acc[curr.size] = parseInt(curr.qty);
        }
        return acc;
      }, {});
      var sizeQtyArray = Object.keys(sizeQtySum).map(function (size) {
        return {
          size: size,
          total_qty: sizeQtySum[size]
        };
      });
      return sizeQtyArray;
    },
    getDataGrade: function getDataGrade(data) {
      var gradeQtySum = data.reduce(function (acc, curr) {
        if (acc[curr.grade]) {
          acc[curr.grade] += parseInt(curr.qty);
        } else {
          acc[curr.grade] = parseInt(curr.qty);
        }
        return acc;
      }, {});
      var gradeQtyArray = Object.keys(gradeQtySum).map(function (grade) {
        return {
          grade: grade,
          total_qty: gradeQtySum[grade]
        };
      });
      return gradeQtyArray;
    },
    getDataConnection: function getDataConnection(data) {
      var connectionQtySum = data.reduce(function (acc, curr) {
        if (acc[curr.connection]) {
          acc[curr.connection] += parseInt(curr.qty);
        } else {
          acc[curr.connection] = parseInt(curr.qty);
        }
        return acc;
      }, {});
      var connectionQtyArray = Object.keys(connectionQtySum).map(function (connection) {
        return {
          connection: connection,
          total_qty: connectionQtySum[connection]
        };
      });
      return connectionQtyArray;
    },
    initialize: function initialize() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var withLoader, res, body, resFilterData, resDataProductType, resDatasSize, resDataGrade, resDataConnection;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              withLoader = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              if (!withLoader) {
                _context2.next = 5;
                break;
              }
              _this.$eventBus.$emit('openLoaderFullPage');
              _context2.next = 5;
              return (0,_utils_app__WEBPACK_IMPORTED_MODULE_0__.sleep)(1000);
            case 5:
              _context2.next = 7;
              return _this.getAllProduct();
            case 7:
              res = _context2.sent;
              body = {};
              if (_this.selectedFilterProductType !== '') {
                Object.assign(body, {
                  product_type: _this.selectedFilterProductType
                });
              }
              if (_this.selectedFilterSize !== '') {
                Object.assign(body, {
                  size: _this.selectedFilterSize
                });
              }
              if (_this.selectedFilterGrade !== '') {
                Object.assign(body, {
                  grade: _this.selectedFilterGrade
                });
              }
              if (_this.selectedFilterConnection !== '') {
                Object.assign(body, {
                  connection: _this.selectedFilterConnection
                });
              }

              // ////////////////////////////////////////////////
              resFilterData = _this.filterData(res, body); // ////////////////////////////////////////////////
              resDataProductType = _this.getDataProductType(resFilterData);
              _this.$store.dispatch('app/setFilterOptionsProductType', resDataProductType);
              resDatasSize = _this.getDataSize(resFilterData);
              _this.$store.dispatch('app/setFilterOptionsSize', resDatasSize);
              resDataGrade = _this.getDataGrade(resFilterData);
              _this.$store.dispatch('app/setFilterOptionsGrade', resDataGrade);
              resDataConnection = _this.getDataConnection(resFilterData);
              _this.$store.dispatch('app/setFilterOptionsConnection', resDataConnection);
              if (withLoader) {
                _this.$eventBus.$emit('closeLoaderFullPage');
              }
            case 23:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    onHandleSelectdata: function onHandleSelectdata(event) {
      if (event.category === '1') {
        this.$store.dispatch('app/setSelectedFilterProductType', event.data.product_type);
      }
      if (event.category === '2') {
        this.$store.dispatch('app/setSelectedFilterSize', event.data.size);
      }
      if (event.category === '3') {
        this.$store.dispatch('app/setSelectedFilterGrade', event.data.grade);
      }
      if (event.category === '4') {
        this.$store.dispatch('app/setSelectedFilterConnection', event.data.connection);
      }
      this.initialize(true);
    },
    onHandleResetdata: function onHandleResetdata(event) {
      if (event.category === '1') {
        this.$store.dispatch('app/setSelectedFilterProductType', '');
      }
      if (event.category === '2') {
        this.$store.dispatch('app/setSelectedFilterSize', '');
      }
      if (event.category === '3') {
        this.$store.dispatch('app/setSelectedFilterGrade', '');
      }
      if (event.category === '4') {
        this.$store.dispatch('app/setSelectedFilterConnection', '');
      }
      this.initialize(true);
    },
    onHandleFilterListItem: function onHandleFilterListItem(event) {
      var valueSearch = new RegExp(event.value, 'i');
      if (event.category === '1') {
        var filtered = this.filterOptionsProductType.filter(function (item) {
          return valueSearch.test(item.product_type);
        });
        if (filtered.length > 0) {
          this.$store.dispatch('app/setFilterOptionsProductType', filtered);
        }
      }
      if (event.category === '2') {
        var _filtered = this.filterOptionsSize.filter(function (item) {
          return valueSearch.test(item.size);
        });
        if (_filtered.length > 0) {
          this.$store.dispatch('app/setFilterOptionsSize', _filtered);
        }
      }
      if (event.category === '3') {
        var _filtered2 = this.filterOptionsGrade.filter(function (item) {
          return valueSearch.test(item.grade);
        });
        if (_filtered2.length > 0) {
          this.$store.dispatch('app/setFilterOptionsGrade', _filtered2);
        }
      }
      if (event.category === '4') {
        var _filtered3 = this.filterOptionsConnection.filter(function (item) {
          return valueSearch.test(item.connection);
        });
        if (_filtered3.length > 0) {
          this.$store.dispatch('app/setFilterOptionsConnection', _filtered3);
        }
      }
      if (event.value === '') {
        this.initialize();
      }
    }
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
  return _c("div", [_c("router-view"), _vm._v(" "), _c("LoaderFullPage")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=template&id=ba258bd4":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=template&id=ba258bd4 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.showLoader ? _c("div", {
    staticClass: "fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-black opacity-60 flex flex-col items-center justify-center"
  }, [_vm._m(0)]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "lds-ripple"
  }, [_c("div"), _vm._v(" "), _c("div")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=template&id=78f771f6":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=template&id=78f771f6 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_c("button", {
    staticClass: "w-full bg-gray-100 border border-gray-300 text-gray-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-5 items-center",
    attrs: {
      type: "button"
    }
  }, [_c("div", {
    staticClass: "flex justify-between",
    on: {
      click: _vm.onHandleVisibleDropdown
    }
  }, [_c("span", [_vm._v(_vm._s(_vm.title) + " ")]), _vm._v(" "), _c("FontAwesomeIcon", {
    staticClass: "text-sm text-yellow-600",
    attrs: {
      icon: _vm.visibleDropdown ? "chevron-up" : "chevron-down"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full text-left"
  }, [_vm.selectedValue !== "" ? [_c("div", {
    staticClass: "flex justify-between",
    on: {
      click: function click($event) {
        return _vm.onClickResetFilter(_vm.category);
      }
    }
  }, [_c("span", {
    staticClass: "font-bold text-yellow-600"
  }, [_vm._v("\n            " + _vm._s(_vm.selectedValue) + "\n          ")]), _vm._v(" "), _c("FontAwesomeIcon", {
    staticClass: "text-sm text-gray-500",
    attrs: {
      icon: "times-circle"
    }
  })], 1)] : [_c("span", {
    staticClass: "font-bold text-yellow-600 uppercase"
  }, [_vm._v("\n          All\n        ")])]], 2)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.visibleDropdown,
      expression: "visibleDropdown"
    }],
    staticClass: "w-full mt-2 z-10 bg-white border border-gray-300 rounded-lg"
  }, [_c("div", {
    staticClass: "p-3"
  }, [_c("div", [_c("p", {
    staticClass: "text-sm text-gray-500",
    domProps: {
      innerHTML: _vm._s(_vm.computeTitleList(_vm.title))
    }
  })]), _vm._v(" "), _c("label", {
    staticClass: "sr-only",
    attrs: {
      "for": "input-group-search"
    }
  }, [_vm._v("\n        Search\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("div", {
    staticClass: "absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
  }, [_c("FontAwesomeIcon", {
    staticClass: "text-sm text-gray-500",
    attrs: {
      icon: "search"
    }
  })], 1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchValue,
      expression: "searchValue"
    }],
    staticClass: "block w-full p-2 pl-6 ps-10 text-sm text-gray-900 border-b border-gray-300 focus:outline-none focus:ring-white",
    attrs: {
      type: "text",
      placeholder: "Search"
    },
    domProps: {
      value: _vm.searchValue
    },
    on: {
      keyup: _vm.onHandleFilterListItem,
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchValue = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _c("ul", {
    staticClass: "h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700"
  }, _vm._l(_vm.options, function (item, i) {
    return _c("li", {
      key: i,
      staticClass: "flex flex-row justify-between py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer",
      on: {
        click: function click($event) {
          return _vm.onHandleSelectItem(_vm.category, item);
        }
      }
    }, [_c("div", [_vm.category === "1" ? _c("span", [_vm._v("\n            " + _vm._s(item.product_type) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.category === "2" ? _c("span", [_vm._v("\n            " + _vm._s(item.size) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.category === "3" ? _c("span", [_vm._v("\n            " + _vm._s(item.grade) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.category === "4" ? _c("span", [_vm._v("\n            " + _vm._s(item.connection) + "\n          ")]) : _vm._e()]), _vm._v(" "), _c("div", [_c("span", {
      staticClass: "font-bold text-yellow-500"
    }, [_vm._v("\n            " + _vm._s(_vm.computeFormatQty(item.total_qty)) + "\n          ")])])]);
  }), 0)])]);
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
  }, [_c("TheNavigation"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "container mx-auto flex flex-col lg:flex-row gap-4"
  }, [_c("div", {
    staticClass: "w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10 oveflow-hidden h-28"
  }, [_c("div", {
    staticClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
  }, [_c("div", [_c("SelectFilter", {
    attrs: {
      category: "1",
      title: "Product Type",
      selectedValue: _vm.selectedFilterProductType,
      options: _vm.filterOptionsProductType
    },
    on: {
      onSelectData: function onSelectData($event) {
        return _vm.onHandleSelectdata($event);
      },
      onResetData: function onResetData($event) {
        return _vm.onHandleResetdata($event);
      },
      filterListItem: function filterListItem($event) {
        return _vm.onHandleFilterListItem($event);
      }
    }
  })], 1), _vm._v(" "), _c("div", [_c("SelectFilter", {
    attrs: {
      category: "2",
      title: "Size",
      selectedValue: _vm.selectedFilterSize,
      options: _vm.filterOptionsSize
    },
    on: {
      onSelectData: function onSelectData($event) {
        return _vm.onHandleSelectdata($event);
      },
      onResetData: function onResetData($event) {
        return _vm.onHandleResetdata($event);
      },
      filterListItem: function filterListItem($event) {
        return _vm.onHandleFilterListItem($event);
      }
    }
  })], 1), _vm._v(" "), _c("div", [_c("SelectFilter", {
    attrs: {
      category: "3",
      title: "Grade",
      selectedValue: _vm.selectedFilterGrade,
      options: _vm.filterOptionsGrade
    },
    on: {
      onSelectData: function onSelectData($event) {
        return _vm.onHandleSelectdata($event);
      },
      onResetData: function onResetData($event) {
        return _vm.onHandleResetdata($event);
      },
      filterListItem: function filterListItem($event) {
        return _vm.onHandleFilterListItem($event);
      }
    }
  })], 1), _vm._v(" "), _c("div", [_c("SelectFilter", {
    attrs: {
      category: "4",
      title: "Connection",
      selectedValue: _vm.selectedFilterConnection,
      options: _vm.filterOptionsConnection
    },
    on: {
      onSelectData: function onSelectData($event) {
        return _vm.onHandleSelectdata($event);
      },
      onResetData: function onResetData($event) {
        return _vm.onHandleResetdata($event);
      },
      filterListItem: function filterListItem($event) {
        return _vm.onHandleFilterListItem($event);
      }
    }
  })], 1)])])])]), _vm._v(" "), _c("section", {
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
  })])])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("TheFooter")], 1);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n}\n100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n}\n}", "",{"version":3,"sources":["webpack://./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AACF;AAEA;EACE,kBAAA;EACA,sBAAA;EACA,UAAA;EACA,kBAAA;EACA,8DAAA;AACF;AAEA;EACE,sBAAA;AACF;AAEA;AACE;IACE,SAAA;IACA,UAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;AACF;AACA;IACE,QAAA;IACA,SAAA;IACA,WAAA;IACA,YAAA;IACA,UAAA;AACF;AACF","sourcesContent":[".lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".globe[data-v-097fa176] {\n  background-image: url(https://pipesales.com/view2/image/header-background-2.png);\n  background-size: 1024px !important;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.wrapper-banner[data-v-097fa176] {\n  height: 450px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Home/Home.vue"],"names":[],"mappings":"AAyiBA;EACA,gFAAA;EACA,kCAAA;EACA,4BAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AACA;AAEA;EACA,aAAA;AACA","sourcesContent":["<!-- eslint-disable max-len -->\n<template>\n  <div class=\"w-full\">\n    <TheNavigation />\n\n    <section class=\"relative overflow-hidden w-full bg-center bg-cover bg-gray-700\">\n      <div class=\"globe\" />\n      <div class=\"container mx-auto z-20 wrapper-banner\">\n        <div class=\"absolute flex w-full\">\n          <div class=\"mt-12\">\n            <img\n              src=\"https://pipesales.com/view2/image/webp/tomi-full.webp\"\n              alt=\"\"\n            >\n          </div>\n          <div class=\"text-center\">\n            <div class=\"container px-4 mx-auto mt-44\">\n              <div class=\"max-w-4xl mx-auto text-center\">\n                <h2 class=\"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100\">\n                  Your global marketplace to\n                </h2>\n                <h2 class=\"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-yellow-600\">\n                  buy & sell tubular products\n                </h2>\n                <p class=\"max-w-3xl mx-auto mb-10 text-lg text-gray-300\">\n                  Quickly overcome supply gaps and target zero inventory with Pipesales.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10 oveflow-hidden h-28\">\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4\">\n            <div>\n              <SelectFilter\n                category=\"1\"\n                title=\"Product Type\"\n                :selectedValue=\"selectedFilterProductType\"\n                :options=\"filterOptionsProductType\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n                @filterListItem=\"onHandleFilterListItem($event)\"\n              />\n            </div>\n            <div>\n              <SelectFilter\n                category=\"2\"\n                title=\"Size\"\n                :selectedValue=\"selectedFilterSize\"\n                :options=\"filterOptionsSize\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n                @filterListItem=\"onHandleFilterListItem($event)\"\n              />\n            </div>\n            <div>\n              <SelectFilter\n                category=\"3\"\n                title=\"Grade\"\n                :selectedValue=\"selectedFilterGrade\"\n                :options=\"filterOptionsGrade\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n                @filterListItem=\"onHandleFilterListItem($event)\"\n              />\n            </div>\n            <div>\n              <SelectFilter\n                category=\"4\"\n                title=\"Connection\"\n                :selectedValue=\"selectedFilterConnection\"\n                :options=\"filterOptionsConnection\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n                @filterListItem=\"onHandleFilterListItem($event)\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-24\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <CardSectionFirst\n          v-for=\"(item, idx) in cardSectionFirstList\"\n          :key=\"idx\"\n          :title=\"item.title\"\n          :description=\"item.description\"\n          :icon=\"item.icon\"\n        />\n      </div>\n    </section>\n\n    <section class=\"w-full py-24\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full lg:w-1/2\">\n          <div>\n            <img\n              :src=\"landingImage1\"\n              alt=\"Landing Image 1\"\n              class=\"m-auto\"\n            >\n          </div>\n        </div>\n        <div class=\"w-full lg:w-1/2\">\n          <CardSectionSecond\n            title=\"Urgent fulfilment for time-critical projects\"\n            description=\"Pipesales marketplace assists in managing procurement shortfalls quickly and easily. Browse and find quality tubular products and accessories to your specifications, and Pipesales recognised trade partners will handle the order fulfilment, guaranteeing peace of mind.\"\n            labelAction1=\"How to Buy?\"\n            linkAction1=\"/\"\n            labelAction2=\"Browse Inventory\"\n            linkAction2=\"/\"\n          />\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-8\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full lg:w-1/2\">\n          <CardSectionSecond\n            title=\"Fair market rates for surplus inventory\"\n            description=\"Target zero inventory by moving surplus products through a trusted network supported by Marubeni-Itochu Steel Inc (MISI). Pipesales can provide you with pricing recommendations to arrive at a fair open market value, then connect you with potential buyers globally.\"\n            labelAction1=\"How to Buy?\"\n            linkAction1=\"/\"\n            labelAction2=\"Shell My Pipes\"\n            linkAction2=\"/\"\n          />\n        </div>\n        <div class=\"w-full lg:w-1/2\">\n          <div>\n            <img\n              :src=\"landingImage2\"\n              alt=\"Landing Image 1\"\n              class=\"m-auto\"\n            >\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-8\">\n      <div class=\"container mx-auto flex flex-col bg-gray-700 rounded-lg gap-4 p-16 py-24\">\n        <div class=\"mb-10\">\n          <div>\n            <span class=\"font-bold text-5xl text-white\">\n              Need more information?\n            </span>\n          </div>\n          <div>\n            <span class=\"font-bold text-5xl text-yellow-500\">\n              Contact Us\n            </span>\n          </div>\n        </div>\n\n        <form class=\"w-full\">\n          <div class=\"flex gap-4 flex-col lg:flex-row w-full\">\n            <div class=\"w-full lg:w-1/2\">\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"text\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Name*\"\n                >\n              </div>\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"text\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Country*\"\n                >\n              </div>\n              <div class=\"w-full flex gap-4 flex-col lg:flex-row\">\n                <div class=\"w-full lg:w-4/12\">\n                  <select\n                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  >\n                    <option selected>Country Code</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                  </select>\n                </div>\n                <div class=\"w-full lg:w-8/12\">\n                  <input\n                    type=\"text\"\n                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                    placeholder=\"Phone\"\n                  >\n                </div>\n              </div>\n            </div>\n            <div class=\"w-full lg:w-1/2\">\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"email\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Email*\"\n                >\n              </div>\n              <div class=\"w-full mb-5 inline-block\">\n                <textarea\n                  rows=\"4\"\n                  class=\"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500\"\n                  placeholder=\"Your Message\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"flex gap-4 w-full\">\n            <div class=\"flex justify-between w-full\">\n              <div class=\"flex items-center\">\n                <input\n                  id=\"aggre-check\"\n                  type=\"checkbox\"\n                  value=\"\"\n                  class=\"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2\"\n                >\n                <label\n                  for=\"aggre-check\"\n                  class=\"ml-2 text-sm font-medium text-white\"\n                >\n                  Stay updated wit our latest news\n                </label>\n              </div>\n\n              <div>\n                <button class=\"rounded-full bg-yellow-500 border border-yellow-500 px-24 py-2 text-white\">\n                  Send\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </section>\n\n    <TheFooter />\n  </div>\n</template>\n\n<script>\n/* eslint-disable max-len */\nimport { mapState } from 'vuex';\nimport { sleep } from '@utils/app';\n\nimport CardSectionFirst from '@components/Fragments/Home/CardSectionFirst';\nimport CardSectionSecond from '@components/Fragments/Home/CardSectionSecond';\n\nimport ProductServices from '@services/api/product';\n\nimport GlobeSvg from './../../../assets/svg/globe.svg';\nimport DollarSvg from './../../../assets/svg/dollar.svg';\nimport PipaSvg from './../../../assets/svg/pipa.svg';\n\nimport LandingImage1 from './../../../assets/images/landing-image-1.png';\nimport LandingImage2 from './../../../assets/images/landing-image-2.png';\n\nexport default {\n  components: {\n    CardSectionFirst,\n    CardSectionSecond\n  },\n  data () {\n    return {\n      cardSectionFirstList: [\n        {\n          id: 1,\n          title: 'Buy or sell globally, manage it locally',\n          description: 'Pipesales enables sellers to promote surplus inventory globally, opening buyers search horizons. We provide a secure and uncomplicated process, with both buyers and sellers enjoying the confidence of transaction management by their local Marubeni-Itochu Steel (MISI) network.',\n          icon: GlobeSvg\n        },\n        {\n          id: 1,\n          title: 'Supporting cost-effective inventory management',\n          description: 'Pipesales marketplace allows organisations of all sizes to quickly trade tubular products and accessories at a fair price. You can now keep costs in line with expectations and easily access or offload excess inventory.',\n          icon: DollarSvg\n        },\n        {\n          id: 1,\n          title: 'Large range of ready-made pipes fit for purpose',\n          description: 'Pipesales marketplace is home to a large range of quality Oil Country Tubular Goods (OCTG). Browse by product type, grade, size, connection and location. Be assured of suitable backup supplies to meet urgent demand.',\n          icon: PipaSvg\n        }\n      ],\n      landingImage1: LandingImage1,\n      landingImage2: LandingImage2\n    };\n  },\n  computed: {\n    ...mapState('app', {\n      filterOptionsProductType: (state) => state.filterOptionsProductType,\n      selectedFilterProductType: (state) => state.selectedFilterProductType,\n      filterOptionsSize: (state) => state.filterOptionsSize,\n      selectedFilterSize: (state) => state.selectedFilterSize,\n      filterOptionsGrade: (state) => state.filterOptionsGrade,\n      selectedFilterGrade: (state) => state.selectedFilterGrade,\n      filterOptionsConnection: (state) => state.filterOptionsConnection,\n      selectedFilterConnection: (state) => state.selectedFilterConnection\n    })\n  },\n  mounted () {\n    this.initialize();\n  },\n  methods: {\n    async getAllProduct () {\n      try {\n        let response = await ProductServices.getProducts();\n        return response;\n      }\n      catch (error) {\n        console.log(error);\n      }\n    },\n    filterData (data, paramFilter) {\n      let filterCriteria = paramFilter;\n\n      const applyFilter = (data, criteria) => {\n        if (!criteria) {\n          return data; \n        }\n        return data.filter((item) => {\n          for (const key in criteria) {\n            if (item[key] !== criteria[key]) {\n              return false;\n            }\n          }\n          return true;\n        });\n      };\n\n      const filteredData = applyFilter(data, filterCriteria);\n      const notFilteredData = data.filter((item) => !applyFilter([item], filterCriteria).length);\n      const modifiedNotFilteredData = notFilteredData.map((item) => {\n        return { ...item, qty: 0 };\n      });\n\n      const combinedData = [...filteredData, ...modifiedNotFilteredData];\n\n      return combinedData;\n    },\n    getDataProductType (data) {\n      const productTypeQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.product_type]) {\n          acc[curr.product_type] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.product_type] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const productTypeQtyArray = Object.keys(productTypeQtySum).map((productType) => ({\n        product_type: productType,\n        total_qty: productTypeQtySum[productType]\n      }));\n\n      return productTypeQtyArray;\n    },\n    getDataSize (data) {\n      const sizeQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.size]) {\n          acc[curr.size] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.size] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const sizeQtyArray = Object.keys(sizeQtySum).map((size) => ({\n        size,\n        total_qty: sizeQtySum[size]\n      }));\n\n      return sizeQtyArray;\n    },\n    getDataGrade (data) {\n      const gradeQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.grade]) {\n          acc[curr.grade] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.grade] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const gradeQtyArray = Object.keys(gradeQtySum).map((grade) => ({\n        grade,\n        total_qty: gradeQtySum[grade]\n      }));\n\n      return gradeQtyArray;\n    },\n    getDataConnection (data) {\n      const connectionQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.connection]) {\n          acc[curr.connection] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.connection] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const connectionQtyArray = Object.keys(connectionQtySum).map((connection) => ({\n        connection,\n        total_qty: connectionQtySum[connection]\n      }));\n\n      return connectionQtyArray;\n    },\n    async initialize (withLoader = false) {\n      if (withLoader) {\n        this.$eventBus.$emit('openLoaderFullPage');\n        await sleep(1000);\n      }\n\n      const res = await this.getAllProduct();\n      const body = {};\n\n      if (this.selectedFilterProductType !== '') {\n        Object.assign(body, {\n          product_type: this.selectedFilterProductType\n        });\n      }\n      if (this.selectedFilterSize !== '') {\n        Object.assign(body, {\n          size: this.selectedFilterSize\n        });\n      }\n      if (this.selectedFilterGrade !== '') {\n        Object.assign(body, {\n          grade: this.selectedFilterGrade\n        });\n      }\n      if (this.selectedFilterConnection !== '') {\n        Object.assign(body, {\n          connection: this.selectedFilterConnection\n        });\n      }\n\n      // ////////////////////////////////////////////////\n\n      const resFilterData = this.filterData(res, body);\n\n      // ////////////////////////////////////////////////\n      \n      const resDataProductType = this.getDataProductType(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsProductType', resDataProductType);\n\n      const resDatasSize = this.getDataSize(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsSize', resDatasSize);\n      \n      const resDataGrade = this.getDataGrade(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsGrade', resDataGrade);\n      \n      const resDataConnection = this.getDataConnection(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsConnection', resDataConnection);\n\n      if (withLoader) {\n        this.$eventBus.$emit('closeLoaderFullPage');\n      }\n    },\n    onHandleSelectdata (event) {\n      if (event.category === '1') {\n        this.$store.dispatch('app/setSelectedFilterProductType', event.data.product_type);\n      }\n      if (event.category === '2') {\n        this.$store.dispatch('app/setSelectedFilterSize', event.data.size);\n      }\n      if (event.category === '3') {\n        this.$store.dispatch('app/setSelectedFilterGrade', event.data.grade);\n      }\n      if (event.category === '4') {\n        this.$store.dispatch('app/setSelectedFilterConnection', event.data.connection);\n      }\n\n      this.initialize(true);\n    },\n    onHandleResetdata (event) {\n      if (event.category === '1') {\n        this.$store.dispatch('app/setSelectedFilterProductType', '');\n      }\n      if (event.category === '2') {\n        this.$store.dispatch('app/setSelectedFilterSize', '');\n      }\n      if (event.category === '3') {\n        this.$store.dispatch('app/setSelectedFilterGrade', '');\n      }\n      if (event.category === '4') {\n        this.$store.dispatch('app/setSelectedFilterConnection', '');\n      }\n\n      this.initialize(true);\n    },\n    onHandleFilterListItem (event) {\n      const valueSearch = new RegExp(event.value, 'i');\n\n      if (event.category === '1') {\n        const filtered = this.filterOptionsProductType.filter((item) => {\n          return valueSearch.test(item.product_type);\n        });\n\n        if (filtered.length > 0) {\n          this.$store.dispatch('app/setFilterOptionsProductType', filtered);\n        }\n      }\n      if (event.category === '2') {\n        const filtered = this.filterOptionsSize.filter((item) => {\n          return valueSearch.test(item.size);\n        });\n\n        if (filtered.length > 0) {\n          this.$store.dispatch('app/setFilterOptionsSize', filtered);\n        }\n      }\n      if (event.category === '3') {\n        const filtered = this.filterOptionsGrade.filter((item) => {\n          return valueSearch.test(item.grade);\n        });\n\n        if (filtered.length > 0) {\n          this.$store.dispatch('app/setFilterOptionsGrade', filtered);\n        }\n      }\n      if (event.category === '4') {\n        const filtered = this.filterOptionsConnection.filter((item) => {\n          return valueSearch.test(item.connection);\n        });\n\n        if (filtered.length > 0) {\n          this.$store.dispatch('app/setFilterOptionsConnection', filtered);\n        }\n      }\n      if (event.value === '') {\n        this.initialize();\n      }\n    }\n  }\n};\n</script>\n\n<style scoped>\n.globe {\n  background-image: url(https://pipesales.com/view2/image/header-background-2.png); \n  background-size: 1024px !important;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.wrapper-banner {\n  height: 450px;\n}\n</style>"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_23_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_style_index_0_id_ba258bd4_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_23_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_style_index_0_id_ba258bd4_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_23_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_style_index_0_id_ba258bd4_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoaderFullPage_vue_vue_type_template_id_ba258bd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoaderFullPage.vue?vue&type=template&id=ba258bd4 */ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=template&id=ba258bd4");
/* harmony import */ var _LoaderFullPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoaderFullPage.vue?vue&type=script&lang=js */ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=script&lang=js");
/* harmony import */ var _LoaderFullPage_vue_vue_type_style_index_0_id_ba258bd4_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss */ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoaderFullPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoaderFullPage_vue_vue_type_template_id_ba258bd4__WEBPACK_IMPORTED_MODULE_0__.render,
  _LoaderFullPage_vue_vue_type_template_id_ba258bd4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Common/SelectFilter/SelectFilter.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Common/SelectFilter/SelectFilter.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectFilter_vue_vue_type_template_id_78f771f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectFilter.vue?vue&type=template&id=78f771f6 */ "./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=template&id=78f771f6");
/* harmony import */ var _SelectFilter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectFilter.vue?vue&type=script&lang=js */ "./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SelectFilter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectFilter_vue_vue_type_template_id_78f771f6__WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectFilter_vue_vue_type_template_id_78f771f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Common/SelectFilter/SelectFilter.vue"
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

/***/ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderFullPage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFilter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectFilter.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFilter_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=template&id=ba258bd4":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=template&id=ba258bd4 ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_template_id_ba258bd4__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_template_id_ba258bd4__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_template_id_ba258bd4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderFullPage.vue?vue&type=template&id=ba258bd4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=template&id=ba258bd4");


/***/ }),

/***/ "./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=template&id=78f771f6":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=template&id=78f771f6 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFilter_vue_vue_type_template_id_78f771f6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFilter_vue_vue_type_template_id_78f771f6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectFilter_vue_vue_type_template_id_78f771f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectFilter.vue?vue&type=template&id=78f771f6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/SelectFilter/SelectFilter.vue?vue&type=template&id=78f771f6");


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

/***/ "./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_23_node_modules_vue_loader_lib_index_js_vue_loader_options_LoaderFullPage_vue_vue_type_style_index_0_id_ba258bd4_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-23!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Common/LoaderFullPage/LoaderFullPage.vue?vue&type=style&index=0&id=ba258bd4&lang=scss");


/***/ }),

/***/ "./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_097fa176_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/Home.vue?vue&type=style&index=0&id=097fa176&scoped=true&lang=css");


/***/ }),

/***/ "./resources/js/__mocks__/product.json":
/*!*********************************************!*\
  !*** ./resources/js/__mocks__/product.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"id":1,"code":"PS-11111","item_id":"1","qty":"283","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":2,"code":"PS-11711","item_id":"3","qty":"216","qty_unit":"Jts","country_name":"Australia","item_code":"40664893","item_desc":"Sandscreen 5 1/2\\", 17 PPF, JFE-13CR-80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":3,"code":"HJ-62226","item_id":"6","qty":"108","qty_unit":"Jts","country_name":"Belarus","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":4,"code":"PS-11161","item_id":"2","qty":"54","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":5,"code":"PS-48961","item_id":"11","qty":"181","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":6,"code":"PS-11112","item_id":"1","qty":"428","qty_unit":"Ea","country_name":"United States","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":7,"code":"PS-43211","item_id":"6","qty":"131","qty_unit":"Jts","country_name":"Japan","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":8,"code":"AU-17944","item_id":"5","qty":"500","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":9,"code":"AU-17944","item_id":"5","qty":"400","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":10,"code":"PS-11119","item_id":"3","qty":"26","qty_unit":"Jts","country_name":"United States","item_code":"40664893","item_desc":"Sandscreen 5 1/2\\", 17 PPF, JFE-13CR-80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":11,"code":"PS-12394","item_id":"11","qty":"251","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":12,"code":"AU-17944","item_id":"5","qty":"290","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":13,"code":"PS-11241","item_id":"4","qty":"407","qty_unit":"Jts","country_name":"Indonesia","item_code":"40044135","item_desc":"Sandscreen 5 1/2\\", 17 PPF, 13CRL80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":14,"code":"PS-11654","item_id":"7","qty":"418","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":15,"code":"DZ-81931","item_id":"6","qty":"50","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":16,"code":"FQ-88508","item_id":"5","qty":"150","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":17,"code":"YK-84064","item_id":"9","qty":"355","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":18,"code":"XD-30399","item_id":"5","qty":"300","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":19,"code":"GE-96619","item_id":"5","qty":"150","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":20,"code":"ZY-36184","item_id":"5","qty":"1000","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":21,"code":"EC-43962","item_id":"2","qty":"500","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":22,"code":"EC-43962","item_id":"2","qty":"400","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":23,"code":"PS-11135","item_id":"5","qty":"471","qty_unit":"Jts","country_name":"Japan","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":24,"code":"EC-43962","item_id":"2","qty":"390","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":25,"code":"WD-43844","item_id":"5","qty":"100","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":26,"code":"WD-43844","item_id":"5","qty":"999999","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":27,"code":"GE-96619","item_id":"5","qty":"50","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":28,"code":"ZY-36184","item_id":"5","qty":"999","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":29,"code":"OX-61619","item_id":"6","qty":"10","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":30,"code":"MZ-19149","item_id":"1","qty":"100","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":31,"code":"BN-60965","item_id":"6","qty":"100","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":32,"code":"OV-40892","item_id":"6","qty":"3","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":33,"code":"PH-12643","item_id":"2","qty":"24234","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":34,"code":"PS-11777","item_id":"5","qty":"328","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":35,"code":"MJ-83267","item_id":"6","qty":"22","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":36,"code":"FH-62364","item_id":"5","qty":"999999","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":37,"code":"RW-15384","item_id":"5","qty":"1000","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":38,"code":"MZ-35997","item_id":"6","qty":"10","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":39,"code":"GS-39709","item_id":"2","qty":"123","qty_unit":"Ea","country_name":"Algeria","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":40,"code":"WX-83226","item_id":"6","qty":"10","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":41,"code":"WX-83226","item_id":"6","qty":"8","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":42,"code":"CV-71485","item_id":"2","qty":"90","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":43,"code":"SL-52166","item_id":"2","qty":"90","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":44,"code":"TH-20472","item_id":"2","qty":"10","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":45,"code":"PS-43211","item_id":"6","qty":"139","qty_unit":"Jts","country_name":"Japan","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":46,"code":"TH-20472","item_id":"2","qty":"9","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":47,"code":"MJ-83267","item_id":"6","qty":"21","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":48,"code":"SL-52166","item_id":"2","qty":"89","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":49,"code":"XD-30399","item_id":"5","qty":"999999","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":50,"code":"PQ-29281","item_id":"9","qty":"1000","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":51,"code":"FM-21216","item_id":"10","qty":"1","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":52,"code":"TI-96354","item_id":"6","qty":"1025","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":53,"code":"GS-39709","item_id":"2","qty":"999999","qty_unit":"Ea","country_name":"Algeria","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":54,"code":"TH-20472","item_id":"2","qty":"8","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":55,"code":"PS-11261","item_id":"6","qty":"161","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":56,"code":"MG-39482","item_id":"9","qty":"9999","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":57,"code":"GJ-16224","item_id":"1","qty":"100","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":58,"code":"NT-85322","item_id":"13","qty":"12","qty_unit":"Ea","country_name":"Albania","item_code":"ACCS-0367","item_desc":"(Scrap) Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":59,"code":"XR-15874","item_id":"1","qty":"100","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":60,"code":"BM-16996","item_id":"6","qty":"120","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":61,"code":"WD-43844","item_id":"5","qty":"999989","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":62,"code":"RW-15384","item_id":"5","qty":"500","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":63,"code":"TO-20218","item_id":"5","qty":"3","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":64,"code":"JE-98657","item_id":"5","qty":"100","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":65,"code":"FH-62364","item_id":"5","qty":"999998","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":66,"code":"PS-45696","item_id":"6","qty":"325","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":67,"code":"CV-71485","item_id":"2","qty":"40","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":68,"code":"SL-52166","item_id":"2","qty":"39","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":69,"code":"PS-53671","item_id":"8","qty":"141","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":70,"code":"PS-11196","item_id":"7","qty":"274","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":71,"code":"XR-15874","item_id":"1","qty":"88","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":72,"code":"PS-11764","item_id":"9","qty":"230","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":73,"code":"CV-71485","item_id":"2","qty":"13","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":74,"code":"WC-49579","item_id":"2","qty":"20","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":75,"code":"YV-86355","item_id":"2","qty":"45","qty_unit":"Ea","country_name":"Andorra","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":76,"code":"CZ-18346","item_id":"6","qty":"11","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":77,"code":"PS-11681","item_id":"7","qty":"396","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":78,"code":"WZ-98464","item_id":"2","qty":"22","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":79,"code":"GY-40123","item_id":"3","qty":"34","qty_unit":"Jts","country_name":"Australia","item_code":"40664893","item_desc":"Sandscreen 5 1/2\\", 17 PPF, JFE-13CR-80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":80,"code":"GX-70576","item_id":"4","qty":"50","qty_unit":"Jts","country_name":"Australia","item_code":"40044135","item_desc":"Sandscreen 5 1/2\\", 17 PPF, 13CRL80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":81,"code":"IT-33606","item_id":"8","qty":"34","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0415","item_desc":"Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":82,"code":"YI-10945","item_id":"10","qty":"10","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":83,"code":"JU-78565","item_id":"11","qty":"23","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":84,"code":"RU-47098","item_id":"10","qty":"200","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":85,"code":"PS-00175","item_id":"11","qty":"3","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":86,"code":"PS-00144","item_id":"9","qty":"989","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":87,"code":"PS-00143","item_id":"5","qty":"9999","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":88,"code":"PS-11196","item_id":"7","qty":"286","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":89,"code":"PS-00179","item_id":"5","qty":"6999","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":90,"code":"BQ-39775","item_id":"4","qty":"9000","qty_unit":"Jts","country_name":"Indonesia","item_code":"40044135","item_desc":"Sandscreen 5 1/2\\", 17 PPF, 13CRL80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":91,"code":"LX-97941","item_id":"2","qty":"100","qty_unit":"Ea","country_name":"Canada","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":92,"code":"RA-42829","item_id":"5","qty":"200","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":93,"code":"TI-48047","item_id":"5","qty":"100","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":94,"code":"EO-29828","item_id":"11","qty":"901","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":95,"code":"FC-62934","item_id":"9","qty":"90","qty_unit":"Ea","country_name":"NULL","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":96,"code":"ES-25595","item_id":"4","qty":"150","qty_unit":"Jts","country_name":"Australia","item_code":"40044135","item_desc":"Sandscreen 5 1/2\\", 17 PPF, 13CRL80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":97,"code":"LH-19826","item_id":"13","qty":"NULL","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0367","item_desc":"(Scrap) Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":98,"code":"YC-78772","item_id":"2","qty":"12","qty_unit":"Ea","country_name":"Algeria","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":99,"code":"PS-11654","item_id":"7","qty":"498","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":100,"code":"MQ-74573","item_id":"6","qty":"9990","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":101,"code":"LB-18273","item_id":"4","qty":"2000","qty_unit":"Jts","country_name":"Brazil","item_code":"40044135","item_desc":"Sandscreen 5 1/2\\", 17 PPF, 13CRL80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":102,"code":"KP-60157","item_id":"5","qty":"2000","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":103,"code":"XJ-49426","item_id":"1","qty":"9000","qty_unit":"Ea","country_name":"Angola","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":104,"code":"PS-00183","item_id":"5","qty":"199","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":105,"code":"YB-22998","item_id":"5","qty":"2000","qty_unit":"Jts","country_name":"United States","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":106,"code":"HW-36438","item_id":"10","qty":"999000","qty_unit":"Ea","country_name":"Canada","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":107,"code":"PS-00182","item_id":"2","qty":"99","qty_unit":"Ea","country_name":"Canada","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":108,"code":"SI-82018","item_id":"13","qty":"1000","qty_unit":"Ea","country_name":"Canada","item_code":"ACCS-0367","item_desc":"(Scrap) Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":109,"code":"PS-00196","item_id":"10","qty":"998910","qty_unit":"Ea","country_name":"Canada","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":110,"code":"PS-11112","item_id":"1","qty":"440","qty_unit":"Ea","country_name":"United States","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":111,"code":"PS-14566","item_id":"7","qty":"478","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":112,"code":"SU-16200","item_id":"16","qty":"123","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0173","item_desc":"Coupling 4 1/2\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"4 1/2"},{"id":113,"code":"WV-36228","item_id":"16","qty":"5000","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0173","item_desc":"Coupling 4 1/2\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"4 1/2"},{"id":114,"code":"YP-46501","item_id":"18","qty":"5900","qty_unit":"Ea","country_name":"Japan","item_code":"ACCS-0223","item_desc":"Coupling 5 1/2\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"5 1/2"},{"id":115,"code":"WI-40632","item_id":"20","qty":"9000","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0238","item_desc":"Coupling 7\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"7"},{"id":116,"code":"QA-35438","item_id":"21","qty":"4803","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0190","item_desc":"Coupling 9 5/8\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"9 5/8"},{"id":117,"code":"MV-78992","item_id":"20","qty":"122","qty_unit":"Ea","country_name":"Bahrain","item_code":"ACCS-0238","item_desc":"Coupling 7\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"7"},{"id":118,"code":"IS-62197","item_id":"19","qty":"4000","qty_unit":"Ea","country_name":"Japan","item_code":"ACCS-0235","item_desc":"Coupling 5 1/2\\", P110, PSL1, BC","product_type":"Coupling","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":119,"code":"ZU-15287","item_id":"19","qty":"1000","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0235","item_desc":"Coupling 5 1/2\\", P110, PSL1, BC","product_type":"Coupling","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":120,"code":"PS-53671","item_id":"8","qty":"153","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":121,"code":"AD-74599","item_id":"2","qty":"200","qty_unit":"Ea","country_name":"United States","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":122,"code":"JA-99553","item_id":"15","qty":"200","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0140","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-13CR-95, JFEBEAR","product_type":"Coupling","grade":"JFE-13CR-95","connection":"Threaded & Coupled","size":"3 1/2"},{"id":123,"code":"PS-00202","item_id":"16","qty":"33","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0173","item_desc":"Coupling 4 1/2\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"4 1/2"},{"id":124,"code":"PS-00203","item_id":"16","qty":"4910","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0173","item_desc":"Coupling 4 1/2\\", K55, PSL1, BC","product_type":"Coupling","grade":"K55","connection":"Threaded & Coupled","size":"4 1/2"},{"id":125,"code":"PS-00150","item_id":"9","qty":"9989","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":126,"code":"KS-99289","item_id":"5","qty":"90","qty_unit":"Jts","country_name":"Indonesia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":127,"code":"YF-55835","item_id":"6","qty":"80","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":128,"code":"EG-53502","item_id":"6","qty":"1000","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":129,"code":"PS-11631","item_id":"8","qty":"346","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0415","item_desc":"Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":130,"code":"PS-00151","item_id":"1","qty":"99","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":131,"code":"DJ-51900","item_id":"2","qty":"900","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":132,"code":"PS-00221","item_id":"2","qty":"700","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":133,"code":"YM-24803","item_id":"22","qty":"1000","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0078","item_desc":"9 5/8\\", 47 PPF, P110, PSL1, BC, R3","product_type":"Sandscreen","grade":"P110","connection":"Threaded & Coupled","size":"9 5/8"},{"id":134,"code":"SO-82389","item_id":"23","qty":"500","qty_unit":"Jts","country_name":"United States","item_code":"OCTG-0079","item_desc":"9 5/8\\", 47 PPF, Q125, VAM TOP, R3","product_type":"Sandscreen","grade":"Q125","connection":"Threaded & Coupled","size":"9 5/8"},{"id":135,"code":"KA-60436","item_id":"24","qty":"2000","qty_unit":"Jts","country_name":"United Arab Emirates","item_code":"OCTG-0077","item_desc":"9 5/8\\", 53.5 PPF, 13CRL80, PSL1, BC, R3","product_type":"Sandscreen","grade":"L80-13Cr","connection":"Threaded & Coupled","size":"9 5/8"},{"id":136,"code":"MJ-59228","item_id":"25","qty":"800","qty_unit":"Jts","country_name":"United Kingdom","item_code":"OCTG-0076","item_desc":"9 5/8\\", 53.5 PPF, L80, PSL1, BC, R3","product_type":"Sandscreen","grade":"L80","connection":"Threaded & Coupled","size":"9 5/8"},{"id":137,"code":"WR-71606","item_id":"2","qty":"900","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":138,"code":"SQ-47000","item_id":"2","qty":"3400","qty_unit":"Ea","country_name":"Canada","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":139,"code":"PS-11436","item_id":"8","qty":"491","qty_unit":"Ea","country_name":"Japan","item_code":"ACCS-0415","item_desc":"Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":140,"code":"PS-00229","item_id":"2","qty":"2600","qty_unit":"Ea","country_name":"Canada","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":141,"code":"PS-00120","item_id":"2","qty":"300","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":142,"code":"PS-00113","item_id":"5","qty":"142","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":143,"code":"KX-16989","item_id":"2","qty":"1000","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":144,"code":"PS-00233","item_id":"2","qty":"900","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":145,"code":"KT-12808","item_id":"2","qty":"100","qty_unit":"Ea","country_name":"Argentina","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":146,"code":"XP-41874","item_id":"1","qty":"100","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":147,"code":"AJ-37000","item_id":"2","qty":"10","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":148,"code":"PS-76671","item_id":"9","qty":"165","qty_unit":"Ea","country_name":"Japan","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":149,"code":"IT-62865","item_id":"6","qty":"100","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":150,"code":"OP-35381","item_id":"6","qty":"100","qty_unit":"Jts","country_name":"Canada","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":151,"code":"GB-89323","item_id":"2","qty":"200","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":152,"code":"PS-00114","item_id":"9","qty":"343","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":153,"code":"HX-51116","item_id":"23","qty":"1000","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0079","item_desc":"9 5/8\\", 47 PPF, Q125, VAM TOP, R3","product_type":"Sandscreen","grade":"Q125","connection":"Threaded & Coupled","size":"9 5/8"},{"id":154,"code":"OT-33204","item_id":"17","qty":"100","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0141","item_desc":"Coupling 4 1/2\\", P110, PSL1, BC","product_type":"Coupling","grade":"P110","connection":"Threaded & Coupled","size":"4 1/2"},{"id":155,"code":"RC-27358","item_id":"1","qty":"2500","qty_unit":"Ea","country_name":"Papua new Guinea","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":156,"code":"YE-48112","item_id":"11","qty":"1000","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":157,"code":"PS-11764","item_id":"9","qty":"231","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":158,"code":"PH-74920","item_id":"1","qty":"10000","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":159,"code":"RI-35373","item_id":"6","qty":"20","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":160,"code":"FM-52103","item_id":"6","qty":"10","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":161,"code":"PS-00243","item_id":"2","qty":"100","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":162,"code":"EV-59108","item_id":"6","qty":"10","qty_unit":"Jts","country_name":"Australia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":163,"code":"PS-17557","item_id":"9","qty":"458","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":164,"code":"PS-85855","item_id":"9","qty":"462","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":165,"code":"PS-76767","item_id":"9","qty":"119","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":166,"code":"PS-19238","item_id":"10","qty":"387","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":167,"code":"PS-11141","item_id":"1","qty":"287","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":168,"code":"PS-13581","item_id":"10","qty":"253","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":169,"code":"PS-11359","item_id":"10","qty":"154","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":170,"code":"PS-24955","item_id":"10","qty":"318","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0367","item_desc":"Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":171,"code":"PS-85755","item_id":"11","qty":"485","qty_unit":"Ea","country_name":"Japan","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":172,"code":"PS-12394","item_id":"11","qty":"326","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":173,"code":"PS-12345","item_id":"11","qty":"383","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":174,"code":"PS-48961","item_id":"11","qty":"281","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":175,"code":"PS-96853","item_id":"11","qty":"305","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0415","item_desc":"(Scrap) Pup Joint 5 1/2\\", 23 PPF, P110, PSL1, JFEBEAR, PIN x BOX, 2 m","product_type":"Pup Joint","grade":"P110","connection":"Threaded & Coupled","size":"5 1/2"},{"id":176,"code":"PS-12395","item_id":"12","qty":"252","qty_unit":"Ea","country_name":"Australia","item_code":"ACCS-0361","item_desc":"(Scrap) Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":177,"code":"PS-45845","item_id":"12","qty":"394","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"(Scrap) Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":178,"code":"PS-11121","item_id":"1","qty":"285","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":179,"code":"PS-43253","item_id":"13","qty":"167","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0367","item_desc":"(Scrap) Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":180,"code":"PS-35756","item_id":"13","qty":"460","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0367","item_desc":"(Scrap) Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":181,"code":"PS-83218","item_id":"6","qty":"222","qty_unit":"Jts","country_name":"United States","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":182,"code":"PS-45845","item_id":"12","qty":"385","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"(Scrap) Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":183,"code":"PS-45845","item_id":"12","qty":"380","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"(Scrap) Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":184,"code":"PS-12111","item_id":"3","qty":"397","qty_unit":"Jts","country_name":"Japan","item_code":"40664893","item_desc":"Sandscreen 5 1/2\\", 17 PPF, JFE-13CR-80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":185,"code":"IO-18423","item_id":"1","qty":"100","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":186,"code":"IO-18423","item_id":"1","qty":"50","qty_unit":"Ea","country_name":"Australia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":187,"code":"PS-45696","item_id":"6","qty":"324","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":188,"code":"PS-11777","item_id":"5","qty":"288","qty_unit":"Jts","country_name":"Australia","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":189,"code":"PS-11161","item_id":"2","qty":"254","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0156","item_desc":"18 5/8\\", 87.5 PPF, K55, PSL1, BC, R3","product_type":"Casing","grade":"K55","connection":"Threaded & Coupled","size":"18 5/8"},{"id":190,"code":"PS-35756","item_id":"13","qty":"448","qty_unit":"Ea","country_name":"United States","item_code":"ACCS-0367","item_desc":"(Scrap) Coupling 9 5/8\\", 53.5 PPF, P110CY, , VAM 21","product_type":"Coupling","grade":"P110-ICY","connection":"Threaded & Coupled","size":"9 5/8"},{"id":191,"code":"PS-11135","item_id":"5","qty":"401","qty_unit":"Jts","country_name":"Japan","item_code":"I0858-320-3799","item_desc":"8 5/8\\", 32 PPF, N80-1, PSL1, BC, R3, (SC, SD)","product_type":"Casing","grade":"N80-1","connection":"Threaded & Coupled","size":"8 5/8"},{"id":192,"code":"PS-11711","item_id":"3","qty":"204","qty_unit":"Jts","country_name":"Australia","item_code":"40664893","item_desc":"Sandscreen 5 1/2\\", 17 PPF, JFE-13CR-80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":193,"code":"PS-14566","item_id":"7","qty":"444","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":194,"code":"PS-11111","item_id":"1","qty":"193","qty_unit":"Ea","country_name":"Indonesia","item_code":"OCTG-0134","item_desc":"30\\", 456.67 PPF, X56, PSL3, LYNX HDHT, R3","product_type":"Casing","grade":"API 5L X60","connection":"Conductor","size":"30"},{"id":195,"code":"PS-14566","item_id":"7","qty":"432","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0351","item_desc":"Pup Joint 13 3/8\\", 68 PPF, L80, PSL2, BC, PIN x PIN, 3 m","product_type":"Pup Joint","grade":"L80-1","connection":"Threaded & Coupled","size":"13 3/8"},{"id":196,"code":"PS-45845","item_id":"12","qty":"313","qty_unit":"Ea","country_name":"Indonesia","item_code":"ACCS-0361","item_desc":"(Scrap) Coupling 3 1/2\\", 9.2 PPF, JFE-HP2-13CR-110, JFEBEAR","product_type":"Coupling","grade":"JFE-HP2-13CR-110","connection":"Threaded & Coupled","size":"3 1/2"},{"id":197,"code":"PS-71111","item_id":"3","qty":"388","qty_unit":"Jts","country_name":"Indonesia","item_code":"40664893","item_desc":"Sandscreen 5 1/2\\", 17 PPF, JFE-13CR-80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"},{"id":198,"code":"LR-78191","item_id":"6","qty":"1000","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":199,"code":"CD-59803","item_id":"6","qty":"1000","qty_unit":"Jts","country_name":"Indonesia","item_code":"OCTG-0091","item_desc":"13 3/8\\", 68 PPF, N80-Q, PSL1, FOX, R3","product_type":"Casing","grade":"N80-Q","connection":"Threaded & Coupled","size":"13 3/8"},{"id":200,"code":"PS-12111","item_id":"3","qty":"407","qty_unit":"Jts","country_name":"Japan","item_code":"40664893","item_desc":"Sandscreen 5 1/2\\", 17 PPF, JFE-13CR-80, PSL1, JFEBEAR, R3","product_type":"Sandscreen","grade":"JFE-13CR-80","connection":"Threaded & Coupled","size":"5 1/2"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/styles/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9yZXNvdXJjZXMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbmZpZ3VyYXRpb25zL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbmZpZ3VyYXRpb25zL2V2ZW50LWJ1cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvZm9ydC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvaW5pdGlhbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbmZpZ3VyYXRpb25zL3BsdWdpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3JvdXRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3NlcnZpY2VzL2FwaS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdG9yZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9tb2R1bGVzL2FwcC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdG9yZXMvbW9kdWxlcy9hcHAvZ2V0dGVycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc3RvcmVzL21vZHVsZXMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdG9yZXMvbW9kdWxlcy9hcHAvbXV0YXRpb25zLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdG9yZXMvbW9kdWxlcy9hcHAvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3V0aWxzL2FwcC5qcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlckZ1bGxQYWdlL0xvYWRlckZ1bGxQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlci9TZWxlY3RGaWx0ZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvbkZpcnN0L0NhcmRTZWN0aW9uRmlyc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbi9UaGVOYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlckZ1bGxQYWdlL0xvYWRlckZ1bGxQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vU2VsZWN0RmlsdGVyL1NlbGVjdEZpbHRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlTm90Rm91bmQvUGFnZU5vdEZvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbi9UaGVOYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQWJvdXQvQWJvdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkZXJGdWxsUGFnZS9Mb2FkZXJGdWxsUGFnZS52dWU/Mzk4NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZT8wYmU2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9waXBlc2FsZXMuc3ZnIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc3ZnL2RvbGxhci5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zdmcvZ2xvYmUuc3ZnIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc3ZnL3BpcGEuc3ZnIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlckZ1bGxQYWdlL0xvYWRlckZ1bGxQYWdlLnZ1ZT81ZDA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlP2U5MjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0FwcC52dWU/ZGNjMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vTG9hZGVyRnVsbFBhZ2UvTG9hZGVyRnVsbFBhZ2UudnVlP2YzNzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlci9TZWxlY3RGaWx0ZXIudnVlPzBkNjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT82NjlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT82NjliIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvUGFnZU5vdEZvdW5kL1BhZ2VOb3RGb3VuZC52dWU/M2IyNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlPzUyMzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlPzZmMzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fib3V0L0Fib3V0LnZ1ZT9mNjQ0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlP2JkYmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlckZ1bGxQYWdlL0xvYWRlckZ1bGxQYWdlLnZ1ZT80NDNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbi9TZWxlY3RGaWx0ZXIvU2VsZWN0RmlsdGVyLnZ1ZT81NGU2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QvQ2FyZFNlY3Rpb25GaXJzdC52dWU/ZmE1NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWU/Y2MwZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlPzEwMWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlPzhjZWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWU/NjQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVycyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZXMnO1xuaW1wb3J0ICcuL2NvbmZpZ3VyYXRpb25zJztcbmltcG9ydCAnQHN0eWxlcy9hcHAuc2Nzcyc7XG5cbm5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICByb3V0ZXI6IHJvdXRlcixcbiAgc3RvcmVcbn0pOyIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk1JWF9BUFBfVVJMO1xud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJztcblxuLy8gd2luZG93LlB1c2hlciA9IHJlcXVpcmUoJ3B1c2hlci1qcycpO1xuXG4vLyB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbi8vICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4vLyAgICAga2V5OiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9LRVksXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBmb3JjZVRMUzogdHJ1ZVxuLy8gfSk7XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnQHJvb3QvQXBwLnZ1ZSc7XG5cbmltcG9ydCBUaGVOYXZpZ2F0aW9uIGZyb20gJ0Bjb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbic7XG5pbXBvcnQgVGhlRm9vdGVyIGZyb20gJ0Bjb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyJztcblxuaW1wb3J0IExvYWRlckZ1bGxQYWdlIGZyb20gJ0Bjb21wb25lbnRzL0NvbW1vbi9Mb2FkZXJGdWxsUGFnZSc7XG5pbXBvcnQgU2VsZWN0RmlsdGVyIGZyb20gJ0Bjb21wb25lbnRzL0NvbW1vbi9TZWxlY3RGaWx0ZXInO1xuXG5WdWUuY29tcG9uZW50KCdBcHAnLCBBcHApO1xuVnVlLmNvbXBvbmVudCgnVGhlTmF2aWdhdGlvbicsIFRoZU5hdmlnYXRpb24pO1xuVnVlLmNvbXBvbmVudCgnVGhlRm9vdGVyJywgVGhlRm9vdGVyKTtcblZ1ZS5jb21wb25lbnQoJ0xvYWRlckZ1bGxQYWdlJywgTG9hZGVyRnVsbFBhZ2UpO1xuVnVlLmNvbXBvbmVudCgnU2VsZWN0RmlsdGVyJywgU2VsZWN0RmlsdGVyKTsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBjb25zdCBFdmVudEJ1cyA9IG5ldyBWdWUoKTsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhYiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJztcblxuZXhwb3J0IGNvbnN0IGFkZCA9IGxpYnJhcnkuYWRkO1xuXG5saWJyYXJ5LmFkZChmYXMpO1xubGlicmFyeS5hZGQoZmFiKTtcbmxpYnJhcnkuYWRkKGZhcik7XG5cblZ1ZS5jb21wb25lbnQoJ0ZvbnRBd2Vzb21lSWNvbicsIEZvbnRBd2Vzb21lSWNvbik7XG5cbmV4cG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9O1xuIiwiaW1wb3J0ICcuL2luaXRpYWxpemVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzJztcbmltcG9ydCAnLi9wbHVnaW5zJztcbmltcG9ydCAnLi9mb3J0LWF3ZXNvbWUnO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5pbXBvcnQgeyBFdmVudEJ1cyB9IGZyb20gJ0Bjb25maWd1cmF0aW9ucy9ldmVudC1idXMnO1xuXG4oKGkpID0+IHtcbiAgaS5wcm90b3R5cGUuJGFwaSA9IHt9O1xuICBpLnByb3RvdHlwZS4kZXZlbnRCdXMgPSBFdmVudEJ1cztcbn0pKFZ1ZSk7XG4iLCIvLyBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9QYWdlTm90Rm91bmQnO1xuaW1wb3J0IEhvbWUgZnJvbSAnQHBhZ2VzL0hvbWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJ0BwYWdlcy9BYm91dCc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBuYW1lOiAnQWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvOnBhdGhNYXRjaCguKikqJyxcbiAgICBuYW1lOiAnUGFnZSBOb3QgRm91bmQnLFxuICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kXG4gIH1cbl07XG5cblZ1ZS51c2UoVnVlUm91dGVyKTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIG1vZGU6ICdoaXN0b3J5JyxcbiAgcm91dGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiLy8gaW1wb3J0IGh0dHAgZnJvbSAnQHNlcnZpY2VzL2h0dHAnO1xuXG5pbXBvcnQgbW9ja1Byb2R1Y3QgZnJvbSAnLi8uLi8uLi9fX21vY2tzX18vcHJvZHVjdC5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXRQcm9kdWN0czogKCkgPT4ge1xuICAgIHJldHVybiBtb2NrUHJvZHVjdDtcbiAgfVxufTsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcblxuaW1wb3J0IGFwcCBmcm9tICcuL21vZHVsZXMvYXBwJztcblxuVnVlLnVzZShWdWV4KTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiB7XG4gICAgYXBwXG4gIH1cbn0pO1xuIiwiY29uc3QgYWN0aW9ucyA9IHtcbiAgc2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfRklMVEVSX09QVElPTlNfUFJPRFVDVF9UWVBFJywgZGF0YSk7XG4gIH0sXG4gIHNldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUgKHsgY29tbWl0IH0sIGRhdGEpIHtcbiAgICBjb21taXQoJ1NFVF9TRUxFQ1RFRF9GSUxURVJfUFJPRFVDVF9UWVBFJywgZGF0YSk7XG4gIH0sXG4gIHNldEZpbHRlck9wdGlvbnNTaXplICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfRklMVEVSX09QVElPTlNfU0laRScsIGRhdGEpO1xuICB9LFxuICBzZXRTZWxlY3RlZEZpbHRlclNpemUgKHsgY29tbWl0IH0sIGRhdGEpIHtcbiAgICBjb21taXQoJ1NFVF9TRUxFQ1RFRF9GSUxURVJfU0laRScsIGRhdGEpO1xuICB9LFxuICBzZXRGaWx0ZXJPcHRpb25zR3JhZGUgKHsgY29tbWl0IH0sIGRhdGEpIHtcbiAgICBjb21taXQoJ1NFVF9GSUxURVJfT1BUSU9OU19HUkFERScsIGRhdGEpO1xuICB9LFxuICBzZXRTZWxlY3RlZEZpbHRlckdyYWRlICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfU0VMRUNURURfRklMVEVSX0dSQURFJywgZGF0YSk7XG4gIH0sXG4gIHNldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfRklMVEVSX09QVElPTlNfQ09OTkVDVElPTicsIGRhdGEpO1xuICB9LFxuICBzZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24gKHsgY29tbWl0IH0sIGRhdGEpIHtcbiAgICBjb21taXQoJ1NFVF9TRUxFQ1RFRF9GSUxURVJfQ09OTkVDVElPTicsIGRhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zOyIsImNvbnN0IGdldHRlcnMgPSB7XG4gIGdldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlO1xuICB9LFxuICBnZXRTZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5zZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlO1xuICB9LFxuICBnZXRGaWx0ZXJPcHRpb25zU2l6ZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyT3B0aW9uc1NpemU7XG4gIH0sXG4gIGdldFNlbGVjdGVkRmlsdGVyU2l6ZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJTaXplO1xuICB9LFxuICBnZXRGaWx0ZXJPcHRpb25zR3JhZGUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlck9wdGlvbnNHcmFkZTtcbiAgfSxcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJHcmFkZTtcbiAgfSxcbiAgZ2V0RmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlck9wdGlvbnNDb25uZWN0aW9uO1xuICB9LFxuICBnZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0dGVyczsiLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgZ2V0dGVycyBmcm9tICcuL2dldHRlcnMnO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBtdXRhdGlvbnMgZnJvbSAnLi9tdXRhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlLFxuICBnZXR0ZXJzLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnNcbn07XG4iLCJjb25zdCBtdXRhdGlvbnMgPSB7XG4gIFNFVF9GSUxURVJfT1BUSU9OU19QUk9EVUNUX1RZUEUgKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlID0gcGF5bG9hZDtcbiAgfSxcbiAgU0VUX1NFTEVDVEVEX0ZJTFRFUl9QUk9EVUNUX1RZUEUgKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSA9IHBheWxvYWQ7XG4gIH0sXG4gIFNFVF9GSUxURVJfT1BUSU9OU19TSVpFIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLmZpbHRlck9wdGlvbnNTaXplID0gcGF5bG9hZDtcbiAgfSxcbiAgU0VUX1NFTEVDVEVEX0ZJTFRFUl9TSVpFIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNlbGVjdGVkRmlsdGVyU2l6ZSA9IHBheWxvYWQ7XG4gIH0sXG4gIFNFVF9GSUxURVJfT1BUSU9OU19HUkFERSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5maWx0ZXJPcHRpb25zR3JhZGUgPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfU0VMRUNURURfRklMVEVSX0dSQURFIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNlbGVjdGVkRmlsdGVyR3JhZGUgPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfRklMVEVSX09QVElPTlNfQ09OTkVDVElPTiAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5maWx0ZXJPcHRpb25zQ29ubmVjdGlvbiA9IHBheWxvYWQ7XG4gIH0sXG4gIFNFVF9TRUxFQ1RFRF9GSUxURVJfQ09OTkVDVElPTiAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24gPSBwYXlsb2FkO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtdXRhdGlvbnM7IiwiLyoqIGVzbGludC1kaXNhYmxlICovXG5jb25zdCBzdGF0ZSA9IHtcbiAgZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlOiBbXSxcbiAgc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZTogJycsXG4gIGZpbHRlck9wdGlvbnNTaXplOiBbXSxcbiAgc2VsZWN0ZWRGaWx0ZXJTaXplOiAnJyxcbiAgZmlsdGVyT3B0aW9uc0dyYWRlOiBbXSxcbiAgc2VsZWN0ZWRGaWx0ZXJHcmFkZTogJycsXG4gIGZpbHRlck9wdGlvbnNDb25uZWN0aW9uOiBbXSxcbiAgc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uOiAnJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7IiwiZnVuY3Rpb24gZm9ybWF0ZWROdW1iZXIgKG51bWJlciwgZm9ybWF0ID0gJy4nKSB7XG4gIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9IG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIGZvcm1hdCk7XG4gIHJldHVybiBmb3JtYXR0ZWROdW1iZXI7XG59XG5cbmNvbnN0IHNsZWVwID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbn0pO1xuXG5leHBvcnQge1xuICBmb3JtYXRlZE51bWJlcixcbiAgc2xlZXBcbn07IiwiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgdi1pZj1cInNob3dMb2FkZXJcIlxuICAgIGNsYXNzPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgdy1mdWxsIGgtc2NyZWVuIHotNTAgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsYWNrIG9wYWNpdHktNjAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImxkcy1yaXBwbGVcIj5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxkaXYgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd0xvYWRlcjogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuJGV2ZW50QnVzLiRvbignb3BlbkxvYWRlckZ1bGxQYWdlJywgdGhpcy5vbkhhbmRsZU9wZW4pO1xuICAgIHRoaXMuJGV2ZW50QnVzLiRvbignY2xvc2VMb2FkZXJGdWxsUGFnZScsIHRoaXMub25IYW5kbGVDbG9zZSk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uSGFuZGxlT3BlbiAoKSB7XG4gICAgICB0aGlzLnNob3dMb2FkZXIgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvbkhhbmRsZUNsb3NlICgpIHtcbiAgICAgIHRoaXMuc2hvd0xvYWRlciA9IGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5sZHMtcmlwcGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5sZHMtcmlwcGxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcbn1cblxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5cbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XG4gIDAlIHtcbiAgICB0b3A6IDM2cHg7XG4gICAgbGVmdDogMzZweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbjwvc3R5bGU+IiwiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIHZ1ZS9uby12LWh0bWwgLS0+XG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJ3LWZ1bGwgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktNTAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy13aGl0ZSBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNCBweS01IGl0ZW1zLWNlbnRlclwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgICAgICBAY2xpY2s9XCJvbkhhbmRsZVZpc2libGVEcm9wZG93blwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuPnt7IHRpdGxlIH19IDwvc3Bhbj5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LXllbGxvdy02MDBcIlxuICAgICAgICAgIDppY29uPVwiKHZpc2libGVEcm9wZG93biA/ICdjaGV2cm9uLXVwJyA6ICdjaGV2cm9uLWRvd24nKVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzZWxlY3RlZFZhbHVlICE9PSAnJ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIEBjbGljaz1cIm9uQ2xpY2tSZXNldEZpbHRlcihjYXRlZ29yeSlcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQteWVsbG93LTYwMFwiPlxuICAgICAgICAgICAgICB7eyBzZWxlY3RlZFZhbHVlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgaWNvbj1cInRpbWVzLWNpcmNsZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQteWVsbG93LTYwMCB1cHBlcmNhc2VcIj5cbiAgICAgICAgICAgIEFsbFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuXG4gICAgPGRpdlxuICAgICAgdi1zaG93PVwidmlzaWJsZURyb3Bkb3duXCJcbiAgICAgIGNsYXNzPVwidy1mdWxsIG10LTIgei0xMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwicC0zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIiB2LWh0bWw9XCJjb21wdXRlVGl0bGVMaXN0KHRpdGxlKVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dC1ncm91cC1zZWFyY2hcIiBjbGFzcz1cInNyLW9ubHlcIj5cbiAgICAgICAgICBTZWFyY2hcbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgaW5zZXQteS0wIHJ0bDppbnNldC1yLTAgc3RhcnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwcy0zIHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICBpY29uPVwic2VhcmNoXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoVmFsdWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJibG9jayB3LWZ1bGwgcC0yIHBsLTYgcHMtMTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy13aGl0ZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICBAa2V5dXA9XCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bCBjbGFzcz1cImgtNDggcHgtMyBwYi0zIG92ZXJmbG93LXktYXV0byB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgPGxpXG4gICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaSkgaW4gb3B0aW9uc1wiXG4gICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHktMiBweC0zIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIEBjbGljaz1cIm9uSGFuZGxlU2VsZWN0SXRlbShjYXRlZ29yeSwgaXRlbSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJjYXRlZ29yeSA9PT0gJzEnXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0ucHJvZHVjdF90eXBlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2F0ZWdvcnkgPT09ICcyJ1wiPlxuICAgICAgICAgICAgICB7eyBpdGVtLnNpemUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJjYXRlZ29yeSA9PT0gJzMnXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZ3JhZGUgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJjYXRlZ29yeSA9PT0gJzQnXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0uY29ubmVjdGlvbiB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAge3sgY29tcHV0ZUZvcm1hdFF0eShpdGVtLnRvdGFsX3F0eSkgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGZvcm1hdGVkTnVtYmVyIH0gZnJvbSAnQHV0aWxzL2FwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBjYXRlZ29yeToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgc2VsZWN0ZWRWYWx1ZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKFtdKVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc2libGVEcm9wZG93bjogZmFsc2UsXG4gICAgICBzZWFyY2hWYWx1ZTogJycsXG4gICAgICBkZWJvdW5jZTogbnVsbFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuJGV2ZW50QnVzLiRvbignY2xvc2VTZWxlY3RGaWx0ZXInLCAoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGVEcm9wZG93biA9IGZhbHNlO1xuICAgIH0pO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25IYW5kbGVWaXNpYmxlRHJvcGRvd24gKCkge1xuICAgICAgaWYgKCF0aGlzLnZpc2libGVEcm9wZG93bikge1xuICAgICAgICB0aGlzLiRldmVudEJ1cy4kZW1pdCgnY2xvc2VTZWxlY3RGaWx0ZXInKTtcbiAgICAgICAgdGhpcy52aXNpYmxlRHJvcGRvd24gPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMudmlzaWJsZURyb3Bkb3duID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrUmVzZXRGaWx0ZXIgKGNhdGVnb3J5KSB7XG4gICAgICB0aGlzLiRlbWl0KCdvblJlc2V0RGF0YScsIHtcbiAgICAgICAgY2F0ZWdvcnlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnZpc2libGVEcm9wZG93biA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29tcHV0ZVRpdGxlTGlzdCAodHlwZSkge1xuICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ1Byb2R1Y3QgVHlwZScpIHtcbiAgICAgICAgcmVzdWx0ID0gJ1NlbGVjdCBhIDxzdHJvbmc+UHJvZHVjdCBUeXBlPC9zdHJvbmc+IGJlbG93JztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnU2l6ZScpIHtcbiAgICAgICAgcmVzdWx0ID0gJ1NlbGVjdCBhbiA8c3Ryb25nPk9EPC9zdHJvbmc+IGJlbG93JztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnR3JhZGUnKSB7XG4gICAgICAgIHJlc3VsdCA9ICdTZWxlY3QgYSA8c3Ryb25nPkdyYWRlIFR5cGU8L3N0cm9uZz4gYmVsb3cnO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09ICdDb25uZWN0aW9uJykge1xuICAgICAgICByZXN1bHQgPSAnU2VsZWN0IGEgPHN0cm9uZz5Db25uZWN0aW9uIFR5cGU8L3N0cm9uZz4gYmVsb3cnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgY29tcHV0ZUZvcm1hdFF0eSAocGFyYW0pIHtcbiAgICAgIHJldHVybiBmb3JtYXRlZE51bWJlcihwYXJhbSk7XG4gICAgfSxcbiAgICBvbkhhbmRsZVNlbGVjdEl0ZW0gKGNhdGVnb3J5LCBkYXRhKSB7XG4gICAgICB0aGlzLiRlbWl0KCdvblNlbGVjdERhdGEnLCB7XG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBkYXRhXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5vbkhhbmRsZVZpc2libGVEcm9wZG93bigpO1xuICAgIH0sXG4gICAgb25IYW5kbGVGaWx0ZXJMaXN0SXRlbSAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZSk7XG4gICAgICB0aGlzLmRlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5O1xuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2ZpbHRlckxpc3RJdGVtJywge1xuICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGltZ1xuICAgICAgICA6c3JjPVwiaWNvblwiXG4gICAgICAgIGFsdD1cIkljb25cIlxuICAgICAgICBjbGFzcz1cIm0tYXV0b1wiXG4gICAgICA+XG4gICAgPC9kaXY+XG4gICAgPGgyIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtMnhsIHRleHQtZ3JheS03MDAgbWItM1wiPlxuICAgICAge3sgdGl0bGUgfX1cbiAgICA8L2gyPlxuICAgIDxwIGNsYXNzPVwidGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIj5cbiAgICAgIHt7IGRlc2NyaXB0aW9uIH19XG4gICAgPC9wPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgPGgyIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtYmFzZSBsZzp0ZXh0LTR4bCB0ZXh0LWdyYXktNjAwIG1iLTRcIj5cbiAgICAgIHt7IHRpdGxlIH19XG4gICAgPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtbGcgdGV4dC1ncmF5LTUwMCBtYi01XCI+XG4gICAgICB7eyBkZXNjcmlwdGlvbiB9fVxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNFwiPlxuICAgICAgPHJvdXRlci1saW5rIDp0bz1cImxpbmtBY3Rpb24xXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC04IHB5LTJcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC15ZWxsb3ctNTAwXCJcbiAgICAgICAgICAgIGljb249XCJpbmZvLWNpcmNsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7eyBsYWJlbEFjdGlvbjEgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPHJvdXRlci1saW5rIDp0bz1cImxpbmtBY3Rpb24yXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgcHgtOCBweS0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7eyBsYWJlbEFjdGlvbjIgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGxhYmVsQWN0aW9uMToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGxpbmtBY3Rpb24xOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgbGFiZWxBY3Rpb24yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgbGlua0FjdGlvbjI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8bmF2IGNsYXNzPVwidy1mdWxsIGJnLXdoaXRlIHB5LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwibXQtMlwiPlxuICAgICAgICAgIDxpbWcgOnNyYz1cImxvZ29cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMlwiPlxuICAgICAgICAgIFBpcGVzYWxlcyAmY29weTsge3sgeWVhciB9fSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBDb29raWUgUG9saWN5XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBDb29raWUgU2V0dGluZ3NcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiPlxuICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBsb2dvUGlwZXMgZnJvbSAnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BpcGVzYWxlcy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dvOiBsb2dvUGlwZXMsXG4gICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8bmF2IGNsYXNzPVwidy1mdWxsIGJnLXdoaXRlIHB5LTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtLWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwibXQtMlwiPlxuICAgICAgICAgIDxpbWcgOnNyYz1cImxvZ29cIiBhbHQ9XCJcIj5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiXG4gICAgICAgICAgICBpY29uPVwia2V5XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMiBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBMb2dpblxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL3NpZ24tdXBcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCJcbiAgICAgICAgICAgIGljb249XCJ1c2VyLXBsdXNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCI+XG4gICAgICAgICAgQWJvdXQgUGlwZXNhbGVzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiPlxuICAgICAgICAgIE9DVEcgTWFya2V0cGxhY2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCI+XG4gICAgICAgICAgQmxvZ1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLWdyYXktNjAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtOFwiPlxuICAgICAgICAgIFNoZWxsIE15IFBpcGVzXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICBpY29uPVwiaGVhcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIFdpc2hsaXN0XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgaWNvbj1cInNob3BwaW5nLWNhcnRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIE15IEVucXVpcnlcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICBpY29uPVwibWVkYWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIENvbXBhcmVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBsb2dvUGlwZXMgZnJvbSAnLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BpcGVzYWxlcy5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dvOiBsb2dvUGlwZXNcbiAgICB9O1xuICB9XG59O1xuPC9zY3JpcHQ+IiwiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgPFRoZU5hdmlnYXRpb24gLz5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBiZy1jZW50ZXIgYmctY292ZXIgYmctZ3JheS03MDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJnbG9iZVwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gei0yMCB3cmFwcGVyLWJhbm5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL3dlYnAvdG9taS1mdWxsLndlYnBcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBweC00IG14LWF1dG8gbXQtNDRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIGdsb2JhbCBtYXJrZXRwbGFjZSB0b1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcIj5cbiAgICAgICAgICAgICAgICAgIGJ1eSAmIHNlbGwgdHVidWxhciBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYXgtdy0zeGwgbXgtYXV0byBtYi0xMCB0ZXh0LWxnIHRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIFF1aWNrbHkgb3ZlcmNvbWUgc3VwcGx5IGdhcHMgYW5kIHRhcmdldCB6ZXJvIGludmVudG9yeSB3aXRoIFBpcGVzYWxlcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgLW10LTggei0xMCBvdmVmbG93LWhpZGRlbiBoLTI4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT1cIjFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJvZHVjdCBUeXBlXCJcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cInNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGVcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlXCJcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBmaWx0ZXJMaXN0SXRlbT1cIm9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT1cIjJcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU2l6ZVwiXG4gICAgICAgICAgICAgICAgOnNlbGVjdGVkVmFsdWU9XCJzZWxlY3RlZEZpbHRlclNpemVcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZmlsdGVyT3B0aW9uc1NpemVcIlxuICAgICAgICAgICAgICAgIEBvblNlbGVjdERhdGE9XCJvbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgQG9uUmVzZXREYXRhPVwib25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgQGZpbHRlckxpc3RJdGVtPVwib25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PVwiM1wiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJHcmFkZVwiXG4gICAgICAgICAgICAgICAgOnNlbGVjdGVkVmFsdWU9XCJzZWxlY3RlZEZpbHRlckdyYWRlXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpbHRlck9wdGlvbnNHcmFkZVwiXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cIm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAb25SZXNldERhdGE9XCJvbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAZmlsdGVyTGlzdEl0ZW09XCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XCI0XCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbm5lY3Rpb25cIlxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVwic2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpbHRlck9wdGlvbnNDb25uZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBmaWx0ZXJMaXN0SXRlbT1cIm9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBweS0yNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPENhcmRTZWN0aW9uRmlyc3RcbiAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpZHgpIGluIGNhcmRTZWN0aW9uRmlyc3RMaXN0XCJcbiAgICAgICAgICA6a2V5PVwiaWR4XCJcbiAgICAgICAgICA6dGl0bGU9XCJpdGVtLnRpdGxlXCJcbiAgICAgICAgICA6ZGVzY3JpcHRpb249XCJpdGVtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICA6aWNvbj1cIml0ZW0uaWNvblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBweS0yNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIDpzcmM9XCJsYW5kaW5nSW1hZ2UxXCJcbiAgICAgICAgICAgICAgYWx0PVwiTGFuZGluZyBJbWFnZSAxXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtLWF1dG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxuICAgICAgICAgICAgdGl0bGU9XCJVcmdlbnQgZnVsZmlsbWVudCBmb3IgdGltZS1jcml0aWNhbCBwcm9qZWN0c1wiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBpcGVzYWxlcyBtYXJrZXRwbGFjZSBhc3Npc3RzIGluIG1hbmFnaW5nIHByb2N1cmVtZW50IHNob3J0ZmFsbHMgcXVpY2tseSBhbmQgZWFzaWx5LiBCcm93c2UgYW5kIGZpbmQgcXVhbGl0eSB0dWJ1bGFyIHByb2R1Y3RzIGFuZCBhY2Nlc3NvcmllcyB0byB5b3VyIHNwZWNpZmljYXRpb25zLCBhbmQgUGlwZXNhbGVzIHJlY29nbmlzZWQgdHJhZGUgcGFydG5lcnMgd2lsbCBoYW5kbGUgdGhlIG9yZGVyIGZ1bGZpbG1lbnQsIGd1YXJhbnRlZWluZyBwZWFjZSBvZiBtaW5kLlwiXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjE9XCJIb3cgdG8gQnV5P1wiXG4gICAgICAgICAgICBsaW5rQWN0aW9uMT1cIi9cIlxuICAgICAgICAgICAgbGFiZWxBY3Rpb24yPVwiQnJvd3NlIEludmVudG9yeVwiXG4gICAgICAgICAgICBsaW5rQWN0aW9uMj1cIi9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxuICAgICAgICAgICAgdGl0bGU9XCJGYWlyIG1hcmtldCByYXRlcyBmb3Igc3VycGx1cyBpbnZlbnRvcnlcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUYXJnZXQgemVybyBpbnZlbnRvcnkgYnkgbW92aW5nIHN1cnBsdXMgcHJvZHVjdHMgdGhyb3VnaCBhIHRydXN0ZWQgbmV0d29yayBzdXBwb3J0ZWQgYnkgTWFydWJlbmktSXRvY2h1IFN0ZWVsIEluYyAoTUlTSSkuIFBpcGVzYWxlcyBjYW4gcHJvdmlkZSB5b3Ugd2l0aCBwcmljaW5nIHJlY29tbWVuZGF0aW9ucyB0byBhcnJpdmUgYXQgYSBmYWlyIG9wZW4gbWFya2V0IHZhbHVlLCB0aGVuIGNvbm5lY3QgeW91IHdpdGggcG90ZW50aWFsIGJ1eWVycyBnbG9iYWxseS5cIlxuICAgICAgICAgICAgbGFiZWxBY3Rpb24xPVwiSG93IHRvIEJ1eT9cIlxuICAgICAgICAgICAgbGlua0FjdGlvbjE9XCIvXCJcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMj1cIlNoZWxsIE15IFBpcGVzXCJcbiAgICAgICAgICAgIGxpbmtBY3Rpb24yPVwiL1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICA6c3JjPVwibGFuZGluZ0ltYWdlMlwiXG4gICAgICAgICAgICAgIGFsdD1cIkxhbmRpbmcgSW1hZ2UgMVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibS1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBweS04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGdhcC00IHAtMTYgcHktMjRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTEwXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQtNXhsIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgTmVlZCBtb3JlIGluZm9ybWF0aW9uP1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lKlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ291bnRyeSpcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy00LzEyXCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Q291bnRyeSBDb2RlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItXCI+LTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLVwiPi08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi1cIj4tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItXCI+LTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTgvMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwqXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJsb2NrIHAtMi41IHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgdy1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJhZ2dyZS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGZvcj1cImFnZ3JlLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN0YXkgdXBkYXRlZCB3aXQgb3VyIGxhdGVzdCBuZXdzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTI0IHB5LTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgU2VuZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8VGhlRm9vdGVyIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJ0B1dGlscy9hcHAnO1xuXG5pbXBvcnQgQ2FyZFNlY3Rpb25GaXJzdCBmcm9tICdAY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvbkZpcnN0JztcbmltcG9ydCBDYXJkU2VjdGlvblNlY29uZCBmcm9tICdAY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZCc7XG5cbmltcG9ydCBQcm9kdWN0U2VydmljZXMgZnJvbSAnQHNlcnZpY2VzL2FwaS9wcm9kdWN0JztcblxuaW1wb3J0IEdsb2JlU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9nbG9iZS5zdmcnO1xuaW1wb3J0IERvbGxhclN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvZG9sbGFyLnN2Zyc7XG5pbXBvcnQgUGlwYVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvcGlwYS5zdmcnO1xuXG5pbXBvcnQgTGFuZGluZ0ltYWdlMSBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0xLnBuZyc7XG5pbXBvcnQgTGFuZGluZ0ltYWdlMiBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIENhcmRTZWN0aW9uRmlyc3QsXG4gICAgQ2FyZFNlY3Rpb25TZWNvbmRcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRTZWN0aW9uRmlyc3RMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ0J1eSBvciBzZWxsIGdsb2JhbGx5LCBtYW5hZ2UgaXQgbG9jYWxseScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgZW5hYmxlcyBzZWxsZXJzIHRvIHByb21vdGUgc3VycGx1cyBpbnZlbnRvcnkgZ2xvYmFsbHksIG9wZW5pbmcgYnV5ZXJzIHNlYXJjaCBob3Jpem9ucy4gV2UgcHJvdmlkZSBhIHNlY3VyZSBhbmQgdW5jb21wbGljYXRlZCBwcm9jZXNzLCB3aXRoIGJvdGggYnV5ZXJzIGFuZCBzZWxsZXJzIGVuam95aW5nIHRoZSBjb25maWRlbmNlIG9mIHRyYW5zYWN0aW9uIG1hbmFnZW1lbnQgYnkgdGhlaXIgbG9jYWwgTWFydWJlbmktSXRvY2h1IFN0ZWVsIChNSVNJKSBuZXR3b3JrLicsXG4gICAgICAgICAgaWNvbjogR2xvYmVTdmdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHRpdGxlOiAnU3VwcG9ydGluZyBjb3N0LWVmZmVjdGl2ZSBpbnZlbnRvcnkgbWFuYWdlbWVudCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgYWxsb3dzIG9yZ2FuaXNhdGlvbnMgb2YgYWxsIHNpemVzIHRvIHF1aWNrbHkgdHJhZGUgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgYXQgYSBmYWlyIHByaWNlLiBZb3UgY2FuIG5vdyBrZWVwIGNvc3RzIGluIGxpbmUgd2l0aCBleHBlY3RhdGlvbnMgYW5kIGVhc2lseSBhY2Nlc3Mgb3Igb2ZmbG9hZCBleGNlc3MgaW52ZW50b3J5LicsXG4gICAgICAgICAgaWNvbjogRG9sbGFyU3ZnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ0xhcmdlIHJhbmdlIG9mIHJlYWR5LW1hZGUgcGlwZXMgZml0IGZvciBwdXJwb3NlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BpcGVzYWxlcyBtYXJrZXRwbGFjZSBpcyBob21lIHRvIGEgbGFyZ2UgcmFuZ2Ugb2YgcXVhbGl0eSBPaWwgQ291bnRyeSBUdWJ1bGFyIEdvb2RzIChPQ1RHKS4gQnJvd3NlIGJ5IHByb2R1Y3QgdHlwZSwgZ3JhZGUsIHNpemUsIGNvbm5lY3Rpb24gYW5kIGxvY2F0aW9uLiBCZSBhc3N1cmVkIG9mIHN1aXRhYmxlIGJhY2t1cCBzdXBwbGllcyB0byBtZWV0IHVyZ2VudCBkZW1hbmQuJyxcbiAgICAgICAgICBpY29uOiBQaXBhU3ZnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBsYW5kaW5nSW1hZ2UxOiBMYW5kaW5nSW1hZ2UxLFxuICAgICAgbGFuZGluZ0ltYWdlMjogTGFuZGluZ0ltYWdlMlxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoJ2FwcCcsIHtcbiAgICAgIGZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZTogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUsXG4gICAgICBzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlOiAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUsXG4gICAgICBmaWx0ZXJPcHRpb25zU2l6ZTogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zU2l6ZSxcbiAgICAgIHNlbGVjdGVkRmlsdGVyU2l6ZTogKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbHRlclNpemUsXG4gICAgICBmaWx0ZXJPcHRpb25zR3JhZGU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc0dyYWRlLFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJHcmFkZTogKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbHRlckdyYWRlLFxuICAgICAgZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb246IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24sXG4gICAgICBzZWxlY3RlZEZpbHRlckNvbm5lY3Rpb246IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXG4gICAgfSlcbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRBbGxQcm9kdWN0ICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFByb2R1Y3RTZXJ2aWNlcy5nZXRQcm9kdWN0cygpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmlsdGVyRGF0YSAoZGF0YSwgcGFyYW1GaWx0ZXIpIHtcbiAgICAgIGxldCBmaWx0ZXJDcml0ZXJpYSA9IHBhcmFtRmlsdGVyO1xuXG4gICAgICBjb25zdCBhcHBseUZpbHRlciA9IChkYXRhLCBjcml0ZXJpYSkgPT4ge1xuICAgICAgICBpZiAoIWNyaXRlcmlhKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7IFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNyaXRlcmlhKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBjcml0ZXJpYVtrZXldKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYXBwbHlGaWx0ZXIoZGF0YSwgZmlsdGVyQ3JpdGVyaWEpO1xuICAgICAgY29uc3Qgbm90RmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+ICFhcHBseUZpbHRlcihbaXRlbV0sIGZpbHRlckNyaXRlcmlhKS5sZW5ndGgpO1xuICAgICAgY29uc3QgbW9kaWZpZWROb3RGaWx0ZXJlZERhdGEgPSBub3RGaWx0ZXJlZERhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHF0eTogMCB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbWJpbmVkRGF0YSA9IFsuLi5maWx0ZXJlZERhdGEsIC4uLm1vZGlmaWVkTm90RmlsdGVyZWREYXRhXTtcblxuICAgICAgcmV0dXJuIGNvbWJpbmVkRGF0YTtcbiAgICB9LFxuICAgIGdldERhdGFQcm9kdWN0VHlwZSAoZGF0YSkge1xuICAgICAgY29uc3QgcHJvZHVjdFR5cGVRdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2NbY3Vyci5wcm9kdWN0X3R5cGVdKSB7XG4gICAgICAgICAgYWNjW2N1cnIucHJvZHVjdF90eXBlXSArPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWNjW2N1cnIucHJvZHVjdF90eXBlXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBwcm9kdWN0VHlwZVF0eUFycmF5ID0gT2JqZWN0LmtleXMocHJvZHVjdFR5cGVRdHlTdW0pLm1hcCgocHJvZHVjdFR5cGUpID0+ICh7XG4gICAgICAgIHByb2R1Y3RfdHlwZTogcHJvZHVjdFR5cGUsXG4gICAgICAgIHRvdGFsX3F0eTogcHJvZHVjdFR5cGVRdHlTdW1bcHJvZHVjdFR5cGVdXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBwcm9kdWN0VHlwZVF0eUFycmF5O1xuICAgIH0sXG4gICAgZ2V0RGF0YVNpemUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHNpemVRdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2NbY3Vyci5zaXplXSkge1xuICAgICAgICAgIGFjY1tjdXJyLnNpemVdICs9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhY2NbY3Vyci5zaXplXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBzaXplUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhzaXplUXR5U3VtKS5tYXAoKHNpemUpID0+ICh7XG4gICAgICAgIHNpemUsXG4gICAgICAgIHRvdGFsX3F0eTogc2l6ZVF0eVN1bVtzaXplXVxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gc2l6ZVF0eUFycmF5O1xuICAgIH0sXG4gICAgZ2V0RGF0YUdyYWRlIChkYXRhKSB7XG4gICAgICBjb25zdCBncmFkZVF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGFjY1tjdXJyLmdyYWRlXSkge1xuICAgICAgICAgIGFjY1tjdXJyLmdyYWRlXSArPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWNjW2N1cnIuZ3JhZGVdID0gcGFyc2VJbnQoY3Vyci5xdHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IGdyYWRlUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhncmFkZVF0eVN1bSkubWFwKChncmFkZSkgPT4gKHtcbiAgICAgICAgZ3JhZGUsXG4gICAgICAgIHRvdGFsX3F0eTogZ3JhZGVRdHlTdW1bZ3JhZGVdXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBncmFkZVF0eUFycmF5O1xuICAgIH0sXG4gICAgZ2V0RGF0YUNvbm5lY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25RdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2NbY3Vyci5jb25uZWN0aW9uXSkge1xuICAgICAgICAgIGFjY1tjdXJyLmNvbm5lY3Rpb25dICs9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhY2NbY3Vyci5jb25uZWN0aW9uXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBjb25uZWN0aW9uUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhjb25uZWN0aW9uUXR5U3VtKS5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XG4gICAgICAgIGNvbm5lY3Rpb24sXG4gICAgICAgIHRvdGFsX3F0eTogY29ubmVjdGlvblF0eVN1bVtjb25uZWN0aW9uXVxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gY29ubmVjdGlvblF0eUFycmF5O1xuICAgIH0sXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSAod2l0aExvYWRlciA9IGZhbHNlKSB7XG4gICAgICBpZiAod2l0aExvYWRlcikge1xuICAgICAgICB0aGlzLiRldmVudEJ1cy4kZW1pdCgnb3BlbkxvYWRlckZ1bGxQYWdlJyk7XG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMDApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldEFsbFByb2R1Y3QoKTtcbiAgICAgIGNvbnN0IGJvZHkgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSAhPT0gJycpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XG4gICAgICAgICAgcHJvZHVjdF90eXBlOiB0aGlzLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbHRlclNpemUgIT09ICcnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xuICAgICAgICAgIHNpemU6IHRoaXMuc2VsZWN0ZWRGaWx0ZXJTaXplXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJHcmFkZSAhPT0gJycpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XG4gICAgICAgICAgZ3JhZGU6IHRoaXMuc2VsZWN0ZWRGaWx0ZXJHcmFkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiAhPT0gJycpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XG4gICAgICAgICAgY29ubmVjdGlvbjogdGhpcy5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICBjb25zdCByZXNGaWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhKHJlcywgYm9keSk7XG5cbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgXG4gICAgICBjb25zdCByZXNEYXRhUHJvZHVjdFR5cGUgPSB0aGlzLmdldERhdGFQcm9kdWN0VHlwZShyZXNGaWx0ZXJEYXRhKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlJywgcmVzRGF0YVByb2R1Y3RUeXBlKTtcblxuICAgICAgY29uc3QgcmVzRGF0YXNTaXplID0gdGhpcy5nZXREYXRhU2l6ZShyZXNGaWx0ZXJEYXRhKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1NpemUnLCByZXNEYXRhc1NpemUpO1xuICAgICAgXG4gICAgICBjb25zdCByZXNEYXRhR3JhZGUgPSB0aGlzLmdldERhdGFHcmFkZShyZXNGaWx0ZXJEYXRhKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc0dyYWRlJywgcmVzRGF0YUdyYWRlKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzRGF0YUNvbm5lY3Rpb24gPSB0aGlzLmdldERhdGFDb25uZWN0aW9uKHJlc0ZpbHRlckRhdGEpO1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbicsIHJlc0RhdGFDb25uZWN0aW9uKTtcblxuICAgICAgaWYgKHdpdGhMb2FkZXIpIHtcbiAgICAgICAgdGhpcy4kZXZlbnRCdXMuJGVtaXQoJ2Nsb3NlTG9hZGVyRnVsbFBhZ2UnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uSGFuZGxlU2VsZWN0ZGF0YSAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZScsIGV2ZW50LmRhdGEucHJvZHVjdF90eXBlKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzInKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJTaXplJywgZXZlbnQuZGF0YS5zaXplKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzMnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZScsIGV2ZW50LmRhdGEuZ3JhZGUpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24nLCBldmVudC5kYXRhLmNvbm5lY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRpYWxpemUodHJ1ZSk7XG4gICAgfSxcbiAgICBvbkhhbmRsZVJlc2V0ZGF0YSAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZScsICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzInKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJTaXplJywgJycpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMycpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlckdyYWRlJywgJycpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24nLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0cnVlKTtcbiAgICB9LFxuICAgIG9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0gKGV2ZW50KSB7XG4gICAgICBjb25zdCB2YWx1ZVNlYXJjaCA9IG5ldyBSZWdFeHAoZXZlbnQudmFsdWUsICdpJyk7XG5cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5maWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlU2VhcmNoLnRlc3QoaXRlbS5wcm9kdWN0X3R5cGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlJywgZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcyJykge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMuZmlsdGVyT3B0aW9uc1NpemUuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlU2VhcmNoLnRlc3QoaXRlbS5zaXplKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNTaXplJywgZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICczJykge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMuZmlsdGVyT3B0aW9uc0dyYWRlLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVNlYXJjaC50ZXN0KGl0ZW0uZ3JhZGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc0dyYWRlJywgZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICc0Jykge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMuZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlU2VhcmNoLnRlc3QoaXRlbS5jb25uZWN0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uJywgZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmdsb2JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS9oZWFkZXItYmFja2dyb3VuZC0yLnBuZyk7IFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMjRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLndyYXBwZXItYmFubmVyIHtcbiAgaGVpZ2h0OiA0NTBweDtcbn1cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfYyhcInJvdXRlci12aWV3XCIpLCBfdm0uX3YoXCIgXCIpLCBfYyhcIkxvYWRlckZ1bGxQYWdlXCIpXSwgMSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX3ZtLnNob3dMb2FkZXJcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIHctZnVsbCBoLXNjcmVlbiB6LTUwIG92ZXJmbG93LWhpZGRlbiBiZy1ibGFjayBvcGFjaXR5LTYwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX20oMCldXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZHMtcmlwcGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwidy1mdWxsIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctd2hpdGUgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTQgcHktNSBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkhhbmRsZVZpc2libGVEcm9wZG93biB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkgKyBcIiBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWNvbjogX3ZtLnZpc2libGVEcm9wZG93biA/IFwiY2hldnJvbi11cFwiIDogXCJjaGV2cm9uLWRvd25cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHRleHQtbGVmdFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLnNlbGVjdGVkVmFsdWUgIT09IFwiXCJcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXgganVzdGlmeS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbGlja1Jlc2V0RmlsdGVyKF92bS5jYXRlZ29yeSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2VsZWN0ZWRWYWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInRpbWVzLWNpcmNsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC15ZWxsb3ctNjAwIHVwcGVyY2FzZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgQWxsXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udmlzaWJsZURyb3Bkb3duLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2aXNpYmxlRHJvcGRvd25cIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInctZnVsbCBtdC0yIHotMTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnXCIsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInBcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmNvbXB1dGVUaXRsZUxpc3QoX3ZtLnRpdGxlKSkgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiwgYXR0cnM6IHsgZm9yOiBcImlucHV0LWdyb3VwLXNlYXJjaFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFNlYXJjaFxcbiAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZWxhdGl2ZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImFic29sdXRlIGluc2V0LXktMCBydGw6aW5zZXQtci0wIHN0YXJ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHMtMyBwb2ludGVyLWV2ZW50cy1ub25lXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoVmFsdWVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImJsb2NrIHctZnVsbCBwLTIgcGwtNiBwcy0xMCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXdoaXRlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2hcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaFZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAga2V5dXA6IF92bS5vbkhhbmRsZUZpbHRlckxpc3RJdGVtLFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaFZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoLTQ4IHB4LTMgcGItMyBvdmVyZmxvdy15LWF1dG8gdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm9wdGlvbnMsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHktMiBweC0zIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVNlbGVjdEl0ZW0oX3ZtLmNhdGVnb3J5LCBpdGVtKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3J5ID09PSBcIjFcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnByb2R1Y3RfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3J5ID09PSBcIjJcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5zaXplKSArIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3J5ID09PSBcIjNcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ncmFkZSkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yeSA9PT0gXCI0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5jb25uZWN0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LXllbGxvdy01MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY29tcHV0ZUZvcm1hdFF0eShpdGVtLnRvdGFsX3F0eSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2xcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibS1hdXRvXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmljb24sIGFsdDogXCJJY29uXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWdyYXktNzAwIG1iLTNcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICBcIiksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uZGVzY3JpcHRpb24pICsgXCJcXG4gIFwiKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImgyXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LWJhc2UgbGc6dGV4dC00eGwgdGV4dC1ncmF5LTYwMCBtYi00XCIgfSxcbiAgICAgIFtfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICBcIildXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGcgdGV4dC1ncmF5LTUwMCBtYi01XCIgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5kZXNjcmlwdGlvbikgKyBcIlxcbiAgXCIpLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBfdm0ubGlua0FjdGlvbjEgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInJvdW5kZWQtZnVsbCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTggcHktMlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC15ZWxsb3ctNTAwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJpbmZvLWNpcmNsZVwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYWJlbEFjdGlvbjEpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IF92bS5saW5rQWN0aW9uMiB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTggcHktMiB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhYmVsQWN0aW9uMikgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIgaC1mdWxsIHAtMTZcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC01IG14LWF1dG8gbXktOFwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1heC13LW1kIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWQ6dGV4dC0zeGwgbWItMTBcIiB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBQYWdlIE5vdCBGb3VuZFxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IHBhdGg6IFwiL1wiIH0gfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbWUtMiBtYi0yIGZvY3VzOm91dGxpbmUtbm9uZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBCYWNrIHRvIERhc2hib2FyZFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJtYi04IGZvbnQtZXh0cmFib2xkIHRleHQtOXhsXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtfdm0uX3YoXCJFcnJvclwiKV0pLFxuICAgICAgX3ZtLl92KFwiNDA0XFxuICAgICAgXCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcIm5hdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGJnLXdoaXRlIHB5LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiwgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ubG9nbywgYWx0OiBcIlwiIH0gfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBQaXBlc2FsZXMgwqkgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnllYXIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIENvb2tpZSBQb2xpY3lcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIENvb2tpZSBTZXR0aW5nc1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgUHJpdmFjeSBQb2xpY3lcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcIm5hdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGJnLXdoaXRlIHB5LTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiwgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ubG9nbywgYWx0OiBcIlwiIH0gfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvbG9naW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImtleVwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtbC0yIGZvbnQtc2VtaWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBMb2dpblxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9zaWduLXVwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LXllbGxvdy02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJ1c2VyLXBsdXNcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMiBmb250LXNlbWlib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgU2lnbiBVcFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBBYm91dCBQaXBlc2FsZXNcXG4gICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LTRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgT0NURyBNYXJrZXRwbGFjZVxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBCbG9nXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LThcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgU2hlbGwgTXkgUGlwZXNcXG4gICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiaGVhcnRcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFdpc2hsaXN0XFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJzaG9wcGluZy1jYXJ0XCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTYwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBNeSBFbnF1aXJ5XFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJtZWRhbFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgQ29tcGFyZVxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl92KFwiXFxuICBBYm91dFxcblwiKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiVGhlTmF2aWdhdGlvblwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwidy1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00IC1tdC04IHotMTAgb3ZlZmxvdy1oaWRkZW4gaC0yOFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTZWxlY3RGaWx0ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJQcm9kdWN0IFR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBfdm0uc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldERhdGE6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW06IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU2VsZWN0RmlsdGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IF92bS5zZWxlY3RlZEZpbHRlclNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmZpbHRlck9wdGlvbnNTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldERhdGE6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW06IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU2VsZWN0RmlsdGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiR3JhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBfdm0uc2VsZWN0ZWRGaWx0ZXJHcmFkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZmlsdGVyT3B0aW9uc0dyYWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldERhdGE6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW06IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU2VsZWN0RmlsdGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCI0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29ubmVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IF92bS5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmZpbHRlck9wdGlvbnNDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldERhdGE6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdEl0ZW06IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHB5LTI0XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFwiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5jYXJkU2VjdGlvbkZpcnN0TGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiQ2FyZFNlY3Rpb25GaXJzdFwiLCB7XG4gICAgICAgICAgICAgIGtleTogaWR4LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHB5LTI0XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy0xLzJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLWF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmxhbmRpbmdJbWFnZTEsIGFsdDogXCJMYW5kaW5nIEltYWdlIDFcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkNhcmRTZWN0aW9uU2Vjb25kXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVyZ2VudCBmdWxmaWxtZW50IGZvciB0aW1lLWNyaXRpY2FsIHByb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgIFwiUGlwZXNhbGVzIG1hcmtldHBsYWNlIGFzc2lzdHMgaW4gbWFuYWdpbmcgcHJvY3VyZW1lbnQgc2hvcnRmYWxscyBxdWlja2x5IGFuZCBlYXNpbHkuIEJyb3dzZSBhbmQgZmluZCBxdWFsaXR5IHR1YnVsYXIgcHJvZHVjdHMgYW5kIGFjY2Vzc29yaWVzIHRvIHlvdXIgc3BlY2lmaWNhdGlvbnMsIGFuZCBQaXBlc2FsZXMgcmVjb2duaXNlZCB0cmFkZSBwYXJ0bmVycyB3aWxsIGhhbmRsZSB0aGUgb3JkZXIgZnVsZmlsbWVudCwgZ3VhcmFudGVlaW5nIHBlYWNlIG9mIG1pbmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQWN0aW9uMTogXCJIb3cgdG8gQnV5P1wiLFxuICAgICAgICAgICAgICAgICAgICBsaW5rQWN0aW9uMTogXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsQWN0aW9uMjogXCJCcm93c2UgSW52ZW50b3J5XCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24yOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHB5LThcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJDYXJkU2VjdGlvblNlY29uZFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGYWlyIG1hcmtldCByYXRlcyBmb3Igc3VycGx1cyBpbnZlbnRvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgXCJUYXJnZXQgemVybyBpbnZlbnRvcnkgYnkgbW92aW5nIHN1cnBsdXMgcHJvZHVjdHMgdGhyb3VnaCBhIHRydXN0ZWQgbmV0d29yayBzdXBwb3J0ZWQgYnkgTWFydWJlbmktSXRvY2h1IFN0ZWVsIEluYyAoTUlTSSkuIFBpcGVzYWxlcyBjYW4gcHJvdmlkZSB5b3Ugd2l0aCBwcmljaW5nIHJlY29tbWVuZGF0aW9ucyB0byBhcnJpdmUgYXQgYSBmYWlyIG9wZW4gbWFya2V0IHZhbHVlLCB0aGVuIGNvbm5lY3QgeW91IHdpdGggcG90ZW50aWFsIGJ1eWVycyBnbG9iYWxseS5cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24xOiBcIkhvdyB0byBCdXk/XCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24xOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24yOiBcIlNoZWxsIE15IFBpcGVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24yOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy0xLzJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtLWF1dG9cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmxhbmRpbmdJbWFnZTIsIGFsdDogXCJMYW5kaW5nIEltYWdlIDFcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIlRoZUZvb3RlclwiKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXG4gICAgICBcInNlY3Rpb25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlciBiZy1ncmF5LTcwMFwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnbG9iZVwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBteC1hdXRvIHotMjAgd3JhcHBlci1iYW5uZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhYnNvbHV0ZSBmbGV4IHctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS93ZWJwL3RvbWktZnVsbC53ZWJwXCIsXG4gICAgICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBweC00IG14LWF1dG8gbXQtNDRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYXgtdy00eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBZb3VyIGdsb2JhbCBtYXJrZXRwbGFjZSB0b1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIGJ1eSAmIHNlbGwgdHVidWxhciBwcm9kdWN0c1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtdy0zeGwgbXgtYXV0byBtYi0xMCB0ZXh0LWxnIHRleHQtZ3JheS0zMDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFF1aWNrbHkgb3ZlcmNvbWUgc3VwcGx5IGdhcHMgYW5kIHRhcmdldCB6ZXJvIGludmVudG9yeSB3aXRoIFBpcGVzYWxlcy5cXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktOFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctZ3JheS03MDAgcm91bmRlZC1sZyBnYXAtNCBwLTE2IHB5LTI0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTEwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBOZWVkIG1vcmUgaW5mb3JtYXRpb24/XFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQtNXhsIHRleHQteWVsbG93LTUwMFwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIENvbnRhY3QgVXNcXG4gICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93IHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJOYW1lKlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkNvdW50cnkqXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTQvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHNlbGVjdGVkOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ291bnRyeSBDb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCItXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbGc6dy04LzEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUGhvbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiRW1haWwqXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJsb2NrIHAtMi41IHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjRcIiwgcGxhY2Vob2xkZXI6IFwiWW91ciBNZXNzYWdlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwidy00IGgtNCB0ZXh0LWJsdWUtNjAwIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy0yXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImFnZ3JlLWNoZWNrXCIsIHR5cGU6IFwiY2hlY2tib3hcIiwgdmFsdWU6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJhZ2dyZS1jaGVja1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBTdGF5IHVwZGF0ZWQgd2l0IG91ciBsYXRlc3QgbmV3c1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTI0IHB5LTIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFNlbmRcXG4gICAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubGRzLXJpcHBsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG59XFxuLmxkcy1yaXBwbGUgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxufVxcbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcXG59XFxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4wJSB7XFxuICAgIHRvcDogMzZweDtcXG4gICAgbGVmdDogMzZweDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuMTAwJSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiA3MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vTG9hZGVyRnVsbFBhZ2UvTG9hZGVyRnVsbFBhZ2UudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtBQUNGO0FBRUE7RUFDRSxzQkFBQTtBQUNGO0FBRUE7QUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0FBQ0Y7QUFDQTtJQUNFLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0FBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGRzLXJpcHBsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuLmxkcy1yaXBwbGUgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxufVxcblxcbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcXG59XFxuXFxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAzNnB4O1xcbiAgICBsZWZ0OiAzNnB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiA3MnB4O1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nbG9iZVtkYXRhLXYtMDk3ZmExNzZdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2UvaGVhZGVyLWJhY2tncm91bmQtMi5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDI0cHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcbi53cmFwcGVyLWJhbm5lcltkYXRhLXYtMDk3ZmExNzZdIHtcXG4gIGhlaWdodDogNDUwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXlpQkE7RUFDQSxnRkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDQTtBQUVBO0VBQ0EsYUFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjwhLS0gZXNsaW50LWRpc2FibGUgbWF4LWxlbiAtLT5cXG48dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGxcXFwiPlxcbiAgICA8VGhlTmF2aWdhdGlvbiAvPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwicmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBiZy1jZW50ZXIgYmctY292ZXIgYmctZ3JheS03MDBcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImdsb2JlXFxcIiAvPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIHotMjAgd3JhcHBlci1iYW5uZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJzb2x1dGUgZmxleCB3LWZ1bGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtdC0xMlxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2Uvd2VicC90b21pLWZ1bGwud2VicFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgcHgtNCBteC1hdXRvIG10LTQ0XFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIFlvdXIgZ2xvYmFsIG1hcmtldHBsYWNlIHRvXFxuICAgICAgICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwibXQtOCBtYi02IHRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIGJ1eSAmIHNlbGwgdHVidWxhciBwcm9kdWN0c1xcbiAgICAgICAgICAgICAgICA8L2gyPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwibWF4LXctM3hsIG14LWF1dG8gbWItMTAgdGV4dC1sZyB0ZXh0LWdyYXktMzAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICBRdWlja2x5IG92ZXJjb21lIHN1cHBseSBnYXBzIGFuZCB0YXJnZXQgemVybyBpbnZlbnRvcnkgd2l0aCBQaXBlc2FsZXMuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ3LWZ1bGxcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00IC1tdC04IHotMTAgb3ZlZmxvdy1oaWRkZW4gaC0yOFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiUHJvZHVjdCBUeXBlXFxcIlxcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cXFwic2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcImZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cXFwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cXFwib25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQGZpbHRlckxpc3RJdGVtPVxcXCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PVxcXCIyXFxcIlxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgOnNlbGVjdGVkVmFsdWU9XFxcInNlbGVjdGVkRmlsdGVyU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcImZpbHRlck9wdGlvbnNTaXplXFxcIlxcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVxcXCJvbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQG9uUmVzZXREYXRhPVxcXCJvbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICBAZmlsdGVyTGlzdEl0ZW09XFxcIm9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0oJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XFxcIjNcXFwiXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHcmFkZVxcXCJcXG4gICAgICAgICAgICAgICAgOnNlbGVjdGVkVmFsdWU9XFxcInNlbGVjdGVkRmlsdGVyR3JhZGVcXFwiXFxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJmaWx0ZXJPcHRpb25zR3JhZGVcXFwiXFxuICAgICAgICAgICAgICAgIEBvblNlbGVjdERhdGE9XFxcIm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICBAb25SZXNldERhdGE9XFxcIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIEBmaWx0ZXJMaXN0SXRlbT1cXFwib25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlclxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT1cXFwiNFxcXCJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkNvbm5lY3Rpb25cXFwiXFxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVxcXCJzZWxlY3RlZEZpbHRlckNvbm5lY3Rpb25cXFwiXFxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJmaWx0ZXJPcHRpb25zQ29ubmVjdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cXFwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cXFwib25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQGZpbHRlckxpc3RJdGVtPVxcXCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ3LWZ1bGwgcHktMjRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcXFwiPlxcbiAgICAgICAgPENhcmRTZWN0aW9uRmlyc3RcXG4gICAgICAgICAgdi1mb3I9XFxcIihpdGVtLCBpZHgpIGluIGNhcmRTZWN0aW9uRmlyc3RMaXN0XFxcIlxcbiAgICAgICAgICA6a2V5PVxcXCJpZHhcXFwiXFxuICAgICAgICAgIDp0aXRsZT1cXFwiaXRlbS50aXRsZVxcXCJcXG4gICAgICAgICAgOmRlc2NyaXB0aW9uPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIlxcbiAgICAgICAgICA6aWNvbj1cXFwiaXRlbS5pY29uXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwidy1mdWxsIHB5LTI0XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgOnNyYz1cXFwibGFuZGluZ0ltYWdlMVxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiTGFuZGluZyBJbWFnZSAxXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcIm0tYXV0b1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy0xLzJcXFwiPlxcbiAgICAgICAgICA8Q2FyZFNlY3Rpb25TZWNvbmRcXG4gICAgICAgICAgICB0aXRsZT1cXFwiVXJnZW50IGZ1bGZpbG1lbnQgZm9yIHRpbWUtY3JpdGljYWwgcHJvamVjdHNcXFwiXFxuICAgICAgICAgICAgZGVzY3JpcHRpb249XFxcIlBpcGVzYWxlcyBtYXJrZXRwbGFjZSBhc3Npc3RzIGluIG1hbmFnaW5nIHByb2N1cmVtZW50IHNob3J0ZmFsbHMgcXVpY2tseSBhbmQgZWFzaWx5LiBCcm93c2UgYW5kIGZpbmQgcXVhbGl0eSB0dWJ1bGFyIHByb2R1Y3RzIGFuZCBhY2Nlc3NvcmllcyB0byB5b3VyIHNwZWNpZmljYXRpb25zLCBhbmQgUGlwZXNhbGVzIHJlY29nbmlzZWQgdHJhZGUgcGFydG5lcnMgd2lsbCBoYW5kbGUgdGhlIG9yZGVyIGZ1bGZpbG1lbnQsIGd1YXJhbnRlZWluZyBwZWFjZSBvZiBtaW5kLlxcXCJcXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjE9XFxcIkhvdyB0byBCdXk/XFxcIlxcbiAgICAgICAgICAgIGxpbmtBY3Rpb24xPVxcXCIvXFxcIlxcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMj1cXFwiQnJvd3NlIEludmVudG9yeVxcXCJcXG4gICAgICAgICAgICBsaW5rQWN0aW9uMj1cXFwiL1xcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ3LWZ1bGwgcHktOFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy0xLzJcXFwiPlxcbiAgICAgICAgICA8Q2FyZFNlY3Rpb25TZWNvbmRcXG4gICAgICAgICAgICB0aXRsZT1cXFwiRmFpciBtYXJrZXQgcmF0ZXMgZm9yIHN1cnBsdXMgaW52ZW50b3J5XFxcIlxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVxcXCJUYXJnZXQgemVybyBpbnZlbnRvcnkgYnkgbW92aW5nIHN1cnBsdXMgcHJvZHVjdHMgdGhyb3VnaCBhIHRydXN0ZWQgbmV0d29yayBzdXBwb3J0ZWQgYnkgTWFydWJlbmktSXRvY2h1IFN0ZWVsIEluYyAoTUlTSSkuIFBpcGVzYWxlcyBjYW4gcHJvdmlkZSB5b3Ugd2l0aCBwcmljaW5nIHJlY29tbWVuZGF0aW9ucyB0byBhcnJpdmUgYXQgYSBmYWlyIG9wZW4gbWFya2V0IHZhbHVlLCB0aGVuIGNvbm5lY3QgeW91IHdpdGggcG90ZW50aWFsIGJ1eWVycyBnbG9iYWxseS5cXFwiXFxuICAgICAgICAgICAgbGFiZWxBY3Rpb24xPVxcXCJIb3cgdG8gQnV5P1xcXCJcXG4gICAgICAgICAgICBsaW5rQWN0aW9uMT1cXFwiL1xcXCJcXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjI9XFxcIlNoZWxsIE15IFBpcGVzXFxcIlxcbiAgICAgICAgICAgIGxpbmtBY3Rpb24yPVxcXCIvXFxcIlxcbiAgICAgICAgICAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy0xLzJcXFwiPlxcbiAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIDpzcmM9XFxcImxhbmRpbmdJbWFnZTJcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIkxhbmRpbmcgSW1hZ2UgMVxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJtLWF1dG9cXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ3LWZ1bGwgcHktOFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGdhcC00IHAtMTYgcHktMjRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibWItMTBcXFwiPlxcbiAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC13aGl0ZVxcXCI+XFxuICAgICAgICAgICAgICBOZWVkIG1vcmUgaW5mb3JtYXRpb24/XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtNXhsIHRleHQteWVsbG93LTUwMFxcXCI+XFxuICAgICAgICAgICAgICBDb250YWN0IFVzXFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGZvcm0gY2xhc3M9XFxcInctZnVsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggZ2FwLTQgZmxleC1jb2wgbGc6ZmxleC1yb3cgdy1mdWxsXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy0xLzJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVxcXCJcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiTmFtZSpcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVxcXCJcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiQ291bnRyeSpcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGZsZXggZ2FwLTQgZmxleC1jb2wgbGc6ZmxleC1yb3dcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy00LzEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVxcXCJcXG4gICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkNvdW50cnkgQ29kZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLVxcXCI+LTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLVxcXCI+LTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLVxcXCI+LTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiLVxcXCI+LTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctOC8xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiUGhvbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICB0eXBlPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVxcXCJcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW1haWwqXFxcIlxcbiAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxcbiAgICAgICAgICAgICAgICAgIHJvd3M9XFxcIjRcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJsb2NrIHAtMi41IHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctZ3JheS01MCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcXFwiXFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIllvdXIgTWVzc2FnZVxcXCJcXG4gICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleCBnYXAtNCB3LWZ1bGxcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGl0ZW1zLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgIGlkPVxcXCJhZ2dyZS1jaGVja1xcXCJcXG4gICAgICAgICAgICAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLTJcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPGxhYmVsXFxuICAgICAgICAgICAgICAgICAgZm9yPVxcXCJhZ2dyZS1jaGVja1xcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICBTdGF5IHVwZGF0ZWQgd2l0IG91ciBsYXRlc3QgbmV3c1xcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgcHgtMjQgcHktMiB0ZXh0LXdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICBTZW5kXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxUaGVGb290ZXIgLz5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXFxuaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJ0B1dGlscy9hcHAnO1xcblxcbmltcG9ydCBDYXJkU2VjdGlvbkZpcnN0IGZyb20gJ0Bjb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QnO1xcbmltcG9ydCBDYXJkU2VjdGlvblNlY29uZCBmcm9tICdAY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZCc7XFxuXFxuaW1wb3J0IFByb2R1Y3RTZXJ2aWNlcyBmcm9tICdAc2VydmljZXMvYXBpL3Byb2R1Y3QnO1xcblxcbmltcG9ydCBHbG9iZVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvZ2xvYmUuc3ZnJztcXG5pbXBvcnQgRG9sbGFyU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9kb2xsYXIuc3ZnJztcXG5pbXBvcnQgUGlwYVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvcGlwYS5zdmcnO1xcblxcbmltcG9ydCBMYW5kaW5nSW1hZ2UxIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nLWltYWdlLTEucG5nJztcXG5pbXBvcnQgTGFuZGluZ0ltYWdlMiBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZyc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgY29tcG9uZW50czoge1xcbiAgICBDYXJkU2VjdGlvbkZpcnN0LFxcbiAgICBDYXJkU2VjdGlvblNlY29uZFxcbiAgfSxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGNhcmRTZWN0aW9uRmlyc3RMaXN0OiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAxLFxcbiAgICAgICAgICB0aXRsZTogJ0J1eSBvciBzZWxsIGdsb2JhbGx5LCBtYW5hZ2UgaXQgbG9jYWxseScsXFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGlwZXNhbGVzIGVuYWJsZXMgc2VsbGVycyB0byBwcm9tb3RlIHN1cnBsdXMgaW52ZW50b3J5IGdsb2JhbGx5LCBvcGVuaW5nIGJ1eWVycyBzZWFyY2ggaG9yaXpvbnMuIFdlIHByb3ZpZGUgYSBzZWN1cmUgYW5kIHVuY29tcGxpY2F0ZWQgcHJvY2Vzcywgd2l0aCBib3RoIGJ1eWVycyBhbmQgc2VsbGVycyBlbmpveWluZyB0aGUgY29uZmlkZW5jZSBvZiB0cmFuc2FjdGlvbiBtYW5hZ2VtZW50IGJ5IHRoZWlyIGxvY2FsIE1hcnViZW5pLUl0b2NodSBTdGVlbCAoTUlTSSkgbmV0d29yay4nLFxcbiAgICAgICAgICBpY29uOiBHbG9iZVN2Z1xcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgIHRpdGxlOiAnU3VwcG9ydGluZyBjb3N0LWVmZmVjdGl2ZSBpbnZlbnRvcnkgbWFuYWdlbWVudCcsXFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGlwZXNhbGVzIG1hcmtldHBsYWNlIGFsbG93cyBvcmdhbmlzYXRpb25zIG9mIGFsbCBzaXplcyB0byBxdWlja2x5IHRyYWRlIHR1YnVsYXIgcHJvZHVjdHMgYW5kIGFjY2Vzc29yaWVzIGF0IGEgZmFpciBwcmljZS4gWW91IGNhbiBub3cga2VlcCBjb3N0cyBpbiBsaW5lIHdpdGggZXhwZWN0YXRpb25zIGFuZCBlYXNpbHkgYWNjZXNzIG9yIG9mZmxvYWQgZXhjZXNzIGludmVudG9yeS4nLFxcbiAgICAgICAgICBpY29uOiBEb2xsYXJTdmdcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAxLFxcbiAgICAgICAgICB0aXRsZTogJ0xhcmdlIHJhbmdlIG9mIHJlYWR5LW1hZGUgcGlwZXMgZml0IGZvciBwdXJwb3NlJyxcXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgaXMgaG9tZSB0byBhIGxhcmdlIHJhbmdlIG9mIHF1YWxpdHkgT2lsIENvdW50cnkgVHVidWxhciBHb29kcyAoT0NURykuIEJyb3dzZSBieSBwcm9kdWN0IHR5cGUsIGdyYWRlLCBzaXplLCBjb25uZWN0aW9uIGFuZCBsb2NhdGlvbi4gQmUgYXNzdXJlZCBvZiBzdWl0YWJsZSBiYWNrdXAgc3VwcGxpZXMgdG8gbWVldCB1cmdlbnQgZGVtYW5kLicsXFxuICAgICAgICAgIGljb246IFBpcGFTdmdcXG4gICAgICAgIH1cXG4gICAgICBdLFxcbiAgICAgIGxhbmRpbmdJbWFnZTE6IExhbmRpbmdJbWFnZTEsXFxuICAgICAgbGFuZGluZ0ltYWdlMjogTGFuZGluZ0ltYWdlMlxcbiAgICB9O1xcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC4uLm1hcFN0YXRlKCdhcHAnLCB7XFxuICAgICAgZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlOiAoc3RhdGUpID0+IHN0YXRlLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSxcXG4gICAgICBzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlOiAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUsXFxuICAgICAgZmlsdGVyT3B0aW9uc1NpemU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc1NpemUsXFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJTaXplOiAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsdGVyU2l6ZSxcXG4gICAgICBmaWx0ZXJPcHRpb25zR3JhZGU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc0dyYWRlLFxcbiAgICAgIHNlbGVjdGVkRmlsdGVyR3JhZGU6IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJHcmFkZSxcXG4gICAgICBmaWx0ZXJPcHRpb25zQ29ubmVjdGlvbjogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zQ29ubmVjdGlvbixcXG4gICAgICBzZWxlY3RlZEZpbHRlckNvbm5lY3Rpb246IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXFxuICAgIH0pXFxuICB9LFxcbiAgbW91bnRlZCAoKSB7XFxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgYXN5bmMgZ2V0QWxsUHJvZHVjdCAoKSB7XFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFByb2R1Y3RTZXJ2aWNlcy5nZXRQcm9kdWN0cygpO1xcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xcbiAgICAgIH1cXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGZpbHRlckRhdGEgKGRhdGEsIHBhcmFtRmlsdGVyKSB7XFxuICAgICAgbGV0IGZpbHRlckNyaXRlcmlhID0gcGFyYW1GaWx0ZXI7XFxuXFxuICAgICAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZGF0YSwgY3JpdGVyaWEpID0+IHtcXG4gICAgICAgIGlmICghY3JpdGVyaWEpIHtcXG4gICAgICAgICAgcmV0dXJuIGRhdGE7IFxcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XFxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNyaXRlcmlhKSB7XFxuICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gY3JpdGVyaWFba2V5XSkge1xcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYXBwbHlGaWx0ZXIoZGF0YSwgZmlsdGVyQ3JpdGVyaWEpO1xcbiAgICAgIGNvbnN0IG5vdEZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiAhYXBwbHlGaWx0ZXIoW2l0ZW1dLCBmaWx0ZXJDcml0ZXJpYSkubGVuZ3RoKTtcXG4gICAgICBjb25zdCBtb2RpZmllZE5vdEZpbHRlcmVkRGF0YSA9IG5vdEZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0pID0+IHtcXG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHF0eTogMCB9O1xcbiAgICAgIH0pO1xcblxcbiAgICAgIGNvbnN0IGNvbWJpbmVkRGF0YSA9IFsuLi5maWx0ZXJlZERhdGEsIC4uLm1vZGlmaWVkTm90RmlsdGVyZWREYXRhXTtcXG5cXG4gICAgICByZXR1cm4gY29tYmluZWREYXRhO1xcbiAgICB9LFxcbiAgICBnZXREYXRhUHJvZHVjdFR5cGUgKGRhdGEpIHtcXG4gICAgICBjb25zdCBwcm9kdWN0VHlwZVF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgIGlmIChhY2NbY3Vyci5wcm9kdWN0X3R5cGVdKSB7XFxuICAgICAgICAgIGFjY1tjdXJyLnByb2R1Y3RfdHlwZV0gKz0gcGFyc2VJbnQoY3Vyci5xdHkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZSB7XFxuICAgICAgICAgIGFjY1tjdXJyLnByb2R1Y3RfdHlwZV0gPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gYWNjO1xcbiAgICAgIH0sIHt9KTtcXG5cXG4gICAgICBjb25zdCBwcm9kdWN0VHlwZVF0eUFycmF5ID0gT2JqZWN0LmtleXMocHJvZHVjdFR5cGVRdHlTdW0pLm1hcCgocHJvZHVjdFR5cGUpID0+ICh7XFxuICAgICAgICBwcm9kdWN0X3R5cGU6IHByb2R1Y3RUeXBlLFxcbiAgICAgICAgdG90YWxfcXR5OiBwcm9kdWN0VHlwZVF0eVN1bVtwcm9kdWN0VHlwZV1cXG4gICAgICB9KSk7XFxuXFxuICAgICAgcmV0dXJuIHByb2R1Y3RUeXBlUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGdldERhdGFTaXplIChkYXRhKSB7XFxuICAgICAgY29uc3Qgc2l6ZVF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgIGlmIChhY2NbY3Vyci5zaXplXSkge1xcbiAgICAgICAgICBhY2NbY3Vyci5zaXplXSArPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgYWNjW2N1cnIuc2l6ZV0gPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gYWNjO1xcbiAgICAgIH0sIHt9KTtcXG5cXG4gICAgICBjb25zdCBzaXplUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhzaXplUXR5U3VtKS5tYXAoKHNpemUpID0+ICh7XFxuICAgICAgICBzaXplLFxcbiAgICAgICAgdG90YWxfcXR5OiBzaXplUXR5U3VtW3NpemVdXFxuICAgICAgfSkpO1xcblxcbiAgICAgIHJldHVybiBzaXplUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGdldERhdGFHcmFkZSAoZGF0YSkge1xcbiAgICAgIGNvbnN0IGdyYWRlUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xcbiAgICAgICAgaWYgKGFjY1tjdXJyLmdyYWRlXSkge1xcbiAgICAgICAgICBhY2NbY3Vyci5ncmFkZV0gKz0gcGFyc2VJbnQoY3Vyci5xdHkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZSB7XFxuICAgICAgICAgIGFjY1tjdXJyLmdyYWRlXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgfSwge30pO1xcblxcbiAgICAgIGNvbnN0IGdyYWRlUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhncmFkZVF0eVN1bSkubWFwKChncmFkZSkgPT4gKHtcXG4gICAgICAgIGdyYWRlLFxcbiAgICAgICAgdG90YWxfcXR5OiBncmFkZVF0eVN1bVtncmFkZV1cXG4gICAgICB9KSk7XFxuXFxuICAgICAgcmV0dXJuIGdyYWRlUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGdldERhdGFDb25uZWN0aW9uIChkYXRhKSB7XFxuICAgICAgY29uc3QgY29ubmVjdGlvblF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgIGlmIChhY2NbY3Vyci5jb25uZWN0aW9uXSkge1xcbiAgICAgICAgICBhY2NbY3Vyci5jb25uZWN0aW9uXSArPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgYWNjW2N1cnIuY29ubmVjdGlvbl0gPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gYWNjO1xcbiAgICAgIH0sIHt9KTtcXG5cXG4gICAgICBjb25zdCBjb25uZWN0aW9uUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhjb25uZWN0aW9uUXR5U3VtKS5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XFxuICAgICAgICBjb25uZWN0aW9uLFxcbiAgICAgICAgdG90YWxfcXR5OiBjb25uZWN0aW9uUXR5U3VtW2Nvbm5lY3Rpb25dXFxuICAgICAgfSkpO1xcblxcbiAgICAgIHJldHVybiBjb25uZWN0aW9uUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGFzeW5jIGluaXRpYWxpemUgKHdpdGhMb2FkZXIgPSBmYWxzZSkge1xcbiAgICAgIGlmICh3aXRoTG9hZGVyKSB7XFxuICAgICAgICB0aGlzLiRldmVudEJ1cy4kZW1pdCgnb3BlbkxvYWRlckZ1bGxQYWdlJyk7XFxuICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKTtcXG4gICAgICB9XFxuXFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5nZXRBbGxQcm9kdWN0KCk7XFxuICAgICAgY29uc3QgYm9keSA9IHt9O1xcblxcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUgIT09ICcnKSB7XFxuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHksIHtcXG4gICAgICAgICAgcHJvZHVjdF90eXBlOiB0aGlzLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGVcXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbHRlclNpemUgIT09ICcnKSB7XFxuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHksIHtcXG4gICAgICAgICAgc2l6ZTogdGhpcy5zZWxlY3RlZEZpbHRlclNpemVcXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbHRlckdyYWRlICE9PSAnJykge1xcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XFxuICAgICAgICAgIGdyYWRlOiB0aGlzLnNlbGVjdGVkRmlsdGVyR3JhZGVcXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24gIT09ICcnKSB7XFxuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHksIHtcXG4gICAgICAgICAgY29ubmVjdGlvbjogdGhpcy5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb25cXG4gICAgICAgIH0pO1xcbiAgICAgIH1cXG5cXG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG5cXG4gICAgICBjb25zdCByZXNGaWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhKHJlcywgYm9keSk7XFxuXFxuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuICAgICAgXFxuICAgICAgY29uc3QgcmVzRGF0YVByb2R1Y3RUeXBlID0gdGhpcy5nZXREYXRhUHJvZHVjdFR5cGUocmVzRmlsdGVyRGF0YSk7XFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUnLCByZXNEYXRhUHJvZHVjdFR5cGUpO1xcblxcbiAgICAgIGNvbnN0IHJlc0RhdGFzU2l6ZSA9IHRoaXMuZ2V0RGF0YVNpemUocmVzRmlsdGVyRGF0YSk7XFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zU2l6ZScsIHJlc0RhdGFzU2l6ZSk7XFxuICAgICAgXFxuICAgICAgY29uc3QgcmVzRGF0YUdyYWRlID0gdGhpcy5nZXREYXRhR3JhZGUocmVzRmlsdGVyRGF0YSk7XFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zR3JhZGUnLCByZXNEYXRhR3JhZGUpO1xcbiAgICAgIFxcbiAgICAgIGNvbnN0IHJlc0RhdGFDb25uZWN0aW9uID0gdGhpcy5nZXREYXRhQ29ubmVjdGlvbihyZXNGaWx0ZXJEYXRhKTtcXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uJywgcmVzRGF0YUNvbm5lY3Rpb24pO1xcblxcbiAgICAgIGlmICh3aXRoTG9hZGVyKSB7XFxuICAgICAgICB0aGlzLiRldmVudEJ1cy4kZW1pdCgnY2xvc2VMb2FkZXJGdWxsUGFnZScpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgb25IYW5kbGVTZWxlY3RkYXRhIChldmVudCkge1xcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUnLCBldmVudC5kYXRhLnByb2R1Y3RfdHlwZSk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzInKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyU2l6ZScsIGV2ZW50LmRhdGEuc2l6ZSk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzMnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyR3JhZGUnLCBldmVudC5kYXRhLmdyYWRlKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uJywgZXZlbnQuZGF0YS5jb25uZWN0aW9uKTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5pbml0aWFsaXplKHRydWUpO1xcbiAgICB9LFxcbiAgICBvbkhhbmRsZVJlc2V0ZGF0YSAoZXZlbnQpIHtcXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcxJykge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlJywgJycpO1xcbiAgICAgIH1cXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcyJykge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlclNpemUnLCAnJyk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzMnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyR3JhZGUnLCAnJyk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzQnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbicsICcnKTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5pbml0aWFsaXplKHRydWUpO1xcbiAgICB9LFxcbiAgICBvbkhhbmRsZUZpbHRlckxpc3RJdGVtIChldmVudCkge1xcbiAgICAgIGNvbnN0IHZhbHVlU2VhcmNoID0gbmV3IFJlZ0V4cChldmVudC52YWx1ZSwgJ2knKTtcXG5cXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcxJykge1xcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZS5maWx0ZXIoKGl0ZW0pID0+IHtcXG4gICAgICAgICAgcmV0dXJuIHZhbHVlU2VhcmNoLnRlc3QoaXRlbS5wcm9kdWN0X3R5cGUpO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZScsIGZpbHRlcmVkKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMicpIHtcXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5maWx0ZXJPcHRpb25zU2l6ZS5maWx0ZXIoKGl0ZW0pID0+IHtcXG4gICAgICAgICAgcmV0dXJuIHZhbHVlU2VhcmNoLnRlc3QoaXRlbS5zaXplKTtcXG4gICAgICAgIH0pO1xcblxcbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcXG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zU2l6ZScsIGZpbHRlcmVkKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMycpIHtcXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5maWx0ZXJPcHRpb25zR3JhZGUuZmlsdGVyKChpdGVtKSA9PiB7XFxuICAgICAgICAgIHJldHVybiB2YWx1ZVNlYXJjaC50ZXN0KGl0ZW0uZ3JhZGUpO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNHcmFkZScsIGZpbHRlcmVkKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gdGhpcy5maWx0ZXJPcHRpb25zQ29ubmVjdGlvbi5maWx0ZXIoKGl0ZW0pID0+IHtcXG4gICAgICAgICAgcmV0dXJuIHZhbHVlU2VhcmNoLnRlc3QoaXRlbS5jb25uZWN0aW9uKTtcXG4gICAgICAgIH0pO1xcblxcbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcXG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbicsIGZpbHRlcmVkKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LnZhbHVlID09PSAnJykge1xcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbi5nbG9iZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL2hlYWRlci1iYWNrZ3JvdW5kLTIucG5nKTsgXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMjRweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLndyYXBwZXItYmFubmVyIHtcXG4gIGhlaWdodDogNDUwcHg7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMS5wbmc/MjQ5ZDAyZjE0OWFiY2U5MTY3NzBlNzliMDVmZTM4ZGVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9sYW5kaW5nLWltYWdlLTIucG5nPzlkYzU0OTZjZWMwMmQzN2IzYmE5YzFhODY3ZjNlODA5XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvcGlwZXNhbGVzLnN2Zz82MzM1NDg2ZWQ4OTA1ZGFkMDZjODBlOGM2MDJiYzM2MFwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2RvbGxhci5zdmc/OWMyMjZlOTc0NGViMDYyNTdmYzFkMjczOGZmOTM4YjFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9nbG9iZS5zdmc/Nzk4NGNhZjNjNzBiZDM5MzQ1Njc1MGU3MDNiZjY1MTFcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9waXBhLnN2Zz8wZGM2ZTJhOTAwMDkxNmUxNjhiZGM4MjIyOGQxYzI3N1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMjMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkZXJGdWxsUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iYTI1OGJkNCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjM0ODI3MWFcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMzQ4MjcxYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMzQ4MjcxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMzQ4MjcxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMzQ4MjcxYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YzNDgyNzFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9hZGVyRnVsbFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMjU4YmQ0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9hZGVyRnVsbFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvYWRlckZ1bGxQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvYWRlckZ1bGxQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJhMjU4YmQ0Jmxhbmc9c2Nzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiYTI1OGJkNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiYTI1OGJkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiYTI1OGJkNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9hZGVyRnVsbFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhMjU4YmQ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYmEyNThiZDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkZXJGdWxsUGFnZS9Mb2FkZXJGdWxsUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlbGVjdEZpbHRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhmNzcxZjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWxlY3RGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlbGVjdEZpbHRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzhmNzcxZjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzhmNzcxZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzhmNzcxZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlbGVjdEZpbHRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhmNzcxZjZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OGY3NzFmNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlci9TZWxlY3RGaWx0ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kM2YzNmE1NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2QzZjM2YTU0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2QzZjM2YTU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2QzZjM2YTU0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kM2YzNmE1NFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2QzZjM2YTU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvbkZpcnN0L0NhcmRTZWN0aW9uRmlyc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmM0ZDA0NmNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FyZFNlY3Rpb25TZWNvbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JjNGQwNDZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JjNGQwNDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JjNGQwNDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmM0ZDA0NmNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYzRkMDQ2YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25TZWNvbmQvQ2FyZFNlY3Rpb25TZWNvbmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QYWdlTm90Rm91bmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIxYzMzZGU0XCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjFjMzNkZTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjFjMzNkZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjFjMzNkZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2VOb3RGb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjFjMzNkZTRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMWMzM2RlNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlTm90Rm91bmQvUGFnZU5vdEZvdW5kLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGQ1MzcyOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZUZvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OGQ1MzcyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OGQ1MzcyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OGQ1MzcyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGQ1MzcyOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4ZDUzNzI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaGVOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGRhZDBkYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE0ZGFkMGRhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE0ZGFkMGRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE0ZGFkMGRhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVOYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNGRhZDBkYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0ZGFkMGRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZU5hdmlnYXRpb24vVGhlTmF2aWdhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjM4NGMxY1wiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZmMzg0YzFjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZmMzg0YzFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZmMzg0YzFjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmYzODRjMWNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZjM4NGMxYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0Fib3V0L0Fib3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDk3ZmExNzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOTdmYTE3NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOTdmYTE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOTdmYTE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOTdmYTE3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGVyRnVsbFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkZXJGdWxsUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25TZWNvbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsInJvdXRlciIsInN0b3JlIiwiZWwiLCJ3aW5kb3ciLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTUlYX0FQUF9VUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiQXBwIiwiVGhlTmF2aWdhdGlvbiIsIlRoZUZvb3RlciIsIkxvYWRlckZ1bGxQYWdlIiwiU2VsZWN0RmlsdGVyIiwiY29tcG9uZW50IiwiRXZlbnRCdXMiLCJsaWJyYXJ5IiwiZmFzIiwiZmFiIiwiZmFyIiwiRm9udEF3ZXNvbWVJY29uIiwiYWRkIiwiaSIsInByb3RvdHlwZSIsIiRhcGkiLCIkZXZlbnRCdXMiLCJWdWVSb3V0ZXIiLCJQYWdlTm90Rm91bmQiLCJIb21lIiwiQWJvdXQiLCJyb3V0ZXMiLCJwYXRoIiwibmFtZSIsInVzZSIsIm1vZGUiLCJtb2NrUHJvZHVjdCIsImdldFByb2R1Y3RzIiwiVnVleCIsImFwcCIsIlN0b3JlIiwibW9kdWxlcyIsImFjdGlvbnMiLCJzZXRGaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUiLCJfcmVmIiwiZGF0YSIsImNvbW1pdCIsInNldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUiLCJfcmVmMiIsInNldEZpbHRlck9wdGlvbnNTaXplIiwiX3JlZjMiLCJzZXRTZWxlY3RlZEZpbHRlclNpemUiLCJfcmVmNCIsInNldEZpbHRlck9wdGlvbnNHcmFkZSIsIl9yZWY1Iiwic2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZSIsIl9yZWY2Iiwic2V0RmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24iLCJfcmVmNyIsInNldFNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiIsIl9yZWY4IiwiZ2V0dGVycyIsImdldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSIsInN0YXRlIiwiZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlIiwiZ2V0U2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSIsInNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUiLCJnZXRGaWx0ZXJPcHRpb25zU2l6ZSIsImZpbHRlck9wdGlvbnNTaXplIiwiZ2V0U2VsZWN0ZWRGaWx0ZXJTaXplIiwic2VsZWN0ZWRGaWx0ZXJTaXplIiwiZ2V0RmlsdGVyT3B0aW9uc0dyYWRlIiwiZmlsdGVyT3B0aW9uc0dyYWRlIiwiZ2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZSIsInNlbGVjdGVkRmlsdGVyR3JhZGUiLCJnZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbiIsImZpbHRlck9wdGlvbnNDb25uZWN0aW9uIiwiZ2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uIiwic2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uIiwibXV0YXRpb25zIiwibmFtZXNwYWNlZCIsIlNFVF9GSUxURVJfT1BUSU9OU19QUk9EVUNUX1RZUEUiLCJwYXlsb2FkIiwiU0VUX1NFTEVDVEVEX0ZJTFRFUl9QUk9EVUNUX1RZUEUiLCJTRVRfRklMVEVSX09QVElPTlNfU0laRSIsIlNFVF9TRUxFQ1RFRF9GSUxURVJfU0laRSIsIlNFVF9GSUxURVJfT1BUSU9OU19HUkFERSIsIlNFVF9TRUxFQ1RFRF9GSUxURVJfR1JBREUiLCJTRVRfRklMVEVSX09QVElPTlNfQ09OTkVDVElPTiIsIlNFVF9TRUxFQ1RFRF9GSUxURVJfQ09OTkVDVElPTiIsImZvcm1hdGVkTnVtYmVyIiwibnVtYmVyIiwiZm9ybWF0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZm9ybWF0dGVkTnVtYmVyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInNob3dMb2FkZXIiLCJjcmVhdGVkIiwiJG9uIiwib25IYW5kbGVPcGVuIiwib25IYW5kbGVDbG9zZSIsIm1ldGhvZHMiLCJwcm9wcyIsImNhdGVnb3J5IiwidHlwZSIsIlN0cmluZyIsInRpdGxlIiwic2VsZWN0ZWRWYWx1ZSIsIm9wdGlvbnMiLCJBcnJheSIsIl9kZWZhdWx0IiwidmlzaWJsZURyb3Bkb3duIiwic2VhcmNoVmFsdWUiLCJkZWJvdW5jZSIsIl90aGlzIiwib25IYW5kbGVWaXNpYmxlRHJvcGRvd24iLCIkZW1pdCIsIm9uQ2xpY2tSZXNldEZpbHRlciIsImNvbXB1dGVUaXRsZUxpc3QiLCJyZXN1bHQiLCJjb21wdXRlRm9ybWF0UXR5IiwicGFyYW0iLCJvbkhhbmRsZVNlbGVjdEl0ZW0iLCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtIiwiX3RoaXMyIiwiY2xlYXJUaW1lb3V0IiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJsYWJlbEFjdGlvbjEiLCJsaW5rQWN0aW9uMSIsImxhYmVsQWN0aW9uMiIsImxpbmtBY3Rpb24yIiwibG9nb1BpcGVzIiwibG9nbyIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFwcGx5IiwiZXJyIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIm9iaiIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJOdW1iZXIiLCJtYXBTdGF0ZSIsIkNhcmRTZWN0aW9uRmlyc3QiLCJDYXJkU2VjdGlvblNlY29uZCIsIlByb2R1Y3RTZXJ2aWNlcyIsIkdsb2JlU3ZnIiwiRG9sbGFyU3ZnIiwiUGlwYVN2ZyIsIkxhbmRpbmdJbWFnZTEiLCJMYW5kaW5nSW1hZ2UyIiwiY29tcG9uZW50cyIsImNhcmRTZWN0aW9uRmlyc3RMaXN0IiwiaWQiLCJsYW5kaW5nSW1hZ2UxIiwibGFuZGluZ0ltYWdlMiIsImNvbXB1dGVkIiwibW91bnRlZCIsImluaXRpYWxpemUiLCJnZXRBbGxQcm9kdWN0IiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwiY29uc29sZSIsImxvZyIsImZpbHRlckRhdGEiLCJwYXJhbUZpbHRlciIsImZpbHRlckNyaXRlcmlhIiwiYXBwbHlGaWx0ZXIiLCJjcml0ZXJpYSIsIml0ZW0iLCJmaWx0ZXJlZERhdGEiLCJub3RGaWx0ZXJlZERhdGEiLCJtb2RpZmllZE5vdEZpbHRlcmVkRGF0YSIsIm1hcCIsInF0eSIsImNvbWJpbmVkRGF0YSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldERhdGFQcm9kdWN0VHlwZSIsInByb2R1Y3RUeXBlUXR5U3VtIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInByb2R1Y3RfdHlwZSIsInBhcnNlSW50IiwicHJvZHVjdFR5cGVRdHlBcnJheSIsInByb2R1Y3RUeXBlIiwidG90YWxfcXR5IiwiZ2V0RGF0YVNpemUiLCJzaXplUXR5U3VtIiwic2l6ZSIsInNpemVRdHlBcnJheSIsImdldERhdGFHcmFkZSIsImdyYWRlUXR5U3VtIiwiZ3JhZGUiLCJncmFkZVF0eUFycmF5IiwiZ2V0RGF0YUNvbm5lY3Rpb24iLCJjb25uZWN0aW9uUXR5U3VtIiwiY29ubmVjdGlvbiIsImNvbm5lY3Rpb25RdHlBcnJheSIsIl9hcmd1bWVudHMiLCJfY2FsbGVlMiIsIndpdGhMb2FkZXIiLCJyZXMiLCJib2R5IiwicmVzRmlsdGVyRGF0YSIsInJlc0RhdGFQcm9kdWN0VHlwZSIsInJlc0RhdGFzU2l6ZSIsInJlc0RhdGFHcmFkZSIsInJlc0RhdGFDb25uZWN0aW9uIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYXNzaWduIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJvbkhhbmRsZVNlbGVjdGRhdGEiLCJldmVudCIsIm9uSGFuZGxlUmVzZXRkYXRhIiwidmFsdWVTZWFyY2giLCJSZWdFeHAiLCJmaWx0ZXJlZCIsInRlc3QiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiX3YiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwic3RhdGljQ2xhc3MiLCJfbSIsIl9lIiwiYXR0cnMiLCJvbiIsImNsaWNrIiwiX3MiLCIkZXZlbnQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJkb21Qcm9wcyIsImlubmVySFRNTCIsInBsYWNlaG9sZGVyIiwia2V5dXAiLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIl9sIiwic3JjIiwiYWx0IiwidG8iLCJvblNlbGVjdERhdGEiLCJvblJlc2V0RGF0YSIsImZpbHRlckxpc3RJdGVtIiwiaWR4Iiwic2VsZWN0ZWQiLCJyb3dzIl0sInNvdXJjZVJvb3QiOiIifQ==