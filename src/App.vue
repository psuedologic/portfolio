<template>
<div id="app">
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <MainPage msg="Under Construction"/>
</div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
@import "../node_modules/material-icons/iconfont/material-icons.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
