<template>
  <div class="education">
    <Banner :title="$t('banner_education')" image="formation.png" />
    <div class="content">
      <EducationCard
        :title="$t('sherbrooke_title')"
        image="formation-universite-sherbrooke-2.jpg"
        :diploma="$t('sherbrooke_diploma')"
        :date="$t('sherbrooke_date')"
        :description="$t('sherbrooke_content')"
        link="https://www.usherbrooke.ca/admission/programme/651/maitrise-en-genie-logiciel"
      />
      <img src="../assets/icon-arrow-up.png" />
      <EducationCard
        :title="$t('polytech_title')"
        image="formation-polytech.png"
        :diploma="$t('polytech_diploma')"
        :date="$t('polytech_date')"
        :description="$t('polytech_content')"
        link="https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/informatique-et-gestion"
      />
      <img src="../assets/icon-arrow-up.png" />
      <EducationCard
        :title="$t('iut_title')"
        image="formation-iut-blagnac.png"
        :diploma="$t('iut_diploma')"
        :date="$t('iut_date')"
        :description="$t('iut_content')"
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
