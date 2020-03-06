import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// An action is dispatched; a mutation is committed
export const store = new Vuex.Store({
  state: {
    items: [
      {'itemId': 1, 'itemName': 'Drink water', 'completed': true},
      {'itemId': 2, 'itemName': 'Log Weight', 'completed': false},
      {'itemId': 3, 'itemName': 'Get Cleaned Up', 'completed': false}
    ]
  },
  mutations: {
    ADD_ITEM (state, item) {
      state.items.push(item)
    },
    EDIT_ITEM (state, itemId) {
      // var items = state.items;
    },
    DELETE_ITEM (state, itemId) {

    }
  },
  actions: {
    addItem ({commit}) {
      commit('ADD_ITEM')
    },
    editItem ({commit}, item) {
      commit('EDIT_ITEM', item)
    },
    removeItem ({commit}, item) {
      commit('DELETE_ITEM', item)
    }
  },
  getters: {
    items: state => state.items
  }
})
