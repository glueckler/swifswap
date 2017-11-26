<template>
  <div class="register-user">
    <form class="register" v-on:submit.prevent="submitUser">
      <input type="text" id="username" v-model.trim="formContent.username" placeholder="username">
      <input type="email" id="email" v-model.trim="formContent.email" placeholder="email">
      <input type="password" id="password" v-model="formContent.password" placeholder="password">
      <input type="location" id="location" v-model="formContent.location" placeholder="location">
      <input type="text" id="image" v-model="formContent.image" placeholder="image url">
      <button type="submit">Register</button>
    </form>  
  </div>
</template>

<script>
const formContent = {
  username: '',
  email: '',
  password: '',
  location: '',
  image: ''
}

export default {
  name: 'Register',
  data() {
    return {
      formContent
    }
  },
  methods: {
    submitUser () {
      console.log('submit user method called')
      fetch('/api/users', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"

        },
        body: `username=${this.formContent.username}&email=${this.formContent.email}&password=${this.formContent.password}&location=${this.formContent.location}&img_path=${this.formContent.image}`

      }).then(window.confirm("you're so ready to swifswap!")).then(
      this.formContent.username = '', this.formContent.email = '', this.formContent.password = '', this.formContent.location = '', this.formContent.image = '').then(this.$router.push('/'))
    }
  }
}
</script>

<style>

</style>
