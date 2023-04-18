import { TodoItem } from "./";

export const TodoList = ({ toDos, onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {
                toDos.map(todo => (
                    <TodoItem key={ todo.id } { ...todo } onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } />
                ))
            }
        </ul>
    )
}
