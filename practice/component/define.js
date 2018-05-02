import Vue from 'vue'

const compoent = {
  props: {
    active: {
      type: Boolean,
      // required:true 必传
      // required: true,
      // 默认都是 true
      // default: true
      validator (value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String,
    onChange: Function
  },
  template: `
   <div>
    <input type='text' v-model.number='text'>
    <span @click='handlchage'>{{propOne}}</span>
    <span v-show="active">see me if active</span>
    <span v-show="!active" @change='handlchage2'>is</span>
   </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handlchage () {
      this.$emit('change')
    },
    handlchage2 () {
      this.onChange()
    }
  }
}

// Vue.component('CompOne', compoent)

new Vue({
  components: {
    CompOne: compoent
  },
  data: {
    prop1: 'text1',
    prop2: 'text2'
  },
  methods: {
    handlchange () {
      this.prop1 += 1
    },
    handlchange2 () {
      this.prop2 += 2
    }
  },
  el: '#root',
  template: `
    <div>
      <comp-one :active="true" :prop-one="prop1" @change='handlchange'></comp-one>
      <comp-one :active="false"  :prop-one="prop2"  @change='handlchange2'></comp-one>
    </div>
  `
})
