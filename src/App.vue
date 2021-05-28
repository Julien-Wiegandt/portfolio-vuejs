<template>
  <div class="body">
    <Presentation />
    <Projects />
    <Experience />
    <Banner title="Work In Progress" image="work-in-progress.png" />
    <Footer />
  </div>
</template>

<script>
import Presentation from "./components/Presentation.vue";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Presentation,
    Projects,
    Experience,
    Banner,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

body {
  animation: background-color-animation;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  margin: 0;
}
#app {
  font-family: "Roboto light", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: black;
}
.body {
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
}

@keyframes background-color-animation {
  0% {
    background-color: rgb(105, 162, 226);
  }
  50% {
    background-color: rgb(214, 86, 86);
  }
  100% {
    background-color: rgb(105, 162, 226);
  }
}

@media screen and (max-width: 900px) {
  .body {
    width: 100%;
  }
}
</style>
