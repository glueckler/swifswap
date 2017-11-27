<template>
  <div>
    <div class="register fullscreen sofa-background"></div>
    <div class="fullscreen flex-middle">
      <div class="register-form">
        <h2 class="register-form__catch">Join the traders network!</h2>
        <h3 class="register-form__header">Join swifswap forever, or for a bit!  We've missed you!</h3>
        <form class="register-form__form" v-on:submit.prevent="submitUser">
          <input class="register-form__field" type="text" v-model.trim="formContent.username" placeholder="username">
          <input class="register-form__field" type="email"s v-model.trim="formContent.email" placeholder="email">
          <input class="register-form__field" type="password" v-model="formContent.password" placeholder="password">
          <!-- <input type="location" v-model="formContent.location" placeholder="location"> -->
          <!-- <input type="text" v-model="formContent.image" placeholder="image url"> -->
          <div class="register-form__field" type="submit">Register</div>
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

.fullscreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -5;
}

.sofa-background {
  background: url('../assets/images/swifsofa.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(6px);
  z-index: -9;
}

.flex-middle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.register-form {
  padding: 0 29px;
  width: 100%;
  max-width: 390px;
  background: rgba(76,76,76,0.08);
  height: 400px;


  &__field {
    @include reset;
    @include font;
    display: block;
    color: black;
    text-align: center;
    height: 60px;
    width: 100%;
    background: rgba(255,255,255, 0.6);
    &:focus {
      outline: none;
    }
    &::placeholder {

    }
  }

  &__form {
    width:100
  }
}

</style>
