<template>
  <div class="mainPage">
    <floating-header></floating-header>
    <div>
      <ZdogCanvas></ZdogCanvas>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import ZdogCanvas from './ZdogCanvas.vue'
import FloatingHeader from './FloatingHeader.vue'

export default {
  name: 'MainPage',
  props: {
    msg: String,
  },
  components: {
    ZdogCanvas,
    FloatingHeader
  },
  
}
</script>
<style>
  body, #app, .zdog-canvas {
    background-color: rgb(77, 98, 124);
  }
</style>
