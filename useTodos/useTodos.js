import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";



export const useTodos = () => {
    
    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
      };
    
    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

    useEffect(() => {
        const todosJSON = JSON.stringify(todos);
        localStorage.setItem("todos", todosJSON || []);
      }, [todos]);
      


    const handleNewTodo = (todo) => {
        const action = {
          type: "[TODO] Add Todo",
          payload: todo,
        };
        dispatchTodo(action);
      };
    
    const handleDeleteTodo = (id) => {
        const action = {
          type: "[TODO] Remove Todo",
          payload: id,
        };
        dispatchTodo(action);
      };
    
    const handleToggleTodo = (id) => {
        console.log({ id });
        dispatchTodo({
          type: "[TODO] Toggle Todo",
          payload: id,
        });
      };
  
  
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,  
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo
    }

}


