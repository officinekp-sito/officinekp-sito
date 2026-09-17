"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <footer className="px-8 py-8 border-t border-[#1F2937]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

        {/* Name + Logo */}
        <a
          href={isEnglish ? "/en" : "/"}
          aria-label={isEnglish ? "Back to Home" : "Torna alla Home"}
          className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-60"
        >
          <span className="text-sm font-semibold text-[#1F2937]">
            Officine KP
          </span>

          <img
            src="/Pixelpeluche.png"
            alt="Officine KP"
            className="w-12 h-12 object-contain"
          />
        </a>

        {/* Copyright */}
        <p className="text-sm text-[#1F2937] text-center">
          Copyright © 2026
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-[#1F2937]">

          <a
            href={isEnglish ? "/en" : "/"}
            className="hover:opacity-60 transition-opacity"
          >
            Home
          </a>

          <a
            href="mailto:officinekp@gmail.com"
            className="hover:opacity-60 transition-opacity"
          >
            {isEnglish ? "Contact" : "Contatti"}
          </a>

          <a
            href={isEnglish ? "/privacy?lang=en" : "/privacy?lang=it"}
            className="hover:opacity-60 transition-opacity"
          >
            {isEnglish ? "Privacy Policy" : "Privacy Policy"}
          </a>

        </div>

      </div>
    </footer>
  );
}