"use client";

import { usePathname } from "next/navigation";

export default function Blender() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section id="blender" className="w-full px-8 pt-8 pb-16">
      <div className="max-w-6xl mx-auto w-full">

        {/* Home + Blender */}
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
              Blender
            </p>
          </div>
        </div>

        {/* Contenuto */}
        <div className="max-w-4xl mx-auto w-full">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/software/Blender.webp"
              alt="Blender"
              className="w-36 h-36 object-contain"
            />
          </div>

          {/* Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* What I can create */}
            <div className="p-6 bg-[#F3F4F6] rounded-2xl">
              <h3 className="text-2xl font-bold text-[#1F2937]">
                {isEnglish
                  ? "What I can create"
                  : "Cosa posso realizzare"}
              </h3>

              <ul className="mt-4 space-y-2 text-base text-[#1F2937]">
                <li>
                  • {isEnglish
                    ? "Organic modelling and complex shapes"
                    : "Modellazione organica e forme complesse"}
                </li>
                <li>
                  • {isEnglish
                    ? "Surface modelling and detailed geometries"
                    : "Modellazione di superfici e geometrie dettagliate"}
                </li>
                <li>
                  • {isEnglish
                    ? "Prototyping of non-mechanical objects"
                    : "Prototipazione di oggetti non meccanici"}
                </li>
                <li>
                  • {isEnglish
                    ? "Editing and preparation of 3D models"
                    : "Modifica e preparazione di modelli 3D"}
                </li>
                <li>
                  • {isEnglish
                    ? "Modelling with great creative freedom"
                    : "Modellazione con grande libertà creativa"}
                </li>
              </ul>
            </div>

            {/* Where it is not the right choice */}
            <div className="p-6 bg-orange-100 border border-orange-300 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#9A3412]">
                {isEnglish
                  ? "Where it is not the right choice"
                  : "Dove non è la scelta giusta"}
              </h3>

              <ul className="mt-4 space-y-2 text-base text-[#7C2D12]">
                <li>
                  • {isEnglish
                    ? "Precise mechanical design"
                    : "Progettazione meccanica precisa"}
                </li>
                <li>
                  • {isEnglish
                    ? "Technical parametric modelling"
                    : "Modellazione parametrica tecnica"}
                </li>
                <li>
                  • {isEnglish
                    ? "Complex mechanical assemblies"
                    : "Assiemi meccanici complessi"}
                </li>
                <li>
                  • {isEnglish
                    ? "Precise and quick dimensional changes"
                    : "Modifiche dimensionali precise e rapide"}
                </li>
                <li>
                  • {isEnglish
                    ? "Technical projects requiring parametric constraints"
                    : "Progetti tecnici che richiedono vincoli parametrici"}
                </li>
                <li>
                  • {isEnglish
                    ? "Technical workflows better suited to FreeCAD"
                    : "Workflow tecnici più adatti a FreeCAD"}
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}