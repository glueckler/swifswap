<template>
  <div class="view-item">
    <h2 class="view-item__name">
      {{ item.name }}
    </h2>
    <div class="view-item__photo">
      <img :src="item.img_path">
    </div>
    <div class="view-item__info">
      <p>{{ item.description }}</p>
      <p>tag(s): 
        <ul>
          <li v-for="tag in item.tagName">{{ tag }}</li>
        </ul>
      </p>
    </div>
    <form>
      <textarea placeholder="Type a message and select an item to swap, then hit enter or click the swap button!" @keyup.enter="swap" v-model="chatInfo.message"></textarea>
    </form>
    <button class="view-item__swap-button" v-on:click="swap">swap!</button>
    <div class="view-item__sender-swappabilia">
      <h2 class="view-item__sender-swappabilia__header">Your swappabilia</h2>
      <article v-on:click="select" v-for="senderItem in senderItems">
        <!-- <div :data-item="senderItem.itemId" v-bind:class="{ active: senderItem.isActive }" v-on:click="toggle"> -->
        <div :data-item="senderItem.itemId" v-bind:class="{ active: senderItem.isActive }">
          <h4>{{ senderItem.itemName }}</h4>
          <img :src="senderItem.itemImage">
        </div>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: ['userData'],
  data () {
    return {
      // isActive: false,
      item: {},
      chatInfo: {},
      senderItems: {}
    }
  },
  mounted() {
    console.log('item mounted running')
    this.getItem()
    var timer = setInterval(() => {
      if (this.userData) {
        clearInterval(timer)
        this.getSenderItems()
      }
    }, 200)
  },
  methods: {
    getItem () {
    fetch('/api/items/' + this.$route.params.id)
      .then(response => {
         if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
          }
          response.json().then((data) => {
            if (typeof data.tagName === 'string') {
              data.tagName = [data.tagName]
              }
            this.item = data
          })
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          })
      })
    },
    swap () {
      console.log('in the swap function')
      console.log(this.chatInfo.senderItemId)
      this.chatInfo.senderId = this.userData.id
      this.chatInfo.receiverId = this.item.user_id
      // this.chatInfo.senderItemId = '6'
      this.chatInfo.receiverItemId = this.item.id
      fetch('/api/chats', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.chatInfo)
      })
      .then(this.$router.push('/chats'))
    },
    getSenderItems () {
      fetch ('/api/users/' + this.userData.id)
      .then(response => {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
        }
        response.json().then((data) => {
          for (let item of data) {
            item.isActive = false;
          }
          this.senderItems = data
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        })
      })
    },
    select(e) {
      console.log('you are in the select fxn')
      const id = e.path[1].dataset.item
      this.chatInfo.senderItemId = id
      console.log(id)
      this.senderItems.map(a => {
        a.isActive = false
        if (a.itemId == id) {
          a.isActive = true
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .view-item {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    &__photo {
      img{
        max-width: 600px;
      }
    }
    textarea {
      width: 100%;
    }
    button {
      margin: auto;
      display: block;

    }
  }
  .active {
    border: 1px solid black;
  }
</style>
