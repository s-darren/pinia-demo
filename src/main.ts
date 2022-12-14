import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { registerAntd } from "@/services/antd";
const app = createApp(App);
app.use(router);
registerAntd(app);
app.use(createPinia());
app.mount("#app");
