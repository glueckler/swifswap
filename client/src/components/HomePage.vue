<template>
  <div class="homepage">
    <div class="item-grid">
      <div class="column">
        <article class="item" v-for="item in homepageItems.col1">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
        </article>
      </div>
      <div class="column" v-if="homepageItems.col2">
        <article class="item" v-for="item in homepageItems.col2">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
        </article>
      </div>
      <div class="column" v-if="homepageItems.col3">
        <article class="item" v-for="item in homepageItems.col3">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
        </article>
      </div>
      <div class="column" v-if="homepageItems.col4">
        <article class="item" v-for="item in homepageItems.col4">
          <h3 class="item__name">{{ item.name }}</h3>
          <img class="item__photo" :src="item.img_path">
          <p class="item__description">{{ item.description }}</p>
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

  &__photo {
    width: 100%;
  }
}

</style>



























