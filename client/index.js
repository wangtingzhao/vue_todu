import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'

import './assets/styles/global.styl'

Vue.use(VueRouter)
const router = createRouter()

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
  render: h => h(App)
}).$mount('#root')
