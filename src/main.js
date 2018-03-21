import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  {path: '/', redirect: 'goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}

];
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
