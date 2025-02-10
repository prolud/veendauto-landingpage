import Header from "../../components/header";
import Banner from "../../components/banner";
import OurServices from "../../components/our-services";
import ContactForm from "../../components/contact-form";
import Casal from "../../components/casal";
import RedirectToForm from "../../components/redirect-to-form";
import Footer from "../../components/footer";
import WhatsappFloatingButton from "../../components/whatsapp-floating-button";
import Success from "../../components/success";

export default function Home() {
  
  const scrollHandler = () => {
    const headerElement = document.getElementById("header") as HTMLElement
    console.log(window.scrollY)
    
    
    if (window.scrollY === 0) {
      headerElement.classList.remove("with-bg")
    }
    else {
      headerElement.classList.add("with-bg")
    }
  }

  window.addEventListener("scroll", scrollHandler)

  return (
    <main>
      <WhatsappFloatingButton />
      <Success />

      <Header />
      <Banner />
      <OurServices />
      <ContactForm />
      <Casal />
      <RedirectToForm />
      <Footer />
    </main>
  )
}