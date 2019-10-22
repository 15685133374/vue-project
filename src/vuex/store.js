import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={
  count :100
}

export default new Vuex.Store({
  state
})