<script setup>
    import { ref } from 'vue';
    import UserBadge from '@/components/ui/UserBadge.vue';

    const isLogged = ref(false)
    const showDetails = ref(true)

    const toggleLogin = () => (isLogged.value = !isLogged.value)
</script>

<template>
    <header>
        <nav class="p-6 h-27 flex justify-between items-center border-b bg-white/50">
            <h2 class="text-2xl font-black tracking-tighter">C_C</h2>

            <UserBadge
                v-if="isLogged"
                name="Juanito"
                role="admin"
            />

            <button
                @click="toggleLogin"
                class="text-sm font-bold cursor-pointer"
            >
                {{ isLogged ? 'Cerrar Sesión' : 'Iniciar Sesión' }}
            </button>
        </nav>
    </header>

    <main class="p-10">
        <section>
            <button
                @click="showDetails = !showDetails"
                class="mb-4 text-xs font-mono underline cursor-pointer"
            >
                Toggle Info
            </button>

            <div
                v-show="showDetails"
                class="p-4 bg-slate-900 text-emerald-400 rounded-lg font-mono text-xs"
            >
                Estado: {{ isLogged ? 'AUTENTICADO' : 'ANÓNIMO' }}
            </div>
        </section>
    </main>
    
</template>