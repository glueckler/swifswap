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
    <button v-on:click="submitItem">
      Submit Item
    </button>
  </div>
</template>
<script>
const formContent = {
  name: 'Hootey Tootey',
  description: 'My mama wouldn\'t want ol dear ol me selling her salad dressing nah would sheh?',
  tags: ['Other'],
  imageUrl: 'http://fillmurray.com/g/200/300'
}

export default {
  data () {
    return {
      formContent
    }
  },
  methods: {
    submitItem () {
      console.log('submit item method called')
      fetch('/api/items', {
          method: 'post',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(this.formContent)
        })
        // .then(json)
        // .then(function (data) {
        //   console.log('Request succeeded with JSON response', data);
        // })
        // .catch(function (error) {
        //   console.log('Request failed', error);
        // });
    }
  }
}
</script>
<style lang="scss">

</style>