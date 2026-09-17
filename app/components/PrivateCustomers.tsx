"use client";

import { usePathname } from "next/navigation";

export default function PrivateCustomers() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="privati"
      className="min-h-[calc(100vh-80px)] px-8 py-8"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Home + Private */}
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
              {isEnglish ? "Clients" : "Privati"}
            </p>
          </div>

        </div>

        {/* Centered content */}
        <div className="min-h-[calc(100vh-160px)] flex items-center">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center w-full">

            {/* Private title */}
            <div className="flex flex-col items-center">

              <h1 className="text-6xl md:text-9xl font-bold text-[#8EC5E8]">
                {isEnglish ? "CLIENTS" : "PRIVATI"}
              </h1>

              <p className="mt-2 text-xl md:text-3xl font-semibold text-[#8EC5E8] text-center">
                {isEnglish
                  ? "3D modelling, scanning and printing"
                  : "Modellazione, scansione e stampa 3D"}
              </p>

            </div>

            {/* Services */}
            <div className="border border-[#1F2937]/20 rounded-2xl p-6 md:p-10">

              <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937]">
                {isEnglish
                  ? "Services for private customers"
                  : "Servizi per privati"}
              </h2>

              <ul className="mt-6 space-y-3 text-base md:text-lg text-[#1F2937]">
                <li>
                  • {isEnglish
                    ? "Projects and solutions for non-industrial needs"
                    : "Progetti e soluzioni per esigenze non industriali"}
                </li>
                <li>
                  • {isEnglish
                    ? "3D printing for private customers"
                    : "Stampa 3D per privati"}
                </li>
                <li>
                  • {isEnglish
                    ? "3D modelling of replacement parts"
                    : "Modellazione 3D di parti di ricambio"}
                </li>
                <li>
                  • {isEnglish
                    ? "Scanning of components with a 3D scanner"
                    : "Scansione di componenti con scanner 3D"}
                </li>
                <li>
                  • {isEnglish
                    ? "Modification and adaptation of objects"
                    : "Modifica e adattamento di oggetti"}
                </li>
              </ul>

              <p className="mt-6 text-base leading-relaxed text-[#1F2937]">
                {isEnglish
                  ? "From design to production, I develop customised solutions for specific needs."
                  : "Dalla progettazione alla produzione, sviluppo soluzioni personalizzate per esigenze specifiche."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}