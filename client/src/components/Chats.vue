<template>
  <div>
    <div class="fullscreen chats-background"></div>
    <div class="full-flex-middle">
      <div class="chats">
        <h2 v-if="chats.length === 0" style="text-align: center">no swifswaps yet</h2>
        <h2 v-else>your swifswaps</h2>
        
        <i v-show="loading" class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <div class="chats__chat" v-for="chat in sortedChats">
          <div class="chats__chat__img">
            <img :src="chat.item.photo">
          </div>
          <router-link class="chats__chat__link" :to="'chats/'+chat.id">
            <div class="chats__chat__desc">
              <h2>{{ chat.item.name }}</h2>
              <h3><small>with</small> {{ chat.user.name }}</h3>
              <h4>last message: {{ convertTime(chat.updated) }}</h4>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

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
        sortedChat.id = chat.id
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


<style lang="scss">
@import "../assets/styles/_base";

.chats {
  padding: 29px;
  width: 100%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 7px;

  h2 {
    font-size: 2em;
    margin: 0;
  }

  &__chat {
    display: flex;
    background: rgba(255, 255, 255, 0.6);
    padding: .9em;
    margin: 20px 0;
    position: relative;

    &__img {
      display: inline-block;
      width: 170px;
      border: 2px solid #ddd;
      border-radius: 5px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__link {
      flex: auto;
    }

    &__desc {
      display: inline-block;
      padding: 0 1em;

      h2 {
        font-size: 1.7em;
        font-weight: 500;
      }

      h3 {
        font-weight: 500;

        small {
          font-weight: 400;
        }
      }

      h4 {
        font-weight: 400;
        position: absolute;
        bottom: 0px;
      }
    }
  }
}
</style>
