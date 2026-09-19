import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import LanguageSync from "./components/LanguageSync";
import HtmlLangSync from "./components/HtmlLangSync";
import { SITE_URL } from "./seo-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Officine KP | Stampa 3D, Scanner 3D e Design",
    template: "%s | Officine KP",
  },
  description: "Laboratorio digitale specializzato in stampa 3D, scansione 3D e progettazione, per privati e aziende.",
  openGraph: {
    siteName: "Officine KP",
    type: "website",
    images: [{ url: "/Pixelpeluche.png", width: 1200, height: 630, alt: "Officine KP" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/Pixelpeluche.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Officine KP",
  url: SITE_URL,
  description: "Laboratorio digitale specializzato in stampa 3D, scansione 3D e progettazione, per privati e aziende.",
  logo: `${SITE_URL}/Pixelpeluche.png`,
  email: "officinekp@gmail.com",
  sameAs: [
    "https://www.crealitycloud.com/it/user/4529990523/profile",
    "https://cults3d.com/it/utenti/Officinekp/modelli-3d",
    "https://makerworld.com/en/@officinekp",
  ],
  knowsAbout: [
    "Stampa 3D",
    "Scansione 3D",
    "Modellazione 3D",
    "FreeCAD",
    "Blender",
    "Prototipazione",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <LanguageSync />
        <HtmlLangSync />

        <header className="sticky top-0 z-50">
          <div className="hidden md:block">
            <Navbar />
          </div>

          <div className="md:hidden">
            <NavbarMobile />
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
