<template>
  <div class="presentation">
    <h1 class="title">Julien Wiegandt</h1>
    <LanguageSelector />
    <div class="content">
      <div class="img">
        <img
          src="../assets/photo_linkedin.png"
          alt="Julien Wiegandt's photography"
          class="img-pro img--rounded"
        />
        <img
          src="../assets/photo-fun-3.jpg"
          alt="Julien Wiegandt's photography"
          class="img-fun img--rounded"
        />
      </div>

      <div class="text">
        <p>
          {{ $t("presentation1") }}
        </p>
        <p>
          {{ $t("presentation2") }}
        </p>
        <p>
          {{ $t("presentation3") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSelector from "../components/LanguageSelector.vue";
export default {
  name: "Presentation",
  components: {
    LanguageSelector,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-family: "Roboto";
  font-weight: 400;
  text-align: start;
}
.presentation {
  height: auto;
}
.img--rounded {
  border-radius: 50%;
  border: 1px solid #f7f7f7;
  background-color: #fff;
  width: 200px;
  height: 200px;
}
.img {
  display: flex;
  align-items: center;
  position: relative;
}
.img-pro {
  opacity: 1;
  transition: opacity 0.75s ease;
}

.img-fun {
  opacity: 0;
  transition: opacity 0.75s ease;
  position: absolute;
}
.content {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
}
.text {
  width: 410px;
  padding: 20px 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: rgb(250, 250, 250, 0.1);
  backdrop-filter: blur(7.24267px);
  border-radius: 12px;
}
.title {
  margin: 0;
  padding-top: 60px;
  margin-bottom: 26px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  text-transform: uppercase;
}

.img:hover .img-pro {
  opacity: 0;
  transition: opacity 0.75s ease;
}

.img:hover .img-fun {
  opacity: 1;
  transition: opacity 0.75s ease;
}

@media screen and (max-width: 600px) {
  .content {
    width: 90%;
  }
}

@media screen and (max-width: 700px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }
  .text {
    margin-top: 20px;
    width: 100%;
    padding: 0;
  }
  p {
    padding: 10px;
    font-size: small;
  }
  .img {
    margin-top: 26px;
  }
}
</style>
