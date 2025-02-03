import axios from "axios"


const apiRequest= axios.create({
    baseURL:"http://localhost:8800/api",
    // baseURL:"https:///api.mufaldatasub.com/api",

    withCredentials:true,
})
const webRequest= axios.create({
    baseURL:"http://localhost:5173/",
    // baseURL:"https://mufaldatasub.com",

})
export default apiRequest