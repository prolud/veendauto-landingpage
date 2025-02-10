import styled from "styled-components";
import { theme } from "../../global/styles";

export const SuccessDialog = styled.dialog`
  display: flex;
  z-index: 9999;
  gap: 0.625rem;
  border-radius: 8px;
  color: white;
  background-color: ${theme.colors.greenWhatsapp};
  height: 4rem;
  border: none;
  margin: 0 auto;
  position: fixed;
  padding: 0 1rem;
  align-items: center;
  
  bottom: -5rem;
  &[open] {
    bottom: 3rem;
  }

  img {
    width: 2rem;
  }

  transition: .3s;
`;