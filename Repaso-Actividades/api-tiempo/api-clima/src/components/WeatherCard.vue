<script setup>
defineProps({
  city: {
    type: String,
    required: true,
  },
  today: {
    type: Object,
    required: true,
  },
  tomorrow: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-auto transition-transform transform hover:scale-105"
  >
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">{{ city }}</h2>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-blue-50 p-4 rounded-lg text-center flex flex-col justify-center">
        <!-- <span></span> -->
        <h3 class="text-lg font-semibold text-blue-800 mb-2">Hoy</h3>
        <p class="text-2xl font-bold text-blue-600">{{ today.tempMax }}°C</p>
        <p class="text-sm text-blue-400">Min: {{ today.tempMin }}°C</p>
      </div>

      <div class="bg-indigo-50 p-4 rounded-lg text-center flex flex-col justify-center">
        <span></span>
        <h3 class="text-lg font-semibold text-indigo-800 mb-2">Mañana</h3>
        <p class="text-2xl font-bold text-indigo-600">{{ tomorrow.tempMax }}°C</p>
        <p class="text-sm text-indigo-400">Min: {{ tomorrow.tempMin }}°C</p>
      </div>
    </div>
  </div>
</template>
