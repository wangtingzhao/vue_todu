import Vue from 'vue'

// const compoent = {
//   props: ['value'],
//   template: `
//     <div>
//       <input type="text" @input='handleInput' :value="value">
//     </div>
//   `,
//   methods: {
//     handleInput (e) {
//       this.$emit('input', e.target.value)
//     }
//   }
// }

// new Vue({
//   components: {
//     CompOne: compoent
//   },
//   el: '#root',
//   data () {
//     return {
//       value: 123
//     }
//   },
//   template: `
//     <div>
//       <comp-one :value='value' @input="value = arguments[0]"  />
//     </div>
//   `
// })
const compoent = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value1'],
  template: `
    <div>
      <input type="text" @input='handleInput' :value="value1">
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: {
    CompOne: compoent
  },
  el: '#root',
  data () {
    return {
      value: 123
    }
  },
  template: `
    <div>
      <comp-one v-model='value' />
    </div>
  `
})
