<template>
<div class="canvas-container">
  <div id="inner-container">
    <svg class="zdog-canvas" width="600" height="1080"></svg>
    <div id="content-view-container">
      <div id="content-view">
        <div :class="{contentActive: selection=='Software'}">
          <p>
            My experience in Software
          </p>
        </div>
        <div :class="{contentActive: selection=='Design'}">
          <p>
            My experience in Design
          </p>
        </div>
        <div :class="{contentActive: selection=='Education'}">
          <p>
            My experience in Education
          </p>
        </div>
      </div>
    </div>
  </div>
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
        
    this.calculatePosition()
    this.pillars = this.createPillars(["Software", "Education", "Design"]) 
    this.icons = {
      "Software": new Icon(this.anchor, this.angularOffset[0], "curlyBraces", 12, 0),
      "Education": new Icon(this.anchor, this.angularOffset[1], "bookStacked", 1, 1.0),
      "Design": new Icon(this.anchor, this.angularOffset[2], "triangle", 10, 0)
    }

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
      currentAcceleration: 0,
      // Drawing Constants
      MAGNITUDE: 200,
      POSITIONS: {
        "Software": 225,
        "Design": 105,
        "Education": 345
      },
      STEPS_PER_DEGREE: Zdog.TAU / 360,
      //ANIMATION_FREQUENCY: 1,
      IDLE_SPEED: 0.5,
      TARGET_VELOCITY: 5,
      TARGETED_ACCELERATION: 0.5,
      MAX_SCALE: 2.5,
      Y_OFFSET: -185,
    }
  },
  methods: {
    onHover: function(event) {
      // console.log(event)
      // console.log(event.target.getContext('2d').getImageData(event.x, event.y, 1, 1))
    },
    animate: function() {
      this.count++
      this.calculatePosition()
      
      if (!this.anchor) return

      // if (this.count % this.ANIMATION_FREQUENCY == 0) {
      if (this.action == "Stopped") {
        if (this.selection)
          this.currentAcceleration += .01
          this.pillars[this.selection].addScale(this.currentAcceleration)
          this.icons[this.selection].addScale(this.currentAcceleration)
          if (this.pillars[this.selection].scale.x >= this.MAX_SCALE) {
            this.action = "Display"
            this.icons[this.selection].setScale(2)
            document.getElementById("content-view-container")
            .classList.add("contentActive")

            if (this.selection == "Software") {
              this.icons[this.selection].shape.children.forEach(
                shape => shape.stroke = 24)
            }
          }
      }
      else if (this.action == "IdleSpin") {
        this.rotate(this.IDLE_SPEED)
      } else if (this.action == "TargetedSpin") {
        document.getElementById("content-view-container")
        .classList.remove("contentActive")
        let targetAngle = this.POSITIONS[this.selection]
        let currentAngle = this.angle * 360 / Zdog.TAU
        let turningPoint = targetAngle - 180

        // If the pillar is aligned, stop movement
        if (currentAngle > targetAngle - 0.1 &&
            currentAngle < targetAngle + 0.1) {
          this.action = "Stopped"
          this.currentAcceleration = 0
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

      // Turned off for performance
      // this.pillars.forEach((pillar) => {
      //   pillar.rotate({x: 0, y: -this.angle / STEPS_PER_ROTATION, z: 0})
      // })
      this.canvas.updateRenderGraph()
      
      requestAnimationFrame( this.animate );
    },
    createPillars: function(pillarList) {
      let pillars = {}

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

      pillarList.forEach((pillarName, i) => {
        let pillar = new Pillar(this.anchor, this.angularOffset[i])
        pillar.setColors(this.colors[i])
        pillars[pillarName] = pillar
      })
      return pillars
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
    calculatePosition: function() {
      this.angularOffset = []
      for (let i in [0,1,2]) {
        let x = Math.cos((this.angle * Zdog.TAU / 360) + (i * Zdog.TAU / 3)) * this.MAGNITUDE
        let z = Math.sin((this.angle * Zdog.TAU / 360) + (i * Zdog.TAU / 3)) * this.MAGNITUDE
        this.angularOffset.push( {"x": x, "y": this.Y_OFFSET, "z": z} )
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
      handler(newValue, oldValue) {
        if (newValue == "") {
          this.action = "IdleSpin"
        } else {
          this.action = "TargetedSpin"
        }
        if (oldValue) {
            this.pillars[oldValue].resetScale()
            this.icons[oldValue].resetScale()
            this.icons[oldValue].shape.children.forEach(
              shape => shape.stroke = 12)
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
  #inner-container {
    position: relative;
    top: 100px;
    width: 600px;
    height: 1080px;
    margin: 0 auto;
  }

  .zdog-canvas {
    background-size: contain;
    /* border: 1px solid black; // For debug*/
  }
  .pillar {
    opacity: 0.5;
    stroke-opacity: 0;
  }
  .pillar:hover {
    fill: rgb(136, 166, 192);
  }
  #content-view-container {
    display: none;
    position: absolute;
    width: 100%;
    top: 400px;
    left: 0;
    z-index: 10;
  }
  #content-view > div {
    display: none;
  }
 
  #content-view {
    background: pink;
    width: 350px;
    margin: 0 auto;
  }
  #content-view-container.contentActive, #content-view > div.contentActive {
    display: block;
  }
  

</style>