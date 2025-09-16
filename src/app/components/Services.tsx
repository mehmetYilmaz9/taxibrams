"use client";


import { Roboto_Slab } from 'next/font/google';
const robotoSlab = Roboto_Slab({ weight: ['600'], subsets: ['latin'] });

export default function Services() {
  const services = [
    {
      title: "Taxi conventionné CPAM",
      desc: "Trajets médicaux assis pris en charge par l’Assurance Maladie."
    },
    {
      title: "Transferts aéroports",
      desc: "Déplacements vers Roissy-CDG, Orly et Beauvais avec ponctualité."
    },
    {
      title: "Transferts gares",
      desc: "Liaisons vers les gares parisiennes : Gare du Nord, Gare de l’Est, etc."
    },
    {
      title: "Toutes distances",
      desc: "Service disponible en Tremblay-en-France, Île-de-France."
    },
    {
      title: "Disponibilité 24/7",
      desc: "Taxi toujours prêt, de jour comme de nuit, sur réservation."
    },
    {
      title: "Sécurité & confort",
      desc: "Chauffeur professionnel, tarifs réglementés et conduite sécurisée."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
       <h2 className={`${robotoSlab.className} text-3xl font-bold text-center text-gray-900 mb-10`}>
        Nos services
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 hover:shadow-lg transition-transform"
          >
            <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}