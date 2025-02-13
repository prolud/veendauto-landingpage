
import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    purple: "#65267A",
    purpleHover: "#A13CC3",
    purpleMedium: "#81309C",
    purpleDarker: "#391645",
    orange: "#F84E06",
    orangeHover: "#f9611f",
    black: "#121212",
    greenWhatsapp: "#25D366",
  }
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: roboto, sans-serif;
  }

  main {
    background-color: ${theme.colors.purple};
    overflow-x: hidden;
  }
  
  img {
    pointer-events: none;
  }

  button {
    border-radius: 8px;
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    height: 3rem;
  }

  input, textarea {
    background-color: white;
    border: 1px solid #DFDFDF;
    border-radius: 8px;
    padding: 1rem;
    outline: none;
    resize: none;
    
    &:focus {
      border: 1px solid rgb(168, 168, 168);
    }

    transition: .15s;
  }

  textarea {
    height: 100%;
  }
`;