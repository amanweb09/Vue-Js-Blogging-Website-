<template>
  <div class="SideMenu">
    <button>Login/Register</button>

    <ul class="niche">
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
          >Travel</router-link
        >
      </li>
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
          >Entertainment</router-link
        >
      </li>
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
          >Technology</router-link
        >
      </li>
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
          >Sports</router-link
        >
      </li>
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
          >Programming</router-link
        >
      </li>
    </ul>

    <ul class="utils">
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
          >FAQs</router-link
        >
      </li>
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
        >
          Settings</router-link
        >
      </li>
      <li>
        <router-link
          class="side-menu-link"
          active-class="active-side-menu"
          to=""
          >Contact</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
div.SideMenu {
/*   height: 90vh;
  width: 22%; */
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 5px gainsboro;
  display: flex;
  flex-direction: column;
/*   position: fixed;
/*   top: 13.7vh;
  left: 0; */
  z-index: 9999999;
  background: #fff
}
div.SideMenu button {
  width: 9rem;
  height: 2rem;
  display: block;
  margin: 1rem auto;
  border: 2px solid transparent;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 3px 3px 5px gainsboro;
  transition: 0.2s;
}
div.SideMenu button:hover {
  color: rgb(108, 22, 189);
  border: 2px solid rgb(108, 22, 189);
  background: transparent;
}
ul.niche {
  box-shadow: 3px 3px 5px gainsboro;
}
ul.niche li {
  padding: 0.6rem;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 1.05rem;
}
ul.utils {
  box-shadow: 3px 3px 5px gainsboro;
  margin: 0.7rem 0;
}
ul.utils li {
  padding: 0.6rem;
}
.side-menu-link {
  color: #000;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  text-transform: capitalize;
  transition: 0.2s;
}
.side-menu-link:hover {
  color: rgb(108, 22, 189);
}
</style>
