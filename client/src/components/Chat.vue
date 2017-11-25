<template>
  <div class="message-page">
    <h2>Your swifswap with {{ chat.receiver.username }}</h2>
    <div v-for="message in chat.messages" >
      <p>{{ message.messageAuthor }}: {{ message.messageContent }}</p>
    </div>
    <form>
      <textarea class="new-message" placeholder="Enter a new message" @keyup.enter="submit" v-model="newMessage"></textarea>
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
      console.log('you hit enter in the chat form')
      var value = this.newMessage
      console.log('value', value)
      this.chat.messages.push({
        messageAuthor: 'me',
        messageContent: value,
        messageCreationTime: new Date()
      })
      console.log('this.chat.messages', this.chat.messages)
      this.newMessage = ''
    },
    getMessages: function() {
      fetch('/api/chats/' + this.$route.params.id)
        .then(response => {
          console.log('response', response)
          response.json().then((data) => {
            console.log('data', data)
            this.chat = data
          })
        })
      }
    }
  }

</script>

<style lang="scss">
  .message-page {
    text-align: center;
    border: 0em 4em 1em 4em
  }
  textarea {
    font-family: 'Times New Roman', Times, serif;
    width: 25em;
    height: 5em;
  }
</style>
