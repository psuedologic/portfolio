<template>
<div id="content-view-container" :class="{ contentActive: action=='Display',
                                           software: selection=='Software',
                                           design: selection=='Design',
                                           education: selection=='Education'}">
    <div id="content-view-main" class="clickable" :class="[clickable, {contentActive: selection=='Software'}]">
      
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        class="software shadow-1 rounded-borders"
      >
        <q-carousel-slide name="webApp" class="column no-wrap flex-center">
          <q-icon name="web" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h5">Web Application</div>
            <span>{{ lorem }}</span>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="data" class="column no-wrap flex-center">
          <q-icon name="mdi-database-marker" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h5">Data - Geospatial</div>
            <span>{{ lorem }}</span>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="arch" class="column no-wrap flex-center">
          <q-icon name="dns" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h5">Architecture</div>
            <span>{{ lorem }}</span>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="desktopApp" class="column no-wrap flex-center">
          <q-icon name="dns" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h5">Deskop Application</div>
            <span>{{ lorem }}</span>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="devOps" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h5">DevOps</div>
            <span>{{ lorem }}</span>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContentView',
  props: {
    selection: String,
    action: String
  },
  mounted() {
  },
  setup () {
    return {
      slide: ref('webApp'),
      lorem: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
  },
  data() {
    return {
      // Canvas Draw Classes
      
    }
  },
  methods: {

  },
  watch: {
 
    selection: {
      handler(newValue, oldValue) {
          console.log(newValue,oldValue)
        // if (newValue == "") {
        //   this.action = "IdleSpin"
        // } else {
        //   this.action = "TargetedSpin"
        // }
      }
    }
  }
}

</script>

<style>
/* Container Styles */
#content-view-container {
    display: none;
    position: absolute;
    width: 100%;
    top: 196px;
    left: 0;
    z-index: 10;
}
#content-view-container.design {
    transform: translate(-76px, -34px) rotate(22.3deg) skew(22.3deg);
}

/* Content View Main */
#content-view-container.contentActive,
#content-view-main.contentActive {
    display: block;
}

#content-view-main {
    position: absolute;
    width: 100%;
    display: none;
}

#content-view-main .software {
  /* background: rgba(216, 216, 216, 0.2); */
  background: rgba(62, 251, 251, 0.05);
  backdrop-filter: blur(4px) grayscale(30%) brightness(40%);
  color: white;
  
}

</style>