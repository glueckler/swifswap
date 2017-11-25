<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Home-Page/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'

export default {
  components: {
    NavBar,
    HomePage
  }
}
</script>

<style lang="scss">

</style>
