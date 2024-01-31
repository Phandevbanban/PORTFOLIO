<template>
  <!-- component -->
  <div class="px-4 mx-auto max-w-screen-xl ">
    <div class="bg_web rounded-lg p-8 md:p-12">
      <!-- <h1 class="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2 text-center">
          How to quickly deploy a static website
        </h1> -->
      <div class="pt-20 m-auto">
        <div class="flex justify-center items-center gap-12">
          <div class="h-px flex-1 bg-[orange] hidden sm:block"></div>
          <h2 class="text-4xl font-bold text-[orange]" id="skills">
            <!-- Tech Stack , Expertise and Skills: -->
            Tools of development
          </h2>
          <div class="h-px flex-1 bg-[orange] hidden sm:block"></div>
        </div>

        <div
          class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-12"
          style="font-family: 'Roboto Mono', monospace"
        ></div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center ms:flex-cols-1">
    <section
      class="w-full p-6 rounded-lg lg:max-w-6xl max-w-4xl shadow-lg shadow-gray-300 bg-white"
    >
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
        <h3 class="font-medium text-lg">Expertise</h3>
      </header>
      <section class="py-4 grid grid-cols-2 gap-x-6">
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/HTML5.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                HTML
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs"
              >
                7 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 70%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/CSS3.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                CSS
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs"
              >
                7 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 68%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/JavaScript.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                JavaScript
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs"
              >
                6 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 60%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/TypeScript.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                TypeScript
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs"
              >
                6 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 60%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/Vue.js.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Vue
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs"
              >
                7 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 70%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/Nuxt JS.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Nuxt
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs"
              >
                6 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 60%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/Tailwind CSS.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Tailwind CSS
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-400 text-xs"
              >
                7 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 70%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/Ant Design.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Ant Design
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-green-50 text-green-500 text-xs"
              >
                6 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 60%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/GitHub.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                GitHub
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-yellow-50 text-yellow-500 text-xs"
              >
                5 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 50%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/Git.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Git
              </h4>
              <span
                class="px-2 py-1 rounded-lg bg-yellow-50 text-yellow-500 text-xs"
              >
                5 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 50%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/Flutter.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Flutter
              </h4>
              <span class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                3 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 30%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/Dart.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                Dart
              </h4>
              <span class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                3 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 30%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/PostgresSQL.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                PostgreSQL
              </h4>
              <span class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                3 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 30%"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex items-center py-3">
          <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
            <img src="../assets/images/MySQL.png" alt="" srcset="" />
          </span>
          <div class="space-y-3 flex-1">
            <div class="flex items-center">
              <h4
                class="font-medium text-sm mr-auto text-gray-700 flex items-center"
              >
                MySQL
              </h4>
              <span class="px-2 py-1 rounded-lg bg-red-50 text-red-500 text-xs">
                3 / 10
              </span>
            </div>
            <div class="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
              <span
                class="h-full bg-orange-400 w-full block rounded-full"
                style="width: 30%"
              ></span>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
