<template>
  <div>
    <h2>Your swap chat with {{ chat.receiver.username }}</h2>
    <div v-for="message in chat.messages" >
      <p>{{ message.messageAuthor }}: {{ message.messageContent }}</p>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
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
  }

}
</script>

<style>
</style>
