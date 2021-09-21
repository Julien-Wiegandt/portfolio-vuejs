<template>
  <div class="experience">
    <Banner title="Experience" image="experience.png" />
    <div class="content">
      <ExperienceCard
        image="experience-codein.png"
        title="Frontend React developer"
        company="Codéin - Internship"
        date="June 2021 - 3 month"
        location="Montpellier, Occitanie, France"
        description="I realized 90% of the new web interface of the personnel management tool at OPP BTP (France) in React TypeScript."
      />
      <span class="line" />
      <ExperienceCard
        image="experience-agence-regionale-de-sante.png"
        title="Head of a toll-free number"
        company="Agence régionale de santé - Summer Assistant"
        date="July 2019 - 1 month"
        location="Montpellier, Occitanie, France"
        description="Responsible for a toll-free number concerning high arsenic levels in the Aude."
      />
      <span class="line" />
      <ExperienceCard
        image="experience-aip-primeca.png"
        title="Machine park administrator"
        company="AIP-PRIMECA - Internship"
        date="April 2019 - 2 month"
        location="Toulouse, Occitanie, France"
        description="I saved 30% of work time for the company's engineers, by implementing an OS image deployment tool (FOG project) on the machine park."
        margin-top="18"
      />
      <span class="line" />
      <ExperienceCard
        image="experience-societe-generale.png"
        title="Multi-skilled assistant"
        company="Société Générale - Summer assistant"
        date="July 2019 - 1 month"
        location="Montpellier, Occitanie, France"
        description="Handling of clients with irregularities, verification of legal documents."
      />
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import ExperienceCard from "../components/ExperienceCard";

export default {
  name: "Experience",
  components: {
    ExperienceCard,
    Banner,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  width: 400px;
  height: 1px;
  background-color: #b1b1b1;
}

@media screen and (max-width: 400px) {
  .line {
    width: 100%;
  }
}
</style>
