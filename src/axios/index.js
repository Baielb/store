import axios from 'axios'

const copyAxios = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
})

export default copyAxios