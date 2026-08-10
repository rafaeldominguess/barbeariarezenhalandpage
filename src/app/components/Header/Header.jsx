"use client"; // Necessário no Next.js App Router para usar hooks como useState

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "../Container/Container";

export default function Header() {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Profissionais", href: "#profissionais" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-center sticky top-0 z-50 w-full text-zinc-100 border-b border-white/10 flex justify-between items-center bg-black/95">
      <nav role="navigation" aria-label="Main navigation" className="w-full">
        <Container className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="cursor-pointer flex items-center justify-center">
            <Image
              src="/rezenhabarbearia.webp"
              alt="Logo da Barbearia ReZenha"
              width={56}
              height={56}
              className="rounded-full"
            />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-6 items-center">
            <ul className="flex gap-6 items-center">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="relative group py-1 tracking-wider text-zinc-100 hover:text-(--laranja-marca) font-semibold  transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-(--laranja-marca) transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Botão Agendar Desktop */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20ReZenha."
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer py-2.5 px-6 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/50 hover:border-(--laranja-marca) hover:text-(--laranja-marca) transition-colors duration-300 shadow-(--laranja-marca)"
            >
              Agendar horário
            </a>
          </div>

          {/* Botão Menu Mobile (Hamburguer / Fechar) */}
          <button
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center cursor-pointer text-zinc-100 font-semibold"
          >
            {isMenuOpen ? (
              <X className="stroke-3 w-8 h-8 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="stroke-3 w-8 h-8 transition-transform duration-300 rotate-0" />
            )}
          </button>
        </Container>
      </nav>

      {/* Dropdown do Menu Mobile com Animação */}
      <div
        className={`md:hidden w-full h-screen bg-black/95 backdrop-blur-sm absolute top-22 left-0  border-b border-white/10  flex flex-col items-center justify-center py-6 space-y-6 transition-all duration-500 ease-in-out transform origin-top ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 items-center w-full">
          {navigationLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <Link
                href={link.href}
                onClick={toggleMenu}
                className="block w-full py-2 text-lg text-zinc-100 font-semibold hover:text-(--laranja-marca) transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Botão de Agendar no Mobile */}
        <a
          href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20ReZenha."
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer py-3 px-8 rounded-xl text-zinc-100 bg-white/10 border border-white/50 hover:border-(--laranja-marca) hover:text-(--laranja-marca) transition-colors duration-300 w-11/12 max-w-sm font-semibold uppercase"
        >
          Agendar horário
        </a>
      </div>
    </header>
  );
}
