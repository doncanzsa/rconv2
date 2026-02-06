<template>
  <div class="space-y-12 animate-in fade-in slide-in-from-right-4 duration-700">
    <div class="text-center space-y-4">
      <h2 class="text-5xl font-black text-white">
        About This <span class="text-blue-500">Project</span>
      </h2>
      <p class="text-slate-400 text-lg">
        A quick overview of the architecture used in this boilerplate.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(tech, index) in techStack"
        :key="index"
        class="group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        <div
          class="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform"
        >
          <component :is="tech.icon" class="w-6 h-6" />
        </div>
        <h3 class="text-xl font-bold text-white mb-3">{{ tech.name }}</h3>
        <p class="text-slate-500 text-sm leading-relaxed">
          {{ tech.description }}
        </p>
      </div>
    </div>

    <div
      class="glass p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md"
    >
      <h3 class="text-2xl font-bold mb-6">Development Workflow</h3>
      <div class="space-y-4">
        <div class="flex items-start space-x-4">
          <div
            class="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold"
          >
            1
          </div>
          <p class="text-slate-300">
            Run
            <code class="bg-black/40 px-2 py-1 rounded text-blue-400"
              >npm run dev</code
            >
            to start the local development server.
          </p>
        </div>
        <div class="flex items-start space-x-4">
          <div
            class="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold"
          >
            2
          </div>
          <p class="text-slate-300">
            Edit components in
            <code class="bg-black/40 px-2 py-1 rounded text-blue-400"
              >src/components</code
            >
            or views in
            <code class="bg-black/40 px-2 py-1 rounded text-blue-400"
              >src/views</code
            >.
          </p>
        </div>
        <div class="flex items-start space-x-4">
          <div
            class="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold"
          >
            3
          </div>
          <p class="text-slate-300">
            The project is configured with TypeScript and ES Modules for maximum
            safety and performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";

const techStack = [
  {
    name: "Vue 3",
    description:
      "The progressive JavaScript framework for building user interfaces. Using the Composition API for better logic reuse.",
    icon: () =>
      h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M13 10V3L4 14h7v7l9-11h-7z",
        }),
      ]),
  },
  {
    name: "TypeScript",
    description:
      "Providing static typing and modern JavaScript features to catch errors early and improve project maintainability.",
    icon: () =>
      h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        }),
      ]),
  },
  {
    name: "Pinia / Router",
    description:
      "State management and client-side routing, providing a seamless single-page application experience.",
    icon: () =>
      h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        }),
      ]),
  },
];
</script>
