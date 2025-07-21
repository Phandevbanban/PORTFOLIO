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
        <p ref="content" class="mt-6 lg:mt-10 max-w-md text-gray-700 p-5">
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
              <!-- Carousel for project images -->
              <div
                class="flex-1 flex flex-col items-center justify-center relative"
              >
                <transition name="carousel-slide" mode="out-in">
                  <img
                    :src="images[current]"
                    :key="images[current]"
                    alt="Project screenshot"
                    class="rounded-md object-contain m-auto max-w-xl w-full transition-all duration-500"
                  />
                </transition>
                <div class="flex gap-2 mt-4">
                  <span
                    v-for="(img, idx) in images"
                    :key="idx"
                    class="w-3 h-3 rounded-full"
                    :class="current === idx ? 'bg-blue-500' : 'bg-blue-200'"
                  ></span>
                </div>
              </div>
            </section>
          </section>
        </div>
        <!-- Education & Work Experience -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <!-- Education -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center"
          >
            <h2
              class="text-3xl font-bold text-blue-700 flex items-center gap-2 mb-4"
            >
              Education
              <img
                src="../assets/images/graduate-cap.png"
                alt="education"
                class="inline-block w-8 h-8"
              />
            </h2>
            <hr class="border-blue-200 mb-6" />
            <div class="space-y-4">
              <div class="rounded-lg px-6 py-4">
                <div class="font-medium text-gray-700 text-lg">
                  Higher Diploma of Information Technology Management
                </div>
                <div class="text-sm">Quest College, Oct 2020 - Sep 2023</div>
              </div>
              <div class="rounded-lg px-6 py-4">
                <div class="font-medium text-gray-700 text-lg">
                  Intern at Lao Telecom
                </div>
              </div>
            </div>
          </div>
          <!-- Work Experience -->
          <div
            class="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center"
          >
            <h2 class="text-3xl font-bold text-blue-700 mb-4">
              Work Experience
            </h2>
            <hr class="border-blue-200 mb-6" />
            <div class="space-y-6">
              <!-- Experience 1 -->
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <span class="font-bold text-lg text-gray-900"
                    >CSC COMPLEX CENTER</span
                  >
                  <span class="text-gray-400 text-sm">2021</span>
                </div>
                <ul class="list-disc ml-6 text-gray-700 space-y-1">
                  <li>Build web application for organization</li>
                  <li>Built internal dashboard for logistics tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Projects Card Grid -->
        <!-- <div class="mt-12">
          <h2 class="text-3xl font-bold text-blue-700 mb-6">Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(img, idx) in images"
              :key="idx"
              class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center transition-transform hover:scale-105"
            >
              <img
                :src="img"
                :alt="'Project screenshot ' + (idx + 1)"
                class="rounded-lg object-cover w-full h-56 mb-4 border border-blue-100"
              />
              <h3 class="font-semibold text-lg text-gray-800 mb-2">
                Project {{ idx + 1 }}
              </h3>
              <p class="text-gray-500 text-sm text-center">
                Short project description goes here. You can customize this for
                each project.
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
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

.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.carousel-slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.carousel-slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
