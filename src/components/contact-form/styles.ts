import styled from "styled-components";
import { theme } from "../../global/styles";

export const ContactFormContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 2rem;
  padding: 4rem 9rem;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
  
  @media screen and (max-width: 1300px) {
    padding: 4rem 1rem;
  }
`;

export const FormDivider = styled.div`
  display: flex;
  gap: 8rem;
  width: 100%;
  position: relative;

  .moeda-1 {
    position: absolute;
    width: 10rem;
    top: 0;
    right: 0;
  }
  .moeda-2 {
    position: absolute;
    width: 10rem;
    top: 4rem;
    right: 10rem;
  }
  .moeda-3 {
    position: absolute;
    width: 10rem;
    top: 2rem;
    right: 20rem;
  }
  .moeda-4 {
    position: absolute;
    width: 10rem;
    top: 10rem;
    right: 25rem;
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
        background-color: ${theme.colors.purpleDarker};
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
`;