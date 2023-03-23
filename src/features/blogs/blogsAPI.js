import axios from "../../utils/axios"
import { useSelector } from "react-redux";

export const getblogs = async ({sort,filterBySave})=>{

    let queryString = "";
    if(filterBySave){
        queryString += `isSaved=true`;
    }
    if(sort ==="newest"){
        queryString += queryString 
        ?`&_sort=createdAt&_order=desc`
        :"_sort=createdAt&_order=desc";
    }
    if(sort ==="most_liked"){
        queryString += queryString 
        ?`&_sort=likes&_order=desc`
        :"_sort=likes&_order=desc";
    }
    const url = queryString ?`/blogs?${queryString}`:"/blogs";
    // const response = await axios.get('/blogs')
    const response = await axios.get(url);
        return response.data;

}
export const getSavedBlogs = async () =>{
// export const getSavedBlogs = async (_, { getState }) =>{
    // const { items } = getState().blogs;
    const response = await axios.get('/blogs')
    const items = response.data;
    // return response.data;
    return items.filter((blog) => blog.isSaved);
}
// export const filterSavedProducts = createAsyncThunk('products/filterSavedProducts', async (_, { getState }) => {
//     const { items } = getState().products;
//     return items.filter((product) => product.wishlist);
//   });


