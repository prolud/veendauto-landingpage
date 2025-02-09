import { WhatsappButton } from "./styles";
import WhatsappLogo from "../../assets/logo-whatsapp-floating.svg"

export default function WhatsappFloatingButton() {
  return (
    <a href="https://wa.me/554197801223">
      <WhatsappButton>
        <img src={WhatsappLogo} alt="Logo do Whatsapp." />
      </WhatsappButton>
    </a>
  )
}