<template>
<div>
  <canvas class="zdog-canvas" width="800" height="600">
  </canvas>
</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import h  from 'vue'
import Zdog from "zdog"
import Pillar from "../canvas/pillar.js"

export default {
  name: 'ZdogCanvas',
  mounted() {
    let illo = new Zdog.Illustration({
      // set canvas with selector
      element: '.zdog-canvas',
      rotate: { x: -Zdog.TAU/8, y: -Zdog.TAU/8 },
      dragRotate: true,
    })
    this.canvas = illo

    let anchor = new Zdog.Anchor({ addTo: illo })
    let pillar = new Pillar(anchor, { x: -200, z: -100 }, 1.0)
    let pillar2 = new Pillar(anchor, { x: 200, z: -100 }, 1.0)
    let pillar3 = new Pillar(anchor, { x: 0, z: 200 }, 1.0)

    illo.updateRenderGraph()
    // animate
    function animate() {
      illo.updateRenderGraph();
      requestAnimationFrame( animate );
    }
    animate();
  },
  data() {
      return {
          canvas: {},
      }
  },
  computed: {
      getCanvas() {
          return this.canvas
      }
  }
}

</script>

<style scoped>
 .zdog-canvas {
   background-color: lightsteelblue;
 }
</style>