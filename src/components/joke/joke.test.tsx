import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './joke.component';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ApolloProvider client={client}>
       <Joke category={'Animal'} closeEvent={() => {}} />
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
