<template>
  <div id="show-chats">
    <h1>your swifswaps</h1>
        <i  v-show="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <div class="single-chat" v-for="chat in chats">
          <p><router-link :to="'chats/'+chat.id">{{ chat.receiver.name }}'s {{ chat.receiverItem.name }} | last message at: {{ convertTime(chat.updated) }}</router-link></p>
        </div>
      </div>
      </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Chats',
  data () {
    return {
      chats: {},
      loading: false
    }
  },
  mounted () {
    this.getChats()
  },
  methods: {
    getChats() {
      this.loading = true

      fetch('/api/chats')
        .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
          }
          response.json().then((data) => {
            this.chats = data
            this.loading = false

          })
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          })
        })
    },
    convertTime(x) {
      return moment(x).fromNow()
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
