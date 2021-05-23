<template>
  <div class="body">
    <Presentation />
  </div>
</template>

<script>
import Presentation from "./components/Presentation.vue";

export default {
  name: "App",
  components: {
    Presentation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

body {
  background-color: rgb(245, 245, 245);
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
