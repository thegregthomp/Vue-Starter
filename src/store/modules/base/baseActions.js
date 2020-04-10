import axios from 'axios'

export default {
  getInit ({ commit }) {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        commit('SET_INIT', response.data.title)
      })
      .catch((error) => console.log(error));
    // return UsersService.getCurrent()
    //   .then(user => commit('SET_CURRENT_USER', user.data))
    //   .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  }
}
