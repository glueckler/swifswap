import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Chats from '../components/Chats.vue'
import Chat from '../components/Chat.vue'



Vue.use(Router)

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/chats', component: Chats },
  { path: '/chat/:id', component: Chat },
  
]


export default new Router({ routes, mode: 'history' })
 
