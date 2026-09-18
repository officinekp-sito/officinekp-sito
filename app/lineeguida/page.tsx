import type { Metadata } from "next";
import { Suspense } from "react";
import GuidelinesContent from "../components/GuidelinesContent";
import { SITE_URL } from "../seo-config";

export const metadata: Metadata = {
  title: "Linee guida",
  description: "Linee guida per richiedere un preventivo a Officine KP.",
  alternates: {
    canonical: `${SITE_URL}/lineeguida`,
  },
};

export default function GuidelinesPage() {
  return (
    <Suspense fallback={null}>
      <GuidelinesContent />
    </Suspense>
  );
}