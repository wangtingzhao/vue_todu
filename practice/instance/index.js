import Vue from 'vue'

// const log = console.log

const app = new Vue({
  // el: '#root',
  template: `<div ref="box">{{text}} {{obj.a}}</div>`,
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

// app.text = 'text1'
// let i = 0
// setInterval(() => {
//   // app.$data.text += 1
//   // app.text += 1
//   i++
//   // app.obj.a = i
//   // app.$forceUpdate()
//   // 上下的本质是一样的
//   // app.$set(app.obj, 'a', i)
//   // app.$delete
// }, 1000)
// setTimeout(() => {
//   // app.$data.text += 1
//   app.text += 1
// }, 5000)
// log(app.$data)
// log(app.$props) // 获取组件设置的定义值
// log(app.$el)
// log(app.$options)
// app.$options.render = (h) => {
//   log(1)
//   return h('div', {}, 'new render function')
// }
// log(app.$root === app)
// log(app.$children)
// log(app.$slots)
// log(app.$scopedSlots)
// log(app.$refs)
// log(app.$isServer)

// const unWatch = app.$watch('text', (newText, oldText) => {
//   log(`${newText} : ${oldText}`)
// })

// setTimeout(() => {
//   unWatch()
// }, 2000)
// app.$on('test', () => {
//   log('test emited')
// })

// setTimeout(() => {
//   app.$emit('test')
// }, 2000)
