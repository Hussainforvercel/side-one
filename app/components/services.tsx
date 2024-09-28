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
    <section
      className="relative py-16 bg-white mx-4 md:mx-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/18322763.jpg')", // Replace with your image path
        backgroundBlendMode: "overlay", // To blend with the white color
        backgroundColor: "rgba(255, 255, 255, 0.7)", // White background with opacity to fade the image
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 items-center h-full">
        {/* Left Image */}
        <motion.div
          className="flex justify-center items-center h-full md:mt-44"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Gradient Border Wrapper */}
          <div
            style={{
              background:
                "linear-gradient(90deg, rgb(30, 124, 101) 0%, rgb(48, 170, 140) 61%)",
              padding: "4px", // Reduced padding for smaller border
              borderRadius: "12px", // Reduced border-radius for smaller appearance
            }}
            className="rounded-lg"
          >
            <Image
              src="/DSC00532.png"
              alt="Business Woman"
              width={400}
              height={490}
              className="rounded-lg object-cover w-full h-auto"
              priority={true}
              quality={100}
              layout="intrinsic" // Use intrinsic layout
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-lg text-[#1e7c65] uppercase mb-2 text-center md:text-left">
            Egenskaper
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Hvilke tjenester og funksjoner får du?
          </h1>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Icon Grid with animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4" // Reduced gap for smaller layout
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
                  className={`p-4 rounded-lg text-center overflow-hidden ${
                    // Reduced padding for smaller cards
                    item.highlighted ? "bg-[#1e7c65] text-white" : "bg-gray-100"
                  }`}
                  variants={cardVariants}
                >
                  <Icon
                    className={`w-8 h-8 mx-auto mb-4 ${
                      // Reduced icon size
                      item.highlighted ? "text-white" : "text-[#1e7c65]"
                    }`}
                  />
                  <p className="font-semibold text-sm mt-2">{item.title}</p>{" "}
                  {/* Reduced font size */}
                  <p className="text-xs mt-1">{item.description}</p>{" "}
                  {/* Reduced font size */}
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
