const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware,
    fetchTodosMiddleware} = require("./middlewares");

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
    fetchTodosMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "Learn Redux",
// });


store.dispatch({
    type: "todos/fetchTodos",
});

