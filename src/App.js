import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme';
import Dashboard from './features/dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Dashboard />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
