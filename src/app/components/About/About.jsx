import React from "react";
import Image from "next/image";
import Container from "../Container/Container";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-black text-zinc-100 py-20 md:py-24 w-full relative overflow-hidden flex flex-col items-center justify-center"
    >
      <Container>
        {/* Cabeçalho da Seção Padronizado */}
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="flex items-center gap-2">
            <div className="bg-laranja-marca w-5 h-0.5 opacity-[0.6]"></div>
            <p className="text-laranja-marca text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              Sobre Nós
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
            Tradição & <span className="text-laranja-marca">Modernidade</span>
          </h2>
          <p className="text-zinc-300 tracking-wide">
            Conheça a história e a essência da nossa barbearia
          </p>
        </div>

        {/* Card Principal com Borda Giratória Corrigida para Containers Largos */}
        <div className="relative p-0.5 rounded-3xl overflow-hidden">
          {/* Feixe expandido para abranger todo o retângulo horizontal */}
          <div className="absolute -inset-[80%] animate-rotate-border bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#f97316_330deg,transparent_360deg)] opacity-80"></div>

          {/* Fundo interno escuro do card */}
          <div className="absolute inset-px bg-black/90 rounded-[calc(1.5rem-1px)]"></div>

          {/* Conteúdo interno do Card */}
          <div className="relative z-10 p-6 md:p-10 rounded-[calc(1.5rem-1px)] bg-neutral-950/90 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* COLUNA ESQUERDA: Logo + Descrição */}
            <div className="flex flex-col items-start md:items-start md:text-left flex-1 gap-6 md:gap-10 md:border-r md:border-white/10 md:pr-12">
              <div className="flex justify-between items-center w-full">
                <Image
                  src="/rezenhabarbearia.jpg"
                  alt="Logo da Barbearia"
                  width={144}
                  height={144}
                  className="rounded-full object-cover border-2 border-white/10"
                />
                <p className="text-zinc-300 text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
                  Desde 2020
                </p>
              </div>
              <p className="text-zinc-300 tracking-wide">
                A Barbearia Rezenha é um lugar onde a tradição encontra a
                modernidade. Com anos de experiência em Santa Maria, oferecemos
                os melhores serviços de corte e barba para homens que buscam
                excelência, estilo e aquela conversa de respeito.
              </p>
            </div>

            {/* COLUNA DIREITA: Foto em Destaque */}
            <div className="flex justify-center flex-1 w-full">
              <div className="w-full md:max-w-md">
                <Image
                  src="/foto3.jpg"
                  alt="Foto do interior ou serviço da barbearia"
                  width={520}
                  height={360}
                  className="rounded-3xl object-cover w-full h-auto border border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
