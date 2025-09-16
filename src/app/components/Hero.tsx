"use client";
import { motion } from "framer-motion";
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({ weight: ['700'], subsets: ['latin'] });

type HeroProps = {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  callLabel: string;
  callLink: string;
  onCtaClick?: () => void;  
  ctaLink: string; // ✅ on passe un lien au lieu d'une fonction

};

const Hero: React.FC<HeroProps> = ({ title, subtitle,callLabel, callLink,ctaLabel, ctaLink }) => {

  return (
    <section className="bg-gray-50 text-gray-900 px-6 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto">
      <motion.h1
  className={`${robotoSlab.className} text-5xl md:text-7xl font-extrabold mb-4`}
  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
        {subtitle && (
         <motion.p
         className="text-lg md:text-xl text-gray-600 mb-8"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.3, duration: 0.6 }}
       >
          {subtitle}
          </motion.p>
      )}
      </div>
   

      <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >      <a
        href={callLink}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
      >
        {callLabel}
      </a>
      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition"
      >
        {ctaLabel}
      </a>
      </motion.div>
     
    </section>
  );
};

export default Hero;