// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");


const INCREMENT = "increment";
const DECREMENT = "decrement";
//actions creators
const increment =(value)=>{
    return {
        type:INCREMENT,
        payload:value
    }

};
const decrement = (value)=>{
    return {
        type:DECREMENT,
        payload:value
    }

};


// initial state
const initialState = {
    value: 1,
};


// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + action.payload,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - action.payload,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);


// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(2));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(1));
});
