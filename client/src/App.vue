<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__list">
        <li><router-link to="/">Swifswap</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li>Chat</li>
        <li>Profile</li>
        <li>Chats</li>
      </ul>
      <router-view/>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import './assets/styles/_base';
.nav {
  
  &__list {
    background: $shade-1;

    li {
      display: inline-block;
    }
  }
}
</style>
