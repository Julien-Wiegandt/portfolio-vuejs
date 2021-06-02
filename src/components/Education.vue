<template>
  <div class="education">
    <Banner title="Formation" image="formation.png" />
    <div class="content">
      <EducationCard
        title="Polytech Montpellier"
        image="formation-polytech.png"
        diploma="Ingénieur en Informatique et Gestion"
        date="2019-2022"
        description="Je suis en 4ème année d’école d’ingénieur dans la filière Informatique et Gestion. J’y apprend à réfléchir avant d’agir, à résoudre des problèmes en général mais surtout à accroitre mes connaissances dans l’informatique ainsi que dans la gestion d’entreprise."
        link="https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/informatique-et-gestion"
      />
      <img src="../assets/icon-arrow-up.png" />
      <EducationCard
        title="IUT de Blagnac"
        image="formation-iut-blagnac.png"
        diploma="DUT en Informatique et Gestion"
        date="2017-2019"
        description="J'ai obtenu un DUT en informatique et gestion à Blagnac, j'y ai appris les principaux langages de programmation en participant à de nombreux projets d'équipe, j'ai été admis en classe anglais ce qui m'a permis de suivre certains cours en anglais."
        link="https://www.iut-blagnac.fr/fr/formations/dut-informatique"
      />
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import EducationCard from "./EducationCard";

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
