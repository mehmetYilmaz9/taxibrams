"use client";

import { Roboto_Slab } from 'next/font/google';
const robotoSlab = Roboto_Slab({ weight: ['600'], subsets: ['latin'] });


export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 bg-gray-50 rounded-xl text-center sm:text-left">
      <h2 className={`${robotoSlab.className} text-3xl sm:text-4xl font-bold text-gray-900 mb-6`}>
        À propos de Taxi Bram’s
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
        Taxi Bram’s est votre service de taxi professionnel conventionné à Tremblay-en-France et dans toute la Seine-Saint-Denis (93). Nous assurons des déplacements rapides, sécurisés et confortables, 24h/24 et 7j/7, pour vos trajets personnels, professionnels ou médicaux.
      </p>
      <ul className="text-gray-700 text-base sm:text-lg leading-relaxed list-disc list-inside space-y-2">
        <li>Déplacements rapides et confortables</li>
        <li>Service disponible 24h/24 et 7j/7</li>
        <li>Chauffeurs expérimentés et professionnels</li>
        <li>Adapté à vos besoins et trajets personnalisés</li>
      </ul>
    </section>
  );
}