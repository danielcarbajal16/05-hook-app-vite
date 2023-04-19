import { toDoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en el reducer todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]
    
    test('Debe retornar el estado inicial', () => {
        const newState = toDoReducer( initialState, {} );

        expect( newState ).toBe( initialState );
    });

    test('Debe de agregar un todo a la lista', () => {
        const action = {
            type: '[TODO] Add ToDo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }
        const newState = toDoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );
    });

    test('Debe eliminar un todo de la lista', () => {
        const action = {
            type: '[TODO] Remove ToDo',
            payload: 1
        }
        const newState = toDoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );
        expect( newState ).not.toContain( initialState );
    });

    test('Debe realizar el toggle en el todo correspondiente', () => {
        const action = {
            type: '[TODO] Toggle ToDo',
            payload: 1
        }
        const newState = toDoReducer( initialState, action );

        expect( newState[0].done ).toBe( true );
    })
})