<template>
  <div>
    <div class="fullscreen chats-background"></div>
    <div class="viewport flex-middle">
      <div class="chats">
        <h2>your swifswaps</h2>
        <i  v-show="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <div class="single-chat" v-for="chat in chats">
          <div v-if="chat.receiver.id !== userData.id">
            <p v-if="chat.updated === null">
              <router-link :to="'chats/'+chat.id">
              {{ chat.receiver.name }}'s {{ chat.receiverItem.name }} | last message at: {{ convertTime(chat.created) }}
              </router-link>
            </p>
            <p v-else>
              <router-link :to="'chats/'+chat.id">
              {{ chat.receiver.name }}'s {{ chat.receiverItem.name }} | last message at: {{ convertTime(chat.updated) }}
              </router-link>
            </p>
          </div>
          <div v-else>
            <p v-if="chat.updated === null">
              <router-link :to="'chats/'+chat.id">
              {{ chat.sender.name }}'s {{ chat.senderItem.name }} | last message at: {{ convertTime(chat.created) }}
              </router-link>
            </p>
            <p v-else>
              <router-link :to="'chats/'+chat.id">
              {{ chat.sender.name }}'s {{ chat.senderItem.name }} | last message at: {{ convertTime(chat.updated) }}
              </router-link>
            </p>
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
  props: ["userData"],
  data() {
    return {
      chats: {},
      loading: false
    };
  },
  mounted() {
    this.getChats();
  },
  methods: {
    getChats() {
      this.loading = true;

      fetch("/api/chats", { credentials: "same-origin" }).then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        response
          .json()
          .then(data => {
            data = data.sort((a, b) => {
              return Date.parse(b.updated) - Date.parse(a.updated);
            });
            this.chats = data;
            this.loading = false;
          })
          .catch(function(err) {
            console.log("Fetch Error :-S", err);
          });
      });
    },
    convertTime(x) {
      return moment(x).fromNow();
    }
  }
};
</script>
