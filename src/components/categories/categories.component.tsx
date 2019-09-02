import React, { useState } from 'react';
import './categories.style.scss';
import Joke from '../joke/joke.component';

import Category from '../category/category.component';
import { titleCase } from '../../functions/titlecase';

const Categories: React.FC = () => {
    const [displayJoke, setdisplayJoke] = useState(false);
    const [jokeCategory, setJokeCategory] = useState("");

    return (
        <div className="categories">
            <div>
                <h2>{displayJoke ? `Category -> ${titleCase(jokeCategory)}` : 'Choose a Joke Category'}</h2>
            </div>
            <div className="category-container">
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
            </div>
        </div>
    );
}

export default Categories;
