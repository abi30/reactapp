import axios from "../../utils/axios"
import { useSelector } from "react-redux";

export const getblogs = async ()=>{
    const response = await axios.get('/blogs')
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


