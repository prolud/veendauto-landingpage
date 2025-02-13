import styled from "styled-components";
import { theme } from "../../global/styles";

export const RedirectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${theme.colors.purpleDarker};
`;

export const Redirect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
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

export const Chamada = styled.div`
  color: white;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  gap: 5rem;


  img {
    width: 28.875rem;
  }
  
  .texts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    h1 {
      text-align: center;
      max-width: 40rem;
      font-size: 3rem;
      
      strong {
        color: ${theme.colors.orange};
      }
    }

    ul {
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      list-style: none;

      li {
        text-align: center;
        font-size: 1.5rem;

        strong {
          color: ${theme.colors.greenWhatsapp};
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 22rem;
    }
  }
`;