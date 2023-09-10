import { Global } from '@emotion/react';

const FontsComponent = () => (
  <Global
    styles={`
      /* Archivo */
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./Archivo-Italic-VariableFont_wdth,wght.ttf') format('ttf'), url('./Archivo-VariableFont_wdth,wght.ttf') format('ttf');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default FontsComponent;
