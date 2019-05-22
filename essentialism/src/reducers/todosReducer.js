import {ADD_TODO,TODO_COMPLETE} from '../actions/index'



  
  export default (todos = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return todos.concat(action.payload);
      case TODO_COMPLETE:
        todos[action.payload].complete = !todos[action.payload].complete;
        return todos;
      default:
        return todos;
    }
  };