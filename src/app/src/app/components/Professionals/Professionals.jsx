import React from "react";
import Image from "next/image";
import { MessageSquareMore } from "lucide-react";
import Container from "../Container/Container";

export default function Professionals() {
  const professionals = [
    {
      name: "Carlos Silva",
      experience: "6 anos de experiência",
      specialty: "Master Barber",
      image: "/profissionais1.webp",
      whatsappUrl:
        "https://wa.me/5555999999999?text=Olá!%20Gostaria%20de%20agendar%20com%20o%20profissional%20Carlos.",
    },
    {
      name: "Matheus Rezenha",
      experience: "8 anos de experiência",
      specialty: "Visagista & Tesoura",
      image: "/profissionais2.webp",
      whatsappUrl:
        "https://wa.me/5555999999999?text=Olá!%20Gostaria%20de%20agendar%20com%20o%20profissional%20Matheus.",
    },
    {
      name: "Gabriel Souza",
      experience: "4 anos de experiência",
      specialty: "Degradê & Barba Terapia",
      image: "/profissionais3.webp",
      whatsappUrl:
        "https://wa.me/5555999999999?text=Olá!%20Gostaria%20de%20agendar%20com%20o%20profissional%20Gabriel.",
    },
  ];

  return (
    <section
      id="profissionais"
      className="bg-black text-zinc-100 py-20 md:py-24 w-full relative overflow-hidden flex flex-col items-center justify-center"
    >
      <Container>
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="flex items-center gap-2">
            <div className="bg-laranja-marca w-5 h-0.5 opacity-[0.6]"></div>
            <p className="text-laranja-marca text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              Nossa Equipe
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
            Profissionais de <span className="text-laranja-marca">Elite</span>
          </h2>
          <p className="text-zinc-300 mt-3 max-w-2xl">
            Especialistas prontos para entregar o visual perfeito.
            <br /> Escolha seu barbeiro de confiança e agende direto pelo
            WhatsApp.
          </p>
        </div>

        {/* Grid de Profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionals.map((pro) => (
            <div
              key={pro.name}
              className="group relative p-0.5 rounded-3xl overflow-hidden"
            >
              {/* Feixe de luz giratório contínuo */}
              <div className="absolute -inset-[50%] animate-rotate-border bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#f97316_330deg,transparent_360deg)] opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Fundo interno escuro do card */}
              <div className="absolute inset-px bg-black/90 rounded-[calc(1.5rem-1px)]"></div>

              {/* Conteúdo do Card */}
              <div className="relative z-10 p-6 md:p-8 rounded-[calc(1.5rem-1px)] bg-neutral-950/90 backdrop-blur-sm flex flex-col items-center text-center">
                {/* Foto Redonda com Glow de Destaque */}
                <div className="relative w-48 h-48 mb-6 rounded-3xl overflow-hidden border-2 border-white/20 transition-colors duration-300">
                  <Image
                    src={pro.image}
                    alt={`Foto de ${pro.name}`}
                    width={220}
                    height={220}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Informações */}
                <h3 className="text-xl font-bold uppercase tracking-wide text-zinc-100 mb-2">
                  {pro.name}
                </h3>
                <p className="text-laranja-marca font-semibold text-sm mb-2">
                  {pro.specialty}
                </p>

                {/* Anos de Experiência */}
                <p className="text-zinc-300 mb-6 text-xs md:text-sm font-semibold tracking-[0.22em] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  {pro.experience}
                </p>

                {/* Botão de Agendamento com Ícone */}
                <a
                  href={pro.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-2 rounded-xl text-sm font-bold uppercase tracking-wider bg-laranja-marca text-zinc-100 hover:bg-laranja-hover transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2"
                >
                  <MessageSquareMore className="w-4 h-4" />
                  Agendar com {pro.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}