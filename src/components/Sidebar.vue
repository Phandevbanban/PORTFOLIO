<template>
  <aside class="fixed top-0 pt-96 w-18 left-0 h-screen z-10">
    <nav class="bg-orange-400 rounded-r-md pr-1">
      <ul>
        <li class="mb-4 round-md">
          <a
            href="#about"
            v-smooth-scroll
            class="text-white py-2 px-4 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[50%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center rounded-md"
          >
            <img src="../assets/svg/about.svg" alt="" class="" />
          </a>
          <a
            href="#project"
            v-smooth-scroll
            class="text-white py-2 px-4 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[50%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center rounded-md"
          >
            <img src="../assets/svg/project.svg" alt="" />
          </a>
          <a
            href="#skills"
            v-smooth-scroll
            to="/"
            class="text-white py-2 px-4 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-[50%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center rounded-md"
          >
            <img src="../assets/svg/TechStack.svg" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
// import svgAbout from "../assets/svg/about.svg";
</script>

<style scoped>
.bg {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
