"use client";

import { usePathname } from "next/navigation";

export default function Social() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="social"
      className="min-h-[calc(100vh-80px)] px-8 py-8"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Home + Social */}
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
              Social
            </p>
          </div>

        </div>

        {/* Centered content */}
        <div className="min-h-[calc(100vh-160px)] flex items-center">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">

            {/* Title */}
            <div className="flex flex-col items-center">

              <h1 className="text-4xl md:text-6xl font-bold text-[#8FBC8F] text-center leading-tight">
                {isEnglish ? (
                  <>
                    PROJECTS
                    <br />
                    FOR THE
                    <br />
                    COMMUNITY
                  </>
                ) : (
                  <>
                    PROGETTI
                    <br />
                    PER IL
                    <br />
                    SOCIALE
                  </>
                )}
              </h1>

            </div>

            {/* Box */}
            <div className="border border-[#1F2937]/20 rounded-2xl p-6 md:p-10">

              <p className="text-base md:text-lg leading-relaxed text-[#1F2937]">
                {isEnglish
                  ? "I make my skills in 3D modelling, design and 3D printing available to help develop solutions for individuals, associations and organisations working in the community."
                  : "Metto a disposizione le mie competenze nella modellazione 3D, nel design e nella stampa 3D per contribuire allo sviluppo di soluzioni per singoli, associazioni e organizzazioni che operano nella comunità."}
              </p>

              <p className="mt-4 text-base md:text-lg leading-relaxed text-[#1F2937]">
                {isEnglish
                  ? "I can develop small customised projects, adaptations and made-to-measure components, with the aim of making solutions simpler and more accessible when they might otherwise be difficult or expensive to produce."
                  : "Posso sviluppare piccoli progetti personalizzati, adattamenti e componenti su misura, con l'obiettivo di rendere le soluzioni più semplici e accessibili quando altrimenti potrebbero essere difficili o costose da realizzare."}
              </p>

              <p className="mt-4 text-base md:text-lg leading-relaxed text-[#1F2937]">
                {isEnglish
                  ? "For projects with social or assistive purposes, I provide this service free of charge."
                  : "Per progetti con finalità sociali o assistive, offro questo servizio gratuitamente."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}