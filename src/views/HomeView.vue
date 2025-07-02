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
          <img
            class="w-10 h-10"
            src="../assets/images/Hi-IMG.png"
            alt="my-img"
            srcset=""
          />
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
          I build modern web applications with a focus on performance, clean
          design patterns accessibility, and user experience.
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
          <h1 class="text-2xl font-semibold">
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
        <div class="mx-10 bg-white pt-20">
          <!-- Work Experience Section -->
          <div class="mx-10 bg-white pt-20 rounded-xl shadow-lg">
            <h1
              class="text-2xl font-bold mb-8 text-blue-700 border-b-2 border-blue-200 pb-2"
            >
              Work Experience
            </h1>
            <div class="space-y-8">
              <!-- Experience 1 -->
              <div>
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between"
                >
                  <div class="text-xl font-semibold text-gray-900">
                    Senior Web Developer
                  </div>
                  <div
                    class="flex flex-col md:flex-row md:items-center gap-2 mt-1 md:mt-0"
                  >
                    <a
                      href="https://mangocode.inc"
                      target="_blank"
                      class="text-blue-600 font-medium hover:underline"
                      >MangoCode Inc.</a
                    >
                    <span class="text-gray-400 text-sm">2021–Present</span>
                  </div>
                </div>
                <ul
                  class="list-disc list-inside mt-2 text-gray-700 space-y-1 pl-2"
                >
                  <li>Led team of 4 developers</li>
                  <li>Built internal dashboard for logistics tracking</li>
                  <li>Integrated Firebase authentication and Firestore</li>
                </ul>
              </div>
              <!-- Experience 2 -->
              <div>
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between"
                >
                  <div class="text-xl font-semibold text-gray-900">
                    Frontend Developer
                  </div>
                  <div
                    class="flex flex-col md:flex-row md:items-center gap-2 mt-1 md:mt-0"
                  >
                    <a
                      href="https://thaidev.studio"
                      target="_blank"
                      class="text-blue-600 font-medium hover:underline"
                      >ThaiDev Studio</a
                    >
                    <span class="text-gray-400 text-sm">2018–2021</span>
                  </div>
                </div>
                <ul
                  class="list-disc list-inside mt-2 text-gray-700 space-y-1 pl-2"
                >
                  <li>Developed e-commerce platforms using Vue.js</li>
                  <li>Created reusable UI components</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid grid-cols-2 justify-center items-center gap-12 m-auto ms:grid-cols-1 bg-white rounded-md py-10 mx-auto"
          >
            <div class="sm:block sm:w-5/5">
              <div class="flex-1 flex items-center justify-center">
                <!-- <img
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Z4d2J6b2Z6a3Z2b2Z2c2Z2b2Z2b2Z2b2Z2b2Z2b2Z2b2Z2/giphy.gif"
                  alt="How to use web application"
                  class="rounded-md object-contain m-auto max-w-xl w-full shadow-lg"
                /> -->

                <div class="max-w-2xl mx-auto py-10">
                  <div
                    class="relative rounded overflow-hidden shadow-md border-2"
                  >
                    <transition name="fade-slide" mode="out-in">
                      <img
                        :src="images[current]"
                        :alt="'Project screenshot ' + (current + 1)"
                        :key="images[current]"
                        class="w-full h-80 object-contain"
                      />
                    </transition>
                  </div>
                </div>
              </div>
            </div>

            <div class="m-auto mx-10 min-[390px]">
              <h1 class="text-xl">
                <ul>
                  <h3>Projects</h3>
                  <li>- POS (Point of Sale) System</li>
                  <li>- VEHICLE System</li>
                  <li>- DMS (Document Management System)</li>
                  <li>- POS COFFEE</li>
                  <li>- Defective Product Tracking System</li>
                </ul>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <img src="../assets/svg/wave.svg" alt="" class="bg_wave" /> -->
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
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
import Screenshot090259Img from "@/assets/images/csc-project/Screenshot 2024-12-03 090259.png";
import Screenshot090327Img from "@/assets/images/csc-project/Screenshot 2024-12-03 090327.png";

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
  startAutoSlide();
});

const images = [Screenshot090259Img, Screenshot090327Img];

const current = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

const prev = () => {
  current.value = (current.value - 1 + images.length) % images.length;
};
const next = () => {
  current.value = (current.value + 1) % images.length;
};

function startAutoSlide() {
  intervalId = setInterval(() => {
    next();
  }, 3000); // 3 seconds
}

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
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

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
