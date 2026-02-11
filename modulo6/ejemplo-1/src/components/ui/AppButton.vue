<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        label: { type: String, required: true },
        variant: { type: String, default: 'primary' },
        disabled: { type: Boolean, default: false },
    })

    const buttonClasses = computed(() => {
        const base =
            'px-6 py-3 font-bold transition-all duration-300 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm border-2'

        const styles = {
            primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20',
            outline: 'border-primary text-primary hover:bg-primary/5',
        }

        return `${base} ${styles[props.variant]}`
    })
</script>

<template>
    <button :class="buttonClasses" :disabled="disabled">
        {{ label }}
    </button>
</template>
