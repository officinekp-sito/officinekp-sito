import type { Metadata } from "next";
import PortfolioContent from "../../components/PortfolioContent";
import { SITE_URL } from "../../seo-config";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A selection of projects made by Officine KP: 3D printing, 3D scanning and design.",
  alternates: {
    canonical: `${SITE_URL}/en/portfolio`,
    languages: { it: `${SITE_URL}/portfolio`, en: `${SITE_URL}/en/portfolio` },
  },
};

export default function EnglishPortfolioPage() {
  return <PortfolioContent />;
}