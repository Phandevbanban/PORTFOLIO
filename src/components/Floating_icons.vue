<template>
  <div
    class="group fixed bottom-0 left-1/2 -translate-x-1/2 p-2 flex items-end justify-center w-24 h-24 z-50"
  >
    <!-- main -->
    <div
      class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute cursor-pointer"
      @click="open = !open"
    >
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"
        />
      </svg>
    </div>
    <!-- sub left -->
    <div
      class="absolute rounded-full transition-all duration-[0.2s] ease-out bg-blue-500"
      :class="open ? 'scale-y-100 -translate-x-16' : 'scale-y-0'"
      style="transform-origin: left bottom"
    >
      <a href="#about" v-smooth-scroll>
        <img src="../assets/svg/about.svg" alt="" />
      </a>
    </div>
    <!-- sub top -->
    <div
      class="absolute rounded-full transition-all duration-[0.2s] ease-out"
      :class="open ? 'scale-x-100 -translate-y-16' : 'scale-x-0'"
      style="transform-origin: top center"
    >
      <a href="#skills" v-smooth-scroll>
        <img src="../assets/svg/TechStack.svg" alt="" />
      </a>
    </div>
    <!-- <p class="text-white">My Tech Stack</p> -->
    <!-- sub middle -->
    <div
      class="absolute rounded-full transition-all duration-[0.2s] ease-out"
      :class="
        open ? 'scale-x-100 -translate-y-14 -translate-x-14' : 'scale-x-0'
      "
      style="transform-origin: left top"
    >
      <a href="#project" v-smooth-scroll>
        <img src="../assets/svg/project.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const open = ref(false);
</script>
