<template>
<div id="content-view-container" :class="{ contentActive: action=='Display',
                                           software: selection=='software',
                                           design: selection=='design',
                                           education: selection=='education'}">
    <div id="content-view-main" class="clickable" :class="{contentActive: selection}">
      <q-carousel
        v-for="(pane, index) in panes"
        :key="index"
        v-model="pane.model"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        navigation
        navigation-position="top"
        prev-icon="keyboard_double_arrow_left"
        next-icon="keyboard_double_arrow_right"
        padding
        arrows
        style="display: none;"
        class="shadow-1 rounded-borders"
        @transition="loadCarouselImages"
        :class="[pane.name, {contentActive: selection==pane.name}]"
      >
        <q-carousel-slide 
          v-for="(slide, i) in pane.slides"
            :key="i"
            :name="i"
          class="column no-wrap flex-center">
          <q-icon :name="slide.icon" size="56px" />
          <div class="q-mt-md text-center">
            <div class="q-mb-md text-h4">{{slide.title ? slide.title : slide.name}}</div>
            <article v-html="contentSlides[slide.name]">
            </article>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
</div>
</template>

<script>
import image_box from '../libraries/img_box'

export default {
  name: 'ContentView',
  props: {
    selection: String,
    action: String
  },
  mounted() {
    document.querySelectorAll("article img").forEach(img => {
        img.src = this.images[img.getAttribute("data-src")]
        img.addEventListener("click", this.showImageBox)
    })
  },
  created() {
    this.panes = this.panes.map(v => ({...v, model: 0}))
  },
  setup () {
    return {
      lorem: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
  },
  data() {
    return {
      panes: [
        {
          "name": "software",
          "slides": [
          {
            "name": "SWARM App",
            "icon": "wysiwyg"
          },{
            "name": "Customer Response Upgrade",            
            "icon": "dns"
          },{
            "name": "Meter Work Order",
            "icon": "web"
          },{
            "name": "Dev-Ops",
            "icon": "terrain"
          }]
        },
        {
          "name": "design",
          "slides": [{
            "title": "Crownhill Safe Routes to School",
            "name": "Field Inspection",
            "icon": "construction"
          },{
            "name": "Structural Design",
            "icon": "foundation"
          },{
            "name": "Mechanical Design",
            "title": "Gearbox Wrench",
            "icon": "plumbing"
          }]
        },
        {
          "name": "education",
          "slides": [{
            "name": "AutoCAD",
            "icon": "precision_manufacturing"
          },{
            "name": "Technical Drawing",
            "icon": "architecture"
          },{
            "name": "Descriptive Geometry",
            "icon": "view_in_ar"
          }]
        }
      ],
      images: {
        "swarm_main": require('@/assets/SWARM.png'),
        "swarm_main_lg": require('@/assets/SWARM_lg.png'),
        "customer_details": require('@/assets/CustomerResponseDetails.png'),
        "customer_details_lg": require('@/assets/CustomerResponseDetails_lg.png'),
        "customer_map": require('@/assets/CustomerResponseMap_lg.png'),
        "customer_map_lg": require('@/assets/CustomerResponseMap_lg.png'),
        "meter_field": require('@/assets/MeterWorkOrders-Field.png'),
        "meter_field_lg": require('@/assets/MeterWorkOrders-Field_lg.png'),
        "meter_office": require('@/assets/MeterWorkOrders-Office.png'),
        "meter_office_lg": require('@/assets/MeterWorkOrders-Office_lg.png'),
        "services": require('@/assets/ServicesExplorer.png'),
        "services_lg": require('@/assets/ServicesExplorer_lg.png'),
        "gearbox_plan": require('@/assets/GearboxWrench_1.png'),
        "gearbox_details": require('@/assets/GearboxWrench_3.png'),
        "weather_tower": require('@/assets/NWS_Design.png'),
        "weather_tower_sketch": require('@/assets/Dual_Polarization_Tower_Sketch.png'),
        "crownhill_finished": require('@/assets/Crownhill_Finished.jpg'),
        "crownhill_finished_hover": require('@/assets/Crownhill_Finished_hover.jpg'),
        "crownhill_plan": require('@/assets/Crownhill_Plan.png'),
        "tech_drawing": require('@/assets/TechnicalDrawing.png'),
        "acad_coversheet": require('@/assets/ACAD_CS-1.png'),
        "acad_details": require('@/assets/ACAD_D-2.png'),
        "acad_details_hover": require('@/assets/ACAD_D-1.png'),
        "descriptive_geometry": require('@/assets/DescriptiveGeometry.png')
      },
      contentSlides: {
        "SWARM App": `
            <img data-src="swarm_main" class="imageBox" alt="" width="700"/>
            <h5>Dec 2021 Snow Event</h5>
            <p>Due to the many hills and geography of Bremerton, snow and ice can make for especially dangerous 
              driving conditions. The city has a mixture of snow plows, sand spreaders, and anti-ice fluid 
              equipped vehicles. However citizens had no way of determining actual road conditions. I was tasked 
              with designing and implementing a software solution to provide realtime information on the 
              condition of the roads.</p>
            <p>To address this issue, I built SWARM (Snowy Weather Assessment and Response Map) a predominately 
              back-end application in Node.JS. We equipped the vehicles with GPS units that are wired to the 
              vehicles electronic system. These units broadcast the current location and sensor state every
              15 seconds. My system collates the sensor data, draws vehicle paths based on the individual
              location, and then sends the finalized results to a geospatial server. Lastly the server
              provides the sensor paths, based on treatment type and duration elapsed from treatment to a map front-end.
            </p>
            <p>The company that provided the sensor/gps units had reliability issues. As many as 40% of data
              requests were being dropped or returning 500 errors. Because the service was unreliable, my
              system was setup to make requests with an exponential back-off so that as much data could
              be displayed as possible. Missing data would be added as it became available. This proved
              to be a robust approach and the system was successful in overcoming limitations in source
              data availability.</p>`,
        "Customer Response Upgrade":`
            <img data-src="customer_details" @click="showImageBox" alt="" width="600"/>
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
            <img data-src="customer_map" @click="showImageBox" alt="" width="600"/>
            <h5>Map View</h5>
            <p>
              With 52,000 issues spanning 25 years, there is a lot of useful data analysis that could be performed. 
              One example would be looking at trends of where mobility-impaired citizens have had sidewalk access issues. 
              This can reveal effective locations to target funding for curb ramp improvement capital. Some analysis was done
              on earlier table exports, but certain issues like flooding reports are much better analyzed with spatial
              information. To support this effort, I created this Map View of the data as a realtime reflection.
            </p>
            <p>
              The original software used X, Y varchar fields to store the location of where the work order takes place.
              While capable of being retrieved singularly, it was really slow to render a map view of more than a few dozen.
              I modified the schema to store the location as an WGS-84 projected shape field. This was one of the changes I used
              to make a queryable and interactive map-view application.
            </p>`,
        "Meter Work Order": `
            <img data-src="meter_field" @click="showImageBox" alt="" width="700"/>
            <h5>Field View</h5>
            <p>
              The Utility Operations and Billing departments consulted with me to help alleviate their upcoming process change. Council doubled
              the billing cycle frequency, greatly increasing their workload. Another limitations of their current system was the inability to
              coordinate information easily. A lot of time was spent filling out forms and placing calls between the field and office crew to report change in 
              conditions. With this work order system they wanted to be able to receive and send updates regarding leaks, billing checks and 
              shut-off/activations. To address these needs, I created the Meter Work Order system.
            </p>
            <p>
              One of the considerations during design was integration with the existing billing system. I wasn't permitted direct DB access
              from the vendor, so I created views to synchronize billing information with the app. This way I could retrieve live authoritative 
              data and be sure not to interfere with the other applications. This satisfied the field crew, I could provide meter locations, customer 
              information and meter flow reads. The other consequence was the location data became more important. I could use the customers service
              address with a geolocator, and that would show a map marker on the correct property. But with multi-family housing, and older meter standards,
              it was inefficient to find the physical meter repeatedly. I added a shape field to the meter maintenance and using high-resolution aerial imagery 
              and their ipads, the field crew could store precise locations of the meters. 
            </p>
            <img data-src="meter_office" @click="showImageBox" alt="" width="700"/>
            <h5>Office View</h5>
            <p>
              With the new spatial data, and many important records about meter types and field conditions, we needed a way to store this information. Data
              specific to this application was appropriate to store locally in our gis application database. Most of the the data needed to be entered
              into the billing's system of record. Without the permission to directly modify, I created a staging interface for the office staff to access.
              This allowed for them to track work performed and communicate with the field staff. The recently submitted meter work orders waited in a queue
              to be processed by billing and ultimately close the issue. This office-centric version of the app referenced the same information, with separate
              permissions and approval steps.
            </p>`,
        "Dev-Ops": `
            <p>
              One of my most involved projects at Bremerton was the migration of the biggest in-house software system, its GIS system called COBGIS. 
              COBGIS was a single virtual machine (SQL server, web server, and data server) with 50 users, ~500 tables/views spread over 10 databases 
              and supporting about 50 applications. These range from utility locating and maintenance tracking systems, to work order systems, and 
              analysis support applications. 
            </p>
            <p>
              We supported a lot of different client environments: native-mobile apps, web, and multiple desktop applications. This increased complexity
              especially with older or legacy clients. Another challenge was tight coupling between the REST services/data and the applications with a lot of 
              inner dependencies between them. During the migration process, a large emphasis of mine was to understand and simplify the services structure.
            </p>
            <img data-src="services" @click="showImageBox" alt="" width="700"/>
            <h5>Services Explorer</h5>
            <p>
              One helpful tool I created was a dependency analyzing tool. It crawled our servers and reported on the services many-to-many
              relationship with database tables. This was invaluable for answering questions such as which services depend on a given DB table or how many
              tables would be involved with migrating an application. The back-end is a python script that scrapes server data, collects, formats, and finally
              exports it to JSON. I then used a lightweight javascript library to serve the JSON in a interactive format and make browsing the data convenient.
            </p>
            <p>
              With better insight into our data, I simplified the database design, going to a single DB for production and strong naming conventions
              with mandatory metadata. I introduced a staging and development environment to allow for development without impacting users. 
              Combined with tighter access control, this eliminated our issue of COBGIS frequently being unresponsive.
            </p>
            <p>
              Wherever possible, I simplified system components such as authentication. I moved to a SAML Oauth system as the only method of user identity.
              We phased out legacy desktop clients, and removed non-critical mobile applications in favor of web-based ones that where more flexible. Some 
              applications were replaced with off-the-shelf solutions freeing up limited developer resources. 
            </p>`,
        "Mechanical Design": `
            <img data-src="gearbox_plan" @click="showImageBox" alt="" width="700"/>
            <h5>Render View</h5>            
            <p>For one of my classes in Technical Design, the final project was to create a wrench. I had been interested in gears and wanted to create something
              novel that I hadn't seen before. I thought it would be interesting to have an adjustable-style wrench that could be operated from either hand
              and could still be opened or closed even if the mouth of the wrench was obscured, such as inside an engine. 
            </p>
              <img data-src="gearbox_details" @click="showImageBox" alt="" width="700"/>
              <h5>Section View</h5>
              <p>To make this idea possible, I started with the design of a typical adjustable wrench, which uses what's called a worm gear (Dark Pink). Usually 
              this worm gear is the part that is exposed to the user's thumb. While this works great normally, I also needed mechanical input on the far side. To transfer
              the rotational motion, I added a central shaft that by spinning could turn the worm gear. Now I just needed input on both ends, and for that I settled on 
              helical bevel gears, These have the advantage of enabling very precise movement and positioning, and provided a convenient thumbscrew-like interface which
              would work allow the design to work. Lastly I added the casing, thumb grooves and finger grips to make the wrench comfortable to hold. With some careful tolerances
              I was able to 3d Print off my design, fully-assembled and it was completely functional.</p>`,
          "Structural Design": `
            <h5>National Weather Service Tower</h5>
            <img data-src="weather_tower" @click="showImageBox" alt="" width="700"/>
            <p>The National Weather Service (NWS) was seeking a fall protection solution for technicians that maintained and operated their dual polarization tower. 
              Due to the complex structure of the radar towers, the company I worked for wanted to employ a secondary method of stress calculation called Finite Element Analysis 
              (FME). While requiring higher lever of input accuracy and more complex design geometry, FEA allows for a better prediction of performance and more insight into
              where the failure conditions can occur. This stands in contrast to analytical stress analysis, which relies on simplified and idealized loading with large
              safety factors based on engineering experience. </p>
              <h5>Dual Polarization Tower</h5>
              <img data-src="weather_tower_sketch" @click="showImageBox" alt="" width="700"/>
              <h5>3d Modeling Sketch</h5>
              <p>One thing required to perform FEA is a high quality 3d model of the structure, but the client only had 2d drawings. I used a unique method of 3d projection, 
              where I aligned the profile, perspective and plan views in 3d space and projected them together. With the intersection of the projections, I had reliable baselines
              that I could use to double-check the extruded shape and create a precise model. A few features on the 2d Drawings were distorted and this method didn't work, such as
              flanges at the base of the main post. For these repeating elements, I projected the number of flanges around an isometric circle achieving accuracy.</p>`,
        "Field Inspection": `
            <img data-src="crownhill_finished" data-hover="" @click="showImageBox" alt="" width="700"/>
            <h5>Project Mid-construction<div class="subtitle">(Hover for pre-construction)</div></h5>
            <p>The Crownhill Elementary Safe Routes to School project was the first project I had been able to participate
              in both the design review and see through the entirety as the project inspector. Overall the project was
              very successful and was finished within the half-million dollar budget. One of my most important contributions
              to the project was my thorough documentation of daily notes and 1000s of pictures. At the end 
              of the project the contractor submitted many change orders and attempted to run the budget 20% over the bid.
              My record keeping was cited as the primary reason why we were able to dismiss almost all claims for extra charges.</p>
              <img data-src="crownhill_plan" @click="showImageBox" alt="" width="700"/>
              <h5>Project Drawings - Plan View</h5>
              <p>There were challenges that came up during the construction that were tricky to navigate. In order to create
              the new sidewalks, we used city right-of-way which is often used by residents as lawns, or vehicle parking. In other 
              situations the residents had vehicles illegally parked. Constructing their driveways to code would mean limiting their
              access. Assuaging their anger but ensuring that things were constructed as necessary was challenging.</p>
              <p>Between the sidewalks and roadway reconstruction, new stormwater facilities, and flashing beacon sidewalk crossing
              there was a lot to learn. Other duties included measuring work performed and authorizing payment, reporting construction
              progress to the project engineer, coordinating with contractors with impacts to school access, and ensuring proper erosion
              and sediment control measures were followed.</p>`,
        "Descriptive Geometry": `
            <p>Descriptive Geometry was invented by Gaspard Monge in the middle of the 18th Century as a military secret and later incorporated as a major element
              of architectural drawing. One of the main functions is to represent three-dimensional objects in two dimensions while preserving measurement accuracy.
              This means that 3d objects can be drawn with a true size, scale, and shape, and the perspective can vary depending on what information is needed to be
              conveyed. 
            </p>
            <img data-src="descriptive_geometry" @click="showImageBox" alt="" width="700"/>`,            
        "AutoCAD": `
            <img data-src="acad_details" data-hover="" @click="showImageBox" alt="" width="700"/>
            <h5>Production AutoCAD drawings<div class="subtitle">(Hover for assembly view)</div></h5>
            <p>AutoCAD is the class I taught the most often due to it being in high demand. As the most ubiquitous CAD program, AutoCAD is used across many industries. While other CAD programs have domain-specific applications,
              especially 3D, AutoCAD is the standard for drawing file compatibility and production drawings. Based on the principles of manual
              drafting, AutoCAD is intuitive to learn for people with engineering drawing experience. 
            </p>
            <img data-src="acad_coversheet" @click="showImageBox" alt="" width="700"/>
            <h5>Coversheet including 3d Model</h5>
            <p>The way AutoCAD organizes itself is by providing two distinct environments model-space and paper-space. Model space is unbounded, where things are drawn
              as close to accurate size as is known. Here an architect would draw a given building perhaps 50 feet across. When it comes time to represent this building on 
              paper, the model must be scaled down to fit for obvious reasons. Here paper-space provides a viewport, or window that can look into model space at a given scale.
              With this seperation of concerns, AutoCAD achieves an elegant design allowing for the realistic depictions of objects in model space, and the appropriately sized
              representations in paper space.
            </p>`,
        "Technical Drawing": `
            <p>Technical Drawing also known as drafting, is the prerequisite class taken before AutoCAD. The main purpose of a technical drawing is to convey an unambiguous representation of an object
              so that it can be manufactured or provides a demonstration of how it functions. Various drafting elements such as the 
              thickness of the lines, dash patterns, dimensioning symbols make the technical drawing a visual language. This stands in
              contrast to other types of drawings which are expressive in nature and subjectively interpreted.
            </p>
            <img data-src="tech_drawing" @click="showImageBox" alt="" width="700"/>
            <h5>Roller Guide - Section View</h5>
            <p>
              While drafting is no longer commonly done by hand, there are some important reasons it is still taught. The modern equivalent
              Computer-Aided Drafting (CAD) is based on the same principles as manual drafting. Most techniques are transferable and the student
              who first learns Technical Drawing gains a strong intuitive understanding of the principles. Another benefit for drafters and engineers
              is it gives them the skills to make technical sketches. Computers are not always at-hand, and sketching out a design is a quick way
              to refine and explore complex ideas. Drawings provide a level of abstraction and can greatly simplify the communication of industry
              and engineering.
            </p>`
      }
    }
  },
  methods: {
    loadCarouselImages() {
      document.querySelectorAll(".contentActive article img").forEach(img => {
        img.src = this.images[img.getAttribute("data-src")]
        img.addEventListener("click", this.showImageBox)
      })

      document.querySelectorAll("img[data-hover]").forEach(img => {
        img.addEventListener("mouseover", () => {
          img.src = this.images[img.getAttribute("data-src")+"_hover"]
        })
        img.addEventListener("mouseleave", () => {
          img.src = this.images[img.getAttribute("data-src")]
        })
      })

      //DEV only, can remove for prod
      document.querySelectorAll("p.lorem").forEach(elem => {
        elem.innerHTML = this.lorem
      })
    },
    showImageBox(value) {
        //Check for image_box with '_lg' variant 
        if (this.images[value.target.getAttribute("data-src")+"_lg"]) {
          image_box(this.images[value.target.getAttribute("data-src")+"_lg"])
        } 
        //check if hover        
        else if (value.target.getAttribute("data-hover") === "") {
          image_box(this.images[value.target.getAttribute("data-src")])
        } else {
          image_box(value.target)
        }
    },
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

#content-view-container {
  backdrop-filter: blur(4px) grayscale(30%) brightness(40%);
  font-size: 1rem;
}

#content-view-main .software {
  background: rgba(37, 97, 97, 0.8);
  color: white;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#content-view-main .design {
  background: rgba(32, 87, 189, 0.8);
  color: white;
  outline: 2px solid lightblue;
  outline-offset: -22px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
}

#content-view-main .education {
  background: rgba(255, 245, 245, 0.9);
  color: black;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1rem;
}

.software .q-btn__content,
.education .q-btn__content {
  color: var(--headerBackground) !important;
}

.q-carousel__slide > div {
   max-width: 900px;
  padding-bottom: 30px;
}
.q-btn__content > i {
  font-size: 3rem;
}

h5 {
  font-size: 1.5rem;
}
.subtitle {
  font-size: 0.85rem;
}
p {
  text-align: left;
  font-size: 1rem;
}

div.q-carousel {
  height: initial;
}

.q-carousel__slide .text-h4 {
  margin: 2vw 2vh;
}

.q-carousel__slide img {
  cursor: pointer;
}

#img_box img {
  margin-top: 5vh;
}

.picNote {
  margin-top: -2rem;
  margin-bottom: 2rem;
}

</style>