import styled from "styled-components";
import { theme } from "../../global/styles";

export const HeaderComponent = styled.header`
  width: 100%;
  padding: 1.125rem 9rem;
  color: white;
  background-color: ${theme.colors.purple};
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, .4));

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 999;

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 48rem) {
    /* justify-content: center; */
    padding: 1.125rem 1rem;
  }

  transition: .3s;
`;

export const Logos = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  
  img {
    height: 3rem;
  }
  @media screen and (max-width: 1300px) {
    gap: .8rem;
    
    img {
      height: 1.5rem;
    }
  }
`;

export const BotaoFaleConosoco = styled.button`
  display: flex;
  gap: .8rem;
  align-items: center;
  background-color: ${theme.colors.greenWhatsapp};
  color: white;
  font-weight: bold;
  transition: .15s;
  font-size: 1.5rem;
  font-style: italic;
  
  &:hover {
    background-color: ${theme.colors.greenWhatsappHover};
  }

  @media screen and (max-width: 1000px) {
    p {
      display: none;
    }
  }
`;