<script setup>
    import { computed, reactive } from 'vue'
    import AppInput from '../ui/AppInput.vue'
    import AppButton from '../ui/AppButton.vue'

    const emit = defineEmits(['save'])

    const form = reactive({
        title: '',
        price: 0,
        tags: '',
        stock: 1,
    })

    const isInvalid = computed(() => {
        return form.title.length < 5 || form.price <= 0
    })

    const handleSubmit = () => {
        if (isInvalid.value) return
        emit('save', { ...form })
        form.title = ''
        form.price = 0
        form.tags = ''
    }
</script>

<template>
    <form
        @submit.prevent="handleSubmit"
        class="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6"
    >
        <h2
            class="text-2xl font-black text-slate-800 italic underline decoration-primary decoration-4"
        >
            Añadir Nuevo Curso
        </h2>

        <AppInput v-model="form.title" label="Título del curso" placeholder="Ej: Master en SRE" />
        <AppInput v-model.number="form.price" type="number" label="Precio (USD)" />
        <AppInput v-model.number="form.stock" type="number" label="Stock Inicial" />
        <AppInput v-model="form.tags" label="Etiquetas" placeholder="Vue, JS, 2026" />

        <AppButton label="Guardar Curso" class="w-full" :disabled="isInvalid" />

        <p v-if="isInvalid" class="text-xxs text-center text-slate-400 font-bold uppercase">
            * El título debe tener al menos 5 caracteres
        </p>
    </form>
</template>
