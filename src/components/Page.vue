<template>
  <div>
    <star-wars />
  </div>
</template>

<script>
import starWars from "./starWars";

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
