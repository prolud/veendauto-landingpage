import axios from "axios";
import { IFormData } from "../components/contact-form";

const googleApi = axios.create(
  {
    baseURL: import.meta.env.VITE_FORMAPI
  }
)

export const answerForm = async (formData: IFormData, setSubmitting: (state: boolean) => void) => {
  // googleApi.post("/exec", formData,
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  setSubmitting(true)
  await fetch(import.meta.env.VITE_FORMAPI,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: (`nome=${formData.nome}&telefone=${formData.telefone}&cidade=${formData.cidade}&email=${formData.email}&informacoes=${formData.informacoes}&desejaVender=${formData.desejaVender}`)
    }
  )
    .then(() => setSubmitting(false))
}
