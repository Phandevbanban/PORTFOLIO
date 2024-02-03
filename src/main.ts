// import "./assets/main.css";

import "./assets/style.css";
import VueSmoothScroll from "vue3-smooth-scroll";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import Vue from 'vue';

const app = createApp(App);
app.use(router);
app.use(VueSmoothScroll, {
  duration: 600,
});

app.mount("#app");
