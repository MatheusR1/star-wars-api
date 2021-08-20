<template>
  <div class="container">
    <star-wars />
  </div>
</template>

<script>
import starWars from "../components/starWars.vue";

export default {
  name: "Page",
  components: {
    starWars,
  },
};
</script>

<style lang='css' scoped>
  div.container {
    background: blue;
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
  }
</style>
