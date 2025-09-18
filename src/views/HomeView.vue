<template>
  <section
    class="min-h-screen w-screen mx-auto overflow-x-hidden bg-gradient-to-br from-blue-600 via-blue-400 to-blue-200"
    id="home"
  >
    <div
      ref="container"
      class="pt-1 flex flex-wrap sm:flex-row sm:justify-around mx-auto max-w-6xl"
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
                <div class="w-full relative">
                  <button
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow"
                    @click.prevent="prev"
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <transition name="carousel-slide" mode="out-in">
                    <img
                      :src="images[current]"
                      :key="images[current]"
                      alt="Project screenshot"
                      class="rounded-md object-contain m-auto max-w-xl w-full transition-all duration-500 cursor-pointer"
                      @click="openPreview(images[current])"
                    />
                  </transition>
                  <button
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow"
                    @click.prevent="next"
                    aria-label="Next"
                  >
                    ›
                  </button>
                </div>
                <div class="flex gap-2 mt-4">
                  <button
                    v-for="(img, idx) in images"
                    :key="idx"
                    class="w-3 h-3 rounded-full"
                    :class="current === idx ? 'bg-blue-500' : 'bg-blue-200'"
                    @click="current = idx"
                    :aria-label="`Go to slide ${idx + 1}`"
                  ></button>
                </div>
                <!-- Modal preview for clicked image -->
                <div
                  v-if="previewImg"
                  class="fixed inset-0 z-50 flex items-center justify-center"
                >
                  <div
                    class="absolute inset-0 bg-black/60"
                    @click="closePreview"
                  ></div>
                  <div
                    class="relative bg-white rounded-lg p-4 max-w-4xl w-full mx-4 flex items-center justify-center"
                  >
                    <!-- Close button -->
                    <button
                      class="absolute top-2 right-3 text-2xl text-gray-700"
                      @click="closePreview"
                    >
                      <!-- &times; -->
                    </button>
                    <!-- External nav buttons (appear outside the white box on larger screens) -->
                    <button
                      class="hidden sm:flex absolute -left-10 text-3xl text-gray-700 bg-white/90 rounded-full p-2 shadow"
                      @click="modalPrev"
                      aria-label="Previous project"
                    >
                      ‹
                    </button>
                    <button
                      class="hidden sm:flex absolute -right-10 text-3xl text-gray-700 bg-white/90 rounded-full p-2 shadow"
                      @click="modalNext"
                      aria-label="Next project"
                    >
                      ›
                    </button>
                    <div class="w-full">
                      <img
                        :src="previewImg"
                        alt="Preview"
                        class="w-full object-contain max-h-[60vh] rounded mb-4 mx-auto"
                      />
                      <!-- title & description -->
                      <div class="px-4 text-center">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">
                          {{ previewTitle }}
                        </h3>
                        <p class="text-sm text-gray-600 mb-4">
                          {{ previewDesc }}
                        </p>
                      </div>
                      <!-- thumbnails -->
                      <div class="flex gap-3 overflow-x-auto px-4 py-2">
                        <button
                          v-for="(p, idx) in projects"
                          :key="idx"
                          class="rounded overflow-hidden border-2"
                          :class="
                            previewIndex === idx
                              ? 'border-blue-500'
                              : 'border-transparent'
                          "
                          @click="
                            (previewIndex = idx), (previewImg = images[idx])
                          "
                          aria-label="`Open ${p.title}`"
                        >
                          <img
                            :src="p.src"
                            :alt="p.title"
                            class="w-24 h-16 object-cover"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <!-- Education & Work Experience -->
        <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12">
          <!-- Education -->

          <!-- Work Experience / CV -->
          <div class="p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-blue-700">Work Experience</h2>
              <a
                href="/CV.pdf"
                class="text-sm bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                download
                >Download CV</a
              >
            </div>

            <div class="space-y-8">
              <!-- Position: Front-End Web Developer -->
              <div>
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div class="font-semibold">
                      Position Front-End Web Developer
                    </div>
                    <div class="text-sm text-gray-700">
                      Houng Ah Loun Technology
                    </div>
                  </div>
                  <div class="text-sm text-gray-500">
                    2 May 2023 - 31 January 2024
                  </div>
                </div>
                <ul class="list-disc ml-6 text-gray-700 mt-3 space-y-1">
                  <li>
                    The company provided me with hands-on experience in web
                    development by assigning tasks.
                  </li>
                  <li>
                    Gained experience in debugging, design, testing and code
                    optimization.
                  </li>
                  <li>
                    Collaborated on small to medium-sized coding tasks and
                    projects, demonstrating a strong willingness to learn and
                    grow.
                  </li>
                  <li>
                    Participated in weekly stand-up meetings and sprint
                    planning.
                  </li>
                  <li>
                    Internship at Lao Telecom: Online Charging IT Department —
                    learned about mobile networks, fixed-line services, internet
                    services, and value-added services and developed MySQL
                    skills.
                  </li>
                </ul>
              </div>

              <!-- Position: Full-Stack Web Developer -->
              <div>
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div class="font-semibold">
                      Position Full-Stack Web Developer
                    </div>
                    <div class="text-sm text-gray-700">
                      CSC Complex Center Co, Ltd
                    </div>
                  </div>
                  <div class="text-sm text-gray-500">
                    1 April 2024 - 17 August 2025
                  </div>
                </div>
                <ul class="list-disc ml-6 text-gray-700 mt-3 space-y-1">
                  <li>
                    Developed and launched web applications using modern
                    technologies (e.g., React, Node.js, MySQL) to meet business
                    requirements.
                  </li>
                  <li>
                    Maintained and enhanced existing company web applications;
                    implemented fixes for critical bugs and crashes.
                  </li>
                  <li>
                    Provided technical support and troubleshooting for various
                    departments, resolving application issues to ensure smooth
                    daily operations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- </div> -->
          <!-- Work Experience -->
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
import { computed } from "vue";
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
import POS_CSCS_1 from "@/assets/images/csc-project/Screenshot 2024-12-03 090259.png";
import POS_CSCS_2 from "@/assets/images/csc-project/Screenshot 2024-12-03 090327.png";
import CSCVehicle1 from "@/assets/images/csc-project/csc-vehicle1.png";
import CSCVehicle2 from "@/assets/images/csc-project/csc-vehicle2.png";
import POSCoffee from "@/assets/images/csc-project/pos-coffee.png";

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

const images = [CSCVehicle1, CSCVehicle2, POSCoffee, POS_CSCS_1, POS_CSCS_2];

// projects metadata with title and description
const projects = [
  {
    src: CSCVehicle1,
    title: "CSC Vehicle",
    desc: "Report Vehicle UI Dashboard.",
  },
  {
    src: CSCVehicle2,
    title: "CSC Vehicle",
    desc: "Table document for use vehicle.",
  },
  {
    src: POSCoffee,
    title: "POS Coffee",
    desc: "Point-of-sale interface for coffee.",
  },
  {
    src: POS_CSCS_1,
    title: "CSC POS",
    desc: "Employee interface.",
  },
  {
    src: POS_CSCS_2,
    title: "CSC POS",
    desc: "Customer interface.",
  },
];

const previewImg = ref<string | null>(null);
// track index of previewed image for modal navigation
const previewIndex = ref<number | null>(null);
function openPreview(img: string) {
  // set preview image and index
  const idx = images.indexOf(img as any);
  previewIndex.value = idx >= 0 ? idx : 0;
  previewImg.value = images[previewIndex.value];
}
function closePreview() {
  previewImg.value = null;
  previewIndex.value = null;
}

function modalPrev() {
  if (previewIndex.value === null) return;
  previewIndex.value = (previewIndex.value - 1 + images.length) % images.length;
  previewImg.value = images[previewIndex.value];
}
function modalNext() {
  if (previewIndex.value === null) return;
  previewIndex.value = (previewIndex.value + 1) % images.length;
  previewImg.value = images[previewIndex.value];
}

// keyboard navigation for modal
function onKeydown(e: KeyboardEvent) {
  if (!previewImg.value) return;
  if (e.key === "ArrowLeft") modalPrev();
  if (e.key === "ArrowRight") modalNext();
  if (e.key === "Escape") closePreview();
}
onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
});

const previewTitle = computed(() => {
  if (previewIndex.value === null) return "";
  return projects[previewIndex.value]?.title || "";
});
const previewDesc = computed(() => {
  if (previewIndex.value === null) return "";
  return projects[previewIndex.value]?.desc || "";
});

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
