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
  props: {
    selection: String,
  },
  mounted() {
    let illo = new Zdog.Illustration({
      element: '.zdog-canvas',
      rotate: { x: -Zdog.TAU/8, y: -Zdog.TAU/8 }
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
      // Canvas Draw Classes
      canvas: {},
      anchor: Zdog.Anchor,
      // Draw State
      angle: 0,
      count: 0,
      angularOffset: [],
      action: "IdleSpin",
      velocity: 1,
      // Drawing Constants
      MAGNITUDE: 200,
      POSITIONS: {
        "Software": 225,
        "Design": 105,
        "Education": 345
      },
      STEPS_PER_DEGREE: Zdog.TAU / 360,
      //ANIMATION_FREQUENCY: 1,
      IDLE_SPEED: 1,
      TARGET_VELOCITY: 8,
      TARGETED_ACCELERATION: 0.5,
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
      
      if (!this.anchor) return

      // if (this.count % this.ANIMATION_FREQUENCY == 0) {
      if (this.action != "Stopped") {
        if (this.action == "IdleSpin") {
          this.rotate(this.IDLE_SPEED)
        } else {
          let targetAngle = this.POSITIONS[this.selection]
          let currentAngle = this.angle * 360 / Zdog.TAU
          let turningPoint = targetAngle - 180

          // If the pillar is aligned, stop movement
          if (currentAngle > targetAngle - 0.1 &&
              currentAngle < targetAngle + 0.1) {
            this.action = "Stopped"
          }
          else  {
           // If the pillar is close, make it rotate to the right spot
            if (targetAngle - this.TARGET_VELOCITY <= currentAngle && 
                currentAngle <= targetAngle + this.TARGET_VELOCITY) {
              this.rotate(targetAngle - currentAngle)
              this.velocity = 0
            }
            // Otherwise spin in the direction that most quickly reaches target
            else if (targetAngle > currentAngle && currentAngle > turningPoint ||
              currentAngle > turningPoint && currentAngle-180 > targetAngle) {
              let targetVelocity = this.velocity + this.TARGETED_ACCELERATION
              this.velocity = Math.min(targetVelocity, this.TARGET_VELOCITY)
              this.rotate(this.velocity)
            } else {
              let targetVelocity = this.velocity - this.TARGETED_ACCELERATION
              this.velocity = Math.max(targetVelocity, -this.TARGET_VELOCITY)
              this.rotate(this.velocity)
            }
          }
        }
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
          bottomFace: '#0A3100'},
          {
          color: '#0D5C42',
          leftFace: '#217358',
          rightFace: '#00412C',
          topFace: '#3D8C72',
          bottomFace: '#00271A'
      },]

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
      this.angularOffset = []
      for (let i in [0,1,2]) {
        let x = Math.cos((this.angle * Zdog.TAU / 360) + (i * Zdog.TAU / 3)) * this.MAGNITUDE
        let z = Math.sin((this.angle * Zdog.TAU / 360) + (i * Zdog.TAU / 3)) * this.MAGNITUDE
        this.angularOffset.push( {"x": x, "z": z} )
      }
    },
    rotate: function(direction) {
      this.angle += this.STEPS_PER_DEGREE * direction // * this.ANIMATION_FREQUENCY
      this.anchor.rotate = {x: 0, y: -this.angle, z: 0}
    }
  },
  watch: {
    angle: {
      handler(newValue, oldValue) {
        let angleDegrees = newValue * 360 / Zdog.TAU
        // console.log("angle", angleDegrees)

        // Reset Loop
        if (angleDegrees >= 360) {
          this.angle -= Zdog.TAU
        } else if (angleDegrees < 0) {
          this.angle += Zdog.TAU
        }
      },
      immediate: true
    },
    selection: {
      handler(newValue) {
        if (newValue == "") {
          this.action = "IdleSpin"
        } else {
          this.action = "TargetedSpin"
        }
      }
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
    margin-top: 100px;
    /* border: 1px solid black; // For debug*/
  }
  .pillar {
    opacity: 0.5;
    stroke-opacity: 0;
  }
  .pillar:hover {
    fill: rgb(136, 166, 192);
  }

</style>