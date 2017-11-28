<template>
  <div id="app">
    <NavBar :userData="userData"/>
    <router-view :userData="userData"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
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

</style>
