<template>
  <div class="projects">
    <Banner title="Projects" image="projects.png" />
    <div class="content">
      <div class="column__left">
        <ProjectCard
          title="Todo list API"
          description="Node.js Express.js Sequelize PostgreSQL backend application providing secure REST API."
          image="project-todo-nesp.png"
          link="https://todo-node-express-postgresql.herokuapp.com/api-docs/"
        />
        <ProjectCard
          title="Find BS"
          description="Django fullstack application to connect parents and babysitters."
          image="project-findbs.png"
          link="https://findbs.herokuapp.com/"
        />
      </div>
      <div class="column__center">
        <ProjectCard
          title="Todo React"
          description="React frontend application using my todo list REST API."
          image="project-todo-react-redux.png"
          margin-top="120"
          link="https://wiegandt-todo-node-react.herokuapp.com/"
        />
      </div>
      <div class="column__right">
        <ProjectCard
          title="Todo Angular"
          description="In progress..."
          image="project-todo-angular.png"
          link="#"
        />
      </div>
    </div>
    <!-- <Banner title="Work In Progress" image="work-in-progress.png" /> -->
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard";
import Banner from "../components/Banner";

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
</style>
