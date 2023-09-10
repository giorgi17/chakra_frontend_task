import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    button: {
      100: '#9837CA',
    },
  },
  fonts: {
    heading: `'Archivo', sans-serif`,
    body: `'Archivo', sans-serif`,
  },
});

export default theme;
