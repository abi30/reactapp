import { deleted } from "../actions";

const deleteTodo = (todoId)=>{
   return  async (dispatch) => {
         await fetch(`http://localhost:9000/todos/${todoId}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; chartset=utf-8"
            }
        });
        // const todo = await response.json();
    
        dispatch(deleted(todoId));
    };
}

export default deleteTodo;
