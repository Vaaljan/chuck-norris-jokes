import React from 'react';
import ReactDOM from 'react-dom';
import Category from './category.component';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ApolloProvider client={client}>
       <Category onCategorySelect={(category)=>{
           expect(category).toBe(typeof category === "string")
           }} />
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});