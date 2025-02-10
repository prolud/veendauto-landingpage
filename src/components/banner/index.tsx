import { BannerComponent, TextsContent } from "./styles";
import HomemBanner from "../../assets/homem-banner.svg"

import Money1 from "../../assets/money/money-1.png"
import Money2 from "../../assets/money/money-2.png"
import Money3 from "../../assets/money/money-3.png"
import Money4 from "../../assets/money/money-4.png"


export default function Banner() {
  return (
    <BannerComponent>

      <img className="money-1" src={Money1} alt="Nota de cem reais." />
      <img className="money-2" src={Money2} alt="Nota de cem reais." />
      <img className="money-3" src={Money3} alt="Nota de cem reais." />
      <img className="money-4" src={Money4} alt="Nota de cem reais." />

      <TextsContent>
        <div className="texts">
          <h1>Dinheiro na mão é Veendauto</h1>
          <p>Somos a maior empresa de intermediação de vendas do Brasil!</p>
        </div>
        <a href="#section-servicos">
          <button>Nossos serviços</button>
        </a>
      </TextsContent>

      <img className="homem-com-carro" src={HomemBanner} alt="Homem apontando para um carro." />

    </BannerComponent>
  )
}