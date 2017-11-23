<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__list">
        <li>Login</li>
        <li><router-link to="/register">Register</router-link></li>
        <li>Chat</li>
        <li>Profile</li>
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
.nav {
  
  &__list {
    background: red;

    li {
      display: inline-block;
    }
  }
}
</style>
