import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";

import PrimeVue from "primevue/config";

import "./assets/tailwind.css";
import "./style.css"

const app = i18n(createApp(App));
app.use(PrimeVue, { theme: "none" });
app.mount("#app");
