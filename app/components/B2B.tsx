"use client";

import { usePathname } from "next/navigation";

export default function B2B() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="b2b"
      className="min-h-[calc(100vh-80px)] px-8 py-8"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Home + B2B */}
        <div className="flex items-center gap-4">

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

          <div className="inline-block px-5 py-3 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              B2B
            </p>
          </div>

        </div>

        {/* Contenuto centrale */}
        <div className="min-h-[calc(100vh-160px)] flex items-center">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">

            {/* Titolo B2B */}
            <div className="flex flex-col items-center">

              <h1 className="text-7xl md:text-9xl font-bold text-[#E8B27A]">
                B2B
              </h1>

              <p className="mt-2 text-xl md:text-3xl font-semibold text-[#E8B27A] text-center">
                {isEnglish
                  ? "Services for SMEs"
                  : "Servizi per PMI"}
              </p>

            </div>

            {/* Riquadro */}
            <div className="border border-[#1F2937]/20 rounded-2xl p-6 md:p-10">

              <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937]">
                {isEnglish
                  ? "Business services"
                  : "Servizi per aziende"}
              </h2>

              <ul className="mt-6 space-y-3 text-base md:text-lg text-[#1F2937]">
                <li>
                  • {isEnglish
                    ? "3D modelling with FreeCAD"
                    : "Modellazione 3D con FreeCAD"}
                </li>
                <li>
                  • {isEnglish
                    ? "Technical and mechanical drawings"
                    : "Disegni tecnici e meccanici"}
                </li>
                <li>
                  • {isEnglish
                    ? "Design for 3D printing"
                    : "Progettazione per la stampa 3D"}
                </li>
                <li>
                  • {isEnglish
                    ? "Component design"
                    : "Progettazione di componenti"}
                </li>
                <li>
                  • {isEnglish
                    ? "Prototyping and small production runs"
                    : "Prototipazione e piccole serie di produzione"}
                </li>
              </ul>

              <p className="mt-6 text-base leading-relaxed text-[#1F2937]">
                {isEnglish
                  ? "FreeCAD is open source and free to use, allowing businesses to work without software licensing costs."
                  : "FreeCAD è open source e gratuito, permettendo alle aziende di lavorare senza costi di licenza software."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}