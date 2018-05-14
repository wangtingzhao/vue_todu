<template>
  <section class="real-app">
    <input type="text" class="add-input" autofocus='autofocus' placeholder="接下来要做什么？" @keyup.enter="addTodo">
    <item
      v-for='todo in filteredTodos '
      :key='todo.id'
      :todo='todo'
      @del='deleteTodo'
    />
    <Tabs
      :filter='filter'
      :todos='todos'
      @toggle='toggleFliter'
      @clearAllCompleted='clearAllCompleted'
    />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouter enter')
    // next(vm => {
    //   // 数据提前获取好
    //   console.log('this is vm id ', vm.id)
    // })
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouter Updata')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('beforeRouter Leave')
    //  离开时的事件
    // if (global.confirm('are you sure ?')) {
    //   next()
    // }
    next()
  },
  props: ['id'],
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo (e) {
      this.todos.unshift({
        id: id++,
        conent: e.target.value.trim(),
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFliter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(function (todo) {
        console.log(todo)
        return !todo.completed
      })
    }
  },
  mounted () {
    console.log(this.id)
  },
  components: {
    Item,
    Tabs
  }
}
</script>
<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
.tab-container
  background-color #fff
  padding 0 15px
</style>
