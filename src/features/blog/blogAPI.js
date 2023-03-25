import axios from "../../utils/axios"

export const getBlog = async (id)=>{
    const response = await axios.get(`/blogs/${id}`)
        return response.data;
}
export const updateLike = async ({id,currentLike})=>{
    const response = await axios.patch(`/blogs/${id}`,{
        likes:currentLike +1
    });
        return response.data.likes;
}
export const updateSave = async ({id,isSaved})=>{
    
    const response = await axios.patch(`/blogs/${id}`,{isSaved});
    // const {data} = response;
    // console.log(response.data);
    // console.log(data);
    // const updatedBlogPost = { ...response.data, isSaved };
           
        // return updatedBlogPost;
        return response.data.isSaved;
}