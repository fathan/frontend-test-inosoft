require('./bootstrap');

import Vue from 'vue';
import router from './routers';
import store from './stores';
import './configurations';
import '@styles/app.scss';

new Vue({
  el: '#app',
  router: router,
  store
});