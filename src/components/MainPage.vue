<template>
  <div class="mainPage"
    @click="checkDeselect">
    <Nav></Nav>
    <Header @clicked="onSelected"></Header>
    <ZdogCanvas :selection="selectedTab"></ZdogCanvas>
  </div>
</template>

<script>
import ZdogCanvas from './ZdogCanvas.vue'
import Header from './Header.vue'
import Nav from './Nav.vue'

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
    Header,
    Nav
  },
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
  html {
    --scrollbarBG: transparent;
    --thumbBG: #90A4AE;
  }
  body {
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
  }
  body, #app, .zdog-canvas {
    background-color: rgb(130, 157, 192);
  }
  /* #app::-webkit-scrollbar {
    width: 11px;

  }
  #app::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }
  #app::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG) ;
    border-radius: 6px;
    border: 1px solid var(--scrollbarBG);
  } */
</style>
