import type { Metadata } from "next";
import PortfolioContent from "../components/PortfolioContent";
import { SITE_URL } from "../seo-config";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Una selezione dei progetti realizzati da Officine KP: stampa 3D, scansione 3D e design.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
    languages: { it: `${SITE_URL}/portfolio`, en: `${SITE_URL}/en/portfolio` },
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}