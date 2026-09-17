"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { Forminit } from "forminit";

const forminit = new Forminit();

export default function Quote() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const { error } = await forminit.submit(
      "mbmf1k5c5un",
      formData
    );

    if (error) {
      setStatus("error");
      setError(error.message);
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <section
      id="preventivo"
      className="min-h-[calc(100vh-80px)] px-8 py-6"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Title */}
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
              {isEnglish ? "Request a quote" : "Richiedi un preventivo"}
            </p>
          </div>

        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* First column */}
          <div className="text-left">

            <p className="text-base md:text-xl leading-relaxed text-[#1F2937]">
              {isEnglish
                ? "For information or to discuss your project, you can use the form."
                : "Per informazioni o per discutere del tuo progetto, puoi utilizzare il modulo."}
            </p>

            <p className="mt-6 text-base md:text-xl leading-relaxed text-[#1F2937]">
              {isEnglish
                ? "If you need to send files, images or additional documentation for a quote request, please contact me directly by email."
                : "Se devi inviare file, immagini o documentazione aggiuntiva per una richiesta di preventivo, contattami direttamente via email."}
            </p>

            <p className="mt-6 text-base md:text-xl leading-relaxed text-[#1F2937]">
              {isEnglish
                ? "Quotes are generally processed within 48 hours."
                : "I preventivi vengono generalmente elaborati entro 48 ore."}
            </p>

            <a
              href="mailto:officinekp@gmail.com"
              className="inline-block mt-5 text-lg font-semibold text-[#1F2937] underline hover:opacity-60"
            >
              officinekp@gmail.com
            </a>

            <p className="mt-7">
              <a
                href={isEnglish ? "/lineeguida?lang=en" : "/lineeguida?lang=it"}
                className="text-base text-[#1F2937] underline hover:opacity-60"
              >
                {isEnglish
                  ? "Read the quote request guidelines →"
                  : "Leggi le linee guida per la richiesta di preventivo →"}
              </a>
            </p>

          </div>

          {/* Form */}
          <div className="border border-[#1F2937]/20 rounded-2xl p-6 md:p-8">

            <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2937]">
              {isEnglish
                ? "Information request form"
                : "Modulo richiesta informazioni"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >

              {/* Invisible anti-spam field */}
              <input
                type="hidden"
                name="_gotcha"
                value=""
                readOnly
              />

              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-[#1F2937] mb-1"
                >
                  {isEnglish ? "Name" : "Nome"}
                </label>

                <input
                  id="nome"
                  name="fi-sender-fullName"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 border border-[#1F2937]/20 rounded-xl outline-none focus:border-[#1F2937]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1F2937] mb-1"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="fi-sender-email"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 border border-[#1F2937]/20 rounded-xl outline-none focus:border-[#1F2937]"
                />
              </div>

              <div>
                <label
                  htmlFor="messaggio"
                  className="block text-sm font-medium text-[#1F2937] mb-1"
                >
                  {isEnglish
                    ? "Request description"
                    : "Descrizione della richiesta"}
                </label>

                <textarea
                  id="messaggio"
                  name="fi-text-message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 border border-[#1F2937]/20 rounded-xl outline-none focus:border-[#1F2937] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#1F2937] text-white px-6 py-3 text-base font-semibold rounded-2xl hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {status === "loading"
                  ? isEnglish
                    ? "Sending..."
                    : "Invio..."
                  : isEnglish
                    ? "Send request"
                    : "Invia richiesta"}
              </button>

              {status === "success" && (
                <p className="text-green-700 text-sm">
                  {isEnglish
                    ? "Request sent successfully."
                    : "Richiesta inviata con successo."}
                </p>
              )}

              {status === "error" && (
                <p className="text-red-700 text-sm">
                  {isEnglish ? "Error: " : "Errore: "}
                  {error}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}