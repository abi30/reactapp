const configureStore = require("@reduxjs/toolkit").configureStore;

const counterReducer = require("../features/counter/counterSlice");


// configure Store 
const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
});

module.exports = store;