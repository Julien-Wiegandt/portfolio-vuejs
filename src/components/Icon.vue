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
</style>
