import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Professionals from "./components/Professionals/Professionals";
import Servicos from "./components/Servicos/Servicos";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Contato from "./components/Contato/Contato";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Professionals />
      <Servicos />
      <Depoimentos />
      <Contato />
    </>
  );
}
