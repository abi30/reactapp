import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";



const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};
// async thunk created
export const fetchvideos = createAsyncThunk('videos/fetchvideos',async () => {
    const videos = await getVideos();
    console.log(videos);
    return videos;
  }
);

const videosSlice = createSlice({
name:"videos",
initialState,
// reducers:{},
extraReducers: (builder) => {
    builder
    .addCase(fetchvideos.pending, (state) => {
        state.isError =false;
        state.isLoading = true;
      })
      .addCase(fetchvideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchvideos.rejected, (state, action) => {
        state.isLoading = false;
        state.videos=[];
        state.isError =true;
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer;