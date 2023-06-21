<template>
  <div class="projects">
    <Banner :title="$t('banner_projects')" image="projects.png" />
    <div class="content">
      <div class="column__left">
        <ProjectCard
          :title="$t('waalaxy_project_title')"
          :description="$t('waalaxy_project_content')"
          image="project-waalaxy.png"
          link="https://www.waalaxy.com/?o=noztncwxmjyr"
        />
        <ProjectCard
          :title="$t('todoreact_project_title')"
          :description="$t('todoreact_project_content')"
          image="project-todo-react-redux.png"
          link="https://wiegandt-todo-node-react.herokuapp.com/"
        />
        <ProjectCard
          :title="$t('findbs_project_title')"
          :description="$t('findbs_project_content')"
          image="project-findbs.png"
          link="https://findbs.herokuapp.com/"
        />    
      </div>
      <div class="column__center">
        <ProjectCard
          :title="$t('oppbtp_project_title')"
          :description="$t('oppbtp_project_content')"
          image="project-oppbtp.png"
          margin-top="120"
          link="https://www.preventionbtp.fr/"
        />
        <ProjectCard
          :title="$t('todoapi_project_title')"
          :description="$t('todoapi_project_content')"
          image="project-todo-nesp-api.png"
          link="https://todo-node-express-postgresql.herokuapp.com/api-docs/"
        />
      </div>
      <div class="column__right">
        <ProjectCard
          :title="$t('realestate_project_title')"
          :description="$t('realestate_project_content')"
          image="project-realestate.png"
          link="https://github.com/Julien-Wiegandt/RealEstate-android-app"
        />
        <ProjectCard
          :title="$t('splitpay_project_title')"
          :description="$t('splitpay_project_content')"
          image="project-splitpay.png"
          link="https://github.com/Julien-Wiegandt/SplitPay"
        />
        
      </div>
    </div>
    <!-- <Banner title="Work In Progress" image="work-in-progress.png" /> -->
  </div>
</template>

<script>
import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";

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
@media screen and (max-width: 600px) {
  .content {
    flex-direction: column;
    align-content: center;
  }
  .column__left {
    width: 80%;
    margin: auto;
  }
  .column__center {
    width: 80%;
    margin: auto;
  }
  .column__right {
    width: 80%;
    margin: auto;
  }
}
</style>
