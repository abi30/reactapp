import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getblogs ,getSavedBlogs} from "./blogsAPI";



const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  isFilter:"",
  error: "",
};
// async thunk created
export const fetchblogs = createAsyncThunk('blogs/getblogs',async ({sort,filterBySave}) => {
    const blogs = await getblogs(sort,filterBySave);
    // console.log(blogs);
    return blogs;
  }
);

export const fetchSavedBlogs = createAsyncThunk('blogs/getSavedBlogs',async () => {
    const blogs = await getSavedBlogs();
    console.log(blogs);
    return blogs;
  }
);

const blogsSlice = createSlice({
name:"blogs",
initialState,
// reducers:{},
extraReducers: (builder) => {
    builder
    .addCase(fetchblogs.pending, (state) => {
        state.isError =false;
        state.isLoading = true;
      })
      .addCase(fetchblogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.isFilter = "all";
      })
      .addCase(fetchblogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs=[];
        state.isFilter = "all";
        state.isError =true;
        state.error = action.error?.message;
      })
      .addCase(fetchSavedBlogs.pending, (state) => {
        // state.isError =false;
        // state.isLoading = true;
      })
      .addCase(fetchSavedBlogs.fulfilled, (state, action) => {
        // state.isLoading = false;
        state.blogs = action.payload;
        state.isFilter = "saved";
      })
      .addCase(fetchSavedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isFilter = "saved";
        state.blogs=[];
        state.isError =true;
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;