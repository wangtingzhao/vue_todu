import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      {{isActive ? 'active' : 'not active'}}<br>
      {{arr.join('|')}}<br>
      <div :id='aaa' v-on:click='handleClick'
           :class='[{active: isActive}]'
           :style=[style,style1]
      >
        <p v-html="html"></p>
      </div>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    style: {
      color: 'red'
    },
    style1: {
      color: 'blue'
    }
  },
  methods: {
    handleClick () {
      alert('Clicked') // eslint-disable-line
    }
  }
})
