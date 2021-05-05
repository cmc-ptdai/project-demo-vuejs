
const state = {
  listUser : {
    carts: [],
    orders: []
  },
  dataSearch: [],
}



const getters = {
  listDataSearch: state => {
    return state.dataSearch
  }

}

const actions = {

}

const mutations = {
  SET_USERS(state, payload) {
    state.listUser = payload
  },

  SET_DATASEARCH (state, payload) {
    state.dataSearch = payload
  },

  addCartByHome(state, payload) {
    console.log(payload);
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
