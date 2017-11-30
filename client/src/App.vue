<template>
  <div class id="app">
    <div class="wrapper">
      <NavBar :userData="userData"/>
      <router-view :userData="userData"/>
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'

export default {
  components: {
    NavBar,
    FooterBar
  },
  data () {
    return {
      userData: undefined
    }
  },
  created () {
    this.fetchUserData()
  },
  methods: {
    fetchUserData () {
      fetch('/api/usersession', {
        credentials: 'same-origin'
      }).then(response => {
        if (response.status !== 200) {
          return;
        }
        response.json().then(data => {
          this.userData = data
          this.userData.profilePath = '/' + this.userData.username
        }).catch(err => undefined)
      })
      .catch(err => console.log('Error fetching user data.. \n', err))
    }
  }
}
</script>

<style lang="scss">

body, html {
  font-family: 'Work Sans', sans-serif;
}

.wrapper {
  overflow: hidden;
}

.fullscreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -5;
}

.full-flex-middle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin-top: -65px;
}

.top-padding {
  padding-top: 65px;
}

.sofa-background {
  background-image: url('./assets/images/swifsofa.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(6px);
}

.item-background {
  @extend .sofa-background;
  background-image: url('https://images.unsplash.com/photo-1494049694820-92a3163b10ad?auto=format&fit=crop&w=2822&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
}

.chats-background {
  background-image: url('https://images.unsplash.com/photo-1509650926597-25eead3b6ca9?auto=format&fit=crop&w=2850&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
  @extend .sofa-background;
}

.hidden.hidden.hidden {
  display: none;
}

.clearfix:after {
   content: ".";
   visibility: hidden;
   display: block;
   height: 0;
   clear: both;
}


</style>
