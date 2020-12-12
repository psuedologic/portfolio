<template>
<div class="canvas-container">
  <canvas class="zdog-canvas" width="600" height="800"></canvas>
</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import h  from 'vue'
import Zdog from "zdog"
import Pillar from "../canvas/pillar.js"
import Icon from "../canvas/icon.js"

export default {
  name: 'ZdogCanvas',
  mounted() {
    let illo = new Zdog.Illustration({
      element: '.zdog-canvas',
      rotate: { x: -Zdog.TAU/8, y: -Zdog.TAU/8 },
      dragRotate: true,
    })
    this.canvas = illo
    this.anchor = new Zdog.Anchor({ addTo: illo })
    
    this.calculateAngularOffset()
    this.createPillars(3) 
    // let icon = new Icon(this.anchor, this.angularOffset[0], "bookClosed", 1.0)
    // let icon2 = new Icon(this.anchor, this.angularOffset[1], "bookOpen", 1.0)
    let icon = new Icon(this.anchor, this.angularOffset[1], "bookStacked", 1, 1.0)
    // First tests
    let icon2 = new Icon(this.anchor, this.angularOffset[2], "curlyBraces", 12, 0)

    illo.updateRenderGraph()
    this.animate()
  },
  data() {
    return {
      canvas: {},
      anchor: Zdog.Anchor,
      angle: 0,
      count: 0,
      pillars: [],
      angularOffset: [],
    }
  },
  methods: {
    animate: function() {
      this.count++
      this.calculateAngularOffset()
      this.canvas.updateRenderGraph()
      
      const STEPS_PER_DEGREE = 0.02
      const STEPS_PER_ROTATION = 360
      const ANIMATION_FREQUENCY = 1

      if (this.count % ANIMATION_FREQUENCY == 0) {
        this.angle += STEPS_PER_DEGREE * ANIMATION_FREQUENCY
      }
      

      if (this.angle >=  STEPS_PER_ROTATION) {
        this.angle = 0
      }      
      if (this.anchor) {
        this.anchor.rotate = {x: 0, y: -this.angle, z: 0}
      }
      // Turned off for performance
      // this.pillars.forEach((pillar) => {
      //   pillar.rotate({x: 0, y: -this.angle / STEPS_PER_ROTATION, z: 0})
      // })
      this.canvas.updateRenderGraph()
      
      requestAnimationFrame( this.animate );
    },
    createPillars: function(quantity) {
      this.pillars = []
      let i = 0

      let colors = [{
          color: '#0D5C42',
          leftFace: '#217358',
          rightFace: '#00412C',
          topFace: '#3D8C72',
          bottomFace: '#00271A'},
          {
          color: '#113C58',
          leftFace: '#24516F',
          rightFace: '#04273F',
          topFace: '#3F6A86',
          bottomFace: '#011725'},
          {
          color: '#257410',
          leftFace: '#3F912A',
          rightFace: '#12652B',
          topFace: '#62B14D',
          bottomFace: '#0A3100'}]

      while (i < quantity) {
        let pillar = new Pillar(this.anchor, this.angularOffset[i], 1.0)
        this.pillars.push(pillar)
        pillar.setColors(colors[i])
        i++
      }
    },
    calculateAngularOffset: function() {
      const MAGNITUDE = 200
      this.angularOffset = []
      for (let i in [0,1,2]) {
        let x = Math.cos((this.angle * Zdog.TAU / 360) + (i * Zdog.TAU / 3)) * 200
        let z = Math.sin((this.angle * Zdog.TAU / 360) + (i * Zdog.TAU / 3)) * 200
        this.angularOffset.push( {"x":x, "z":z} )
      }
    }
  },
  watch: {
    angle: {
      handler(newValue, oldValue) {
        
        if (newValue == 360)
          newValue = 0
      },
      immediate: true
    }
  }
}

</script>

<style scoped>
  .canvas-container {
    width: 100%;
  }
  .zdog-canvas {
    background-color: lightsteelblue;
    background-size: contain;
    /* border: 1px solid black; // For debug*/
  }
</style>