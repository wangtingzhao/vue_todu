import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: {
      required: true
    }
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
  methods: {
    handlechage () {
      this.$emit('change')
    }
  }
}

const CompVue = Vue.extend(compoent)
new CompVue({
  el: '#root',
  propsData: {
    propOne: 'xxxx'
  }
})
