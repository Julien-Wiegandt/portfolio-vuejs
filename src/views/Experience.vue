<template>
  <div class="experience">
    <Banner :title="$t('banner_experience')" image="experience.png" />
    <div class="content">
      <ExperienceCard
        image="experience-waalaxy.png"
        link="https://www.waalaxy.com/?o=noztncwxmjyr"
        :title="$t('exp5_title')"
        :company="$t('exp5_company')"
        :date="$t('exp5_date')"
        :location="$t('exp5_location')"
        :description="$t('exp5_content')"
      />
      <span class="line" />
      <ExperienceCard
        image="experience-codein.png"
        link="https://www.codein.fr/"
        :title="$t('exp4_title')"
        :company="$t('exp4_company')"
        :date="$t('exp4_date')"
        :location="$t('exp4_location')"
        :description="$t('exp4_content')"
      />
      <span class="line" />
      <!-- <ExperienceCard
        image="experience-agence-regionale-de-sante.png"
        :title="$t('exp3_title')"
        :company="$t('exp3_company')"
        :date="$t('exp3_date')"
        :location="$t('exp3_location')"
        :description="$t('exp3_content')"
      />
      <span class="line" /> -->
      <ExperienceCard
        image="experience-aip-primeca.png"
        link="https://www.aip-primeca-occitanie.fr/"
        :title="$t('exp2_title')"
        :company="$t('exp2_company')"
        :date="$t('exp2_date')"
        :location="$t('exp2_location')"
        :description="$t('exp2_content')"
        margin-top="18"
      />
      <!-- <span class="line" />
      <ExperienceCard
        image="experience-societe-generale.png"
        :title="$t('exp1_title')"
        :company="$t('exp1_company')"
        :date="$t('exp1_date')"
        :location="$t('exp1_location')"
        :description="$t('exp1_content')"
      /> -->
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
