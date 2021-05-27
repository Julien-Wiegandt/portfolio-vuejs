<template>
  <div class="work-in-progress">
    <div class="banner">
      <p class="title">Work In Progress</p>
      <img src="../assets/work-in-progress.png" alt="experience image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  background: #f7f7f7;
  margin-bottom: 40px;
  height: 200px;
  display: flex;
  width: 100%;
}
.title {
  font-family: "Roboto";
  font-weight: 100;
  font-size: xx-large;
  text-transform: uppercase;
  margin: auto 0px auto auto;
}
.banner img {
  width: auto;
  height: 90%;
  margin: auto 22% auto 5%;
}

@media screen and (max-width: 500px) {
  .banner {
    height: 150px;
  }
  .title {
    font-size: x-large;
  }
}

@media screen and (max-width: 400px) {
  .banner {
    height: 100px;
  }
  .title {
    font-size: medium;
  }
}
</style>
