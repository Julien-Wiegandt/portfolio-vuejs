<template>
  <div class="container">
    <!-- <Preloader /> -->
    <Background />
    <div class="body">
      <Presentation />
      <Experience />
      <Projects />
      <Education />
      <!-- <Banner title="Work In Progress" image="work-in-progress.png" /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Experience from "./views/Experience";
import Presentation from "./views/Presentation.vue";
import Projects from "./views/Projects";
// import Banner from "./views/Banner";
import Background from "./components/Background";
// import Preloader from "./components/Preloader.vue";
import Education from "./views/Education";
import Footer from "./views/Footer";

export default {
  name: "App",
  components: {
    Presentation,
    Projects,
    Experience,
    // Banner,
    Footer,
    Education,
    Background,
    // Preloader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

body {
  margin: 0;
}
#app {
  font-family: "Roboto light", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
.body {
  width: 900px;
  position: inherit;
}
.container {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 900px) {
  .body {
    width: 100%;
  }
}
</style>
