<template>
  <div class="new-item">
    <div class="new-item__input">
      <h2>Item Name</h2>
      <input v-model.trim="formContent.name">
    </div>
    <div class="new-item__input">
      <h2>Item Description</h2>
      <input v-model.trim="formContent.description">
    </div>
    <div class="new-item__input">
      <input @change="imageChange" type="file" id="item-photo">
      <div v-if="!image">
        <h2>Select an Image</h2>
      </div>
      <div v-else>
        <img class="new-item__img-preview" :src="image" alt="upload image preview">
        <button @click="removeImage">Remove Image</button>
      </div>
    </div>
    <button v-on:click="submitItem">
      Submit Item
    </button>
  </div>
</template>

<script>
import uuid from 'uuid/v4'
import { apiHost } from '../../url.config.js'

const formContent = {
  name: 'TallyHo',
  description: 'it\'s whatever I wasn\'t even alive back then',
  tags: ['Other'],
  imageUrl: 'http://fillmurray.com/g/190/200'
}

export default {
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

      this.formContent.imageUrl = apiHost + '/images/' + imgKey

      fetch('/api/items', {
          method: 'post',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(this.formContent)
        })
        .then((response) => response.text())
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
  }
}
</script>
<style lang="scss">
.new-item {

  &__img-preview {
    max-width: 200px;
  }
}

</style>
