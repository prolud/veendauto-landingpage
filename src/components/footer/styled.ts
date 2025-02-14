import styled from "styled-components";
import { theme } from "../../global/styles";

export const FooterSection = styled.footer`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  gap: 1rem;
`;

export const Assinatura = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.625rem;

  img {
    height: 2.5rem;
  }
  
  @media screen and (max-width: 768px) {
    img {
      height: 1.75rem;
    }
  }
`;

export const Line = styled.span`
  display: block;
  height: 0.1625rem;
  width: 100%;
  background-color: ${theme.colors.orange};
`;

export const EnderecoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 1300px) {
    text-align: center;
    flex-direction: column;
  }

`;
export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h5 {
    font-size: 1.2rem;
  }
  a {
    color: ${theme.colors.orange};
  }

  @media screen and (max-width: 768px) {
    h5 {
      font-size: 1rem;
    }
    p {
      font-size: .8rem;
    }
  }
`;

export const Logos = styled.div`
  display: flex;
  gap: 1rem;

  img {
    height: 3rem;
  }

  @media screen and (max-width: 1000px) {
    img {
      height: 2rem;
    }
  }
`;

export const RedirectIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  a {
    img {
      height: 1.5rem; 
    }
  }
`;