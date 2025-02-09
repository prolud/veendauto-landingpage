import styled from "styled-components";
import { theme } from "../../global/styles";

export const BannerComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 6rem ;
  position: relative;

  .circles-symbol {
    position: absolute;
    top: 6rem;
    left: 6rem;
  }
  .plus-symbol {
    position: absolute;
    top: 6rem;
    right: 6rem;
  }
  .triangules-symbol {
    position: absolute;
    bottom: 6rem;
    left: 6rem;
  }
  .zigzag-symbol {
    position: absolute;
    bottom: 6rem;
    right: 6rem;
  }

  img.homem-com-carro {
    filter: drop-shadow(100px -60px 100px rgba(92, 22, 255, 0.33));
  }
  
  @media screen and (max-width: 84rem) {
    padding: 2rem 1rem;
    flex-direction: column;
    gap: 2rem;
    img.homem-com-carro {
      width: 20rem;
    }

    .circles-symbol {
    top: -2rem;
    left: -1rem;
  }
  .plus-symbol {
    top: -2rem;
    right: -1rem;
    transform: rotate(-10deg);
  }
  .triangules-symbol {
    bottom: 1rem;
    left: 1rem;
  }
  .zigzag-symbol {
    bottom: 1rem;
    right: 1rem;
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
  filter: drop-shadow(-120px -70px 70px rgb(255, 67, 246));

  .texts {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 3rem;
    line-height : 3rem;
  }

  button {
    width: 100%;
    color: white;
    background-color: ${theme.colors.orange};
    transition: .15s;
    
    &:hover {
      background-color: ${theme.colors.orangeHover};
    }
  }

  @media screen and (max-width: 84rem) {
    text-align: center;
  }
`;