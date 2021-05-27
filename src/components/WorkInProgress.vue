<template>
  <div class="work-in-progress">
    <div class="title">
      <img src="../assets/work-in-progress.png" alt="experience title" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkInProgress",
};
</script>

<style scoped>
.title {
  background: #f7f7f7;
  margin-bottom: 40px;
}

.title img {
  width: 700px;
}

@media screen and (max-width: 900px) {
  .title img {
    width: 100%;
  }
}
</style>
