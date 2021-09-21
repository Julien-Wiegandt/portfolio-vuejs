<template>
  <div class="education">
    <Banner title="Education" image="formation.png" />
    <div class="content">
      <EducationCard
        title="Sherbrooke University"
        image="formation-universite-sherbrooke-2.jpg"
        diploma="Master's Degree in Software Engineering"
        date="2021-2022"
        description="I am doing a double degree in Sherbrooke, Canada. I am deepening my knowledge in software engineering to specialize in this field. This international experience is a great opportunity to discover the culture, the work in companies and the beautiful Canadian landscapes."
        link="https://www.usherbrooke.ca/admission/programme/651/maitrise-en-genie-logiciel"
      />
      <img src="../assets/icon-arrow-up.png" />
      <EducationCard
        title="Polytech Montpellier"
        image="formation-polytech.png"
        diploma="Engineer in Computer Science & Management"
        date="2019-2022"
        description="I am in my 5th year of engineering school in the field of Computer Science and Management. I am learning to think before acting, to solve problems in general but especially to increase my knowledge in computer science and project management."
        link="https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/informatique-et-gestion"
      />
      <img src="../assets/icon-arrow-up.png" />
      <EducationCard
        title="Blagnac University Institute of Technology"
        image="formation-iut-blagnac.png"
        diploma="Associate's Degree in Computer Science & Management"
        date="2017-2019"
        description="I learned the main programming languages by participating in many team projects, I was admitted in 'English class' which allowed me to follow some courses in English."
        link="https://www.iut-blagnac.fr/fr/formations/dut-informatique"
      />
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import EducationCard from "../components/EducationCard";

export default {
  name: "Education",
  components: {
    Banner,
    EducationCard,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.education img {
  width: 50px;
}
</style>
