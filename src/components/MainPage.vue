<template>
  <div class="mainPage"
    @click="checkDeselect">
    <Header @clicked="onSelected"></Header>
    <div>
      <ZdogCanvas :selection="selectedTab"></ZdogCanvas>
    </div>
  </div>
</template>

<script>
import ZdogCanvas from './ZdogCanvas.vue'
import Header from './Header.vue'

export default {
  name: 'MainPage',
  data () {
    return {
      selectedTab: ""
    }
  },
  props: {
    msg: String,
  },
  components: {
    ZdogCanvas,
    Header
  },
  // data() {
  //   return {

  //   }
  // },
  methods: {
    onSelected(value) {
      this.selectedTab = value
    },
    checkDeselect(value) {
      if (value.target.className != "clickable") {
        this.selectedTab = ""
      }
    }
  }  
}
</script>
<style>
  body, #app, .zdog-canvas {
    background-color: rgb(130, 157, 192);
  }
  body {
    overflow-x: hidden;
  }
</style>
