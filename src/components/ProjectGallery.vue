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

            <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
              {{ project.desc }}
            </p>

            <!-- Tags -->
            <div class="mt-auto flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags.slice(0, 4)"
                :key="tag"
                class="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md border border-gray-200"
              >
                {{ tag }}
              </span>
              <span
                v-if="project.tags.length > 4"
                class="text-xs font-medium text-gray-400 px-1 py-1"
              >
                +{{ project.tags.length - 4 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal (Standard clean) -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6"
      >
        <div
          class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
          @click="closeModal"
        ></div>

        <div
          class="relative w-full max-w-7xl h-full sm:h-[90vh] bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          <!-- Header -->
          <div
            class="flex justify-between items-center p-6 border-b border-gray-100 bg-white z-20"
          >
            <div>
              <h3 class="text-2xl font-bold text-gray-900">
                {{ activeProject?.title }}
              </h3>
              <p class="text-sm text-gray-500 mt-1">
                {{ activeProject?.category }}
              </p>
            </div>
            <button
              class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              @click="closeModal"
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <!-- Content (Split View on Desktop) -->
          <div
            class="flex-1 overflow-hidden flex flex-col md:flex-row bg-gray-50"
          >
            <!-- Main Image Area -->
            <div
              class="flex-1 relative flex items-center justify-center bg-gray-100/50 group/nav overflow-hidden"
            >
              <div
                class="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium shadow-sm text-gray-600 border border-gray-200"
              >
                {{ currentImageIndex + 1 }} / {{ activeProject?.images.length }}
              </div>

              <!-- Nav Buttons (Hover only) -->
              <button
                class="absolute left-6 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all opacity-0 group-hover/nav:opacity-100 -translate-x-4 group-hover/nav:translate-x-0 z-20"
                @click.stop="prevImage"
                v-if="activeProject && activeProject.images.length > 1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button
                class="absolute right-6 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all opacity-0 group-hover/nav:opacity-100 translate-x-4 group-hover/nav:translate-x-0 z-20"
                @click.stop="nextImage"
                v-if="activeProject && activeProject.images.length > 1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <Transition name="fade" mode="out-in">
                <div
                  :key="currentImageIndex"
                  class="w-full h-full flex items-center justify-center p-4 md:p-12"
                >
                  <img
                    v-if="activeImage"
                    :src="activeImage"
                    :alt="activeProject?.title"
                    class="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                  />
                </div>
              </Transition>
            </div>

            <!-- Details Sidebar -->
            <div
              class="w-full md:w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto"
            >
              <div class="mb-8">
                <h4
                  class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2"
                >
                  About Project
                </h4>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ activeProject?.desc }}
                </p>
              </div>

              <div class="mb-8">
                <h4
                  class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3"
                >
                  Tech Stack
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in activeProject?.tags"
                    :key="tag"
                    class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100 font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div>
                <h4
                  class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3"
                >
                  Gallery
                </h4>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="(img, idx) in activeProject?.images"
                    :key="idx"
                    @click="currentImageIndex = idx"
                    class="aspect-square rounded-lg overflow-hidden border-2 transition-all"
                    :class="
                      currentImageIndex === idx
                        ? 'border-blue-600 ring-2 ring-blue-100'
                        : 'border-gray-100 opacity-70 hover:opacity-100'
                    "
                  >
                    <img :src="img" class="w-full h-full object-cover" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
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
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isOpen.value = false;
  document.body.style.overflow = "";
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
