import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import EnMedios from '@/views/EnMedios.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/index.html', name: 'Home', component: Home },
    { path: '/en-medios', name: 'EnMedios', component: EnMedios },
    {path: '*',redirect: '/',},
  ]
});