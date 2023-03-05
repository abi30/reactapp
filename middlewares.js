
const delayActionMiddleware = (store) => (next) => (action) => {

    if(action.type === 'todos/todoAdded'){
        console.log("I am deleying you");

        setTimeout(()=> {
            next(action);
        },2000);

        return;
    }

    return next(action);

    
}
const fetchAsyncMiddleware = (store) => (next) => async (action) => {
    // we are going to check the action type 
    if (typeof action === 'function') {
        // we got fetchTodos() as a action() function.
        return action(store.dispatch, store.getState);
    }
    return next(action);

}

module.exports = {
    delayActionMiddleware,
    fetchAsyncMiddleware
}