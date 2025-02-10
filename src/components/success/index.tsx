import { SuccessDialog } from "./styles";
import SuccessIcon from "../../assets/success.svg"

export default function Success() {
  return (
    <SuccessDialog id="form-submitted-success">
      <img src={SuccessIcon} alt="" />
      <p>Contato enviado com sucesso!</p>
    </SuccessDialog>
  )
}