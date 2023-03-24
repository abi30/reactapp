import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getBlog,updateSave, updateLike} from "./blogAPI";



const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};
// async thunk created
export const fetchBlog = createAsyncThunk('blog/fetchBlog',async (id) => {
    const blog = await getBlog(id);
   return blog;
  }
);

export const changeSaveStatus = createAsyncThunk('blog/changeSaveStatus',async ({id,isSaved}) => {
  const blog = await updateSave({id,isSaved});
  console.log(blog);
  return blog;
}
);
export const likeBlog = createAsyncThunk('blog/likeBlog',async ({id,currentLike}) => {
  const blog = await updateLike({id, currentLike});
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