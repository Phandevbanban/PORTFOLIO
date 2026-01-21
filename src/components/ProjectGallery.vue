<template>
  <section class="" id="projects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Projects
        </h2>
      </div>

      <!-- Consistent Layout: 2 Columns -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl border border-gray-200 flex flex-col cursor-pointer"
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
              class="relative rounded-t-lg bg-white shadow-lg border border-gray-200 border-b-0 overflow-hidden transform origin-bottom"
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
      width="100%"
      wrap-class-name="full-modal"
      :footer="null"
      centered
      :destroyOnClose="true"
      :bodyStyle="{ padding: 0, height: '85vh' }"
      style="max-width: 1400px; top: 0; padding-bottom: 0"
    >
      <div
        class="flex flex-col lg:flex-row h-full bg-white text-slate-950 overflow-hidden rounded-lg"
      >
        <!-- Left Column: Image Area (65-70%) -->
        <div
          class="flex-1 bg-gray-100/50 relative flex items-center justify-center p-4 lg:p-12 overflow-hidden group/nav"
        >
          <!-- Navigation Buttons -->
          <button
            v-if="activeProject && activeProject.images.length > 1"
            @click.stop="prevImage"
            class="absolute left-4 lg:left-8 h-12 w-12 rounded-full border border-gray-200 bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 text-gray-700 transition-all opacity-0 group-hover/nav:opacity-100 z-20"
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            v-if="activeProject && activeProject.images.length > 1"
            @click.stop="nextImage"
            class="absolute right-4 lg:right-8 h-12 w-12 rounded-full border border-gray-200 bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 text-gray-700 transition-all opacity-0 group-hover/nav:opacity-100 z-20"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <!-- Image Transition -->
          <Transition name="fade" mode="out-in">
            <div
              :key="currentImageIndex"
              class="w-full h-full flex items-center justify-center"
            >
              <img
                :src="activeImage"
                class="max-w-full max-h-full object-contain shadow-sm rounded-md"
              />
            </div>
          </Transition>

          <!-- Counter Pill -->
          <div
            class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm border border-gray-200 text-gray-500"
          >
            {{ currentImageIndex + 1 }} / {{ activeProject?.images.length }}
          </div>
        </div>

        <!-- Right Column: Details Sidebar (35%) -->
        <div
          class="w-full lg:w-[450px] bg-white border-l border-gray-100 flex flex-col h-full overflow-hidden"
        >
          <!-- Header -->
          <div class="p-8 pb-4">
            <p
              class="text-xs font-bold text-blue-600 tracking-widest uppercase mb-2"
            >
              {{ activeProject?.category }}
            </p>
            <h3 class="text-3xl font-bold text-gray-900 leading-tight">
              {{ activeProject?.title }}
            </h3>
          </div>

          <!-- Scrollable Content -->
          <div class="flex-1 overflow-y-auto p-8 pt-0 space-y-8 scrollbar-hide">
            <!-- About Section -->
            <div>
              <h4
                class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3"
              >
                About Project
              </h4>
              <p class="text-gray-600 leading-relaxed text-[15px]">
                {{ activeProject?.desc }}
              </p>
            </div>

            <!-- Gallery Grid -->
            <div>
              <h4
                class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3"
              >
                Gallery
              </h4>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="(img, idx) in activeProject?.images"
                  :key="idx"
                  @click="currentImageIndex = idx"
                  class="relative aspect-video rounded-lg overflow-hidden border-2 transition-all group"
                  :class="
                    currentImageIndex === idx
                      ? 'border-blue-600 ring-2 ring-blue-100 ring-offset-1'
                      : 'border-transparent hover:border-gray-200'
                  "
                >
                  <img
                    :src="img"
                    class="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Optional Footer Actions -->
          <!-- <div class="p-6 border-t border-gray-100 mt-auto">
                <button class="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                    Visit Live Site
                </button>
            </div> -->
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
import ebookDashboard from "@/assets/images/project/e-book/elibrary.png";
import elibrary2 from "@/assets/images/project/e-book/elibrary2.png";
import coffeePos from "@/assets/images/project/pos-coffee/coffee-pos.png";
import coffee4 from "@/assets/images/project/pos-coffee/coffee4.png";
import coffee5 from "@/assets/images/project/pos-coffee/coffee5.png";

interface Project {
  id: string;
  title: string;

  desc: string;
  cover: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "csc-pos",
    title: "CSC-POS System",

    desc: "A comprehensive enterprise Point of Sale and management system designed for high-volume retail. Orchestrates real-time inventory, user roles, and complex sales analytics into a unified dashboard.",
    cover: posDashboard,
    images: [posDashboard, posSales],
  },
  {
    id: "vehicle",
    title: "CSC Vehicle Booking",

    desc: "Fleet management solution for optimizing logistics. Streamlines vehicle tracking, maintenance schedules, and departmental booking requests.",
    cover: vehicleList,
    images: [vehicleList, vehicleDetail, vehicleBooking],
  },
  {
    id: "coffee",
    title: "Coffee Shop POS",

    desc: "A specialized, touch-optimized POS interface tailored for rapid coffee shop operations. managing custom modifiers, tables, and kitchen display integration.",
    cover: coffeePos,
    images: [coffeePos, coffee4, coffee5],
  },
  {
    id: "ebook",
    title: "E-BOOK Government",

    desc: "Digital library platform securing government documents and educational resources. Features advanced search, mobile-responsive reading, and secure access controls.",
    cover: ebookDashboard,
    images: [ebookDashboard, elibrary2],
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
