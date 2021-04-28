import Vue from 'vue';
import Vuex from 'vuex';
import Users from './user';
import Products from './product';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users: Users,
    products: Products
  }
})

export default store
