import axios from 'axios'


const state = {
  listUser : []
}



const getter = {

}

const actions = {
  fetchUser ({ commit }) {
    axios.get('http://localhost:3004/users')
    .then(response => {
      commit('SET_USERS', response.data);
    })
  }
}

const mutation = {
  SET_USERS(payload) {
    this.state = payload
  }
}

console.log(state);
export default {
  state,
  getter,
  actions,
  mutation
}
