<script setup lang="ts">
import { useCounterStore } from "../store/counter";

const counter = useCounterStore();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000"
  >
    <div class="text-center space-y-4">
      <h2 class="text-5xl font-black tracking-tight">
        Welcome to
        <span
          class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent underline decoration-emerald-500/30"
          >Home</span
        >
      </h2>
      <p class="text-xl text-slate-400 max-w-lg mx-auto">
        Testing Pinia state and Composition API logic in this beautiful
        interface.
      </p>
    </div>

    <div
      class="p-8 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl flex flex-col items-center space-y-6 w-full max-w-md"
    >
      <div class="text-center">
        <p
          class="text-sm font-medium text-slate-500 uppercase tracking-widest mb-1"
        >
          Current Count
        </p>
        <div class="text-6xl font-mono font-bold text-white tabular-nums">
          {{ counter.count }}
        </div>
        <p class="text-emerald-400 mt-2 font-medium">
          Double: {{ counter.doubleCount }}
        </p>
      </div>

      <button
        @click="counter.increment"
        class="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold rounded-2xl transition-all duration-300 transform active:scale-95 shadow-lg shadow-emerald-500/20"
      >
        Increment Counter +
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
        <h4 class="font-bold text-slate-200 mb-2">Vite + Vue 3</h4>
        <p class="text-sm text-slate-500">
          Fast HMR and optimal developer experience.
        </p>
      </div>
      <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
        <h4 class="font-bold text-slate-200 mb-2">Tailwind CSS</h4>
        <p class="text-sm text-slate-500">
          Modern utility-first styling for premium looks.
        </p>
      </div>
    </div>
  </div>
</template>
