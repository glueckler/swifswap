<template>
  <div id="show-chats">
    <h2>Your swap chats</h2>
        <div class="single-chat" v-for="chat in chats">
          <router-link :to="'chat/'+chat.id">{{ chat.receiver.name }}'s {{ chat.receiverItem.name }}</router-link>
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
      chats: [
    {
        "id": 3,
        "updated": "2017-11-14T20:05:00.000Z",
        "created": "2017-11-14T20:04:00.000Z",
        "sender": {
            "name": "carol",
            "id": 3
        },
        "receiver": {
            "name": "alice",
            "id": 1
        },
        "senderItem": {
            "id": 4,
            "name": "car",
            "description": "runs on fuel, rolls beautifully, never brakes down",
            "photo": "http://st.motortrend.com/uploads/sites/5/2016/01/Top-Gear-Reliant-Robin-rolling-2.jpg"
        },
        "receiverItem": {
            "id": 2,
            "name": "hat",
            "description": "you might like to put it on your head",
            "photo": "https://static.giantbomb.com/uploads/original/10/103701/1791449-newtophat.jpg"
        }
    },
    {
        "id": 4,
        "updated": "2017-11-14T20:06:00.000Z",
        "created": "2017-11-14T20:06:00.000Z",
        "sender": {
            "name": "carol",
            "id": 3
        },
        "receiver": {
            "name": "bob",
            "id": 2
        },
        "senderItem": {
            "id": 5,
            "name": "house",
            "description": "fully functioning, perfect for residing inside of",
            "photo": "http://canadianart.ca/wp-content/uploads/2016/02/ken-lum-vancouver-especially-2015-courtesy-221a-photo-dennis-ha.jpg"
        },
        "receiverItem": {
            "id": 1,
            "name": "atom bomb",
            "description": "with a great atom bomb comes great responsibility",
            "photo": "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1401/lineartestpilot140101096/24799563-cartoon-atom-bomb-Stock-Vector.jpg"
        }
    },
    {
        "id": 5,
        "updated": "2017-11-14T20:09:00.000Z",
        "created": "2017-11-14T20:07:00.000Z",
        "sender": {
            "name": "carol",
            "id": 3
        },
        "receiver": {
            "name": "deltron",
            "id": 4
        },
        "senderItem": {
            "id": 4,
            "name": "car",
            "description": "runs on fuel, rolls beautifully, never brakes down",
            "photo": "http://st.motortrend.com/uploads/sites/5/2016/01/Top-Gear-Reliant-Robin-rolling-2.jpg"
        },
        "receiverItem": {
            "id": 6,
            "name": "boat",
            "description": "floats with ease",
            "photo": "http://i.imgur.com/MObThDk.jpg"
        }
    }
      ]
    
    }
  }
}
</script>

<style>

</style>
