import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
   <div>
    <input type='text' v-model.number='text'>
    <span @click='handlechage'>{{propOne}}</span>
    <span v-show="active">see me if active</span>
   </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {
    handlechage () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent'
})
const compoent2 = {
  extends: compoent,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log('instance mounted', this.$parent.$options.name)
  }
}

// const CompVue = Vue.extend(compoent)
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxxx'
//   },
//   data () {
//     return {
//       text: 123
//     }
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: compoent2
  },
  template: '<comp></comp>',
  mounted () {
    console.log('instance mounted', this.$parent.$options.name)
  }
})
