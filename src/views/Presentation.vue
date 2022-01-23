<template>
  <div class="presentation">
    <h1 class="title">Julien Wiegandt</h1>
    <div class="content">
      <div class="img">
        <img
          src="../assets/cv_image.jpg"
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
          Let me introduce myself! Julien Wiegandt pleased to meet you, I am a student
          engineer in 5th year at Polytech Montpellier, France, in Computer Science and
          Management. I'm also currently doing a master's degree in software engineering
          at the University of Sherbrooke, Canada.
        </p>
        <p>
          I am passionate about projects on beautiful digital tools. That's why I'm very
          interested in web/mobile development, UX/UI design and project management.
        </p>
        <p>
          I love working, sports and traveling. I have lived in Germany, Tahiti, New
          Caledonia, Congo, France and now Canada!
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
p {
  font-family: "Roboto";
  font-weight: 400;
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
}
.text {
  width: 410px;
  padding: 10px;
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

.img:hover .img-pro {
  opacity: 0;
  transition: opacity 0.75s ease;
}

.img:hover .img-fun {
  opacity: 1;
  transition: opacity 0.75s ease;
}

@media screen and (max-width: 500px) {
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
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
}
</style>
