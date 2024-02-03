<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FloatingIcons from "./components/Floating_icons.vue";
</script>

<template>
  <header></header>
  <main class="overflow-x-hidden">
    <FloatingIcons />
    <RouterView />
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding: 10rem;
}
/*=============== SCROLL BAR ===============*/
/* ::-webkit-scrollbar {
  width: 0.6rem;
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #fb923c;
  border-radius: 0.5rem;
} */

/*=============== SCROLL BAR ===============*/
::-webkit-scrollbar {
  width: 0.6rem;
  background: #1a1b2f;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #ffa698, #feccb2);
  /* background: #fff; */
  border-radius: 0.5rem;
}
</style>
