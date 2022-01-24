<template>
  <footer>
    <p class="title">{{ $t("banner_contact") }}</p>
    <img src="../assets/contact.png" alt="contact image" class="dsc__img" />
    <div class="icons">
      <a href="mailto:julienwiegandt@gmail.com" class="icon">
        <img src="../assets/3D_email.png" alt="Email" />
      </a>
      <a href="https://github.com/Julien-Wiegandt" class="icon" target="_blank">
        <img src="../assets/icon-github.png" alt="GitHub" />
      </a>
    </div>
    <div class="icons">
      <a href="tel:+33634087380" class="icon">
        <img src="../assets/3D_phone.png" alt="Phone" />
      </a>
      <a href="https://twitter.com/julien_wiegandt" class="icon" target="_blank">
        <img src="../assets/3D_twitter2.png" alt="Twitter" />
      </a>
    </div>
    <div class="icons">
      <a href="https://www.linkedin.com/in/julien-wiegandt/" class="icon" target="_blank">
        <img src="../assets/3D_linkedin.png" alt="LinkedIn" />
      </a>
      <a :href="`${publicPath}Julien_Wiegandt-resume.pdf`" class="icon" download>
        <img src="../assets/3D_document.png" alt="CV" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 200px;
  /* background-color: #f6f6f6; */
  display: flex;
  justify-content: space-around;
}
.title {
  font-family: "Roboto";
  font-size: xx-large;
  text-transform: uppercase;
  font-weight: 300;
  text-shadow: 1px 0px rgb(190, 190, 190);
  margin-top: auto;
  margin-bottom: auto;
}
img {
  width: auto;
  height: 100%;
}

.icons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media screen and (max-width: 700px) {
  .dsc__img {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .title {
    display: none;
  }
}

.icon img {
  height: 45px;
}

.icon:hover img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}
.icon:active img {
  transform: scale(0.95);
  -webkit-transform: scale(0.95);
}
</style>
