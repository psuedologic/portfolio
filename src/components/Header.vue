<template>
  <header class="header">
    <h2 id="name">Talon Gonyeau - Software Engineer</h2>
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
    margin: 0;
    padding: 0;
    padding-left: 20px;
    width: 100%;
    background-color:rgb(23, 45, 68);
    color: rgb(188, 203, 223);
    font-weight: bold;
    font-family: 'Roboto';
    font-family: SourceSansPro-Black, Helvetica, Arial;
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 30px;
    text-transform: none;
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
