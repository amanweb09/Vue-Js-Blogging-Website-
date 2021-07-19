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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div.navbar {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  /* position: fixed;
  right: 0;
  top: 0; */
  padding-top: 1.2rem;
  box-shadow: 3px 3px 5px gainsboro;
  z-index: 9999999;
  background: #fff;
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
    color: #000;
    text-decoration: none;
    transition: 0.2s;
}
.nav-active {
  color: rgb(108, 22, 189);
}
.nav-link:hover {
  color: rgb(108, 22, 189);
}
/* @media only screen and (max-width:1100px){
  div#navbar {
    display: none;
  }
} */
</style>