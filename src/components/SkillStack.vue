<template>
  <div class="flex-1 grid grid-cols-2 gap-2">
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="flex items-center py-3"
    >
      <span class="w-8 h-8 shrink-0 mr-4 flex items-center justify-center">
        <img
          :src="skill.img"
          :alt="skill.name"
          class="w-full h-full object-contain"
        />
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
</template>

<script setup lang="ts">
const skills = [
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/html5.svg",
    name: "HTML",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/css.svg",
    name: "CSS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/javascript.svg",
    name: "JavaScript",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/typescript.svg",
    name: "TypeScript",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nextjs_icon_dark.svg",
    name: "Next.js",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/tailwindcss.svg",
    name: "Tailwind CSS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/shadcn-ui.svg",
    name: "Shadcn UI",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/git.svg",
    name: "Git",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/nestjs.svg",
    name: "NestJS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/docker.svg",
    name: "Docker",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/pheralb/svgl@main/static/library/redis.svg",
    name: "Redis",
  },
];
</script>
