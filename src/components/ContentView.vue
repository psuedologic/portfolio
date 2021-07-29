<template>
<div id="content-view-container" :class="{ contentActive: action=='Display',
                                           software: selection=='Software',
                                           design: selection=='Design',
                                           education: selection=='Education'}">
    <div id="content-view">
    <div id="software" :class="{contentActive: selection=='Software'}">
        <h4>Technologies:</h4>
        <p>
        <ul>
            <h5>Web Application Development</h5>
                
            <li>Front End - Designed and implemented modern 
            ES6/JS, CSS/HTML, Vue.js, jQuery - 4 years</li>
        </ul>
        </p>
        <p>
        My experience in Software
        </p>
        <p>
        My experience in Software
        </p>
        <p>
        My experience in Software
        </p>
        <p>
        My experience in Software
        </p>
        <p>
        My experience in Software
        </p>

    </div>
    <div :class="{contentActive: selection=='Design'}">
        <p>
        My experience in Design
        </p>
        <p>
        My experience in Design
        </p>
        <p>
        My experience in Design
        </p>
        <p>
        My experience in Design
        </p>
    </div>
    <div :class="{contentActive: selection=='Education'}">
        <p>
        My experience in Education
        </p>
        <p>
        My experience in Education
        </p>
        <p>
        My experience in Education
        </p>
        <p>
        My experience in Education
        </p>
        <p>
        My experience in Education
        </p>
    </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'ContentView',
  props: {
    selection: String,
    action: String
  },
  mounted() {
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
  #content-view-container {
    display: none;
    position: absolute;
    width: 100%;
    top: 330px;
    left: 0;
    z-index: 10;
  }
  .design {
    transform: translate(-76px, -34px)
              rotate(22.3deg)
              skew(22.3deg);
  }
  /* .design #content-view {
    height: 664px;
  } */
  .education {
    transform: translate(76px, -34px)
            rotate(-22.3deg)
            skew(-22.3deg);
  }
  /* .education #content-view {
    height: 664px;
  } */
  .software {
    margin-top: -46px;
  }
  .software #content-view {
    width: 304px;
    height: 716px;
  }
  #content-view > div {
    display: none;
  }
 
  #content-view {
    background: rgba(216, 216, 216, 0.5);
    width: 284px;
    height: 664px;
    margin: 0 auto;
  }
  #content-view-container.contentActive, #content-view > div.contentActive {
    display: block;
  }
  

</style>