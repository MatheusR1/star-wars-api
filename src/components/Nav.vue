<template>
  <div>
    <section>
      <nav class="principal">
        <ul>
          <li><router-link to="/"> Home </router-link></li>
          <li><router-link to="/contato"> Contato </router-link></li>
          <li><router-link to="/sobre"> Sobre </router-link></li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="css" scoped>
nav.principal {
  background: red;
}
</style>