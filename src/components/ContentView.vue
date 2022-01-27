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
        navigation-position="top"
        prev-icon="keyboard_double_arrow_left"
        next-icon="keyboard_double_arrow_right"
        padding
        arrows
        class="software shadow-1 rounded-borders"
      >
        <q-carousel-slide name="backEnd" class="column no-wrap flex-center">
          <q-icon name="wysiwyg" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">SWARM App</div>
            <article>
              <img src="@/assets/SWARM.png" @click="showImageBox" alt="" width="700"/>
              <img style="display:none;" src="@/assets/SWARM_lg.png" alt="" width="1200"/>
              <h5>Dec 2021 Snow Event</h5>
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
        <q-carousel-slide name="arch" class="column no-wrap flex-center">
          <q-icon name="dns" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">Customer Response Upgrade</div>
            <img src="@/assets/CustomerResponseDetails.png" @click="showImageBox" alt="" width="600"/>
            <img style="display:none;" src="@/assets/CustomerResponseDetails_lg.png"  alt="" width="1200"/>
            <h5>Work Order Application</h5>
            <p>Customer Response is the work order system for Public Works, the largest department of Bremerton.
              Primarily driven by calls from the public or cencom, this system processed 2,000 tickets in 2021,
              most with attachments and the full data stretching back to 1996. Between instability of the hosting 
              server and maximized disk space of the MS Sql Express instance, a migration was needed.
            </p>
            <p>
              I migrated the system to a new server fleet and upgraded the applications security to use Oauth 2.0 tokens,
              SAML-compliant logins, and https requests. Performance improvements were realized from seperating the
              intensive data/disk operations onto a SQL Server, CPU-bound onto a REST server, and the web-hosting portions 
              onto a web server. The switchover was successful with the 50 users able to sign in and continue work without 
              a break in service.
            </p>
            <img src="@/assets/CustomerResponseMap.png" @click="showImageBox" alt="" width="600"/>
            <img style="display:none;" src="@/assets/CustomerResponseMap_lg.png"  alt="" width="1200"/>
            <h5>Map View</h5>
            <p>
              With 52,000 issues spanning 25 years, there is a lot of useful data analysis that could be performed. 
              One example would be looking at trends of where mobility-impaired citizens have had sidewalk access issues 
              can reveal effective locations to target funding for curb ramp improvement capital. Some analyis was done
              on earlier table exports, but certain issues like flooding reports are much better analysized with spatial
              information. To support this effort, I created this Map View of the data as a realtime reflection.
            </p>
            <p>
              The original software used X, Y varchar fields to store the location of where the work order takes place.
              While capable of being retrieved singularly, it was really slow to render a map view of more than a few dozen.
              I modified the schema to store the location as an WGS-84 projected shape field. This was one of the changes I used
              to make a queryable and interactive map-view application.
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="frontEnd" class="column no-wrap flex-center">
          <q-icon name="web" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">JavaScript - Meter Work Orders</div>
            <article>
              <img id="meterImage" src="@/assets/MeterWorkOrders-Field.png" @click="showImageBox" alt="" width="700"/>
              <img style="display:none;" src="@/assets/MeterWorkOrders-Field_lg.png"  alt="" width="1200"/>
              <h5>Field View</h5>
              <p>
                I consulted with utility operations and billing to help with their upcoming workload change. They were switching from 
                Bi-monthly to monthly billing, doubling their workload. They also desired a realtime field work order system, so they could
                recieve and send updates regarding leaks, billing checks and shut-off/activations. To address these needs, I created the Meter
                Work Order system.
              </p>
              <p>
              </p>
              <img id="meterImage" src="@/assets/MeterWorkOrders-Office.png" @click="showImageBox" alt="" width="700"/>
              <img style="display:none;" src="@/assets/MeterWorkOrders-Office_lg.png"  alt="" width="1200"/>
              <h5>Office View</h5>
              <p>
                One of the considerations during design was how to work with the existing billing system. 
              </p>
            </article>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="dev-ops" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">Dev-Ops</div>
            <article>
              <img src="@/assets/ServicesExplorer.png" @click="showImageBox" alt="" width="700"/>
              <img style="display:none;" src="@/assets/ServicesExplorer_lg.png"  alt="" width="1200"/>
            </article>
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
        if (value.target.nextSibling && value.target.nextSibling.localName == "img") {
          image_box(value.target.nextSibling)
        } else {
          image_box(value.target)
        }
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

.q-carousel__slide > div {
  max-width: 900px;
}
.q-btn__content > i {
  font-size: 3rem;
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

.q-carousel__slide img {
  cursor: pointer;
}

#img_box img {
  margin-top: 5vh;
}

</style>