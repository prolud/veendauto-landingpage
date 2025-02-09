import { BannerComponent, TextsContent } from "./styles";
import HomemBanner from "../../assets/homem-banner.svg"

import Circles from "../../assets/symbols/circles.svg"
import Plus from "../../assets/symbols/plus.svg"
import Triangules from "../../assets/symbols/triangules.svg"
import ZigZag from "../../assets/symbols/zigzag.svg"


export default function Banner() {
  return (
    <BannerComponent>

      <img className="circles-symbol" src={Circles} alt="Circles Symbol" />
      <img className="plus-symbol" src={Plus} alt="Plus Symbol" />
      <img className="triangules-symbol" src={Triangules} alt="Triangules Symbol" />
      <img className="zigzag-symbol" src={ZigZag} alt="ZigZag Symbol" />

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