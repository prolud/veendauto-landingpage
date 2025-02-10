import { IFormData } from "../components/contact-form";

export const answerForm = async (formData: IFormData, setSubmitting: (state: boolean) => void) => {
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
    .then(
      () => {
        const form = document.getElementById("form-contact") as HTMLFormElement
        form.reset()
        setSubmitting(false)
        const submmitDialog = document.getElementById("form-submitted-success") as HTMLDialogElement
        submmitDialog.open = true
        setTimeout(() => { submmitDialog.open = false }, 5000)
      }
    )
}
