<template>
  <div class="px-4 mx-auto max-w-screen-xl">
    <div class="bg_web rounded-lg p-8 md:p-12">
      <div class="pt-20 m-auto">
        <div class="flex justify-center items-center gap-12">
          <h2 class="text-4xl font-bold text-center" id="skills">
            Tools of development
          </h2>
        </div>

        <div
          class="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-12"
          style="font-family: 'Roboto Mono', monospace"
        ></div>
      </div>
    </div>
  </div>

  <!-- Skills -->
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
</template>

<script setup lang="ts">
import GitImage from "@/assets/images/Git.png";
import GitHubImage from "@/assets/images/GitHub.png";
import HTMLImage from "@/assets/images/HTML5.png";
import CSSImage from "@/assets/images/CSS3.png";
import NuxtImage from "@/assets/images/Nuxt JS.png";
import VueImage from "@/assets/images/Vue.js.png";
import TailwindImage from "@/assets/images/Tailwind CSS.png";
import AntdesignImage from "@/assets/images/Ant Design.png";
import FlutterImage from "@/assets/images/Flutter.png";
import DartImage from "@/assets/images/Dart.png";
import MySQLImage from "@/assets/images/MySQL.png";
import PostgreSQLImage from "@/assets/images/PostgresSQL.png";
import JavaScriptImage from "@/assets/images/JavaScript.png";
import TypeScriptImage from "@/assets/images/TypeScript.png";

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
];
</script>

<style scoped></style>
