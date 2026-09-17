"use client";

import { usePathname } from "next/navigation";

export default function FreeCAD() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section id="freecad" className="w-full px-8 pt-8 pb-16">
      <div className="max-w-6xl mx-auto w-full">

        {/* Home + FreeCAD */}
        <div className="flex items-center gap-4 mb-8">
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
              FreeCAD
            </p>
          </div>
        </div>

        {/* Contenuto */}
        <div className="max-w-4xl mx-auto w-full">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/software/Freecad.png"
              alt="FreeCAD"
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>

          {/* Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* What I can create */}
            <div className="p-5 md:p-6 bg-[#F3F4F6] rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-[#1F2937]">
                {isEnglish ? "What I can create" : "Cosa posso realizzare"}
              </h3>

              <ul className="mt-4 space-y-2 text-base text-[#1F2937]">
                <li>
                  • {isEnglish
                    ? "Precise mechanical design and technical parts"
                    : "Progettazione meccanica precisa e parti tecniche"}
                </li>
                <li>
                  • {isEnglish
                    ? "Parametric models with modifiable dimensions"
                    : "Modelli parametrici con dimensioni modificabili"}
                </li>
                <li>
                  • {isEnglish
                    ? "Mechanical assemblies and functional prototypes"
                    : "Assiemi meccanici e prototipi funzionali"}
                </li>
                <li>
                  • {isEnglish
                    ? "Technical drawings and precise 2D projections"
                    : "Disegni tecnici e proiezioni 2D precise"}
                </li>
                <li>
                  • {isEnglish
                    ? "Functional components designed for manufacturing"
                    : "Componenti funzionali progettati per la produzione"}
                </li>
              </ul>
            </div>

            {/* Where it is not the right choice */}
            <div className="p-5 md:p-6 bg-orange-100 border border-orange-300 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-[#9A3412]">
                {isEnglish
                  ? "Where it is not the right choice"
                  : "Dove non è la scelta giusta"}
              </h3>

              <ul className="mt-4 space-y-2 text-base text-[#7C2D12]">
                <li>
                  • {isEnglish
                    ? "Organic modelling and sculptured shapes"
                    : "Modellazione organica e forme scultoree"}
                </li>
                <li>
                  • {isEnglish
                    ? "Free artistic creation without constraints"
                    : "Creazione artistica libera senza vincoli"}
                </li>
                <li>
                  • {isEnglish
                    ? "Complex character design or creatures"
                    : "Character design complesso o creature"}
                </li>
                <li>
                  • {isEnglish
                    ? "Non-technical shapes and artistic surfaces"
                    : "Forme non tecniche e superfici artistiche"}
                </li>
                <li>
                  • {isEnglish
                    ? "Workflows better suited to Blender"
                    : "Workflow tecnici più adatti a Blender"}
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}