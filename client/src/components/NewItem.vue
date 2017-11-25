<template>
  <div class="new-item">
    <div class="new-item__input">
      <h2>Item Name</h2>
      <input v-model.trim="itemName">
    </div>
    <div class="new-item__input">
      <h2>Item Description</h2>
      <input v-model.trim="itemName">
    </div>
     <div class="new-item__input">
      <h2>Upload Image</h2>
      <input v-model.trim="itemName">
    </div>
    <button v-on:click="submitItem">
      Submit Item
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    submitItem () {

    }
  }
}
</script>
<style lang="scss">

</style>