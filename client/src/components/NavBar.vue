<template>
  <nav class="nav">
    <router-link to="/" class="nav__logo">swifswap</router-link>
    <ul class="nav__list">
      <li><router-link to="/login">login</router-link></li> |
      <li><router-link to="/register">register</router-link></li> |
      <li><router-link to="/profile">profile</router-link></li> |
      <li><router-link to="/chats">chats</router-link></li> |
      <li><router-link to="/newitem">new item</router-link></li>
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
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;

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

  &__logo {
    &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
  }

  &__list {
    font-size:1.5rem;
    li {
      display: inline-block;
      a:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
