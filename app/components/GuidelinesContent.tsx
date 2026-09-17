"use client";

import { useSearchParams } from "next/navigation";

export default function GuidelinesContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const isEnglish = lang === "en";

  return (
    <main className="min-h-screen px-8 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Home + Guidelines */}
        <div className="flex items-center gap-4 mb-12">

          <a href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "Back to Home" : "Torna alla Home"} className="transition-transform duration-300 hover:scale-125">
            <img src="/Icone/home.svg" alt="Home" className="w-8 h-8" />
          </a>

          <div className="inline-block px-5 py-3 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              {isEnglish ? "Guidelines" : "Linee guida"}
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="space-y-10 text-[#1F2937]">

          <section>
            <h1 className="text-3xl md:text-4xl font-semibold">
              {isEnglish ? "Request guidelines" : "Linee guida per la richiesta"}
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "To help me properly evaluate your project, please provide as much information as possible about your request."
                : "Per aiutarmi a valutare correttamente il tuo progetto, fornisci quante più informazioni possibili sulla tua richiesta."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Describe the project" : "Descrivi il progetto"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "Briefly explain what you would like to create and what result you want to achieve. The clearer the request, the easier it is to evaluate the project."
                : "Spiega brevemente cosa vorresti realizzare e quale risultato vuoi ottenere. Più la richiesta è chiara, più sarà semplice valutare il progetto."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Useful information" : "Informazioni utili"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "If available, indicate quantity, dimensions, material, colour and any specific requirements for the project."
                : "Se disponibili, indica quantità, dimensioni, materiale, colore ed eventuali esigenze specifiche per il progetto."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Files and documentation" : "File e documentazione"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "If you have 3D models, images, technical drawings or other useful documentation, you can send them directly by email."
                : "Se disponi di modelli 3D, immagini, disegni tecnici o altra documentazione utile, puoi inviarli direttamente via email."}
            </p>

            <a href="mailto:officinekp@gmail.com" className="inline-block mt-4 text-lg font-semibold underline hover:opacity-60">
              officinekp@gmail.com
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Quote evaluation" : "Valutazione del preventivo"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "Each request is evaluated based on the project characteristics and the information provided. The quote is defined after reviewing the request."
                : "Ogni richiesta viene valutata in base alle caratteristiche del progetto e alle informazioni fornite. Il preventivo viene definito dopo aver esaminato la richiesta."}
            </p>
          </section>

        </div>

        {/* Home + Guidelines at bottom */}
        <div className="flex items-center gap-4 mt-16">

          <a href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "Back to Home" : "Torna alla Home"} className="transition-transform duration-300 hover:scale-125">
            <img src="/Icone/home.svg" alt="Home" className="w-8 h-8" />
          </a>

          <div className="inline-block px-5 py-3 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              {isEnglish ? "Guidelines" : "Linee guida"}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}