"use client";

import { usePathname } from "next/navigation";

export default function Design() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="design"
      className="min-h-[calc(100vh-80px)] md:h-[calc(100vh-80px)] px-8 pt-8"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Home + Design */}
        <div className="flex items-center gap-4">

          <a href={isEnglish ? "/en#home" : "#home"} aria-label={isEnglish ? "Back to Home" : "Torna alla Home"} className="transition-transform duration-300 hover:scale-125">
            <img src="/Icone/home.svg" alt="Home" className="w-8 h-8" />
          </a>

          <div className="inline-block px-5 py-3 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              Design
            </p>
          </div>

        </div>

        {/* Centered content */}
        <div className="min-h-[calc(100vh-160px)] md:h-[calc(100vh-160px)] flex items-center justify-center">

          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center w-full gap-6 md:gap-0">

            {/* FreeCAD */}
            <div className="order-1 md:order-1 flex justify-center md:justify-end md:pr-12">
              <a href={isEnglish ? "/en#freecad" : "#freecad"} className="transition-transform duration-300 hover:scale-150">
                <img
                  src="/software/Freecad.png"
                  alt="FreeCAD"
                  className="w-28 h-28 md:w-48 md:h-48 object-contain"
                />
              </a>
            </div>

            {/* Blender */}
            <div className="order-2 md:order-3 flex justify-center md:justify-start md:pl-12">
              <a href={isEnglish ? "/en#blender" : "#blender"} className="transition-transform duration-300 hover:scale-150">
                <img
                  src="/software/Blender.webp"
                  alt="Blender"
                  className="w-28 h-28 md:w-80 md:h-80 object-contain"
                />
              </a>
            </div>

            {/* Central text */}
            <div className="order-3 md:order-2 col-span-2 md:col-span-1 text-center w-full md:w-[650px]">

              <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2937]">
                {isEnglish
                  ? "Software for 3D modelling"
                  : "Software per la modellazione 3D"}
              </h2>

              <p className="mt-4 text-lg md:text-xl text-[#1F2937]">
                {isEnglish
                  ? "Open source · Free · No proprietary licenses"
                  : "Open source · Gratuito · Nessuna licenza proprietaria"}
              </p>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-[#1F2937]">
                {isEnglish
                  ? "FreeCAD and Blender are complementary tools: FreeCAD is focused on technical and parametric design, while Blender offers greater freedom for organic modelling, complex shapes and visualization."
                  : "FreeCAD e Blender sono strumenti complementari: FreeCAD è orientato alla progettazione tecnica e parametrica, mentre Blender offre maggiore libertà per la modellazione organica, le forme complesse e la visualizzazione."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}