<template
  ><a href="https://www.codein.fr/nos-realisations" :style="marginStyle" class="card">
    <img :src="require(`@/assets/${image}`)" alt="project 1" />
    <div class="card__text">
      <div class="card__text__title">
        <p>{{ title }}</p>
      </div>
      <div class="card__text__description">
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: { default: "Title" },
    description: { default: "Description" },
    image: {},
    marginTop: { type: Number, default: 40 },
  },
  computed: {
    marginStyle() {
      return {
        "margin-top": `${this.marginTop}px`,
      };
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.card {
  display: block;
  width: auto;
  height: 282.359px;
  margin: 9px;
  margin-top: 40px;
  text-decoration: none;
  background-color: rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
}

.card img {
  width: 200px;
  animation-name: card_img_animation-reverse;
  animation-duration: 0.4s;
}
.card__text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: rgb(255, 255, 255);
}
.card__text__title {
  margin-top: 95%;
  text-transform: uppercase;
  font-size: larger;
  font-family: "Roboto";
  font-weight: 500;
}

.card:hover .card__text__title {
  margin-top: 85%;
  transition-duration: 0.4s;
}
.card:hover .card__text__description {
  display: block;
  transition-duration: 0.4s;
}

.card:hover img {
  animation-name: card_img_animation;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.card__text__description {
  margin-top: 5%;
  padding: 10px;
  display: none;
  transition-duration: 0.4s;
  font-size: small;
  font-family: "Roboto";
  font-weight: 400;
}

@keyframes card_img_animation {
  from {
    opacity: 1;
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  to {
    opacity: 0.6;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
}

@keyframes card_img_animation-reverse {
  from {
    opacity: 0.7;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
