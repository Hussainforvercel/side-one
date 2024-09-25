"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

// Define the type for a single FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Define the array of FAQs with type annotations
const faqs: FAQItem[] = [
  {
    question:
      "Hva slags tjenester tilbyr Sidesone innen webdesign og web IT-løsninger?",
    answer:
      "Sidesone tilbyr et bredt spekter av tjenester innen webdesign og web IT-løsninger. Vi lager skreddersydde nettsider, nettbutikker og webapper, og tilbyr tilleggstjenester som logodesign, SEO-optimalisering, samt drift og vedlikehold av eksisterende nettsider.",
  },
  {
    question: "Hvilke teknologier og plattformer er Sidesone spesialisert i?",
    answer:
      "Vi er eksperter i bruk av en rekke teknologier, inkludert HTML, CSS, JavaScript, React, Angular, og vi jobber med plattformer som WordPress, Bubble, og PrestaShop. Dette gir oss fleksibiliteten til å lage løsninger som passer dine spesifikke behov.",
  },
  {
    question:
      "Tilbyr dere kundestøtte etter at nettsiden eller nettbutikken er lansert?",
    answer:
      "Ja, vi tilbyr 24/7 kundestøtte til alle betalende kunder som kjøper en av våre nettside-, nettbutikk- eller webapp-pakker. Disse pakkene inkluderer også vedlikehold for å sikre at løsningene dine fungerer optimalt til enhver tid.",
  },
  {
    question: "Hva skiller Sidesone fra andre leverandører av webtjenester?",
    answer:
      "Vi setter våre kunders tilfredshet først. Vårt team er dedikert til å sikre at alle kunder er fornøyde med løsningene vi leverer. Vi stopper ikke før du er helt fornøyd med produktet.",
  },
  {
    question: "Hva er prisene for Sidesones tjenester?",
    answer:
      "Våre priser er som følger: Nettsider starter med en oppstartspris på 8000 kr, med et månedlig gebyr på 525 kr for vedlikehold. For nettbutikker er oppstartsprisen 12,000 kr, med en månedlig kostnad på 999 kr. Prisene for webapper kan variere betydelig, så vi anbefaler at du booker en gratis konsultasjon for en mer nøyaktig vurdering av kostnadene basert på dine spesifikke behov.",
  },
  {
    question: "Hva koster det for en konsultasjon?",
    answer:
      "Det er helt gratis! Enten du vil diskutere en ny nettside, nettbutikk, eller webapp fra bunnen av, trenger hjelp med en eksisterende nettside, eller bare ønsker generelle nettsideråd, kan du booke her.",
  },
];

// Define the FAQ component
const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="bg-white text-white p-8 md:p-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-3xl text-[#1e7c65] md:text-4xl lg:text-5xl font-bold">
        Ofte stilte spørsmål
      </h2>
      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-[#1e7c65] p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            layout // Enables smooth layout transitions
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <FaPlus
                  className={`transition-transform duration-200 text-white ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </motion.div>
            </div>
            {openIndex === index && (
              <motion.div
                className="mt-2 text-sm overflow-hidden"
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{ opacity: 1, maxHeight: "500px" }} // Use maxHeight to prevent stretching
                exit={{ opacity: 0, maxHeight: 0 }}
                transition={{
                  duration: 0.3, // Reduced delay and made the transition faster
                  ease: "easeInOut",
                }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
