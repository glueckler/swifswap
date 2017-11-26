<template>
  <form class="login" v-on:submit.prevent="onSubmit">
    <input type="text" id="username" v-model="username" placeholder="username">
    <input type="password" id="password" v-model="password" placeholder="password">
    <button type="submit">Log in</button>
  </form>  
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function() {
      console.log('you clicked the submit button in the login form')
    }
  }
}
</script>

<style>

</style>
