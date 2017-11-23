<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__list">
        <li>Login</li>
        <li>Register</li>
        <li>Chat</li>
        <li>Profile</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
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
