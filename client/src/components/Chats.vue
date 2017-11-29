<template>
  <div>
    <div class="fullscreen chats-background"></div>
    <div class="viewport flex-middle">
      <div class="chats">
        <h2>your swifswaps</h2>
        <i  v-show="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <div class="single-chat" v-for="chat in sortedChats">
          <div>
            <router-link :to="'chats/'+chat.id">
              {{ chat.user.name }}'s {{ chat.item.name }} | last message at: {{ convertTime(chat.updated) }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/_base";

.chats {
  padding: 0 29px 29px;
  width: 100%;
  max-width: 390px;
  background: rgba(255, 255, 255, 0.8);
}
</style>

<script>
import moment from "moment";
export default {
  name: "Chats",
  props: {
    userData: {
      required: true
    }
  },
  data() {
    return {
      chats: {},
      sortedChats: [],
      loading: false
    };
  },
  mounted() {
    this.getChats()
  },
  methods: {
    getChats() {
      this.loading = true;

      fetch("/api/chats", { credentials: "same-origin" }).then(response => {
        response.json()
        .then(data => {
          data = data.sort((a, b) => {
            return Date.parse(b.updated) - Date.parse(a.updated);
          });
          this.chats = data;
          this.sortChats()
          this.loading = false;
        })
        .catch(function(err) {
          console.log("Fetch Error", err);
        });
      });
    },
    sortChats() {
      this.sortedChats = []
      for (let chat of this.chats) {
        if (chat.receiver.id !== this.userData.id) {
          var sortedChat = {
            user: chat.receiver,
            item: chat.receiverItem
          }
        } else {
          var sortedChat = {
            user: chat.sender,
            item: chat.senderItem
          }
        }
        sortedChat.updated = chat.updated
        this.sortedChats.push(sortedChat)
      }
    },
    convertTime(x) {
      return moment(x).fromNow();
    }
  }
};
</script>
