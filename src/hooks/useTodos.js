import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer";

export const useTodos = () => {
    const initialState = []
    
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    
    const [state, dispatch] = useReducer(toDoReducer, initialState, init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])
    
    
    const onHandleNewToDo = (todo) => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: todo
        }
    
        dispatch(action);
    }
    
    const handleDeleteToDo = (id) => {
        dispatch({
            type: '[TODO] Remove ToDo',
            payload: id
        })
    }
    
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle ToDo',
            payload: id
        })
    }

    const pendingTodosCount = state.filter( todo => !todo.done ).length;

    return {
        todos: state,
        onHandleNewToDo,
        handleDeleteToDo,
        handleToggleTodo,
        pendingTodosCount,
        todosCount: state.length
    }
}
