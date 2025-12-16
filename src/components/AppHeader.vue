<template>
  <header class="header">
    <div id="headerMain">
      <div id="name">Talon Gonyeau</div>
      <div id="roles">
        <span id="softwareTab" class="clickable"
          @click.stop="$emit('clicked', 'software')"
          >Software</span> | 
        <span id="designTab" class="clickable"
          @click.stop="$emit('clicked', 'design')"
          >Design</span> |
        <span id="educationTab" class="clickable"
          @click.stop="$emit('clicked', 'education')"
          >Education</span>        
        </div>
    </div>
  </header>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'AppHeader',
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
  background-color: var(--headerPrimary);
  color: var(--headerBackground);
  font-family: HalloSans, 'Roboto', SourceSansPro-Black, Helvetica, Arial;
  font-size: max(24px, 1.3vw);
  letter-spacing: 2px;
  line-height: 0.95em;
  text-align: center;
  text-transform: none;
  cursor: default;
}
header > * > * {
  margin: 20px 0px;
}
#name {
  font-size: max(36px, 1.8vw);
  font-weight: 600;
}
#roles {
  word-spacing: 8px;
  font-weight: 600;
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
