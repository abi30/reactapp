const fetch = require('node-fetch');

// fetchtodos function need two parameters these will be  provided from action() function 
// what is call from a reusable function like fetchAsyncMiddlewares()
const fetchTodos= async (dispatch,getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const todos = await response.json();

        dispatch({
            type:"todos/todoLoaded",
            payload:todos
        });
        console.log(`Number of updated todos: ${getState().todos.length}`);
}

module.exports={
    fetchTodos
}