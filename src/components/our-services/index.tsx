import { AgilityIcon, BlocksContainer, ComunityIcon, OurServicesSection, QualityIcon, Servico } from "./styles";
import AgilityImage from "../../assets/AgilityImage.svg"
import ComunityImage from "../../assets/ComunityImage.svg"
import QualityImage from "../../assets/QualityImage.svg"

export default function OurServices() {
  return (
    <OurServicesSection id="services">
      <h1 id="section-servicos">Vamos fazer negócio?</h1>

      <BlocksContainer>

        <Servico>
          <ComunityIcon>
            <img src={ComunityImage} alt="Ícone de três pessoas." />
          </ComunityIcon>

          <h3>Comunidade</h3>

          <p>Possuímos uma plataforma exclusiva com mais de 21 mil compradores em todo o país.</p>

        </Servico>

        <Servico>
          <QualityIcon>
            <img src={QualityImage} alt="Ícone de selo de qualidade." />
          </QualityIcon>

          <h3>Qualidade</h3>

          <p>Dessa forma conseguimos vender seu veículo muito mais rápido ou oferecer os melhores veículos na hora da compra.</p>

        </Servico>

        <Servico>
          <AgilityIcon>
            <img src={AgilityImage} alt="Ícone de um cronômetro acelerado." />
          </AgilityIcon>

          <h3>Agilidade</h3>

          <p>Tudo isso realizado com muita agilidade e sem burocracia. Vem para a Veendauto que sai negócio!</p>

        </Servico>

      </BlocksContainer>
    </OurServicesSection>
  )
}