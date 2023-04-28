import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0
  },
  actions: {
    add (context, value) {
      context.commit('Add', value)
    }
  },
  mutations: {
    Add (state, value) {
      state.sum += value
    }
  },
  getters: {
    sumCount (state) {
      return state.sum * 10
    }
  }
})
