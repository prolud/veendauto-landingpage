import styled from "styled-components";
import { theme } from "../../global/styles";

export const SectionCasal = styled.section`
  padding: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;

  .symbol-plus {
    position: absolute;
    top: 2rem;
    left: 6rem;
    transform: rotate(4deg);
    transition: .3s;
  }
  .symbol-zigzag {
    position: absolute;
    bottom: 2rem;
    right: 6rem;
    transform: rotate(-10deg);
    transition: .3s;
  }

  p {
    font-size: 2.5rem;
    color: white;
    line-height: 2.5rem;

    strong {
      color: ${theme.colors.orange};
    }

    filter: drop-shadow(-120px 0px 70px rgb(255, 67, 246));
  }

  img {
    filter: drop-shadow(100px 0px 100px rgba(92, 22, 255, 0.33));
  }

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    img {
      max-width: 20rem;
    }

    .symbol-plus {
      left: 1rem;
    }

    .symbol-zigzag {
      right: 1rem;
    }

    p {
      text-align: center;
    }
  }
`;