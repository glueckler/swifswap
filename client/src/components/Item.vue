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
      <textarea placeholder="Type a message and hit enter or click swap to start a chat!" @keyup.enter="swap" v-model="chatInfo.message"></textarea>
    </form>
    <button class="view-item__swap-button" v-on:click="swap">swap!</button>
  </div>
</template>

<script>

export default {
  name: 'Item',
  data () {
    return {
      item: {},
      chatInfo: {}
    }
  },
  mounted() {
    this.getItem()
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
      this.chatInfo.senderId = '4'
      this.chatInfo.receiverId = this.item.user_id
      this.chatInfo.senderItemId = '6'
      this.chatInfo.receiverItemId = this.item.id
      fetch('/api/chats', {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.chatInfo)
      })
    },
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
</style>
