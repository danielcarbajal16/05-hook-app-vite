import { TodoList, TodoAdd } from "./";
import { useTodos } from "../hooks";

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, onHandleNewToDo, handleDeleteToDo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>ToDoApp: { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList toDos={ todos } onDeleteTodo={ handleDeleteToDo } onToggleTodo={ handleToggleTodo } />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewToDo={ onHandleNewToDo }/>
                </div>
            </div>
        </>
    )
}
