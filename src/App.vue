<template>
  <div id="app">
    <div class="app-nav">
    <Navbar />
    </div>
    <div class="side-and-home">
      <div class="app-side">
    <SideMenu />
      </div>
      <div class="app-home">
    <router-view />    
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import SideMenu from './components/SideMenu.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SideMenu
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100%;
}
div.app-nav {
  position: sticky;
  top: 0;
}
div.side-and-home {
  display: flex;
  width: 100%;
  height: 86vh;
}
div.app-side {
  flex: 22;
  width: max-content;
  position: sticky;
  left: 0;
  top: 13vh;
}
div.app-home {
  flex: 88;
  height: 84vh;
  overflow: scroll;
}
</style>
