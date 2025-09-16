"use client";
import { useState } from "react";
import { Roboto_Slab } from 'next/font/google';
const robotoSlab = Roboto_Slab({ weight: ['700'], subsets: ['latin'] });

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  { question: "Quels types de trajets propose Taxi Bram’s ?", answer: "Transferts aéroports, gares, trajets toutes distances, services personnalisés." },
  { question: "Comment réserver un taxi ?", answer: "Vous pouvez appeler directement Taxi Bram’s au 06 69 53 24 86 ou réserver via WhatsApp." },
  { question: "Est-ce que vous êtes disponibles 24h/24 ?", answer: "Oui, service disponible 24h/24 et 7j/7." },
  { question: "Proposez-vous un taxi conventionné CPAM ?", answer: "Oui, pour vos rendez-vous médicaux." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);
  
  return (
    <section className="max-w-3xl mx-auto p-6">
   <h2 className={`${robotoSlab.className} text-2xl font-bold text-center mb-6`}>❓ FAQ - Taxi Bram’s</h2>
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div key={index} className="border rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800"
          >
            {item.question}
            <span className="relative w-4 h-4 flex items-center justify-center">
                <span
                    className={`absolute transition-all duration-300 ${
                    openIndex === index ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                >
                    +
                </span>
                <span
                    className={`absolute transition-all duration-300 ${
                    openIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                >
                    −
                </span>
                </span>
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-40 p-4 border-t" : "max-h-0"}`}>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}