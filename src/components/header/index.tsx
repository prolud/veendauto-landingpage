import { BotaoFaleConosoco, HeaderComponent, Navbar } from "./styles";
import logo from "../../assets/logo-orange.svg"

export default function Header() {
  return (
    <HeaderComponent>

      <img src={logo} alt="Logo Veendauto." />

      <Navbar>
        <li><a href="#home">Início</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#about-us">Sobre nós</a></li>
      </Navbar>

      <BotaoFaleConosoco>
        Fale conosco
      </BotaoFaleConosoco>

    </HeaderComponent>
  )
}