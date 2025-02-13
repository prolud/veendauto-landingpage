import styled from "styled-components";
import { theme } from "../../global/styles";

export const SectionCasal = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;
  h1 {
    text-align: center;
    color: white;
    font-size: 3rem;
  }
`;

export const CasalDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  width: 100%;
  margin: 2rem 0;

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
      font-size: 3.5rem;
      line-height: 3.5rem;
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
      left: -2.5rem;
    }

    .symbol-zigzag {
      right: -2.5rem;
    }

    p {
      text-align: center;
    }
  }
`;

export const Diferencial = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;

    li {
      padding: .5rem 1rem;
      text-align: left;
      background-color: ${theme.colors.purpleMedium};
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 0;
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.purpleHover};
      }

      &.opened {
        gap: 1rem;
      }

      transition: .3s;

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          width: 2rem;

          transform: rotate(180deg);
          &.opened {
            transform: rotate(0deg);
          }

          transition: .3s;
        }
      }

      p {
        max-height: 0;
        overflow: hidden;
        cursor: text;
        
        &.opened {
          max-height: 7rem;
        }
        
        @media screen and (max-width: 768px) {
          &.opened {
            max-height: 13rem;
          }
        }

        transition: .3s;
      }
    }
  }
`;

export const ComoFunciona = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;

  ol {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    li {
      padding: 1rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: .3s;

      background-color: ${theme.colors.purpleMedium};
      
      &:hover {
        background-color: ${theme.colors.purpleHover};
      }

      h5 {
        font-size: 3rem;
      }

      .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: .8rem;

        strong {
          font-size: 1.3rem; 
        }
      }

      img {
        width: 3rem;
      }
    }
  }
`;