<template>
  <div class="header">
    <Navbar />
    <router-view></router-view>

  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
/* import Intro from "./Intro.vue" */

export default {
  name: "Header",
  components: {
    Navbar
  },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
}
div.header {
  height: 90vh;
  width: 100%;
  background: linear-gradient(rgb(64, 224, 208, 0.3), rgb(0, 206, 209, 0.3)),
    url("../assets/bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>