<script setup>
    const model = defineModel()
</script>

<template>
    <div class="relative w-full max-w-lg">
        <input
            v-model="model"
            type="text"
            class="block w-full pl-10 pr-3 py-4 border border-slate-200 rounded-xl"
            placeholder="Buscar curso..."
        />

        <button
            v-if="model"
            @click="model = ''"
            class="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-400 cursor-pointer"
        >
            X
        </button>
    </div>
</template>
