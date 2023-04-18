import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewToDo }) => {
    const { formState, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onHandleSubmit = ( event ) => {
        event.preventDefault();

        if ( formState.description.length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description: formState.description,
            done: false
        }

        onNewToDo( newTodo );
        onResetForm();
    }

    return (
        <form onSubmit={ onHandleSubmit }>
            <input
                type="text"
                autoComplete="off"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ formState.description }
                onChange={ onInputChange }
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}
