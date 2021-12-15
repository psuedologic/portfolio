<template>
  <header class="header">
    <div id="headerMain">
      <div id="name">Talon Gonyeau</div>
      <div id="roles">
        <span id="softwareTab" class="clickable"
          @click.stop="$emit('clicked', 'Software')"
          >Software</span> | 
        <span id="designTab" class="clickable"
          @click.stop="$emit('clicked', 'Design')"
          >Design</span> |
        <span id="educationTab" class="clickable"
          @click.stop="$emit('clicked', 'Education')"
          >Education</span>        
        </div>
<!--         
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="forum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> 
    </q-layout> -->
    </div>
  </header>
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'Header',
  data() {
    return {
      selectedTab: ""
    }
  },
  // setup() {
  //   return {
  //     leftDrawerOpen: ref(false)
  //   }
  // }
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
  font-size: max(18px, 1vw);
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
  font-size: max(24px, 1.5vw);
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
