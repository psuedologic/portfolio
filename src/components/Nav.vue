<template>
  <aside class="nav">
    <h3>Experience</h3>
    <p>
    <!-- <span class="navSubOpen">/* </span> -->
        <span id="navSoftware" class="navSubtitle">Software </span>
        <span id="navEngineering" class="navSubtitle">Engineering </span>
        <span id="navAcademia" class="navSubtitle">Education </span>
        <!-- <span class="navSubClose">*/</span> -->
    </p>
  </aside>
</template>

<script>

export default {
  name: 'Nav',
  props: {
  },
  components: {

  },
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.nav {
    position: absolute;
    margin: 2em;
    color:rgb(23, 45, 68);
    font-weight: bold;
    font-family: 'Roboto';
    /* font-family: SourceSansPro-Black, Helvetica, Arial; */
    font-size: 30px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 2px;
    line-height: 70px;
    text-transform: none;
    margin-top: calc(20px + 20%);
    text-align: left;
    /* color: #3A4046; */
}
.nav h2 {
    text-align: left;
    font-size: 2.5em;
}
.navSubtitle {
    margin-left: 40px;
}
.navSubtitle, .navSubOpen, .navSubClose {
    display: flex;
    align-content: flex-start;
    font-size: 1.5em;
    cursor: default;
}
</style>
