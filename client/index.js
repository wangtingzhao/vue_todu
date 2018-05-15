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
