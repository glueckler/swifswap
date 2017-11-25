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
      chats: {}
    }
  }, 
  mounted () {
    this.getChats()
  },
  methods: {
    getChats() {
      fetch('api/chats')
        .then(response => {
          console.log(response.json())
        })
    }
  }
}
</script>

<style>

</style>
