import { Chamada, Redirect, RedirectSection } from "./styles";

import Salesman from "../../assets/salesman.png"

export default function RedirectToForm() {
  return (
    <RedirectSection>

      <Chamada>
        <img src={Salesman} alt="Vendedor." />

        <div className="texts">
          <h1>Não perca tempo, <strong>venda seu carro</strong> agora mesmo!</h1>

          <ul>
            <li><p>Atendimento <strong>rápido e seguro</strong></p></li>
            <li><p>Pagamento à vista via <strong>PIX</strong></p></li>
            <li><p><strong>Sem dores de cabeça</strong> com documentação</p></li>
          </ul>
        </div>
      </Chamada>

      <Redirect>
        <h1>Quer vender seu carro?</h1>
        <a href="#form-deixe-contato">
          <button>
            Clique agora e faça o melhor negócio
          </button>
        </a>
      </Redirect>

    </RedirectSection>
  )
} 