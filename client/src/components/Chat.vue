<template>
  <div>
    <div class="fullscreen chats-background"></div>
    <main class="viewport flex-middle">
      <div class="chat">
        <div v-if="chat.receiver">
          <h1 v-if="userData.id === chat.sender.id">your swifswap with <router-link :to="'/users/'+ chat.receiver.id">{{ chat.receiver.username }}</router-link></h1>
          <h1 v-else>your swifswap with <router-link :to="'/users/'+ chat.sender.id">{{ chat.sender.username }}</router-link></h1>
          <div class="chat__items">
            <div v-for="item in chat.items" class="chat__items__container">
              <router-link :to="'/items/'+item.id">
              <h2 v-if="item.user_id === userData.id" class="chat__items__container__name">your {{ item.name }}</h2>
              <h2 v-else class="chat__items__container__name">their {{ item.name }}</h2>
              <div class="chat__items__container__image">
                <img :src="item.photo" >
              </div>
              </router-link>
            </div>
          </div>
          <div class="chat__chat-text" v-if="chat.receiver.id !== userData.id">
            <div v-for="message in chat.messages" >
              <p v-if="message.messageAuthor === userData.username">{{ message.messageAuthor }}: {{ message.messageContent }}</p>
              <p v-else class="chat__chat-text__receiver">{{ message.messageAuthor }}: {{ message.messageContent }}</p>
            </div>
            <form class="form" @keydown.enter.prevent="">
              <textarea placeholder="Enter a new message and hit enter" @keyup.enter.stop ="submit" v-model="newMessage"></textarea>
            </form>
          </div>
          <div class="chat__chat-text" v-else>
            <div v-for="message in chat.messages" >
              <p v-if="message.messageAuthor !== userData.username" class="chat__chat-text__receiver">{{ message.messageAuthor }}: {{ message.messageContent }}</p>
              <p v-else >{{ message.messageAuthor }}: {{ message.messageContent }}</p>
            </div>
            <form class="form" @keydown.enter.prevent="">
              <textarea placeholder="Enter a new message and hit enter" @keyup.enter.stop ="submit" v-model="newMessage"></textarea>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss">
  .chat {
    padding: 29px;
    width: 100%;
    max-width: 700px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 7px;

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
    &__chat-text {
      &__receiver{
        text-align: right;
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

<script>
export default {
  name: 'Chat',
    props: {
    userData: {
      required: true
    }
  },
  data () {
    return {
      newMessage: '',
      chat: {},
      messageInfo: {},
      users: {},
      items: {},
      sortedMsgs: []

    }
  },
  mounted () {
    this.getMessages()
  },
  methods: {
    submit () {
      if (this.chat.receiver.username !== this.userData.username) {
        this.messageInfo.userId = this.chat.sender.id
        this.messageInfo.message = this.newMessage
      }
      else {
        this.messageInfo.userId = this.chat.receiver.id
        this.messageInfo.message = this.newMessage
      }
      fetch('/api/chats/' + this.$route.params.id, {
        method: 'post',
        headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(this.messageInfo)
      })
      this.getMessages()
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
          response.json()
          .then((data) => {
            if (this.userData.id === data.sender.id) {
              this.users.me = data.sender
              this.users.you = data.receiver
              this.items.me = data.items.find((a) => a.user_id === this.userData.id)
              this.items.you = data.items.find(a => a.user_id === data.receiver.id)
            } else {
              this.users = {
                me: data.receiver,
                you: data.sender
              }
              this.items = {
                me: data.items.find(a => a.user_id === data.receiver.id),
                you: data.items.find(a => a.user_id === data.sender.id)
              }
            }
            for (let msg of data.messages) {
              if (msg.messageAuthor === this.userData.username) {
                msg.me = true
              } else {
                msg.me = false
              }
              this.sortedMsgs.push(msg)
            }
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

