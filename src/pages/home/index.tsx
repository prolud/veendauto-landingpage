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
  return (
    <main>
      <WhatsappFloatingButton/>
      <Success/>
      
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