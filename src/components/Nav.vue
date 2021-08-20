<template>
  <div>
    <section>
      <nav class="principal">
        <img class="logo" src="@/assets/img/logoStarWars.png" alt="logo" />
        <form>
          <input
            class="search"
            type="search"
            name="pequisa"
            id="pesquisa"
            placeholder="busque aqui"
          />
          <button class="search">buscar</button>
        </form>

        <ul>
          <li><router-link tag="li" to="/"> Home </router-link></li>
          <li><router-link tag="li" to="/contato"> Contato </router-link></li>
          <li><router-link tag="li" to="/sobre"> Sobre </router-link></li>
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
nav {
  background: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-self: center;
}

ul {
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  list-style: none;
  align-self: center;
}

img.logo {
  width: 40%;
  height: 40%;
  align-self: center;
  margin-left: 10%;
}

form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

form > input.search {
  width: 40%;
  height: 20%;
}
form > button.search {
  width: 20%;
  height: 20%;
}
li{
  border: none;
  background: yellow;
  width: 20%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 2%;
  border-radius: 4px;
}

li>a{
  text-decoration: none ; 
  color: inherit ;
}

</style>