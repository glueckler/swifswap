<template>
  <form class="register">
      <label for="username">Username</label>
      <input
        type="text" 
        id="username"
        v-model="username">
      <label for="email">Email</label>
      <input
        type="email" 
        id="email"
        v-model="email">
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
  name: 'register',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      
    }
  }
}
</script>

<style>

</style>
