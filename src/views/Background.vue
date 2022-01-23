<template
  ><div class="dynamic-background">
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
  /* border: 2px solid rgba(51, 133, 255, 0.7); */
  border-radius: 50px;
  position: absolute;
  top: 10%;
  left: 10%;
  animation: animate 4s linear infinite;
}
.dynamic-background img:nth-child(1) {
  top: 100%;
  left: 20%;
  animation: animate 20s linear infinite;
}
.dynamic-background img:nth-child(2) {
  top: 100%;
  left: 85%;
  animation: animate 21s linear infinite;
}
.dynamic-background img:nth-child(3) {
  top: 100%;
  left: 60%;
  animation: animate 22s linear infinite;
}
.dynamic-background img:nth-child(4) {
  top: 100%;
  left: 10%;
  animation: animate 23s linear infinite;
}
.dynamic-background img:nth-child(5) {
  top: 100%;
  left: 50%;
  animation: animate 24s linear infinite;
}
.dynamic-background img:nth-child(6) {
  top: 100%;
  left: 80%;
  animation: animate 25s linear infinite;
}
.dynamic-background img:nth-child(7) {
  top: 100%;
  left: 30%;
  animation: animate 26s linear infinite;
}
.dynamic-background img:nth-child(8) {
  top: 100%;
  left: 90%;
  animation: animate 27s linear infinite;
}
.dynamic-background img:nth-child(9) {
  top: 100%;
  left: 60%;
  animation: animate 28s linear infinite;
}
.dynamic-background img:nth-child(10) {
  top: 100%;
  left: 10%;
  animation: animate 29s linear infinite;
}
.dynamic-background img:nth-child(11) {
  top: 100%;
  left: 40%;
  animation: animate 30s linear infinite;
}
.dynamic-background img:nth-child(12) {
  top: 100%;
  left: 70%;
  animation: animate 31s linear infinite;
}
.dynamic-background img:nth-child(13) {
  top: 100%;
  left: 10%;
  animation: animate 32s linear infinite;
}
.dynamic-background img:nth-child(14) {
  top: 100%;
  left: 90%;
  animation: animate 33s linear infinite;
}
.dynamic-background img:nth-child(15) {
  top: 100%;
  left: 45%;
  animation: animate 34s linear infinite;
}
.dynamic-background img:nth-child(16) {
  top: 100%;
  left: 40%;
  animation: animate 35s linear infinite;
}
.dynamic-background img:nth-child(17) {
  top: 100%;
  left: 70%;
  animation: animate 36s linear infinite;
}
@keyframes animate {
  0% {
    transform: scale(1) translateY(0) rotate(10deg);
  }
  100% {
    transform: scale(1) translateY(-5200px) rotate(800deg);
  }
}
</style>
