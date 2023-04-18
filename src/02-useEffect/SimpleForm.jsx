import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'crackbajal',
        email: 'daniel@gmail.com'
    });

    const { username, email } = formState;
    const onInputChange = ({ target: { name, value } }) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState has changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="daniel@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            { username === 'crackbajal' && <Message />}
        </>
    )
}