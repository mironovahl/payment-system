import React from 'react';
import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/background.jpg");
    background-color: #fff79c;
    background-size: cover;
    height: 100vh;
    font-family: 'Montserrat Alternates', sans-serif;
    margin: 0;
  }
`;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
