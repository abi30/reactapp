import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsAPI";



const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};
// async thunk created
export const fetchRelatedBlogs = createAsyncThunk('relatedBlogs/fetchRelatedBlogs',async ({tags,id}) => {
    const relatedVideos = await getRelatedBlogs({tags,id});
    console.log(relatedVideos);
    return relatedVideos;
  }
);

const reletedBlogsSlice = createSlice({
name:"relatedBlogs",
initialState,
// reducers:{},
extraReducers: (builder) => {
    builder
    .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError =false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs=[];
        state.isError =true;
        state.error = action.error?.message;
      });
  },
});

export default reletedBlogsSlice.reducer;