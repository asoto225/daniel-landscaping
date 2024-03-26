import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer.jsx';

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
      <Footer />
    </ApolloProvider>
  )
}

export default App
