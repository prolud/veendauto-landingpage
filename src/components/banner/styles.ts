import styled from "styled-components";
import { theme } from "../../global/styles";

export const BannerComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 2rem;
  gap: 6rem ;
  position: relative;

  .money-1 {
    width: 10rem;
    position: absolute;
    top: 2rem;
    left: 6rem;
    filter: blur(2px);
  }
  .money-2 {
    width: 10rem;
    position: absolute;
    top: 2rem;
    right: 6rem;
    filter: blur(5px);
  }
  .money-3 {
    width: 10rem;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    filter: blur(.4px);
  }
  .money-4 {
    width: 10rem;
    position: absolute;
    bottom: 2rem;
    right: 1rem;
    filter: blur(.4px);
  }

  img.homem-com-carro {
    filter: drop-shadow(100px -60px 100px rgba(157, 116, 255, 0.33));
  }
  
  @media screen and (max-width: 84rem) {
    padding: 7rem 1rem 2rem;
    flex-direction: column;
    gap: 2rem;
    img.homem-com-carro {
      width: 20rem;
    }

    .money-1 {
      top: -2rem;
      left: -1rem;
    }
    .money-2 {
      top: -2rem;
      right: -1rem;
    }
    .money-3 {
      bottom: 1rem;
      left: -7rem;
      transform: rotate(90deg);
      filter: blur(3px);
    }
    .money-4 {
      bottom: 1rem;
      right: -5rem;
      filter: blur(3px);
    }
  }

  transition: all .3s;
`;

export const TextsContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 26.6875rem;
  gap: 3rem;
  filter: drop-shadow(-120px -70px 70px rgb(255, 116, 248));

  .texts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 4rem;
    line-height: 4rem;
    font-style: italic; 
  }

  a {
    text-decoration: none;
  }

  button {
    width: 100%;
    color: white;
    background-color: ${theme.colors.greenWhatsapp};
    transition: .15s;
    font-style: italic;
    display: flex;
    font-size: 1.5rem;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    
    @media screen and (max-width: 1000px){
      font-size: 1.2rem;
    }
    
    &:hover {
      background-color: ${theme.colors.greenWhatsappHover};
    }
  }

  @media screen and (max-width: 84rem) {
    text-align: center;
  }
`;