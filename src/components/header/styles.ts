import styled from "styled-components";
import { theme } from "../../global/styles";

export const HeaderComponent = styled.header`
  width: 100%;
  padding: 1.125rem 9rem;
  color: white;
  background-color: ${theme.colors.purple};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 48rem) {
    justify-content: center;
  }

  transition: .3s;
`;

export const Navbar = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5rem;

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 68.75rem) {
    display: none;
  }

  transition: .15s;
`;

export const BotaoFaleConosoco = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  transition: .15s;
  width: 9.8125rem;
  
  &:hover {
    background-color: white;
    color: ${theme.colors.black};
  }

  @media screen and (max-width: 48rem) {
    display: none;
  }
`;