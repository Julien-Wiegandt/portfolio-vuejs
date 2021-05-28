<template>
  <div class="projects">
    <Banner title="Projets" image="projects.png" />
    <div class="content">
      <div class="column__left">
        <ProjectCard
          title="Todo React"
          description="Simple To Do list in React Redux connected to a DNSP Backend API."
          image="project-todo-react-redux.png"
          link="https://github.com/Julien-Wiegandt/todo-react-redux"
        />
      </div>
      <div class="column__center">
        <ProjectCard
          title="Todo Angular"
          description="Simple To Do list in Angular connected to the DNSP Backend API."
          image="project-todo-angular.png"
          margin-top="120"
          link="https://github.com/Julien-Wiegandt/todo-angular"
        />
      </div>
      <div class="column__right">
        <ProjectCard
          title="Todo DNSP"
          description="Simple To Do backend API using Docker - Node - Express - Sequelize - PostGres."
          image="project-todo-dnsp.png"
          link="https://github.com/Julien-Wiegandt/todo-dnsp"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard";
import Banner from "./Banner";

export default {
  name: "Projects",
  components: {
    ProjectCard,
    Banner,
  },
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

@media screen and (max-width: 900px) {
  .title img {
    width: 100%;
  }
}
</style>
