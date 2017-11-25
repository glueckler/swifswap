<template>
  <div id="show-chats">
    <h2>Your swap chats</h2>
        <div class="single-chat" v-for="chat in chats">
          <router-link :to="'chats/'+chat.id">{{ chat.receiver.name }}'s {{ chat.receiverItem.name }}</router-link>
        </div>
      </div>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'Chats',
  data () {
    return {
      chats: {}
    }
  },
  mounted () {
    this.getChats()
  },
  methods: {
    getChats() {
      fetch('/api/chats')
        .then(response => {
          if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
          }
          response.json().then((data) => {
            this.chats = data
          })
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          })
        })
    }
  }
}
</script>

<style>

</style>
