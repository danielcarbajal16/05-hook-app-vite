import { useEffect, useState } from "react";

export const useFetch = ( url, next ) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
    
    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        });
        
        const resp = await fetch( url );
        const data = await resp.json();

        // console.log( data );
        setState({
            data,
            isLoading: false,
            hasError: null
        });
    }
    
    useEffect(() => {
        getFetch();
    }, [url, next]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}