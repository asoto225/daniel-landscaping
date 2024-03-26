import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar.jsx';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </ApolloProvider>
  )
}

export default App
