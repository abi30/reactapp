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

           isSavedToggleSelected: (state, action) => {
            //  state.filterBySave = !state.filterBySave
             state.filterBySave = action.payload
             // state.tags.push(action.payload);
            },
            isSavedToggleRemoved: (state, action) => {
            state.filterBySave = false
            // const indexToRemove = state.tags.indexOf(action.payload);
            // if (indexToRemove !== -1) {
            //     state.tags.splice(indexToRemove, 1);
            // }
        },

        sortBy: (state, action) => {
            state.sort = action.payload;
        },
    },
});
export default filterSlice.reducer;
export const { isSavedToggle,isSavedToggleSelected,isSavedToggleRemoved, sortBy } = filterSlice.actions;