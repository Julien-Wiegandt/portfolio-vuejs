<template>
    <div class="experience-card" @click="openLink">

    <img :src="require(`@/assets/${image}`)" :style="marginStyle" alt="company image" />

    <div class="text">

      <p class="title">{{ title }}</p>

      <p class="info">{{ company }}</p>

      <p class="info">{{ date }}</p>

      <p class="info">{{ location }}</p>

      <p class="description">{{ description }}</p>

    </div>

  </div>
</template>

<script>
    export default {
  name: "ExperienceCard",
  props: {
    image: { type: String, required: true },
    link: { type: String, required: false},
    title: { type: String, required: true },
    company: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    marginTop: { type: Number, required: false, default: 30 },
  },
  computed: {
    marginStyle() {
      return {
        "margin-top": `${this.marginTop}px`,
      };
    },
  },methods: {
        openLink: function() {
          window.open(this.link,'_blank');
        }
    }};

</script>

<style scoped>
.experience-card {
  width: 700px;
  height: 200px;
  margin: 40px;
  display: flex;
  justify-content: space-around;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: rgb(250, 250, 250, 0.1);
  backdrop-filter: blur(7.24267px);
  border-radius: 12px;

  :hover {
    cursor: pointer;
  }
}

.link{
  text-decoration: none;
  color: black;
}

img {
  height: 70px;
  width: 70px;
  object-fit: contain;
  margin: 20px 25px 0px 25px;
  border-radius: 12px;
}

.text {
  text-align: left;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-family: "Roboto";
  font-weight: 500;
  margin: 0;
}

.info {
  font-family: "Roboto";
  font-weight: 400;
  color: #3e3e3e;
  margin: 0;
}

.description {
  font-family: "Roboto";
  font-weight: 400;
}

@media screen and (max-width: 700px) {
  .experience-card {
    width: 90%;
  }
}

@media screen and (max-width: 500px) {
  .experience-card {
    height: 150px;
    width: 96%;
  }
  .title {
    font-size: smaller;
  }
  .info {
    font-size: smaller;
  }
  .description {
    font-size: smaller;
  }
}

@media screen and (max-width: 400px) {
  .title {
    font-size: small;
  }
  .info {
    font-size: small;
  }
  .description {
    font-size: small;
  }
}

@media screen and (max-width: 375px) {
  .experience-card {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    /* padding-top: 10px; */
    margin-top: 10px !important;
    margin-left: 10px;
  }
}
</style>

