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
              <SkillStack />
            </section>
          </section>
        </div>

        <!-- Projects Gallery -->
        <ProjectGallery />

        <!-- Education & Work Experience -->
        <div class="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12">
          <!-- Education -->

          <!-- Work Experience / CV -->
          <div class="p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-blue-700">Work Experience</h2>
              <!-- <a
                href="/CV.pdf"
                class="text-sm bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                download
                >Download CV</a
              > -->
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
import { onMounted, ref } from "vue";
import gsap from "gsap";
import SkillStack from "@/components/SkillStack.vue";
import ProjectGallery from "@/components/ProjectGallery.vue";

const container = ref(null);
const content = ref(null);

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
