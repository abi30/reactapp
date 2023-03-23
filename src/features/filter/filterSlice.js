const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sort:"",
    isSaved:false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        isSavedToggle:(state,action) =>{
            state.isSaved = !state.isSaved
          },
        sortBy: (state, action) => {
            console.log(action.payload);
            state.sort = action.payload;
        },
    },
});
export default filterSlice.reducer;
export const { isSavedToggle, sortBy } = filterSlice.actions;