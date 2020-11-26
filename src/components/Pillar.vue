<template>
<div class="pillar">
</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import h  from "vue"
import Zdog from "zdog"

export default {
  name: 'Pillar',
  props: {
      canvas: {
          type: Object
      }
  },
  updated() {  
      console.log(this.canvas.element)

  }
}

</script>

<style scoped>
</style>