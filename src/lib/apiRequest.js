import axios from "axios"


const apiRequest= axios.create({
    baseURL:"http://api.mufaldatasub.com",
    // baseURL:"http://localhost:8800/api",
    withCredentials:true,
})

export default apiRequest
