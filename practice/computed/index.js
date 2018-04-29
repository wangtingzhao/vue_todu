import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>{{number}}</p>
      <p>Number<input type='text' v-model='number'></p>
      <p>FullName:{{fullName}}</p>
      <p>fristName <input type='text' v-model='fristName'></p>
      <p>lastName <input type='text' v-model='lastName'></p>
      <p>lastName <input type='text' v-model='name'></p>
      <p>obj.a <input type='text' v-model='obj.a'></p>
    </div>
  `,
  data: {
    fristName: 'Lisa',
    lastName: 'Jackson',
    number: 1,
    fullName: '',
    obj: {
      a: '123'
    }
  },
  computed: {
    // name () {
    //   console.log('new name')
    //   return `${this.fristName} ${this.lastName}`
    // }
    name: {
      get () {
        console.log('new Name')
        return `${this.fristName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.fristName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    // fristName (newName, oldName) { // 监听改变后显示
    //   this.fullName = newName + ' ' + this.lastName
    // }
    // fristName: { // watch 一进来显示
    //   handler (newName, oldName) {
    //     this.fullName = newName + ' ' + this.lastName
    //   },
    //   immediate: true,
    //   deep: true
    // }
    // obj: { // 耗性能
    //   handler () {
    //     console.log('obj.a changed')
    //   },
    //   immediate: true,
    //   deep: true
    // }
    // 'obj.a': {
    //   handler () { // watch 字符串高级用法 obj中直接遍历定位的a的位置上
    //     console.log('obj.a changed')
    //   },
    //   immediate: true,
    //   deep: true
    // }
  },
  methods: {
    getName () {
      console.log('getName noivck')
      return `${this.fristName} ${this.lastName}`
    }
  }
})
