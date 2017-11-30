<template>
  <div>
    <div class="login fullscreen sofa-background"></div>
    <div class="full-flex-middle">
      <div class="login-form">
        <h2 class="login-form__catch">Welcome back!</h2>
        <form class="login-form__form" method="POST" v-bind:action='login'>
          <input
            type="text"
            name="username"
            v-model.trim="loginForm.username"
            placeholder="username"
            autocomplete="off"
            autofocus
          >
          <input
            class="margin-bottom"
            type="password" name="password"
            v-model.trim="loginForm.password"
            placeholder="password"
            autocomplete="off"
          >
          <input
            type="submit"
          >
        </form>
      </div>
    </div>
  </div>
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
  }
}
</script>

<style lang="scss">
@import '../assets/styles/_base';

.login-form {
  padding: 0 29px 29px;
  width: 100%;
  max-width: 390px;
  background: rgba(76,76,76,0.08);

  &__form {
    width: 100%;

    input {
      @include reset;
      @include font;
      @include form-basic;
    }
  }

  .margin-bottom {
    margin-bottom: .7em;
  }

  input[type="submit"] {
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
