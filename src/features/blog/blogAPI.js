import axios from "../../utils/axios"

export const getBlog = async (id)=>{
    const response = await axios.get(`/blogs/${id}`)
        return response.data;
}
export const updateLike = async ({id,currentLike})=>{
    const response = await axios.get(`/blogs/${id}`,{
        likes:currentLike +1
    });
        return response.data;
}
export const updateSave = async ({id,isSaved})=>{
    const response = await axios.get(`/blogs/${id}`,{
        isSaved
    })
        return response.data;
}