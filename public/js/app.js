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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _root_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @root/App.vue */ "./resources/js/App.vue");
/* harmony import */ var _components_Layouts_TheNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Layouts/TheNavigation */ "./resources/js/components/Layouts/TheNavigation/index.js");
/* harmony import */ var _components_Layouts_TheFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Layouts/TheFooter */ "./resources/js/components/Layouts/TheFooter/index.js");
/* harmony import */ var _components_Common_SelectFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Common/SelectFilter */ "./resources/js/components/Common/SelectFilter/index.js");





vue__WEBPACK_IMPORTED_MODULE_4__["default"].component('App', _root_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].component('TheNavigation', _components_Layouts_TheNavigation__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].component('TheFooter', _components_Layouts_TheFooter__WEBPACK_IMPORTED_MODULE_2__["default"]);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].component('SelectFilter', _components_Common_SelectFilter__WEBPACK_IMPORTED_MODULE_3__["default"]);

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
  selectedFilterConnection: '',
  overlayLoading: false
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
/* harmony export */   formatedNumber: () => (/* binding */ formatedNumber)
/* harmony export */ });
function formatedNumber(number) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
  var formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, format);
  return formattedNumber;
}


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
      visibleDropdown: false
    };
  },
  methods: {
    onHandleVisibleDropdown: function onHandleVisibleDropdown() {
      this.visibleDropdown = !this.visibleDropdown;
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Fragments_Home_CardSectionFirst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/Fragments/Home/CardSectionFirst */ "./resources/js/components/Fragments/Home/CardSectionFirst/index.js");
/* harmony import */ var _components_Fragments_Home_CardSectionSecond__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Fragments/Home/CardSectionSecond */ "./resources/js/components/Fragments/Home/CardSectionSecond/index.js");
/* harmony import */ var _services_api_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/api/product */ "./resources/js/services/api/product.js");
/* harmony import */ var _assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../assets/svg/globe.svg */ "./resources/assets/svg/globe.svg");
/* harmony import */ var _assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../assets/svg/dollar.svg */ "./resources/assets/svg/dollar.svg");
/* harmony import */ var _assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../assets/svg/pipa.svg */ "./resources/assets/svg/pipa.svg");
/* harmony import */ var _assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../assets/images/landing-image-1.png */ "./resources/assets/images/landing-image-1.png");
/* harmony import */ var _assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../assets/images/landing-image-2.png */ "./resources/assets/images/landing-image-2.png");
/* harmony import */ var _assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_7__);
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
    CardSectionFirst: _components_Fragments_Home_CardSectionFirst__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardSectionSecond: _components_Fragments_Home_CardSectionSecond__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      cardSectionFirstList: [{
        id: 1,
        title: 'Buy or sell globally, manage it locally',
        description: 'Pipesales enables sellers to promote surplus inventory globally, opening buyers search horizons. We provide a secure and uncomplicated process, with both buyers and sellers enjoying the confidence of transaction management by their local Marubeni-Itochu Steel (MISI) network.',
        icon: (_assets_svg_globe_svg__WEBPACK_IMPORTED_MODULE_3___default())
      }, {
        id: 1,
        title: 'Supporting cost-effective inventory management',
        description: 'Pipesales marketplace allows organisations of all sizes to quickly trade tubular products and accessories at a fair price. You can now keep costs in line with expectations and easily access or offload excess inventory.',
        icon: (_assets_svg_dollar_svg__WEBPACK_IMPORTED_MODULE_4___default())
      }, {
        id: 1,
        title: 'Large range of ready-made pipes fit for purpose',
        description: 'Pipesales marketplace is home to a large range of quality Oil Country Tubular Goods (OCTG). Browse by product type, grade, size, connection and location. Be assured of suitable backup supplies to meet urgent demand.',
        icon: (_assets_svg_pipa_svg__WEBPACK_IMPORTED_MODULE_5___default())
      }],
      landingImage1: (_assets_images_landing_image_1_png__WEBPACK_IMPORTED_MODULE_6___default()),
      landingImage2: (_assets_images_landing_image_2_png__WEBPACK_IMPORTED_MODULE_7___default())
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapState)('app', {
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
              return _services_api_product__WEBPACK_IMPORTED_MODULE_2__["default"].getProducts();
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
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res, body, resFilterData, resDataProductType, resDatasSize, resDataGrade, resDataConnection;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.getAllProduct();
            case 2:
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
            case 17:
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
      this.initialize();
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
      this.initialize();
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
  return _c("router-view");
};
var staticRenderFns = [];
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
    staticClass: "block w-full p-2 pl-6 ps-10 text-sm text-gray-900 border-b border-gray-300 focus:outline-none focus:ring-white",
    attrs: {
      type: "text",
      placeholder: "Search"
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
    staticClass: "w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10"
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
___CSS_LOADER_EXPORT___.push([module.id, ".globe[data-v-097fa176] {\n  background-image: url(https://pipesales.com/view2/image/header-background-2.png);\n  background-size: 1024px !important;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.wrapper-banner[data-v-097fa176] {\n  height: 450px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/pages/Home/Home.vue"],"names":[],"mappings":"AAgfA;EACA,gFAAA;EACA,kCAAA;EACA,4BAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;AACA;AAEA;EACA,aAAA;AACA","sourcesContent":["<!-- eslint-disable max-len -->\n<template>\n  <div class=\"w-full\">\n    <TheNavigation />\n\n    <section class=\"relative overflow-hidden w-full bg-center bg-cover bg-gray-700\">\n      <div class=\"globe\" />\n      <div class=\"container mx-auto z-20 wrapper-banner\">\n        <div class=\"absolute flex w-full\">\n          <div class=\"mt-12\">\n            <img\n              src=\"https://pipesales.com/view2/image/webp/tomi-full.webp\"\n              alt=\"\"\n            >\n          </div>\n          <div class=\"text-center\">\n            <div class=\"container px-4 mx-auto mt-44\">\n              <div class=\"max-w-4xl mx-auto text-center\">\n                <h2 class=\"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100\">\n                  Your global marketplace to\n                </h2>\n                <h2 class=\"mt-8 mb-6 text-4xl lg:text-5xl font-bold text-yellow-600\">\n                  buy & sell tubular products\n                </h2>\n                <p class=\"max-w-3xl mx-auto mb-10 text-lg text-gray-300\">\n                  Quickly overcome supply gaps and target zero inventory with Pipesales.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 -mt-8 z-10\">\n          <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4\">\n            <div>\n              <SelectFilter\n                category=\"1\"\n                title=\"Product Type\"\n                :selectedValue=\"selectedFilterProductType\"\n                :options=\"filterOptionsProductType\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n              />\n            </div>\n            <div>\n              <SelectFilter\n                category=\"2\"\n                title=\"Size\"\n                :selectedValue=\"selectedFilterSize\"\n                :options=\"filterOptionsSize\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n              />\n            </div>\n            <div>\n              <SelectFilter\n                category=\"3\"\n                title=\"Grade\"\n                :selectedValue=\"selectedFilterGrade\"\n                :options=\"filterOptionsGrade\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n              />\n            </div>\n            <div>\n              <SelectFilter\n                category=\"4\"\n                title=\"Connection\"\n                :selectedValue=\"selectedFilterConnection\"\n                :options=\"filterOptionsConnection\"\n                @onSelectData=\"onHandleSelectdata($event)\"\n                @onResetData=\"onHandleResetdata($event)\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-24\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <CardSectionFirst\n          v-for=\"(item, idx) in cardSectionFirstList\"\n          :key=\"idx\"\n          :title=\"item.title\"\n          :description=\"item.description\"\n          :icon=\"item.icon\"\n        />\n      </div>\n    </section>\n\n    <section class=\"w-full py-24\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full lg:w-1/2\">\n          <div>\n            <img\n              :src=\"landingImage1\"\n              alt=\"Landing Image 1\"\n              class=\"m-auto\"\n            >\n          </div>\n        </div>\n        <div class=\"w-full lg:w-1/2\">\n          <CardSectionSecond\n            title=\"Urgent fulfilment for time-critical projects\"\n            description=\"Pipesales marketplace assists in managing procurement shortfalls quickly and easily. Browse and find quality tubular products and accessories to your specifications, and Pipesales recognised trade partners will handle the order fulfilment, guaranteeing peace of mind.\"\n            labelAction1=\"How to Buy?\"\n            linkAction1=\"/\"\n            labelAction2=\"Browse Inventory\"\n            linkAction2=\"/\"\n          />\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-8\">\n      <div class=\"container mx-auto flex flex-col lg:flex-row gap-4\">\n        <div class=\"w-full lg:w-1/2\">\n          <CardSectionSecond\n            title=\"Fair market rates for surplus inventory\"\n            description=\"Target zero inventory by moving surplus products through a trusted network supported by Marubeni-Itochu Steel Inc (MISI). Pipesales can provide you with pricing recommendations to arrive at a fair open market value, then connect you with potential buyers globally.\"\n            labelAction1=\"How to Buy?\"\n            linkAction1=\"/\"\n            labelAction2=\"Shell My Pipes\"\n            linkAction2=\"/\"\n          />\n        </div>\n        <div class=\"w-full lg:w-1/2\">\n          <div>\n            <img\n              :src=\"landingImage2\"\n              alt=\"Landing Image 1\"\n              class=\"m-auto\"\n            >\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"w-full py-8\">\n      <div class=\"container mx-auto flex flex-col bg-gray-700 rounded-lg gap-4 p-16 py-24\">\n        <div class=\"mb-10\">\n          <div>\n            <span class=\"font-bold text-5xl text-white\">\n              Need more information?\n            </span>\n          </div>\n          <div>\n            <span class=\"font-bold text-5xl text-yellow-500\">\n              Contact Us\n            </span>\n          </div>\n        </div>\n\n        <form class=\"w-full\">\n          <div class=\"flex gap-4 flex-col lg:flex-row w-full\">\n            <div class=\"w-full lg:w-1/2\">\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"text\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Name*\"\n                >\n              </div>\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"text\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Country*\"\n                >\n              </div>\n              <div class=\"w-full flex gap-4 flex-col lg:flex-row\">\n                <div class=\"w-full lg:w-4/12\">\n                  <select\n                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  >\n                    <option selected>Country Code</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                    <option value=\"-\">-</option>\n                  </select>\n                </div>\n                <div class=\"w-full lg:w-8/12\">\n                  <input\n                    type=\"text\"\n                    class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                    placeholder=\"Phone\"\n                  >\n                </div>\n              </div>\n            </div>\n            <div class=\"w-full lg:w-1/2\">\n              <div class=\"w-full mb-5 inline-block\">\n                <input\n                  type=\"email\"\n                  class=\"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\"\n                  placeholder=\"Email*\"\n                >\n              </div>\n              <div class=\"w-full mb-5 inline-block\">\n                <textarea\n                  rows=\"4\"\n                  class=\"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500\"\n                  placeholder=\"Your Message\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"flex gap-4 w-full\">\n            <div class=\"flex justify-between w-full\">\n              <div class=\"flex items-center\">\n                <input\n                  id=\"aggre-check\"\n                  type=\"checkbox\"\n                  value=\"\"\n                  class=\"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2\"\n                >\n                <label\n                  for=\"aggre-check\"\n                  class=\"ml-2 text-sm font-medium text-white\"\n                >\n                  Stay updated wit our latest news\n                </label>\n              </div>\n\n              <div>\n                <button class=\"rounded-full bg-yellow-500 border border-yellow-500 px-24 py-2 text-white\">\n                  Send\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </section>\n\n    <TheFooter />\n  </div>\n</template>\n\n<script>\n/* eslint-disable max-len */\nimport { mapState } from 'vuex';\n\nimport CardSectionFirst from '@components/Fragments/Home/CardSectionFirst';\nimport CardSectionSecond from '@components/Fragments/Home/CardSectionSecond';\n\nimport ProductServices from '@services/api/product';\n\nimport GlobeSvg from './../../../assets/svg/globe.svg';\nimport DollarSvg from './../../../assets/svg/dollar.svg';\nimport PipaSvg from './../../../assets/svg/pipa.svg';\n\nimport LandingImage1 from './../../../assets/images/landing-image-1.png';\nimport LandingImage2 from './../../../assets/images/landing-image-2.png';\n\nexport default {\n  components: {\n    CardSectionFirst,\n    CardSectionSecond\n  },\n  data () {\n    return {\n      cardSectionFirstList: [\n        {\n          id: 1,\n          title: 'Buy or sell globally, manage it locally',\n          description: 'Pipesales enables sellers to promote surplus inventory globally, opening buyers search horizons. We provide a secure and uncomplicated process, with both buyers and sellers enjoying the confidence of transaction management by their local Marubeni-Itochu Steel (MISI) network.',\n          icon: GlobeSvg\n        },\n        {\n          id: 1,\n          title: 'Supporting cost-effective inventory management',\n          description: 'Pipesales marketplace allows organisations of all sizes to quickly trade tubular products and accessories at a fair price. You can now keep costs in line with expectations and easily access or offload excess inventory.',\n          icon: DollarSvg\n        },\n        {\n          id: 1,\n          title: 'Large range of ready-made pipes fit for purpose',\n          description: 'Pipesales marketplace is home to a large range of quality Oil Country Tubular Goods (OCTG). Browse by product type, grade, size, connection and location. Be assured of suitable backup supplies to meet urgent demand.',\n          icon: PipaSvg\n        }\n      ],\n      landingImage1: LandingImage1,\n      landingImage2: LandingImage2\n    };\n  },\n  computed: {\n    ...mapState('app', {\n      filterOptionsProductType: (state) => state.filterOptionsProductType,\n      selectedFilterProductType: (state) => state.selectedFilterProductType,\n      filterOptionsSize: (state) => state.filterOptionsSize,\n      selectedFilterSize: (state) => state.selectedFilterSize,\n      filterOptionsGrade: (state) => state.filterOptionsGrade,\n      selectedFilterGrade: (state) => state.selectedFilterGrade,\n      filterOptionsConnection: (state) => state.filterOptionsConnection,\n      selectedFilterConnection: (state) => state.selectedFilterConnection\n    })\n  },\n  mounted () {\n    this.initialize();\n  },\n  methods: {\n    async getAllProduct () {\n      try {\n        let response = await ProductServices.getProducts();\n        return response;\n      }\n      catch (error) {\n        console.log(error);\n      }\n    },\n    filterData (data, paramFilter) {\n      let filterCriteria = paramFilter;\n\n      const applyFilter = (data, criteria) => {\n        if (!criteria) {\n          return data; \n        }\n        return data.filter((item) => {\n          for (const key in criteria) {\n            if (item[key] !== criteria[key]) {\n              return false;\n            }\n          }\n          return true;\n        });\n      };\n\n      const filteredData = applyFilter(data, filterCriteria);\n      const notFilteredData = data.filter((item) => !applyFilter([item], filterCriteria).length);\n      const modifiedNotFilteredData = notFilteredData.map((item) => {\n        return { ...item, qty: 0 };\n      });\n\n      const combinedData = [...filteredData, ...modifiedNotFilteredData];\n\n      return combinedData;\n    },\n    getDataProductType (data) {\n      const productTypeQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.product_type]) {\n          acc[curr.product_type] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.product_type] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const productTypeQtyArray = Object.keys(productTypeQtySum).map((productType) => ({\n        product_type: productType,\n        total_qty: productTypeQtySum[productType]\n      }));\n\n      return productTypeQtyArray;\n    },\n    getDataSize (data) {\n      const sizeQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.size]) {\n          acc[curr.size] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.size] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const sizeQtyArray = Object.keys(sizeQtySum).map((size) => ({\n        size,\n        total_qty: sizeQtySum[size]\n      }));\n\n      return sizeQtyArray;\n    },\n    getDataGrade (data) {\n      const gradeQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.grade]) {\n          acc[curr.grade] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.grade] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const gradeQtyArray = Object.keys(gradeQtySum).map((grade) => ({\n        grade,\n        total_qty: gradeQtySum[grade]\n      }));\n\n      return gradeQtyArray;\n    },\n    getDataConnection (data) {\n      const connectionQtySum = data.reduce((acc, curr) => {\n        if (acc[curr.connection]) {\n          acc[curr.connection] += parseInt(curr.qty);\n        }\n        else {\n          acc[curr.connection] = parseInt(curr.qty);\n        }\n        return acc;\n      }, {});\n\n      const connectionQtyArray = Object.keys(connectionQtySum).map((connection) => ({\n        connection,\n        total_qty: connectionQtySum[connection]\n      }));\n\n      return connectionQtyArray;\n    },\n    async initialize () {\n      const res = await this.getAllProduct();\n      const body = {};\n\n      if (this.selectedFilterProductType !== '') {\n        Object.assign(body, {\n          product_type: this.selectedFilterProductType\n        });\n      }\n      if (this.selectedFilterSize !== '') {\n        Object.assign(body, {\n          size: this.selectedFilterSize\n        });\n      }\n      if (this.selectedFilterGrade !== '') {\n        Object.assign(body, {\n          grade: this.selectedFilterGrade\n        });\n      }\n      if (this.selectedFilterConnection !== '') {\n        Object.assign(body, {\n          connection: this.selectedFilterConnection\n        });\n      }\n\n      // ////////////////////////////////////////////////\n\n      const resFilterData = this.filterData(res, body);\n\n      // ////////////////////////////////////////////////\n      \n      const resDataProductType = this.getDataProductType(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsProductType', resDataProductType);\n\n      const resDatasSize = this.getDataSize(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsSize', resDatasSize);\n      \n      const resDataGrade = this.getDataGrade(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsGrade', resDataGrade);\n      \n      const resDataConnection = this.getDataConnection(resFilterData);\n      this.$store.dispatch('app/setFilterOptionsConnection', resDataConnection);\n    },\n    onHandleSelectdata (event) {\n      if (event.category === '1') {\n        this.$store.dispatch('app/setSelectedFilterProductType', event.data.product_type);\n      }\n      if (event.category === '2') {\n        this.$store.dispatch('app/setSelectedFilterSize', event.data.size);\n      }\n      if (event.category === '3') {\n        this.$store.dispatch('app/setSelectedFilterGrade', event.data.grade);\n      }\n      if (event.category === '4') {\n        this.$store.dispatch('app/setSelectedFilterConnection', event.data.connection);\n      }\n\n      this.initialize();\n    },\n    onHandleResetdata (event) {\n      if (event.category === '1') {\n        this.$store.dispatch('app/setSelectedFilterProductType', '');\n      }\n      if (event.category === '2') {\n        this.$store.dispatch('app/setSelectedFilterSize', '');\n      }\n      if (event.category === '3') {\n        this.$store.dispatch('app/setSelectedFilterGrade', '');\n      }\n      if (event.category === '4') {\n        this.$store.dispatch('app/setSelectedFilterConnection', '');\n      }\n\n      this.initialize();\n    }\n  }\n};\n</script>\n\n<style scoped>\n.globe {\n  background-image: url(https://pipesales.com/view2/image/header-background-2.png); \n  background-size: 1024px !important;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.wrapper-banner {\n  height: 450px;\n}\n</style>"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxpRUFBZSwwTUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5CLENBQUMsaUVBQWUsMk1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQyxDQUFDLGlFQUFlLG1NQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaEIsQ0FBQyxpRUFBZSx1TUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5DLENBQUMsaUVBQWUsOExBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvZXZlbnQtYnVzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9mb3J0LWF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbmZpZ3VyYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb25maWd1cmF0aW9ucy9pbml0aWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29uZmlndXJhdGlvbnMvcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcm91dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2VydmljZXMvYXBpL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc3RvcmVzL21vZHVsZXMvYXBwL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9tb2R1bGVzL2FwcC9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9zdG9yZXMvbW9kdWxlcy9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9tb2R1bGVzL2FwcC9tdXRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3Jlcy9tb2R1bGVzL2FwcC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXRpbHMvYXBwLmpzIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vU2VsZWN0RmlsdGVyL1NlbGVjdEZpbHRlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QvQ2FyZFNlY3Rpb25GaXJzdC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVGb290ZXIvVGhlRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vU2VsZWN0RmlsdGVyL1NlbGVjdEZpbHRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlTm90Rm91bmQvUGFnZU5vdEZvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbi9UaGVOYXZpZ2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvQWJvdXQvQWJvdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlPzBiZTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0xLnBuZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2ltYWdlcy9sYW5kaW5nLWltYWdlLTIucG5nIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvaW1hZ2VzL3BpcGVzYWxlcy5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zdmcvZG9sbGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3N2Zy9nbG9iZS5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zdmcvcGlwYS5zdmciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZT9lOTIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9BcHAudnVlP2RjYzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlci9TZWxlY3RGaWx0ZXIudnVlPzBkNjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT82NjlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT82NjliIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvUGFnZU5vdEZvdW5kL1BhZ2VOb3RGb3VuZC52dWU/M2IyNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZUZvb3Rlci9UaGVGb290ZXIudnVlPzUyMzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uL1RoZU5hdmlnYXRpb24udnVlPzZmMzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3BhZ2VzL0Fib3V0L0Fib3V0LnZ1ZT9mNjQ0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlP2JkYmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ29tbW9uL1NlbGVjdEZpbHRlci9TZWxlY3RGaWx0ZXIudnVlPzU0ZTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRnJhZ21lbnRzL0hvbWUvQ2FyZFNlY3Rpb25GaXJzdC9DYXJkU2VjdGlvbkZpcnN0LnZ1ZT9mYTU0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uU2Vjb25kL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT9jYzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWU/MTAxZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1RoZU5hdmlnYXRpb24vVGhlTmF2aWdhdGlvbi52dWU/OGNlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZT82NDc0Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vYm9vdHN0cmFwJyk7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXJzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3Jlcyc7XG5pbXBvcnQgJy4vY29uZmlndXJhdGlvbnMnO1xuaW1wb3J0ICdAc3R5bGVzL2FwcC5zY3NzJztcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIHJvdXRlcjogcm91dGVyLFxuICBzdG9yZVxufSk7Iiwid2luZG93Ll8gPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbndpbmRvdy5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTUlYX0FQUF9VUkw7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IEFwcCBmcm9tICdAcm9vdC9BcHAudnVlJztcblxuaW1wb3J0IFRoZU5hdmlnYXRpb24gZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9UaGVOYXZpZ2F0aW9uJztcbmltcG9ydCBUaGVGb290ZXIgZnJvbSAnQGNvbXBvbmVudHMvTGF5b3V0cy9UaGVGb290ZXInO1xuXG5pbXBvcnQgU2VsZWN0RmlsdGVyIGZyb20gJ0Bjb21wb25lbnRzL0NvbW1vbi9TZWxlY3RGaWx0ZXInO1xuXG5WdWUuY29tcG9uZW50KCdBcHAnLCBBcHApO1xuVnVlLmNvbXBvbmVudCgnVGhlTmF2aWdhdGlvbicsIFRoZU5hdmlnYXRpb24pO1xuVnVlLmNvbXBvbmVudCgnVGhlRm9vdGVyJywgVGhlRm9vdGVyKTtcblZ1ZS5jb21wb25lbnQoJ1NlbGVjdEZpbHRlcicsIFNlbGVjdEZpbHRlcik7IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5leHBvcnQgY29uc3QgRXZlbnRCdXMgPSBuZXcgVnVlKCk7IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5cbmltcG9ydCB7IGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYWIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSc7XG5cbmV4cG9ydCBjb25zdCBhZGQgPSBsaWJyYXJ5LmFkZDtcblxubGlicmFyeS5hZGQoZmFzKTtcbmxpYnJhcnkuYWRkKGZhYik7XG5saWJyYXJ5LmFkZChmYXIpO1xuXG5WdWUuY29tcG9uZW50KCdGb250QXdlc29tZUljb24nLCBGb250QXdlc29tZUljb24pO1xuXG5leHBvcnQgeyBGb250QXdlc29tZUljb24gfTtcbiIsImltcG9ydCAnLi9pbml0aWFsaXplcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgJy4vcGx1Z2lucyc7XG5pbXBvcnQgJy4vZm9ydC1hd2Vzb21lJztcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICdAY29uZmlndXJhdGlvbnMvZXZlbnQtYnVzJztcblxuKChpKSA9PiB7XG4gIGkucHJvdG90eXBlLiRhcGkgPSB7fTtcbiAgaS5wcm90b3R5cGUuJGV2ZW50QnVzID0gRXZlbnRCdXM7XG59KShWdWUpO1xuIiwiLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnOyIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gJ0Bjb21wb25lbnRzL0xheW91dHMvUGFnZU5vdEZvdW5kJztcbmltcG9ydCBIb21lIGZyb20gJ0BwYWdlcy9Ib21lJztcbmltcG9ydCBBYm91dCBmcm9tICdAcGFnZXMvQWJvdXQnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ0hvbWUnLFxuICAgIGNvbXBvbmVudDogSG9tZVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hYm91dCcsXG4gICAgbmFtZTogJ0Fib3V0JyxcbiAgICBjb21wb25lbnQ6IEFib3V0XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnLzpwYXRoTWF0Y2goLiopKicsXG4gICAgbmFtZTogJ1BhZ2UgTm90IEZvdW5kJyxcbiAgICBjb21wb25lbnQ6IFBhZ2VOb3RGb3VuZFxuICB9XG5dO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICBtb2RlOiAnaGlzdG9yeScsXG4gIHJvdXRlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiIsIi8vIGltcG9ydCBodHRwIGZyb20gJ0BzZXJ2aWNlcy9odHRwJztcblxuaW1wb3J0IG1vY2tQcm9kdWN0IGZyb20gJy4vLi4vLi4vX19tb2Nrc19fL3Byb2R1Y3QuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0UHJvZHVjdHM6ICgpID0+IHtcbiAgICByZXR1cm4gbW9ja1Byb2R1Y3Q7XG4gIH1cbn07IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGVzL2FwcCc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczoge1xuICAgIGFwcFxuICB9XG59KTtcbiIsImNvbnN0IGFjdGlvbnMgPSB7XG4gIHNldEZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX0ZJTFRFUl9PUFRJT05TX1BST0RVQ1RfVFlQRScsIGRhdGEpO1xuICB9LFxuICBzZXRTZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfU0VMRUNURURfRklMVEVSX1BST0RVQ1RfVFlQRScsIGRhdGEpO1xuICB9LFxuICBzZXRGaWx0ZXJPcHRpb25zU2l6ZSAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX0ZJTFRFUl9PUFRJT05TX1NJWkUnLCBkYXRhKTtcbiAgfSxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXJTaXplICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfU0VMRUNURURfRklMVEVSX1NJWkUnLCBkYXRhKTtcbiAgfSxcbiAgc2V0RmlsdGVyT3B0aW9uc0dyYWRlICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfRklMVEVSX09QVElPTlNfR1JBREUnLCBkYXRhKTtcbiAgfSxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZSAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX1NFTEVDVEVEX0ZJTFRFUl9HUkFERScsIGRhdGEpO1xuICB9LFxuICBzZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbiAoeyBjb21taXQgfSwgZGF0YSkge1xuICAgIGNvbW1pdCgnU0VUX0ZJTFRFUl9PUFRJT05TX0NPTk5FQ1RJT04nLCBkYXRhKTtcbiAgfSxcbiAgc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uICh7IGNvbW1pdCB9LCBkYXRhKSB7XG4gICAgY29tbWl0KCdTRVRfU0VMRUNURURfRklMVEVSX0NPTk5FQ1RJT04nLCBkYXRhKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uczsiLCJjb25zdCBnZXR0ZXJzID0ge1xuICBnZXRGaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZTtcbiAgfSxcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZTtcbiAgfSxcbiAgZ2V0RmlsdGVyT3B0aW9uc1NpemUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlck9wdGlvbnNTaXplO1xuICB9LFxuICBnZXRTZWxlY3RlZEZpbHRlclNpemUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkRmlsdGVyU2l6ZTtcbiAgfSxcbiAgZ2V0RmlsdGVyT3B0aW9uc0dyYWRlIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXJPcHRpb25zR3JhZGU7XG4gIH0sXG4gIGdldFNlbGVjdGVkRmlsdGVyR3JhZGUgKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkRmlsdGVyR3JhZGU7XG4gIH0sXG4gIGdldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5maWx0ZXJPcHRpb25zQ29ubmVjdGlvbjtcbiAgfSxcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uIChzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb247XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldHRlcnM7IiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IGdldHRlcnMgZnJvbSAnLi9nZXR0ZXJzJztcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZSxcbiAgZ2V0dGVycyxcbiAgYWN0aW9ucyxcbiAgbXV0YXRpb25zXG59O1xuIiwiY29uc3QgbXV0YXRpb25zID0ge1xuICBTRVRfRklMVEVSX09QVElPTlNfUFJPRFVDVF9UWVBFIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSA9IHBheWxvYWQ7XG4gIH0sXG4gIFNFVF9TRUxFQ1RFRF9GSUxURVJfUFJPRFVDVF9UWVBFIChzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHN0YXRlLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUgPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfRklMVEVSX09QVElPTlNfU0laRSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5maWx0ZXJPcHRpb25zU2l6ZSA9IHBheWxvYWQ7XG4gIH0sXG4gIFNFVF9TRUxFQ1RFRF9GSUxURVJfU0laRSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZWxlY3RlZEZpbHRlclNpemUgPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfRklMVEVSX09QVElPTlNfR1JBREUgKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuZmlsdGVyT3B0aW9uc0dyYWRlID0gcGF5bG9hZDtcbiAgfSxcbiAgU0VUX1NFTEVDVEVEX0ZJTFRFUl9HUkFERSAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5zZWxlY3RlZEZpbHRlckdyYWRlID0gcGF5bG9hZDtcbiAgfSxcbiAgU0VUX0ZJTFRFUl9PUFRJT05TX0NPTk5FQ1RJT04gKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24gPSBwYXlsb2FkO1xuICB9LFxuICBTRVRfU0VMRUNURURfRklMVEVSX0NPTk5FQ1RJT04gKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgc3RhdGUuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uID0gcGF5bG9hZDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbXV0YXRpb25zOyIsIi8qKiBlc2xpbnQtZGlzYWJsZSAqL1xuY29uc3Qgc3RhdGUgPSB7XG4gIGZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZTogW10sXG4gIHNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGU6ICcnLFxuICBmaWx0ZXJPcHRpb25zU2l6ZTogW10sXG4gIHNlbGVjdGVkRmlsdGVyU2l6ZTogJycsXG4gIGZpbHRlck9wdGlvbnNHcmFkZTogW10sXG4gIHNlbGVjdGVkRmlsdGVyR3JhZGU6ICcnLFxuICBmaWx0ZXJPcHRpb25zQ29ubmVjdGlvbjogW10sXG4gIHNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbjogJycsXG4gIG92ZXJsYXlMb2FkaW5nOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGU7IiwiZnVuY3Rpb24gZm9ybWF0ZWROdW1iZXIgKG51bWJlciwgZm9ybWF0ID0gJy4nKSB7XG4gIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9IG51bWJlci50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIGZvcm1hdCk7XG4gIHJldHVybiBmb3JtYXR0ZWROdW1iZXI7XG59XG5cbmV4cG9ydCB7XG4gIGZvcm1hdGVkTnVtYmVyXG59OyIsIjwhLS0gZXNsaW50LWRpc2FibGUgbWF4LWxlbiB2dWUvbm8tdi1odG1sIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwidy1mdWxsIGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTUwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctd2hpdGUgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTQgcHktNSBpdGVtcy1jZW50ZXJcIlxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgQGNsaWNrPVwib25IYW5kbGVWaXNpYmxlRHJvcGRvd25cIlxuICAgICAgPlxuICAgICAgICA8c3Bhbj57eyB0aXRsZSB9fSA8L3NwYW4+XG4gICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCJcbiAgICAgICAgICA6aWNvbj1cIih2aXNpYmxlRHJvcGRvd24gPyAnY2hldnJvbi11cCcgOiAnY2hldnJvbi1kb3duJylcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1sZWZ0XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic2VsZWN0ZWRWYWx1ZSAhPT0gJydcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIiBAY2xpY2s9XCJvbkNsaWNrUmVzZXRGaWx0ZXIoY2F0ZWdvcnkpXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDBcIj5cbiAgICAgICAgICAgICAge3sgc2VsZWN0ZWRWYWx1ZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgIGljb249XCJ0aW1lcy1jaXJjbGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXllbGxvdy02MDAgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICBBbGxcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxkaXZcbiAgICAgIHYtc2hvdz1cInZpc2libGVEcm9wZG93blwiXG4gICAgICBjbGFzcz1cInctZnVsbCBtdC0yIHotMTAgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInAtM1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIgdi1odG1sPVwiY29tcHV0ZVRpdGxlTGlzdCh0aXRsZSlcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXQtZ3JvdXAtc2VhcmNoXCIgY2xhc3M9XCJzci1vbmx5XCI+XG4gICAgICAgICAgU2VhcmNoXG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFic29sdXRlIGluc2V0LXktMCBydGw6aW5zZXQtci0wIHN0YXJ0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHMtMyBwb2ludGVyLWV2ZW50cy1ub25lXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgaWNvbj1cInNlYXJjaFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJibG9jayB3LWZ1bGwgcC0yIHBsLTYgcHMtMTAgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy13aGl0ZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dWwgY2xhc3M9XCJoLTQ4IHB4LTMgcGItMyBvdmVyZmxvdy15LWF1dG8gdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgIDxsaVxuICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGkpIGluIG9wdGlvbnNcIlxuICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtMyBob3ZlcjpiZy1ncmF5LTEwMCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICBAY2xpY2s9XCJvbkhhbmRsZVNlbGVjdEl0ZW0oY2F0ZWdvcnksIGl0ZW0pXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2F0ZWdvcnkgPT09ICcxJ1wiPlxuICAgICAgICAgICAgICB7eyBpdGVtLnByb2R1Y3RfdHlwZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNhdGVnb3J5ID09PSAnMidcIj5cbiAgICAgICAgICAgICAge3sgaXRlbS5zaXplIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2F0ZWdvcnkgPT09ICczJ1wiPlxuICAgICAgICAgICAgICB7eyBpdGVtLmdyYWRlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2F0ZWdvcnkgPT09ICc0J1wiPlxuICAgICAgICAgICAgICB7eyBpdGVtLmNvbm5lY3Rpb24gfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC15ZWxsb3ctNTAwXCI+XG4gICAgICAgICAgICAgIHt7IGNvbXB1dGVGb3JtYXRRdHkoaXRlbS50b3RhbF9xdHkpIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBmb3JtYXRlZE51bWJlciB9IGZyb20gJ0B1dGlscy9hcHAnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgY2F0ZWdvcnk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHNlbGVjdGVkVmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSlcbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2aXNpYmxlRHJvcGRvd246IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uSGFuZGxlVmlzaWJsZURyb3Bkb3duICgpIHtcbiAgICAgIHRoaXMudmlzaWJsZURyb3Bkb3duID0gIXRoaXMudmlzaWJsZURyb3Bkb3duO1xuICAgIH0sXG4gICAgb25DbGlja1Jlc2V0RmlsdGVyIChjYXRlZ29yeSkge1xuICAgICAgdGhpcy4kZW1pdCgnb25SZXNldERhdGEnLCB7XG4gICAgICAgIGNhdGVnb3J5XG4gICAgICB9KTtcblxuICAgICAgdGhpcy52aXNpYmxlRHJvcGRvd24gPSBmYWxzZTtcbiAgICB9LFxuICAgIGNvbXB1dGVUaXRsZUxpc3QgKHR5cGUpIHtcbiAgICAgIGxldCByZXN1bHQgPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09ICdQcm9kdWN0IFR5cGUnKSB7XG4gICAgICAgIHJlc3VsdCA9ICdTZWxlY3QgYSA8c3Ryb25nPlByb2R1Y3QgVHlwZTwvc3Ryb25nPiBiZWxvdyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ1NpemUnKSB7XG4gICAgICAgIHJlc3VsdCA9ICdTZWxlY3QgYW4gPHN0cm9uZz5PRDwvc3Ryb25nPiBiZWxvdyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ0dyYWRlJykge1xuICAgICAgICByZXN1bHQgPSAnU2VsZWN0IGEgPHN0cm9uZz5HcmFkZSBUeXBlPC9zdHJvbmc+IGJlbG93JztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSAnQ29ubmVjdGlvbicpIHtcbiAgICAgICAgcmVzdWx0ID0gJ1NlbGVjdCBhIDxzdHJvbmc+Q29ubmVjdGlvbiBUeXBlPC9zdHJvbmc+IGJlbG93JztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGNvbXB1dGVGb3JtYXRRdHkgKHBhcmFtKSB7XG4gICAgICByZXR1cm4gZm9ybWF0ZWROdW1iZXIocGFyYW0pO1xuICAgIH0sXG4gICAgb25IYW5kbGVTZWxlY3RJdGVtIChjYXRlZ29yeSwgZGF0YSkge1xuICAgICAgdGhpcy4kZW1pdCgnb25TZWxlY3REYXRhJywge1xuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgZGF0YVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub25IYW5kbGVWaXNpYmxlRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgPGRpdiBjbGFzcz1cImgtMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8aW1nXG4gICAgICAgIDpzcmM9XCJpY29uXCJcbiAgICAgICAgYWx0PVwiSWNvblwiXG4gICAgICAgIGNsYXNzPVwibS1hdXRvXCJcbiAgICAgID5cbiAgICA8L2Rpdj5cbiAgICA8aDIgY2xhc3M9XCJmb250LWJvbGQgdGV4dC0yeGwgdGV4dC1ncmF5LTcwMCBtYi0zXCI+XG4gICAgICB7eyB0aXRsZSB9fVxuICAgIDwvaDI+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAge3sgZGVzY3JpcHRpb24gfX1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8IS0tIGVzbGludC1kaXNhYmxlIG1heC1sZW4gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICA8aDIgY2xhc3M9XCJmb250LWJvbGQgdGV4dC1iYXNlIGxnOnRleHQtNHhsIHRleHQtZ3JheS02MDAgbWItNFwiPlxuICAgICAge3sgdGl0bGUgfX1cbiAgICA8L2gyPlxuICAgIDxwIGNsYXNzPVwidGV4dC1sZyB0ZXh0LWdyYXktNTAwIG1iLTVcIj5cbiAgICAgIHt7IGRlc2NyaXB0aW9uIH19XG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00XCI+XG4gICAgICA8cm91dGVyLWxpbmsgOnRvPVwibGlua0FjdGlvbjFcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJvdW5kZWQtZnVsbCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTggcHktMlwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LXllbGxvdy01MDBcIlxuICAgICAgICAgICAgaWNvbj1cImluZm8tY2lyY2xlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHt7IGxhYmVsQWN0aW9uMSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICA8cm91dGVyLWxpbmsgOnRvPVwibGlua0FjdGlvbjJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAwIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBweC04IHB5LTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgIHt7IGxhYmVsQWN0aW9uMiB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgbGFiZWxBY3Rpb24xOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgbGlua0FjdGlvbjE6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBsYWJlbEFjdGlvbjI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBsaW5rQWN0aW9uMjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxuYXYgY2xhc3M9XCJ3LWZ1bGwgYmctd2hpdGUgcHktNCBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG0tYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCIgY2xhc3M9XCJtdC0yXCI+XG4gICAgICAgICAgPGltZyA6c3JjPVwibG9nb1wiIGFsdD1cIlwiPlxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICBcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yXCI+XG4gICAgICAgICAgUGlwZXNhbGVzICZjb3B5OyB7eyB5ZWFyIH19IEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiPlxuICAgICAgICAgIENvb2tpZSBQb2xpY3lcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiPlxuICAgICAgICAgIENvb2tpZSBTZXR0aW5nc1xuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCIgY2xhc3M9XCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCI+XG4gICAgICAgICAgUHJpdmFjeSBQb2xpY3lcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiIGNsYXNzPVwidGV4dC15ZWxsb3ctNTAwIHVuZGVybGluZVwiPlxuICAgICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXG4gICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGxvZ29QaXBlcyBmcm9tICcuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGlwZXNhbGVzLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ286IGxvZ29QaXBlcyxcbiAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKVxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxuYXYgY2xhc3M9XCJ3LWZ1bGwgYmctd2hpdGUgcHktMiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG0tYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCIgY2xhc3M9XCJtdC0yXCI+XG4gICAgICAgICAgPGltZyA6c3JjPVwibG9nb1wiIGFsdD1cIlwiPlxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvbG9naW5cIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC15ZWxsb3ctNjAwXCJcbiAgICAgICAgICAgIGljb249XCJrZXlcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvc2lnbi11cFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LXllbGxvdy02MDBcIlxuICAgICAgICAgICAgaWNvbj1cInVzZXItcGx1c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTIgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LTRcIj5cbiAgICAgICAgICBBYm91dCBQaXBlc2FsZXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC00XCI+XG4gICAgICAgICAgT0NURyBNYXJrZXRwbGFjZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LTRcIj5cbiAgICAgICAgICBCbG9nXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmctZ3JheS02MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQteGwgcHktMSBweC04XCI+XG4gICAgICAgICAgU2hlbGwgTXkgUGlwZXNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgIGljb249XCJoZWFydFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgV2lzaGxpc3RcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICBpY29uPVwic2hvcHBpbmctY2FydFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgTXkgRW5xdWlyeVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCJcbiAgICAgICAgICAgIGljb249XCJtZWRhbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgQ29tcGFyZVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGxvZ29QaXBlcyBmcm9tICcuLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGlwZXNhbGVzLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ286IGxvZ29QaXBlc1xuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD4iLCI8IS0tIGVzbGludC1kaXNhYmxlIG1heC1sZW4gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICA8VGhlTmF2aWdhdGlvbiAvPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlciBiZy1ncmF5LTcwMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImdsb2JlXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byB6LTIwIHdyYXBwZXItYmFubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdC0xMlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2Uvd2VicC90b21pLWZ1bGwud2VicFwiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBtdC00NFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF4LXctNHhsIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgIFlvdXIgZ2xvYmFsIG1hcmtldHBsYWNlIHRvXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQteWVsbG93LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgYnV5ICYgc2VsbCB0dWJ1bGFyIHByb2R1Y3RzXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1heC13LTN4bCBteC1hdXRvIG1iLTEwIHRleHQtbGcgdGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgUXVpY2tseSBvdmVyY29tZSBzdXBwbHkgZ2FwcyBhbmQgdGFyZ2V0IHplcm8gaW52ZW50b3J5IHdpdGggUGlwZXNhbGVzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHNoYWRvdy1tZCByb3VuZGVkLWxnIHAtNCAtbXQtOCB6LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT1cIjFcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJvZHVjdCBUeXBlXCJcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cInNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGVcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlXCJcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XCIyXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlNpemVcIlxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVwic2VsZWN0ZWRGaWx0ZXJTaXplXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpbHRlck9wdGlvbnNTaXplXCJcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XCIzXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkdyYWRlXCJcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cInNlbGVjdGVkRmlsdGVyR3JhZGVcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZmlsdGVyT3B0aW9uc0dyYWRlXCJcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XCI0XCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbm5lY3Rpb25cIlxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVwic2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpbHRlck9wdGlvbnNDb25uZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxDYXJkU2VjdGlvbkZpcnN0XG4gICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaWR4KSBpbiBjYXJkU2VjdGlvbkZpcnN0TGlzdFwiXG4gICAgICAgICAgOmtleT1cImlkeFwiXG4gICAgICAgICAgOnRpdGxlPVwiaXRlbS50aXRsZVwiXG4gICAgICAgICAgOmRlc2NyaXB0aW9uPVwiaXRlbS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgOmljb249XCJpdGVtLmljb25cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktMjRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICA6c3JjPVwibGFuZGluZ0ltYWdlMVwiXG4gICAgICAgICAgICAgIGFsdD1cIkxhbmRpbmcgSW1hZ2UgMVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibS1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8Q2FyZFNlY3Rpb25TZWNvbmRcbiAgICAgICAgICAgIHRpdGxlPVwiVXJnZW50IGZ1bGZpbG1lbnQgZm9yIHRpbWUtY3JpdGljYWwgcHJvamVjdHNcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQaXBlc2FsZXMgbWFya2V0cGxhY2UgYXNzaXN0cyBpbiBtYW5hZ2luZyBwcm9jdXJlbWVudCBzaG9ydGZhbGxzIHF1aWNrbHkgYW5kIGVhc2lseS4gQnJvd3NlIGFuZCBmaW5kIHF1YWxpdHkgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgdG8geW91ciBzcGVjaWZpY2F0aW9ucywgYW5kIFBpcGVzYWxlcyByZWNvZ25pc2VkIHRyYWRlIHBhcnRuZXJzIHdpbGwgaGFuZGxlIHRoZSBvcmRlciBmdWxmaWxtZW50LCBndWFyYW50ZWVpbmcgcGVhY2Ugb2YgbWluZC5cIlxuICAgICAgICAgICAgbGFiZWxBY3Rpb24xPVwiSG93IHRvIEJ1eT9cIlxuICAgICAgICAgICAgbGlua0FjdGlvbjE9XCIvXCJcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMj1cIkJyb3dzZSBJbnZlbnRvcnlcIlxuICAgICAgICAgICAgbGlua0FjdGlvbjI9XCIvXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwidy1mdWxsIHB5LThcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICA8Q2FyZFNlY3Rpb25TZWNvbmRcbiAgICAgICAgICAgIHRpdGxlPVwiRmFpciBtYXJrZXQgcmF0ZXMgZm9yIHN1cnBsdXMgaW52ZW50b3J5XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGFyZ2V0IHplcm8gaW52ZW50b3J5IGJ5IG1vdmluZyBzdXJwbHVzIHByb2R1Y3RzIHRocm91Z2ggYSB0cnVzdGVkIG5ldHdvcmsgc3VwcG9ydGVkIGJ5IE1hcnViZW5pLUl0b2NodSBTdGVlbCBJbmMgKE1JU0kpLiBQaXBlc2FsZXMgY2FuIHByb3ZpZGUgeW91IHdpdGggcHJpY2luZyByZWNvbW1lbmRhdGlvbnMgdG8gYXJyaXZlIGF0IGEgZmFpciBvcGVuIG1hcmtldCB2YWx1ZSwgdGhlbiBjb25uZWN0IHlvdSB3aXRoIHBvdGVudGlhbCBidXllcnMgZ2xvYmFsbHkuXCJcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMT1cIkhvdyB0byBCdXk/XCJcbiAgICAgICAgICAgIGxpbmtBY3Rpb24xPVwiL1wiXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjI9XCJTaGVsbCBNeSBQaXBlc1wiXG4gICAgICAgICAgICBsaW5rQWN0aW9uMj1cIi9cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctMS8yXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgOnNyYz1cImxhbmRpbmdJbWFnZTJcIlxuICAgICAgICAgICAgICBhbHQ9XCJMYW5kaW5nIEltYWdlIDFcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm0tYXV0b1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3LWZ1bGwgcHktOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctZ3JheS03MDAgcm91bmRlZC1sZyBnYXAtNCBwLTE2IHB5LTI0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi0xMFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgIE5lZWQgbW9yZSBpbmZvcm1hdGlvbj9cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC15ZWxsb3ctNTAwXCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZSpcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvdW50cnkqXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXggZ2FwLTQgZmxleC1jb2wgbGc6ZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGxnOnctNC8xMlwiPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkNvdW50cnkgQ29kZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLVwiPi08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIi1cIj4tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCItXCI+LTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLVwiPi08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy04LzEyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBob25lXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsKlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJibG9jayBwLTIuNSB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktOTAwIGJnLWdyYXktNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC00IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiYWdncmUtY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy00IGgtNCB0ZXh0LWJsdWUtNjAwIGJnLWdyYXktMTAwIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6cmluZy0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBmb3I9XCJhZ2dyZS1jaGVja1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdGF5IHVwZGF0ZWQgd2l0IG91ciBsYXRlc3QgbmV3c1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAwIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBweC0yNCBweS0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPFRoZUZvb3RlciAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xuXG5pbXBvcnQgQ2FyZFNlY3Rpb25GaXJzdCBmcm9tICdAY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvbkZpcnN0JztcbmltcG9ydCBDYXJkU2VjdGlvblNlY29uZCBmcm9tICdAY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZCc7XG5cbmltcG9ydCBQcm9kdWN0U2VydmljZXMgZnJvbSAnQHNlcnZpY2VzL2FwaS9wcm9kdWN0JztcblxuaW1wb3J0IEdsb2JlU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9nbG9iZS5zdmcnO1xuaW1wb3J0IERvbGxhclN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvZG9sbGFyLnN2Zyc7XG5pbXBvcnQgUGlwYVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvcGlwYS5zdmcnO1xuXG5pbXBvcnQgTGFuZGluZ0ltYWdlMSBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0xLnBuZyc7XG5pbXBvcnQgTGFuZGluZ0ltYWdlMiBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIENhcmRTZWN0aW9uRmlyc3QsXG4gICAgQ2FyZFNlY3Rpb25TZWNvbmRcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRTZWN0aW9uRmlyc3RMaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ0J1eSBvciBzZWxsIGdsb2JhbGx5LCBtYW5hZ2UgaXQgbG9jYWxseScsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgZW5hYmxlcyBzZWxsZXJzIHRvIHByb21vdGUgc3VycGx1cyBpbnZlbnRvcnkgZ2xvYmFsbHksIG9wZW5pbmcgYnV5ZXJzIHNlYXJjaCBob3Jpem9ucy4gV2UgcHJvdmlkZSBhIHNlY3VyZSBhbmQgdW5jb21wbGljYXRlZCBwcm9jZXNzLCB3aXRoIGJvdGggYnV5ZXJzIGFuZCBzZWxsZXJzIGVuam95aW5nIHRoZSBjb25maWRlbmNlIG9mIHRyYW5zYWN0aW9uIG1hbmFnZW1lbnQgYnkgdGhlaXIgbG9jYWwgTWFydWJlbmktSXRvY2h1IFN0ZWVsIChNSVNJKSBuZXR3b3JrLicsXG4gICAgICAgICAgaWNvbjogR2xvYmVTdmdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHRpdGxlOiAnU3VwcG9ydGluZyBjb3N0LWVmZmVjdGl2ZSBpbnZlbnRvcnkgbWFuYWdlbWVudCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgYWxsb3dzIG9yZ2FuaXNhdGlvbnMgb2YgYWxsIHNpemVzIHRvIHF1aWNrbHkgdHJhZGUgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgYXQgYSBmYWlyIHByaWNlLiBZb3UgY2FuIG5vdyBrZWVwIGNvc3RzIGluIGxpbmUgd2l0aCBleHBlY3RhdGlvbnMgYW5kIGVhc2lseSBhY2Nlc3Mgb3Igb2ZmbG9hZCBleGNlc3MgaW52ZW50b3J5LicsXG4gICAgICAgICAgaWNvbjogRG9sbGFyU3ZnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogJ0xhcmdlIHJhbmdlIG9mIHJlYWR5LW1hZGUgcGlwZXMgZml0IGZvciBwdXJwb3NlJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BpcGVzYWxlcyBtYXJrZXRwbGFjZSBpcyBob21lIHRvIGEgbGFyZ2UgcmFuZ2Ugb2YgcXVhbGl0eSBPaWwgQ291bnRyeSBUdWJ1bGFyIEdvb2RzIChPQ1RHKS4gQnJvd3NlIGJ5IHByb2R1Y3QgdHlwZSwgZ3JhZGUsIHNpemUsIGNvbm5lY3Rpb24gYW5kIGxvY2F0aW9uLiBCZSBhc3N1cmVkIG9mIHN1aXRhYmxlIGJhY2t1cCBzdXBwbGllcyB0byBtZWV0IHVyZ2VudCBkZW1hbmQuJyxcbiAgICAgICAgICBpY29uOiBQaXBhU3ZnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBsYW5kaW5nSW1hZ2UxOiBMYW5kaW5nSW1hZ2UxLFxuICAgICAgbGFuZGluZ0ltYWdlMjogTGFuZGluZ0ltYWdlMlxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwU3RhdGUoJ2FwcCcsIHtcbiAgICAgIGZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZTogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUsXG4gICAgICBzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlOiAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUsXG4gICAgICBmaWx0ZXJPcHRpb25zU2l6ZTogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zU2l6ZSxcbiAgICAgIHNlbGVjdGVkRmlsdGVyU2l6ZTogKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbHRlclNpemUsXG4gICAgICBmaWx0ZXJPcHRpb25zR3JhZGU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc0dyYWRlLFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJHcmFkZTogKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZEZpbHRlckdyYWRlLFxuICAgICAgZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb246IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24sXG4gICAgICBzZWxlY3RlZEZpbHRlckNvbm5lY3Rpb246IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXG4gICAgfSlcbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBnZXRBbGxQcm9kdWN0ICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFByb2R1Y3RTZXJ2aWNlcy5nZXRQcm9kdWN0cygpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmlsdGVyRGF0YSAoZGF0YSwgcGFyYW1GaWx0ZXIpIHtcbiAgICAgIGxldCBmaWx0ZXJDcml0ZXJpYSA9IHBhcmFtRmlsdGVyO1xuXG4gICAgICBjb25zdCBhcHBseUZpbHRlciA9IChkYXRhLCBjcml0ZXJpYSkgPT4ge1xuICAgICAgICBpZiAoIWNyaXRlcmlhKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7IFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNyaXRlcmlhKSB7XG4gICAgICAgICAgICBpZiAoaXRlbVtrZXldICE9PSBjcml0ZXJpYVtrZXldKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYXBwbHlGaWx0ZXIoZGF0YSwgZmlsdGVyQ3JpdGVyaWEpO1xuICAgICAgY29uc3Qgbm90RmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+ICFhcHBseUZpbHRlcihbaXRlbV0sIGZpbHRlckNyaXRlcmlhKS5sZW5ndGgpO1xuICAgICAgY29uc3QgbW9kaWZpZWROb3RGaWx0ZXJlZERhdGEgPSBub3RGaWx0ZXJlZERhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHF0eTogMCB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbWJpbmVkRGF0YSA9IFsuLi5maWx0ZXJlZERhdGEsIC4uLm1vZGlmaWVkTm90RmlsdGVyZWREYXRhXTtcblxuICAgICAgcmV0dXJuIGNvbWJpbmVkRGF0YTtcbiAgICB9LFxuICAgIGdldERhdGFQcm9kdWN0VHlwZSAoZGF0YSkge1xuICAgICAgY29uc3QgcHJvZHVjdFR5cGVRdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2NbY3Vyci5wcm9kdWN0X3R5cGVdKSB7XG4gICAgICAgICAgYWNjW2N1cnIucHJvZHVjdF90eXBlXSArPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWNjW2N1cnIucHJvZHVjdF90eXBlXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBwcm9kdWN0VHlwZVF0eUFycmF5ID0gT2JqZWN0LmtleXMocHJvZHVjdFR5cGVRdHlTdW0pLm1hcCgocHJvZHVjdFR5cGUpID0+ICh7XG4gICAgICAgIHByb2R1Y3RfdHlwZTogcHJvZHVjdFR5cGUsXG4gICAgICAgIHRvdGFsX3F0eTogcHJvZHVjdFR5cGVRdHlTdW1bcHJvZHVjdFR5cGVdXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBwcm9kdWN0VHlwZVF0eUFycmF5O1xuICAgIH0sXG4gICAgZ2V0RGF0YVNpemUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHNpemVRdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2NbY3Vyci5zaXplXSkge1xuICAgICAgICAgIGFjY1tjdXJyLnNpemVdICs9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhY2NbY3Vyci5zaXplXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBzaXplUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhzaXplUXR5U3VtKS5tYXAoKHNpemUpID0+ICh7XG4gICAgICAgIHNpemUsXG4gICAgICAgIHRvdGFsX3F0eTogc2l6ZVF0eVN1bVtzaXplXVxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gc2l6ZVF0eUFycmF5O1xuICAgIH0sXG4gICAgZ2V0RGF0YUdyYWRlIChkYXRhKSB7XG4gICAgICBjb25zdCBncmFkZVF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcbiAgICAgICAgaWYgKGFjY1tjdXJyLmdyYWRlXSkge1xuICAgICAgICAgIGFjY1tjdXJyLmdyYWRlXSArPSBwYXJzZUludChjdXJyLnF0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYWNjW2N1cnIuZ3JhZGVdID0gcGFyc2VJbnQoY3Vyci5xdHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIGNvbnN0IGdyYWRlUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhncmFkZVF0eVN1bSkubWFwKChncmFkZSkgPT4gKHtcbiAgICAgICAgZ3JhZGUsXG4gICAgICAgIHRvdGFsX3F0eTogZ3JhZGVRdHlTdW1bZ3JhZGVdXG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBncmFkZVF0eUFycmF5O1xuICAgIH0sXG4gICAgZ2V0RGF0YUNvbm5lY3Rpb24gKGRhdGEpIHtcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb25RdHlTdW0gPSBkYXRhLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgIGlmIChhY2NbY3Vyci5jb25uZWN0aW9uXSkge1xuICAgICAgICAgIGFjY1tjdXJyLmNvbm5lY3Rpb25dICs9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhY2NbY3Vyci5jb25uZWN0aW9uXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICBjb25zdCBjb25uZWN0aW9uUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhjb25uZWN0aW9uUXR5U3VtKS5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XG4gICAgICAgIGNvbm5lY3Rpb24sXG4gICAgICAgIHRvdGFsX3F0eTogY29ubmVjdGlvblF0eVN1bVtjb25uZWN0aW9uXVxuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gY29ubmVjdGlvblF0eUFycmF5O1xuICAgIH0sXG4gICAgYXN5bmMgaW5pdGlhbGl6ZSAoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmdldEFsbFByb2R1Y3QoKTtcbiAgICAgIGNvbnN0IGJvZHkgPSB7fTtcblxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZSAhPT0gJycpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XG4gICAgICAgICAgcHJvZHVjdF90eXBlOiB0aGlzLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbHRlclNpemUgIT09ICcnKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xuICAgICAgICAgIHNpemU6IHRoaXMuc2VsZWN0ZWRGaWx0ZXJTaXplXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJHcmFkZSAhPT0gJycpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XG4gICAgICAgICAgZ3JhZGU6IHRoaXMuc2VsZWN0ZWRGaWx0ZXJHcmFkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiAhPT0gJycpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XG4gICAgICAgICAgY29ubmVjdGlvbjogdGhpcy5zZWxlY3RlZEZpbHRlckNvbm5lY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICBjb25zdCByZXNGaWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhKHJlcywgYm9keSk7XG5cbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgXG4gICAgICBjb25zdCByZXNEYXRhUHJvZHVjdFR5cGUgPSB0aGlzLmdldERhdGFQcm9kdWN0VHlwZShyZXNGaWx0ZXJEYXRhKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlJywgcmVzRGF0YVByb2R1Y3RUeXBlKTtcblxuICAgICAgY29uc3QgcmVzRGF0YXNTaXplID0gdGhpcy5nZXREYXRhU2l6ZShyZXNGaWx0ZXJEYXRhKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1NpemUnLCByZXNEYXRhc1NpemUpO1xuICAgICAgXG4gICAgICBjb25zdCByZXNEYXRhR3JhZGUgPSB0aGlzLmdldERhdGFHcmFkZShyZXNGaWx0ZXJEYXRhKTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc0dyYWRlJywgcmVzRGF0YUdyYWRlKTtcbiAgICAgIFxuICAgICAgY29uc3QgcmVzRGF0YUNvbm5lY3Rpb24gPSB0aGlzLmdldERhdGFDb25uZWN0aW9uKHJlc0ZpbHRlckRhdGEpO1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbicsIHJlc0RhdGFDb25uZWN0aW9uKTtcbiAgICB9LFxuICAgIG9uSGFuZGxlU2VsZWN0ZGF0YSAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZScsIGV2ZW50LmRhdGEucHJvZHVjdF90eXBlKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzInKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJTaXplJywgZXZlbnQuZGF0YS5zaXplKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzMnKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZScsIGV2ZW50LmRhdGEuZ3JhZGUpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24nLCBldmVudC5kYXRhLmNvbm5lY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9LFxuICAgIG9uSGFuZGxlUmVzZXRkYXRhIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMScpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlJywgJycpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMicpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRTZWxlY3RlZEZpbHRlclNpemUnLCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICczJykge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyR3JhZGUnLCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY2F0ZWdvcnkgPT09ICc0Jykge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbicsICcnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4uZ2xvYmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL2hlYWRlci1iYWNrZ3JvdW5kLTIucG5nKTsgXG4gIGJhY2tncm91bmQtc2l6ZTogMTAyNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4ud3JhcHBlci1iYW5uZXIge1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJyb3V0ZXItdmlld1wiKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInctZnVsbCBiZy1ncmF5LTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS01MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXdoaXRlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC00IHB5LTUgaXRlbXMtY2VudGVyXCIsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIixcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25IYW5kbGVWaXNpYmxlRHJvcGRvd24gfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpICsgXCIgXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGljb246IF92bS52aXNpYmxlRHJvcGRvd24gPyBcImNoZXZyb24tdXBcIiA6IFwiY2hldnJvbi1kb3duXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCB0ZXh0LWxlZnRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5zZWxlY3RlZFZhbHVlICE9PSBcIlwiXG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2tSZXNldEZpbHRlcihfdm0uY2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC15ZWxsb3ctNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkVmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJ0aW1lcy1jaXJjbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQteWVsbG93LTYwMCB1cHBlcmNhc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIEFsbFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnZpc2libGVEcm9wZG93bixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmlzaWJsZURyb3Bkb3duXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJ3LWZ1bGwgbXQtMiB6LTEwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZ1wiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5jb21wdXRlVGl0bGVMaXN0KF92bS50aXRsZSkpIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIsIGF0dHJzOiB7IGZvcjogXCJpbnB1dC1ncm91cC1zZWFyY2hcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBTZWFyY2hcXG4gICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVsYXRpdmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBpbnNldC15LTAgcnRsOmluc2V0LXItMCBzdGFydC0wIGZsZXggaXRlbXMtY2VudGVyIHBzLTMgcG9pbnRlci1ldmVudHMtbm9uZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYmxvY2sgdy1mdWxsIHAtMiBwbC02IHBzLTEwIHRleHQtc20gdGV4dC1ncmF5LTkwMCBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctd2hpdGVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoLTQ4IHB4LTMgcGItMyBvdmVyZmxvdy15LWF1dG8gdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm9wdGlvbnMsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHktMiBweC0zIGhvdmVyOmJnLWdyYXktMTAwIHJvdW5kZWQtbGcgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVNlbGVjdEl0ZW0oX3ZtLmNhdGVnb3J5LCBpdGVtKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3J5ID09PSBcIjFcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnByb2R1Y3RfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3J5ID09PSBcIjJcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5zaXplKSArIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmNhdGVnb3J5ID09PSBcIjNcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5ncmFkZSkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5jYXRlZ29yeSA9PT0gXCI0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5jb25uZWN0aW9uKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LXllbGxvdy01MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY29tcHV0ZUZvcm1hdFF0eShpdGVtLnRvdGFsX3F0eSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2xcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibS1hdXRvXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmljb24sIGFsdDogXCJJY29uXCIgfSxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LTJ4bCB0ZXh0LWdyYXktNzAwIG1iLTNcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICBcIiksXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiIH0sIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0uZGVzY3JpcHRpb24pICsgXCJcXG4gIFwiKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImgyXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LWJhc2UgbGc6dGV4dC00eGwgdGV4dC1ncmF5LTYwMCBtYi00XCIgfSxcbiAgICAgIFtfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICBcIildXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGcgdGV4dC1ncmF5LTUwMCBtYi01XCIgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5kZXNjcmlwdGlvbikgKyBcIlxcbiAgXCIpLFxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiBfdm0ubGlua0FjdGlvbjEgfSB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInJvdW5kZWQtZnVsbCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB4LTggcHktMlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC15ZWxsb3ctNTAwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJpbmZvLWNpcmNsZVwiIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYWJlbEFjdGlvbjEpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IF92bS5saW5rQWN0aW9uMiB9IH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwicm91bmRlZC1mdWxsIGJnLXllbGxvdy01MDAgYm9yZGVyIGJvcmRlci15ZWxsb3ctNTAwIHB4LTggcHktMiB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxhYmVsQWN0aW9uMikgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIgaC1mdWxsIHAtMTZcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC01IG14LWF1dG8gbXktOFwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1heC13LW1kIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWQ6dGV4dC0zeGwgbWItMTBcIiB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBQYWdlIE5vdCBGb3VuZFxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IGF0dHJzOiB7IHRvOiB7IHBhdGg6IFwiL1wiIH0gfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbWUtMiBtYi0yIGZvY3VzOm91dGxpbmUtbm9uZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBCYWNrIHRvIERhc2hib2FyZFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJtYi04IGZvbnQtZXh0cmFib2xkIHRleHQtOXhsXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtfdm0uX3YoXCJFcnJvclwiKV0pLFxuICAgICAgX3ZtLl92KFwiNDA0XFxuICAgICAgXCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcIm5hdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGJnLXdoaXRlIHB5LTQgYm9yZGVyLXQgYm9yZGVyLWdyYXktMjAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiwgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ubG9nbywgYWx0OiBcIlwiIH0gfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtbC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBQaXBlc2FsZXMgwqkgXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnllYXIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIENvb2tpZSBQb2xpY3lcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIENvb2tpZSBTZXR0aW5nc1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteWVsbG93LTUwMCB1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi9cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgUHJpdmFjeSBQb2xpY3lcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXllbGxvdy01MDAgdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogXCIvXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFRlcm1zIGFuZCBDb25kaXRpb25zXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcIm5hdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGJnLXdoaXRlIHB5LTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbS1hdXRvIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJyb3V0ZXItbGlua1wiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTJcIiwgYXR0cnM6IHsgdG86IFwiL1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ubG9nbywgYWx0OiBcIlwiIH0gfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvbG9naW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJGb250QXdlc29tZUljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQteWVsbG93LTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImtleVwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtbC0yIGZvbnQtc2VtaWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBMb2dpblxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIi9zaWduLXVwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LXllbGxvdy02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJ1c2VyLXBsdXNcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMiBmb250LXNlbWlib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgU2lnbiBVcFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBBYm91dCBQaXBlc2FsZXNcXG4gICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LTRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgT0NURyBNYXJrZXRwbGFjZVxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLXhsIHB5LTEgcHgtNFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBCbG9nXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTYwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC14bCBweS0xIHB4LThcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgU2hlbGwgTXkgUGlwZXNcXG4gICAgICBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkZvbnRBd2Vzb21lSWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiaGVhcnRcIiB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFdpc2hsaXN0XFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJzaG9wcGluZy1jYXJ0XCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTYwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBNeSBFbnF1aXJ5XFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiRm9udEF3ZXNvbWVJY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJtZWRhbFwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgQ29tcGFyZVxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl92KFwiXFxuICBBYm91dFxcblwiKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiVGhlTmF2aWdhdGlvblwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzZWN0aW9uXCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwidy1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00IC1tdC04IHotMTBcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU2VsZWN0RmlsdGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUHJvZHVjdCBUeXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogX3ZtLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdERhdGE6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzZXREYXRhOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTZWxlY3RGaWx0ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogX3ZtLnNlbGVjdGVkRmlsdGVyU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZmlsdGVyT3B0aW9uc1NpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3REYXRhOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2V0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU2VsZWN0RmlsdGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiR3JhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBfdm0uc2VsZWN0ZWRGaWx0ZXJHcmFkZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZmlsdGVyT3B0aW9uc0dyYWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0RGF0YTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldERhdGE6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIlNlbGVjdEZpbHRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbm5lY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBfdm0uc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5maWx0ZXJPcHRpb25zQ29ubmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdERhdGE6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzZXREYXRhOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktMjRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNhcmRTZWN0aW9uRmlyc3RMaXN0LCBmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJDYXJkU2VjdGlvbkZpcnN0XCIsIHtcbiAgICAgICAgICAgICAga2V5OiBpZHgsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktMjRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ubGFuZGluZ0ltYWdlMSwgYWx0OiBcIkxhbmRpbmcgSW1hZ2UgMVwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctMS8yXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiQ2FyZFNlY3Rpb25TZWNvbmRcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVXJnZW50IGZ1bGZpbG1lbnQgZm9yIHRpbWUtY3JpdGljYWwgcHJvamVjdHNcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgXCJQaXBlc2FsZXMgbWFya2V0cGxhY2UgYXNzaXN0cyBpbiBtYW5hZ2luZyBwcm9jdXJlbWVudCBzaG9ydGZhbGxzIHF1aWNrbHkgYW5kIGVhc2lseS4gQnJvd3NlIGFuZCBmaW5kIHF1YWxpdHkgdHVidWxhciBwcm9kdWN0cyBhbmQgYWNjZXNzb3JpZXMgdG8geW91ciBzcGVjaWZpY2F0aW9ucywgYW5kIFBpcGVzYWxlcyByZWNvZ25pc2VkIHRyYWRlIHBhcnRuZXJzIHdpbGwgaGFuZGxlIHRoZSBvcmRlciBmdWxmaWxtZW50LCBndWFyYW50ZWVpbmcgcGVhY2Ugb2YgbWluZC5cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24xOiBcIkhvdyB0byBCdXk/XCIsXG4gICAgICAgICAgICAgICAgICAgIGxpbmtBY3Rpb24xOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxBY3Rpb24yOiBcIkJyb3dzZSBJbnZlbnRvcnlcIixcbiAgICAgICAgICAgICAgICAgICAgbGlua0FjdGlvbjI6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNlY3Rpb25cIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcHktOFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcIkNhcmRTZWN0aW9uU2Vjb25kXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZhaXIgbWFya2V0IHJhdGVzIGZvciBzdXJwbHVzIGludmVudG9yeVwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICBcIlRhcmdldCB6ZXJvIGludmVudG9yeSBieSBtb3Zpbmcgc3VycGx1cyBwcm9kdWN0cyB0aHJvdWdoIGEgdHJ1c3RlZCBuZXR3b3JrIHN1cHBvcnRlZCBieSBNYXJ1YmVuaS1JdG9jaHUgU3RlZWwgSW5jIChNSVNJKS4gUGlwZXNhbGVzIGNhbiBwcm92aWRlIHlvdSB3aXRoIHByaWNpbmcgcmVjb21tZW5kYXRpb25zIHRvIGFycml2ZSBhdCBhIGZhaXIgb3BlbiBtYXJrZXQgdmFsdWUsIHRoZW4gY29ubmVjdCB5b3Ugd2l0aCBwb3RlbnRpYWwgYnV5ZXJzIGdsb2JhbGx5LlwiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbEFjdGlvbjE6IFwiSG93IHRvIEJ1eT9cIixcbiAgICAgICAgICAgICAgICAgICAgbGlua0FjdGlvbjE6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbEFjdGlvbjI6IFwiU2hlbGwgTXkgUGlwZXNcIixcbiAgICAgICAgICAgICAgICAgICAgbGlua0FjdGlvbjI6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTEvMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm0tYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ubGFuZGluZ0ltYWdlMiwgYWx0OiBcIkxhbmRpbmcgSW1hZ2UgMVwiIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiVGhlRm9vdGVyXCIpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fY1xuICAgIHJldHVybiBfYyhcbiAgICAgIFwic2VjdGlvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyIGJnLWdyYXktNzAwXCIsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdsb2JlXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG8gei0yMCB3cmFwcGVyLWJhbm5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFic29sdXRlIGZsZXggdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9waXBlc2FsZXMuY29tL3ZpZXcyL2ltYWdlL3dlYnAvdG9taS1mdWxsLndlYnBcIixcbiAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHB4LTQgbXgtYXV0byBtdC00NFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1heC13LTR4bCBteC1hdXRvIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQtZ3JheS0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFlvdXIgZ2xvYmFsIG1hcmtldHBsYWNlIHRvXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQteWVsbG93LTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgYnV5ICYgc2VsbCB0dWJ1bGFyIHByb2R1Y3RzXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13LTN4bCBteC1hdXRvIG1iLTEwIHRleHQtbGcgdGV4dC1ncmF5LTMwMFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgUXVpY2tseSBvdmVyY29tZSBzdXBwbHkgZ2FwcyBhbmQgdGFyZ2V0IHplcm8gaW52ZW50b3J5IHdpdGggUGlwZXNhbGVzLlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwic2VjdGlvblwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBweS04XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy1ncmF5LTcwMCByb3VuZGVkLWxnIGdhcC00IHAtMTYgcHktMjRcIixcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMTBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXdoaXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIE5lZWQgbW9yZSBpbmZvcm1hdGlvbj9cXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC15ZWxsb3ctNTAwXCIgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgQ29udGFjdCBVc1xcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZm9ybVwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZ2FwLTQgZmxleC1jb2wgbGc6ZmxleC1yb3cgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctMS8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIk5hbWUqXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiQ291bnRyeSpcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBmbGV4IGdhcC00IGZsZXgtY29sIGxnOmZsZXgtcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctNC8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgc2VsZWN0ZWQ6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb3VudHJ5IENvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIi1cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBsZzp3LTgvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJQaG9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGxnOnctMS8yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJFbWFpbCpcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmxvY2sgcC0yLjUgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNFwiLCBwbGFjZWhvbGRlcjogXCJZb3VyIE1lc3NhZ2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBnYXAtNCB3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJ3LTQgaC00IHRleHQtYmx1ZS02MDAgYmctZ3JheS0xMDAgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpyaW5nLTJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYWdncmUtY2hlY2tcIiwgdHlwZTogXCJjaGVja2JveFwiLCB2YWx1ZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImFnZ3JlLWNoZWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFN0YXkgdXBkYXRlZCB3aXQgb3VyIGxhdGVzdCBuZXdzXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3VuZGVkLWZ1bGwgYmcteWVsbG93LTUwMCBib3JkZXIgYm9yZGVyLXllbGxvdy01MDAgcHgtMjQgcHktMiB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgU2VuZFxcbiAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nbG9iZVtkYXRhLXYtMDk3ZmExNzZdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3BpcGVzYWxlcy5jb20vdmlldzIvaW1hZ2UvaGVhZGVyLWJhY2tncm91bmQtMi5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDI0cHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcbi53cmFwcGVyLWJhbm5lcltkYXRhLXYtMDk3ZmExNzZdIHtcXG4gIGhlaWdodDogNDUwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9wYWdlcy9Ib21lL0hvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdmQTtFQUNBLGdGQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNBO0FBRUE7RUFDQSxhQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPCEtLSBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuIC0tPlxcbjx0ZW1wbGF0ZT5cXG4gIDxkaXYgY2xhc3M9XFxcInctZnVsbFxcXCI+XFxuICAgIDxUaGVOYXZpZ2F0aW9uIC8+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJyZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gdy1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlciBiZy1ncmF5LTcwMFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZ2xvYmVcXFwiIC8+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gei0yMCB3cmFwcGVyLWJhbm5lclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnNvbHV0ZSBmbGV4IHctZnVsbFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm10LTEyXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS93ZWJwL3RvbWktZnVsbC53ZWJwXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBweC00IG14LWF1dG8gbXQtNDRcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWF4LXctNHhsIG14LWF1dG8gdGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcIm10LTggbWItNiB0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdGV4dC1ncmF5LTEwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgWW91ciBnbG9iYWwgbWFya2V0cGxhY2UgdG9cXG4gICAgICAgICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJtdC04IG1iLTYgdGV4dC00eGwgbGc6dGV4dC01eGwgZm9udC1ib2xkIHRleHQteWVsbG93LTYwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgYnV5ICYgc2VsbCB0dWJ1bGFyIHByb2R1Y3RzXFxuICAgICAgICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJtYXgtdy0zeGwgbXgtYXV0byBtYi0xMCB0ZXh0LWxnIHRleHQtZ3JheS0zMDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgIFF1aWNrbHkgb3ZlcmNvbWUgc3VwcGx5IGdhcHMgYW5kIHRhcmdldCB6ZXJvIGludmVudG9yeSB3aXRoIFBpcGVzYWxlcy5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgLW10LTggei0xMFxcXCI+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcXFwiPlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PVxcXCIxXFxcIlxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiUHJvZHVjdCBUeXBlXFxcIlxcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cXFwic2VsZWN0ZWRGaWx0ZXJQcm9kdWN0VHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcImZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cXFwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cXFwib25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgIDxTZWxlY3RGaWx0ZXJcXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk9XFxcIjJcXFwiXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJTaXplXFxcIlxcbiAgICAgICAgICAgICAgICA6c2VsZWN0ZWRWYWx1ZT1cXFwic2VsZWN0ZWRGaWx0ZXJTaXplXFxcIlxcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiZmlsdGVyT3B0aW9uc1NpemVcXFwiXFxuICAgICAgICAgICAgICAgIEBvblNlbGVjdERhdGE9XFxcIm9uSGFuZGxlU2VsZWN0ZGF0YSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICBAb25SZXNldERhdGE9XFxcIm9uSGFuZGxlUmVzZXRkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyXFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PVxcXCIzXFxcIlxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR3JhZGVcXFwiXFxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVxcXCJzZWxlY3RlZEZpbHRlckdyYWRlXFxcIlxcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiZmlsdGVyT3B0aW9uc0dyYWRlXFxcIlxcbiAgICAgICAgICAgICAgICBAb25TZWxlY3REYXRhPVxcXCJvbkhhbmRsZVNlbGVjdGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQG9uUmVzZXREYXRhPVxcXCJvbkhhbmRsZVJlc2V0ZGF0YSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgPFNlbGVjdEZpbHRlclxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeT1cXFwiNFxcXCJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkNvbm5lY3Rpb25cXFwiXFxuICAgICAgICAgICAgICAgIDpzZWxlY3RlZFZhbHVlPVxcXCJzZWxlY3RlZEZpbHRlckNvbm5lY3Rpb25cXFwiXFxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJmaWx0ZXJPcHRpb25zQ29ubmVjdGlvblxcXCJcXG4gICAgICAgICAgICAgICAgQG9uU2VsZWN0RGF0YT1cXFwib25IYW5kbGVTZWxlY3RkYXRhKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIEBvblJlc2V0RGF0YT1cXFwib25IYW5kbGVSZXNldGRhdGEoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbCBweS0yNFxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNFxcXCI+XFxuICAgICAgICA8Q2FyZFNlY3Rpb25GaXJzdFxcbiAgICAgICAgICB2LWZvcj1cXFwiKGl0ZW0sIGlkeCkgaW4gY2FyZFNlY3Rpb25GaXJzdExpc3RcXFwiXFxuICAgICAgICAgIDprZXk9XFxcImlkeFxcXCJcXG4gICAgICAgICAgOnRpdGxlPVxcXCJpdGVtLnRpdGxlXFxcIlxcbiAgICAgICAgICA6ZGVzY3JpcHRpb249XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiXFxuICAgICAgICAgIDppY29uPVxcXCJpdGVtLmljb25cXFwiXFxuICAgICAgICAvPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJ3LWZ1bGwgcHktMjRcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICA6c3JjPVxcXCJsYW5kaW5nSW1hZ2UxXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJMYW5kaW5nIEltYWdlIDFcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwibS1hdXRvXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxcbiAgICAgICAgICAgIHRpdGxlPVxcXCJVcmdlbnQgZnVsZmlsbWVudCBmb3IgdGltZS1jcml0aWNhbCBwcm9qZWN0c1xcXCJcXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cXFwiUGlwZXNhbGVzIG1hcmtldHBsYWNlIGFzc2lzdHMgaW4gbWFuYWdpbmcgcHJvY3VyZW1lbnQgc2hvcnRmYWxscyBxdWlja2x5IGFuZCBlYXNpbHkuIEJyb3dzZSBhbmQgZmluZCBxdWFsaXR5IHR1YnVsYXIgcHJvZHVjdHMgYW5kIGFjY2Vzc29yaWVzIHRvIHlvdXIgc3BlY2lmaWNhdGlvbnMsIGFuZCBQaXBlc2FsZXMgcmVjb2duaXNlZCB0cmFkZSBwYXJ0bmVycyB3aWxsIGhhbmRsZSB0aGUgb3JkZXIgZnVsZmlsbWVudCwgZ3VhcmFudGVlaW5nIHBlYWNlIG9mIG1pbmQuXFxcIlxcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMT1cXFwiSG93IHRvIEJ1eT9cXFwiXFxuICAgICAgICAgICAgbGlua0FjdGlvbjE9XFxcIi9cXFwiXFxuICAgICAgICAgICAgbGFiZWxBY3Rpb24yPVxcXCJCcm93c2UgSW52ZW50b3J5XFxcIlxcbiAgICAgICAgICAgIGxpbmtBY3Rpb24yPVxcXCIvXFxcIlxcbiAgICAgICAgICAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbCBweS04XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgIDxDYXJkU2VjdGlvblNlY29uZFxcbiAgICAgICAgICAgIHRpdGxlPVxcXCJGYWlyIG1hcmtldCByYXRlcyBmb3Igc3VycGx1cyBpbnZlbnRvcnlcXFwiXFxuICAgICAgICAgICAgZGVzY3JpcHRpb249XFxcIlRhcmdldCB6ZXJvIGludmVudG9yeSBieSBtb3Zpbmcgc3VycGx1cyBwcm9kdWN0cyB0aHJvdWdoIGEgdHJ1c3RlZCBuZXR3b3JrIHN1cHBvcnRlZCBieSBNYXJ1YmVuaS1JdG9jaHUgU3RlZWwgSW5jIChNSVNJKS4gUGlwZXNhbGVzIGNhbiBwcm92aWRlIHlvdSB3aXRoIHByaWNpbmcgcmVjb21tZW5kYXRpb25zIHRvIGFycml2ZSBhdCBhIGZhaXIgb3BlbiBtYXJrZXQgdmFsdWUsIHRoZW4gY29ubmVjdCB5b3Ugd2l0aCBwb3RlbnRpYWwgYnV5ZXJzIGdsb2JhbGx5LlxcXCJcXG4gICAgICAgICAgICBsYWJlbEFjdGlvbjE9XFxcIkhvdyB0byBCdXk/XFxcIlxcbiAgICAgICAgICAgIGxpbmtBY3Rpb24xPVxcXCIvXFxcIlxcbiAgICAgICAgICAgIGxhYmVsQWN0aW9uMj1cXFwiU2hlbGwgTXkgUGlwZXNcXFwiXFxuICAgICAgICAgICAgbGlua0FjdGlvbjI9XFxcIi9cXFwiXFxuICAgICAgICAgIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgOnNyYz1cXFwibGFuZGluZ0ltYWdlMlxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiTGFuZGluZyBJbWFnZSAxXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcIm0tYXV0b1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInctZnVsbCBweS04XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGJnLWdyYXktNzAwIHJvdW5kZWQtbGcgZ2FwLTQgcC0xNiBweS0yNFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYi0xMFxcXCI+XFxuICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LTV4bCB0ZXh0LXdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgIE5lZWQgbW9yZSBpbmZvcm1hdGlvbj9cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC01eGwgdGV4dC15ZWxsb3ctNTAwXFxcIj5cXG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8Zm9ybSBjbGFzcz1cXFwidy1mdWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvdyB3LWZ1bGxcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTEvMlxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJOYW1lKlxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbWItNSBpbmxpbmUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDb3VudHJ5KlxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgZmxleCBnYXAtNCBmbGV4LWNvbCBsZzpmbGV4LXJvd1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBsZzp3LTQvMTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Q291bnRyeSBDb2RlPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCItXFxcIj4tPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3LWZ1bGwgbGc6dy04LzEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQaG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIGxnOnctMS8yXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInctZnVsbCBtYi01IGlubGluZS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41XFxcIlxcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCpcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidy1mdWxsIG1iLTUgaW5saW5lLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXFxuICAgICAgICAgICAgICAgICAgcm93cz1cXFwiNFxcXCJcXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmxvY2sgcC0yLjUgdy1mdWxsIHRleHQtc20gdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFxcXCJcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiWW91ciBNZXNzYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4IGdhcC00IHctZnVsbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXggaXRlbXMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgICAgaWQ9XFxcImFnZ3JlLWNoZWNrXFxcIlxcbiAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInctNCBoLTQgdGV4dC1ibHVlLTYwMCBiZy1ncmF5LTEwMCBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOnJpbmctMlxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8bGFiZWxcXG4gICAgICAgICAgICAgICAgICBmb3I9XFxcImFnZ3JlLWNoZWNrXFxcIlxcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtbC0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIFN0YXkgdXBkYXRlZCB3aXQgb3VyIGxhdGVzdCBuZXdzXFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctNTAwIGJvcmRlciBib3JkZXIteWVsbG93LTUwMCBweC0yNCBweS0yIHRleHQtd2hpdGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIFNlbmRcXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG5cXG4gICAgPFRoZUZvb3RlciAvPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0Plxcbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cXG5pbXBvcnQgeyBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xcblxcbmltcG9ydCBDYXJkU2VjdGlvbkZpcnN0IGZyb20gJ0Bjb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QnO1xcbmltcG9ydCBDYXJkU2VjdGlvblNlY29uZCBmcm9tICdAY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZCc7XFxuXFxuaW1wb3J0IFByb2R1Y3RTZXJ2aWNlcyBmcm9tICdAc2VydmljZXMvYXBpL3Byb2R1Y3QnO1xcblxcbmltcG9ydCBHbG9iZVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvZ2xvYmUuc3ZnJztcXG5pbXBvcnQgRG9sbGFyU3ZnIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL3N2Zy9kb2xsYXIuc3ZnJztcXG5pbXBvcnQgUGlwYVN2ZyBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9zdmcvcGlwYS5zdmcnO1xcblxcbmltcG9ydCBMYW5kaW5nSW1hZ2UxIGZyb20gJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nLWltYWdlLTEucG5nJztcXG5pbXBvcnQgTGFuZGluZ0ltYWdlMiBmcm9tICcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZyc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgY29tcG9uZW50czoge1xcbiAgICBDYXJkU2VjdGlvbkZpcnN0LFxcbiAgICBDYXJkU2VjdGlvblNlY29uZFxcbiAgfSxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGNhcmRTZWN0aW9uRmlyc3RMaXN0OiBbXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAxLFxcbiAgICAgICAgICB0aXRsZTogJ0J1eSBvciBzZWxsIGdsb2JhbGx5LCBtYW5hZ2UgaXQgbG9jYWxseScsXFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGlwZXNhbGVzIGVuYWJsZXMgc2VsbGVycyB0byBwcm9tb3RlIHN1cnBsdXMgaW52ZW50b3J5IGdsb2JhbGx5LCBvcGVuaW5nIGJ1eWVycyBzZWFyY2ggaG9yaXpvbnMuIFdlIHByb3ZpZGUgYSBzZWN1cmUgYW5kIHVuY29tcGxpY2F0ZWQgcHJvY2Vzcywgd2l0aCBib3RoIGJ1eWVycyBhbmQgc2VsbGVycyBlbmpveWluZyB0aGUgY29uZmlkZW5jZSBvZiB0cmFuc2FjdGlvbiBtYW5hZ2VtZW50IGJ5IHRoZWlyIGxvY2FsIE1hcnViZW5pLUl0b2NodSBTdGVlbCAoTUlTSSkgbmV0d29yay4nLFxcbiAgICAgICAgICBpY29uOiBHbG9iZVN2Z1xcbiAgICAgICAgfSxcXG4gICAgICAgIHtcXG4gICAgICAgICAgaWQ6IDEsXFxuICAgICAgICAgIHRpdGxlOiAnU3VwcG9ydGluZyBjb3N0LWVmZmVjdGl2ZSBpbnZlbnRvcnkgbWFuYWdlbWVudCcsXFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGlwZXNhbGVzIG1hcmtldHBsYWNlIGFsbG93cyBvcmdhbmlzYXRpb25zIG9mIGFsbCBzaXplcyB0byBxdWlja2x5IHRyYWRlIHR1YnVsYXIgcHJvZHVjdHMgYW5kIGFjY2Vzc29yaWVzIGF0IGEgZmFpciBwcmljZS4gWW91IGNhbiBub3cga2VlcCBjb3N0cyBpbiBsaW5lIHdpdGggZXhwZWN0YXRpb25zIGFuZCBlYXNpbHkgYWNjZXNzIG9yIG9mZmxvYWQgZXhjZXNzIGludmVudG9yeS4nLFxcbiAgICAgICAgICBpY29uOiBEb2xsYXJTdmdcXG4gICAgICAgIH0sXFxuICAgICAgICB7XFxuICAgICAgICAgIGlkOiAxLFxcbiAgICAgICAgICB0aXRsZTogJ0xhcmdlIHJhbmdlIG9mIHJlYWR5LW1hZGUgcGlwZXMgZml0IGZvciBwdXJwb3NlJyxcXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdQaXBlc2FsZXMgbWFya2V0cGxhY2UgaXMgaG9tZSB0byBhIGxhcmdlIHJhbmdlIG9mIHF1YWxpdHkgT2lsIENvdW50cnkgVHVidWxhciBHb29kcyAoT0NURykuIEJyb3dzZSBieSBwcm9kdWN0IHR5cGUsIGdyYWRlLCBzaXplLCBjb25uZWN0aW9uIGFuZCBsb2NhdGlvbi4gQmUgYXNzdXJlZCBvZiBzdWl0YWJsZSBiYWNrdXAgc3VwcGxpZXMgdG8gbWVldCB1cmdlbnQgZGVtYW5kLicsXFxuICAgICAgICAgIGljb246IFBpcGFTdmdcXG4gICAgICAgIH1cXG4gICAgICBdLFxcbiAgICAgIGxhbmRpbmdJbWFnZTE6IExhbmRpbmdJbWFnZTEsXFxuICAgICAgbGFuZGluZ0ltYWdlMjogTGFuZGluZ0ltYWdlMlxcbiAgICB9O1xcbiAgfSxcXG4gIGNvbXB1dGVkOiB7XFxuICAgIC4uLm1hcFN0YXRlKCdhcHAnLCB7XFxuICAgICAgZmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlOiAoc3RhdGUpID0+IHN0YXRlLmZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSxcXG4gICAgICBzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlOiAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUsXFxuICAgICAgZmlsdGVyT3B0aW9uc1NpemU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc1NpemUsXFxuICAgICAgc2VsZWN0ZWRGaWx0ZXJTaXplOiAoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkRmlsdGVyU2l6ZSxcXG4gICAgICBmaWx0ZXJPcHRpb25zR3JhZGU6IChzdGF0ZSkgPT4gc3RhdGUuZmlsdGVyT3B0aW9uc0dyYWRlLFxcbiAgICAgIHNlbGVjdGVkRmlsdGVyR3JhZGU6IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJHcmFkZSxcXG4gICAgICBmaWx0ZXJPcHRpb25zQ29ubmVjdGlvbjogKHN0YXRlKSA9PiBzdGF0ZS5maWx0ZXJPcHRpb25zQ29ubmVjdGlvbixcXG4gICAgICBzZWxlY3RlZEZpbHRlckNvbm5lY3Rpb246IChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXFxuICAgIH0pXFxuICB9LFxcbiAgbW91bnRlZCAoKSB7XFxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgYXN5bmMgZ2V0QWxsUHJvZHVjdCAoKSB7XFxuICAgICAgdHJ5IHtcXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFByb2R1Y3RTZXJ2aWNlcy5nZXRQcm9kdWN0cygpO1xcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xcbiAgICAgIH1cXG4gICAgICBjYXRjaCAoZXJyb3IpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIGZpbHRlckRhdGEgKGRhdGEsIHBhcmFtRmlsdGVyKSB7XFxuICAgICAgbGV0IGZpbHRlckNyaXRlcmlhID0gcGFyYW1GaWx0ZXI7XFxuXFxuICAgICAgY29uc3QgYXBwbHlGaWx0ZXIgPSAoZGF0YSwgY3JpdGVyaWEpID0+IHtcXG4gICAgICAgIGlmICghY3JpdGVyaWEpIHtcXG4gICAgICAgICAgcmV0dXJuIGRhdGE7IFxcbiAgICAgICAgfVxcbiAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChpdGVtKSA9PiB7XFxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNyaXRlcmlhKSB7XFxuICAgICAgICAgICAgaWYgKGl0ZW1ba2V5XSAhPT0gY3JpdGVyaWFba2V5XSkge1xcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gYXBwbHlGaWx0ZXIoZGF0YSwgZmlsdGVyQ3JpdGVyaWEpO1xcbiAgICAgIGNvbnN0IG5vdEZpbHRlcmVkRGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiAhYXBwbHlGaWx0ZXIoW2l0ZW1dLCBmaWx0ZXJDcml0ZXJpYSkubGVuZ3RoKTtcXG4gICAgICBjb25zdCBtb2RpZmllZE5vdEZpbHRlcmVkRGF0YSA9IG5vdEZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0pID0+IHtcXG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHF0eTogMCB9O1xcbiAgICAgIH0pO1xcblxcbiAgICAgIGNvbnN0IGNvbWJpbmVkRGF0YSA9IFsuLi5maWx0ZXJlZERhdGEsIC4uLm1vZGlmaWVkTm90RmlsdGVyZWREYXRhXTtcXG5cXG4gICAgICByZXR1cm4gY29tYmluZWREYXRhO1xcbiAgICB9LFxcbiAgICBnZXREYXRhUHJvZHVjdFR5cGUgKGRhdGEpIHtcXG4gICAgICBjb25zdCBwcm9kdWN0VHlwZVF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgIGlmIChhY2NbY3Vyci5wcm9kdWN0X3R5cGVdKSB7XFxuICAgICAgICAgIGFjY1tjdXJyLnByb2R1Y3RfdHlwZV0gKz0gcGFyc2VJbnQoY3Vyci5xdHkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZSB7XFxuICAgICAgICAgIGFjY1tjdXJyLnByb2R1Y3RfdHlwZV0gPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gYWNjO1xcbiAgICAgIH0sIHt9KTtcXG5cXG4gICAgICBjb25zdCBwcm9kdWN0VHlwZVF0eUFycmF5ID0gT2JqZWN0LmtleXMocHJvZHVjdFR5cGVRdHlTdW0pLm1hcCgocHJvZHVjdFR5cGUpID0+ICh7XFxuICAgICAgICBwcm9kdWN0X3R5cGU6IHByb2R1Y3RUeXBlLFxcbiAgICAgICAgdG90YWxfcXR5OiBwcm9kdWN0VHlwZVF0eVN1bVtwcm9kdWN0VHlwZV1cXG4gICAgICB9KSk7XFxuXFxuICAgICAgcmV0dXJuIHByb2R1Y3RUeXBlUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGdldERhdGFTaXplIChkYXRhKSB7XFxuICAgICAgY29uc3Qgc2l6ZVF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgIGlmIChhY2NbY3Vyci5zaXplXSkge1xcbiAgICAgICAgICBhY2NbY3Vyci5zaXplXSArPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgYWNjW2N1cnIuc2l6ZV0gPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gYWNjO1xcbiAgICAgIH0sIHt9KTtcXG5cXG4gICAgICBjb25zdCBzaXplUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhzaXplUXR5U3VtKS5tYXAoKHNpemUpID0+ICh7XFxuICAgICAgICBzaXplLFxcbiAgICAgICAgdG90YWxfcXR5OiBzaXplUXR5U3VtW3NpemVdXFxuICAgICAgfSkpO1xcblxcbiAgICAgIHJldHVybiBzaXplUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGdldERhdGFHcmFkZSAoZGF0YSkge1xcbiAgICAgIGNvbnN0IGdyYWRlUXR5U3VtID0gZGF0YS5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xcbiAgICAgICAgaWYgKGFjY1tjdXJyLmdyYWRlXSkge1xcbiAgICAgICAgICBhY2NbY3Vyci5ncmFkZV0gKz0gcGFyc2VJbnQoY3Vyci5xdHkpO1xcbiAgICAgICAgfVxcbiAgICAgICAgZWxzZSB7XFxuICAgICAgICAgIGFjY1tjdXJyLmdyYWRlXSA9IHBhcnNlSW50KGN1cnIucXR5KTtcXG4gICAgICAgIH1cXG4gICAgICAgIHJldHVybiBhY2M7XFxuICAgICAgfSwge30pO1xcblxcbiAgICAgIGNvbnN0IGdyYWRlUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhncmFkZVF0eVN1bSkubWFwKChncmFkZSkgPT4gKHtcXG4gICAgICAgIGdyYWRlLFxcbiAgICAgICAgdG90YWxfcXR5OiBncmFkZVF0eVN1bVtncmFkZV1cXG4gICAgICB9KSk7XFxuXFxuICAgICAgcmV0dXJuIGdyYWRlUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGdldERhdGFDb25uZWN0aW9uIChkYXRhKSB7XFxuICAgICAgY29uc3QgY29ubmVjdGlvblF0eVN1bSA9IGRhdGEucmVkdWNlKChhY2MsIGN1cnIpID0+IHtcXG4gICAgICAgIGlmIChhY2NbY3Vyci5jb25uZWN0aW9uXSkge1xcbiAgICAgICAgICBhY2NbY3Vyci5jb25uZWN0aW9uXSArPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICBlbHNlIHtcXG4gICAgICAgICAgYWNjW2N1cnIuY29ubmVjdGlvbl0gPSBwYXJzZUludChjdXJyLnF0eSk7XFxuICAgICAgICB9XFxuICAgICAgICByZXR1cm4gYWNjO1xcbiAgICAgIH0sIHt9KTtcXG5cXG4gICAgICBjb25zdCBjb25uZWN0aW9uUXR5QXJyYXkgPSBPYmplY3Qua2V5cyhjb25uZWN0aW9uUXR5U3VtKS5tYXAoKGNvbm5lY3Rpb24pID0+ICh7XFxuICAgICAgICBjb25uZWN0aW9uLFxcbiAgICAgICAgdG90YWxfcXR5OiBjb25uZWN0aW9uUXR5U3VtW2Nvbm5lY3Rpb25dXFxuICAgICAgfSkpO1xcblxcbiAgICAgIHJldHVybiBjb25uZWN0aW9uUXR5QXJyYXk7XFxuICAgIH0sXFxuICAgIGFzeW5jIGluaXRpYWxpemUgKCkge1xcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZ2V0QWxsUHJvZHVjdCgpO1xcbiAgICAgIGNvbnN0IGJvZHkgPSB7fTtcXG5cXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlICE9PSAnJykge1xcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XFxuICAgICAgICAgIHByb2R1Y3RfdHlwZTogdGhpcy5zZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJTaXplICE9PSAnJykge1xcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XFxuICAgICAgICAgIHNpemU6IHRoaXMuc2VsZWN0ZWRGaWx0ZXJTaXplXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJHcmFkZSAhPT0gJycpIHtcXG4gICAgICAgIE9iamVjdC5hc3NpZ24oYm9keSwge1xcbiAgICAgICAgICBncmFkZTogdGhpcy5zZWxlY3RlZEZpbHRlckdyYWRlXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uICE9PSAnJykge1xcbiAgICAgICAgT2JqZWN0LmFzc2lnbihib2R5LCB7XFxuICAgICAgICAgIGNvbm5lY3Rpb246IHRoaXMuc2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uXFxuICAgICAgICB9KTtcXG4gICAgICB9XFxuXFxuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXFxuXFxuICAgICAgY29uc3QgcmVzRmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YShyZXMsIGJvZHkpO1xcblxcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xcbiAgICAgIFxcbiAgICAgIGNvbnN0IHJlc0RhdGFQcm9kdWN0VHlwZSA9IHRoaXMuZ2V0RGF0YVByb2R1Y3RUeXBlKHJlc0ZpbHRlckRhdGEpO1xcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlJywgcmVzRGF0YVByb2R1Y3RUeXBlKTtcXG5cXG4gICAgICBjb25zdCByZXNEYXRhc1NpemUgPSB0aGlzLmdldERhdGFTaXplKHJlc0ZpbHRlckRhdGEpO1xcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc1NpemUnLCByZXNEYXRhc1NpemUpO1xcbiAgICAgIFxcbiAgICAgIGNvbnN0IHJlc0RhdGFHcmFkZSA9IHRoaXMuZ2V0RGF0YUdyYWRlKHJlc0ZpbHRlckRhdGEpO1xcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0RmlsdGVyT3B0aW9uc0dyYWRlJywgcmVzRGF0YUdyYWRlKTtcXG4gICAgICBcXG4gICAgICBjb25zdCByZXNEYXRhQ29ubmVjdGlvbiA9IHRoaXMuZ2V0RGF0YUNvbm5lY3Rpb24ocmVzRmlsdGVyRGF0YSk7XFxuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2FwcC9zZXRGaWx0ZXJPcHRpb25zQ29ubmVjdGlvbicsIHJlc0RhdGFDb25uZWN0aW9uKTtcXG4gICAgfSxcXG4gICAgb25IYW5kbGVTZWxlY3RkYXRhIChldmVudCkge1xcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUnLCBldmVudC5kYXRhLnByb2R1Y3RfdHlwZSk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzInKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyU2l6ZScsIGV2ZW50LmRhdGEuc2l6ZSk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzMnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyR3JhZGUnLCBldmVudC5kYXRhLmdyYWRlKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uJywgZXZlbnQuZGF0YS5jb25uZWN0aW9uKTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XFxuICAgIH0sXFxuICAgIG9uSGFuZGxlUmVzZXRkYXRhIChldmVudCkge1xcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzEnKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUnLCAnJyk7XFxuICAgICAgfVxcbiAgICAgIGlmIChldmVudC5jYXRlZ29yeSA9PT0gJzInKSB7XFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXBwL3NldFNlbGVjdGVkRmlsdGVyU2l6ZScsICcnKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnMycpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJHcmFkZScsICcnKTtcXG4gICAgICB9XFxuICAgICAgaWYgKGV2ZW50LmNhdGVnb3J5ID09PSAnNCcpIHtcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhcHAvc2V0U2VsZWN0ZWRGaWx0ZXJDb25uZWN0aW9uJywgJycpO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcXG4gICAgfVxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uZ2xvYmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcGlwZXNhbGVzLmNvbS92aWV3Mi9pbWFnZS9oZWFkZXItYmFja2dyb3VuZC0yLnBuZyk7IFxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDI0cHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbi53cmFwcGVyLWJhbm5lciB7XFxuICBoZWlnaHQ6IDQ1MHB4O1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9sYW5kaW5nLWltYWdlLTEucG5nPzI0OWQwMmYxNDlhYmNlOTE2NzcwZTc5YjA1ZmUzOGRlXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvbGFuZGluZy1pbWFnZS0yLnBuZz85ZGM1NDk2Y2VjMDJkMzdiM2JhOWMxYTg2N2YzZTgwOVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvaW1hZ2VzL3BpcGVzYWxlcy5zdmc/NjMzNTQ4NmVkODkwNWRhZDA2YzgwZThjNjAyYmMzNjBcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2ltYWdlcy9kb2xsYXIuc3ZnPzljMjI2ZTk3NDRlYjA2MjU3ZmMxZDI3MzhmZjkzOGIxXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvZ2xvYmUuc3ZnPzc5ODRjYWYzYzcwYmQzOTM0NTY3NTBlNzAzYmY2NTExXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9pbWFnZXMvcGlwYS5zdmc/MGRjNmUyYTkwMDA5MTZlMTY4YmRjODIyMjhkMWMyNzdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk3ZmExNzYmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjM0ODI3MWFcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMzQ4MjcxYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMzQ4MjcxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMzQ4MjcxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMzQ4MjcxYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YzNDgyNzFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0RmlsdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGY3NzFmNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlbGVjdEZpbHRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VsZWN0RmlsdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OGY3NzFmNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OGY3NzFmNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OGY3NzFmNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VsZWN0RmlsdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGY3NzFmNlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4Zjc3MWY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Db21tb24vU2VsZWN0RmlsdGVyL1NlbGVjdEZpbHRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQzZjM2YTU0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDNmMzZhNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDNmMzZhNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDNmMzZhNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQzZjM2YTU0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDNmMzZhNTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZyYWdtZW50cy9Ib21lL0NhcmRTZWN0aW9uRmlyc3QvQ2FyZFNlY3Rpb25GaXJzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzRkMDQ2Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmM0ZDA0NmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmM0ZDA0NmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmM0ZDA0NmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcmRTZWN0aW9uU2Vjb25kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iYzRkMDQ2Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JjNGQwNDZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GcmFnbWVudHMvSG9tZS9DYXJkU2VjdGlvblNlY29uZC9DYXJkU2VjdGlvblNlY29uZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VOb3RGb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjFjMzNkZTRcIlxudmFyIHNjcmlwdCA9IHt9XG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZmF0aGFuL0RvY3VtZW50cy9wcm9qZWN0cy90ZXN0LWtlcmphL2Zyb250ZW5kLXRlc3QtaW5vc29mdC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiMWMzM2RlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiMWMzM2RlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiMWMzM2RlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnZU5vdEZvdW5kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMWMzM2RlNFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2IxYzMzZGU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9MYXlvdXRzL1BhZ2VOb3RGb3VuZC9QYWdlTm90Rm91bmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZDUzNzI4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGhlRm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc4ZDUzNzI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4ZDUzNzI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4ZDUzNzI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZDUzNzI4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzhkNTM3MjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlRm9vdGVyL1RoZUZvb3Rlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ZGFkMGRhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTRkYWQwZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTRkYWQwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTRkYWQwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0ZGFkMGRhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTRkYWQwZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0xheW91dHMvVGhlTmF2aWdhdGlvbi9UaGVOYXZpZ2F0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWJvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmMzg0YzFjXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2ZhdGhhbi9Eb2N1bWVudHMvcHJvamVjdHMvdGVzdC1rZXJqYS9mcm9udGVuZC10ZXN0LWlub3NvZnQvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmYzODRjMWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmYzODRjMWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmYzODRjMWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Fib3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjM4NGMxY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZmMzg0YzFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvQWJvdXQvQWJvdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOTdmYTE3NiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOTdmYTE3NiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwOTdmYTE3NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9mYXRoYW4vRG9jdW1lbnRzL3Byb2plY3RzL3Rlc3Qta2VyamEvZnJvbnRlbmQtdGVzdC1pbm9zb2Z0L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA5N2ZhMTc2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA5N2ZhMTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA5N2ZhMTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOTdmYTE3NiZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA5N2ZhMTc2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvcGFnZXMvSG9tZS9Ib21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3RGaWx0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25GaXJzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRTZWN0aW9uRmlyc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZFNlY3Rpb25TZWNvbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkU2VjdGlvblNlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaGVGb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGhlTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RoZU5hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlZ1ZSIsInJvdXRlciIsInN0b3JlIiwiZWwiLCJ3aW5kb3ciLCJfIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTUlYX0FQUF9VUkwiLCJoZWFkZXJzIiwiY29tbW9uIiwiQXBwIiwiVGhlTmF2aWdhdGlvbiIsIlRoZUZvb3RlciIsIlNlbGVjdEZpbHRlciIsImNvbXBvbmVudCIsIkV2ZW50QnVzIiwibGlicmFyeSIsImZhcyIsImZhYiIsImZhciIsIkZvbnRBd2Vzb21lSWNvbiIsImFkZCIsImkiLCJwcm90b3R5cGUiLCIkYXBpIiwiJGV2ZW50QnVzIiwiVnVlUm91dGVyIiwiUGFnZU5vdEZvdW5kIiwiSG9tZSIsIkFib3V0Iiwicm91dGVzIiwicGF0aCIsIm5hbWUiLCJ1c2UiLCJtb2RlIiwibW9ja1Byb2R1Y3QiLCJnZXRQcm9kdWN0cyIsIlZ1ZXgiLCJhcHAiLCJTdG9yZSIsIm1vZHVsZXMiLCJhY3Rpb25zIiwic2V0RmlsdGVyT3B0aW9uc1Byb2R1Y3RUeXBlIiwiX3JlZiIsImRhdGEiLCJjb21taXQiLCJzZXRTZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlIiwiX3JlZjIiLCJzZXRGaWx0ZXJPcHRpb25zU2l6ZSIsIl9yZWYzIiwic2V0U2VsZWN0ZWRGaWx0ZXJTaXplIiwiX3JlZjQiLCJzZXRGaWx0ZXJPcHRpb25zR3JhZGUiLCJfcmVmNSIsInNldFNlbGVjdGVkRmlsdGVyR3JhZGUiLCJfcmVmNiIsInNldEZpbHRlck9wdGlvbnNDb25uZWN0aW9uIiwiX3JlZjciLCJzZXRTZWxlY3RlZEZpbHRlckNvbm5lY3Rpb24iLCJfcmVmOCIsImdldHRlcnMiLCJnZXRGaWx0ZXJPcHRpb25zUHJvZHVjdFR5cGUiLCJzdGF0ZSIsImZpbHRlck9wdGlvbnNQcm9kdWN0VHlwZSIsImdldFNlbGVjdGVkRmlsdGVyUHJvZHVjdFR5cGUiLCJzZWxlY3RlZEZpbHRlclByb2R1Y3RUeXBlIiwiZ2V0RmlsdGVyT3B0aW9uc1NpemUiLCJmaWx0ZXJPcHRpb25zU2l6ZSIsImdldFNlbGVjdGVkRmlsdGVyU2l6ZSIsInNlbGVjdGVkRmlsdGVyU2l6ZSIsImdldEZpbHRlck9wdGlvbnNHcmFkZSIsImZpbHRlck9wdGlvbnNHcmFkZSIsImdldFNlbGVjdGVkRmlsdGVyR3JhZGUiLCJzZWxlY3RlZEZpbHRlckdyYWRlIiwiZ2V0RmlsdGVyT3B0aW9uc0Nvbm5lY3Rpb24iLCJmaWx0ZXJPcHRpb25zQ29ubmVjdGlvbiIsImdldFNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiIsInNlbGVjdGVkRmlsdGVyQ29ubmVjdGlvbiIsIm11dGF0aW9ucyIsIm5hbWVzcGFjZWQiLCJTRVRfRklMVEVSX09QVElPTlNfUFJPRFVDVF9UWVBFIiwicGF5bG9hZCIsIlNFVF9TRUxFQ1RFRF9GSUxURVJfUFJPRFVDVF9UWVBFIiwiU0VUX0ZJTFRFUl9PUFRJT05TX1NJWkUiLCJTRVRfU0VMRUNURURfRklMVEVSX1NJWkUiLCJTRVRfRklMVEVSX09QVElPTlNfR1JBREUiLCJTRVRfU0VMRUNURURfRklMVEVSX0dSQURFIiwiU0VUX0ZJTFRFUl9PUFRJT05TX0NPTk5FQ1RJT04iLCJTRVRfU0VMRUNURURfRklMVEVSX0NPTk5FQ1RJT04iLCJvdmVybGF5TG9hZGluZyIsImZvcm1hdGVkTnVtYmVyIiwibnVtYmVyIiwiZm9ybWF0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZm9ybWF0dGVkTnVtYmVyIiwidG9TdHJpbmciLCJyZXBsYWNlIiwicHJvcHMiLCJjYXRlZ29yeSIsInR5cGUiLCJTdHJpbmciLCJ0aXRsZSIsInNlbGVjdGVkVmFsdWUiLCJvcHRpb25zIiwiQXJyYXkiLCJfZGVmYXVsdCIsInZpc2libGVEcm9wZG93biIsIm1ldGhvZHMiLCJvbkhhbmRsZVZpc2libGVEcm9wZG93biIsIm9uQ2xpY2tSZXNldEZpbHRlciIsIiRlbWl0IiwiY29tcHV0ZVRpdGxlTGlzdCIsInJlc3VsdCIsImNvbXB1dGVGb3JtYXRRdHkiLCJwYXJhbSIsIm9uSGFuZGxlU2VsZWN0SXRlbSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImxhYmVsQWN0aW9uMSIsImxpbmtBY3Rpb24xIiwibGFiZWxBY3Rpb24yIiwibGlua0FjdGlvbjIiLCJsb2dvUGlwZXMiLCJsb2dvIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFwcGx5IiwiZXJyIiwib3duS2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIm9iaiIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJOdW1iZXIiLCJtYXBTdGF0ZSIsIkNhcmRTZWN0aW9uRmlyc3QiLCJDYXJkU2VjdGlvblNlY29uZCIsIlByb2R1Y3RTZXJ2aWNlcyIsIkdsb2JlU3ZnIiwiRG9sbGFyU3ZnIiwiUGlwYVN2ZyIsIkxhbmRpbmdJbWFnZTEiLCJMYW5kaW5nSW1hZ2UyIiwiY29tcG9uZW50cyIsImNhcmRTZWN0aW9uRmlyc3RMaXN0IiwiaWQiLCJsYW5kaW5nSW1hZ2UxIiwibGFuZGluZ0ltYWdlMiIsImNvbXB1dGVkIiwibW91bnRlZCIsImluaXRpYWxpemUiLCJnZXRBbGxQcm9kdWN0IiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwiY29uc29sZSIsImxvZyIsImZpbHRlckRhdGEiLCJwYXJhbUZpbHRlciIsImZpbHRlckNyaXRlcmlhIiwiYXBwbHlGaWx0ZXIiLCJjcml0ZXJpYSIsIml0ZW0iLCJmaWx0ZXJlZERhdGEiLCJub3RGaWx0ZXJlZERhdGEiLCJtb2RpZmllZE5vdEZpbHRlcmVkRGF0YSIsIm1hcCIsInF0eSIsImNvbWJpbmVkRGF0YSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldERhdGFQcm9kdWN0VHlwZSIsInByb2R1Y3RUeXBlUXR5U3VtIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInByb2R1Y3RfdHlwZSIsInBhcnNlSW50IiwicHJvZHVjdFR5cGVRdHlBcnJheSIsInByb2R1Y3RUeXBlIiwidG90YWxfcXR5IiwiZ2V0RGF0YVNpemUiLCJzaXplUXR5U3VtIiwic2l6ZSIsInNpemVRdHlBcnJheSIsImdldERhdGFHcmFkZSIsImdyYWRlUXR5U3VtIiwiZ3JhZGUiLCJncmFkZVF0eUFycmF5IiwiZ2V0RGF0YUNvbm5lY3Rpb24iLCJjb25uZWN0aW9uUXR5U3VtIiwiY29ubmVjdGlvbiIsImNvbm5lY3Rpb25RdHlBcnJheSIsIl90aGlzIiwiX2NhbGxlZTIiLCJyZXMiLCJib2R5IiwicmVzRmlsdGVyRGF0YSIsInJlc0RhdGFQcm9kdWN0VHlwZSIsInJlc0RhdGFzU2l6ZSIsInJlc0RhdGFHcmFkZSIsInJlc0RhdGFDb25uZWN0aW9uIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYXNzaWduIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJvbkhhbmRsZVNlbGVjdGRhdGEiLCJldmVudCIsIm9uSGFuZGxlUmVzZXRkYXRhIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwib24iLCJjbGljayIsIl92IiwiX3MiLCIkZXZlbnQiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJkb21Qcm9wcyIsImlubmVySFRNTCIsInBsYWNlaG9sZGVyIiwiX2wiLCJfZSIsInNyYyIsImFsdCIsInRvIiwiX20iLCJvblNlbGVjdERhdGEiLCJvblJlc2V0RGF0YSIsImlkeCIsInNlbGVjdGVkIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=