const { renderHook } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");
const { act } = require("react-dom/test-utils");

describe('Pruebas en el useCounter', () => {
    test('Debe retornar los valores por defecto.', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('Debe retornar el valor que se le pasa como parametro', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
    });

    test('Debe aumentar el valor del counter', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act(() => { //Se debe meter la funcion dentro del act cuando causa cambios en el estado
            increment();
        })

        expect( result.current.counter ).toBe( 11 );
    });

    test('Debe disminuir el valor del counter', () => {
        const { result } = renderHook( () => useCounter() );
        const { decrement } = result.current;

        act(() => { 
            decrement();
        })

        expect( result.current.counter ).toBe( 9 );
    });

    test('Debe retornar el counter al valor inicial', () => {
        const { result } = renderHook( () => useCounter() );
        const { increment, reset } = result.current;

        act(() => {
            increment();
            reset();
        })

        expect( result.current.counter ).toBe( 10 );
    });
})