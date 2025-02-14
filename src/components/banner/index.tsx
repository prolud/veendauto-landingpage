import { BannerComponent, TextsContent } from "./styles";
import HomemBanner from "../../assets/homem-banner.png"

import Money1 from "../../assets/money/money-1.png"
import Money2 from "../../assets/money/money-2.png"
import Money3 from "../../assets/money/money-3.png"
import Money4 from "../../assets/money/money-4.png"

import whatsappLogo from "../../assets/logo-whatsapp-floating.svg"


export default function Banner() {
  return (
    <BannerComponent id="home">

      <img className="money-1" src={Money1} alt="Nota de cem reais." loading="eager" />
      <img className="money-2" src={Money2} alt="Nota de cem reais." loading="eager" />
      <img className="money-3" src={Money3} alt="Nota de cem reais." loading="eager" />
      <img className="money-4" src={Money4} alt="Nota de cem reais." loading="eager" />

      <TextsContent>
        <div className="texts">
          <h1>DINHEIRO NA MÃO É VEENDAUTO</h1>
          <p>Somos a melhor empresa de intermediação de vendas do Brasil!</p>
        </div>
        <a href="https://wa.me/5541984728328" target="_blank">
          <button>
            <img src={whatsappLogo} alt="Logo do WhatsApp" />
            <p>QUERO VENDER MEU CARRO</p>
          </button>
        </a>
      </TextsContent>

      <img className="homem-com-carro" src={HomemBanner} alt="Homem apontando para um carro." loading="eager" />

    </BannerComponent>
  )
}