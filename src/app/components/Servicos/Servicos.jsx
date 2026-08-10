import React from "react";
import Image from "next/image";
import Container from "../Container/Container";

export default function Servicos() {
  const services = [
    {
      name: "Corte Clássico",
      description:
        "Ideal para manutenção semanal com acabamento preciso e estilo alinhado ao seu perfil.",
      price: "R$ 50",
      cta: "Agendar Corte Clássico",
      benefits: [
        "Consultoria rápida de visagismo",
        "Corte com finalização premium",
        "Contorno e nuca no detalhe",
      ],
      featured: false,
    },
    {
      name: "ReZenha Experience",
      description:
        "Combo completo de corte + barba para uma experiência de cuidado superior do início ao fim.",
      price: "R$ 90",
      cta: "Agendar ReZenha Experience",
      benefits: [
        "Corte personalizado de alta precisão",
        "Barba desenhada com toalha quente",
        "Finalização com produtos profissionais",
      ],
      featured: true,
    },
    {
      name: "Barba Terapia",
      description:
        "Foco total em barba e acabamento para elevar presença, simetria e conforto da pele.",
      price: "R$ 45",
      cta: "Agendar Barba Terapia",
      benefits: [
        "Modelagem e simetria da barba",
        "Hidratação e tratamento da pele",
        "Navalhado e acabamento refinado",
      ],
      featured: false,
    },
  ];

  return (
    <section
      id="servicos"
      className="bg-black text-zinc-100 py-20 md:py-24 w-full relative overflow-hidden flex flex-col items-center justify-center"
    >
      <Container>
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="flex items-center gap-2">
            <div className="bg-laranja-marca w-5 h-0.5 opacity-[0.6]"></div>
            <p className="text-laranja-marca text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              Nossos Serviços
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
            Escolha Seu Ritual na
            <span className="text-laranja-marca"> ReZenha</span>
          </h2>
          <p className="text-zinc-300 tracking-wide">
            Planos pensados para quem busca consistencia, estilo e presenca em
            cada detalhe.
          </p>
        </div>

        {/* Tabela de Serviços */}
        <div className="lg:flex md:items-center md:justify-center gap-20">
          <div className="bg-neutral-950/90 backdrop-blur-sm border border-white/10 rounded 3xl p-6 md:p-8 flex flex-col gap-4 md:gap-6 text-zinc-100 md:h-full md:min-w-80">
            <div className="text-zinc-100 flex justify-between items-center pb-2 md:pb-3 md:min-w-180">
              <h2 className="text-md text-zinc-100 tracking-[0.16em] uppercase font-bold">
                Serviços
              </h2>
              <p className="text-sm text-zinc-300 tracking-[0.16em] uppercase font-bold">
                Preços
              </p>
            </div>
            <div className="text-zinc-300 flex justify-between items-center gap-4 md:gap-6 border-b border-zinc-700 pb-2 md:pb-3">
              <h3 className="text-md text-zinc-200 tracking-wide">
                Corte clássico
              </h3>
              <p className="text-xl text-laranja-marca tracking-wide font-bold">
                R$ 50
              </p>
            </div>
            <div className="text-zinc-300 flex justify-between items-center gap-4 md:gap-6 border-b border-zinc-700 pb-2 md:pb-3">
              <h3 className="text-md text-zinc-200 tracking-wide">
                ReZenha Experience
              </h3>
              <p className="text-xl text-laranja-marca tracking-wide font-bold">
                R$ 90
              </p>
            </div>
            <div className="text-zinc-300 flex justify-between items-center gap-4 md:gap-6 border-b border-zinc-700 pb-2 md:pb-3">
              <h3 className="text-md text-zinc-200 tracking-wide">
                Barba Terapia
              </h3>
              <p className="text-xl text-laranja-marca tracking-wide font-bold">
                R$ 45
              </p>
            </div>
            <div className="text-zinc-300 flex justify-between items-center gap-4 md:gap-6 ">
              <h3 className="text-md text-zinc-200 tracking-wide">
                Corte de Barba
              </h3>
              <p className="text-xl text-laranja-marca tracking-wide font-bold">
                R$ 45
              </p>
            </div>
          </div>

          <div className="hidden md:block w-80 h-80 relative rounded-3xl overflow-hidden">
            <Image
              src="/service2.webp"
              alt="Serviço em destaque"
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-cover rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
