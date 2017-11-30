<template>
  <div class="view-item">
    <h2 class="view-item__name">
      {{ item.name }}
    </h2>
    <div class="view-item__photo">
      <img :src="item.img_path">
    </div>
    <div class="view-item__info">
      <h3>Description</h3>
      <p>{{ item.description }}</p>
      <p>tag(s):
        <ul>
          <li v-for="tag in item.tagName">{{ tag }}</li>
        </ul>
      </p>
    </div>
    <div class="view-item__swap-section" v-if="userData && senderItems[0].itemId && item.user_id !== userData.id">
      <div  class="view-item__sender-swappabilia clearfix">
        <h2 class="view-item__sender-swappabilia__header">Your swappabilia (offer an item...)</h2>
        <div v-for="senderItem in senderItems" >
          <article v-on:click="select" v-bind:class="{ active: senderItem.isActive }">
            <div :data-item="senderItem.itemId" class="view-item__sender-swappabilia__container">
              <h4>{{ senderItem.itemName }}</h4>
              <img :src="senderItem.itemImage">
            </div>
          </article>
        </div>
      </div>
      <form class="swap-form">
        <textarea placeholder="Type a message and select an item to swap, then hit enter or click the swap button!" @keyup.enter="swap" v-model="chatInfo.message" v-focus></textarea>
        <input
          class="swap-form__field button"
          type="submit"
          value="Swap!">
      </form>
      <!-- <button class="view-item__swap-button" v-on:click="swap">swap!</button> -->
    </div>
    <div v-else-if="item.user_id === userData.id">
      <p><router-link to="/">Go find something to swap for your item!</router-link></p>
    </div>
    <div v-else>
      <p>You don't have anything to trade.. <router-link to="/newitem" v-if="userData">post an item?</router-link></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: ['userData'],
  data () {
    return {
      // isActive: false,
      item: {},
      chatInfo: {},
      senderItems: {}
    }
  },
  mounted() {
    console.log('item mounted running')
    this.getItem()
    var timer = setInterval(() => {
      if (this.userData) {
        clearInterval(timer)
        this.getSenderItems()
      }
    }, 200)
  },
  methods: {
    getItem () {
      fetch('/api/items/' + this.$route.params.id)
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((data) => {
          if (typeof data.tagName === 'string') {
            data.tagName = [data.tagName]
          }
          this.item = data
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        })
      })
    },
    swap () {
      console.log('in the swap function')
      console.log(this.chatInfo.senderItemId)
      this.chatInfo.senderId = this.userData.id
      this.chatInfo.receiverId = this.item.user_id
      // this.chatInfo.senderItemId = '6'
      this.chatInfo.receiverItemId = this.item.id
      fetch('/api/chats', {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.chatInfo)
      })
      .then(this.$router.push('/chats'))
    },
    getSenderItems () {
      fetch ('/api/users/' + this.userData.id)
      .then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then((data) => {
          for (let item of data) {
            item.isActive = false;
          }
          this.senderItems = data
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        })
      })
    },
    select(e) {
      console.log('you are in the select fxn')
      const id = e.path[1].dataset.item
      this.chatInfo.senderItemId = id
      console.log(id)
      this.senderItems.map(a => {
        a.isActive = false
        if (a.itemId == id) {
          a.isActive = true
        }
      })
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/_base';

.view-item {
  width: 100%;
  max-width: 600px;
  margin: 25px auto;
  padding: 1.5em 2.5em;
  background: $light-bg-1;

  &__name {
    text-align: center;
  }

  &__photo {
    @include box-shadow;

    img{
      width: 100%;
    }
  }
  textarea {
    box-sizing: border-box;
    @include textarea-basic;
  }
  button {
    margin: auto;
    display: block;

  }

  &__sender-swappabilia {

    article {
      float: left;
      width: calc(33% - 10px);
      min-height: 270px;
      box-sizing: border-box;
      padding: .7em;
      background: #fff;
      @include box-shadow;
      margin: 0 5px 20px;

      h4 {
        text-align: center;
      }

      img {
        width: 100%;
        border: 1px solid #eee;
        box-sizing: border-box;
      }
    }

    &__container {
      width: 100%;
      height: 100%;
    }
  }
}

.active {
  border: 2px solid #a2cbec;
  border-radius: 5px;
}

.swap-form {
  box-sizing: border-box;
  width: 100%;

  &__field {
    @include reset;
    @include font;
    @include form-basic;
  }

  // .margin-bottom {
  //   margin-bottom: .7em;
  // }

  .button {
    border-radius: 4px;
    text-align: center;
    font-size: 1.1em;
    transition: .1s all ease-out;
    border: 2px solid #ddd;
    background: white;

    &:hover {
      background: #c2f9c2;
      opacity: .8;
      transform: scale(1.01);
      cursor: pointer;
    }
  }
}
</style>
