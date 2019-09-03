import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { titleCase } from '../../functions/titlecase';
import { Loader } from '../loader/loader.component';
import { Error } from '../error/error.component';
import stylevar from '../../constants/styleVariables';
import styled from 'styled-components';

interface IChooseCategory {
    onCategorySelect: (category: string) => void
}
const CATEGORY_QUERY = gql`
{
    jokeCategories
}
`;
const CategoryHolder = styled.div`
    &:hover{
        background-color: ${stylevar.yellow};
        color: $navy;
    }
    flex-grow: 2;
    max-width: 150px;
    min-width: 120px;
    color: ${stylevar.white};
    border: 2px solid ${stylevar.yellow};
    margin: 1rem;
    padding: 2rem;
    border-radius: 3rem;
    text-align: center;
    cursor: pointer;
    font-size: 1.2rem;
`

const Category: React.FC<IChooseCategory> = ({ onCategorySelect }) => {
    const { loading, error, data } = useQuery(CATEGORY_QUERY);

    if (loading) return <Loader />;
    if (error) return <Error message={error.message} />

    return (
        data.jokeCategories.map((category: string) => (
            <CategoryHolder key={category}
                onClick={() => onCategorySelect(category)}>
                {titleCase(category)}
            </CategoryHolder>
        ))

    );
}


export default Category;