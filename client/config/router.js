import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/'
    // linkActiveClass: 'active-link',
    // linkExactActiveClass: 'exact-active-link'
    scrollBehavior (to, from, savePosition) {
      // to 去到那里 from 从哪里来 savePosition 记录滚动距离
      if (savePosition) {
        return savePosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // fallback: true
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
  })
}
