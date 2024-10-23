import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import "./assets/tailwind.css";
import "./style.css";
import Menubar from "primevue/menubar";

const app = createApp(App);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Menubar", Menubar)
app.use(PrimeVue, { theme: "none" });
app.mount("#app");
