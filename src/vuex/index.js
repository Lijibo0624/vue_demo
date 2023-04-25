import Vue from 'vue'
import Vuex from 'vuex'
import count from './moudules/count'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    count
  }
})
