import axiosProduct from '../api/productApi'

const state = {
  listProducts: []
}

const getters = {

}

const actions = {
  async fetchProducts({ commit }) {
    const response = await axiosProduct.getAll()
    commit('SET_PRODUCT', response)
  }
}

const mutations = {
  SET_PRODUCT(state, payload) {
    state.listProducts = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
