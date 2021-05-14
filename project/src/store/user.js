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
    console.log(product);
    if(state.listUser.id) {
        const newCart = state.listUser.cart;
        if (newCart.length >= 1) {
          const index = newCart.findIndex(item => item.id === product.item.id)
          if (index !== -1) {
            console.log(newCart[index].countPay);
            const newProduct = {
              ...newCart[index],
              count: newCart[index].count + product.count,
              countPay : newCart[index].countPay
            }
            newCart.splice(index, 1, newProduct)
            const newUser = {
              ...state.listUser,
              cart: newCart
            }
            userApi.addCart(state.listUser.id, newUser)
          } else {
            console.log(product.item.countPay);
            const newproduct = {
              id: product.item.id,
              name: product.item.name,
              price: product.item.price,
              img: product.item.img,
              count: product.count,
              countPay: product.item.countPay
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
            countPay: product.item.countPay
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
  },

  deleteListProduct({state}, payload) {
    let newCart = state.listUser.cart
    payload.forEach(id => {
      newCart = newCart.filter(item => item.id !== id)
    })
    const newUser = {
      ...state.listUser,
      cart: newCart
    }

    userApi.addCart(state.listUser.id, newUser)
  },

  incrementProjectByCart({state}, payload) {
    const [...newCart] = state.listUser.cart
    const newDataCart = newCart.map(item => {
      if (item.id === payload) {
        return {
          ...item,
          count: ++item.count
        }
      }
      return item
    })
    const newUser = {
      ...state.listUser,
      cart: newDataCart
    }
    userApi.addCart(state.listUser.id, newUser)
  },

  decrementProjectByCart({state}, payload) {
    const [...newCart] = state.listUser.cart
    const newDataCart = newCart.map(item => {
      if (item.id === payload) {
        return {
          ...item,
          count: --item.count
        }
      }
      return item
    })
    const newUser = {
      ...state.listUser,
      cart: newDataCart
    }
    userApi.addCart(state.listUser.id, newUser)
  },

  changeNumberProjectByCart({state}, payload) {
    console.log(payload);
    const [...newCart] = state.listUser.cart
    const newDataCart = newCart.map(item => {
      if (item.id === Number(payload.id)) {
        if (isNaN(payload.number)) {
          return item
        }
        if (payload.number === "") {
          return {
            ...item,
            count: 1
          }
        }
        if(payload.number > item.countPay) {
          return {
            ...item,
            count: item.countPay
          }
        } else {
          return {
            ...item,
            count: payload.number
          }
        }
      }
    })
    const newUser = {
      ...state.listUser,
      cart: newDataCart
    }
    userApi.addCart(state.listUser.id, newUser)
  },

  addOder({state}, payload) {
    console.log(state);
    console.log(payload);
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
