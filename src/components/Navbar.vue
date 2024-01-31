<template>
  <nav class="bg-[#fb923c] fixed z-20 w-full shadow-2xl text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-60">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0"></div>
          <div class="hidden md:block">
            <div class="ml-60 flex items-baseline space-x-5">
              <router-link
                v-for="link in links"
                :key="link.id"
                :to="link.to"
                class="text-bold px-3 py-2 rounded-md text-sm font-medium"
                :class="{ 'bg-gray-900 text-black': link }"
                >{{ link.name }}
              </router-link>
            </div>
          </div>
          <div class="w-[100%]"><searchbar /></div>
          <div class="flex">
            <button @click="$emit('onCart')"></button>
          </div>
        </div>

        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            @click="open = !open"
            class="bg-[ #9a8478] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[ #9a8478] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            :aria-expanded="open"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="{ hidden: open, block: !open }"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="{ hidden: !open, block: open }"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{ block: open, hidden: !open }" class="md:hidden">
      <div class=" pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          v-for="link in links"
          :key="link.id"
          :to="link.to"
          class="text-black block px-3 py-2 w-full text-base font-medium"
          :class="{ 'bg-white text-black': link }"
          >{{ link.name }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

// import cart from "../assets/cart.svg";
// import Cart from "@/assets/cart.svg";
const router = useRouter();
// const login = () => {
//   router.push({ name: "login" }).catch((e) => console.log(e));
// };

const openCart = ref(false);
const onCart = () => {
  openCart.value = true;
};

const childrenDrawer = ref<boolean>(false);

const showChildrenDrawer = () => {
  childrenDrawer.value = true;
};

const onClose = () => {
  open.value = false;
};

const open = ref(false);

const links = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Menu", to: "/menu" },
];

const isLoginPage = ref(true);
const route = useRoute();
isLoginPage.value = route.path === "/login";

interface Link {
  id: number;
  name: string;
  to: string;
  isActive?: true;
}

const link: Link = {
  id: 1,
  name: "Home",
  to: "/",
  isActive: true, // set the isActive property to true
};

if (link.hasOwnProperty("isActive")) {
  // The isActive property exists
} else {
  // The isActive property does not exist
}
</script>

<style scoped>
.bg {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
