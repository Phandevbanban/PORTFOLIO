<template>
  <!-- component -->
  <div
    class="group fixed bottom-0 p-2 flex items-center justify-center w-24 h-24 z-50"
  >
    <!-- main -->
    <div
      class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute"
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
      class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white"
    >
      <a href="#about" v-smooth-scroll class="">
        <img src="../assets/svg/about.svg" alt="" class="" />
      </a>
    </div>
    <!-- sub top -->
    <div
      class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 flex p-2 hover:p-3 bg-blue-300 hover:bg-blue-400 text-white"
    >
      <a href="#skills" v-smooth-scroll to="/" class="">
        <img src="../assets/svg/TechStack.svg" alt="" />
      </a>
    </div>
    <!-- sub middle -->
    <div
      class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white"
    >
      <a href="#project" v-smooth-scroll class="">
        <img src="../assets/svg/project.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
