import axios from "axios";



const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key:'f3273f84e72a6ee9b3198affe338ebd6',
        language:'pt-BR',
        page:1
    }
})

export default api