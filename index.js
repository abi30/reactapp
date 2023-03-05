const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware,
    fetchAsyncMiddleware} = require("./middlewares");
const {fetchTodos} = require("./functions");

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};

// const store = createStore(todoReducer);
const store = createStore(todoReducer,applyMiddleware( delayActionMiddleware,
    fetchAsyncMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn Redux",
// });

// store.dispatch({
//     type: "todos/fetchTodos",
// });
// https://github.com/abi30/reactapp.git
// here we are put the fetchTodos function as a body does not return anything
store.dispatch(fetchTodos);

