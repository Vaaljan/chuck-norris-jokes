import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Loader } from '../loader/loader.component';
import { Error } from '../error/error.component';
import styled from 'styled-components';
import stylevar from '../../constants/styleVariables';

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

const JokeWindow  = styled.div` 
    width: 90%;
    position: relative;
    text-align: center;
    color:$white;
    font-size: 1.5rem;
    padding: 15%;
    border:2px solid ${stylevar.yellow};
`;
const JokeClose = styled.div`
    position: absolute;
    right: 1.5rem;
    top: 10px;
    color: ${stylevar.yellow};
    font-size: 3rem;
    cursor: pointer;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    &:hover{
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
`;

const JokeText = styled.div`
    color:${stylevar.white}
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
        <JokeWindow>
            <JokeClose onClick={() => { closeEvent() }}>X</JokeClose>
                <JokeText> {data.jokeByCategory.value}</JokeText>
        </JokeWindow>
    );
}

export default Joke;