import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import useDarkMode from 'use-dark-mode';
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from 'styled-components';
import '../global.css';

const light: DefaultTheme = {
  bg: 'white',
  text: 'black',
};

const dark: DefaultTheme = {
  bg: 'black',
  text: 'white',
};

const GlobalStyle = createGlobalStyle`
  /* open-sans-regular - latin */
  @font-face {
    font-family: 'OpenSansRegular';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('/fonts/open-sans-v17-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/open-sans-v17-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: OpenSansRegular, Arial, sans-serif;
    height: 100vh;
    transition: all 0.25s linear;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? dark : light;

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <button onClick={darkMode.enable}>DARK MODE</button>
      <button onClick={darkMode.disable}>LIGHT MODE</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}
