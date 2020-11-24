<template>
  <div class="mainPage">
    <h1>{{ msg }}</h1>
      <header>
      <div id="header-container">
        <div id="header-top-triangle"></div>
        <h1>Talon Gonyeau
          <br /><span id="header-subtitle">Software Developer</span>
        </h1>
        <div id="header-bottom-triangle"></div>
      </div>
    </header>
    <div>
      <canvas class="zdog-canvas" width="240" height="240">

      </canvas>
        <!-- <Pillar>
          <div id="triangle-a" class="shape triangle"></div>
          <div id="container-b" class="container">
            <div id="trapezoid-b" class="shape trapezoid"></div>
          </div>
          <div id="triangle-c" class="shape triangle"></div>
          <div id="container-d" class="container">
            <div id="trapezoid-d" class="shape trapezoid"></div>
          </div>
        </Pillar> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import h  from 'vue'
import Zdog from "zdog";

export default {
  name: 'MainPage',
  props: {
    msg: String
  },
  components: {
    // ZIllustration,
    // ZRoundedRect,
    // ZRect,
    // ZCone,
    // ZPath,
    // ZBox
  },
  mounted() {
    let illo = new Zdog.Illustration({
      // set canvas with selector
      element: '.zdog-canvas',
    });

    // add circle
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 80,
      stroke: 20,
      color: '#636',
    });

    // update & render
    illo.updateRenderGraph();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


body {
    background-image: url("../assets/JapaneseGarden.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgb(0, 126, 0);
    
}
header {
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    /*size: 2em;*/
}
div#header-container > * {
    background: rgba(100, 200, 100, 0.8);
}
#header-top-triangle {
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    /* clip-path: polygon(0 0, 0 100%, 100% 100%); */
    margin-top: 5em;
    padding: 2.5em 1em;
}
#header-bottom-triangle {
    /* clip-path: polygon(0 0, 50% 100%, 100% 0); */
    clip-path: polygon(100% 0, 100% 100%, 50% 50%, 0 100%, 0 0);
    padding: 2.5em 1em;
}
header > div {
    width: 45%;
    font-size: 1.5em;
}

header > div > h1 {
    padding-top: 2em;
    
}

header div h1, header div div {
    text-align: center;
    
    margin: 0em;
    /* margin-top: 5em; */
    padding: 1.5em 1em 1em 1em;
    font-family: sans-serif;
}

#header-subtitle {
    font-size: 0.8em;
}
</style>
