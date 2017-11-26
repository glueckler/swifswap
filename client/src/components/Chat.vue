<template>
  <div v-if="chat.receiver" class="chat">
    <h2>Your swifswap with {{ chat.receiver.username }}</h2>
    <div v-for="message in chat.messages">
      <p>{{ message.messageAuthor }}: {{ message.messageContent }}</p>
    </div>
    <form class="chat__form">
      <textarea placeholder="Enter a new message" @keyup.enter="submit" v-model="newMessage"></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      newMessage: '',
      chat: {}
    }
  },
  mounted () {
    this.getMessages()
  },
  methods: {
    submit: function () {
      var value = this.newMessage
      this.chat.messages.push({
        messageAuthor: 'me',
        messageContent: value,
        messageCreationTime: new Date()
      })
      this.newMessage = ''
    },
    getMessages: function() {
      fetch('/api/chats/' + this.$route.params.id)
        .then(response => {
          if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
          }
          response.json().then((data) => {
            this.chat = data
          })
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          })
        })
      }
    }
  }

</script>

<style lang="scss">
  .chat {
    text-align: center;
    border: 0em 4em 1em 4em;
    margin: auto;

  
    &__form {

      textarea {
        font-family: 'Times New Roman', Times, serif;
        width: 25em;
        height: 5em;
      }
    }
  }
</style>
