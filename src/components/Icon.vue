<template>
  <a :href="link" class="icon" :download="download">
    <img :src="require(`@/assets/${image}`)" :alt="alt" />
  </a>
</template>

<script>
export default {
  name: "Icon",
  props: {
    image: { type: String, required: true },
    link: { type: String, required: true },
    alt: { type: String },
    download: { type: String },
  },
};
</script>

<style scoped>
img {
  height: 45px;
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
