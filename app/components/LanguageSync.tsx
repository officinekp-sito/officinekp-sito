"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LanguageSync() {
  const pathname = usePathname();

  useEffect(() => {
    const saved = sessionStorage.getItem("targetSection");
    const hash = window.location.hash.replace("#", "");
    const targetId = saved || hash;

    if (!targetId || targetId === "home") {
      sessionStorage.removeItem("targetSection");
      return;
    }

    sessionStorage.removeItem("targetSection");

    let attempts = 0;

    const interval = setInterval(() => {
      attempts++;

      const element = document.getElementById(targetId);

      if (element) {
        clearInterval(interval);

        const yOffset = -80;

        const y =
          element.getBoundingClientRect().top +
          window.scrollY +
          yOffset;

        window.scrollTo({
          top: y,
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
      }

      if (attempts >= 20) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [pathname]);

  return null;
}