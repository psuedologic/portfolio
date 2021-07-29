<template>
  <header class="header">
    <div id="headerMain">
      <h2 id="name">Talon Gonyeau</h2>
      <h3 id="roles">
        <span id="educationTab" class="clickable"
          @click.stop="$emit('clicked', 'Education')"
          >Education</span> |
        <span id="softwareTab" class="clickable"
          @click.stop="$emit('clicked', 'Software')"
          >Software</span> |
        <span id="designTab" class="clickable"
          @click.stop="$emit('clicked', 'Design')"
          >Design</span> 
        </h3>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      selectedTab: ""
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

@font-face {
  font-family: 'HalloSans';
  src: url('../assets/Hallo sans.otf') format("opentype");
}
.header {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: var(--headerPrimary);
  color: var(--headerBackground);
  font-family: HalloSans, 'Roboto', SourceSansPro-Black, Helvetica, Arial;
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 0.95em;
  text-align: center;
  text-transform: none;
  cursor: default;
}
.header h2 {
  font-size: 24px;
}
.header h3 {
    word-spacing: 8px;
    font-weight: 75;
}
.headerSubtitle, .headerSubOpen, .headerSubClose {
  display: flex;
  align-content: flex-start;
  font-size: 1.5em;
  cursor: default;
}
.header #roles span:hover {
  position: relative; 
  top: 1px;
  padding-top: 1px;
  cursor: pointer;
}
#softwareTab:hover {
  color: #8812fc;
}
#designTab:hover {
  color: #fcd32b;
}
#educationTab:hover {
  color: #d40047;
}

</style>
