<script setup>
    import AppButton from '@/components/ui/AppButton.vue';
    import { useCounter } from '@/composables/useCounter';

    const { count, isFull, available, increment, reset } = useCounter(8)
</script>

<template>
    <main class="min-h-screen flex flex-col items-center justify-center p-6">
        <div class="max-w-2xl w-full text-center">
            <h1 class="text-6xl font-black text-slate-900 mb-4 tracking-tighter">
                Cursos <span class="text-primary italic">Online</span>
            </h1>

            <p class="text-xl text-slate-500 mb-12">Inscripciones abiertas para todos los cursos</p>

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