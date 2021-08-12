<template>
  <div>
    <Nav/>
    <Page/>
    <Footer/>
  </div>
</template>

<script>
  import Nav from "./components/Nav";
  import Footer from './components/Footer'
  import Page from './components/Page';

  export default {
    name: "App",
    components: {
      Footer,
      Nav,
      Page
    }
  }
</script>

<style>
#app {
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  list-style: none;
  border: 0;
  background: #000;
}
</style>
