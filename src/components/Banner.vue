<template>
  <div class="banner">
    <p class="banner__title">{{ title }}</p>
    <img :src="require(`@/assets/${image}`)" alt="banner image" />
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
  },
};
</script>

<style scoped>
.banner {
  background: #f7f7f7;
  margin: 40px 0 40px 0;
  height: 200px;
  display: flex;
  width: 100%;
}
.banner__title {
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
  .banner__title {
    font-size: x-large;
  }
}

@media screen and (max-width: 400px) {
  .banner {
    height: 100px;
    margin: 40px 0 10px 0;
  }
  .banner__title {
    font-size: large;
  }
}
</style>
