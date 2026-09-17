import type { Metadata } from "next";
import { SITE_URL } from "./seo-config";

export const metadata: Metadata = {
  title: "Officine KP | Stampa 3D, Scanner 3D e Design",
  description: "Laboratorio digitale specializzato in stampa 3D, scansione 3D e progettazione, per privati e aziende.",
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: { it: `${SITE_URL}/`, en: `${SITE_URL}/en` },
  },
};

import Hero from "./components/Hero";
import Services from "./components/Services";
import Scanner3D from "./components/Scanner3D";
import Design from "./components/Design";
import FreeCAD from "./components/FreeCad";
import Blender from "./components/Blender";
import B2B from "./components/B2B";
import PrivateCustomers from "./components/PrivateCustomers";
import Social from "./components/Social";
import About from "./components/About";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Scanner3D />
      <Design />
      <FreeCAD />
      <Blender />
      <B2B />
      <PrivateCustomers />
      <Social />
      <About />
      <Quote />
      <Footer />
    </main>
  );
}