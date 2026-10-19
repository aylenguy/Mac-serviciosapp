import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Faq from "./components/Faq";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <Faq />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}