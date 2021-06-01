<template>
  <div class="education-card">
    <div class="education-card-header">
      <img
        class="education-card-img"
        :src="require(`@/assets/${image}`)"
        alt="education image"
      />
      <p class="education-card-title">{{ title }}</p>
    </div>
    <div class="content">
      <p class="diploma">{{ diploma }}</p>
      <p class="date">{{ date }}</p>
      <p class="description">{{ description }}</p>
    </div>
    <div class="footer">
      <a :href="link" class="link">Détails sur ma formation</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCard",
  props: {
    title: { type: String, required: true },
    image: { type: String, required: true },
    diploma: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
  },
};
</script>

<style scoped>
.education-card {
  background: #f7f7f7;
  width: 500px;
  height: 400px;
  margin: 40px;
}

.education-card-header {
  display: flex;
  align-items: center;
}

.education-card-img {
  width: 120px;
  height: auto;
  margin: 30px 30px 30px 30px;
}

.education-card-title {
  font-family: "Roboto";
  font-weight: 300;
  font-size: x-large;
  text-transform: uppercase;
  margin: 0 auto 0 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 40px 0 40px;
  text-align: justify;
}

.diploma {
  font-family: "Roboto";
  font-weight: 400;
  font-size: medium;
  margin: 0;
}

.date {
  font-family: "Roboto";
  font-weight: 100;
  font-size: medium;
  margin: 0;
  color: #3e3e3e;
}

.description {
  font-family: "Roboto";
  font-weight: 300;
  font-size: medium;
}

.footer {
  margin-top: 20px;
}

.link {
  color: rgb(0, 132, 255);
  text-decoration: none;
}
</style>
