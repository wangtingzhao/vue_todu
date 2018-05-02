import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
   <div>
    <div v-text="'Text:' +text"></div>
    <div v-if="text === 0 ">esle IF text{{text}} </div>
    <div v-else>esle content </div>
    <div v-html="html"></div>
    // v-model.number 转换为数组   v-model.layz //事件离开input后记录被改变的值  v-model.trim 去首尾空格
    <input type='text' v-model='text'><br>
    <input type='checkbox' v-model="active">
    <div>
      <input type="checkbox"  :value="1" v-model='arr'>
      <input type="checkbox"  :value="2" v-model='arr'>
      <input type="checkbox"  :value="3" v-model='arr'>
    </div>
    <ul>
      <li v-for='(item, index) in arr' :key="item">{{item}}: {{index}}</li>
    </ul>
    <ul>
      <li v-for="(value, key, index) in obj">{{key}} : {{value}} : {{index}}</li>
    </ul>

   </div>
  `,
  data: {
    text: 0,
    active: false,
    html: '<span>This is HTML</span>',
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '345',
      c: '678'
    }
  }
})
