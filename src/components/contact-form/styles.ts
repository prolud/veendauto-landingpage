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
  
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    display: flex;
    align-items: start;

    input[type=text], input[type=tel], input[type=email], textarea {
      width: 100%;
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