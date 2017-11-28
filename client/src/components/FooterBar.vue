<template>
  <footer>
    <ul>
      <li><img class="tall-boys" src="../assets/images/tallboys.png"></li>
      <li>Contact Us</li>
      <li>Fancy Symbols</li>
      <li>No Copyright</li>
      <li>&lt;3</li>
    </ul>
  </footer>
</template>

<script>

</script>

<style lang="scss">
@import '../assets/styles/_base';
footer {
  @include reset;
  @include font;
  display: block;
  margin: 1.5em 0;
  padding: 1.5em 0;
  border-top: 1px solid #eee;

  ul {
    width: 100%;
    max-width: 150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    li {
      text-align: center;
      display: block;
      padding: .3em 0;

      &:hover {
        cursor: pointer;
        opacity: .7;
      }
      img {
        width: 100%;
      }
    }
  }
}

</style>
