import Vue from 'vue'
console.log(111)
const component = {
  props: ['props1'],
  // template: `
  //   <div :style='style'>
  //     <slot :value='value' aaa="111"></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    },
    [
      this.$slots.header,
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #000'
      },
      value: 111
    }
  }
}
console.log(222)
new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  mounted () {
    console.log(this.$refs.comp, this.$refs.span)
  },
  // template: `
  //   <div>
  //     <comp-one ref='comp'>
  //       <span slot-scope='props' ref='span'>{{props.value}} {{props.aaa}} {{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  methods: {
    handClick () {
      console.log('clicked')
    }
  },
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   click: () => this.handClick()
        // }
        nativeOn: {
          click: () => this.handClick()
        }
      },
      [
        createElement(
          'span',
          {
            ref: 'span',
            slot: 'header',
            // domProps: {
            //   innerHTML: '<span>456</span>'
            // },
            attrs: {
              id: 'test_id'
            }
          },
          this.value
        )
      ]
    )
  },
  data () {
    return {
      value: 123
    }
  }
})
