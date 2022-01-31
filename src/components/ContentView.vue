<template>
<div id="content-view-container" :class="{ contentActive: action=='Display',
                                           software: selection=='Software',
                                           design: selection=='Design',
                                           education: selection=='Education'}">
    <div id="content-view-main" class="clickable" :class="[clickable, {contentActive: selection}]">
      
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
        style="display: none;"
        class="software shadow-1 rounded-borders"
        :class="{contentActive: selection=='Software'}"
      >
        <q-carousel-slide name="backEnd" class="column no-wrap flex-center">
          <q-icon name="wysiwyg" size="56px" />
          <div class="q-mt-md text-center">
            <!--  Software Content - SWARM  -->
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
              <p>To address this issue, I built SWARM (Snowy Weather Assessment and Response Map) a predominately 
                back-end application in Node.JS. We equipped the vehicles with GPS units that are wired to the 
                vehicles operating equipment. These units broadcast the current location and sensor state every
                15 seconds. My system collates the sensor data, draws vehicle paths based on the individual
                location, and then sends the finalized results to a geospatial server. Lastly the server
                graphically serves the sensor paths, based on treatment type and duration elapsed from
                treatment to a webmap front-end.</p>
              <p>The company that provided the sensor/gps units had reliability issues. As many as 40% of data
                requests were being dropped or returning 500 errors. Because the service was unreliable, my
                system was setup to make requests with an exponential back-off so that as much data could
                be displayed as possible. Missing data would be added as it became available. This proved
                to be a robust approach and the system was successful in overcoming limitations in source
                data availability.</p>
            </article>
          </div>
        </q-carousel-slide>
        <!--  Software Content - Customer Response  --> 
        <q-carousel-slide name="arch" class="column no-wrap flex-center">
          <q-icon name="dns" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">Customer Response Upgrade</div>
            <img src="@/assets/CustomerResponseDetails.png" @click="showImageBox" alt="" width="600"/>
            <img style="display:none;" src="@/assets/CustomerResponseDetails_lg.png"  alt="" width="1200"/>
            <h5>Work Order Application</h5>
            <p>Customer Response is the work order system for Public Works, the largest department of Bremerton.
              Driven by calls from the public or cencom, this system processed a few thousand tickets per year.
              Most tickets include a few pictures or attachments and the and the records stretch back to 1996. Between instability of the hosting 
              server and maximized disk space of the MS Sql Express instance, a platform update was needed.
            </p>
            <p>
              I migrated the single server to a new server fleet and upgraded the applications security to use Oauth 2.0 tokens,
              SAML-compliant logins, and https requests. Performance improvements were realized from separating the
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
              can reveal effective locations to target funding for curb ramp improvement capital. Some analysis was done
              on earlier table exports, but certain issues like flooding reports are much better analyzed with spatial
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
        <!--  Software Content - Meter Work Orders  --> 
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
                receive and send updates regarding leaks, billing checks and shut-off/activation. To address these needs, I created the Meter
                Work Order system.
              </p>                
              <img id="meterImage" src="@/assets/MeterWorkOrders-Office.png" @click="showImageBox" alt="" width="700"/>
              <img style="display:none;" src="@/assets/MeterWorkOrders-Office_lg.png"  alt="" width="1200"/>
              <h5>Office View</h5>
              <p>
                One of the considerations during design was integration with the existing billing system. I wasn't permitted direct DB access
                from the vendor, so I created views to synchronize billing information with the app. In order to track work performed and issues 
                added back into billing records, a office-centric version was added. The two apps reference the same information, with separate
                permissions and approval steps.
              </p>
            </article>
          </div>
        </q-carousel-slide>
        <!--  Software Content - Dev-ops  -->
        <q-carousel-slide name="dev-ops" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">Dev-Ops</div>
            <article>
              <p>
                My main project at the City of Bremerton was the migration of the biggest in-house software system is its GIS system, COBGIS. 
                COBGIS was a single virtual machine (SQL server, web server, and data server) with 50 users, ~500 tables/views spread over 10 databases 
                and supporting about 50 applications. These range from utility locating and maintenance tracking systems, to work order systems, and 
                analysis support applications. 
              </p>
              <p>
                We supported a lot of different client environments, native-mobile apps, web, multiple desktop applications which increased complexity
                especially with older clients. Another challenge was tight coupling between the REST services/data and the applications with a lot of 
                inner dependencies between them. Understanding and simplifying the services structure, was a large emphasis during the migration
              </p>
              <img src="@/assets/ServicesExplorer.png" @click="showImageBox" alt="" width="700"/>
              <img style="display:none;" src="@/assets/ServicesExplorer_lg.png"  alt="" width="1200"/>
              <h5>Services Explorer</h5>
              <p>
                One helpful tool I created was a dependency analyzing tool. It crawled our servers and reported on the services many-to-many
                relationship with database tables. This was invaluable for answering questions such as which services depend on a given DB table or how many
                tables would be involved with migrating an application. The back-end is a python script that scrapes server data, collates and formats and finally
                which is exports to JSON. A lightweight js library I found serves the JSON in a interactive format, and makes browsing the data convenient.
              </p>
              <p>
                With better insight into our data, I simplified the database design, going to a single DB for production and strong naming conventions
                with mandatory metadata. I introduced a staging and development environment to allow for development without impacting users. 
                Combined with tighter access control, this eliminated our issue of COBGIS being unresponsive frequently.
              </p>
              <p>
                Wherever possible, I simplified system components such as authentication. I moved to a SAML Oauth system as the only method of user identity.
                We phased out old desktop clients, and removed non-critical mobile applications in favor of web-based ones that would work for multiple. Some 
                applications were replaced with off-the-shelf solutions freeing up limited developer resources. 
              </p>
            </article>
          </div>
        </q-carousel-slide>
      </q-carousel>
      
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
        style="display: none;"
        :class="[design, shadow-1, rounded-borders, {contentActive: selection=='Design'}]"
      >
        <q-carousel-slide name="backEnd" class="column no-wrap flex-center">
          <q-icon name="wysiwyg" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">Design</div>
            <article>
              <h5>Label</h5>
             {{lorem}}
            </article>
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
#content-view-container.contentActive .q-carousel.contentActive,
#content-view-main.contentActive
 {
    display: block !important;
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