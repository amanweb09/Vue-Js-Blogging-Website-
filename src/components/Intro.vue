<template>
  <div class="intro">
      <h1>What Happens when you look into someone else's <span> notebook? </span></h1>
      <button>Check Out</button>
  </div>
</template>

<script>
export default {
    name: 'Intro'
};
</script>

<style scoped>
div.intro {
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
div.intro h1 {
    font-family: 'Poppins';
    margin-top: 7rem;
    text-align: center;
    padding: 0 2rem;
    font-size: 2.1rem;
    text-transform: capitalize;
}
div.intro h1 span {
    color: rgb(54, 201, 188);
}
div.intro button {
    width: 10rem;
    height: 2.5rem;
    margin-top: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s;
}
div.intro button:hover {
    background: transparent;
    color: rgb(54, 201, 188);
    border: 2px solid rgb(54, 201, 188)
}
</style>