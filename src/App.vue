<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, watch } from "vue";
import Sidebar from "./components/Sidebar.vue";
import ArrowUp from "./components/btn_back.vue";

const isSmallScreen = ref(window.innerWidth <= 390);
watch(isSmallScreen, (newValue) => {
  // Ensure correct initial rendering
  Sidebar.value?.toggleSidebar(newValue);
});
</script>

<template>
  <header>
    <!-- <Sidebar v-if="!isSmallScreen" ref="Sidebar" /> -->
    <!-- <ArrowUp /> -->
    <!-- <Navbar v-if="isSmallScreen"></Navbar> -->
  </header>
  <main class="overflow-x-hidden">
    <RouterView />
  </main>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding: 10rem;
}
/*=============== SCROLL BAR ===============*/
::-webkit-scrollbar {
  width: 0.6rem;
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #fb923c;
  border-radius: 0.5rem;
}

@media (max-width: 389px) {
  .overflow-x-hidden {
    padding: 0; /* Remove overflow-x hidden for narrower screens */
  }
  /* Additional styles for navbar and other elements... */
}
</style>
