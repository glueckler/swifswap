<template>
  <main>
    <div class="not-found" v-if="notFound">Not Found</div>
    <div v-if="userData[0]" class="profile">
      <div class="profile__container">
        <div class="profile__photo">
          <img :src="userData[0].userPhoto">
        </div>
        <div class="profile__info">
          <h2 class="profile__name">{{userData[0].userName}}</h2>
          <div class="profile__location">Location: {{userData[0].userLocation}}</div>
        </div>
      </div>
      <div class="profile__items">
       <h2 class="profile__items__header">{{userData[0].userName}}'s swapabilia:</h2>
        <article  v-for="item in userData">
          <router-link :to="'/items/'+item.itemId">
          <h2>{{item.itemName}}</h2>
          <img :src="item.itemImage">
          <div>{{item.itemDescription}}</div>
          </router-link>
        </article>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data () {
    return {
      userData: {},
      notFound: false
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
      fetch(path)
      .then(response => {
        if (response.status === 200) {
          response.json().then(json => {
            this.userData = json
          })
        }
        if (response.status === 400) {
          console.log('here')
          this.notFound = true
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/styles/_base';
.profile {
  @include max-width-centered;

  &__container {
    padding: 1.7em .3em;
    width: 100%;
  }

  &__photo {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    border: 2px solid #ddd;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__info {
    font-size: 1.2em;
    text-align: center;
  }

  &__name {
    font-size: 1.5em;
  }

  &__location {

  }

  &__items {
    border-top: 2px solid #ccc;

    article {
      width: 100%;
      max-width: 350px;

      h2 {
        text-align: center;
      }

      img {
        width: 100%;
      }
    }

    &__header {
      font-weight: 400;
    }
  }
}

.not-found {
  font-size: 3em;
  width: 100%;
  text-align: center;
  padding-top: 3em;
}

</style>
