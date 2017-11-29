<template>
  <div>
    <div class="register fullscreen sofa-background"></div>
    <div class="viewport flex-middle">
      <div class="register-form">
        <h2 class="register-form__catch">Join the traders network!</h2>
        <h3 class="register-form__header">Join swifswap forever, or for a bit!  We've missed you!</h3>
        <form class="register-form__form">
          <input
            class="register-form__field"
            type="text"
            v-model.trim="formContent.username"
            placeholder="username"
            autocomplete="off"
          >
          <input
            class="register-form__field"
            type="email"s
            v-model.trim="formContent.email"
            placeholder="email"
            autocomplete="off"
          >
          <input
            class="register-form__field margin-bottom"
            type="password"
            v-model="formContent.password"
            placeholder="password"
            autocomplete="off"
          >
          <div
            v-on:click="submitUser"
            class="register-form__field button"
            type="submit">Register</div>
        </form>
      </div>
    </div>
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
      fetch('/api/users', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body:
        `username=${this.formContent.username}
        &email=${this.formContent.email}
        &password=${this.formContent.password}
        &location=${this.formContent.location}
        &img_path=${this.formContent.image}`

      })
      .then(this.formContent = {
        username: '',
        email: '',
        password: '',
        location: '',
        image: ''
      })
      .then(this.$router.push('/'))
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/_base';

.register-form {
  padding: 0 29px 29px;
  width: 100%;
  max-width: 390px;
  background: rgba(76,76,76,0.08);

  &__field {
    @include reset;
    @include font;
    @include form-basic;
  }

  .margin-bottom {
    margin-bottom: .7em;
  }

  .button {
    border-radius: 4px;
    text-align: center;
    font-size: 1.1em;
    transition: .1s all ease-out;
    &:hover {
      background: rgba(255,255,255, 0.9);
      opacity: .8;
      transform: scale(1.01);
      cursor: pointer;
    }
  }
}

</style>
