import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    // path: '/app/:id',
    // props: true,
    // props: {
    //   id: '123456'
    // },
    props: (route) => ({id: route.query.a}),
    component: Todo,
    name: 'app',
    mate: {
      title: 'this is app',
      description: 'sadasd'
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: Login
  }
]
