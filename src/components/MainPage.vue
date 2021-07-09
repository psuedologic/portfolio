<template>
  <div class="mainPage"
    @click="checkDeselect">
    <Nav @close-form="$refs.formDimmer.classList.remove('formActive')"
         @toggle-form="$refs.formDimmer.classList.toggle('formActive')"></Nav>
    <Header @clicked="onSelected"></Header>
    <ZdogCanvas :selection="selectedTab"></ZdogCanvas>
    <div ref="formDimmer" id="formDimmer"></div>
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
:root {
  --headerDark: #113C58;
  --headerLight: white;
}
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
    background-color: #ADF;
  }
  div#formDimmer {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: rgba(0,0,0,0.5);
  }
  div#formDimmer.formActive {
    display: initial;
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
