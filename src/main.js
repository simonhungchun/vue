import { createApp } from "vue";
import "normalize.css";
import App from "@/App";
import router from "@/router";
const app = createApp(App);
app.use(router);
app.mount("#app");
