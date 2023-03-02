import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED
} from "./actionTypes";
import initialState from "./initialState";

// for creating new id using reduce function from js
const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
  return maxId;
};

// function nextTodoId(todos) {
//     const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
//     return maxId;
//   }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
          // completed: !completed
        };
      });
    case COLORSELECTED:
        // destructure object javascript
        const { todoId,color } = action.payload;
      return state.map((todo) => {

            if(todo.id!== todoId){
                return todo;
            }
            return {
                ...todo,
                color: color
            };
      });
    case DELETED:
    // filter return a new array with the deleted todo
    return state.filter((todo) => todo.id!== action.payload);
    case ALLCOMPLETED:
      return state.map(todo=>{
        return {
            ...todo,
            completed: true
        };
    });
    case CLEARCOMPLETED:
         // filter return a new array with the deleted todo
    return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
};


export default reducer;
