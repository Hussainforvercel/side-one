"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const PricingPlan = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Pricing plans array
  const pricingPlans = [
    {
      title: "Statisk nettside",
      price: { monthly: "$150", yearly: "$1200" },
      paragraph:
        "Vår Nettside-pakke gir deg en moderne og profesjonell nettside med skreddersydd design, perfekt for å styrke din online tilstedeværelse. Vi fokuserer på å tilpasse nettsiden etter din bedrifts identitet, slik at du kan skille deg ut i markedet og nå dine mål.",
      features: [
        "Design og utvikling",
        "Responsivt design",
        "Innholdsstyring",
        "Vedlikehold",
        "SSL-sertifikat",
        "Domene og hosting",
        "Tilpasset alle plattformer",
        "4-5 sider",
      ],
    },
    {
      title: "Nettbutikk",
      price: { monthly: "$400", yearly: "$3200" },
      paragraph:
        "Vår Nettbutikk-pakke gir deg en moderne og effektiv plattform for å selge produkter på nettet. Med tilpassede designmuligheter og enkel administrasjon, får du en nettløsning som både tiltrekker kunder og gjør kjøpsprosessen sømløs. Perfekt for å etablere eller utvide din e-handelsvirksomhet.",
      features: [
        "Alt i Nettside-pakken",
        "E-handelsfunksjonalitet",
        "Produktadministrasjon",
        "Ordrehåndtering",
        "Trygge betalingsmetoder",
        "Ønskeliste (wishlist)",
        "Integrasjon med leverandør",
        "4-5 sider (ekskludert produktsider)",
      ],
    },
    {
      title: "Webapp",
      price: { monthly: "$999", yearly: "$8000" },
      paragraph:
        "Vi tilbyr skreddersydde webapplikasjoner for alle typer behov, fra enkle verktøy til komplekse systemer. Våre profesjonelle utviklere jobber tett med deg for å forstå dine spesifikke krav og levere en løsning som passer perfekt. Prisen kan variere basert på prosjektets omfang og kompleksitet. Ta kontakt med våre eksperter for en konsultasjon og for å diskutere dine ønsker.",
      features: [
        "Unlimited account users",
        "Custom domain support",
        "Registration reminders",
        "Group discounts",
        "Speaker management",
        "Business hour chat support",
      ],
    },
  ];

  // Variants for card animation
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }, // Hover effect: scales the card by 5%
  };

  return (
    <section className="bg-[#8cc5b6] py-16 px-4 md:px-10">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl text-white font-bold mb-8">Choose your plan</h1>

        {/* Billing Cycle Toggle */}
        <div className="inline-flex items-center bg-white rounded-full p-1 mb-12">
          <button
            className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300 ${
              billingCycle === "monthly" ? "bg-black text-white" : "text-black"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`py-2 px-6 rounded-full font-semibold transition-colors duration-300 ${
              billingCycle === "yearly" ? "bg-black text-white" : "text-black"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white overflow-hidden shadow-lg rounded-lg p-8"
              initial="hidden"
              whileInView="visible"
              whileHover="hover" // Hover animation
              variants={cardVariants}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
              <p className="text-5xl font-bold mb-2">
                {billingCycle === "monthly"
                  ? plan.price.monthly
                  : plan.price.yearly}
              </p>
              <p className="text-gray-500 mb-4">/month</p>

              {/* New Paragraph After Price */}
              <p className="text-gray-600 mb-6">{plan.paragraph}</p>

              <ul className="text-left mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔️ {feature}</li>
                ))}
              </ul>
              <button
                className="text-white w-full py-3 rounded-lg font-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(30, 124, 101) 0%, rgb(48, 170, 140) 61%)",
                }}
              >
                Get started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
