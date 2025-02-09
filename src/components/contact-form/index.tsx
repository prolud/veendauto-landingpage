import { CheckboxContainer, ContactFormContent, FormDivider } from "./styles";
import CarForm from "../../assets/car-form.svg"

export default function ContactForm() {
  return (
    <ContactFormContent>
      <h1 id="form-deixe-contato">Deixe seu contato conosco</h1>

      <FormDivider>

        <img src={CarForm} alt="Imagem de um carro." />

        <form id="form-contact" action="">
          <input type="text" placeholder="Nome" name="" id="" />
          <input type="tel" placeholder="Telefone" name="" id="" />
          <input type="text" placeholder="Cidade" name="" id="" />
          <input type="email" placeholder="E-mail" name="" id="" />
          <textarea name="" placeholder="Informações que quero adicionar..." id=""></textarea>

          <CheckboxContainer>
            <input type="checkbox" name="" id="" />
            <p>Desejo vender um veículo com a Veendauto.</p>
          </CheckboxContainer>

        </form>

      </FormDivider>
    </ContactFormContent>
  )
}