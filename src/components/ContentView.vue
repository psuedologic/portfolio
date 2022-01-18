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
        <q-carousel-slide name="backEnd" class="column no-wrap flex-center">
          <q-icon name="wysiwyg" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">Node.JS - SWARM App</div>
            <article>
              <img id="swarmImage" src="@/assets/SWARM.png" @click="showImageBox" alt="" width="700"/>
              <p>Due to the many hills and geography of Bremerton, snow and ice can make for especially dangerous 
                driving conditions. The city has a mixture of snow plows, sand spreaders, and anti-ice fluid 
                equipped vehicles. However citizens had no way of determining actual road conditions. I was tasked 
                with designing and implementing a software solution to provide realtime information on the 
                condition of the roads.</p>
              <h5>Solution:</h5>
              <p>To address this issue, I built SWARM (Snowy Weather Assessment and Response Map) a predominately 
                back-end application in Node.JS. We equipped the vehicles with GPS units that are wired to the 
                vehicles operating equipment. These units broadcast the current location and sensor state every
                15 seconds. My system collates the sensor data, draws vehicle paths based on the individual
                location, and then sends the finalized results to a geospatial server. Lastly the server
                graphically serves the sensor paths, based on treatment type and duration elapsed from
                treatment to a webmap front-end.</p>
              <h5>Challenge:</h5>
              <p>The company that provided the sensor/gps units had reliability issues. As many as 40% of data
                requests were being dropped or returning 500 errors. Because the service was unreliable, my
                system was setup to make requests with an exponential back-off so that as much data could
                be displayed as possible. Missing data would be added as it became available. This proved
                to be a robust approach and the system was successful in overcoming limitations in source
                data availability.</p>
            </article>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="frontEnd" class="column no-wrap flex-center">
          <q-icon name="web" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">JavaScript - Meter Work Orders</div>
            <article>
              <img id="meterImage" src="@/assets/MeterWorkOrders.png" @click="showImageBox" alt="" width="700"/>
            </article>
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
        <q-carousel-slide name="data" class="column no-wrap flex-center">
          <q-icon name="mdi-database-marker" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h5">Data Analysis</div>
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
import image_box from '../libraries/img_box' 

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
      slide: ref('backEnd'),
      lorem: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
  },
  data() {
    return {
      // Canvas Draw Classes
      
    }
  },
  methods: {
    showImageBox(value) {
      image_box(value.target)
    },
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
  background: rgba(37, 97, 97, 0.8);
  backdrop-filter: blur(4px) grayscale(30%) brightness(40%);
  color: white;
}

h5 {
  font-size: 1.5rem;
}
p {
  text-align: left;
  font-size: 1rem;
}

div.q-carousel {
  height: initial;
}

#swarmImage {
  cursor: pointer;
  margin-bottom: 4vh;
}
#img_box img {
  margin-top: 5vh;
}

</style>