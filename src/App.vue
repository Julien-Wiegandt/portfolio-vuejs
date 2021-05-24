<template>
  <div class="body">
    <Presentation />
    <Projects />
  </div>
</template>

<script>
import Presentation from "./components/Presentation.vue";
import Projects from "./components/Projects";

export default {
  name: "App",
  components: {
    Presentation,
    Projects,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

body {
  background-color: #2c3e50;
  margin: 0;
}
#app {
  font-family: "Roboto light", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.body {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
}
</style>
