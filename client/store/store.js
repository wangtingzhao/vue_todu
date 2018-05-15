import Vuex from 'vuex'

import defaultstate from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/action'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  return new Vuex.Store({
    strict: isDev,
    state: defaultstate,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updataText (state, text) {
            state.text = text
          }
        },
        getters: {
          textPuls (state, commit, rootState) {
            console.log(state.text)
            return state.text + rootState.count
          }
        },
        actions: {
          add ({state, commit, rootState}) {
            commit('updataText', rootState.count)
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}
