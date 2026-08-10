import React from "react";
import { Star } from "lucide-react"; // Importe o ícone de estrela
import Container from "../Container/Container";

// Função simples para renderizar as estrelas
const Stars = ({ rating = 5 }) => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-laranja-marca text-laranja-marca" : "text-zinc-600"}`}
      />
    ))}
  </div>
);

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="bg-black text-zinc-100 py-20 md:py-24 w-full relative overflow-hidden flex flex-col items-center justify-center"
    >
      <Container>
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="flex items-center gap-2">
            <div className="bg-laranja-marca w-5 h-0.5 opacity-[0.6]"></div>
            <p className="text-laranja-marca text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              Depoimentos
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
            O que nossos clientes dizem <br/> sobre a
            <span className="text-laranja-marca"> ReZenha</span>
          </h2>
          <p className="text-zinc-300 mt-3 max-w-2xl">
            Leia os depoimentos de clientes satisfeitos que vivenciaram a experiência única da ReZenha. Cada corte, cada detalhe, cada momento é pensado para proporcionar a melhor experiência possível.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Exemplo de card com 5 estrelas */}
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950/90 backdrop-blur-sm border border-white/10 p-6 md:p-8">
            <Stars rating={5} />

            <div className="flex gap-2 items-center mb-2">
              <h4 className="text-sm font-bold uppercase tracking-wide text-zinc-100">
                Rafael Domingues
              </h4>
            </div>
            <div>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed text-start">
                "O atendimento é impecável e o corte de cabelo ficou excelente.
                Recomendo muito a ReZenha!"
              </p>
            </div>
          </div>

          {/* Exemplo de card com 5 estrelas */}
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950/90 backdrop-blur-sm border border-white/10 p-6 md:p-8">
            <Stars rating={5} />

            <div className="flex gap-2 items-center mb-2">
              <h4 className="text-sm font-bold uppercase tracking-wide text-zinc-100">
                Gustavo dos Santos
              </h4>
            </div>
            <div>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed text-start">
                "Ambiente nota 10, profissionais muito capacitados e sempre
                pontuais."
              </p>
            </div>
          </div>
          {/* Exemplo de card com 5 estrelas */}
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950/90 backdrop-blur-sm border border-white/10 p-6 md:p-8">
            <Stars rating={5} />
            <div className="flex gap-2 items-center mb-2">
              <h4 className="text-sm font-bold uppercase tracking-wide text-zinc-100">
                Guilherme Soares
              </h4>
            </div>
            <div>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed text-start">
                "A ReZenha é o lugar perfeito para quem busca qualidade e
                conforto."
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
