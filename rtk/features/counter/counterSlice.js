const {createSlice} = require('@reduxjs/toolkit');

// initial state
const initialState ={
    count:0,
};

const counterSlice = createSlice({
    name:"counter",
    initialState,
    redeucers : {
        increment : (state,action) =>{
            state.count++;
        },
        decrement : (state,action) =>{
            state.count--;
        },
    },
});
module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;


