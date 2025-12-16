<template>
  <div class="mainPage" @clicked="checkDeselect"
      :class="{ software: activeTab=='software',
        design: activeTab=='design',
        education: activeTab=='education'}">
    <AppNav @close-form="$refs.formDimmer.classList.remove('formActive')"
         @toggle-form="$refs.formDimmer.classList.toggle('formActive')"></AppNav>
    <AppHeader @clicked="onSelected"></AppHeader>
    <ZdogCanvas :selection="selectedTab" 
      @content-view-active="activeTab = selectedTab; changeTheme()"
      @close-content-view="onSelected">
    </ZdogCanvas>
    <div ref="formDimmer" id="formDimmer"></div>
  </div>  
</template>

<script>
import ZdogCanvas from './ZdogCanvas.vue'
import AppHeader from './AppHeader.vue'
import AppNav from './AppNav.vue'
import colors from '../data/colors.json'

export default {
  name: 'MainPage',
  data () {
    return {
      selectedTab: "",
      activeTab: ""
    }
  },
  props: {
    msg: String,
  },
  components: {
    ZdogCanvas,
    AppHeader,
    AppNav
  },
  mounted: function() {
    this.changeTheme();
  },
  methods: {
    onSelected(value) {
      this.selectedTab = value
    },
    checkDeselect(value) {
      let deSelect =  ! document.querySelector('#content-view-container').contains(value.target)
      if ( deSelect ) { 
        this.selectedTab = ""
      }
    },
    changeTheme() {
      let colorSelection = this.selectedTab ? this.selectedTab : "default"
      Object.entries( colors[colorSelection])
      .forEach(color => {
        document.documentElement.style.setProperty(color[0], color[1])
      })
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
    background-color: var(--background);
  }
  .mainPage {
    display: grid;
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
