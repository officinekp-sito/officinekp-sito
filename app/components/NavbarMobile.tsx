"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function NavbarMobile() {
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = pathname.startsWith("/en");
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
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
    <nav className="bg-[#C7DFF9]">
      <div className="h-20 px-5 flex items-center justify-between">

        {/* Logo */}
        <a href={isEnglish ? "/en#home" : "/#home"} className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-bold text-[#1F2937]">Officine KP</span>
          <Image
            src="/Pixelpeluche.png"
            alt="Officine KP"
            width={60}
            height={60}
            className="w-[60px] h-[60px] object-contain"
            priority
          />
        </a>

        <div className="flex items-center gap-4">

          {/* Lingua */}
          <div className="flex items-center gap-3 text-sm font-semibold text-[#1F2937]">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className="flex items-center gap-1 hover:opacity-60"
            >
              <Image
                src="/Bandiere/eu.webp"
                alt="EU"
                width={24}
                height={16}
                className="w-6 h-4 object-cover rounded-sm"
              />
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("it")}
              className="flex items-center gap-1 hover:opacity-60"
            >
              <Image
                src="/Bandiere/it.webp"
                alt="IT"
                width={24}
                height={16}
                className="w-6 h-4 object-cover rounded-sm"
              />
            </button>
          </div>

          {/* Hamburger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-3xl text-[#1F2937] leading-none px-1"
              aria-label="Menu"
            >
              ☰
            </button>

            {isOpen && (
              <div className="absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-lg border border-[#1F2937]/10 overflow-hidden z-50">
                <div className="px-6 py-5 flex flex-col text-[#1F2937]">

                  <a href={isEnglish ? "/en#home" : "/#home"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">Home</a>
                  <a href={isEnglish ? "/en#stampa-3d" : "/#stampa-3d"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">{isEnglish ? "3D Printing" : "Stampa 3D"}</a>
                  <a href={isEnglish ? "/en#scanner-3d" : "/#scanner-3d"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">{isEnglish ? "3D Scanning" : "Scanner 3D"}</a>
                  <a href={isEnglish ? "/en#design" : "/#design"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">Design</a>
                  <a href={isEnglish ? "/en#freecad" : "/#freecad"} onClick={closeMenu} className="py-3 pl-4 border-b border-[#1F2937]/10">FreeCAD</a>
                  <a href={isEnglish ? "/en#blender" : "/#blender"} onClick={closeMenu} className="py-3 pl-4 border-b border-[#1F2937]/10">Blender</a>
                  <a href={isEnglish ? "/en#b2b" : "/#b2b"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">B2B</a>
                  <a href={isEnglish ? "/en#privati" : "/#privati"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">{isEnglish ? "Clients" : "Privati"}</a>
                  <a href={isEnglish ? "/en#social" : "/#social"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">{isEnglish ? "Social" : "Sociale"}</a>
                  <a href={isEnglish ? "/en/portfolio" : "/portfolio"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">Portfolio</a>
                  <a href={isEnglish ? "/en#chi-sono" : "/#chi-sono"} onClick={closeMenu} className="py-3 border-b border-[#1F2937]/10">{isEnglish ? "About" : "Chi sono"}</a>
                  <a href={isEnglish ? "/en#preventivo" : "/#preventivo"} onClick={closeMenu} className="mt-4 bg-[#1F2937] text-white px-5 py-3 rounded-2xl text-center">
                    {isEnglish ? "Request a quote" : "Richiedi un preventivo"}
                  </a>

                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}