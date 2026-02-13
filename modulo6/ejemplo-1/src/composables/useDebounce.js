import { ref, customRef } from 'vue'

export const useDebounceRef = (value, delay = 300) => {
    let timeout
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value
            },
            set(newValue) {
                clearTimeout(timeout)
                timeout = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay)
            },
        }
    })
}
