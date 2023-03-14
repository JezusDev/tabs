import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4001'
})

api.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')

export default api