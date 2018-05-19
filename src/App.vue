<template>
  <div id="app">
    <!-- img src="./assets/logo.png" -->
    <div class="router-links">
      <router-link to="/">StockMan</router-link> | 
      <router-link to="/details">PhotoDetails</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-links{
  margin-bottom: 1em;
}
</style>
