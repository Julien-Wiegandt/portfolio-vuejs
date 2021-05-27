<template>
  <a :href="link" class="icon">
    <img :src="require(`@/assets/${image}`)" alt="icon image" />
  </a>
</template>

<script>
export default {
  name: "Icon",
  props: {
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
};
</script>

<style scoped>
img {
  height: 40px;
}

.icon:hover img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}
.icon:active img {
  transform: scale(0.95);
  -webkit-transform: scale(0.95);
}
</style>
