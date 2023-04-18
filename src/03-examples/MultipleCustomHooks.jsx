import { useState } from "react";
import { useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
    const [searchNext, setSearchNext] = useState(false);
    const { data, isLoading, hasError } = useFetch( 'https://api.breakingbadquotes.xyz/v1/quotes', searchNext );
    const { quote, author } = !!data && data[0];
    
    const nextQuote = () => {
        setSearchNext(!searchNext);
    }

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                ? <LoadingQuote />
                : <Quote quote={ quote } author={ author } />
            }

            <button onClick={ nextQuote } disabled={ isLoading } className="btn btn-primary">Next Quote</button>       
        </>
    )
}
