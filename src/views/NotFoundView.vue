<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 dark:bg-gray-900"
  >
    <h1 class="text-6xl font-bold text-gray-800 dark:text-gray-100">404</h1>
    <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">Page Not Found</p>
    <p class="mt-2 text-gray-500 dark:text-gray-400">
      The page you are looking for does not exist.
    </p>
    <router-link
      to="/"
      class="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Go Home
    </router-link>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this simple view
</script>
