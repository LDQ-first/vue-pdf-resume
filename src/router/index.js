import Vue from 'vue'
import Router from 'vue-router'
/* import Hello from '@/components/Hello' */
/* import Home from '../views/Home/Home.vue' */
const Home = resolve => require(['../views/Home/Home.vue'], resolve)


Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
]


const router = new Router({
  routes
})

export default router

export {
  router,
  routes
}
