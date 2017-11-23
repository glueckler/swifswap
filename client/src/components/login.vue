<template>
  <form class="login">
      <label for="username-email">Username or Email</label>
      <input
        type="text" 
        id="username-email"
        v-model="username">
      <label for="password">Password</label>
      <input
        type="password" 
        id="password"
        v-model="password">
    <button type="submit">Register</button>
  </form>  
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      
    }
  }
}
</script>

<style>

</style>
