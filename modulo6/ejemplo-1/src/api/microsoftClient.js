import axios from 'axios'

const api = axios.create({
    baseURL: '/api-ms',
    timeout: 10000,
    headers: {
        Accept: 'application/json',
    },
})

export default api
