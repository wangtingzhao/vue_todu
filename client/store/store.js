import Vuex from 'vuex'

import defaultstate from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/action'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultstate,
    mutations,
    getters,
    actions
    // modules: {
    //   a: {
    //     namespaced: true,
    //     state: {
    //       text: 1
    //     },
    //     mutations: {
    //       updataText (state, text) {
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPuls (state, commit, rootState) {
    //         console.log(state.text)
    //         // rootState 全局 state
    //         return state.text + rootState.count
    //       }
    //     },
    //     actions: {
    //       add ({state, commit, rootState}) {
    //         // 正常调用模块 mutations  设置{root: true} 调用全局
    //         // commit('updataText', rootState.count)
    //         commit('updataCount', {num: 5678}, {root: true})
    //       }
    //     }
    //   },
    //   b: {
    //     namespaced: true,
    //     state: {
    //       text: 2
    //     },
    //     actions: {
    //       testActions ({ commit }) {
    //         commit('a/updataText', 'test test', {root: true})
    //       }
    //     }
    //   }
    // }
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/action'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/action').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
