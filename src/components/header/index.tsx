import { BotaoFaleConosoco, HeaderComponent, Logos } from "./styles";
import logo from "../../assets/logo-orange.svg"
import logoMenor from "../../assets/logo-orange-minor.png"
import whatsappLogo from "../../assets/logo-whatsapp-floating.svg"

export default function Header() {
  return (
    <HeaderComponent id="header">

      <Logos>
        <img src={logoMenor} alt="Logo Veendauto menor." />
        <img src={logo} alt="Logo Veendauto." />
      </Logos>

      <a target="_blank" href="https://wa.me/5541984728328">
        <BotaoFaleConosoco>
          <img src={whatsappLogo} alt="Logo do WhatsApp" />
          <p>FALE CONOSCO</p>
        </BotaoFaleConosoco>
      </a>

    </HeaderComponent>
  )
}