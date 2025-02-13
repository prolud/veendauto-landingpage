import { useState } from "react";
import { CheckboxContainer, ContactFormContent, Diferenciais, DiferenciaisDivider, FormDivider, OkSpan } from "./styles";
import CarForm from "../../assets/car-form.png"
import Loader from "../../assets/loader.svg"

import Coin1 from "../../assets/coins/coin-1.png"
import Coin2 from "../../assets/coins/coin-2.png"
import Coin3 from "../../assets/coins/coin-3.png"
import Coin4 from "../../assets/coins/coin-4.png"
import MassoDinheiro from "../../assets/money/money-5.png"
import { answerForm } from "../../services/form-service";

import Check from "../../assets/check.svg"

export interface IFormData {
  nome: string;
  telefone: string;
  cidade: string;
  email: string;
  informacoes: string;
  desejaVender: boolean;
}

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState<IFormData>(
    {
      nome: "",
      telefone: "",
      cidade: "",
      email: "",
      informacoes: "",
      desejaVender: false,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(
      (prev) => (
        {
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }
      )
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true)
    answerForm(formData, setSubmitting)
  };

  return (
    <ContactFormContent>
      <h1 id="form-deixe-contato">Deixe seu contato conosco</h1>

      <FormDivider>

        <img className="moeda-1" src={Coin1} alt="Moeda dourada." />
        <img className="moeda-2" src={Coin2} alt="Moeda dourada." />
        <img className="moeda-3" src={Coin3} alt="Moeda dourada." />
        <img className="moeda-4" src={Coin4} alt="Moeda dourada." />
        <img className="masso-dinheiro" src={MassoDinheiro} alt="Masso de notas de cem." />

        <img className="car-form-image" src={CarForm} alt="Imagem de um carro." />

        <form id="form-contact" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <input
            required
            type="tel"
            placeholder="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            placeholder="Cidade"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            placeholder="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Informações que quero adicionar..."
            name="informacoes"
            value={formData.informacoes}
            onChange={handleChange}
          />

          <CheckboxContainer>
            <input
              type="checkbox"
              name="desejaVender"
              checked={formData.desejaVender}
              onChange={handleChange}
            />
            <p>Desejo vender um veículo com a Veendauto.</p>
          </CheckboxContainer>

          <button disabled={submitting} type="submit">
            {
              submitting ?
                (
                  <img src={Loader} alt="Carregando..." loading="lazy" />
                )
                :
                (
                  "Enviar"
                )
            }
          </button>

        </form>

      </FormDivider>

      <Diferenciais>
        <h2>Na Veendauto, compramos seu carro de forma <strong>segura</strong>, sem complicações e com pagamento imediato via <strong>PIX</strong>.</h2>

        <DiferenciaisDivider>
          <li>
            <OkSpan>
              <img src={Check} alt="Check image." />
            </OkSpan>
            <p>Avaliação rápida</p>
          </li>
          <li>
            <OkSpan>
              <img src={Check} alt="Check image." />
            </OkSpan>
            <p>Dinheiro na hora</p>
          </li>
          <li>
            <OkSpan>
              <img src={Check} alt="Check image." />
            </OkSpan>
            <p>Oferta justa</p>
          </li>
        </DiferenciaisDivider>
      </Diferenciais>
    </ContactFormContent>
  )
}