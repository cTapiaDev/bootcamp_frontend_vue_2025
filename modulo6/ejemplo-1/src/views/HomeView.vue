<script setup>
    import AppButton from '@/components/ui/AppButton.vue';
    import { useCounter } from '@/composables/useCounter';
    import { useCourses } from '@/composables/useCourses';

    const { count, isFull, available, increment, reset } = useCounter(8)
    const { courses } = useCourses()
</script>

<template>
    <main class="min-h-screen flex flex-col items-center justify-center p-6">
        <div class="max-w-2xl w-full text-center">
            <h1 class="text-6xl font-black text-slate-900 mb-4 tracking-tighter">
                Cursos <span class="text-primary italic">Online</span>
            </h1>

            <p class="text-xl text-slate-500 mb-12">Inscripciones abiertas para todos los cursos</p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <article
                    v-for="course in courses"
                    :key="course.id"
                    class="group bg-white p-3 rounded-xl border border-slate-200 
                        transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl"
                >
                    <div class="flex gap-2 mb-4">
                        <span
                            v-for="tag in course.tags"
                            :key="tag.id"
                            class="text-xxs font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase"
                        >
                            {{ tag }}
                        </span>
                    </div>

                    <h3 class="text-xl font-bold text-slate-800 mb-8 group-hover:text-balance">
                        {{ course.title }}
                    </h3>

                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-black text-slate-900">${{ course.price }}</span>
                        
                        <span
                            v-if="course.stock > 0"
                            class="text-xxs font-bold text-emerald-500 uppercase"
                        >
                            {{ course.stock }} cupos
                        </span>
                        <span
                            v-else
                            class="text-xxs font-bold text-red-400 uppercase italic"
                        >
                            Agotado
                        </span>
                    </div>
                </article>
            </div>

            

            <div class="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 mb-8">
                <h2 class="text-sm uppercase tracking-widest font-bold text-slate-400 mb-2">Cupos Tomados</h2>
                <div class="text-7xl font-black text-slate-800 mb-6">
                    {{ count }} <span class="text-2xl text-slate-300">/ 8</span>
                </div>

                <div class="flex flex-col gap-4 justify-center">
                    <AppButton 
                        label="Inscribirme"
                        @click="increment"
                        :disabled="isFull"
                    />
                    <AppButton 
                        label="Reiniciar"
                        variant="outline"
                        @click="reset"
                    />
                </div>
            </div>

            <p v-if="isFull" class="text-red-500 font-bold animate-pulse">
                ¡LO SENTIMOS! YA NO QUEDAN CUPOS!!
            </p>
            <p v-else class="text-slate-400 font-medium">
                Quedan <span class="text-primary font-bold">{{ available }}</span> lugares disponibles.
            </p>
            
        </div>
 
    </main>
</template>