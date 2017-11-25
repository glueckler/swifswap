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
      chat: {
        "sender": {
            "username": "carol",
            "id": 3
        },
        "receiver": {
            "username": "alice",
            "id": 1
        },
        "items": [
            {
                "photo": "http://st.motortrend.com/uploads/sites/5/2016/01/Top-Gear-Reliant-Robin-rolling-2.jpg",
                "name": "car",
                "user_id": 3
            },
            {
                "photo": "https://static.giantbomb.com/uploads/original/10/103701/1791449-newtophat.jpg",
                "name": "hat",
                "user_id": 1
            }
        ],
        "messages": [
            {
                "messageAuthor": "carol",
                "messageContent": "i will give anything for that hat. name your price!",
                "messageCreationTime": "2017-11-14T20:04:00.000Z"
            },
            {
                "messageAuthor": "alice",
                "messageContent": "i'm not looking for a car right now. do you have a bicycle to offer?",
                "messageCreationTime": "2017-11-14T20:05:00.000Z"
            }
        ]
      }
    }
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
      

    }
  }

}
</script>

<style>
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
