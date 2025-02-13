import { WhatsappButton } from "./styles";
import WhatsappLogo from "../../assets/logo-whatsapp-floating.svg"

export default function WhatsappFloatingButton() {
  return (
    <a target="_blank" href="https://wa.me/5541984728328">
      <WhatsappButton>
        <img src={WhatsappLogo} alt="Logo do Whatsapp." />
      </WhatsappButton>
    </a>
  )
}