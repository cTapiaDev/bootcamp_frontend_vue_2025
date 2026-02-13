<script setup>
    defineProps({
        levels: { type: Array, required: true },
    })

    const selected = defineModel()
</script>

<template>
    <div class="flex flex-wrap gap-2 py-4">
        <button
            @click="selected = ''"
            :class="[
                'px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer',
                selected === ''
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400',
            ]"
        >
            Todos
        </button>

        <button
            v-for="level in levels"
            :key="level"
            @click="selected = level"
            :class="[
                'px-4 py-2 rounded-full text-xs font-bold transition-all border capitalize cursor-pointer',
                selected === level
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-primary/50 hover:text-primary',
            ]"
        >
            {{ level }}
        </button>
    </div>
</template>
