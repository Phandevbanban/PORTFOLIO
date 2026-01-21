<template>
  <section class="py-24 bg-gray-50" id="projects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Featured Projects
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Delivering high-quality software solutions for enterprise and
          business.
        </p>
      </div>

      <!-- Consistent Layout: 2 Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex flex-col cursor-pointer"
          @click="openProject(index)"
        >
          <!-- Browser Mockup Container -->
          <div class="bg-gray-100 p-6 pb-0 relative overflow-hidden">
            <!-- Background Decoration (Subtle Gradient) -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-100 transition-opacity"
            ></div>

            <!-- Browser Window Frame -->
            <div
              class="relative rounded-t-lg bg-white shadow-lg border border-gray-200 border-b-0 overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500 origin-bottom"
            >
              <!-- Window Header -->
              <div
                class="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 space-x-2"
              >
                <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>

              <!-- Image (Aspect Video for consistency) -->
              <div class="aspect-video relative bg-white">
                <img
                  :src="project.cover"
                  :alt="project.title"
                  class="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <!-- Overlay on hover -->
                <div
                  class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300"
                ></div>
              </div>
            </div>
          </div>

          <!-- Content Info -->
          <div class="p-8 border-t border-gray-100 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-4">
              <div>
                <p
                  class="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1"
                >
                  {{ project.category }}
                </p>
                <h3
                  class="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors"
                >
                  {{ project.title }}
                </h3>
              </div>
              <!-- Arrow Icon -->
              <div
                class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <p class="text-sm text-slate-500 leading-relaxed line-clamp-3">
              {{ project.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Ant Design Modal -->
    <a-modal
      v-model:open="isOpen"
      width="1000px"
      :footer="null"
      centered
      :destroyOnClose="true"
    >
      <div
        class="flex flex-col h-full bg-white text-slate-950 overflow-hidden rounded-lg"
      >
        <!-- Header -->
        <div class="flex flex-col space-y-1.5 p-6 border-b border-slate-100">
          <div class="flex items-center justify-between">
            <h3 class="font-semibold tracking-tight text-2xl">
              {{ activeProject?.title }}
            </h3>
          </div>
          <p class="text-sm text-slate-500">
            {{ activeProject?.desc }}
          </p>
        </div>

        <!-- Body -->
        <div class="p-6 overflow-y-auto flex-1 bg-slate-50/50">
          <!-- Active Image Frame -->
          <div
            class="relative w-full aspect-video bg-white rounded-md border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center group/nav"
          >
            <!-- Navigation Overlay -->
            <button
              v-if="activeProject && activeProject.images.length > 1"
              @click.stop="prevImage"
              class="absolute left-4 h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-100 opacity-0 group-hover/nav:opacity-100 transition-opacity z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              v-if="activeProject && activeProject.images.length > 1"
              @click.stop="nextImage"
              class="absolute right-4 h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center hover:bg-slate-100 opacity-0 group-hover/nav:opacity-100 transition-opacity z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <Transition name="fade" mode="out-in">
              <img
                :key="currentImageIndex"
                :src="activeImage"
                class="w-full h-full object-contain"
              />
            </Transition>
          </div>

          <!-- Thumbnails -->
          <div class="mt-6 flex gap-4 overflow-x-auto pb-2">
            <button
              v-for="(img, idx) in activeProject?.images"
              :key="idx"
              @click="currentImageIndex = idx"
              class="relative aspect-video w-32 shrink-0 rounded-md overflow-hidden border transition-all"
              :class="
                currentImageIndex === idx
                  ? 'ring-2 ring-slate-950 ring-offset-2 border-transparent'
                  : 'border-slate-200 ring-offset-0 opacity-70 hover:opacity-100'
              "
            >
              <img :src="img" class="w-full h-full object-cover" />
            </button>
          </div>

          <!-- Tech Stack in Modal (Here it stays) -->
          <div class="mt-6">
            <h4 class="text-sm font-semibold text-slate-900 mb-2">
              Technologies
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in activeProject?.tags"
                :key="tag"
                class="inline-flex items-center rounded-md border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors text-slate-950 bg-white"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

// Import all images
import posDashboard from "@/assets/images/project/csc-pos/pos-dashboard.png";
import posSales from "@/assets/images/project/csc-pos/pos-sales.png";
import vehicleList from "@/assets/images/project/csc-vehicle-booking/vehicle-list.png";
import vehicleDetail from "@/assets/images/project/csc-vehicle-booking/vehicle-detail.png";
import vehicleBooking from "@/assets/images/project/csc-vehicle-booking/vehicle-booking.png";
import ebookDashboard from "@/assets/images/project/e-book/ebook-dashboard.png";
import coffeePos from "@/assets/images/project/pos-coffee/coffee-pos.png";

interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  cover: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "csc-pos",
    title: "CSC-POS System",
    category: "Enterprise System",
    desc: "A comprehensive enterprise Point of Sale and management system designed for high-volume retail. Orchestrates real-time inventory, user roles, and complex sales analytics into a unified dashboard.",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    cover: posDashboard,
    images: [posDashboard, posSales],
  },
  {
    id: "vehicle",
    title: "CSC Vehicle Booking",
    category: "Internal Tool",
    desc: "Fleet management solution for optimizing logistics. Streamlines vehicle tracking, maintenance schedules, and departmental booking requests.",
    tags: ["Vue.js", "Express", "PostgreSQL", "Google Maps"],
    cover: vehicleList,
    images: [vehicleList, vehicleDetail, vehicleBooking],
  },
  {
    id: "coffee",
    title: "Coffee Shop POS",
    category: "POS Interface",
    desc: "A specialized, touch-optimized POS interface tailored for rapid coffee shop operations. managing custom modifiers, tables, and kitchen display integration.",
    tags: ["React", "Redux", "Socket.io"],
    cover: coffeePos,
    images: [coffeePos],
  },
  {
    id: "ebook",
    title: "E-BOOK Government",
    category: "Digital Platform",
    desc: "Digital library platform securing government documents and educational resources. Features advanced search, mobile-responsive reading, and secure access controls.",
    tags: ["Next.js", "TypeScript", "PDF.js", "AWS"],
    cover: ebookDashboard,
    images: [ebookDashboard],
  },
];

// State
const isOpen = ref(false);
const activeProjectIndex = ref<number>(0);
const currentImageIndex = ref<number>(0);

const activeProject = computed(() => projects[activeProjectIndex.value]);
const activeImage = computed(
  () => activeProject.value?.images[currentImageIndex.value],
);

const openProject = (index: number) => {
  activeProjectIndex.value = index;
  currentImageIndex.value = 0;
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const nextImage = () => {
  if (!activeProject.value) return;
  currentImageIndex.value =
    (currentImageIndex.value + 1) % activeProject.value.images.length;
};

const prevImage = () => {
  if (!activeProject.value) return;
  currentImageIndex.value =
    (currentImageIndex.value - 1 + activeProject.value.images.length) %
    activeProject.value.images.length;
};

// Keyboard Navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
};

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
