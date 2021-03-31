<template>
  <div class="mainPage">
    <Header @clicked="onSelected"></Header>
    <!-- <Nav></Nav> -->
    <div>
      <ZdogCanvas></ZdogCanvas>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import ZdogCanvas from './ZdogCanvas.vue'
import Header from './Header.vue'
// import Nav from './Nav.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String,
  },
  components: {
    ZdogCanvas,
    Header
    // Nav
  },
  // data() {
  //   return {

  //   }
  // },
  // methods: {
  //   onSelected(value) {
  //     console.log(value)
  //   }
  // }  
}
</script>
<style>
  body, #app, .zdog-canvas {
    background-color: rgb(130, 157, 192);
  }
</style>
