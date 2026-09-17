"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const projects = Array.from({ length: 20 }, (_, i) => i + 1);

export default function PortfolioContent() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const homeLink = isEnglish ? "/en#home" : "/#home";

  return (
    <main className="min-h-screen bg-white px-8 py-12">

      <div id="inizio-portfolio" />

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-center mb-12">
          <Link href={homeLink} aria-label="Torna alla Home" className="inline-block transition-transform duration-300 hover:scale-125">
            <img src="/Icone/home.svg" alt="Home" className="w-8 h-8" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project}>
              <Image
                src={`/Portfolio/${project}.webp`}
                alt={`Progetto ${project}`}
                width={1000}
                height={1000}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>

        <div id="fine-portfolio" />

        <div className="flex justify-center mt-16">
          <Link href={homeLink} aria-label="Torna alla Home" className="inline-block transition-transform duration-300 hover:scale-125">
            <img src="/Icone/home.svg" alt="Home" className="w-8 h-8" />
          </Link>
        </div>

      </div>

      <a href="#fine-portfolio" aria-label="Vai alla fine del Portfolio" className="fixed left-6 top-1/2 -translate-y-1/2 text-4xl text-[#1F2937] transition-transform duration-300 hover:scale-125 z-50">
        ↓
      </a>

      <a href="#inizio-portfolio" aria-label="Torna all'inizio del Portfolio" className="fixed right-6 top-1/2 -translate-y-1/2 text-4xl text-[#1F2937] transition-transform duration-300 hover:scale-125 z-50">
        ↑
      </a>

    </main>
  );
}