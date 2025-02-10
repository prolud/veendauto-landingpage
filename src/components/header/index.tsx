import { BotaoFaleConosoco, HeaderComponent, Navbar } from "./styles";
import logo from "../../assets/logo-orange.svg"

export default function Header() {
  return (
    <HeaderComponent id="header">

      <img src={logo} alt="Logo Veendauto." />

      <Navbar>
        <li><a href="#home">Início</a></li>
        <li><a href="#services">Serviços</a></li>
      </Navbar>

      <a target="_blank" href="https://wa.me/554197801223">
        <BotaoFaleConosoco>
          Fale conosco
        </BotaoFaleConosoco>
      </a>

    </HeaderComponent>
  )
}