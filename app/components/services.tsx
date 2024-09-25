"use client";
import Image from "next/image";
import React from "react";
import {
  FaRegCommentDots,
  FaBriefcase,
  FaUsers,
  FaTrophy,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const BusinessExperience = () => {
  const icons = [
    {
      icon: FaRegCommentDots,
      title: "Nettsideutvikling",
      description: "Lage dynamiske nettsider for din digitale suksess.",
    },
    {
      icon: FaBriefcase,
      title: "Domene og hosting",
      description:
        "Pålitelige hosting- og domenetjenester for sømløs online tilstedeværelse.",
    },
    {
      icon: FaUsers,
      title: "Responsive design",
      description: "Tilpasser seg alle enheter for sømløs surfing.",
      highlighted: true,
    },
    {
      icon: FaTrophy,
      title: "Programvarevedlikehold",
      description:
        "Fortell oss mer hvordan du vil at programvaren din skal se ut.",
    },
    {
      icon: FaTrophy,
      title: "24/7 kundestøtte",
      description: "Assistanse tilgjengelig hele døgnet.",
    },
    {
      icon: FaTrophy,
      title: "Sikre betalingsgatewayer",
      description: "Lage dynamiske nettsider for din digitale suksess.",
    },
  ];

  // Variants for Framer Motion animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-16 bg-white m-4 md:m-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
        {/* Left Image */}
        <motion.div
          className="flex justify-center overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Image
            src="/DSC00532-2.png" // Replace this with your actual image path
            alt="Business Woman"
            width={500}
            height={600}
            className="rounded-xl object-cover w-full h-auto"
            priority={true} // Ensure the image loads faster
          />
        </motion.div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg text-[#1e7c65] uppercase mb-2 text-center md:text-left">
            Egenskaper
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Hvilke tjenester og funksjoner får du?
          </h1>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Icon Grid with animation */}
          <motion.div
            className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: false, amount: 0.5 }}
          >
            {icons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-lg overflow-hidden text-center ${
                    item.highlighted ? "bg-[#1e7c65] text-white" : "bg-gray-100"
                  }`}
                  variants={cardVariants}
                >
                  <Icon
                    className={`w-12 h-12 mx-auto mb-4 ${
                      item.highlighted ? "text-white" : "text-[#1e7c65]"
                    }`}
                  />
                  <p className="font-semibold mt-2">{item.title}</p>
                  <p className="text-sm mt-1">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessExperience;
