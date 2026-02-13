<script setup>
    defineProps({
        type: { type: String, default: 'loading' },
        message: { type: String, default: '' },
    })

    defineEmits(['retry'])
</script>

<template>
    <div class="flex flex-col item-center justify-center p-12 text-center w-full">
        <div v-if="type === 'loading'" class="flex flex-col items-center gap-4">
            <div
                class="animate-spin w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full"
            ></div>
            <div class="text-slate-400 font-bold animate-pulse uppercase tracking-widest text-xs">
                {{ message || 'Cargando contenido...' }}
            </div>
        </div>

        <div v-else class="bg-red-50 rounded-3xl border-2 border-red-100 max-w-md p-4">
            <div class="mb-4">☢️</div>
            <h3 class="text-red-900 font-black text-xl mb-2">Error de Conexión</h3>
            <p class="text-red-600 text-sm mb-6 leading-relaxed">
                {{ message || 'No pudimos conectar con el servidor...' }}
            </p>

            <button
                @click="$emit('retry')"
                class="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 transition-colors active:scale-95"
            >
                Intentar Nuevamente
            </button>
        </div>
    </div>
</template>
