import { fireEvent, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils";

describe('Pruebas en el hook useForm', () => {
    const initialForm = {
        name: 'Daniel Carbajal',
        email: 'daniel@gmail.com'
    }
    
    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        
        expect(result.current).toEqual({
            "formState": initialForm,
            "onInputChange": expect.any( Function ),
            "onResetForm": expect.any( Function )
            
        })
    });

    test('Debe retornar los valores de acuerdo a la entrada en el form', () => {
        const newName = 'Eduardo';
        const { result } = renderHook(() => useForm( initialForm ));
        const { onInputChange } = result.current;

        
        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
        })
        
        expect( result.current.formState.name ).toBe( newName );
    });

    test('Debe retornar los valores del form como se encontraban en el estado inicial', () => {
        const newName = 'Eduardo';
        const newEmail= 'eduardo@gmail.com';
        const { result } = renderHook(() => useForm( initialForm ));
        const { onInputChange, onResetForm } = result.current;

        
        act(() => {
            onInputChange({ target: { name: 'name', value: newName } });
            onInputChange({ target: { name: 'email', value: newEmail } });
            onResetForm();
        })
        
        expect( result.current.formState.name ).toBe( initialForm.name );
        expect( result.current.formState.email ).toBe( initialForm.email );
    });
})