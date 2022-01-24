<template>
  <div>
    <button @click="handleChange('en')">
      <img src="../assets/uk_flag.png" alt="Change language to english" />
    </button>
    <button @click="handleChange('fr')">
      <img src="../assets/france_flag.png" alt="Change language to french" />
    </button>
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  methods: {
    handleChange(language) {
      localStorage.setItem("lang", language);
      window.location.reload();
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  gap: 20px;
}
button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #fff;
}
img {
  width: 30px;
  height: 30px;
}
button:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}
button:active {
  transform: scale(0.95);
  -webkit-transform: scale(0.95);
}
</style>
