<template>
  <div class="experience">
    <Banner title="Expérience" image="experience.png" />
    <div class="content">
      <ExperienceCard
        image="experience-codein.png"
        title="Développeur Frontend React"
        company="Codéin - Stage"
        date="Juin 2021 - 3 mois"
        location="Montpellier, Occitanie, France"
        description="Developpeur frontend React sur le projet de refonte complète du frontend de l'entreprise oppbtp."
      />
      <span class="line" />
      <ExperienceCard
        image="experience-agence-regionale-de-sante.png"
        title="Responsable d’un numéro vert"
        company="Agence régionale de santé - Auxiliaire de vacance"
        date="Juillet 2019 - 1 mois"
        location="Montpellier, Occitanie, France"
        description="Responsable d’un numéro vert concernant des taux d’arsenic élevé dans l’Aude."
      />
      <span class="line" />
      <ExperienceCard
        image="experience-aip-primeca.png"
        title="Administrateur de parc machine"
        company="AIP-PRIMECA - Stage"
        date="Avril 2019 - 2 mois"
        location="Toulouse, Occitanie, France"
        description="Chargé de la gestion d’un parc machine : déploiement de FOG, DHCP, serveur dédié."
        margin-top="18"
      />
      <span class="line" />
      <ExperienceCard
        image="experience-societe-generale.png"
        title="Auxiliaire de vacance"
        company="Société Générale - Job dété"
        date="Juillet 2019 - 1 mois"
        location="Montpellier, Occitanie, France"
        description="Prise en charge des clients en irrégularités, vérification de documents juridiques."
      />
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import ExperienceCard from "./ExperienceCard";

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
