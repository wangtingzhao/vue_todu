import Vue from 'vue'

const ChildComponent = {
  template: '<div>Child Component: {{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    // console.log(this.$parent.$options.name)
    // console.log(this.yeye, data.value)
  }
}
const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  //   <div :style='style'>
  //   <!-- 插槽 -->
  //     <div class='header'>
  //       <slot name='header'></slot>
  //     </div>
  //     <div class='body'>
  //       <slot name='body'></slot>
  //     </div>
  //   </div>
  // `,
  template: `
    <div :style='style'>
    <!-- 插槽作用域 -->
      <slot :value="value" aaa='111'></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #000'
      },
      value: 'Componet Value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      yeye: this,
      data
    }
  },
  data () {
    return {
      value: 123
    }
  },
  template: `
    <div>
      <!--<comp-one>
        <span slot='header'>this is header</span>
        <span slot='body'>this is body</span>
      </comp-one> -->
      <comp-one>
        <span slot-scope='props'>作用域内参数：{{props.value}} , {{props.aaa}},<br>作用域外：{{value}}</span>
      </comp-one>
      <input type='text' v-model='value' >
    </div>
  `
})
