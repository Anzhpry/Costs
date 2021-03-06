import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentList: [],
    categoryList: []
  },
  getters: {
    getPaymentList: state => state.paymentList,
    getFullPaymentValue: state => {
      return state.paymentList.reduce((res, cur) => res + Number(cur.value), 0)
    },
    getCategoryList: state => state.categoryList
  },
  mutations: {
    setPaymentListData(state, payload) {
      state.paymentList = payload
    },
    addDataPaymentsList(state, payload) {
      state.paymentList.push(payload)
    },
    addCategoryList(state, payload) {
      state.categoryList = payload
    },
    paymentListDeleteItem(state, payload) {
      /*     state.paymentList.$remove(payload) */
      state.paymentList.splice(payload)
    },

  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i <= 50; i++) {
            items.push({
              date: "23.12.2020",
              category: "Sport",
              value: i,
              id: Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
            })
          }
          resolve(items)
        }, 2000)
      }).then(res => {
        commit('setPaymentListData', res)
      })
    },
    fetchCategoryList({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Entertainment', 'Sport'])
        }, 1000)
      }).then(res => {
        commit('addCategoryList', res)
      })
    },
    fetchDeleteItem({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      }).then(res => {
        commit('paymentListDeleteItem', res)
      })
    }
  },
})
