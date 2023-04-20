import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext"
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el componente MainApp', () => {
    test('Debe mostrar el componente HomePage en el path /', () => {
        render( 
            <MemoryRouter initialEntries={['/']}>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy();
    });

    test('Debe mostrar el componente LoginPage en el path /login', () => {
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        
        const aLink = screen.getByRole('link', { name: 'Login' });
        expect( aLink.className ).toContain('active');
        expect( screen.getByText('LoginPage') ).toBeTruthy();
    });

    test('Debe mostrar el componente AboutPage en el path /about', () => {
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        const aLink = screen.getByRole('link', { name: 'About' });
        expect( aLink.className ).toContain('active');
        expect( screen.getByText('AboutPage') ).toBeTruthy();
    });
})