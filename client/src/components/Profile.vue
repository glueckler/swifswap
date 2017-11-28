<template>
  <div v-if="userData[0]" class="profile">
    <div class="profile__container">
      <img class="profile__photo" :src="userData[0].userPhoto">
      <div class="profile__info">
        <h2 class="profile__name">{{userData[0].userName}}</h2>
        <div class="profile__location">Location: {{userData[0].userLocation}}</div>
      </div>
    </div>
    <div class="profile__items">
     <div v-for="item in userData">
       <h2>{{item.itemName}}</h2>
       <img class="profile__items__image" :src="item.itemImage">
       <div class="profile__items__description">{{item.itemDescription}}</div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userData: {}
    }
  },
  mounted () {
    this.getUserProfile()
  },
  methods: {
    getUserProfile () {
      if (this.$route.params.id) {
        var path = '/api/users/' + this.$route.params.id
      } else if (this.$route.params.username) {
        var path = '/api/profile/' + this.$route.params.username
      }
      fetch(path).then(response => {
        response.json().then(json => {
          this.userData = json
        })
      })
    }
  }
}
</script>
<style lang="scss">
  .profile {
    max-width: 800px;
    margin: 0 auto;

    &__container {
      display: flex;
      justify-content: space-around;
    }
  }
</style>










