import { Chamada, Mapa, MapDiv, RedirectSection } from "./styles";

import KwidTransparent from "../../assets/kwid-transparent.png"



export default function RedirectToForm() {
  return (
    <RedirectSection>

      <Chamada>
        <img src={KwidTransparent} alt="Vendedor." />

        <div className="texts">
          <h1>Não perca tempo, <strong>venda seu carro</strong> agora mesmo!</h1>

          <ul>
            <li><p>Atendimento <strong>rápido e seguro</strong></p></li>
            <li><p>Pagamento à vista via <strong>PIX</strong></p></li>
            <li><p><strong>Sem dores de cabeça</strong> com documentação</p></li>
          </ul>
        </div>
      </Chamada>


      <MapDiv>
        <Mapa
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1273.81238520199!2d-49.28364134319678!3d-25.442091204224514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce477b676b571%3A0x83986d1b87548789!2sAv.%20Visc.%20de%20Guarapuava%2C%204348%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080250-220!5e0!3m2!1spt-BR!2sbr!4v1739496980163!5m2!1spt-BR!2sbr"
        />
      </MapDiv>

    </RedirectSection>
  )
} 