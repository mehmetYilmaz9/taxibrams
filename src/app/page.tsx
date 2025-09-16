"use client";

import Hero from "./components/Hero";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Section Hero */}
      <section className="bg-white border-gray-200">
        <Hero
          title="Taxi Bram’s"
          subtitle="Votre service de taxi à Tremblay-en-France et en Seine-Saint-Denis"
          callLabel="📞 Appeler maintenant"
          callLink="tel:+33786343702"
          ctaLabel="🗓️ Réserver un trajet"
          ctaLink="https://wa.me/33786343702"
          />
      </section>

      {/* Section À propos */}
      <section className="bg-gray-50">
        <About />
      </section>

      {/* Section Services */}
      <section className="bg-white">
        <Services />
      </section>

      {/* Section FAQ */}
      <section className="bg-gray-50">
        <FAQ />
      </section>

      {/* Footer */}
      <footer className=" bg-gray-50 text-gray-600 py-4 mt-2">
        <Footer />
      </footer>
    </div>
  );
}
