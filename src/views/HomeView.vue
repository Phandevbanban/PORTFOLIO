<script setup lang="ts">
import { onMounted, ref } from "vue";
import MyProjects from "../components/MyProject.vue";
import gsap from "gsap";
import Skill from "../components/Skills.vue";

const container = ref(null);
const content = ref(null);
const Project = ref(null);
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
</script>

<template>
  <section
    class="bg-image bg-image bg-no-repeat lg:min-h-screen py-3 w-screen mx-auto overflow-x-hidden"
    id="home"
  >
    <div
      ref="container"
      class="pt-10 flex flex-wrap sm:flex-row sm:justify-around mx-10"
      id="about"
    >
      <div class="sm:w-3/5">
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 lg:mt-7 text-white"
        >
          I'm phanvilay XAPHAKDY
        </h2>
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#] mt-3 lg:mt-7 text-[#FFE1BB]"
        >
          Front-End Web Developer.
        </h2>
        <p
          ref="content"
          class="content_bg mt-6 lg:mt-10 max-w-md bg-white rounded-md text- shadow-lg p-5"
        >
          I'm a software developer my main expertise lies in web development
          especially frontend development, I value simple content structure,
          clean design patterns, and thoughtful interactions. Currently, I am
          focused on learning Flutter for Mobile Application Development.
        </p>
        <div class="pt-10 text-white">
          <h2 class="font-bold text-xl">CONTACT</h2>
          <p>
            Email:
            <span class="font-bold underline text-xl"
              >phanvilay2001@gmail.com</span
            >
          </p>
          <p>Phone: <span class="font-bold text-xl"> +856 2059585500</span></p>
        </div>
      </div>
      <!-- right side -->
      <div class="sm:block lg:w-2/5 md:w-2/5 sm:w-1/5 ms:w-5/5">
        <img
          src="../assets/images/My_image.jpg"
          alt="my-img"
          class="border_img object-cover"
        />
      </div>
    </div>

    <Skill />
    <MyProjects />
  </section>
  <img src="../assets/svg/wave.svg" alt="" srcset="" class="bg_wave" />
</template>

<style scoped>
.border_img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

/* .content_bg {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);

  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
} */
.bg-image {
  background-image: url("../assets/images/bg.jpg");
}

.bg_wave {
  background: linear-gradient(0deg, #ffa698, #feccb2);
}
</style>
