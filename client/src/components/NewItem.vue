<template>
  <div>
    <div class="fullscreen item-background"></div>
    <div class="full-flex-middle">
      <div class="new-item">
        <h2>New Item</h2>
        <h3 class="new-item__sub-header">Add some new swapabilia, you're allowed one image.  Make it count!</h3>
        <h2 class="new-item__field-name">Item Name</h2>
        <input class="new-item__field" v-model.trim="formContent.name" v-focus>
        <h2 class="new-item__field-name">Item Description</h2>
        <input class="new-item__field" v-model.trim="formContent.description">
        <div v-if="!image">
          <h2 class="new-item__field-name">Item Photo</h2>
        </div>
        <div v-else>
          <img class="new-item__img-preview margin-bottom" :src="image" alt="upload image preview">
          <div class="new-item__field button" @click="removeImage">Remove Image</div>
        </div>
        <input v-bind:class="{ hidden: image }" class="new-item__field margin-bottom" @change="imageChange" type="file" id="item-photo">
        <div class="new-item__field button" v-on:click="submitItem">
          Submit Item
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import uuid from 'uuid/v4'
import { apiHost } from '@/assets/url.config.js'

const formContent = {
  name: '',
  description: '',
  tags: ['Other'],
  imageUrl: ''
}

export default {
  props: ['userData'],
  data () {
    return {
      formContent,
      image: ''
    }
  },
  methods: {
    imageChange (e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage () {
      this.image = ''
    },
    submitItem () {
      const imageUUID = uuid()
      const file = (document.getElementById('item-photo').files)[0]
      const imgName = file.name
      const ext = imgName.substring(imgName.lastIndexOf('.'))
      const imgKey = imageUUID + ext

      this.formContent.imageUrl = apiHost + 'images/' + imgKey

      this.formContent.userId = this.userData.id
      fetch('/api/items', {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.formContent)
      })
      .then((response) => {
        // todo, check if this does anything?
        response.text()
        // also find a way for the page to reload after image has uploaded
        setTimeout(() => {
          this.$router.push('/');
        }, 1400)
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });

      const formData = new FormData()
      formData.append("photo", file);
      formData.append("fileName", imgKey)
      fetch('/api/items/photo', {
        method: 'post',
        body: formData
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

.new-item {
  padding: 0 29px 29px;
  margin: 90px 0 25px;
  width: 100%;
  max-width: 600px;
  padding: 1em 3em;
  background: rgba(255,255,255,0.7);

  &__sub-header {
    font-weight: 400;
  }

  &__field-name {
    font-size: 1.3em;
    font-weight: 500;
  }

  &__img-preview {
    width: 100%;
    padding: 2em;
    box-sizing: border-box;
  }

  &__field {
    @include reset;
    @include font;
    @include form-basic;

    &[type='file'] {
      text-align: center;
    }
  }
  .margin-bottom {
    margin-bottom: .7em;
  }

  .button {
    border-radius: 4px;
    text-align: center;
    font-size: 1.1em;
    transition: .1s all ease-out;
    &:hover {
      background: rgba(255,255,255, 0.9);
      opacity: .8;
      transform: scale(1.01);
      cursor: pointer;
    }
  }
}
</style>
