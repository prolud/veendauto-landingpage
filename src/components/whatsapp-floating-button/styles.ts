import styled from "styled-components";
import { theme } from "../../global/styles";

export const WhatsappButton = styled.button`
  position: fixed;

  bottom: 2.5rem;
  right: 2.5rem;
  
  z-index: 999;
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: ${theme.colors.greenWhatsapp};

`;