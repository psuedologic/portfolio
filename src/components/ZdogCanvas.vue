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

    this.anchor = new Zdog.Anchor({ addTo: illo })
    let pillar = new Pillar(this.anchor, { x: -200, z: -100 }, 1.0)
    let pillar2 = new Pillar(this.anchor, { x: 200, z: -100 }, 1.0)
    let pillar3 = new Pillar(this.anchor, { x: 0, z: 200 }, 1.25)
    this.pillars = [pillar, pillar2, pillar3]


    illo.updateRenderGraph()
    this.animate()
  },
  data() {
    return {
      canvas: {},
      anchor: Zdog.Anchor,
      angle: 0,
      pillars: [],
    }
  },
  computed: {
    getCanvas() {
      return this.canvas
    }
  },
  methods: {
    animate: function() {
      this.canvas.updateRenderGraph()
      this.angle++
      const ROTATION_AMOUNT = 4
      if (this.angle == 360 * ROTATION_AMOUNT) this.angle = 0
      
      if (this.anchor) {
        this.anchor.rotate = {x: 0, y: -this.angle/90, z: 0}
      }
      
      this.pillars.forEach((pillar) => {
        pillar.rotate({x: 0, y: this.angle/90 * 1.1, z: 0})
      })
      this.canvas.updateRenderGraph()
      
      requestAnimationFrame( this.animate );
    }
  },
  watch: {
    angle: {
      handler(newValue, oldValue) {
        
        if (newValue == 360)
          newValue = 0
        else if (newValue % 5 == 0)
          console.log(newValue)
      },
      immediate: true
    }
  }
}

</script>

<style scoped>
 .zdog-canvas {
   background-color: lightsteelblue;
 }
</style>