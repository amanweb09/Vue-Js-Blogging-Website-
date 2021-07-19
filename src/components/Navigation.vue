<template>
  <div class="navbar">
    <div id="brand">
      <span>The Nomadic Notebook</span>
    </div>
    <div id="navbar">
      <ul>
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <!-- <li><router-link to="" class="nav-link">Read</router-link></li>
        <li><router-link to="" class="nav-link">Contact</router-link></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
}
div#brand span {
  font-size: 1.4rem;
  font-family: "Poppins";
  padding: 0 1rem;
  font-weight: 600;
  text-transform: uppercase;
}
div#navbar ul {
    display: flex;
    list-style-type: none;
    padding: 1.2rem;
    justify-content: flex-end;
    align-items: center;
}
div#navbar ul li {
    padding: 0 1.6rem;
}
.nav-link {
    font-size: 1.15rem;
    font-family: 'Poppins';
    font-weight: 600 ;
}
</style>