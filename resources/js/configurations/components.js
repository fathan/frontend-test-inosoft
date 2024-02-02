import Vue from 'vue';

import App from '@root/App.vue';

import TheNavigation from '@components/Layouts/TheNavigation';
import TheFooter from '@components/Layouts/TheFooter';

import SelectFilter from '@components/Common/SelectFilter';

Vue.component('App', App);
Vue.component('TheNavigation', TheNavigation);
Vue.component('TheFooter', TheFooter);
Vue.component('SelectFilter', SelectFilter);