<template>
  <form method="POST" v-bind:action='login' class="login">
    <input type="text" name="username" v-model="loginForm.username" placeholder="username">
    <input type="password" name="password" v-model="loginForm.password" placeholder="password">
    <input type="submit">Log in</input>
  </form>
</template>

<script>
import { apiHost } from '../../url.config'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        email: '',
        password: ''
      },
      login: apiHost + '/sessions'
    }
  },
  // methods: {
  //   onSubmit: function() {
  //     fetch('/api/sessions', {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(this.loginForm)
  //     })
  //   }
  // }
}
</script>

<style>

</style>
