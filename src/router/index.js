import Vue from 'vue';
import VueRouter from 'vue-router';
import MyBeerList from '@/components/pages/beers/MyBeerList.vue';
import AllBeers from '@/components/pages/beers/AllBeerList.vue';
import RouteNotFound from '@/components/pages/RouteNotFound.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/all' },
  {
    name: 'AllBeers',
    path: '/all',
    component: AllBeers,
  },
  {
    name: 'MyBeers',
    path: '/my-beers',
    component: MyBeerList,
  },
  {
    name: 'RouteNotFound',
    path: '*',
    component: RouteNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
