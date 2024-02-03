// import "./assets/main.css";

import "./assets/style.css";
import VueSmoothScroll from "vue3-smooth-scroll";
import "ant-design-vue/dist/reset.css";

// import Vue from 'vue';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(VueSmoothScroll, {
  duration: 600,
});

app.mount("#app");
