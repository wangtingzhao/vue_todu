# Vue-router之导航守卫
```
  1,全局钩子 写在index.js
  (1)router.beforeEach (to, from, next) {
      if(to.fullPath === '/app') {
        next('/login')
      } else {
        next()
      }
      next()
    }
  (2)router.beforeResolve (to, from, next) {
      next()
    }
  (3)router.afterEach (to, from) {
      console.log('after each invoked')
    }
    2, router配置钩子 写在router配置页
  (4)beforeEneter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    3, 模板router钩子
  (5)beforeRouteEnter (to, from, next) => { // 进入模板
      //next(vm => {
      //  console.log('This is vm id', vm.id)
      //})
      next()
    }
  (6)beforeRouteUpdata (to, from, next) => { // 模板更新
      console.log('beforeRouter Updata')
      next()
    }
  (7)beforeRouteLeave (to, from, next) { // 离开模板
      console.log('beforeRouter Leave')
      //if (global.confrim('are you sure?')) {
      //    next()
      //}
      next()
    }
```
# Vuex 集成
```
// 简单版 Vuex
import Vuex from 'vuex'

export default () => {
  return new Vuex.store({
    const state = {
      count: 0
    },
    mutations: {
      updataCount (state, num) {
        state.count = num
      }
    }
  })
}
//state getters action mutation
import mutations from './mutations/mutations'
export default {
  updateCount (state, {num,num2}) {
    state.count = num
  }
}
import getters from './getters/getters'
export default {
  fullName (state) {
    return `${state.fristName} ${state.lastName}`
  }
}
import actions from './actions/action'
export default {
  updataCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updataCount',{
        num: data.num
      })
    },data.time)
  }
}

export default () => {
  return new Vuex.store({
    const state = {
      count: 0
    },
    mutations,
    gettre,
    actions
  })
}


```
