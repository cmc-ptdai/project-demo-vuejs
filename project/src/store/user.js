import userApi from '../api/userApi'

const state = {
  listUser: {
    cart: [],
    order: []
  },
  dataSearch: [],
}



const getters = {
  listDataSearch: state => {
    return state.dataSearch
  },
  getCart: state => {
    return state.listUser.cart
  }
}

const actions = {
  async fetchUser({commit}) {
    const response = await userApi.getUser()
    commit('SET_USERS', response);
  },

  addCart({commit, state}, product) {
    if(state.listUser.id) {
        const newCart = state.listUser.cart;
        if (newCart.length >= 1) {
          const index = newCart.findIndex(item => item.id === product.item.id)
          if (index !== -1) {
            const newProduct = {
              ...newCart[index],
              count: newCart[index].count + product.count
            }
            newCart.splice(index, 1, newProduct)
            const newUser = {
              ...state.listUser,
              cart: newCart
            }
            userApi.addCart(state.listUser.id, newUser)
          } else {
            const newproduct = {
              id: product.item.id,
              name: product.item.name,
              price: product.item.price,
              img: product.item.img,
              count: product.count,
            }
            newCart.push(newproduct)
            const newUser = {
              ...state.listUser,
              cart: newCart
            }
            userApi.addCart(state.listUser.id, newUser)
          }
        } else {
          const newProduct = {
            id: product.item.id,
            name: product.item.name,
            price: product.item.price,
            img: product.item.img,
            count: product.count,
          }
          newCart.push(newProduct)
          const newUser = {
              ...state.listUser,
              cart: newCart
            }
            console.log(newUser);
          userApi.addCart(state.listUser.id, newUser)
        }
      } else {
        commit('addCartByHome', product)
        console.log('aaaaaaa');
      }
  },

  deleteProductByCart({state}, id) {
    const newCart = state.listUser.cart.filter(item => item.id !== id)
    const newUser = {
      ...state.listUser,
      cart: newCart
    }
    userApi.addCart(state.listUser.id, newUser)
  }



}

const mutations = {
  SET_USERS(state, payload) {
    state.listUser = payload
  },

  SET_DATASEARCH (state, payload) {
    state.dataSearch = payload
  },


}
export default {
  state,
  getters,
  actions,
  mutations
}
