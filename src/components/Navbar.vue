<template>
  <div class="navbar" id="navbar">
    <div id="brand">
      <span>The Thrifted Words</span>
    </div>
    <div id="navbar">
      <ul>
        <li><router-link to="/" class="nav-link" active-class="nav-active">Home</router-link></li>
        <li><router-link to="/about" class="nav-link" active-class="nav-active">About</router-link></li>
        <li><router-link to="" class="nav-link" active-class="nav-active">Read</router-link></li>
        <li><router-link to="" class="nav-link" active-class="nav-active">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
@import url('../assets/css/Navbar.css');

</style>