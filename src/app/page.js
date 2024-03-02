import Header from "./components/WhySaudiInner/Header/Header";
import Footer from "./components/WhySaudiInner/Footer/Footer";
import MobileHeader from "./components/WhySaudiInner/MobileHeader/MobileHeader";
import Hero from "./components/Hero/Hero";
import { container6 } from "./contents/MainPage";
import Container6 from "./components/Container6/Container6";
import Container4 from "./components/Container4/Container4";
import Container2 from "./components/Container2/Container2";
import Clients from "./components/ClientsContainer/Clients";
import Container7 from "./components/WhySaudiInner/Container7/Container7";
import ContactBanner from "./components/WhySaudiInner/ContactBanner/ContactBanner";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileHeader />
      <WhatsAppChat />
      <Hero />
      <Container6 data={container6} />
      <Container4 />
      <Container2 />
      <Clients />
      <Container7 />
      <ContactBanner />
      <Footer />
    </main>
  );
}
