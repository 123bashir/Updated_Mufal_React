import apiRequest from "./apiRequest"

export const singlePageLoader=async({Request,params})=>{
    const res=await apiRequest.post("/posts/"+params.id)
    return res.data
}