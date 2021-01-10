<template>
  <div class="mainPage">
    <Header></Header>
    <Nav></Nav>
    <div>
      <ZdogCanvas></ZdogCanvas>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import ZdogCanvas from './ZdogCanvas.vue'
import Header from './Header.vue'
import Nav from './Nav.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String,
  },
  components: {
    ZdogCanvas,
    Header,
    Nav
  },
  
}
</script>
<style>
  body, #app, .zdog-canvas {
    background-color: rgb(77, 98, 124);
  }
</style>
