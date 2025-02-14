import styled from "styled-components";
import { theme } from "../../global/styles";

export const ContactFormContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 4rem;
  padding: 4rem 9rem;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    line-height: 3rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  strong {
    color: ${theme.colors.greenWhatsapp};
    font-weight: 700;
  }
  
  @media screen and (max-width: 1300px) {
    padding: 4rem 1rem;
  }
`;

export const OkSpan = styled.span`
  background-color: ${theme.colors.greenWhatsapp};
  height: 2rem;
  width: 2rem;
  display: block;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: .75rem;
    transition: .15s;
  }
`;

export const Diferenciais = styled.div`
  h2 {
    max-width: 35rem;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DiferenciaisDivider = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  li {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    max-width: 30rem;
    cursor: default;

    &:hover {
      img {
        height: 1.25rem;
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, .1));
      }
    }
  }
`;

export const FormDivider = styled.div`
  display: flex;
  gap: 8rem;
  width: 100%;
  position: relative;
  align-items: center;

  .car-form-image {
    height: auto;
    width: 26.9375rem;
  }
  .masso-dinheiro {
    position: absolute;
    width: 19rem;
    top: 8rem;
    right: -5rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    display: flex;
    align-items: start;
    z-index: 99;

    input[type=text], input[type=tel], input[type=email], textarea {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);
    }
    textarea {
      height: 10rem;
    }

    button  {
      margin-left: auto;
      color: white;
      background-color: ${theme.colors.purple};
      min-height: 3rem;
      width: 8rem;
      
      &:hover {
        background-color: ${theme.colors.purpleHover};
      }

      transition: .15s;
    }
  }
  
  @media screen and (max-width: 1300px) {
    gap: 1rem;
    flex-direction: column-reverse;
    align-items: center;
    img {
      max-width: 20rem;
    }
  }
`;

export const CheckboxContainer = styled.label`
  cursor: pointer;
  display: flex;
  gap: .4rem;
  color: ${theme.colors.black};
  align-items: center;
`;