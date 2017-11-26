<template>
  <div v-if="chat.receiver" class="chat">
      <h1>your swifswap with {{ chat.receiver.username }}</h1>
    <div class="chat__items">
      <div v-for="item in chat.items" class="chat__items__container">
        <h2 class="chat__items__container__name">{{ item.name }}</h2>
        <div class="chat__items__container__image">
          <img :src="item.photo" >
        </div>
      </div>
    </div>
    <div class="chat-text">
      <div v-for="message in chat.messages">
        <p>{{ message.messageAuthor }}: {{ message.messageContent }}</p>
      </div>
      <form class="form">
        <textarea placeholder="Enter a new message" @keyup.enter="submit" v-model="newMessage"></textarea>
      </form>
    </div>
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
    submit () {
      var value = this.newMessage
      this.chat.messages.push({
        messageAuthor: this.chat.sender.username,
        messageContent: value,
        messageCreationTime: new Date()
      })
      this.newMessage = ''

    },
    getMessages() {
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
    text-align: left;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    &__items {
      display: flex;
      margin: 1em auto 0;
      justify-content: space-between;
      align-items: center;

      &__container {

        &__name {
          text-align: center;
        }

        &__image {
          height: 230px;
          display: flex;
          align-items: center;

          img {
            width: 200px;
          }
        }
      }
    }
  
  }

  .form {
      textarea {
        width: 100%;
        height: 5em;
      }
  }
</style>
