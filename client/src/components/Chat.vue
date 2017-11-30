<template>
  <div>
    <div class="fullscreen chats-background"></div>
    <div v-if="users.you">
      <main class="full-flex-middle">
        <div class="chat">
          <h2>your swap with {{users.you.username}}</h2>
          <div class="chat__items">
            <div class="chat__items__you">
              <a :href="'/items/'+items.you.id">
                <img :src="items.you.photo">
              </a>
              <h3>{{items.you.name}}</h3>
              <p>from user: <a :href="'/'+users.you.username">{{users.you.username}}</a></p>
            </div>
            <div class="chat__items__me">
              <a :href="'/items/'+items.me.id">
                <img :src="items.me.photo">
              </a>
              <h3>{{items.me.name}}</h3>
              <p>from you: <a :href="'/'+users.me.username">({{users.me.username}})</a></p>
            </div>
          </div>
          <div class="chat__messages">
            <div class="chat__messages__msg clearfix" v-for="msg in sortedMsgs">
              <p v-bind:class="{ me: msg.me }">{{msg.messageContent}}</p>
              <span v-bind:class="{ me: msg.me }">{{msg.messageAuthor}}</span>
            </div>
          </div>
          <form class="chat__input" @keydown.enter.prevent="">
            <textarea placeholder="Enter a new message and hit enter" @keyup.enter.stop="submit" v-model="newMessage"></textarea>
          </form>
        </div>
      </main>
    </div>
  </div>
</template>

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
          this.chat = data
          this.sortedMsgs = []
          if (this.userData.id === data.sender.id) {
            this.users = {
              me: data.sender,
              you: data.receiver
            }
            this.items = {
              me: data.items.find(a => a.user_id === data.sender.id),
              you: data.items.find(a => a.user_id === data.receiver.id)
            }
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
@import '../assets/styles/_base';

  .chat {
    padding: 29px;
    width: 100%;
    max-width: 700px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 7px;
    text-align: center;

    h2 {
      font-size: 2em;
    }

    &__items {
      display: flex;
      justify-content: space-around;

      img {
        width: 150px;
        height: 150px;
      }
    }

    &__messages {
      margin: 3em 0;

      p {
        font-weight: 500;
        display: inline-block;
        max-width: 400px;
        border-radius: 10px;
        padding: .5em 1em;
        margin-bottom: 1.5em;
        background: rgba(255,255,255, .9);
        float: left;

        &.me {
          float: right;
          background: rgba(255,255,255, .5);
        }
      }

      &__msg {
        margin: 1em;
        position: relative;
        text-align: left;

        span {
          position: absolute;
          bottom: 0;
          left: 9px;

          &.me {
            left: auto;
            right: 9px;
          }
        }
      }
    }

    &__input {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;

      textarea {
        @include textarea-basic;
      }
    }

  }
</style>
