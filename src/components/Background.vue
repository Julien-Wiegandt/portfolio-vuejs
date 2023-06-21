<template>
  <div class="dynamic-background">
    <img src="../assets/3D_check.png" />
    <img src="../assets/3D_spotify.png" />
    <img src="../assets/3D_youtube.png" />
    <img src="../assets/3D_google.png" />
    <img src="../assets/3D_google2.png" />
    <img src="../assets/3D_cloud.png" />
    <img src="../assets/3D_colors.png" />
    <img src="../assets/3D_connection.png" />
    <img src="../assets/3D_folder3.png" />
    <img src="../assets/3D_messenger2.png" />
    <img src="../assets/3D_netflix.png" />
    <img src="../assets/3D_slack.png" />
    <img src="../assets/3D_sport.png" />
    <img src="../assets/3D_twitter2.png" />
    <img src="../assets/3D_uber2.png" />
    <img src="../assets/3D_whatsapp.png" />
    <img src="../assets/3D_youtube2.png" />
    <img src="../assets/3D_emoji.png" />
    <img src="../assets/3D_chat1.png" />
  </div>
</template>

<script>
export default {
  name: "Background",
  components: {},
};
</script>

<style scoped>
.dynamic-background {
  height: 100%;
  width: 100%;
  position: absolute;
}

.dynamic-background img {
  height: 60px;
  width: 60px;
  border-radius: 50px;
  position: absolute;
  top: 100%;
  left: 10%;
  animation: animate5000 4s linear infinite;
}
.dynamic-background img:nth-child(1) {
  top: 100%;
  left: 20%;
  animation: animate5000 20s linear infinite;
}
.dynamic-background img:nth-child(2) {
  top: 100%;
  left: 85%;
  animation: animate5000 21s linear infinite;
}
.dynamic-background img:nth-child(3) {
  top: 100%;
  left: 60%;
  animation: animate5000 22s linear infinite;
}
.dynamic-background img:nth-child(4) {
  top: 100%;
  left: 15%;
  animation: animate5000 23s linear infinite;
}
.dynamic-background img:nth-child(5) {
  top: 100%;
  left: 50%;
  animation: animate5000 24s linear infinite;
}
.dynamic-background img:nth-child(6) {
  top: 100%;
  left: 80%;
  animation: animate5000 25s linear infinite;
}
.dynamic-background img:nth-child(7) {
  top: 100%;
  left: 5%;
  animation: animate5000 25.5s linear infinite;
}
.dynamic-background img:nth-child(8) {
  top: 100%;
  left: 30%;
  animation: animate5000 26s linear infinite;
}
.dynamic-background img:nth-child(9) {
  top: 100%;
  left: 90%;
  animation: animate5000 27s linear infinite;
}
.dynamic-background img:nth-child(10) {
  top: 100%;
  left: 65%;
  animation: animate5000 28s linear infinite;
}
.dynamic-background img:nth-child(11) {
  top: 100%;
  left: 55%;
  animation: animate5000 29s linear infinite;
}
.dynamic-background img:nth-child(12) {
  top: 100%;
  left: 40%;
  animation: animate5000 30s linear infinite;
}
.dynamic-background img:nth-child(13) {
  top: 100%;
  left: 70%;
  animation: animate5000 31s linear infinite;
}
.dynamic-background img:nth-child(14) {
  top: 100%;
  left: 60%;
  animation: animate5000 32s linear infinite;
}
.dynamic-background img:nth-child(15) {
  top: 100%;
  left: 94%;
  animation: animate5000 33s linear infinite;
}
.dynamic-background img:nth-child(16) {
  top: 100%;
  left: 45%;
  animation: animate5000 34s linear infinite;
}
.dynamic-background img:nth-child(17) {
  top: 100%;
  left: 25%;
  animation: animate5000 35s linear infinite;
}
.dynamic-background img:nth-child(18) {
  top: 100%;
  left: 75%;
  animation: animate5000 36s linear infinite;
}
.dynamic-background img:nth-child(19) {
  top: 100%;
  left: 0%;
  animation: animate5000 37s linear infinite;
}

@media screen and (max-width: 600px) {
  .dynamic-background img {
    animation: animate7000 4s linear infinite;
  }
  .dynamic-background img:nth-child(1) {
    animation: animate7000 25s linear infinite;
  }
  .dynamic-background img:nth-child(2) {
    animation: animate7000 26s linear infinite;
  }
  .dynamic-background img:nth-child(3) {
    animation: animate7000 27s linear infinite;
  }
  .dynamic-background img:nth-child(4) {
    animation: animate7000 28s linear infinite;
  }
  .dynamic-background img:nth-child(5) {
    animation: animate7000 29s linear infinite;
  }
  .dynamic-background img:nth-child(6) {
    animation: animate7000 30s linear infinite;
  }
  .dynamic-background img:nth-child(7) {
    animation: animate7000 30.5s linear infinite;
  }
  .dynamic-background img:nth-child(8) {
    animation: animate7000 31s linear infinite;
  }
  .dynamic-background img:nth-child(9) {
    animation: animate7000 32s linear infinite;
  }
  .dynamic-background img:nth-child(10) {
    animation: animate7000 33s linear infinite;
  }
  .dynamic-background img:nth-child(11) {
    animation: animate7000 34s linear infinite;
  }
  .dynamic-background img:nth-child(12) {
    animation: animate7000 35s linear infinite;
  }
  .dynamic-background img:nth-child(13) {
    animation: animate7000 36s linear infinite;
  }
  .dynamic-background img:nth-child(14) {
    animation: animate7000 37s linear infinite;
  }
  .dynamic-background img:nth-child(15) {
    animation: animate7000 38s linear infinite;
  }
  .dynamic-background img:nth-child(16) {
    animation: animate7000 39s linear infinite;
  }
  .dynamic-background img:nth-child(17) {
    animation: animate7000 40s linear infinite;
  }
  .dynamic-background img:nth-child(18) {
    animation: animate7000 41s linear infinite;
  }
  .dynamic-background img:nth-child(19) {
    animation: animate7000 42s linear infinite;
  }
}

@keyframes animate5000 {
  0% {
    transform: scale(1) translateY(0) rotate(0deg);
  }
  100% {
    transform: scale(1) translateY(-5200px) rotate(800deg);
  }
}

@keyframes animate7000 {
  0% {
    transform: scale(1) translateY(0) rotate(0deg);
  }
  100% {
    transform: scale(1) translateY(-7700px) rotate(800deg);
  }
}
</style>
