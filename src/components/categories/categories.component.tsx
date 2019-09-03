import React, { useState } from 'react';
import Joke from '../joke/joke.component';

import Category from '../category/category.component';
import { titleCase } from '../../functions/titlecase';
import styled from 'styled-components';
import stylevar from '../../constants/styleVariables';

const CategoryHeader = styled.div`
        text-align: center;
        color: ${stylevar.white};
        font-size: 2rem;
        font-weight: 500;
        margin:2rem 0;
`;
const CategoryContainer = styled.div`
    margin: 1rem 5%;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const Categories: React.FC = () => {
    const [displayJoke, setdisplayJoke] = useState(false);
    const [jokeCategory, setJokeCategory] = useState("");

    return (
        <div className="categories">
            <CategoryHeader>
                {displayJoke ? `Category -> ${titleCase(jokeCategory)}` : 'Choose a Joke Category'}
            </CategoryHeader>
            <CategoryContainer>
                {displayJoke
                    ?
                    <Joke category={jokeCategory} closeEvent={() => {
                        setdisplayJoke(false);
                        setJokeCategory('');
                    }} />
                    :
                    <Category onCategorySelect={(category) => {
                        setdisplayJoke(true);
                        setJokeCategory(category);
                    }} />
                }
            </CategoryContainer>
        </div>
    );
}

export default Categories;
