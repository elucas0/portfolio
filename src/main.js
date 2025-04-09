import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";

import PrimeVue from "primevue/config";

import "./tailwind.css";
import "./style.css"
import { DialogService, ToastService } from "primevue";

const app = i18n(createApp(App));
app.use(PrimeVue, { theme: "none" });
app.use(DialogService)
app.use(ToastService)
app.mount("#app")
