<template>
  <div class="homepage">
    <div class="item-grid">
      <div class="column">
        <article class="item" v-for="item in homepageItems[0]">
          <router-link :to="'items/'+item.id">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
          </router-link>
        </article>
      </div>
      <div class="column" v-if="homepageItems[1]">
        <article class="item" v-for="item in homepageItems[1]">
          <router-link :to="'items/'+item.id">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
          </router-link>
        </article>
      </div>
      <div class="column" v-if="homepageItems[2]">
        <article class="item" v-for="item in homepageItems[2]">
          <router-link :to="'items/'+item.id">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
          </router-link>      
        </article>
      </div>
      <div class="column" v-if="homepageItems[3]">
        <article class="item" v-for="item in homepageItems[3]">
          <router-link :to="'items/'+item.id">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import itemColumnCreator from '../assets/scripts/itemColumnCreator'
import viewport from '../assets/scripts/viewport'

let viewPort = viewport()


// -------------------

export default {
  name: 'homepage',
  data () {
    return {
      homepageItems: {},
      itemsData: {}
    }
  },
  mounted() {
    this.getItems()
    window.addEventListener('resize', () => {
      let viewPort = viewport()
      this.homepageItems = itemColumnCreator(viewPort, this.itemsData)
    })
  },
  methods: {
    getItems() {
      fetch('/api')
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((data) => {
          this.itemsData = data
          this.homepageItems = itemColumnCreator(viewPort, data)
        })
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      })
    }
  }
}

</script>

<style lang="scss">
.item-grid {
  display: flex;
}
.column {
  background: #ddd;
  flex-grow: 1;
  flex-basis: 0;
}
.item {
  &:hover {
    border: 1px solid black;
  }
  &__photo {
    width: 100%;
  }
}

</style>
