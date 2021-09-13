<template>
  <div class="projects">
    <Banner title="Projets" image="projects.png" />
    <div class="content">
      <div class="column__left">
        <!-- <ProjectCard
          title="Todo React"
          description="Simple To Do list in React Redux connected to a DNSP Backend API."
          image="project-todo-react-redux.png"
          link="https://github.com/Julien-Wiegandt/todo-react-redux"
        /> -->
      </div>
      <div class="column__center">
        <!-- <ProjectCard
          title="Todo Angular"
          description="Simple To Do list in Angular connected to the DNSP Backend API."
          image="project-todo-angular.png"
          margin-top="120"
          link="https://github.com/Julien-Wiegandt/todo-angular"
        /> -->
      </div>
      <div class="column__right">
        <!-- <ProjectCard
          title="Todo DNSP"
          description="Simple To Do backend API using Docker - Node - Express - Sequelize - PostGres."
          image="project-todo-dnsp.png"
          link="https://github.com/Julien-Wiegandt/todo-dnsp"
        /> -->
      </div>
    </div>
    <Banner title="Work In Progress" image="work-in-progress.png" />
  </div>
</template>

<script>
// import ProjectCard from "./ProjectCard";
import Banner from "./Banner";

export default {
  name: "Projects",
  components: {
    // ProjectCard,
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
