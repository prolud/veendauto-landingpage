import styled from "styled-components";
import { theme } from "../../global/styles";

export const RedirectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${theme.colors.purpleDarker};
  gap: 2rem;

  h1 {
    color: white;
    line-height: 2.5rem;
    font-size: 2.5rem;
    font-family: 'Sarala';
    max-width: 20rem;
  }
  
  button {
    
    background-color: ${theme.colors.orange};
    &:hover {
      background-color: ${theme.colors.orangeHover};
    }
    
    transition: .15s;
    
    font-size: 1.125rem;
    font-weight: bold;
    font-family: 'Sarala';
    color: white;
    text-decoration: none;
    a {
    }
  }

  @media screen and (max-width: 1300px) {
    text-align: center;
    flex-direction: column;
  }
`;