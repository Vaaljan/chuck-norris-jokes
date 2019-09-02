import React from 'react';
import './joke.style.scss';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Loader } from '../loader/loader.component';
import { Error } from '../error/error.component';


interface IJoke {
    category: string;
    closeEvent: () => void;
}

const JOKE_QUERY = gql`
query ($category:String!) {
    jokeByCategory(category: $category){
      value
    }
}
`;


const Joke: React.FC<IJoke> = ({
    category, closeEvent
}) => {

    const { loading, error, data } = useQuery(JOKE_QUERY, {
        variables: { category },
    });

    if (loading) return <Loader />;
    if (error) return <Error message={error.message} />

    return (
        <div className="joke-window">
            <div className="joke-window-close" onClick={() => { closeEvent() }}>X</div>
            <div className="joke-window-body">
                <div className="joke-window-text"> {data.jokeByCategory.value}</div>
            </div>
        </div>
    );
}

export default Joke;