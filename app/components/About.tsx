"use client";

import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section
      id="chi-sono"
      className="min-h-[calc(100vh-80px)] px-8 py-8"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Home + About */}
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
              {isEnglish ? "About" : "Chi sono"}
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="min-h-[calc(100vh-160px)] flex items-center justify-center">

          <div className="max-w-4xl w-full text-left">

            <p className="text-lg md:text-2xl leading-relaxed text-[#1F2937]">
              {isEnglish
                ? "Technician with experience in industrial design, mechanical assembly and electromechanical maintenance."
                : "Tecnico con esperienza nella progettazione industriale, nel montaggio meccanico e nella manutenzione elettromeccanica."}
            </p>

            <p className="mt-8 text-lg md:text-2xl leading-relaxed text-[#1F2937]">
              {isEnglish
                ? "Today I combine my industrial experience with 3D design and 3D printing, taking a practical approach focused on turning ideas into real solutions."
                : "Oggi unisco l'esperienza industriale alla progettazione e alla stampa 3D, con un approccio pratico orientato alla realizzazione."}
            </p>

            <p className="mt-8 text-lg md:text-2xl leading-relaxed text-[#1F2937]">
              {isEnglish ? (
                <>
                  For information, collaborations or projects:{" "}
                  <a
                    href="mailto:officinekp@gmail.com"
                    className="underline hover:opacity-60"
                  >
                    contact me
                  </a>
                  .
                </>
              ) : (
                <>
                  Per informazioni, collaborazioni o progetti:{" "}
                  <a
                    href="mailto:officinekp@gmail.com"
                    className="underline hover:opacity-60"
                  >
                    contattatemi
                  </a>
                  .
                </>
              )}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}