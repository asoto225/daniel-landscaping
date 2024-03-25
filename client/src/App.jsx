import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import './App.css'
import ReviewRate from './components/newReview.jsx'
import { Outlet } from 'react-router-dom';

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
      <div>
        <Outlet />
      </div>
    </ApolloProvider>
  )
}

export default App
