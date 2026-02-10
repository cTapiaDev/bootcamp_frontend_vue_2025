<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        name: { type: String, required: true },
        role: { type: String, default: 'student' },
        avatarUrl: { type: String, default: 'https://api.dicebear.com/7.x/avataaars/svg?seed=56' }
    })

    const roleStyles = computed(() => {
        return props.role === 'admin'
            ? 'border-dashed shadow-lg'
            : 'border-slate-200'
    })
</script>

<template>
    <div class="flex items-center gap-3 p-2 bg-white rounded-full border shadow-sm" :class="roleStyles">
        <img 
            :src="avatarUrl"
            :alt="`Avatar de ${name}`"
            class="size-10 rounded-full bg-slate-100"
        />
        <div class="pr-4">
            <p class="text-sm font-bold text-slate-800 leading-none">{{ name }}</p>
            <span class="text-xxs uppercase tracking-widest font-black">
                {{ role }}
            </span>
        </div>
    </div>
</template>