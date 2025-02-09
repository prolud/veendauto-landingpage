import { SectionCasal } from "./styles";
import CasalFeliz from "../../assets/casal-feliz.svg"
import Plus from "../../assets/symbols/plus.svg"
import ZigZag from "../../assets/symbols/zigzag.svg"

export default function Casal() {
  return (
    <SectionCasal>

      <img className="symbol-plus" src={Plus} alt="" />
      <img className="symbol-zigzag" src={ZigZag} alt="" />
      
      <p>
        Seu veículo <br />
        vendido em até <br />
        <strong>40 MINUTOS</strong> <br />
        preço justo <br />
        e o pix cai na hora!
      </p>

      <img src={CasalFeliz} alt="Casal feliz dinheiro na mão." />
      
    </SectionCasal>
  )
}