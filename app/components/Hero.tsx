"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] px-8 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="text-center">

          <p className="text-sm uppercase tracking-widest text-[#1F2937]">
            FERRARA · B2B · B2C
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] text-center mt-4">
            {isEnglish
              ? "3D Design and Printing"
              : "Progettazione e Stampa 3D"}
          </h1>

          <p className="mt-6 text-xl text-[#1F2937] max-w-xl mx-auto">
            {isEnglish
              ? "3D modelling with FreeCAD and Blender."
              : "Modellazione 3D con FreeCAD e Blender."}
          </p>

          <div className="flex justify-center mt-10">
            <a
              href={isEnglish ? "/en#preventivo" : "#preventivo"}
              className="bg-[#1F2937] text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:opacity-80"
            >
              {isEnglish
                ? "Request a quote"
                : "Richiedi un preventivo"}
            </a>
          </div>

        </div>

        <div className="flex justify-center">
          <Image
            src="/Portfolio/sheep.webp"
            alt={
              isEnglish
                ? "3D model of a sheep"
                : "Modello 3D di una pecora"
            }
            width={600}
            height={600}
            className="w-full max-w-xl h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}