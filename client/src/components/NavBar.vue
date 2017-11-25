<template>
  <nav class="nav">
    <router-link to="/">Swifswap</router-link>
    <ul class="nav__list">
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
      <li><router-link to="/chat/:id">Chat</router-link></li>
      <li>Profile</li>
      <li><router-link to="/chats">Chats</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {

}

</script>

<style lang="scss">
@import '../assets/styles/_base';
.nav {
  all: initial;
  * {
    all: unset;
  }

  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  height: 2em;
  background: $shade-1;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .3em;

  &__list {

    li {

      display: inline-block;
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
