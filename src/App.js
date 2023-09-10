import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Dashboard from './features/Dashboard';
import Layout from './components/Layout';
import FontsComponent from 'assets/fonts/FontsComponent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FontsComponent />
      <Layout>
        <Dashboard />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
