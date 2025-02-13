import { CasalDivider, ComoFunciona, Diferencial, SectionCasal } from "./styles";
import CasalFeliz from "../../assets/casal-feliz.png"
import Plus from "../../assets/symbols/plus.svg"
import ZigZag from "../../assets/symbols/zigzag.svg"
import Arrow from "../../assets/arrow.svg"

import Doc from "../../assets/doc.svg"
import Proposal from "../../assets/proposal.svg"
import Security from "../../assets/security.svg"
import CarData from "../../assets/car-data.svg"

const accordionMenuItems: { title: string, content: string }[] = [
  {
    title: "🕑 Sem burocracia",
    content: "Você vende seu carro de forma rápida e segura, sem precisar enfrentar longas filas, preencher inúmeros formulários ou lidar com papeladas complexas. Todo o processo é simplificado para garantir que você tenha uma experiência tranquila, sem dores de cabeça ou exigências desnecessárias."
  },
  {
    title: "➡️ Sem intermediação",
    content: "A negociação ocorre diretamente entre você e o comprador, eliminando qualquer tipo de intermediário ou atravessador. Dessa forma, você evita taxas ocultas, comissões extras ou qualquer tentativa de reduzir o valor do seu carro artificialmente. É uma transação direta, transparente e justa para ambas as partes."
  },
  {
    title: "❌ Sem leilão ou desvalorização",
    content: "Nosso modelo de avaliação garante que você receba uma oferta justa e baseada no real valor de mercado do seu veículo. Diferente de leilões ou métodos que forçam a desvalorização, nossa abordagem prioriza um preço honesto e condizente com a condição e características do seu carro, sem jogadas para reduzir seu valor artificialmente."
  },
  {
    title: "💰 Pagamento instantâneo",
    content: "Assim que o processo for concluído e o seu veículo for aprovado, o pagamento é realizado imediatamente. O dinheiro é transferido diretamente para sua conta bancária em poucos minutos, sem necessidade de espera, burocracia ou risco de inadimplência. Assim, você tem total segurança financeira e rapidez na transação."
  }
];

const contentComoFunciona: { enum: string, strong: string, description: string, icon: string }[] = [
  {
    enum: "1.",
    strong: "Preencha os dados do seu carro:",
    description: "Informe o modelo, ano e quilometragem.",
    icon: CarData
  },
  {
    enum: "2.",
    strong: "Receba uma proposta:",
    description: "Fazemos a avaliação rapidamente e enviamos uma oferta justa.",
    icon: Proposal
  },
  {
    enum: "3.",
    strong: "Venda de forma segura:",
    description: "Se aceitar, agendamos a transação e pagamos na hora via PIX.",
    icon: Security
  },
  {
    enum: "4.",
    strong: "Toda a documentação por nossa conta:",
    description: "Você não precisa se preocupar com nada.",
    icon: Doc
  },
]

export default function Casal() {
  const toggleAccordionClick = (idx: number) => {
    const arrow = document.getElementById(`arrow-accordion-${idx + 1}`) as HTMLImageElement
    arrow.classList.toggle("opened")

    const content = document.getElementById(`content-item-${idx + 1}`) as HTMLParagraphElement
    content.classList.toggle("opened")

    const listItem = document.getElementById(`list-accordion-item-${idx + 1}`) as HTMLParagraphElement
    listItem.classList.toggle("opened")
  }

  return (
    <SectionCasal>
      <h1>Por que vender para a Veendauto?</h1>

      <Diferencial>
        <p>Diferente de lojas ou plataformas que fazem você esperar dias ou até semanas, aqui o processo é rápido, direto e sem enrolação.</p>

        <ul>
          {
            accordionMenuItems.map(
              (item, idx) => (
                <li
                  id={`list-accordion-item-${idx + 1}`}
                  key={idx + 1}
                  onClick={() => toggleAccordionClick(idx)}
                >
                  <header>
                    <h3>{item.title}</h3>
                    <img id={`arrow-accordion-${idx + 1}`} src={Arrow} alt="Arrow sign" />
                  </header>

                  <p id={`content-item-${idx + 1}`}>{item.content}</p>
                </li>
              )
            )
          }
        </ul>
      </Diferencial>

      <CasalDivider>
        <img className="symbol-plus" src={Plus} alt="" loading="lazy" />
        <img className="symbol-zigzag" src={ZigZag} alt="" loading="lazy" />

        <p>
          Seu veículo <br />
          vendido em até <br />
          <strong>40 MINUTOS</strong> <br />
          preço justo <br />
          e o pix cai na hora!
        </p>

        <img src={CasalFeliz} alt="Casal feliz dinheiro na mão." loading="lazy" />
      </CasalDivider>

      <ComoFunciona>
        <h1>Como funciona?</h1>

        <ol>
          {
            contentComoFunciona.map(
              (item, idx) => (
                <li key={idx + 1}>
                  <h5>{item.enum}</h5>

                  <div className="content">
                    <strong>{item.strong}</strong>
                    <p>{item.description}</p>
                  </div>

                  <img src={item.icon} alt="Icon" />
                </li>
              )
            )
          }
        </ol>
      </ComoFunciona>

    </SectionCasal>
  )
}