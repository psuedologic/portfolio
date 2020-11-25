<template>
<div>
    <canvas class="zdog-canvas" width="800" height="600">
        <Pillar v-bind:canvas="this.canvas"></Pillar>
    </canvas>
</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import h  from 'vue'
import Zdog from "zdog";
import Pillar from './Pillar.vue'

export default {
  name: 'ZdogCanvas',
  components: {
      Pillar,
  },
  mounted() {
    let illo = new Zdog.Illustration({
      // set canvas with selector
      element: '.zdog-canvas',
    });
    this.canvas = illo

    // add circle
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 80,
      stroke: 20,
      color: '#636',
    });

    // update & render
    illo.updateRenderGraph();
  },
  data() {
      return {
          canvas: false,
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
</style>