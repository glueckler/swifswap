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
      <P> {{ item }}</P>
      <p>tag(s): 
        <ul>
          <li v-for="tag in item.tagName">{{ tag }}</li>
        </ul>
      </p>
    </div>
    <form>
      <textarea placeholder="Type a message and hit enter or click submit to start a chat!" @keyup.enter="swap" v-model="message"></textarea>
    </form>
    <button class="view-item__swap-button" v-on:click="swap">swap!</button>
  </div>
</template>

<script>

const chatInfo = {
  senderId: '4',
  // get receiver Id and item id... item.user_id
  receiverId: '5',
  senderItemId: '6',
  receiverItemId: '8',
  //create message field to submit
  message: 'one liquids vessel for another'
}

export default {
  name: 'Item',
  data () {
    return {
      item: {},
      chatInfo: {
          // senderId: '4',
          // receiverId: this.item.user_id,
          // senderItemId: '',
          // receiverItemId: this.item.id,
          // message: ''
        }
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
        console.log('you clicked swap')
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
  }
</style>
