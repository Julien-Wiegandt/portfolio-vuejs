<template>
  <a
    :href="link"
    class="project-card"
    v-bind:class="{ marginTop: marginTop }"
    target="_blank"
  >
    <img :src="require(`@/assets/${image}`)" alt="project image" />
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
    title: { type: String, required: true, default: "Title" },
    description: { type: String, required: true, default: "Description" },
    image: { type: String, required: false },
    marginTop: { type: Boolean, required: true, default: false },
    link: { type: String, required: true },
  },
};
</script>

<style scoped>
p {
  margin: 0;
}

.project-card {
  display: block;
  width: 250px;
  height: 350px;
  margin: 9px;
  margin-top: 40px;
  text-decoration: none;
  background-color: rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
}

.marginTop {
  margin-top: 120px;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation-name: card_img_animation-reverse;
  animation-duration: 0.4s;
  vertical-align: middle;
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
  margin-top: 105%;
  text-transform: uppercase;
  font-size: larger;
  font-family: "Roboto";
  font-weight: 500;
  color: transparent;
}

.project-card:hover .card__text__title {
  margin-top: 95%;
  transition-duration: 0.4s;
  color: #ffffff;
}
.project-card:hover .card__text__description {
  display: block;
  transition-duration: 0.4s;
}

.project-card:hover img {
  animation-name: card_img_animation;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
}

.card__text__description {
  margin-top: 3%;
  padding: 10px;
  display: none;
  transition-duration: 0.4s;
  font-size: 14px;
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
    opacity: 0.6;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

@media screen and (max-width: 900px) {
  .project-card {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 800px) {
  .card__text__title {
    font-size: large;
  }
  .card__text__description {
    font-size: small;
  }
}

@media screen and (max-width: 700px) {
  .project-card:hover .card__text__title {
    margin-top: 85%;
    transition-duration: 0.4s;
  }
}

@media screen and (max-width: 600px) {
  .card__text__title {
    font-size: xx-large;
  }
  .card__text__description {
    font-size: large;
  }
  .project-card:hover .card__text__title {
    margin-top: 95%;
    transition-duration: 0.4s;
  }
  .marginTop {
    margin-top: 40px;
  }
}

@media screen and (max-width: 500px) {
  .project-card:hover .card__text__title {
    margin-top: 95%;
    transition-duration: 0.4s;
  }
}

@media screen and (max-width: 400px) {
  .card__text__title {
    font-size: x-large;
  }
  .card__text__description {
    font-size: medium;
  }
  .card__text__title {
    margin-top: 90%;
  }
  .project-card:hover .card__text__title {
    margin-top: 95%;
    transition-duration: 0.4s;
  }
}

@media screen and (max-width: 350px) {
  .card__text__title {
    font-size: x-large;
  }
  .card__text__description {
    font-size: medium;
  }
}
</style>
