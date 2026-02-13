<script setup>
    import { useRouter } from 'vue-router'

    const props = defineProps({
        course: {
            type: Object,
            required: true,
        },
    })

    const router = useRouter()

    const goToDetail = () => {
        router.push({ name: 'course-detail', params: { id: props.course.id } })
    }
</script>

<template>
    <article
        @click="goToDetail"
        class="group bg-white p-3 rounded-xl border border-slate-200 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl cursor-pointer"
    >
        <div class="flex justify-between items-start mb-4">
            <img
                v-if="course.icon"
                :src="course.icon"
                alt="Icono del curso"
                class="w-12 h-12 object-contain"
            />
            <div class="flex gap-2">
                <span
                    v-for="tag in course.tags"
                    :key="tag.id"
                    class="text-xxs font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase"
                >
                    {{ tag }}
                </span>
            </div>
        </div>

        <h3 class="text-xl font-bold text-slate-800 mb-8 group-hover:text-balance">
            {{ course.title }}
        </h3>

        <div class="flex justify-between items-center">
            <span class="text-2xl font-black text-slate-900">{{
                course.price > 0 ? `$${course.price}` : 'GRATIS'
            }}</span>

            <!-- <span v-if="course.stock > 0" class="text-xxs font-bold text-emerald-500 uppercase">
                {{ course.stock }} cupos
            </span>
            <span v-else class="text-xxs font-bold text-red-400 uppercase italic"> Agotado </span> -->

            <span
                :class="[
                    'text-xxs font-bold uppercase',
                    course.stock > 0 ? 'text-emerald-500' : 'text-red-400 italic',
                ]"
            >
                {{ course.stock > 0 ? `${course.stock} cupos` : 'Agotado' }}
            </span>
        </div>
    </article>
</template>
