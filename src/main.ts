import "./assets/style.css";
import VueSmoothScroll from "vue3-smooth-scroll";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Antd from "ant-design-vue";
// import "ant-design-vue/dist/reset.css"; // Removed to prevent conflict with Tailwind

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(VueSmoothScroll, {
  duration: 600,
});

app.mount("#app");
