<template>
  <footer>
    <p class="title">Contact</p>
    <img src="../assets/contact.png" alt="contact image" />
    <div class="icons">
      <Icon image="icon-email.png" link="mailto:julienwiegandt@gmail.com" />
      <Icon image="icon-github.png" link="https://github.com/Julien-Wiegandt" />
    </div>
    <div class="icons">
      <Icon image="icon-phone.png" link="tel:+33634087380" />
      <Icon image="icon-twitter.png" link="https://twitter.com/julien_wiegandt" />
    </div>
    <div class="icons">
      <Icon
        image="icon-linkedin.png"
        link="https://www.linkedin.com/in/julien-wiegandt/"
      />
      <Icon
        image="icon-maps.png"
        link="https://maps.google.com/?q=43.6112422, 3.8767337"
      />
    </div>
  </footer>
</template>

<script>
import Icon from "./Icon";
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
  position: relative;
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
