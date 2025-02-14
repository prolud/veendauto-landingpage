import styled from "styled-components";
import { theme } from "../../global/styles";

export const RedirectSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${theme.colors.purpleDarker};
  align-items: center;
  padding: 4rem 0;
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

export const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0 10rem;
  
  color: white;
  
  h1 {
    text-align: center;
    font-size: 3rem;
    font-style: italic;
  }
  
  @media screen and (max-width: 768px){
    padding: 0 3rem;
  }
`;
export const Mapa = styled.iframe`
  border-radius: 16px;
  width: 100%;
  height: 30rem;
`;