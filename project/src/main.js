import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.scss'

Vue.config.productionTip = false;

Vue.use(Antd);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
