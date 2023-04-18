import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment = useCallback(( param ) => {
        setCounter(( value ) => value+param );
    }, [],)

    // const increment = () => {
    //     setCounter( counter+1 );
    // }

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </>
    )
}
