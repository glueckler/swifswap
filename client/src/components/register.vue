<template>
  <form class="register" v-on:submit.prevent="onSubmit">
    <input type="text" id="username" v-model="username" placeholder="username">
    <input type="email" id="email" v-model="email" placeholder="email">
    <input type="password" id="password" v-model="password" placeholder="password">
    <button type="submit">Register</button>
  </form>  
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function() {
      console.log('yo')
    }
  }
}
</script>

<style>

</style>
