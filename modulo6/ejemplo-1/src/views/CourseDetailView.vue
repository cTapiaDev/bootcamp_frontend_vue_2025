<script setup>
    import { onMounted, computed } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { useCourses } from '@/composables/useCourses'
    import AppButton from '@/components/ui/AppButton.vue'
    import AppStatus from '@/components/ui/AppStatus.vue'

    const router = useRouter()
    const route = useRoute()
    const { courses, fetchCourses, loading, error } = useCourses()

    const courseId = route.params.id

    const course = computed(() => {
        return courses.value.find((c) => c.id === courseId)
    })

    // Lifecycle Hook
    onMounted(async () => {
        if (courses.value.length === 0) {
            await fetchCourses()
        }
    })
</script>

<template>
    <div class="max-w-4xl mx-auto p-10 min-h-screen">
        <AppButton label="⬅️ Volver" variant="outline" @click="router.back()" class="mb-8" />

        <div v-if="loading" class="py-20">
            <AppStatus type="loading" message="Recuperando información del curso..." />
        </div>

        <div v-else-if="error" class="py-20 flex justify-center">
            <AppStatus type="error" :message="error" @retry="fetchCourses" />
        </div>

        <main
            v-else-if="course"
            class="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100"
        >
            <div class="flex flex-col justify-center md:flex-row gap-6 mb-8 items-start">
                <img
                    v-if="course.image"
                    :src="course.image"
                    class="h-full object-contain p-2 bg-slate-800 rounded-2xl text-slate-50 border border-slate-100"
                    alt="Logo generico"
                />
            </div>

            <div class="flex-1">
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
            </div>

            <p class="text-xl text-slate-600 mb-10 leading-relaxed">
                {{ course.summary || 'Sin descripción disponible para este curso.' }}
            </p>

            <div class="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                <div>
                    <span class="block text-sm font-bold text-slate-400 uppercase"
                        >Precio Total</span
                    >
                    <span class="text-4xl font-black text-slate-900">${{ course.price }}</span>
                </div>

                <AppButton
                    :label="course.stock > 0 ? 'Reservar Cupo' : 'Agotado'"
                    :disabled="course.stock <= 0"
                />
            </div>
        </main>
    </div>
</template>
