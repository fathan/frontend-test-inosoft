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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_Layouts_PageNotFound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Layouts/PageNotFound */ "./resources/js/components/Layouts/PageNotFound/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/Home */ "./resources/js/pages/Home/index.js");




var routes = [{
  path: '/',
  name: 'Home',
  component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  path: '/:pathMatch(.*)*',
  name: 'Page Not Found',
  component: _components_Layouts_PageNotFound__WEBPACK_IMPORTED_MODULE_0__["default"]
}];
vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3TSxDQUFDLGlFQUFlLHdNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdEIsQ0FBQyxpRUFBZSxzTUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVYsQ0FBQyxpRUFBZSwwTUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5CLENBQUMsaUVBQWUsMk1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQyxDQUFDLGlFQUFlLG1NQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaEIsQ0FBQyxpRUFBZSx1TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5DLENBQUMsaUVBQWUsOExBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvZXZlbnQtYnVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9mb3J0LWF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbmZpZ3VyYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9pbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2VydmljZXMvYXBpL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc3RvcmVzL21vZHVsZXMvYXBwL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9tb2R1bGVzL2FwcC9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdG9yZXMvbW9kdWxlcy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9tb2R1bGVzL2FwcC9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9tb2R1bGVzL2FwcC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXRpbHMvYXBwLmpzIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vTG9hZGVyRnVsbFBhZ2UvTG9hZGVyRnVsbFBhZ2UudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vU2VsZWN0RmlsdGVyL1NlbGVjdEZpbHRlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QvQ2FyZFNlY3Rpb25GaXJzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVGb290ZXIvVGhlRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vTG9hZGVyRnVsbFBhZ2UvTG9hZGVyRnVsbFBhZ2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbi9TZWxlY3RGaWx0ZXIvU2VsZWN0RmlsdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvbkZpcnN0L0NhcmRTZWN0aW9uRmlyc3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1BhZ2VOb3RGb3VuZC9QYWdlTm90Rm91bmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkZXJGdWxsUGFnZS9Mb2FkZXJGdWxsUGFnZS52dWU/Mzk4NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZT8wYmU2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9waXBlc2FsZXMuc3ZnIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc3ZnL2RvbGxhci5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zdmcvZ2xvYmUuc3ZnIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc3ZnL3BpcGEuc3ZnIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlckZ1bGxQYWdlL0xvYWRlckZ1bGxQYWdlLnZ1ZT81ZDA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlP2U5MjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0FwcC52dWU/ZGNjMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vTG9hZGVyRnVsbFBhZ2UvTG9hZGVyRnVsbFBhZ2UudnVlP2YzNzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlci9TZWxlY3RGaWx0ZXIudnVlPzBkNjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT82NjlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT82NjliIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvUGFnZU5vdEZvdW5kL1BhZ2VOb3RGb3VuZC52dWU/M2IyNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlPzUyMzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlPzZmMzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWU/YmRiYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vTG9hZGVyRnVsbFBhZ2UvTG9hZGVyRnVsbFBhZ2UudnVlPzQ0M2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlci9TZWxlY3RGaWx0ZXIudnVlPzU0ZTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT9mYTU0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT9jYzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWU/MTAxZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZU5hdmlnYXRpb24vVGhlTmF2aWdhdGlvbi52dWU/OGNlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZT82NDc0Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3Jlcyc7XG5pbXBvcnQgJy4vY29uZmlndXJhdGlvbnMnO1xuaW1wb3J0ICdAc3R5bGVzL2FwcC5zY3NzJztcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIHJvdXRlcjogcm91dGVyLFxuICBzdG9yZVxufSk7Iiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTUlYX0FQUF9VUkw7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IEFwcCBmcm9tICdAcm9vdC9BcHAudnVlJztcblxuaW1wb3J0IFRoZU5hdmlnYXRpb24gZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uJztcbmltcG9ydCBUaGVGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9UaGVGb290ZXInO1xuXG5pbXBvcnQgTG9hZGVyRnVsbFBhZ2UgZnJvbSAnQGNvbXBvbmVudHMvQ29tbW9uL0xvYWRlckZ1bGxQYWdlJztcbmltcG9ydCBTZWxlY3RGaWx0ZXIgZnJvbSAnQGNvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlcic7XG5cblZ1ZS5jb21wb25lbnQoJ0FwcCcsIEFwcCk7XG5WdWUuY29tcG9uZW50KCdUaGVOYXZpZ2F0aW9uJywgVGhlTmF2aWdhdGlvbik7XG5WdWUuY29tcG9uZW50KCdUaGVGb290ZXInLCBUaGVGb290ZXIpO1xuVnVlLmNvbXBvbmVudCgnTG9hZGVyRnVsbFBhZ2UnLCBMb2FkZXJGdWxsUGFnZSk7XG5WdWUuY29tcG9uZW50KCdTZWxlY3RGaWx0ZXInLCBTZWxlY3RGaWx0ZXIpOyIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuZXhwb3J0IGNvbnN0IEV2ZW50QnVzID0gbmV3IFZ1ZSgpOyIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFiIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5cbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWUnO1xuXG5leHBvcnQgY29uc3QgYWRkID0gbGlicmFyeS5hZGQ7XG5cbmxpYnJhcnkuYWRkKGZhcyk7XG5saWJyYXJ5LmFkZChmYWIpO1xubGlicmFyeS5hZGQoZmFyKTtcblxuVnVlLmNvbXBvbmVudCgnRm9udEF3ZXNvbWVJY29uJywgRm9udEF3ZXNvbWVJY29uKTtcblxuZXhwb3J0IHsgRm9udEF3ZXNvbWVJY29uIH07XG4iLCJpbXBvcnQgJy4vaW5pdGlhbGl6ZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0ICcuL3BsdWdpbnMnO1xuaW1wb3J0ICcuL2ZvcnQtYXdlc29tZSc7XG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbmltcG9ydCB7IEV2ZW50QnVzIH0gZnJvbSAnQGNvbmZpZ3VyYXRpb25zL2V2ZW50LWJ1cyc7XG5cbigoaSkgPT4ge1xuICBpLnByb3RvdHlwZS4kYXBpID0ge307XG4gIGkucHJvdG90eXBlLiRldmVudEJ1cyA9IEV2ZW50QnVzO1xufSkoVnVlKTtcbiIsIi8vIGltcG9ydCBWdWUgZnJvbSAndnVlJzsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXRzL1BhZ2VOb3RGb3VuZCc7XG5pbXBvcnQgSG9tZSBmcm9tICdAcGFnZXMvSG9tZSc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLzpwYXRoTWF0Y2goLiopKicsXG4gICAgbmFtZTogJ1BhZ2UgTm90IEZvdW5kJyxcbiAgICBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZFxuICB9XG5dO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICBtb2RlOiAnaGlzdG9yeScsXG4gIHJvdXRlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsIi8vIGltcG9ydCBodHRwIGZyb20gJ0BzZXJ2aWNlcy9odHRwJztcblxuaW1wb3J0IG1vY2tQcm9kdWN0IGZyb20gJy4vLi4vLi4vX19tb2Nrc19fL3Byb2R1Y3QuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0UHJvZHVjdHM6ICgpID0+IHtcbiAgICByZXR1cm4gbW9ja1Byb2R1Y3Q7XG4gIH1cbn07IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGVzL2FwcCc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczoge1xuICAgIGFwcFxuICB9XG59KTtcbiIsImNvbnN0IGFjdGlvbnMgPSB7XG4gIHNldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX0ZJTFRFUl9PUFRJT05TX1BST0RVQ1RfVFlQRScsIGRhdGEpO1xuICB9LFxuICBzZXRTZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfU0VMRUNURURfRklMVEVSX1BST0RVQ1RfVFlQRScsIGRhdGEpO1xuICB9LFxuICBzZXRGaWx0ZXJPcHRpb25zU2l6ZSAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX0ZJTFRFUl9PUFRJT05TX1NJWkUnLCBkYXRhKTtcbiAgfSxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXJTaXplICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfU0VMRUNURURfRklMVEVSX1NJWkUnLCBkYXRhKTtcbiAgfSxcbiAgc2V0RmlsdGVyT3B0aW9uc0dyYWRlICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfRklMVEVSX09QVElPTlNfR1JBREUnLCBkYXRhKTtcbiAgfSxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZSAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX1NFTEVDVEVEX0ZJTFRFUl9HUkFERScsIGRhdGEpO1xuICB9LFxuICBzZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbiAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX0ZJTFRFUl9PUFRJT05TX0NPTk5FQ1RJT04nLCBkYXRhKTtcbiAgfSxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfU0VMRUNURURfRklMVEVSX0NPTk5FQ1RJT04nLCBkYXRhKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uczsiLCJjb25zdCBnZXR0ZXJzID0ge1xuICBnZXRGaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZTtcbiAgfSxcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZTtcbiAgfSxcbiAgZ2V0RmlsdGVyT3B0aW9uc1NpemUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlck9wdGlvbnNTaXplO1xuICB9LFxuICBnZXRTZWxlY3RlZEZpbHRlclNpemUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkRmlsdGVyU2l6ZTtcbiAgfSxcbiAgZ2V0RmlsdGVyT3B0aW9uc0dyYWRlIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXJPcHRpb25zR3JhZGU7XG4gIH0sXG4gIGdldFNlbGVjdGVkRmlsdGVyR3JhZGUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkRmlsdGVyR3JhZGU7XG4gIH0sXG4gIGdldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXJPcHRpb25zQ29ubmVjdGlvbjtcbiAgfSxcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb247XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldHRlcnM7IiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IGdldHRlcnMgZnJvbSAnLi9nZXR0ZXJzJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZSxcbiAgZ2V0dGVycyxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zXG59O1xuIiwiY29uc3QgbXV0YXRpb25zID0ge1xuICBTRVRfRklMVEVSX09QVElPTlNfUFJPRFVDVF9UWVBFIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSA9IHBheWxvYWQ7XG4gIH0sXG4gIFNFVF9TRUxFQ1RFRF9GSUxURVJfUFJPRFVDVF9UWVBFIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUgPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfRklMVEVSX09QVElPTlNfU0laRSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5maWx0ZXJPcHRpb25zU2l6ZSA9IHBheWxvYWQ7XG4gIH0sXG4gIFNFVF9TRUxFQ1RFRF9GSUxURVJfU0laRSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZWxlY3RlZEZpbHRlclNpemUgPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfRklMVEVSX09QVElPTlNfR1JBREUgKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuZmlsdGVyT3B0aW9uc0dyYWRlID0gcGF5bG9hZDtcbiAgfSxcbiAgU0VUX1NFTEVDVEVEX0ZJTFRFUl9HUkFERSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZWxlY3RlZEZpbHRlckdyYWRlID0gcGF5bG9hZDtcbiAgfSxcbiAgU0VUX0ZJTFRFUl9PUFRJT05TX0NPTk5FQ1RJT04gKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24gPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfU0VMRUNURURfRklMVEVSX0NPTk5FQ1RJT04gKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uID0gcGF5bG9hZDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbXV0YXRpb25zOyIsIi8qKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3Qgc3RhdGUgPSB7XG4gIGZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZTogW10sXG4gIHNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGU6ICcnLFxuICBmaWx0ZXJPcHRpb25zU2l6ZTogW10sXG4gIHNlbGVjdGVkRmlsdGVyU2l6ZTogJycsXG4gIGZpbHRlck9wdGlvbnNHcmFkZTogW10sXG4gIHNlbGVjdGVkRmlsdGVyR3JhZGU6ICcnLFxuICBmaWx0ZXJPcHRpb25zQ29ubmVjdGlvbjogW10sXG4gIHNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbjogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlOyIsImZ1bmN0aW9uIGZvcm1hdGVkTnVtYmVyIChudW1iZXIsIGZvcm1hdCA9ICcuJykge1xuICBjb25zdCBmb3JtYXR0ZWROdW1iZXIgPSBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBmb3JtYXQpO1xuICByZXR1cm4gZm9ybWF0dGVkTnVtYmVyO1xufVxuXG5jb25zdCBzbGVlcCA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG59KTtcblxuZXhwb3J0IHtcbiAgZm9ybWF0ZWROdW1iZXIsXG4gIHNsZWVwXG59OyIsIjwhLS0gZXNsaW50LWRpc2FibGUgbWF4LWxlbiAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIHYtaWY9XCJzaG93TG9hZGVyXCJcbiAgICBjbGFzcz1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIHctZnVsbCBoLXNjcmVlbiB6LTUwIG92ZXJmbG93LWhpZGRlbiBiZy1ibGFjayBvcGFjaXR5LTYwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJsZHMtcmlwcGxlXCI+XG4gICAgICA8ZGl2IC8+XG4gICAgICA8ZGl2IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dMb2FkZXI6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRldmVudEJ1cy4kb24oJ29wZW5Mb2FkZXJGdWxsUGFnZScsIHRoaXMub25IYW5kbGVPcGVuKTtcbiAgICB0aGlzLiRldmVudEJ1cy4kb24oJ2Nsb3NlTG9hZGVyRnVsbFBhZ2UnLCB0aGlzLm9uSGFuZGxlQ2xvc2UpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkhhbmRsZU9wZW4gKCkge1xuICAgICAgdGhpcy5zaG93TG9hZGVyID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgb25IYW5kbGVDbG9zZSAoKSB7XG4gICAgICB0aGlzLnNob3dMb2FkZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4ubGRzLXJpcHBsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubGRzLXJpcHBsZSBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XG59XG5cbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xuICAwJSB7XG4gICAgdG9wOiAzNnB4O1xuICAgIGxlZnQ6IDM2cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG48L3N0eWxlPiIsIjwhLS0gZXNsaW50LWRpc2FibGUgbWF4LWxlbiB2dWUvbm8tdi1odG1sIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwidy1mdWxsIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctd2hpdGUgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTQgcHktNSBpdGVtcy1jZW50ZXJcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgQGNsaWNrPVwib25IYW5kbGVWaXNpYmxlRHJvcGRvd25cIlxuICAgICAgPlxuICAgICAgICA8c3Bhbj57eyB0aXRsZSB9fSA8L3NwYW4+XG4gICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCJcbiAgICAgICAgICA6aWNvbj1cIih2aXNpYmxlRHJvcGRvd24gPyAnY2hldnJvbi11cCcgOiAnY2hldnJvbi1kb3duJylcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1sZWZ0XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic2VsZWN0ZWRWYWx1ZSAhPT0gJydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIiBAY2xpY2s9XCJvbkNsaWNrUmVzZXRGaWx0ZXIoY2F0ZWdvcnkpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcIj5cbiAgICAgICAgICAgICAge3sgc2VsZWN0ZWRWYWx1ZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgIGljb249XCJ0aW1lcy1jaXJjbGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxkaXZcbiAgICAgIHYtc2hvdz1cInZpc2libGVEcm9wZG93blwiXG4gICAgICBjbGFzcz1cInctZnVsbCBtdC0yIHotMTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInAtM1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgdi1odG1sPVwiY29tcHV0ZVRpdGxlTGlzdCh0aXRsZSlcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXQtZ3JvdXAtc2VhcmNoXCIgY2xhc3M9XCJzci1vbmx5XCI+XG4gICAgICAgICAgU2VhcmNoXG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LXktMCBydGw6aW5zZXQtci0wIHN0YXJ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHMtMyBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgaWNvbj1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFZhbHVlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgdy1mdWxsIHAtMiBwbC02IHBzLTEwIHRleHQtc20gdGV4dC1ncmF5LTkwMCBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctd2hpdGVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgQGtleXVwPVwib25IYW5kbGVGaWx0ZXJMaXN0SXRlbVwiXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dWwgY2xhc3M9XCJoLTQ4IHB4LTMgcGItMyBvdmVyZmxvdy15LWF1dG8gdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGkpIGluIG9wdGlvbnNcIlxuICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBAY2xpY2s9XCJvbkhhbmRsZVNlbGVjdEl0ZW0oY2F0ZWdvcnksIGl0ZW0pXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2F0ZWdvcnkgPT09ICcxJ1wiPlxuICAgICAgICAgICAgICB7eyBpdGVtLnByb2R1Y3RfdHlwZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNhdGVnb3J5ID09PSAnMidcIj5cbiAgICAgICAgICAgICAge3sgaXRlbS5zaXplIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2F0ZWdvcnkgPT09ICczJ1wiPlxuICAgICAgICAgICAgICB7eyBpdGVtLmdyYWRlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2F0ZWdvcnkgPT09ICc0J1wiPlxuICAgICAgICAgICAgICB7eyBpdGVtLmNvbm5lY3Rpb24gfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC15ZWxsb3ctNTAwXCI+XG4gICAgICAgICAgICAgIHt7IGNvbXB1dGVGb3JtYXRRdHkoaXRlbS50b3RhbF9xdHkpIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBmb3JtYXRlZE51bWJlciB9IGZyb20gJ0B1dGlscy9hcHAnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHNlbGVjdGVkVmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSlcbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmxlRHJvcGRvd246IGZhbHNlLFxuICAgICAgc2VhcmNoVmFsdWU6ICcnLFxuICAgICAgZGVib3VuY2U6IG51bGxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRldmVudEJ1cy4kb24oJ2Nsb3NlU2VsZWN0RmlsdGVyJywgKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlRHJvcGRvd24gPSBmYWxzZTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uSGFuZGxlVmlzaWJsZURyb3Bkb3duICgpIHtcbiAgICAgIGlmICghdGhpcy52aXNpYmxlRHJvcGRvd24pIHtcbiAgICAgICAgdGhpcy4kZXZlbnRCdXMuJGVtaXQoJ2Nsb3NlU2VsZWN0RmlsdGVyJyk7XG4gICAgICAgIHRoaXMudmlzaWJsZURyb3Bkb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnZpc2libGVEcm9wZG93biA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGlja1Jlc2V0RmlsdGVyIChjYXRlZ29yeSkge1xuICAgICAgdGhpcy4kZW1pdCgnb25SZXNldERhdGEnLCB7XG4gICAgICAgIGNhdGVnb3J5XG4gICAgICB9KTtcblxuICAgICAgdGhpcy52aXNpYmxlRHJvcGRvd24gPSBmYWxzZTtcbiAgICB9LFxuICAgIGNvbXB1dGVUaXRsZUxpc3QgKHR5cGUpIHtcbiAgICAgIGxldCByZXN1bHQgPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09ICdQcm9kdWN0IFR5cGUnKSB7XG4gICAgICAgIHJlc3VsdCA9ICdTZWxlY3QgYSA8c3Ryb25nPlByb2R1Y3QgVHlwZTwvc3Ryb25nPiBiZWxvdyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ1NpemUnKSB7XG4gICAgICAgIHJlc3VsdCA9ICdTZWxlY3QgYW4gPHN0cm9uZz5PRDwvc3Ryb25nPiBiZWxvdyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ0dyYWRlJykge1xuICAgICAgICByZXN1bHQgPSAnU2VsZWN0IGEgPHN0cm9uZz5HcmFkZSBUeXBlPC9zdHJvbmc+IGJlbG93JztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnQ29ubmVjdGlvbicpIHtcbiAgICAgICAgcmVzdWx0ID0gJ1NlbGVjdCBhIDxzdHJvbmc+Q29ubmVjdGlvbiBUeXBlPC9zdHJvbmc+IGJlbG93JztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGNvbXB1dGVGb3JtYXRRdHkgKHBhcmFtKSB7XG4gICAgICByZXR1cm4gZm9ybWF0ZWROdW1iZXIocGFyYW0pO1xuICAgIH0sXG4gICAgb25IYW5kbGVTZWxlY3RJdGVtIChjYXRlZ29yeSwgZGF0YSkge1xuICAgICAgdGhpcy4kZW1pdCgnb25TZWxlY3REYXRhJywge1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub25IYW5kbGVWaXNpYmxlRHJvcGRvd24oKTtcbiAgICB9LFxuICAgIG9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2UpO1xuICAgICAgdGhpcy5kZWJvdW5jZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWU7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeTtcblxuICAgICAgICB0aGlzLiRlbWl0KCdmaWx0ZXJMaXN0SXRlbScsIHtcbiAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaC0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgOnNyYz1cImljb25cIlxuICAgICAgICBhbHQ9XCJJY29uXCJcbiAgICAgICAgY2xhc3M9XCJtLWF1dG9cIlxuICAgICAgPlxuICAgIDwvZGl2PlxuICAgIDxoMiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWdyYXktNzAwIG1iLTNcIj5cbiAgICAgIHt7IHRpdGxlIH19XG4gICAgPC9oMj5cbiAgICA8cCBjbGFzcz1cInRleHQtYmFzZSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICB7eyBkZXNjcmlwdGlvbiB9fVxuICAgIDwvcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PiIsIjwhLS0gZXNsaW50LWRpc2FibGUgbWF4LWxlbiAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgIDxoMiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LWJhc2UgbGc6dGV4dC00eGwgdGV4dC1ncmF5LTYwMCBtYi00XCI+XG4gICAgICB7eyB0aXRsZSB9fVxuICAgIDwvaDI+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWxnIHRleHQtZ3JheS01MDAgbWItNVwiPlxuICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTRcIj5cbiAgICAgIDxyb3V0ZXItbGluayA6dG89XCJsaW5rQWN0aW9uMVwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm91bmRlZC1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS00MDAgcHgtOCBweS0yXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQteWVsbG93LTUwMFwiXG4gICAgICAgICAgICBpY29uPVwiaW5mby1jaXJjbGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAge3sgbGFiZWxBY3Rpb24xIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgIDxyb3V0ZXItbGluayA6dG89XCJsaW5rQWN0aW9uMlwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTggcHktMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAge3sgbGFiZWxBY3Rpb24yIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBsYWJlbEFjdGlvbjE6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBsaW5rQWN0aW9uMToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGxhYmVsQWN0aW9uMjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGxpbmtBY3Rpb24yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPG5hdiBjbGFzcz1cInctZnVsbCBiZy13aGl0ZSBweS00IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cIm10LTJcIj5cbiAgICAgICAgICA8aW1nIDpzcmM9XCJsb2dvXCIgYWx0PVwiXCI+XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIFxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTJcIj5cbiAgICAgICAgICBQaXBlc2FsZXMgJmNvcHk7IHt7IHllYXIgfX0gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCIgY2xhc3M9XCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCI+XG4gICAgICAgICAgQ29va2llIFBvbGljeVxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCIgY2xhc3M9XCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCI+XG4gICAgICAgICAgQ29va2llIFNldHRpbmdzXG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIj5cbiAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCIgY2xhc3M9XCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCI+XG4gICAgICAgICAgVGVybXMgYW5kIENvbmRpdGlvbnNcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbG9nb1BpcGVzIGZyb20gJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9waXBlc2FsZXMuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nbzogbG9nb1BpcGVzLFxuICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgfTtcbiAgfVxufTtcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPG5hdiBjbGFzcz1cInctZnVsbCBiZy13aGl0ZSBweS0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9cIiBjbGFzcz1cIm10LTJcIj5cbiAgICAgICAgICA8aW1nIDpzcmM9XCJsb2dvXCIgYWx0PVwiXCI+XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LXllbGxvdy02MDBcIlxuICAgICAgICAgICAgaWNvbj1cImtleVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTIgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9zaWduLXVwXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiXG4gICAgICAgICAgICBpY29uPVwidXNlci1wbHVzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWwtMiBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiPlxuICAgICAgICAgIEFib3V0IFBpcGVzYWxlc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LTRcIj5cbiAgICAgICAgICBPQ1RHIE1hcmtldHBsYWNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiPlxuICAgICAgICAgIEJsb2dcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LThcIj5cbiAgICAgICAgICBTaGVsbCBNeSBQaXBlc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgaWNvbj1cImhlYXJ0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBXaXNobGlzdFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgIGljb249XCJzaG9wcGluZy1jYXJ0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBNeSBFbnF1aXJ5XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgaWNvbj1cIm1lZGFsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBDb21wYXJlXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbG9nb1BpcGVzIGZyb20gJy4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9waXBlc2FsZXMuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nbzogbG9nb1BpcGVzXG4gICAgfTtcbiAgfVxufTtcbjwvc2NyaXB0PiIsIjwhLS0gZXNsaW50LWRpc2FibGUgbWF4LWxlbiAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgIDxUaGVOYXZpZ2F0aW9uIC8+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyIGJnLWdyYXktNzAwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ2xvYmVcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIHotMjAgd3JhcHBlci1iYW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS93ZWJwL3RvbWktZnVsbC53ZWJwXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHgtNCBteC1hdXRvIG10LTQ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXgtdy00eGwgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm10LTggbWItNiB0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgWW91ciBnbG9iYWwgbWFya2V0cGxhY2UgdG9cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm10LTggbWItNiB0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC15ZWxsb3ctNjAwXCI+XG4gICAgICAgICAgICAgICAgICBidXkgJiBzZWxsIHR1YnVsYXIgcHJvZHVjdHNcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWF4LXctM3hsIG14LWF1dG8gbWItMTAgdGV4dC1sZyB0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICBRdWlja2x5IG92ZXJjb21lIHN1cHBseSBnYXBzIGFuZCB0YXJnZXQgemVybyBpbnZlbnRvcnkgd2l0aCBQaXBlc2FsZXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00IC1tdC04IHotMTAgb3ZlZmxvdy1oaWRkZW4gaC0yOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XCIxXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlByb2R1Y3QgVHlwZVwiXG4gICAgICAgICAgICAgICAgOnNlbGVjdGVkVmFsdWU9XCJzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZVwiXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cIm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAb25SZXNldERhdGE9XCJvbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAZmlsdGVyTGlzdEl0ZW09XCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XCIyXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNpemVcIlxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVwic2VsZWN0ZWRGaWx0ZXJTaXplXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpbHRlck9wdGlvbnNTaXplXCJcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBmaWx0ZXJMaXN0SXRlbT1cIm9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT1cIjNcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiR3JhZGVcIlxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVwic2VsZWN0ZWRGaWx0ZXJHcmFkZVwiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJmaWx0ZXJPcHRpb25zR3JhZGVcIlxuICAgICAgICAgICAgICAgIEBvblNlbGVjdERhdGE9XCJvbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgQG9uUmVzZXREYXRhPVwib25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgQGZpbHRlckxpc3RJdGVtPVwib25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PVwiNFwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb25uZWN0aW9uXCJcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cInNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvblwiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJmaWx0ZXJPcHRpb25zQ29ubmVjdGlvblwiXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cIm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAb25SZXNldERhdGE9XCJvbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAZmlsdGVyTGlzdEl0ZW09XCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxDYXJkU2VjdGlvbkZpcnN0XG4gICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaWR4KSBpbiBjYXJkU2VjdGlvbkZpcnN0TGlzdFwiXG4gICAgICAgICAgOmtleT1cImlkeFwiXG4gICAgICAgICAgOnRpdGxlPVwiaXRlbS50aXRsZVwiXG4gICAgICAgICAgOmRlc2NyaXB0aW9uPVwiaXRlbS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgOmljb249XCJpdGVtLmljb25cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICA6c3JjPVwibGFuZGluZ0ltYWdlMVwiXG4gICAgICAgICAgICAgIGFsdD1cIkxhbmRpbmcgSW1hZ2UgMVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibS1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8Q2FyZFNlY3Rpb25TZWNvbmRcbiAgICAgICAgICAgIHRpdGxlPVwiVXJnZW50IGZ1bGZpbG1lbnQgZm9yIHRpbWUtY3JpdGljYWwgcHJvamVjdHNcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQaXBlc2FsZXMgbWFya2V0cGxhY2UgYXNzaXN0cyBpbiBtYW5hZ2luZyBwcm9jdXJlbWVudCBzaG9ydGZhbGxzIHF1aWNrbHkgYW5kIGVhc2lseS4gQnJvd3NlIGFuZCBmaW5kIHF1YWxpdHkgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgdG8geW91ciBzcGVjaWZpY2F0aW9ucywgYW5kIFBpcGVzYWxlcyByZWNvZ25pc2VkIHRyYWRlIHBhcnRuZXJzIHdpbGwgaGFuZGxlIHRoZSBvcmRlciBmdWxmaWxtZW50LCBndWFyYW50ZWVpbmcgcGVhY2Ugb2YgbWluZC5cIlxuICAgICAgICAgICAgbGFiZWxBY3Rpb24xPVwiSG93IHRvIEJ1eT9cIlxuICAgICAgICAgICAgbGlua0FjdGlvbjE9XCIvXCJcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMj1cIkJyb3dzZSBJbnZlbnRvcnlcIlxuICAgICAgICAgICAgbGlua0FjdGlvbjI9XCIvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwidy1mdWxsIHB5LThcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8Q2FyZFNlY3Rpb25TZWNvbmRcbiAgICAgICAgICAgIHRpdGxlPVwiRmFpciBtYXJrZXQgcmF0ZXMgZm9yIHN1cnBsdXMgaW52ZW50b3J5XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGFyZ2V0IHplcm8gaW52ZW50b3J5IGJ5IG1vdmluZyBzdXJwbHVzIHByb2R1Y3RzIHRocm91Z2ggYSB0cnVzdGVkIG5ldHdvcmsgc3VwcG9ydGVkIGJ5IE1hcnViZW5pLUl0b2NodSBTdGVlbCBJbmMgKE1JU0kpLiBQaXBlc2FsZXMgY2FuIHByb3ZpZGUgeW91IHdpdGggcHJpY2luZyByZWNvbW1lbmRhdGlvbnMgdG8gYXJyaXZlIGF0IGEgZmFpciBvcGVuIG1hcmtldCB2YWx1ZSwgdGhlbiBjb25uZWN0IHlvdSB3aXRoIHBvdGVudGlhbCBidXllcnMgZ2xvYmFsbHkuXCJcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMT1cIkhvdyB0byBCdXk/XCJcbiAgICAgICAgICAgIGxpbmtBY3Rpb24xPVwiL1wiXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjI9XCJTaGVsbCBNeSBQaXBlc1wiXG4gICAgICAgICAgICBsaW5rQWN0aW9uMj1cIi9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgOnNyYz1cImxhbmRpbmdJbWFnZTJcIlxuICAgICAgICAgICAgICBhbHQ9XCJMYW5kaW5nIEltYWdlIDFcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm0tYXV0b1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctZ3JheS03MDAgcm91bmRlZC1sZyBnYXAtNCBwLTE2IHB5LTI0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xMFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIE5lZWQgbW9yZSBpbmZvcm1hdGlvbj9cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC15ZWxsb3ctNTAwXCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZSpcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvdW50cnkqXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXggZ2FwLTQgZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctNC8xMlwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkNvdW50cnkgQ29kZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLVwiPi08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi1cIj4tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItXCI+LTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLVwiPi08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy04LzEyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsKlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBwLTIuNSB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiYWdncmUtY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy00IGgtNCB0ZXh0LWJsdWUtNjAwIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJhZ2dyZS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdGF5IHVwZGF0ZWQgd2l0IG91ciBsYXRlc3QgbmV3c1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAwIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBweC0yNCBweS0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPFRoZUZvb3RlciAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICdAdXRpbHMvYXBwJztcblxuaW1wb3J0IENhcmRTZWN0aW9uRmlyc3QgZnJvbSAnQGNvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdCc7XG5pbXBvcnQgQ2FyZFNlY3Rpb25TZWNvbmQgZnJvbSAnQGNvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25TZWNvbmQnO1xuXG5pbXBvcnQgUHJvZHVjdFNlcnZpY2VzIGZyb20gJ0BzZXJ2aWNlcy9hcGkvcHJvZHVjdCc7XG5cbmltcG9ydCBHbG9iZVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvZ2xvYmUuc3ZnJztcbmltcG9ydCBEb2xsYXJTdmcgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvc3ZnL2RvbGxhci5zdmcnO1xuaW1wb3J0IFBpcGFTdmcgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvc3ZnL3BpcGEuc3ZnJztcblxuaW1wb3J0IExhbmRpbmdJbWFnZTEgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMS5wbmcnO1xuaW1wb3J0IExhbmRpbmdJbWFnZTIgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDYXJkU2VjdGlvbkZpcnN0LFxuICAgIENhcmRTZWN0aW9uU2Vjb25kXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJkU2VjdGlvbkZpcnN0TGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgdGl0bGU6ICdCdXkgb3Igc2VsbCBnbG9iYWxseSwgbWFuYWdlIGl0IGxvY2FsbHknLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGlwZXNhbGVzIGVuYWJsZXMgc2VsbGVycyB0byBwcm9tb3RlIHN1cnBsdXMgaW52ZW50b3J5IGdsb2JhbGx5LCBvcGVuaW5nIGJ1eWVycyBzZWFyY2ggaG9yaXpvbnMuIFdlIHByb3ZpZGUgYSBzZWN1cmUgYW5kIHVuY29tcGxpY2F0ZWQgcHJvY2Vzcywgd2l0aCBib3RoIGJ1eWVycyBhbmQgc2VsbGVycyBlbmpveWluZyB0aGUgY29uZmlkZW5jZSBvZiB0cmFuc2FjdGlvbiBtYW5hZ2VtZW50IGJ5IHRoZWlyIGxvY2FsIE1hcnViZW5pLUl0b2NodSBTdGVlbCAoTUlTSSkgbmV0d29yay4nLFxuICAgICAgICAgIGljb246IEdsb2JlU3ZnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ1N1cHBvcnRpbmcgY29zdC1lZmZlY3RpdmUgaW52ZW50b3J5IG1hbmFnZW1lbnQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGlwZXNhbGVzIG1hcmtldHBsYWNlIGFsbG93cyBvcmdhbmlzYXRpb25zIG9mIGFsbCBzaXplcyB0byBxdWlja2x5IHRyYWRlIHR1YnVsYXIgcHJvZHVjdHMgYW5kIGFjY2Vzc29yaWVzIGF0IGEgZmFpciBwcmljZS4gWW91IGNhbiBub3cga2VlcCBjb3N0cyBpbiBsaW5lIHdpdGggZXhwZWN0YXRpb25zIGFuZCBlYXNpbHkgYWNjZXNzIG9yIG9mZmxvYWQgZXhjZXNzIGludmVudG9yeS4nLFxuICAgICAgICAgIGljb246IERvbGxhclN2Z1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgdGl0bGU6ICdMYXJnZSByYW5nZSBvZiByZWFkeS1tYWRlIHBpcGVzIGZpdCBmb3IgcHVycG9zZScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgaXMgaG9tZSB0byBhIGxhcmdlIHJhbmdlIG9mIHF1YWxpdHkgT2lsIENvdW50cnkgVHVidWxhciBHb29kcyAoT0NURykuIEJyb3dzZSBieSBwcm9kdWN0IHR5cGUsIGdyYWRlLCBzaXplLCBjb25uZWN0aW9uIGFuZCBsb2NhdGlvbi4gQmUgYXNzdXJlZCBvZiBzdWl0YWJsZSBiYWNrdXAgc3VwcGxpZXMgdG8gbWVldCB1cmdlbnQgZGVtYW5kLicsXG4gICAgICAgICAgaWNvbjogUGlwYVN2Z1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbGFuZGluZ0ltYWdlMTogTGFuZGluZ0ltYWdlMSxcbiAgICAgIGxhbmRpbmdJbWFnZTI6IExhbmRpbmdJbWFnZTJcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcFN0YXRlKCdhcHAnLCB7XG4gICAgICBmaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlLFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZTogKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlLFxuICAgICAgZmlsdGVyT3B0aW9uc1NpemU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc1NpemUsXG4gICAgICBzZWxlY3RlZEZpbHRlclNpemU6IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJTaXplLFxuICAgICAgZmlsdGVyT3B0aW9uc0dyYWRlOiAoc3RhdGUpID0+IHN0YXRlLmZpbHRlck9wdGlvbnNHcmFkZSxcbiAgICAgIHNlbGVjdGVkRmlsdGVyR3JhZGU6IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJHcmFkZSxcbiAgICAgIGZpbHRlck9wdGlvbnNDb25uZWN0aW9uOiAoc3RhdGUpID0+IHN0YXRlLmZpbHRlck9wdGlvbnNDb25uZWN0aW9uLFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uOiAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvblxuICAgIH0pXG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZ2V0QWxsUHJvZHVjdCAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBQcm9kdWN0U2VydmljZXMuZ2V0UHJvZHVjdHMoKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGZpbHRlckRhdGEgKGRhdGEsIHBhcmFtRmlsdGVyKSB7XG4gICAgICBsZXQgZmlsdGVyQ3JpdGVyaWEgPSBwYXJhbUZpbHRlcjtcblxuICAgICAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZGF0YSwgY3JpdGVyaWEpID0+IHtcbiAgICAgICAgaWYgKCFjcml0ZXJpYSkge1xuICAgICAgICAgIHJldHVybiBkYXRhOyBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjcml0ZXJpYSkge1xuICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gY3JpdGVyaWFba2V5XSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGFwcGx5RmlsdGVyKGRhdGEsIGZpbHRlckNyaXRlcmlhKTtcbiAgICAgIGNvbnN0IG5vdEZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiAhYXBwbHlGaWx0ZXIoW2l0ZW1dLCBmaWx0ZXJDcml0ZXJpYSkubGVuZ3RoKTtcbiAgICAgIGNvbnN0IG1vZGlmaWVkTm90RmlsdGVyZWREYXRhID0gbm90RmlsdGVyZWREYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBxdHk6IDAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb21iaW5lZERhdGEgPSBbLi4uZmlsdGVyZWREYXRhLCAuLi5tb2RpZmllZE5vdEZpbHRlcmVkRGF0YV07XG5cbiAgICAgIHJldHVybiBjb21iaW5lZERhdGE7XG4gICAgfSxcbiAgICBnZXREYXRhUHJvZHVjdFR5cGUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHByb2R1Y3RUeXBlUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICBpZiAoYWNjW2N1cnIucHJvZHVjdF90eXBlXSkge1xuICAgICAgICAgIGFjY1tjdXJyLnByb2R1Y3RfdHlwZV0gKz0gcGFyc2VJbnQoY3Vyci5xdHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFjY1tjdXJyLnByb2R1Y3RfdHlwZV0gPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3QgcHJvZHVjdFR5cGVRdHlBcnJheSA9IE9iamVjdC5rZXlzKHByb2R1Y3RUeXBlUXR5U3VtKS5tYXAoKHByb2R1Y3RUeXBlKSA9PiAoe1xuICAgICAgICBwcm9kdWN0X3R5cGU6IHByb2R1Y3RUeXBlLFxuICAgICAgICB0b3RhbF9xdHk6IHByb2R1Y3RUeXBlUXR5U3VtW3Byb2R1Y3RUeXBlXVxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gcHJvZHVjdFR5cGVRdHlBcnJheTtcbiAgICB9LFxuICAgIGdldERhdGFTaXplIChkYXRhKSB7XG4gICAgICBjb25zdCBzaXplUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICBpZiAoYWNjW2N1cnIuc2l6ZV0pIHtcbiAgICAgICAgICBhY2NbY3Vyci5zaXplXSArPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWNjW2N1cnIuc2l6ZV0gPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3Qgc2l6ZVF0eUFycmF5ID0gT2JqZWN0LmtleXMoc2l6ZVF0eVN1bSkubWFwKChzaXplKSA9PiAoe1xuICAgICAgICBzaXplLFxuICAgICAgICB0b3RhbF9xdHk6IHNpemVRdHlTdW1bc2l6ZV1cbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIHNpemVRdHlBcnJheTtcbiAgICB9LFxuICAgIGdldERhdGFHcmFkZSAoZGF0YSkge1xuICAgICAgY29uc3QgZ3JhZGVRdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2NbY3Vyci5ncmFkZV0pIHtcbiAgICAgICAgICBhY2NbY3Vyci5ncmFkZV0gKz0gcGFyc2VJbnQoY3Vyci5xdHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFjY1tjdXJyLmdyYWRlXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBncmFkZVF0eUFycmF5ID0gT2JqZWN0LmtleXMoZ3JhZGVRdHlTdW0pLm1hcCgoZ3JhZGUpID0+ICh7XG4gICAgICAgIGdyYWRlLFxuICAgICAgICB0b3RhbF9xdHk6IGdyYWRlUXR5U3VtW2dyYWRlXVxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZ3JhZGVRdHlBcnJheTtcbiAgICB9LFxuICAgIGdldERhdGFDb25uZWN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICBpZiAoYWNjW2N1cnIuY29ubmVjdGlvbl0pIHtcbiAgICAgICAgICBhY2NbY3Vyci5jb25uZWN0aW9uXSArPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWNjW2N1cnIuY29ubmVjdGlvbl0gPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgY29uc3QgY29ubmVjdGlvblF0eUFycmF5ID0gT2JqZWN0LmtleXMoY29ubmVjdGlvblF0eVN1bSkubWFwKChjb25uZWN0aW9uKSA9PiAoe1xuICAgICAgICBjb25uZWN0aW9uLFxuICAgICAgICB0b3RhbF9xdHk6IGNvbm5lY3Rpb25RdHlTdW1bY29ubmVjdGlvbl1cbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIGNvbm5lY3Rpb25RdHlBcnJheTtcbiAgICB9LFxuICAgIGFzeW5jIGluaXRpYWxpemUgKHdpdGhMb2FkZXIgPSBmYWxzZSkge1xuICAgICAgaWYgKHdpdGhMb2FkZXIpIHtcbiAgICAgICAgdGhpcy4kZXZlbnRCdXMuJGVtaXQoJ29wZW5Mb2FkZXJGdWxsUGFnZScpO1xuICAgICAgICBhd2FpdCBzbGVlcCgxMDAwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5nZXRBbGxQcm9kdWN0KCk7XG4gICAgICBjb25zdCBib2R5ID0ge307XG5cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUgIT09ICcnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xuICAgICAgICAgIHByb2R1Y3RfdHlwZTogdGhpcy5zZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJTaXplICE9PSAnJykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHksIHtcbiAgICAgICAgICBzaXplOiB0aGlzLnNlbGVjdGVkRmlsdGVyU2l6ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyR3JhZGUgIT09ICcnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xuICAgICAgICAgIGdyYWRlOiB0aGlzLnNlbGVjdGVkRmlsdGVyR3JhZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24gIT09ICcnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xuICAgICAgICAgIGNvbm5lY3Rpb246IHRoaXMuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgY29uc3QgcmVzRmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YShyZXMsIGJvZHkpO1xuXG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIFxuICAgICAgY29uc3QgcmVzRGF0YVByb2R1Y3RUeXBlID0gdGhpcy5nZXREYXRhUHJvZHVjdFR5cGUocmVzRmlsdGVyRGF0YSk7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZScsIHJlc0RhdGFQcm9kdWN0VHlwZSk7XG5cbiAgICAgIGNvbnN0IHJlc0RhdGFzU2l6ZSA9IHRoaXMuZ2V0RGF0YVNpemUocmVzRmlsdGVyRGF0YSk7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNTaXplJywgcmVzRGF0YXNTaXplKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzRGF0YUdyYWRlID0gdGhpcy5nZXREYXRhR3JhZGUocmVzRmlsdGVyRGF0YSk7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNHcmFkZScsIHJlc0RhdGFHcmFkZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHJlc0RhdGFDb25uZWN0aW9uID0gdGhpcy5nZXREYXRhQ29ubmVjdGlvbihyZXNGaWx0ZXJEYXRhKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24nLCByZXNEYXRhQ29ubmVjdGlvbik7XG5cbiAgICAgIGlmICh3aXRoTG9hZGVyKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50QnVzLiRlbWl0KCdjbG9zZUxvYWRlckZ1bGxQYWdlJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkhhbmRsZVNlbGVjdGRhdGEgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcxJykge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUnLCBldmVudC5kYXRhLnByb2R1Y3RfdHlwZSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcyJykge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyU2l6ZScsIGV2ZW50LmRhdGEuc2l6ZSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICczJykge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyR3JhZGUnLCBldmVudC5kYXRhLmdyYWRlKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzQnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uJywgZXZlbnQuZGF0YS5jb25uZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0aWFsaXplKHRydWUpO1xuICAgIH0sXG4gICAgb25IYW5kbGVSZXNldGRhdGEgKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcxJykge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUnLCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcyJykge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyU2l6ZScsICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzMnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZScsICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzQnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uJywgJycpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRpYWxpemUodHJ1ZSk7XG4gICAgfSxcbiAgICBvbkhhbmRsZUZpbHRlckxpc3RJdGVtIChldmVudCkge1xuICAgICAgY29uc3QgdmFsdWVTZWFyY2ggPSBuZXcgUmVnRXhwKGV2ZW50LnZhbHVlLCAnaScpO1xuXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcxJykge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMuZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVNlYXJjaC50ZXN0KGl0ZW0ucHJvZHVjdF90eXBlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZScsIGZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMicpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmZpbHRlck9wdGlvbnNTaXplLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVNlYXJjaC50ZXN0KGl0ZW0uc2l6ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zU2l6ZScsIGZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMycpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmZpbHRlck9wdGlvbnNHcmFkZS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVTZWFyY2gudGVzdChpdGVtLmdyYWRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNHcmFkZScsIGZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmZpbHRlck9wdGlvbnNDb25uZWN0aW9uLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVNlYXJjaC50ZXN0KGl0ZW0uY29ubmVjdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbicsIGZpbHRlcmVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5nbG9iZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2UvaGVhZGVyLWJhY2tncm91bmQtMi5wbmcpOyBcbiAgYmFja2dyb3VuZC1zaXplOiAxMDI0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi53cmFwcGVyLWJhbm5lciB7XG4gIGhlaWdodDogNDUwcHg7XG59XG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX2MoXCJyb3V0ZXItdmlld1wiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJMb2FkZXJGdWxsUGFnZVwiKV0sIDEpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF92bS5zaG93TG9hZGVyXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCB3LWZ1bGwgaC1zY3JlZW4gei01MCBvdmVyZmxvdy1oaWRkZW4gYmctYmxhY2sgb3BhY2l0eS02MCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGRzLXJpcHBsZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInctZnVsbCBiZy1ncmF5LTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS01MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXdoaXRlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC00IHB5LTUgaXRlbXMtY2VudGVyXCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25IYW5kbGVWaXNpYmxlRHJvcGRvd24gfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpICsgXCIgXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGljb246IF92bS52aXNpYmxlRHJvcGRvd24gPyBcImNoZXZyb24tdXBcIiA6IFwiY2hldnJvbi1kb3duXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCB0ZXh0LWxlZnRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5zZWxlY3RlZFZhbHVlICE9PSBcIlwiXG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tSZXNldEZpbHRlcihfdm0uY2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC15ZWxsb3ctNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkVmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJ0aW1lcy1jaXJjbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQteWVsbG93LTYwMCB1cHBlcmNhc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIEFsbFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnZpc2libGVEcm9wZG93bixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmlzaWJsZURyb3Bkb3duXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJ3LWZ1bGwgbXQtMiB6LTEwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZ1wiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5jb21wdXRlVGl0bGVMaXN0KF92bS50aXRsZSkpIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIsIGF0dHJzOiB7IGZvcjogXCJpbnB1dC1ncm91cC1zZWFyY2hcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBTZWFyY2hcXG4gICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVsYXRpdmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBpbnNldC15LTAgcnRsOmluc2V0LXItMCBzdGFydC0wIGZsZXggaXRlbXMtY2VudGVyIHBzLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoVmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFZhbHVlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJibG9jayB3LWZ1bGwgcC0yIHBsLTYgcHMtMTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy13aGl0ZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2hWYWx1ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGtleXVwOiBfdm0ub25IYW5kbGVGaWx0ZXJMaXN0SXRlbSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2hWYWx1ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaC00OCBweC0zIHBiLTMgb3ZlcmZsb3cteS1hdXRvIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5vcHRpb25zLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVTZWxlY3RJdGVtKF92bS5jYXRlZ29yeSwgaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yeSA9PT0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5wcm9kdWN0X3R5cGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yeSA9PT0gXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uc2l6ZSkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yeSA9PT0gXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uZ3JhZGUpICsgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uY2F0ZWdvcnkgPT09IFwiNFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0uY29ubmVjdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC15ZWxsb3ctNTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmNvbXB1dGVGb3JtYXRRdHkoaXRlbS50b3RhbF9xdHkpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtY29sXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaC0xNiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tYXV0b1wiLFxuICAgICAgICBhdHRyczogeyBzcmM6IF92bS5pY29uLCBhbHQ6IFwiSWNvblwiIH0sXG4gICAgICB9KSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ncmF5LTcwMCBtYi0zXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgXCIpLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1iYXNlIHRleHQtZ3JheS01MDBcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLmRlc2NyaXB0aW9uKSArIFwiXFxuICBcIiksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJoMlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC1iYXNlIGxnOnRleHQtNHhsIHRleHQtZ3JheS02MDAgbWItNFwiIH0sXG4gICAgICBbX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS50aXRsZSkgKyBcIlxcbiAgXCIpXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxnIHRleHQtZ3JheS01MDAgbWItNVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uZGVzY3JpcHRpb24pICsgXCJcXG4gIFwiKSxcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBnYXAtNFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogX3ZtLmxpbmtBY3Rpb24xIH0gfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJyb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBweC04IHB5LTJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQteWVsbG93LTUwMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiaW5mby1jaXJjbGVcIiB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0ubGFiZWxBY3Rpb24xKSArIFwiXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBfdm0ubGlua0FjdGlvbjIgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAwIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBweC04IHB5LTIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYWJlbEFjdGlvbjIpICsgXCJcXG4gICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCBwLTE2XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNSBteC1hdXRvIG15LThcIixcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYXgtdy1tZCB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1kOnRleHQtM3hsIG1iLTEwXCIgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgUGFnZSBOb3QgRm91bmRcXG4gICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogeyBwYXRoOiBcIi9cIiB9IH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1lLTIgbWItMiBmb2N1czpvdXRsaW5lLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgQmFjayB0byBEYXNoYm9hcmRcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItOCBmb250LWV4dHJhYm9sZCB0ZXh0LTl4bFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbX3ZtLl92KFwiRXJyb3JcIildKSxcbiAgICAgIF92bS5fdihcIjQwNFxcbiAgICAgIFwiKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJuYXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBiZy13aGl0ZSBweS00IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG0tYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yXCIsIGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmxvZ28sIGFsdDogXCJcIiB9IH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgUGlwZXNhbGVzIMKpIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS55ZWFyKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBDb29raWUgUG9saWN5XFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBDb29raWUgU2V0dGluZ3NcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFByaXZhY3kgUG9saWN5XFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IFwiL1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBUZXJtcyBhbmQgQ29uZGl0aW9uc1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJuYXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBiZy13aGl0ZSBweS0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG0tYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yXCIsIGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmxvZ28sIGFsdDogXCJcIiB9IH0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL2xvZ2luXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LXllbGxvdy02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJrZXlcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMiBmb250LXNlbWlib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgTG9naW5cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvc2lnbi11cFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwidXNlci1wbHVzXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLTIgZm9udC1zZW1pYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFNpZ24gVXBcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LTRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgQWJvdXQgUGlwZXNhbGVzXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIE9DVEcgTWFya2V0cGxhY2VcXG4gICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LTRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgQmxvZ1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctZ3JheS02MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC04XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFNoZWxsIE15IFBpcGVzXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImhlYXJ0XCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTYwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBXaXNobGlzdFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwic2hvcHBpbmctY2FydFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgTXkgRW5xdWlyeVxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwibWVkYWxcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIENvbXBhcmVcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJUaGVOYXZpZ2F0aW9uXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJ3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgLW10LTggei0xMCBvdmVmbG93LWhpZGRlbiBoLTI4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNlbGVjdEZpbHRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlByb2R1Y3QgVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IF92bS5zZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5maWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3REYXRhOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2V0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTZWxlY3RGaWx0ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogX3ZtLnNlbGVjdGVkRmlsdGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZmlsdGVyT3B0aW9uc1NpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3REYXRhOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2V0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTZWxlY3RGaWx0ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJHcmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IF92bS5zZWxlY3RlZEZpbHRlckdyYWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5maWx0ZXJPcHRpb25zR3JhZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3REYXRhOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2V0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTZWxlY3RGaWx0ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIjRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb25uZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogX3ZtLnNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3REYXRhOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2V0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0SXRlbTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktMjRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNhcmRTZWN0aW9uRmlyc3RMaXN0LCBmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJDYXJkU2VjdGlvbkZpcnN0XCIsIHtcbiAgICAgICAgICAgICAga2V5OiBpZHgsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktMjRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ubGFuZGluZ0ltYWdlMSwgYWx0OiBcIkxhbmRpbmcgSW1hZ2UgMVwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctMS8yXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiQ2FyZFNlY3Rpb25TZWNvbmRcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXJnZW50IGZ1bGZpbG1lbnQgZm9yIHRpbWUtY3JpdGljYWwgcHJvamVjdHNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgXCJQaXBlc2FsZXMgbWFya2V0cGxhY2UgYXNzaXN0cyBpbiBtYW5hZ2luZyBwcm9jdXJlbWVudCBzaG9ydGZhbGxzIHF1aWNrbHkgYW5kIGVhc2lseS4gQnJvd3NlIGFuZCBmaW5kIHF1YWxpdHkgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgdG8geW91ciBzcGVjaWZpY2F0aW9ucywgYW5kIFBpcGVzYWxlcyByZWNvZ25pc2VkIHRyYWRlIHBhcnRuZXJzIHdpbGwgaGFuZGxlIHRoZSBvcmRlciBmdWxmaWxtZW50LCBndWFyYW50ZWVpbmcgcGVhY2Ugb2YgbWluZC5cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24xOiBcIkhvdyB0byBCdXk/XCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24xOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24yOiBcIkJyb3dzZSBJbnZlbnRvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgbGlua0FjdGlvbjI6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktOFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkNhcmRTZWN0aW9uU2Vjb25kXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZhaXIgbWFya2V0IHJhdGVzIGZvciBzdXJwbHVzIGludmVudG9yeVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICBcIlRhcmdldCB6ZXJvIGludmVudG9yeSBieSBtb3Zpbmcgc3VycGx1cyBwcm9kdWN0cyB0aHJvdWdoIGEgdHJ1c3RlZCBuZXR3b3JrIHN1cHBvcnRlZCBieSBNYXJ1YmVuaS1JdG9jaHUgU3RlZWwgSW5jIChNSVNJKS4gUGlwZXNhbGVzIGNhbiBwcm92aWRlIHlvdSB3aXRoIHByaWNpbmcgcmVjb21tZW5kYXRpb25zIHRvIGFycml2ZSBhdCBhIGZhaXIgb3BlbiBtYXJrZXQgdmFsdWUsIHRoZW4gY29ubmVjdCB5b3Ugd2l0aCBwb3RlbnRpYWwgYnV5ZXJzIGdsb2JhbGx5LlwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbEFjdGlvbjE6IFwiSG93IHRvIEJ1eT9cIixcbiAgICAgICAgICAgICAgICAgICAgbGlua0FjdGlvbjE6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbEFjdGlvbjI6IFwiU2hlbGwgTXkgUGlwZXNcIixcbiAgICAgICAgICAgICAgICAgICAgbGlua0FjdGlvbjI6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ubGFuZGluZ0ltYWdlMiwgYWx0OiBcIkxhbmRpbmcgSW1hZ2UgMVwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiVGhlRm9vdGVyXCIpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcbiAgICAgIFwic2VjdGlvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyIGJnLWdyYXktNzAwXCIsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdsb2JlXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gei0yMCB3cmFwcGVyLWJhbm5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFic29sdXRlIGZsZXggdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL3dlYnAvdG9taS1mdWxsLndlYnBcIixcbiAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBtdC00NFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFlvdXIgZ2xvYmFsIG1hcmtldHBsYWNlIHRvXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQteWVsbG93LTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgYnV5ICYgc2VsbCB0dWJ1bGFyIHByb2R1Y3RzXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13LTN4bCBteC1hdXRvIG1iLTEwIHRleHQtbGcgdGV4dC1ncmF5LTMwMFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgUXVpY2tseSBvdmVyY29tZSBzdXBwbHkgZ2FwcyBhbmQgdGFyZ2V0IHplcm8gaW52ZW50b3J5IHdpdGggUGlwZXNhbGVzLlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBweS04XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGdhcC00IHAtMTYgcHktMjRcIixcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMTBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIE5lZWQgbW9yZSBpbmZvcm1hdGlvbj9cXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC15ZWxsb3ctNTAwXCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ29udGFjdCBVc1xcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZm9ybVwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgZmxleC1jb2wgbGc6ZmxleC1yb3cgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctMS8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIk5hbWUqXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiQ291bnRyeSpcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctNC8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgc2VsZWN0ZWQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb3VudHJ5IENvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTgvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJQaG9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctMS8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJFbWFpbCpcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2sgcC0yLjUgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNFwiLCBwbGFjZWhvbGRlcjogXCJZb3VyIE1lc3NhZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBnYXAtNCB3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLTJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYWdncmUtY2hlY2tcIiwgdHlwZTogXCJjaGVja2JveFwiLCB2YWx1ZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImFnZ3JlLWNoZWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFN0YXkgdXBkYXRlZCB3aXQgb3VyIGxhdGVzdCBuZXdzXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgcHgtMjQgcHktMiB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgU2VuZFxcbiAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sZHMtcmlwcGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG4ubGRzLXJpcHBsZSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG59XFxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbn1cXG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xcbjAlIHtcXG4gICAgdG9wOiAzNnB4O1xcbiAgICBsZWZ0OiAzNnB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgd2lkdGg6IDcycHg7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0NvbW1vbi9Mb2FkZXJGdWxsUGFnZS9Mb2FkZXJGdWxsUGFnZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhEQUFBO0FBQ0Y7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7QUFFQTtBQUNFO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7QUFDRjtBQUNBO0lBQ0UsUUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7QUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sZHMtcmlwcGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4ubGRzLXJpcHBsZSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG59XFxuXFxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xcbiAgMCUge1xcbiAgICB0b3A6IDM2cHg7XFxuICAgIGxlZnQ6IDM2cHg7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgd2lkdGg6IDcycHg7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdsb2JlW2RhdGEtdi0wOTdmYTE3Nl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS9oZWFkZXItYmFja2dyb3VuZC0yLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMjRweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuLndyYXBwZXItYmFubmVyW2RhdGEtdi0wOTdmYTE3Nl0ge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBeWlCQTtFQUNBLGdGQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNBO0FBRUE7RUFDQSxhQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPlxcbjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcInctZnVsbFxcXCI+XFxuICAgIDxUaGVOYXZpZ2F0aW9uIC8+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlciBiZy1ncmF5LTcwMFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZ2xvYmVcXFwiIC8+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gei0yMCB3cmFwcGVyLWJhbm5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBmbGV4IHctZnVsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm10LTEyXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS93ZWJwL3RvbWktZnVsbC53ZWJwXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBweC00IG14LWF1dG8gbXQtNDRcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWF4LXctNHhsIG14LWF1dG8gdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm10LTggbWItNiB0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTEwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgWW91ciBnbG9iYWwgbWFya2V0cGxhY2UgdG9cXG4gICAgICAgICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQteWVsbG93LTYwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgYnV5ICYgc2VsbCB0dWJ1bGFyIHByb2R1Y3RzXFxuICAgICAgICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtYXgtdy0zeGwgbXgtYXV0byBtYi0xMCB0ZXh0LWxnIHRleHQtZ3JheS0zMDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIFF1aWNrbHkgb3ZlcmNvbWUgc3VwcGx5IGdhcHMgYW5kIHRhcmdldCB6ZXJvIGludmVudG9yeSB3aXRoIFBpcGVzYWxlcy5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgLW10LTggei0xMCBvdmVmbG93LWhpZGRlbiBoLTI4XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNFxcXCI+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJQcm9kdWN0IFR5cGVcXFwiXFxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVxcXCJzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlXFxcIlxcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlXFxcIlxcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVxcXCJvbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQG9uUmVzZXREYXRhPVxcXCJvbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICBAZmlsdGVyTGlzdEl0ZW09XFxcIm9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0oJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XFxcIjJcXFwiXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJTaXplXFxcIlxcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cXFwic2VsZWN0ZWRGaWx0ZXJTaXplXFxcIlxcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiZmlsdGVyT3B0aW9uc1NpemVcXFwiXFxuICAgICAgICAgICAgICAgIEBvblNlbGVjdERhdGE9XFxcIm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICBAb25SZXNldERhdGE9XFxcIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIEBmaWx0ZXJMaXN0SXRlbT1cXFwib25IYW5kbGVGaWx0ZXJMaXN0SXRlbSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlclxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT1cXFwiM1xcXCJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdyYWRlXFxcIlxcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cXFwic2VsZWN0ZWRGaWx0ZXJHcmFkZVxcXCJcXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcImZpbHRlck9wdGlvbnNHcmFkZVxcXCJcXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cXFwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cXFwib25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQGZpbHRlckxpc3RJdGVtPVxcXCJvbkhhbmRsZUZpbHRlckxpc3RJdGVtKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PVxcXCI0XFxcIlxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiQ29ubmVjdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgOnNlbGVjdGVkVmFsdWU9XFxcInNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcImZpbHRlck9wdGlvbnNDb25uZWN0aW9uXFxcIlxcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVxcXCJvbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQG9uUmVzZXREYXRhPVxcXCJvbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICBAZmlsdGVyTGlzdEl0ZW09XFxcIm9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0oJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbCBweS0yNFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFxcXCI+XFxuICAgICAgICA8Q2FyZFNlY3Rpb25GaXJzdFxcbiAgICAgICAgICB2LWZvcj1cXFwiKGl0ZW0sIGlkeCkgaW4gY2FyZFNlY3Rpb25GaXJzdExpc3RcXFwiXFxuICAgICAgICAgIDprZXk9XFxcImlkeFxcXCJcXG4gICAgICAgICAgOnRpdGxlPVxcXCJpdGVtLnRpdGxlXFxcIlxcbiAgICAgICAgICA6ZGVzY3JpcHRpb249XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiXFxuICAgICAgICAgIDppY29uPVxcXCJpdGVtLmljb25cXFwiXFxuICAgICAgICAvPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ3LWZ1bGwgcHktMjRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICA6c3JjPVxcXCJsYW5kaW5nSW1hZ2UxXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJMYW5kaW5nIEltYWdlIDFcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwibS1hdXRvXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxcbiAgICAgICAgICAgIHRpdGxlPVxcXCJVcmdlbnQgZnVsZmlsbWVudCBmb3IgdGltZS1jcml0aWNhbCBwcm9qZWN0c1xcXCJcXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cXFwiUGlwZXNhbGVzIG1hcmtldHBsYWNlIGFzc2lzdHMgaW4gbWFuYWdpbmcgcHJvY3VyZW1lbnQgc2hvcnRmYWxscyBxdWlja2x5IGFuZCBlYXNpbHkuIEJyb3dzZSBhbmQgZmluZCBxdWFsaXR5IHR1YnVsYXIgcHJvZHVjdHMgYW5kIGFjY2Vzc29yaWVzIHRvIHlvdXIgc3BlY2lmaWNhdGlvbnMsIGFuZCBQaXBlc2FsZXMgcmVjb2duaXNlZCB0cmFkZSBwYXJ0bmVycyB3aWxsIGhhbmRsZSB0aGUgb3JkZXIgZnVsZmlsbWVudCwgZ3VhcmFudGVlaW5nIHBlYWNlIG9mIG1pbmQuXFxcIlxcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMT1cXFwiSG93IHRvIEJ1eT9cXFwiXFxuICAgICAgICAgICAgbGlua0FjdGlvbjE9XFxcIi9cXFwiXFxuICAgICAgICAgICAgbGFiZWxBY3Rpb24yPVxcXCJCcm93c2UgSW52ZW50b3J5XFxcIlxcbiAgICAgICAgICAgIGxpbmtBY3Rpb24yPVxcXCIvXFxcIlxcbiAgICAgICAgICAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbCBweS04XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxcbiAgICAgICAgICAgIHRpdGxlPVxcXCJGYWlyIG1hcmtldCByYXRlcyBmb3Igc3VycGx1cyBpbnZlbnRvcnlcXFwiXFxuICAgICAgICAgICAgZGVzY3JpcHRpb249XFxcIlRhcmdldCB6ZXJvIGludmVudG9yeSBieSBtb3Zpbmcgc3VycGx1cyBwcm9kdWN0cyB0aHJvdWdoIGEgdHJ1c3RlZCBuZXR3b3JrIHN1cHBvcnRlZCBieSBNYXJ1YmVuaS1JdG9jaHUgU3RlZWwgSW5jIChNSVNJKS4gUGlwZXNhbGVzIGNhbiBwcm92aWRlIHlvdSB3aXRoIHByaWNpbmcgcmVjb21tZW5kYXRpb25zIHRvIGFycml2ZSBhdCBhIGZhaXIgb3BlbiBtYXJrZXQgdmFsdWUsIHRoZW4gY29ubmVjdCB5b3Ugd2l0aCBwb3RlbnRpYWwgYnV5ZXJzIGdsb2JhbGx5LlxcXCJcXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjE9XFxcIkhvdyB0byBCdXk/XFxcIlxcbiAgICAgICAgICAgIGxpbmtBY3Rpb24xPVxcXCIvXFxcIlxcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMj1cXFwiU2hlbGwgTXkgUGlwZXNcXFwiXFxuICAgICAgICAgICAgbGlua0FjdGlvbjI9XFxcIi9cXFwiXFxuICAgICAgICAgIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgOnNyYz1cXFwibGFuZGluZ0ltYWdlMlxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiTGFuZGluZyBJbWFnZSAxXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcIm0tYXV0b1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbCBweS04XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgZ2FwLTQgcC0xNiBweS0yNFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0xMFxcXCI+XFxuICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgIE5lZWQgbW9yZSBpbmZvcm1hdGlvbj9cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC15ZWxsb3ctNTAwXFxcIj5cXG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwidy1mdWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB3LWZ1bGxcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJOYW1lKlxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDb3VudHJ5KlxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTQvMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Q291bnRyeSBDb2RlPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy04LzEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQaG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCpcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXFxuICAgICAgICAgICAgICAgICAgcm93cz1cXFwiNFxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmxvY2sgcC0yLjUgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFxcXCJcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiWW91ciBNZXNzYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGdhcC00IHctZnVsbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggaXRlbXMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgaWQ9XFxcImFnZ3JlLWNoZWNrXFxcIlxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInctNCBoLTQgdGV4dC1ibHVlLTYwMCBiZy1ncmF5LTEwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOnJpbmctMlxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8bGFiZWxcXG4gICAgICAgICAgICAgICAgICBmb3I9XFxcImFnZ3JlLWNoZWNrXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIFN0YXkgdXBkYXRlZCB3aXQgb3VyIGxhdGVzdCBuZXdzXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAwIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBweC0yNCBweS0yIHRleHQtd2hpdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIFNlbmRcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPFRoZUZvb3RlciAvPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0Plxcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cXG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnQHV0aWxzL2FwcCc7XFxuXFxuaW1wb3J0IENhcmRTZWN0aW9uRmlyc3QgZnJvbSAnQGNvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdCc7XFxuaW1wb3J0IENhcmRTZWN0aW9uU2Vjb25kIGZyb20gJ0Bjb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kJztcXG5cXG5pbXBvcnQgUHJvZHVjdFNlcnZpY2VzIGZyb20gJ0BzZXJ2aWNlcy9hcGkvcHJvZHVjdCc7XFxuXFxuaW1wb3J0IEdsb2JlU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9nbG9iZS5zdmcnO1xcbmltcG9ydCBEb2xsYXJTdmcgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvc3ZnL2RvbGxhci5zdmcnO1xcbmltcG9ydCBQaXBhU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9waXBhLnN2Zyc7XFxuXFxuaW1wb3J0IExhbmRpbmdJbWFnZTEgZnJvbSAnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMS5wbmcnO1xcbmltcG9ydCBMYW5kaW5nSW1hZ2UyIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nLWltYWdlLTIucG5nJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBjb21wb25lbnRzOiB7XFxuICAgIENhcmRTZWN0aW9uRmlyc3QsXFxuICAgIENhcmRTZWN0aW9uU2Vjb25kXFxuICB9LFxcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgY2FyZFNlY3Rpb25GaXJzdExpc3Q6IFtcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgIHRpdGxlOiAnQnV5IG9yIHNlbGwgZ2xvYmFsbHksIG1hbmFnZSBpdCBsb2NhbGx5JyxcXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgZW5hYmxlcyBzZWxsZXJzIHRvIHByb21vdGUgc3VycGx1cyBpbnZlbnRvcnkgZ2xvYmFsbHksIG9wZW5pbmcgYnV5ZXJzIHNlYXJjaCBob3Jpem9ucy4gV2UgcHJvdmlkZSBhIHNlY3VyZSBhbmQgdW5jb21wbGljYXRlZCBwcm9jZXNzLCB3aXRoIGJvdGggYnV5ZXJzIGFuZCBzZWxsZXJzIGVuam95aW5nIHRoZSBjb25maWRlbmNlIG9mIHRyYW5zYWN0aW9uIG1hbmFnZW1lbnQgYnkgdGhlaXIgbG9jYWwgTWFydWJlbmktSXRvY2h1IFN0ZWVsIChNSVNJKSBuZXR3b3JrLicsXFxuICAgICAgICAgIGljb246IEdsb2JlU3ZnXFxuICAgICAgICB9LFxcbiAgICAgICAge1xcbiAgICAgICAgICBpZDogMSxcXG4gICAgICAgICAgdGl0bGU6ICdTdXBwb3J0aW5nIGNvc3QtZWZmZWN0aXZlIGludmVudG9yeSBtYW5hZ2VtZW50JyxcXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgYWxsb3dzIG9yZ2FuaXNhdGlvbnMgb2YgYWxsIHNpemVzIHRvIHF1aWNrbHkgdHJhZGUgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgYXQgYSBmYWlyIHByaWNlLiBZb3UgY2FuIG5vdyBrZWVwIGNvc3RzIGluIGxpbmUgd2l0aCBleHBlY3RhdGlvbnMgYW5kIGVhc2lseSBhY2Nlc3Mgb3Igb2ZmbG9hZCBleGNlc3MgaW52ZW50b3J5LicsXFxuICAgICAgICAgIGljb246IERvbGxhclN2Z1xcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgIHRpdGxlOiAnTGFyZ2UgcmFuZ2Ugb2YgcmVhZHktbWFkZSBwaXBlcyBmaXQgZm9yIHB1cnBvc2UnLFxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BpcGVzYWxlcyBtYXJrZXRwbGFjZSBpcyBob21lIHRvIGEgbGFyZ2UgcmFuZ2Ugb2YgcXVhbGl0eSBPaWwgQ291bnRyeSBUdWJ1bGFyIEdvb2RzIChPQ1RHKS4gQnJvd3NlIGJ5IHByb2R1Y3QgdHlwZSwgZ3JhZGUsIHNpemUsIGNvbm5lY3Rpb24gYW5kIGxvY2F0aW9uLiBCZSBhc3N1cmVkIG9mIHN1aXRhYmxlIGJhY2t1cCBzdXBwbGllcyB0byBtZWV0IHVyZ2VudCBkZW1hbmQuJyxcXG4gICAgICAgICAgaWNvbjogUGlwYVN2Z1xcbiAgICAgICAgfVxcbiAgICAgIF0sXFxuICAgICAgbGFuZGluZ0ltYWdlMTogTGFuZGluZ0ltYWdlMSxcXG4gICAgICBsYW5kaW5nSW1hZ2UyOiBMYW5kaW5nSW1hZ2UyXFxuICAgIH07XFxuICB9LFxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgLi4ubWFwU3RhdGUoJ2FwcCcsIHtcXG4gICAgICBmaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlLFxcbiAgICAgIHNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGU6IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSxcXG4gICAgICBmaWx0ZXJPcHRpb25zU2l6ZTogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zU2l6ZSxcXG4gICAgICBzZWxlY3RlZEZpbHRlclNpemU6IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJTaXplLFxcbiAgICAgIGZpbHRlck9wdGlvbnNHcmFkZTogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zR3JhZGUsXFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJHcmFkZTogKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbHRlckdyYWRlLFxcbiAgICAgIGZpbHRlck9wdGlvbnNDb25uZWN0aW9uOiAoc3RhdGUpID0+IHN0YXRlLmZpbHRlck9wdGlvbnNDb25uZWN0aW9uLFxcbiAgICAgIHNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbjogKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb25cXG4gICAgfSlcXG4gIH0sXFxuICBtb3VudGVkICgpIHtcXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBhc3luYyBnZXRBbGxQcm9kdWN0ICgpIHtcXG4gICAgICB0cnkge1xcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgUHJvZHVjdFNlcnZpY2VzLmdldFByb2R1Y3RzKCk7XFxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XFxuICAgICAgfVxcbiAgICAgIGNhdGNoIChlcnJvcikge1xcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgZmlsdGVyRGF0YSAoZGF0YSwgcGFyYW1GaWx0ZXIpIHtcXG4gICAgICBsZXQgZmlsdGVyQ3JpdGVyaWEgPSBwYXJhbUZpbHRlcjtcXG5cXG4gICAgICBjb25zdCBhcHBseUZpbHRlciA9IChkYXRhLCBjcml0ZXJpYSkgPT4ge1xcbiAgICAgICAgaWYgKCFjcml0ZXJpYSkge1xcbiAgICAgICAgICByZXR1cm4gZGF0YTsgXFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGl0ZW0pID0+IHtcXG4gICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY3JpdGVyaWEpIHtcXG4gICAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBjcml0ZXJpYVtrZXldKSB7XFxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgfSk7XFxuICAgICAgfTtcXG5cXG4gICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBhcHBseUZpbHRlcihkYXRhLCBmaWx0ZXJDcml0ZXJpYSk7XFxuICAgICAgY29uc3Qgbm90RmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+ICFhcHBseUZpbHRlcihbaXRlbV0sIGZpbHRlckNyaXRlcmlhKS5sZW5ndGgpO1xcbiAgICAgIGNvbnN0IG1vZGlmaWVkTm90RmlsdGVyZWREYXRhID0gbm90RmlsdGVyZWREYXRhLm1hcCgoaXRlbSkgPT4ge1xcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcXR5OiAwIH07XFxuICAgICAgfSk7XFxuXFxuICAgICAgY29uc3QgY29tYmluZWREYXRhID0gWy4uLmZpbHRlcmVkRGF0YSwgLi4ubW9kaWZpZWROb3RGaWx0ZXJlZERhdGFdO1xcblxcbiAgICAgIHJldHVybiBjb21iaW5lZERhdGE7XFxuICAgIH0sXFxuICAgIGdldERhdGFQcm9kdWN0VHlwZSAoZGF0YSkge1xcbiAgICAgIGNvbnN0IHByb2R1Y3RUeXBlUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xcbiAgICAgICAgaWYgKGFjY1tjdXJyLnByb2R1Y3RfdHlwZV0pIHtcXG4gICAgICAgICAgYWNjW2N1cnIucHJvZHVjdF90eXBlXSArPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgYWNjW2N1cnIucHJvZHVjdF90eXBlXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgfSwge30pO1xcblxcbiAgICAgIGNvbnN0IHByb2R1Y3RUeXBlUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhwcm9kdWN0VHlwZVF0eVN1bSkubWFwKChwcm9kdWN0VHlwZSkgPT4gKHtcXG4gICAgICAgIHByb2R1Y3RfdHlwZTogcHJvZHVjdFR5cGUsXFxuICAgICAgICB0b3RhbF9xdHk6IHByb2R1Y3RUeXBlUXR5U3VtW3Byb2R1Y3RUeXBlXVxcbiAgICAgIH0pKTtcXG5cXG4gICAgICByZXR1cm4gcHJvZHVjdFR5cGVRdHlBcnJheTtcXG4gICAgfSxcXG4gICAgZ2V0RGF0YVNpemUgKGRhdGEpIHtcXG4gICAgICBjb25zdCBzaXplUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xcbiAgICAgICAgaWYgKGFjY1tjdXJyLnNpemVdKSB7XFxuICAgICAgICAgIGFjY1tjdXJyLnNpemVdICs9IHBhcnNlSW50KGN1cnIucXR5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIGVsc2Uge1xcbiAgICAgICAgICBhY2NbY3Vyci5zaXplXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgfSwge30pO1xcblxcbiAgICAgIGNvbnN0IHNpemVRdHlBcnJheSA9IE9iamVjdC5rZXlzKHNpemVRdHlTdW0pLm1hcCgoc2l6ZSkgPT4gKHtcXG4gICAgICAgIHNpemUsXFxuICAgICAgICB0b3RhbF9xdHk6IHNpemVRdHlTdW1bc2l6ZV1cXG4gICAgICB9KSk7XFxuXFxuICAgICAgcmV0dXJuIHNpemVRdHlBcnJheTtcXG4gICAgfSxcXG4gICAgZ2V0RGF0YUdyYWRlIChkYXRhKSB7XFxuICAgICAgY29uc3QgZ3JhZGVRdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XFxuICAgICAgICBpZiAoYWNjW2N1cnIuZ3JhZGVdKSB7XFxuICAgICAgICAgIGFjY1tjdXJyLmdyYWRlXSArPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgYWNjW2N1cnIuZ3JhZGVdID0gcGFyc2VJbnQoY3Vyci5xdHkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIGFjYztcXG4gICAgICB9LCB7fSk7XFxuXFxuICAgICAgY29uc3QgZ3JhZGVRdHlBcnJheSA9IE9iamVjdC5rZXlzKGdyYWRlUXR5U3VtKS5tYXAoKGdyYWRlKSA9PiAoe1xcbiAgICAgICAgZ3JhZGUsXFxuICAgICAgICB0b3RhbF9xdHk6IGdyYWRlUXR5U3VtW2dyYWRlXVxcbiAgICAgIH0pKTtcXG5cXG4gICAgICByZXR1cm4gZ3JhZGVRdHlBcnJheTtcXG4gICAgfSxcXG4gICAgZ2V0RGF0YUNvbm5lY3Rpb24gKGRhdGEpIHtcXG4gICAgICBjb25zdCBjb25uZWN0aW9uUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xcbiAgICAgICAgaWYgKGFjY1tjdXJyLmNvbm5lY3Rpb25dKSB7XFxuICAgICAgICAgIGFjY1tjdXJyLmNvbm5lY3Rpb25dICs9IHBhcnNlSW50KGN1cnIucXR5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIGVsc2Uge1xcbiAgICAgICAgICBhY2NbY3Vyci5jb25uZWN0aW9uXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgfSwge30pO1xcblxcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25RdHlBcnJheSA9IE9iamVjdC5rZXlzKGNvbm5lY3Rpb25RdHlTdW0pLm1hcCgoY29ubmVjdGlvbikgPT4gKHtcXG4gICAgICAgIGNvbm5lY3Rpb24sXFxuICAgICAgICB0b3RhbF9xdHk6IGNvbm5lY3Rpb25RdHlTdW1bY29ubmVjdGlvbl1cXG4gICAgICB9KSk7XFxuXFxuICAgICAgcmV0dXJuIGNvbm5lY3Rpb25RdHlBcnJheTtcXG4gICAgfSxcXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSAod2l0aExvYWRlciA9IGZhbHNlKSB7XFxuICAgICAgaWYgKHdpdGhMb2FkZXIpIHtcXG4gICAgICAgIHRoaXMuJGV2ZW50QnVzLiRlbWl0KCdvcGVuTG9hZGVyRnVsbFBhZ2UnKTtcXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMDApO1xcbiAgICAgIH1cXG5cXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldEFsbFByb2R1Y3QoKTtcXG4gICAgICBjb25zdCBib2R5ID0ge307XFxuXFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSAhPT0gJycpIHtcXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xcbiAgICAgICAgICBwcm9kdWN0X3R5cGU6IHRoaXMuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZVxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyU2l6ZSAhPT0gJycpIHtcXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xcbiAgICAgICAgICBzaXplOiB0aGlzLnNlbGVjdGVkRmlsdGVyU2l6ZVxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyR3JhZGUgIT09ICcnKSB7XFxuICAgICAgICBPYmplY3QuYXNzaWduKGJvZHksIHtcXG4gICAgICAgICAgZ3JhZGU6IHRoaXMuc2VsZWN0ZWRGaWx0ZXJHcmFkZVxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiAhPT0gJycpIHtcXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xcbiAgICAgICAgICBjb25uZWN0aW9uOiB0aGlzLnNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvblxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcblxcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcblxcbiAgICAgIGNvbnN0IHJlc0ZpbHRlckRhdGEgPSB0aGlzLmZpbHRlckRhdGEocmVzLCBib2R5KTtcXG5cXG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cXG4gICAgICBcXG4gICAgICBjb25zdCByZXNEYXRhUHJvZHVjdFR5cGUgPSB0aGlzLmdldERhdGFQcm9kdWN0VHlwZShyZXNGaWx0ZXJEYXRhKTtcXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZScsIHJlc0RhdGFQcm9kdWN0VHlwZSk7XFxuXFxuICAgICAgY29uc3QgcmVzRGF0YXNTaXplID0gdGhpcy5nZXREYXRhU2l6ZShyZXNGaWx0ZXJEYXRhKTtcXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNTaXplJywgcmVzRGF0YXNTaXplKTtcXG4gICAgICBcXG4gICAgICBjb25zdCByZXNEYXRhR3JhZGUgPSB0aGlzLmdldERhdGFHcmFkZShyZXNGaWx0ZXJEYXRhKTtcXG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNHcmFkZScsIHJlc0RhdGFHcmFkZSk7XFxuICAgICAgXFxuICAgICAgY29uc3QgcmVzRGF0YUNvbm5lY3Rpb24gPSB0aGlzLmdldERhdGFDb25uZWN0aW9uKHJlc0ZpbHRlckRhdGEpO1xcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24nLCByZXNEYXRhQ29ubmVjdGlvbik7XFxuXFxuICAgICAgaWYgKHdpdGhMb2FkZXIpIHtcXG4gICAgICAgIHRoaXMuJGV2ZW50QnVzLiRlbWl0KCdjbG9zZUxvYWRlckZ1bGxQYWdlJyk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBvbkhhbmRsZVNlbGVjdGRhdGEgKGV2ZW50KSB7XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMScpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZScsIGV2ZW50LmRhdGEucHJvZHVjdF90eXBlKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMicpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJTaXplJywgZXZlbnQuZGF0YS5zaXplKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMycpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZScsIGV2ZW50LmRhdGEuZ3JhZGUpO1xcbiAgICAgIH1cXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICc0Jykge1xcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24nLCBldmVudC5kYXRhLmNvbm5lY3Rpb24pO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLmluaXRpYWxpemUodHJ1ZSk7XFxuICAgIH0sXFxuICAgIG9uSGFuZGxlUmVzZXRkYXRhIChldmVudCkge1xcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUnLCAnJyk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzInKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyU2l6ZScsICcnKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMycpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZScsICcnKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uJywgJycpO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLmluaXRpYWxpemUodHJ1ZSk7XFxuICAgIH0sXFxuICAgIG9uSGFuZGxlRmlsdGVyTGlzdEl0ZW0gKGV2ZW50KSB7XFxuICAgICAgY29uc3QgdmFsdWVTZWFyY2ggPSBuZXcgUmVnRXhwKGV2ZW50LnZhbHVlLCAnaScpO1xcblxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XFxuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMuZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlLmZpbHRlcigoaXRlbSkgPT4ge1xcbiAgICAgICAgICByZXR1cm4gdmFsdWVTZWFyY2gudGVzdChpdGVtLnByb2R1Y3RfdHlwZSk7XFxuICAgICAgICB9KTtcXG5cXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XFxuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlJywgZmlsdGVyZWQpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICcyJykge1xcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmZpbHRlck9wdGlvbnNTaXplLmZpbHRlcigoaXRlbSkgPT4ge1xcbiAgICAgICAgICByZXR1cm4gdmFsdWVTZWFyY2gudGVzdChpdGVtLnNpemUpO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNTaXplJywgZmlsdGVyZWQpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICczJykge1xcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmZpbHRlck9wdGlvbnNHcmFkZS5maWx0ZXIoKGl0ZW0pID0+IHtcXG4gICAgICAgICAgcmV0dXJuIHZhbHVlU2VhcmNoLnRlc3QoaXRlbS5ncmFkZSk7XFxuICAgICAgICB9KTtcXG5cXG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XFxuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc0dyYWRlJywgZmlsdGVyZWQpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICc0Jykge1xcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmZpbHRlck9wdGlvbnNDb25uZWN0aW9uLmZpbHRlcigoaXRlbSkgPT4ge1xcbiAgICAgICAgICByZXR1cm4gdmFsdWVTZWFyY2gudGVzdChpdGVtLmNvbm5lY3Rpb24pO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uJywgZmlsdGVyZWQpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBpZiAoZXZlbnQudmFsdWUgPT09ICcnKSB7XFxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuLmdsb2JlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2UvaGVhZGVyLWJhY2tncm91bmQtMi5wbmcpOyBcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAyNHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4ud3JhcHBlci1iYW5uZXIge1xcbiAgaGVpZ2h0OiA0NTBweDtcXG59XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvbGFuZGluZy1pbWFnZS0xLnBuZz8yNDlkMDJmMTQ5YWJjZTkxNjc3MGU3OWIwNWZlMzhkZVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2xhbmRpbmctaW1hZ2UtMi5wbmc/OWRjNTQ5NmNlYzAyZDM3YjNiYTljMWE4NjdmM2U4MDlcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9waXBlc2FsZXMuc3ZnPzYzMzU0ODZlZDg5MDVkYWQwNmM4MGU4YzYwMmJjMzYwXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvZG9sbGFyLnN2Zz85YzIyNmU5NzQ0ZWIwNjI1N2ZjMWQyNzM4ZmY5MzhiMVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL2dsb2JlLnN2Zz83OTg0Y2FmM2M3MGJkMzkzNDU2NzUwZTcwM2JmNjUxMVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL3BpcGEuc3ZnPzBkYzZlMmE5MDAwOTE2ZTE2OGJkYzgyMjI4ZDFjMjc3XCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvYWRlckZ1bGxQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJhMjU4YmQ0Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOTdmYTE3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMzQ4MjcxYVwiXG52YXIgc2NyaXB0ID0ge31cblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YzNDgyNzFhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YzNDgyNzFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YzNDgyNzFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYzNDgyNzFhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjM0ODI3MWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9BcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2FkZXJGdWxsUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmEyNThiZDRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2FkZXJGdWxsUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9hZGVyRnVsbFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9hZGVyRnVsbFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmEyNThiZDQmbGFuZz1zY3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2JhMjU4YmQ0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2JhMjU4YmQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2JhMjU4YmQ0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2FkZXJGdWxsUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmEyNThiZDRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiYTI1OGJkNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL0xvYWRlckZ1bGxQYWdlL0xvYWRlckZ1bGxQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0RmlsdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGY3NzFmNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlbGVjdEZpbHRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VsZWN0RmlsdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OGY3NzFmNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OGY3NzFmNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OGY3NzFmNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VsZWN0RmlsdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGY3NzFmNlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4Zjc3MWY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vU2VsZWN0RmlsdGVyL1NlbGVjdEZpbHRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQzZjM2YTU0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDNmMzZhNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDNmMzZhNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDNmMzZhNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQzZjM2YTU0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDNmMzZhNTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QvQ2FyZFNlY3Rpb25GaXJzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzRkMDQ2Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmM0ZDA0NmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmM0ZDA0NmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmM0ZDA0NmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzRkMDQ2Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JjNGQwNDZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VOb3RGb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjFjMzNkZTRcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiMWMzM2RlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiMWMzM2RlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiMWMzM2RlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnZU5vdEZvdW5kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMWMzM2RlNFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2IxYzMzZGU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1BhZ2VOb3RGb3VuZC9QYWdlTm90Rm91bmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZDUzNzI4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc4ZDUzNzI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4ZDUzNzI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4ZDUzNzI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZDUzNzI4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzhkNTM3MjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ZGFkMGRhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTRkYWQwZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTRkYWQwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTRkYWQwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ZGFkMGRhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTRkYWQwZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbi9UaGVOYXZpZ2F0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDk3ZmExNzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOTdmYTE3NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOTdmYTE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOTdmYTE3NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOTdmYTE3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL0hvbWUvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGVyRnVsbFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkZXJGdWxsUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25TZWNvbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsInJvdXRlciIsInN0b3JlIiwiZWwiLCJ3aW5kb3ciLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTUlYX0FQUF9VUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiQXBwIiwiVGhlTmF2aWdhdGlvbiIsIlRoZUZvb3RlciIsIkxvYWRlckZ1bGxQYWdlIiwiU2VsZWN0RmlsdGVyIiwiY29tcG9uZW50IiwiRXZlbnRCdXMiLCJsaWJyYXJ5IiwiZmFzIiwiZmFiIiwiZmFyIiwiRm9udEF3ZXNvbWVJY29uIiwiYWRkIiwiaSIsInByb3RvdHlwZSIsIiRhcGkiLCIkZXZlbnRCdXMiLCJWdWVSb3V0ZXIiLCJQYWdlTm90Rm91bmQiLCJIb21lIiwicm91dGVzIiwicGF0aCIsIm5hbWUiLCJ1c2UiLCJtb2RlIiwibW9ja1Byb2R1Y3QiLCJnZXRQcm9kdWN0cyIsIlZ1ZXgiLCJhcHAiLCJTdG9yZSIsIm1vZHVsZXMiLCJhY3Rpb25zIiwic2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlIiwiX3JlZiIsImRhdGEiLCJjb21taXQiLCJzZXRTZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlIiwiX3JlZjIiLCJzZXRGaWx0ZXJPcHRpb25zU2l6ZSIsIl9yZWYzIiwic2V0U2VsZWN0ZWRGaWx0ZXJTaXplIiwiX3JlZjQiLCJzZXRGaWx0ZXJPcHRpb25zR3JhZGUiLCJfcmVmNSIsInNldFNlbGVjdGVkRmlsdGVyR3JhZGUiLCJfcmVmNiIsInNldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uIiwiX3JlZjciLCJzZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24iLCJfcmVmOCIsImdldHRlcnMiLCJnZXRGaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUiLCJzdGF0ZSIsImZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSIsImdldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUiLCJzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlIiwiZ2V0RmlsdGVyT3B0aW9uc1NpemUiLCJmaWx0ZXJPcHRpb25zU2l6ZSIsImdldFNlbGVjdGVkRmlsdGVyU2l6ZSIsInNlbGVjdGVkRmlsdGVyU2l6ZSIsImdldEZpbHRlck9wdGlvbnNHcmFkZSIsImZpbHRlck9wdGlvbnNHcmFkZSIsImdldFNlbGVjdGVkRmlsdGVyR3JhZGUiLCJzZWxlY3RlZEZpbHRlckdyYWRlIiwiZ2V0RmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24iLCJmaWx0ZXJPcHRpb25zQ29ubmVjdGlvbiIsImdldFNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiIsInNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiIsIm11dGF0aW9ucyIsIm5hbWVzcGFjZWQiLCJTRVRfRklMVEVSX09QVElPTlNfUFJPRFVDVF9UWVBFIiwicGF5bG9hZCIsIlNFVF9TRUxFQ1RFRF9GSUxURVJfUFJPRFVDVF9UWVBFIiwiU0VUX0ZJTFRFUl9PUFRJT05TX1NJWkUiLCJTRVRfU0VMRUNURURfRklMVEVSX1NJWkUiLCJTRVRfRklMVEVSX09QVElPTlNfR1JBREUiLCJTRVRfU0VMRUNURURfRklMVEVSX0dSQURFIiwiU0VUX0ZJTFRFUl9PUFRJT05TX0NPTk5FQ1RJT04iLCJTRVRfU0VMRUNURURfRklMVEVSX0NPTk5FQ1RJT04iLCJmb3JtYXRlZE51bWJlciIsIm51bWJlciIsImZvcm1hdCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImZvcm1hdHRlZE51bWJlciIsInRvU3RyaW5nIiwicmVwbGFjZSIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzaG93TG9hZGVyIiwiY3JlYXRlZCIsIiRvbiIsIm9uSGFuZGxlT3BlbiIsIm9uSGFuZGxlQ2xvc2UiLCJtZXRob2RzIiwicHJvcHMiLCJjYXRlZ29yeSIsInR5cGUiLCJTdHJpbmciLCJ0aXRsZSIsInNlbGVjdGVkVmFsdWUiLCJvcHRpb25zIiwiQXJyYXkiLCJfZGVmYXVsdCIsInZpc2libGVEcm9wZG93biIsInNlYXJjaFZhbHVlIiwiZGVib3VuY2UiLCJfdGhpcyIsIm9uSGFuZGxlVmlzaWJsZURyb3Bkb3duIiwiJGVtaXQiLCJvbkNsaWNrUmVzZXRGaWx0ZXIiLCJjb21wdXRlVGl0bGVMaXN0IiwicmVzdWx0IiwiY29tcHV0ZUZvcm1hdFF0eSIsInBhcmFtIiwib25IYW5kbGVTZWxlY3RJdGVtIiwib25IYW5kbGVGaWx0ZXJMaXN0SXRlbSIsIl90aGlzMiIsImNsZWFyVGltZW91dCIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwibGFiZWxBY3Rpb24xIiwibGlua0FjdGlvbjEiLCJsYWJlbEFjdGlvbjIiLCJsaW5rQWN0aW9uMiIsImxvZ29QaXBlcyIsImxvZ28iLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcHBseSIsImVyciIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJvYmoiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiTnVtYmVyIiwibWFwU3RhdGUiLCJDYXJkU2VjdGlvbkZpcnN0IiwiQ2FyZFNlY3Rpb25TZWNvbmQiLCJQcm9kdWN0U2VydmljZXMiLCJHbG9iZVN2ZyIsIkRvbGxhclN2ZyIsIlBpcGFTdmciLCJMYW5kaW5nSW1hZ2UxIiwiTGFuZGluZ0ltYWdlMiIsImNvbXBvbmVudHMiLCJjYXJkU2VjdGlvbkZpcnN0TGlzdCIsImlkIiwibGFuZGluZ0ltYWdlMSIsImxhbmRpbmdJbWFnZTIiLCJjb21wdXRlZCIsIm1vdW50ZWQiLCJpbml0aWFsaXplIiwiZ2V0QWxsUHJvZHVjdCIsIl9jYWxsZWUiLCJyZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJEYXRhIiwicGFyYW1GaWx0ZXIiLCJmaWx0ZXJDcml0ZXJpYSIsImFwcGx5RmlsdGVyIiwiY3JpdGVyaWEiLCJpdGVtIiwiZmlsdGVyZWREYXRhIiwibm90RmlsdGVyZWREYXRhIiwibW9kaWZpZWROb3RGaWx0ZXJlZERhdGEiLCJtYXAiLCJxdHkiLCJjb21iaW5lZERhdGEiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXREYXRhUHJvZHVjdFR5cGUiLCJwcm9kdWN0VHlwZVF0eVN1bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJwcm9kdWN0X3R5cGUiLCJwYXJzZUludCIsInByb2R1Y3RUeXBlUXR5QXJyYXkiLCJwcm9kdWN0VHlwZSIsInRvdGFsX3F0eSIsImdldERhdGFTaXplIiwic2l6ZVF0eVN1bSIsInNpemUiLCJzaXplUXR5QXJyYXkiLCJnZXREYXRhR3JhZGUiLCJncmFkZVF0eVN1bSIsImdyYWRlIiwiZ3JhZGVRdHlBcnJheSIsImdldERhdGFDb25uZWN0aW9uIiwiY29ubmVjdGlvblF0eVN1bSIsImNvbm5lY3Rpb24iLCJjb25uZWN0aW9uUXR5QXJyYXkiLCJfYXJndW1lbnRzIiwiX2NhbGxlZTIiLCJ3aXRoTG9hZGVyIiwicmVzIiwiYm9keSIsInJlc0ZpbHRlckRhdGEiLCJyZXNEYXRhUHJvZHVjdFR5cGUiLCJyZXNEYXRhc1NpemUiLCJyZXNEYXRhR3JhZGUiLCJyZXNEYXRhQ29ubmVjdGlvbiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImFzc2lnbiIsIiRzdG9yZSIsImRpc3BhdGNoIiwib25IYW5kbGVTZWxlY3RkYXRhIiwiZXZlbnQiLCJvbkhhbmRsZVJlc2V0ZGF0YSIsInZhbHVlU2VhcmNoIiwiUmVnRXhwIiwiZmlsdGVyZWQiLCJ0ZXN0IiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsIl92Iiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsInN0YXRpY0NsYXNzIiwiX20iLCJfZSIsImF0dHJzIiwib24iLCJjbGljayIsIl9zIiwiJGV2ZW50IiwiZGlyZWN0aXZlcyIsInJhd05hbWUiLCJleHByZXNzaW9uIiwiZG9tUHJvcHMiLCJpbm5lckhUTUwiLCJwbGFjZWhvbGRlciIsImtleXVwIiwiaW5wdXQiLCJ0YXJnZXQiLCJjb21wb3NpbmciLCJfbCIsInNyYyIsImFsdCIsInRvIiwib25TZWxlY3REYXRhIiwib25SZXNldERhdGEiLCJmaWx0ZXJMaXN0SXRlbSIsImlkeCIsInNlbGVjdGVkIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=