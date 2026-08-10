import Image from "next/image";
import { Clock3, Mail, MapPin, MessageCircleMore } from "lucide-react";
import Container from "../Container/Container";

export default function Contato() {
  return (
    <section
      id="contato"
      className="bg-neutral-950/90 py-20 md:py-24 w-full relative overflow-hidden flex flex-col items-center justify-center"
    >
      <Container>
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="flex items-center gap-2">
            <div className="bg-laranja-marca w-5 h-0.5 opacity-[0.6]"></div>
            <p className="text-laranja-marca text-xs md:text-sm font-bold tracking-[0.22em] uppercase">
              Contato
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
            Entre em Contato com a <br />
            <span className="text-laranja-marca">ReZenha</span>
          </h2>
          <p className="text-zinc-300 mt-3 max-w-2xl">
            Estamos prontos para ouvir você! Seja para agendar um horário, tirar
            dúvidas ou compartilhar feedback, nossa equipe está à disposição.
            Venha nos visitar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
          {/*Logo/redes-sociais*/}
          <div className="flex md:flex flex-col justify-center gap-2">
            <Image
              src="/rezenhabarbearia.webp"
              alt="Logo da Barbearia"
              width={144}
              height={144}
              className="rounded-full object-cover border-2 border-white/10"
            />
            <div>Instragram Facebook</div>
          </div>
          {/*Telefone, email, whatsapp/endereço*/}
          <div className="flex md:flex flex-col items-start justify-center">
            <div className="flex items-center">
              <MessageCircleMore className="mr-2 h-5 w-5 shrink-0 text-laranja-marca" />
              <h4 className="text-md font-bold uppercase tracking-wide text-zinc-100">
                WhatsApp:{" "}
              </h4>
            </div>
            <div>
              <p className="text-zinc-300 text-sm leading-relaxed text-start mb-4">
                (55) 99905-3882
              </p>
            </div>

            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 shrink-0 text-laranja-marca" />
              <h4 className="text-md font-bold uppercase tracking-wide text-zinc-100">
                Email:{" "}
              </h4>
            </div>
            <div>
              <p className="text-zinc-300 text-sm leading-relaxed text-start mb-4">
                contato@rezenhabarbearia.com
              </p>
            </div>

            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 shrink-0 text-laranja-marca" />
              <h4 className="text-md font-bold uppercase tracking-wide text-zinc-100">
                Endereço:{" "}
              </h4>
            </div>
            <div>
              <p className="text-zinc-300 text-sm leading-relaxed text-start mb-4">
                R. José Bonifácio, 2475 - Sl 01 - Centro, Santa Maria - RS,
                97015-450
              </p>
            </div>

            <div className="flex items-center">
              <Clock3 className="mr-2 h-5 w-5 shrink-0 text-laranja-marca" />
              <h4 className="text-md font-bold uppercase tracking-wide text-zinc-100">
                Horário de funcionamento:{" "}
              </h4>
            </div>
            <div>
              <p className="text-zinc-300 text-sm leading-relaxed text-start mb-4">
                Segunda a Sexta: 09:00 - 19:00 <br />
                Sabado: 07:00 - 19:00
              </p>
            </div>
          </div>

          {/*Mapa*/}
          <div className="flex items-center justify-center">
            <div className="bg-gray-800 border border-white/10 rounded-3xl w-full h-64 md:h-80 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1786052384488!6m8!1m7!1sxnTXRF4_TJXYLns1jUwqKg!2m2!1d-29.69081881538188!2d-53.80521024618936!3f154.8672!4f0!5f0.7820865974627469"
                className="w-full h-full border-0"
                loading="lazy"
                title="Mapa da Barbearia ReZenha"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
