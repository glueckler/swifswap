import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/register.vue'

Vue.use(Router)

const routes = [
  { path: '/register', component: Register }
]


export default new Router({ routes, mode: 'history' })
 
