import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CardsContainer from "./components/CardsContainer";
import Services from "./components/Services";
import Testimonials from "./components/Teestimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div>
      <HeroSection />
      <Features />
      <CardsContainer />
      <Services />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
