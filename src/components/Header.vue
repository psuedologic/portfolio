<template>
  <header class="header">
    <h2 id="name">Talon Gonyeau</h2>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
  },
  components: {

  },
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.header {
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
.header h2 {
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
