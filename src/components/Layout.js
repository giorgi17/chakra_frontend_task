import { Box } from '@chakra-ui/react';
import Header from '../components/navbars/Header';
import MainNavigation from '../components/navbars/MainNavigation';
import Footer from './footers/Footer';

const Layout = ({ children }) => {
  return (
    <Box minHeight="100vh">
      <Header />
      <MainNavigation />

      <Box margin="auto" maxWidth="1200px">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
