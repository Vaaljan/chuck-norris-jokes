import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Categories from './components/categories/categories.component';
import Header from './components/header/header.component';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://chuck-norris-apollo.herokuapp.com',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header />
        <Categories />
      </div>
    </ApolloProvider>
  );
}

export default App;
