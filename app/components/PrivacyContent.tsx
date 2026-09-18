"use client";

import { useSearchParams } from "next/navigation";

export default function PrivacyContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  const isEnglish = lang === "en";

  return (
    <main className="min-h-screen px-8 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Home + Privacy Policy */}
        <div className="flex items-center gap-4 mb-12">

          <a href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "Back to Home" : "Torna alla Home"} className="transition-transform duration-300 hover:scale-125">
            <img src="/Icone/home.svg" alt="Home" className="w-8 h-8" />
          </a>

          <div className="inline-block px-5 py-3 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              Privacy Policy
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="space-y-10 text-[#1F2937]">

          <section>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Privacy Policy
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "This page describes how personal data is handled for users who use the Officine KP website."
                : "Questa pagina descrive come vengono trattati i dati personali degli utenti che utilizzano il sito web di Officine KP."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Data Controller" : "Titolare del trattamento"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "The Data Controller for personal data is Officine KP."
                : "Il Titolare del trattamento dei dati personali è Officine KP."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "What data is collected" : "Quali dati vengono raccolti"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "The website may collect data voluntarily provided by the user through the contact form, in particular:"
                : "Il sito può raccogliere i dati forniti volontariamente dall'utente tramite il modulo di contatto, in particolare:"}
            </p>

            <ul className="mt-4 space-y-2 text-base md:text-lg leading-relaxed">
              <li>• {isEnglish ? "Name" : "Nome"}</li>
              <li>• {isEnglish ? "Email address" : "Indirizzo email"}</li>
              <li>• {isEnglish ? "Message content" : "Contenuto del messaggio"}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Purpose of processing" : "Finalità del trattamento"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "The data is used exclusively to respond to requests submitted through the contact form, provide information about services, and manage quote or collaboration requests."
                : "I dati vengono utilizzati esclusivamente per rispondere alle richieste inviate tramite il modulo di contatto, fornire informazioni sui servizi e gestire richieste di preventivo o collaborazione."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "How data is processed" : "Come vengono trattati i dati"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "Data is processed exclusively for the purposes described in this policy and is not used for profiling or personalised advertising."
                : "I dati vengono trattati esclusivamente per le finalità descritte nella presente informativa e non vengono utilizzati per attività di profilazione o pubblicità personalizzata."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish
                ? "Cookies and tracking tools"
                : "Cookie e strumenti di tracciamento"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "The website does not use analytics, profiling, personalised advertising or other user tracking tools, with regard to the functionalities directly managed by Officine KP."
                : "Il sito non utilizza strumenti di analisi, profilazione, pubblicità personalizzata o altri strumenti di tracciamento degli utenti, per quanto riguarda le funzionalità direttamente gestite da Officine KP."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Data sharing" : "Condivisione dei dati"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "Data submitted through the contact form may be processed by technical service providers required to manage the message submission service."
                : "I dati inviati tramite il modulo di contatto possono essere trattati da fornitori di servizi tecnici necessari per la gestione del servizio di invio dei messaggi."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Data retention" : "Conservazione dei dati"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "Data is retained for the time necessary to manage the received request and any subsequent relationship with the user, in accordance with applicable obligations."
                : "I dati vengono conservati per il tempo necessario a gestire la richiesta ricevuta e l'eventuale successivo rapporto con l'utente, nel rispetto degli obblighi applicabili."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "User rights" : "Diritti degli utenti"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "Users may request information about their personal data, as well as its correction, deletion or restriction of processing, where provided for by applicable law."
                : "Gli utenti possono richiedere informazioni sui propri dati personali, nonché la loro rettifica, cancellazione o limitazione del trattamento, nei casi previsti dalla normativa applicabile."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              {isEnglish ? "Contact" : "Contatti"}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed">
              {isEnglish
                ? "For any request concerning privacy or the processing of personal data, you can contact:"
                : "Per qualsiasi richiesta relativa alla privacy o al trattamento dei dati personali, è possibile contattare:"}
            </p>

            <a href="mailto:officinekp@gmail.com" className="inline-block mt-3 text-lg underline hover:opacity-60">
              officinekp@gmail.com
            </a>
          </section>

          <section>
            <p className="text-sm text-[#1F2937]/60">
              {isEnglish ? "Last updated: 2026" : "Ultimo aggiornamento: 2026"}
            </p>
          </section>

        </div>

        {/* Home + Privacy Policy at bottom */}
        <div className="flex items-center gap-4 mt-16">

          <a href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "Back to Home" : "Torna alla Home"} className="transition-transform duration-300 hover:scale-125">
            <img src="/Icone/home.svg" alt="Home" className="w-8 h-8" />
          </a>

          <div className="inline-block px-5 py-3 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              Privacy Policy
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
