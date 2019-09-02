import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { titleCase } from '../../functions/titlecase';
import './category.style.scss';
import { Loader } from '../loader/loader.component';
import { Error } from '../error/error.component';

interface IChooseCategory {
    onCategorySelect: (category: string) => void
}
const CATEGORY_QUERY = gql`
{
    jokeCategories
}
`;


const Category: React.FC<IChooseCategory> = ({ onCategorySelect }) => {
    const { loading, error, data } = useQuery(CATEGORY_QUERY);

    if (loading) return <Loader />;
    if (error) return <Error message={error.message} />

    return (
        data.jokeCategories.map((category: string) => (
            <div key={category}
                className="category"
                onClick={() => onCategorySelect(category)}>
                {titleCase(category)}
            </div>
        ))

    );
}


export default Category;