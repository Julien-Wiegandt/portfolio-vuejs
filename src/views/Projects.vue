<template>
  <div class="projects">
    <Banner title="Projects" image="projects.png" />
    <div class="content">
      <div class="column__left">
        <ProjectCard
          title="Real Estate"
          description="Android app to manage real estate offers. Based on our Node.js REST API and the Google Maps API."
          image="project-realestate.png"
          link="https://github.com/Julien-Wiegandt/RealEstate-android-app"
        />
        <ProjectCard
          title="Split Pay"
          description="Complex Java application to easily pay a bill with several people."
          image="project-splitpay.png"
          link="https://github.com/Julien-Wiegandt/SplitPay"
        />
      </div>
      <div class="column__center">
        <ProjectCard
          title="To Do React"
          description="React frontend application using my to do list REST API."
          image="project-todo-react-redux.png"
          margin-top="120"
          link="https://wiegandt-todo-node-react.herokuapp.com/"
        />
        <ProjectCard
          title="Find BS"
          description="Django fullstack application to connect parents and babysitters."
          image="project-findbs.png"
          link="https://findbs.herokuapp.com/"
        />
      </div>
      <div class="column__right">
        <ProjectCard
          title="To Do API"
          description="Node.js Sequelize PostgreSQL backend application providing secure REST API."
          image="project-todo-nesp-api.png"
          link="https://todo-node-express-postgresql.herokuapp.com/api-docs/"
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
