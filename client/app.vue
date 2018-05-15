<template>
<div id="app">
    <div id="cover"></div>
    <Header></Header>
    <P>{{counter}} {{fullName}}</P>
    <p>{{text}}</p>
    <p>{{textPuls}}</p>
    <!-- <Todo></Todo> -->
    <!-- <router-link to='/app/123'>app123</router-link> -->
    <router-link to='/app'>app</router-link>
    <router-link to='/login'>login</router-link>
    <transition name='fade'>
      <router-view/>
    </transition>
     <Footer></Footer>
     <router-view name="a"/>
</div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
export default {
  components: {
    Header,
    Footer
    // Todo
  },
  methods: {
    ...mapActions(['updataCountAsync', 'a/add']),
    ...mapMutations(['updataCount', 'a/updataText'])
  },
  mounted () {
    console.log(this.$route)
    console.log(this.$store.state.count)
    // this.$store.state.count = 9
    this.updataCountAsync({
      num: 5,
      time: 2000
    })
    this['a/add']()
    // this['a/updataText']('123')

    // let i = 1
    // setInterval(() => {
    //   this.updataCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  computed: {
    // ...mapState(['count']),
    // ...mapState({
    //   counter: 'count'
    // }),
    ...mapState({
      counter: (state) => state.count,
      text: (state) => state.a.text
    }),
    // count () {
    //   return this.$store.state.count
    // }
    ...mapGetters({
      'fullName': 'fullName',
      textPuls: 'a/textPuls'
    })
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  }
}
</script>

<style lang='stylus' scoped >
#app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
}
#cover{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .9
    z-index -1
}
</style>
