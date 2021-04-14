import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Allusers from '../components/Allusers.vue';
import Mydetails from '../components/Mydetails.vue';
import assignment4 from '../components/assignment4.vue';
import axiosexp from '../components/axiosexp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/Allusers',
    name: 'Allusers',
    component: Allusers,
  },
  {
    path: '/Mydetails',
    name: 'Mydetails',
    component: Mydetails,
  },
  {
    path: '/assignment4',
    name: 'assignment4',
    component: assignment4,
  },
  {
    path: '/axios',
    name: 'axios',
    component: axiosexp,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
