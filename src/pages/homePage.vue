<template>
  <div>
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

<style scoped>
div {
  background: blue;
}
</style>
