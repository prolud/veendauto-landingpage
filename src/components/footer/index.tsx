import { FooterSection, Line } from "./styled";
import GrayLogo from "../../assets/logo-gray.svg"

export default function Footer() {
  return (
    <FooterSection>

      <Line/>
      <img src={GrayLogo} alt="Logo da Veendauto." loading="lazy" />
      <Line/>

    </FooterSection>
  )
}