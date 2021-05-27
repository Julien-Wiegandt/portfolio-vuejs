<template>
  <div class="presentation">
    <h1 class="title">Julien Wiegandt</h1>
    <div class="content">
      <div class="img">
        <img
          src="../assets/photo_cv_png.png"
          alt="Julien Wiegandt's photography"
          class="img--rounded"
        />
      </div>

      <div class="text">
        <p>
          Je me présente ! Julien Wiegandt enchanté, je suis un élève ingénieur en 4ème
          année à Polytech en Informatique.
        </p>
        <p>
          Je me passionne pour le developpement web, je me spécialise donc de plus en plus
          vers la fonction de developpeur FullStack.
        </p>
        <p>
          J’adore travailler, le sport et les voyages. J’ai habité en Allemagne, à Tahiti,
          en Nouvelle-Calédonie, au Congo, maintenant en France et en préparation pour le
          Canada !
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.presentation {
  height: auto;
}
.img--rounded {
  border-radius: 50%;
  border: 1px solid #333333;
  width: 200px;
  height: 200px;
}
.img {
  display: flex;
  align-items: center;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
.text {
  width: 410px;
}
.title {
  margin: 0;
  padding-top: 60px;
  margin-bottom: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  text-transform: uppercase;
}
</style>
