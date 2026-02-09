import { ref, computed } from 'vue'

export const useCounter = (maxStock = 10) => {
    const count = ref(0)

    const isFull = computed(() => count.value >= maxStock)
    const available = computed(() => maxStock - count.value)

    const increment = () => {
        if (count.value < maxStock) count.value++
    }

    const reset = () => (count.value = 0)

    return {
        count,
        isFull,
        available,
        increment,
        reset
    }
}