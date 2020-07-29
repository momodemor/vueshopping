import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'path'
import { rejects } from 'assert'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    getters: {
        cartList(state) {
            return state.cartList
        }
        // checked(state) {
        //     return state.cartList
        // }
    },
    mutations: {
        // addCart(state, payload) {
        // state.cartList.push(payload)
        // let oldProduct = state.cartList.find(item => item.iid === payload.iid)
        // if (oldProduct) {
        //     oldProduct.count += 1
        // } else {
        //     payload.count = 1
        //     payload.checked = true
        //     oldProduct = payload
        //     state.cartList.push(oldProduct)
        // }


        // // }
        countPlus(state, oldProduct) {
            oldProduct.count += 1
        },
        addCart(state, oldProduct) {
            // payload.count = 1
            // payload.checked = true
            // oldProduct = payload
            state.cartList.push(oldProduct)
        }
    },
    actions: {
        addCart({ commit, state }, payload) {
            return new Promise((resolve, reject) => {
                let oldProduct = state.cartList.find(item => item.iid === payload.iid)
                if (oldProduct) {
                    commit('countPlus', oldProduct)
                    resolve("数量加1")
                } else {
                    payload.count = 1
                    payload.checked = true
                    oldProduct = payload
                        //                     // state.cartList.push(oldProduct)
                    commit('addCart', oldProduct)
                    resolve('添加成功')
                }
            })
        }
    }
})