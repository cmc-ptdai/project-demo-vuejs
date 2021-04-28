import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuex from 'vuex';
import store from './store/store'

import VueRouter from 'vue-router';
import { routes } from './routers'

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.scss'

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(Vuex);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
