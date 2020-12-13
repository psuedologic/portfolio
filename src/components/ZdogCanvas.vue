<template>
<div class="canvas-container">
  <svg class="zdog-canvas" width="600" height="800"></svg>
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
    let canvasElement = document.getElementsByClassName("zdog-canvas")[0]
    canvasElement.addEventListener("mouseover", this.onHover)
        
    this.calculateAngularOffset()
    this.createPillars(3) 
    let icon = new Icon(this.anchor, this.angularOffset[0], "curlyBraces", 12, 0)
    let icon2 = new Icon(this.anchor, this.angularOffset[1], "bookStacked", 1, 1.0)
    let icon3 = new Icon(this.anchor, this.angularOffset[2], "triangle", 10, 0)

    illo.updateRenderGraph()
    this.animate()
    this.addClasses()
  },
  data() {
    return {
      canvas: {},
      anchor: Zdog.Anchor,
      angle: 0,
      count: 0,
      // pillars: [],
      angularOffset: [],
    }
  },
  methods: {
    onHover: function(event) {
      // console.log(event)
      // console.log(event.target.getContext('2d').getImageData(event.x, event.y, 1, 1))
    },
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

      this.colors = [{
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
        pillar.setColors(this.colors[i])
        i++
      }
    },
    addClasses: function() {
      let canvasElement = document.getElementsByClassName("zdog-canvas")[0]
      
      this.colors.forEach(colorGroup =>
        Object.values(colorGroup).forEach( color => {
          // Find SVG paths that match the same color as pillars
          Array.from(canvasElement.children).filter(svgPath => {
            return color == svgPath.attributes["fill"].value
          }).forEach(svgPath => {
            return svgPath.className.baseVal="pillar"
          })
        }
      ))
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
        // Need to investigate is handler is operational, and if not if this should be removed
        if (newValue == 360)
        console.log("THIS TRIGGERED")
          newValue = 0
      },
      immediate: true
    }
  }
}

</script>

<style>
  .canvas-container {
    width: 100%;
  }
  .zdog-canvas {
    background-size: contain;
    margin-top: 3em;
    /* border: 1px solid black; // For debug*/
  }
  .pillar {
    opacity: 0.5;
    stroke-opacity: 0;
  }
  .pillar:hover {
    fill: rgb(176, 196, 222);
  }

</style>