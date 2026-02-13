import { ref, computed } from 'vue'
import api from '@/api/microsoftClient'
import { useDebounceRef } from './useDebounce'

const courses = ref([])
const loading = ref(false)
const error = ref(null)

export const useCourses = () => {
    const searchQuery = useDebounceRef('')
    const activeLevel = ref('')

    const adaptToCourse = (msModule) => {
        return {
            id: msModule.uid,
            title: msModule.title,
            price: msModule.duration_in_minutes
                ? Math.round(msModule.duration_in_minutes * 0.5)
                : 0,
            tags: msModule.levels || ['General'],
            stock: 50,
            icon: msModule.icon_url,
            image: msModule.social_image_url,
            summary: msModule.summary,
        }
    }

    const fetchCourses = async () => {
        loading.value = true
        error.value = null

        try {
            const { data } = await api.get('/catalog')
            const rawModules = data.modules.slice(0, 100)
            courses.value = data.modules.map(adaptToCourse)
        } catch (err) {
            console.error(err)
            error.value = 'Error al conectarse con Microsoft Learn'
        } finally {
            loading.value = false
        }
    }

    const filteredCourses = computed(() => {
        return courses.value.filter((course) => {
            const matchesSearch = course.title
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase())

            const matchesLevel = activeLevel.value ? course.tags.includes(activeLevel.value) : true

            return matchesSearch && matchesLevel
        })
    })

    const uniqueLevels = computed(() => {
        const levels = new Set()
        courses.value.forEach((c) => c.tags.forEach((tag) => levels.add(tag)))
        return Array.from(levels)
    })

    return {
        courses,
        loading,
        error,
        fetchCourses,
        filteredCourses,
        searchQuery,
        activeLevel,
        uniqueLevels,
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
