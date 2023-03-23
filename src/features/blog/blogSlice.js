import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getBlog } from "./blogAPI";



const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};
// async thunk created
export const fetchBlog = createAsyncThunk('blog/fetchBlog',async (id) => {
    const blog = await getBlog(id);
    console.log('helo');
    console.log(blog);
   return blog;
  }
);

const blogSlice = createSlice({
name:"blog",
initialState,
// reducers:{},
extraReducers: (builder) => {
    builder
    .addCase(fetchBlog.pending, (state) => {
        state.isError =false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog={};
        state.isError =true;
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;