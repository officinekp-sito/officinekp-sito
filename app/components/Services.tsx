"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Services() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section id="stampa-3d" className="px-8 pt-8 pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Title + Home */}
        <div className="flex items-center gap-4 mb-12">
          <a
            href={isEnglish ? "/en#home" : "#home"}
            aria-label={isEnglish ? "Back to Home" : "Torna alla Home"}
            className="transition-transform duration-300 hover:scale-125"
          >
            <img
              src="/Icone/home.svg"
              alt="Home"
              className="w-8 h-8"
            />
          </a>

          <div className="inline-block px-4 py-2 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              {isEnglish ? "3D Printing" : "Stampa 3D"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 -mt-2 items-start">

          {/* Printer */}
          <div className="min-w-0">

            <a
              href="https://store.creality.com/eu/products/creality-k2-plus-combo-3d-printer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-5 text-[#1F2937] underline hover:opacity-60"
            >
              {isEnglish
                ? "Discover our Prosumer 3D printer →"
                : "Scopri la nostra stampante 3D Prosumer →"}
            </a>

            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/Stampante3d/K21.webp"
                alt="Creality K2 Plus Combo"
                width={700}
                height={700}
                className="w-4/5 h-auto object-contain mx-auto"
              />
            </div>

          </div>

          {/* Services */}
          <div className="space-y-6">

            <div className="p-8 border border-[#1F2937]/20 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#1F2937]">
                {isEnglish ? "Prototyping" : "Prototipazione"}
              </h3>

              <p className="mt-4">
                {isEnglish
                  ? "Production of prototypes and components."
                  : "Realizzazione di prototipi e componenti."}
              </p>
            </div>

            <div className="p-8 border border-[#1F2937]/20 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#1F2937]">
                {isEnglish ? "Production" : "Produzione"}
              </h3>

              <p className="mt-4">
                {isEnglish
                  ? "Production of individual parts or customised small batches."
                  : "Produzione di pezzi singoli o piccole serie personalizzate."}
              </p>
            </div>

            <div className="p-8 border border-[#1F2937]/20 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#1F2937]">
                {isEnglish ? "Materials" : "Materiali"}
              </h3>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-4 py-2 border border-[#1F2937]/20 rounded-xl">
                  PLA
                </span>

                <span className="px-4 py-2 border border-[#1F2937]/20 rounded-xl">
                  PETG
                </span>

                <span className="px-4 py-2 border border-[#1F2937]/20 rounded-xl">
                  TPU
                </span>

                <span className="px-4 py-2 border border-[#1F2937]/20 rounded-xl">
                  {isEnglish ? "Multicolor printing" : "Stampa multicolore"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}