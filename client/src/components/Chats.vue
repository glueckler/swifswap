<template>
  <div id="show-chats">
    <h1>your swifswaps</h1>
        <div class="single-chat" v-for="chat in chats">
          <p><router-link :to="'chats/'+chat.id">{{ chat.receiver.name }}'s {{ chat.receiverItem.name }} | last message at: {{ chat.updated }}</router-link></p>
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
  #show-chats {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
</style>
