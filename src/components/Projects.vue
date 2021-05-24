<template>
  <div class="projects">
    <div class="title">
      <img src="../assets/projects.png" alt="projects title" />
    </div>
    <div class="content">
      <div class="column__left">
        <a href="https://www.codein.fr/nos-realisations" class="card">
          <img src="../assets/project-1.jpg" alt="project 1" />
          <div class="card__text">
            <div class="card__text__title"><p>Todo JEE</p></div>
            <div class="card__text__description">
              <p>
                To Do liste très simple, qui m’a permis de toucher au developpement JEE.
              </p>
            </div>
          </div>
        </a>
        <a href="https://www.codein.fr/nos-realisations" class="card">
          <img src="../assets/project-1.jpg" alt="project 1" />
          <div class="card__text">
            <div class="card__text__title"><p>Todo JEE</p></div>
            <div class="card__text__description">
              <p>
                To Do liste très simple, qui m’a permis de toucher au developpement JEE.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="column__center">
        <a
          href="https://www.codein.fr/nos-realisations"
          class="card"
          id="card__center__first"
        >
          <img src="../assets/project-1.jpg" alt="project 1" />
          <div class="card__text">
            <div class="card__text__title"><p>Todo JEE</p></div>
            <div class="card__text__description">
              <p>
                To Do liste très simple, qui m’a permis de toucher au developpement JEE.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div class="column__right">
        <a href="https://www.codein.fr/nos-realisations" class="card">
          <img src="../assets/project-1.jpg" alt="project 1" />
          <div class="card__text">
            <div class="card__text__title"><p>Todo JEE</p></div>
            <div class="card__text__description">
              <p>
                To Do liste très simple, qui m’a permis de toucher au developpement JEE.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>

<style scoped>
p {
  margin: 0;
}
.projects {
  margin-top: 50px;
}
.title {
  background: #f7f7f7;
}

.title img {
  width: 700px;
}
.content {
  display: flex;
  width: auto;
  justify-content: space-evenly;
}
.column__left {
  width: 30%;
}
.column__center {
  width: 30%;
}
.column__right {
  width: 30%;
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

#card__center__first {
  margin-top: 120px;
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
  color: #ffffff;
}
.card__text__title {
  margin-top: 95%;
  font-size: x-large;
  font-family: "Roboto";
  font-weight: 400;
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
  font-weight: 300;
}

@keyframes card_img_animation {
  from {
    opacity: 1;
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  to {
    opacity: 0.7;
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
