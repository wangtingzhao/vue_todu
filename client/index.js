import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createRouter from './config/router'
import createstore from './store/store'
import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createstore()

store.registerModule('c', {
  state: {
    text: 3
  }
})
// 解绑 c
// store.unregisterModule('c')
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new Count watched:', newCount)
// })
// 监听 mutation
// store.subscribe((mutations, state) => {
//   console.log(mutations)
//   console.log(mutations.type)
//   console.log(mutations.payload)
// })
//  监听 action
store.subscribeAction((action, state) => {
  console.log(action)
  console.log(action.type)
  console.log(action.payload)
})
// 全局钩子
router.beforeEach((to, from, next) => {
  console.log('before Each invoked')
  // if (to.fullPath === '/app') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
