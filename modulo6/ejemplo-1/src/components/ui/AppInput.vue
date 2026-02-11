<script setup>
    defineProps(['modelValue', 'label', 'type', 'placeholder'])

    defineEmits(['update:modelValue'])
</script>

<template>
    <div class="flex flex-col gap-1 w-full text-left">
        <label
            v-if="label"
            class="text-xs font-black uppercase text-slate-400 tracking-widest ml-1"
        >
            {{ label }}
        </label>
        <input
            :type="type || 'text'"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white text-slate-700"
        />
    </div>
</template>
