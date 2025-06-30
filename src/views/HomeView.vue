<template>
  <section
    class="min-h-screen w-screen mx-auto overflow-x-hidden bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200"
    id="home"
  >
    <div
      ref="container"
      class="pt-16 flex flex-wrap sm:flex-row sm:justify-around mx-auto max-w-6xl"
      id="about"
    >
      <!-- Left: Intro -->
      <div class="sm:w-5/5 bg-white/90 rounded-2xl shadow-xl p-10 m-4">
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-bold mt-3 lg:mt-7 text-blue-700"
        >
          I'm phanvilay XAPHAKDY
        </h2>
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 lg:mt-7 text-blue-500"
        >
          FULL-STACK Web Developer.
        </h2>
        <p
          ref="content"
          class="mt-6 lg:mt-10 max-w-md bg-blue-50 rounded-lg text-gray-700 p-5"
        >
          I build modern web applications with a focus on performance,
          accessibility, and user experience. I value simple content structure,
          clean design patterns, and thoughtful interactions.
        </p>

        <!-- Skills -->
        <div class="flex items-center justify-center ms:flex-cols-1">
          <section class="w-full p-6 rounded-lg lg:max-w-6xl max-w-4xl">
            <header class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 shrink-0 w-6 h-6 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 19l16 0"></path>
                <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
              </svg>
              <h3 class="font-medium text-lg">Tools of development</h3>
            </header>
            <section class="py-4 flex flex-col md:flex-row gap-8">
              <div class="flex-1 grid grid-cols-2 gap-2">
                <div
                  v-for="skill in skills"
                  :key="skill.name"
                  class="flex items-center py-3"
                >
                  <span
                    class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center"
                  >
                    <img :src="skill.img" :alt="skill.name" />
                  </span>
                  <div class="space-y-2 flex-1">
                    <div class="flex items-center">
                      <h4
                        class="font-medium text-sm mr-auto text-gray-700 flex items-center"
                      >
                        {{ skill.name }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 flex items-center justify-center">
                <img
                  src="../assets/images/project_Elibrary_dashboard (2).png"
                  alt="image"
                  class="rounded-md object-contain m-auto max-w-xl w-full"
                />
              </div>
            </section>
          </section>
        </div>
        <div class="mx-10">
          <h1 class="text-2xl font-bold">
            Education
            <img
              src="../assets/images/graduate-cap.png"
              alt="education"
              class="inline-block w-8 h-8"
            />
          </h1>
          <p class="">
            - Higher Diploma of Information Technology Management in Quest
            College October 2020-September 2023
          </p>
          <p class="">- Intern at Lao Telecom</p>
        </div>
      </div>

      <!-- Right: Profile Image -->
    </div>

    <!-- <MyProjects /> -->
  </section>
  <!-- <img src="../assets/svg/wave.svg" alt="" class="bg_wave" /> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import GitImage from "@/assets/images/Git.png";
import HTMLImage from "@/assets/images/HTML5.png";
import CSSImage from "@/assets/images/CSS3.png";
import VueImage from "@/assets/images/Vue.js.png";
import TailwindImage from "@/assets/images/Tailwind CSS.png";
import AntdesignImage from "@/assets/images/Ant Design.png";
import MySQLImage from "@/assets/images/MySQL.png";
import JavaScriptImage from "@/assets/images/JavaScript.png";
import TypeScriptImage from "@/assets/images/TypeScript.png";
import ReactImage from "@/assets/images/React.png";
import NestImage from "@/assets/images/Nest.js.png";
import DockerImage from "@/assets/images/Docker.png";

const skills = [
  { img: HTMLImage, name: "HTML" },
  { img: CSSImage, name: "CSS" },
  { img: JavaScriptImage, name: "JavaScript" },
  { img: TypeScriptImage, name: "TypeScript" },
  { img: VueImage, name: "Vue" },
  { img: TailwindImage, name: "Tailwind CSS" },
  { img: AntdesignImage, name: "Ant Design" },
  { img: GitImage, name: "Git" },
  { img: MySQLImage, name: "MySQL" },
  { img: ReactImage, name: "React" },
  { img: NestImage, name: "NestJS" },
  { img: DockerImage, name: "Docker" },
];

const container = ref(null);
const content = ref(null);
const Project = ref(null);

onMounted(() => {
  gsap.from(container.value, {
    delay: 0.5,
    duration: 1,
    y: 100,
    stagger: 0.25,
    autoAlpha: 0,
    ease: "back.out(1.7)",
  });
});
</script>

<style scoped>
.border_img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
}

/* Modern blue wave background */
.bg_wave {
  width: 100vw;
  min-height: 80px;
  margin-top: -60px;
  z-index: 1;
  position: relative;
  pointer-events: none;
}
</style>
