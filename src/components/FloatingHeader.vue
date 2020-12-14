<template>
  <header class="floatingHeader">
    <h2 id="name">Talon Gonyeau;</h2>
    <h3>Portfolio</h3>
    <p><span class="headerSubOpen">/* </span>
        <span id="headerSoftware" class="headerSubtitle">Software </span>
        <span id="headerEngineering" class="headerSubtitle">Engineering </span>
        <span id="headerAcademia" class="headerSubtitle">Education </span>
        <span class="headerSubClose">*/</span>
    </p>
  </header>
</template>

<script>

export default {
  name: 'FloatingHeader',
  props: {
  },
  components: {

  },
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.floatingHeader {
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
    margin-top: 20px;
    text-align: left;
    /* color: #3A4046; */
}
.floatingHeader h2 {
    text-align: left;
    font-size: 2.5em;
}
.headerSubtitle {
    margin-left: 40px;
}
.headerSubtitle, .headerSubOpen, .headerSubClose {
    display: flex;
    align-content: flex-start;
    font-size: 1.5em;
    cursor: default;
}
</style>
