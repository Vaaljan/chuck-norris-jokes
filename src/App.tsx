import React from 'react';
import Categories from './components/categories/categories.component';
import Header from './components/header/header.component';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import styled from 'styled-components';
import stylevar from './constants/styleVariables';

export const client = new ApolloClient({
  uri: 'https://chuck-norris-apollo.herokuapp.com',
});

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${stylevar.navy};
`;

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Header />
        <Categories />
      </Container>
    </ApolloProvider>
  );
}

export default App;
