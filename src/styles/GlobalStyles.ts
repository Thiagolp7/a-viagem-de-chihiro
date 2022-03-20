import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --green-500: #628E75;
    --green-800: #1A4855;

    --primary: var(--green-500);
    --secondary: var(--green-800);
    --neutral: #F9F9F9;

    --bg-gradient: linear-gradient(-45deg, var(--secondary), var(--primary));

    --font-family: 'Poppins', sans-serif;
  }
    
  html{
    width: 100vw;
    height: 100vh;

    @media (max-width: 1080px) {
     font-size : 93.75% ;
    }

    @media (max-width: 728px) {
     font-size : 87.5% ;
    }
  }

  body {
    background: var(--bg-gradient);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, textarea, button {
    font-family: var(--font-family);
    font-weight: 400;
  }

  h1, h2, h3 , h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`