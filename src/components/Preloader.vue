<template>
  <div class="container" v-bind:class="{ load: loaded, fullLoaded: fullLoaded }">
    <div class="preloader" v-bind:class="{ loader: loaded }">
      <figure>
        <div class="dot white"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
  data() {
    return {
      loaded: false,
      fullLoaded: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 1600);

    setTimeout(() => {
      this.fullLoaded = true;
    }, 2000);
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  z-index: 9998;
}

.load {
  animation-name: loaded;
  animation-duration: 1.2s;
  animation-iteration-count: 1;
  animation-direction: normal;
}

.fullLoaded {
  display: none;
}

.preloader {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  z-index: 9999;
  display: flex;
  justify-content: center;
}

.loader {
  display: none;
}

figure {
  position: fixed;
  top: calc(50vh - 50px);
  width: 6.25em;
  height: 6.25em;
  animation: rotate 2.4s linear infinite;
}
.white {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  animation: flash 2.4s linear infinite;
  opacity: 0;
}
.dot {
  position: absolute;
  margin: auto;
  width: 2.4em;
  height: 2.4em;
  border-radius: 100%;
  transition: all 1s ease;
}
.dot:nth-child(2) {
  top: 0;
  bottom: 0;
  left: 0;
  background: #ff4444;
  animation: dotsY 2.4s linear infinite;
}
.dot:nth-child(3) {
  left: 0;
  right: 0;
  top: 0;
  background: #ffbb33;
  animation: dotsX 2.4s linear infinite;
}
.dot:nth-child(4) {
  top: 0;
  bottom: 0;
  right: 0;
  background: #99cc00;
  animation: dotsY 2.4s linear infinite;
}
.dot:nth-child(5) {
  left: 0;
  right: 0;
  bottom: 0;
  background: #33b5e5;
  animation: dotsX 2.4s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  10% {
    width: 6.25em;
    height: 6.25em;
  }
  66% {
    width: 2.4em;
    height: 2.4em;
  }
  100% {
    transform: rotate(360deg);
    width: 6.25em;
    height: 6.25em;
  }
}

@keyframes dotsY {
  66% {
    opacity: 0.1;
    width: 2.4em;
  }
  77% {
    opacity: 1;
    width: 0;
  }
}
@keyframes dotsX {
  66% {
    opacity: 0.1;
    height: 2.4em;
  }
  77% {
    opacity: 1;
    height: 0;
  }
}

@keyframes flash {
  33% {
    opacity: 0;
    border-radius: 0%;
  }
  55% {
    opacity: 0.6;
    border-radius: 100%;
  }
  66% {
    opacity: 0;
  }
}

@keyframes loaded {
  0% {
    background-color: #fff;
  }
  100% {
    background-color: transparent;
    display: none;
  }
}
</style>
