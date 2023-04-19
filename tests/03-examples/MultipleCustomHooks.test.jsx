import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en el componente MultipleCustomHook', () => {
    test('Debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText('Breaking Bad Quotes') );

        const button = screen.getByRole( 'button' );
        expect( button.disabled ).toBeTruthy();
    });

    test('Debe mostrar un quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Daniel', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        })
        
        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Daniel') ).toBeTruthy();

        const button = screen.getByRole( 'button' );
        expect( button.disabled ).toBeFalsy();
    });

    test('Debe usar la funcion para buscar el siguiente quote', () => {
        const Button = ({ onClick, children }) => (
            <button onClick={ onClick }>{ children }</button>
        )
        const handleClick= jest.fn();
        
        render( <Button onClick={ handleClick }>Next Quote</Button> );
        const button = screen.getByRole( 'button' );
        fireEvent.click( button );
        
        expect( handleClick ).toHaveBeenCalled();
    })
})