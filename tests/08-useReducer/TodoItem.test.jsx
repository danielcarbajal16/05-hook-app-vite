import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el componente TodoItem', () => {
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    
    test('Debe mostrar el todo pendiente de completar', () => {
        render( <TodoItem { ...todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } /> );
        const li = screen.getByRole('listitem');

        expect( li.className ).toBe('list-group-item d-flex justify-content-between');

        const span = screen.getByLabelText('span');
        expect( span.className ).toContain( 'align-self-center' );
        expect( span.className ).not.toContain( 'text-decoration-line-through' );
    });

    test('Debe mostrar el todo completado', () => {
        todo.done = true;
        render( <TodoItem { ...todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } /> );
        
        const span = screen.getByLabelText('span');
        expect( span.className ).toContain( 'text-decoration-line-through' );
    });

    test('Span debe llamar al ToggleTodo cuando se hace click', () => {
        render( <TodoItem { ...todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } /> );

        const span = screen.getByLabelText('span');
        fireEvent.click( span );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('El botón debe llamar al DeleteTodo cuando se hace click', () => {
        render( <TodoItem { ...todo } onDeleteTodo={ onDeleteTodoMock } onToggleTodo={ onToggleTodoMock } /> );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
})