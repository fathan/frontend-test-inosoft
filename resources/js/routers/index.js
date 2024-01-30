import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '@components/Layouts/PageNotFound';
import Home from '@pages/Home';
import About from '@pages/About';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Page Not Found',
    component: PageNotFound
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
