import { ref } from 'vue'

export const useCourses = () => {
    const courses = ref([
        { id: 1, title: 'Vue.js Pro', price: 49, tags: ['Frontend', 'JS'], stock: 5 },
        { id: 2, title: 'Tailwind v4', price: 29, tags: ['Design', 'CSS'], stock: 0 },
        { id: 3, title: 'Node.js', price: 59, tags: ['Backend', 'DevOps'], stock: 12 },
        { id: 4, title: 'AI for Devs', price: 99, tags: ['AI', 'Prompting'], stock: 3 },
    ])

    const addCourse = (newCourse) => {
        courses.value.push({
            ...newCourse,
            id: Date.now(),
            tags: newCourse.tags.split(',').map((tag) => tag.trim()),
        })
    }

    return { courses, addCourse }
}
