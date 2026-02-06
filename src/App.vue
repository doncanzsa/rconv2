<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="w-full bg-slate-800 p-4 text-white shadow-lg">
    <nav class="container mx-auto flex justify-between items-center">
      <h1
        class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Vue 3 Project
      </h1>
      <div class="space-x-4">
        <RouterLink
          to="/"
          class="hover:text-cyan-400 transition-colors duration-200"
          active-class="text-cyan-400 font-semibold"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="hover:text-cyan-400 transition-colors duration-200"
          active-class="text-cyan-400 font-semibold"
        >
          About
        </RouterLink>
      </div>
    </nav>
  </header>

  <main class="container mx-auto p-8 min-h-screen">
    <RouterView v-slot="{ Component }">
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>

  <footer class="w-full bg-slate-900 p-6 text-slate-400 text-center">
    <p>&copy; 2026 rconv2 Project. Built with Vue 3, Vite & Tailwind.</p>
  </footer>
</template>

<style>
body {
  @apply bg-slate-950 text-slate-200;
}
</style>
