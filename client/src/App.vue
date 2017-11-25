<template>
  <div id="app">
    <NavBar/>
    <Home-Page/>
    <router-view/>
    <nav class="nav">
      <ul class="nav__list">
        <li><router-link to="/">Swifswap</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li>Profile</li>
        <li><router-link to="/chats">Chats</router-link></li>
      </ul>
      <router-view/>
    </nav>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'

export default {
  components: {
    NavBar,
    HomePage
  }
}
</script>

<style lang="scss">

</style>
