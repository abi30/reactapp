const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    sort:"",
    filterBySave:false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        isSavedToggle:(state,action) =>{
            state.filterBySave = !state.filterBySave
          },
        sortBy: (state, action) => {
            state.sort = action.payload;
        },
    },
});
export default filterSlice.reducer;
export const { isSavedToggle, sortBy } = filterSlice.actions;