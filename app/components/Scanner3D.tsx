"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Scanner3D() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <section id="scanner-3d" className="px-8 pt-8 pb-16">
      <div className="max-w-6xl mx-auto">

        {/* Title Scanner 3D + Home */}
        <div className="flex items-center gap-4 mb-12">

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

          <div className="inline-block px-4 py-2 border border-[#1F2937]/20 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-[#1F2937]">
              {isEnglish ? "3D Scanning" : "Scanner 3D"}
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 -mt-2 items-start">

          {/* Scanner */}
          <div className="min-w-0">

            <a
              href="https://store.creality.com/eu/products/scanner-3d-cr-scan-raptor-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-5 text-[#1F2937] underline hover:opacity-60"
            >
              {isEnglish
                ? "Discover our Prosumer scanner →"
                : "Scopri il nostro scanner Prosumer →"}
            </a>

            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/Scanner3D/raptor.webp"
                alt={
                  isEnglish
                    ? "Raptor Pro 3D scanner"
                    : "Scanner 3D Raptor Pro"
                }
                width={700}
                height={700}
                className="w-4/5 h-auto object-contain mx-auto"
              />
            </div>

          </div>

          {/* Services */}
          <div className="space-y-6">

            <div className="p-8 border border-[#1F2937]/20 rounded-2xl">

              <h3 className="text-2xl font-semibold text-[#1F2937]">
                {isEnglish ? "Reverse Engineering" : "Reverse Engineering"}
              </h3>

              <p className="mt-4">
                {isEnglish
                  ? "Digital reconstruction of components based on their real-world geometry."
                  : "Ricostruzione digitale di componenti a partire dalla loro geometria reale."}
              </p>

            </div>

            <div className="p-8 border border-[#1F2937]/20 rounded-2xl">

              <h3 className="text-2xl font-semibold text-[#1F2937]">
                {isEnglish ? "3D Modelling" : "Modellazione 3D"}
              </h3>

              <p className="mt-4">
                {isEnglish
                  ? "Preparation of scanned geometries for subsequent production."
                  : "Preparazione delle geometrie scansionate per la successiva produzione."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}