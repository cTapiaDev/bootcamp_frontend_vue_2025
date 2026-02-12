<script setup>
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { useCourses } from '@/composables/useCourses'
    import AppButton from '@/components/ui/AppButton.vue'

    const props = defineProps(['id'])
    const router = useRouter()
    const { getCourseById } = useCourses()

    const course = ref(null)
    const isLoading = ref(true)

    // Lifecycle Hook
    onMounted(() => {
        setTimeout(() => {
            course.value = getCourseById(props.id)
            isLoading.value = false
        }, 800)
    })
</script>

<template>
    <AppButton label="<- Volver" variant="outline" @click="router.back()" class="mb-8" />

    <div v-if="isLoading" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-4 border-primary"></div>
    </div>

    <main v-else-if="course" class="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100">
        <div class="flex gap-3 mb-6">
            <span
                v-for="tag in course.tags"
                :key="tag"
                class="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase"
            >
                {{ tag }}
            </span>
        </div>

        <h1 class="text-5xl font-black text-slate-900 mb-6">{{ course.title }}</h1>

        <p class="text-xl text-slate-600 mb-10 leading-relaxed">
            {{ course.description || 'Sin descripción disponible para este curso.' }}
        </p>

        <div class="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
            <div>
                <span class="block text-sm font-bold text-slate-400 uppercase">Precio Total</span>
                <span class="text-4xl font-black text-slate-900">${{ course.price }}</span>
            </div>

            <AppButton
                :label="course.stock > 0 ? 'Reservar Cupo' : 'Agotado'"
                :disabled="course.stock <= 0"
            />
        </div>
    </main>
</template>
