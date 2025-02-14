import { Assinatura, EnderecoSection, FooterSection, Line, RedirectIcons, Textos } from "./styled";
import GrayLogo from "../../assets/logo-orange.svg"

import mapPin from "../../assets/map-pin.svg"
import instagramIcon from "../../assets/instagram-icon.svg"
import phone from "../../assets/phone.svg"

export default function Footer() {
  return (
    <FooterSection>

      <Assinatura>
        <Line />
        <img src={GrayLogo} alt="Logo da Veendauto." loading="lazy" />
        <Line />
      </Assinatura>

      <EnderecoSection>
        <Textos>
          <h5>Contato</h5>
          <p><strong>Telefone:</strong> +55 41 98472-8328</p>
          <p><strong>Endereço:</strong> Av. Visc. de Guarapuava, 4348 - Batel | Curitiba - PR</p>
          <p><strong>Email:</strong> <a href="mailto:contato@veendauto.com.br" target="_blank">contato@veendauto.com.br</a></p>
        </Textos>

        <RedirectIcons>

          <a href="https://www.instagram.com/veendauto/">
            <img src={instagramIcon} alt="Logo do instagram" />
          </a>

          <a href="tel:5541984728328">
            <img src={phone} alt="Telefone" />
          </a>

          <a href="https://www.google.com/search?q=av+%3A+visconde+de+guarapuava%2C+4348&rlz=1C1FKPE_pt-PTBR1081BR1082&oq=av+%3A+visconde+de+guarapuava%2C+4348&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCjE4MzUwajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8" target="_blank">
            <img src={mapPin} alt="Map pin" />
          </a>

        </RedirectIcons>
      </EnderecoSection>

    </FooterSection>
  )
}