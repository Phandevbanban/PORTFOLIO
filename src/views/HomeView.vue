<script setup lang="ts">
import { onMounted, ref } from "vue";
import MyProjects from "../components/MyProject.vue";
import FloatingIcons from "../components/Floating_icons.vue";
import gsap from "gsap";
import Skill from "../components/Skills.vue";
// import VueTypedJs from "vue-typed-js";

const container = ref(null);
const content = ref(null);
// const isLoading = ref(true);
onMounted(() => {
  gsap.from(container.value, {
    delay: 0.5,
    duration: 1,
    y: 100,
    stagger: 0.25,
    autoAlpha: 0,
    ease: "back.out(1.7)",
  });
  // Simulate loading time
});
const isActive = ref(true);
const textToShow = ref("This is a typing effect with vue-typed-js");
</script>

<template>
  <FloatingIcons />
  <!-- <AppSpinner v-if="isLoading" />
  <main v-else></main> -->
  <!-- <Scroll v-if="isActive" /> -->

  <section
    class="container lg:min-h-screen py-4 lg:px-20 w-screen mx-auto overflow-x-hidden"
    id="home"
  >
    <!-- left side -->
    <!-- main section -->
    <div
      ref="container"
      class="pt-10 flex flex-wrap sm:flex-row sm:justify-around mx-10"
      id="about"
    >
      <div class="sm:w-3/5">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 lg:mt-7">
          I'm phanvilay XAPHAKDY
        </h2>
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[orange] mt-3 lg:mt-7"
        >
          Front-End Web Developer.
        </h2>
        <p ref="content" class="mt-6 lg:mt-10 max-w-md">
          I'm a software developer my main expertise lies in web development
          especially frontend development, I value simple content structure,
          clean design patterns, and thoughtful interactions. Currently, I am
          focused on learning Flutter for Mobile Application Development.
        </p>
        <div class="pt-10">
          <h2 class="font-bold text-xl underline">GET IN CONTACT</h2>
          <p>Email: <span class="font-bold">phanvilay2001@gmail.com</span></p>
          <p>Phone: <span class="font-bold"> +856 2059585500</span></p>
        </div>
      </div>
      <!-- right side -->
      <div class="sm:block lg:w-2/5 md:w-2/5 sm:w-1/5 ms:w-3/5">
        <img
          src="../assets/images/My_image.jpg"
          alt="hero-img"
          class="border_img object-cove"
        />
      </div>
    </div>

    <MyProjects />

    <Skill />
  </section>
  <img src="../assets/svg/wave.svg" alt="" srcset="" />
</template>

<style scoped>
.route-enter-from {
  opacity: 0;
}

.route-enter-active,
.router-leave-active {
  transition: all 0.2s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.border_img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
</style>
