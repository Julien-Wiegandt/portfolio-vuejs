import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";

import en from "./assets/i18n/en.json";
import fr from "./assets/i18n/fr.json";

export const i18n = createI18n({
  locale: localStorage.getItem("lang") || "fr",
  messages: {
    en: en,
    fr: fr,
  },
});
createApp(App)
  .use(i18n)
  .mount("#app");
