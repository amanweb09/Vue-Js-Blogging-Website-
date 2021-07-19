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
@import url('./assets/App.css');
</style>
