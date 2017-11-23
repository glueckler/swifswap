import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/register.vue'
import Login from '../components/login.vue'

Vue.use(Router)

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login}  

]


export default new Router({ routes, mode: 'history' })
 
