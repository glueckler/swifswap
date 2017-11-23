<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__list">
        <li><a href="javscript:">Login</a></li>
        <li><a href="javscript:">Register</a></li>
        <li><a href="javscript:">Chat</a></li>
        <li><a href="javscript:">Profile</a></li>

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
