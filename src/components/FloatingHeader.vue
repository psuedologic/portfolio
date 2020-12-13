<template>
  <header class="floatingHeader">
    <h2 id="name">Talon Gonyeau;</h2>
    <p><span class="headerSubtitle">/* </span>
        <span id="headerSoftware" class="headerSubtitle">&nbsp;- Software </span>
        <span id="headerEngineering" class="headerSubtitle">&nbsp;- Engineering </span>
        <span id="headerAcademia" class="headerSubtitle">&nbsp;- Academia </span>
        <span class="headerSubtitle">*/</span>
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
    
}
.floatingHeader h2 {
    text-align: left;
    font-size: 2.5em;
}
.headerSubtitle {
    display: flex;
    align-content: flex-start;
    font-size: 1.5em;
}
</style>
