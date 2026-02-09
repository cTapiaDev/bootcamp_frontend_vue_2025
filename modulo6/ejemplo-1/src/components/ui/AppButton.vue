<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        label: { type: String, required: true },
        variant: { type: String, default: 'primary' },
        disabled: { type: Boolean, default: false }
    })

    const buttonClasses = computed(() => {
        const base = "px-6 py-3 font-bold"

        const styles = {
            primary: "bg-primary text-white shadow-lg",
            outline: "border-2 border-primary text-primary"
        }

        return `${base} ${styles[props.variant]}`
    })
</script>

<template>
    <button :class="buttonClasses" :disabled="disabled">
        {{ label }}
    </button>
</template>