import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getblogs} from "./blogsAPI";



const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  isFilter:"",
  error: "",
};
// async thunk created
export const fetchblogs = createAsyncThunk('blogs/getblogs',async ({sort,filterBySave}) => {
    const blogs = await getblogs({sort,filterBySave});
    // console.log(blogs);
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
      })
      .addCase(fetchblogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs=[];
        state.isError =true;
        state.error = action.error?.message;
      });

  },
});

export default blogsSlice.reducer;