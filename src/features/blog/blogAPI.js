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
    // console.log(id);
    // console.log(isSaved);
    // if(isSaved===false){
    //     isSaved=true;
        
    //     console.log(isSaved);
    // }
    const response = await axios.patch(`/blogs/${id}`,{isSaved});
    const updatedBlogPost = { ...response.data, isSaved };
        return updatedBlogPost;
        // return response.data;
}