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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
@import url('../assets/css/SideMenu.css');
</style>
