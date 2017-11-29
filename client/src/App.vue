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
    console.log('app created function running')
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

.wrapper {
  min-height: 100%;
}


</style>
