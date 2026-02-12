import { ref } from 'vue'
import api from '@/api/microsoftClient'

export const useCourses = () => {
    const courses = ref([])
    const loading = ref(false)
    const error = ref(null)

    const adaptToCourse = (msModule) => {
        return {
            id: msModule.uid,
            title: msModule.title,
            price: msModule.duration_in_minutes
                ? Math.round(msModule.duration_in_minutes * 0.5)
                : 0,
            tags: msModule.levels || ['General'],
            stock: 50,
            image: msModule.icon_url,
            summary: msModule.summary,
        }
    }

    const fetchCourses = async () => {
        loading.value = true
        error.value = null

        try {
            const { data } = await api.get('/catalog')
            const rawModules = data.modules.slice(0, 24)
            courses.value = rawModules.map(adaptToCourse)
        } catch (err) {
            console.error(err)
            error.value = 'Error al conectarse con Microsoft Learn'
        } finally {
            loading.value = false
        }
    }

    return {
        courses,
        loading,
        error,
        fetchCourses,
    }
}

// const courses = ref([
//     { id: 1, title: 'Vue.js Pro', price: 49, tags: ['Frontend', 'JS'], stock: 5 },
//     { id: 2, title: 'Tailwind v4', price: 29, tags: ['Design', 'CSS'], stock: 0 },
//     { id: 3, title: 'Node.js', price: 59, tags: ['Backend', 'DevOps'], stock: 12 },
//     { id: 4, title: 'AI for Devs', price: 99, tags: ['AI', 'Prompting'], stock: 3 },
// ])

// export const useCourses = () => {
//     const addCourse = (newCourse) => {
//         courses.value.push({
//             ...newCourse,
//             id: Date.now(),
//             tags: newCourse.tags.split(',').map((tag) => tag.trim()),
//         })
//     }

//     const getCourseById = (id) => {
//         return courses.value.find((c) => c.id === Number(id))
//     }

//     return { courses, addCourse, getCourseById }
// }
