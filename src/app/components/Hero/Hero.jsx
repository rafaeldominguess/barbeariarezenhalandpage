import React from "react";
import Image from "next/image";
import Container from "../Container/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] md:h-170 flex items-center overflow-hidden"
    >
      <Image
        src="/foto1.jpg"
        alt="Interior da barbearia"
        fill
        className="-z-10 object-cover"
        priority
      />
      {/* Gradiente de leitura aprimorado (mais escuro na esquerda para destacar o texto) */}
      <div className="absolute border-b border-white/10 inset-0 bg-linear-to-r from-black via-black/85 to-black/50  md:to-transparent"></div>

      {/* Conteúdo do Hero */}
      <Container className="py-20 md:py-24 w-full px-10 md:px-0">
        <div className="relative z-10 max-w-xl flex flex-col md:items-start gap-4 md:gap-7 w-full text-start md:text-start text-zinc-100">
          {/* Tag da Cidade */}
          <div className="flex items-center gap-2">
            <div className="bg-laranja-marca w-5 h-0.5 opacity-[0.6]"></div>
            <p className="text-laranja-marca text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              SANTA MARIA - RS
            </p>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tighter text-zinc-100">
            Muito mais que um
            <span className="text-laranja-marca"> Corte</span>
          </h1>

          {/* Parágrafo Descritivo */}
          <p className="text-zinc-300 tracking-wide leading-snug">
            O verdadeiro estilo de Santa Maria.<br />Venha viver a experiência da
            Barbearia ReZenha: navalha afiada, toalha quente e aquela rezenha de
            respeito.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <a
              href="https://wa.me/5555999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20ReZenha."
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer py-3.5 px-8 rounded-md text-xs font-bold uppercase tracking-wider text-zinc-100 bg-laranja-marca hover:bg-laranja-hover transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] text-center"
            >
              Agendar horário
            </a>
            <a
              href="#sobre"
              className="cursor-pointer py-3.5 px-8 rounded-md text-xs font-bold uppercase tracking-wider text-zinc-100 bg-white/10 border border-white/50 hover:border-laranja-marca hover:text-laranja-marca transition-all duration-300 text-center backdrop-blur-xs"
            >
              Venha conhecer
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
