<template>
  <div class="homepage">
    <div class="item-grid">
      <div class="column">
        <article class="item" v-for="item in homepageItems[0]">
          <router-link :to="'items/'+item.id">
          <img class="item__photo" :src="item.img_path">
          <h3 class="item__name">{{ item.name }}</h3>
          <p class="item__description">{{ item.description }}</p>
          </router-link>
        </article>
      </div>
      <div class="column" v-if="homepageItems[1]">
        <article class="item" v-for="item in homepageItems[1]">
          <router-link :to="'items/'+item.id">
          <img class="item__photo" :src="item.img_path">
          <h3 class="item__name">{{ item.name }}</h3>
          <p class="item__description">{{ item.description }}</p>
          </router-link>
        </article>
      </div>
      <div class="column" v-if="homepageItems[2]">
        <article class="item" v-for="item in homepageItems[2]">
          <router-link :to="'items/'+item.id">
          <img class="item__photo" :src="item.img_path">
          <h3 class="item__name">{{ item.name }}</h3>
          <p class="item__description">{{ item.description }}</p>
          </router-link>
        </article>
      </div>
      <div class="column" v-if="homepageItems[3]">
        <article class="item" v-for="item in homepageItems[3]">
          <router-link :to="'items/'+item.id">
          <img class="item__photo" :src="item.img_path">
          <h3 class="item__name">{{ item.name }}</h3>
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
@import '../assets/styles/_base';

.item-grid {
  @include sidepadding
  padding-top: 29px;
  display: flex;
  margin-right: -29px;
}
.column {
  padding-right: 29px;
  flex-grow: 1;
  flex-basis: 0;
}
.item {
  margin-bottom: 5em;
  transition: all 1s ease-in-out;
  border-bottom: 1px solid transparent;
  padding: .5em;

  &:hover {
    border-color: #ddd;
    transform: scale(1.01);
  }

  a {
    text-decoration: none;
    color: black;
  }

  &__photo {
    width: 100%;
    border: 2px solid #eee
  }
}

</style>
