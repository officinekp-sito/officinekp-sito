"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = pathname.startsWith("/en");
  
  const homePath = isEnglish ? "/en" : "/";

  // Gestisce il click sul Logo o sulla Home in modo pulito
  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Se siamo già nella home page, scrolla semplicemente in cima
    if (pathname === homePath) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
    // Altrimenti, lascia che il componente <Link> faccia il suo lavoro di navigazione
  }

  function changeLanguage(target: "it" | "en") {
    const sections = [
      "home", "stampa-3d", "scanner-3d", "design", "freecad",
      "blender", "b2b", "privati", "social", "chi-sono", "preventivo",
    ];

    const scrollPosition = window.scrollY + 120;
    let currentSection = "home";

    for (const id of sections) {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= scrollPosition) {
        currentSection = id;
      }
    }

    const newPath = target === "en" ? "/en" : "/";
    router.push(`${newPath}#${currentSection}`, { scroll: false });
  }

  return (
    <nav className="h-20 bg-[#C7DFF9] flex items-center px-8 sticky top-0 z-50">
      
      {/* Logo */}
      <Link
        href={homePath}
        onClick={handleHomeClick}
        className="flex items-center gap-3"
      >
        <span className="text-xl font-bold text-[#1F2937]">
          Officine KP
        </span>
        <Image
          src="/Pixelpeluche.png"
          alt="Officine KP"
          width={60}
          height={60}
          className="h-auto"
        />
      </Link>

      {/* Menu */}
      <div className="flex-1 flex justify-center items-center gap-8 text-[#1F2937]">
        <Link
          href={homePath}
          onClick={handleHomeClick}
          className="hover:opacity-60"
        >
          Home
        </Link>

        {/* Nota: è stato aggiunto lo slash "/" davanti agli ID italiani */}
        <Link
          href={isEnglish ? "/en#stampa-3d" : "/#stampa-3d"}
          className="hover:opacity-60"
        >
          {isEnglish ? "3D Printing" : "Stampa 3D"}
        </Link>

        <Link
          href={isEnglish ? "/en#scanner-3d" : "/#scanner-3d"}
          className="hover:opacity-60"
        >
          {isEnglish ? "3D Scanning" : "Scanner 3D"}
        </Link>

        {/* Design */}
        <div className="relative group">
          <Link
            href={isEnglish ? "/en#design" : "/#design"}
            className="hover:opacity-60"
          >
            Design
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block">
            <div className="bg-white rounded-2xl shadow-lg border border-[#1F2937]/10 overflow-hidden min-w-32">
              <Link
                href={isEnglish ? "/en#freecad" : "/#freecad"}
                className="block px-5 py-3 hover:bg-[#F3F4F6]"
              >
                FreeCAD
              </Link>
              <Link
                href={isEnglish ? "/en#blender" : "/#blender"}
                className="block px-5 py-3 hover:bg-[#F3F4F6]"
              >
                Blender
              </Link>
            </div>
          </div>
        </div>

        <Link
          href={isEnglish ? "/en#b2b" : "/#b2b"}
          className="hover:opacity-60"
        >
          B2B
        </Link>

        <Link
          href={isEnglish ? "/en#privati" : "/#privati"}
          className="hover:opacity-60"
        >
          {isEnglish ? "Clients" : "Privati"}
        </Link>

        <Link
          href={isEnglish ? "/en#social" : "/#social"}
          className="hover:opacity-60"
        >
          {isEnglish ? "Social" : "Sociale"}
        </Link>

        <Link
          href={isEnglish ? "/en/portfolio" : "/portfolio"}
          className="hover:opacity-60"
        >
          Portfolio
        </Link>

        <Link
          href={isEnglish ? "/en#chi-sono" : "/#chi-sono"}
          className="hover:opacity-60"
        >
          {isEnglish ? "About" : "Chi sono"}
        </Link>

        <Link
          href={isEnglish ? "/en#preventivo" : "/#preventivo"}
          className="bg-[#1F2937] text-white px-6 py-3 rounded-2xl hover:opacity-80"
        >
          {isEnglish ? "Request a quote" : "Richiedi un preventivo"}
        </Link>
      </div>

      {/* Lingue */}
      <div className="flex items-center gap-4 text-sm font-semibold text-[#1F2937]">
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className="flex items-center gap-2 hover:opacity-60"
        >
          <Image
            src="/Bandiere/eu.webp"
            alt="EU"
            width={24}
            height={16}
            className="w-6 h-4 object-cover rounded-sm"
          />
          EU
        </button>

        <button
          type="button"
          onClick={() => changeLanguage("it")}
          className="flex items-center gap-2 hover:opacity-60"
        >
          <Image
            src="/Bandiere/it.webp"
            alt="IT"
            width={24}
            height={16}
            className="w-6 h-4 object-cover rounded-sm"
          />
          IT
        </button>
      </div>
    </nav>
  );
}