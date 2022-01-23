<template>
  <footer>
    <p class="title">Contact</p>
    <img src="../assets/contact.png" alt="contact image" />
    <div class="icons">
      <Icon image="3D_email.png" link="mailto:julienwiegandt@gmail.com" alt="Email" />
      <Icon
        image="icon-github.png"
        link="https://github.com/Julien-Wiegandt"
        alt="GitHub"
      />
    </div>
    <div class="icons">
      <Icon image="3D_phone.png" link="tel:+33634087380" alt="Phone" />
      <Icon
        image="3D_twitter2.png"
        link="https://twitter.com/julien_wiegandt"
        alt="Twitter"
      />
    </div>
    <div class="icons">
      <Icon
        image="3D_linkedin.png"
        link="https://www.linkedin.com/in/julien-wiegandt/"
        alt="LinkedIn"
      />
      <Icon
        image="3D_document.png"
        link="../assets/Julien_Wiegandt-resume.pdf"
        alt="CV"
        download="Julien_Wiegandt-resume.pdf"
      />
    </div>
  </footer>
</template>

<script>
import Icon from "../components/Icon";
export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  height: 200px;
  background-color: #f6f6f6;
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
  img {
    display: none;
  }
}

@media screen and (max-width: 500px) {
  .title {
    display: none;
  }
}
</style>
