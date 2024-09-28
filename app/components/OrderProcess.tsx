"use client";
import React from "react";
import { motion } from "framer-motion";

// Variants for the whole section animation
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    scale: 1.05, // Slight scaling
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Bouncing animation for background squares
const bounceAnimation = {
  y: [0, -20, 0], // Move up and down
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Helper function to generate random squares
const generateSquares = (numSquares: number) => {
  const squares = [];
  for (let i = 0; i < numSquares; i++) {
    const size = Math.floor(Math.random() * 20) + 10; // Random size between 10px and 30px
    const top = Math.random() * 100; // Random top position (0-100%)
    const left = Math.random() * 100; // Random left position (0-100%)
    squares.push({ size, top, left });
  }
  return squares;
};

const OrderProcess = () => {
  const squares = generateSquares(50); // Generate 50 bouncing squares

  return (
    <motion.section
      className="relative py-16 bg-white overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Bouncing Squares */}
      {squares.map((square, index) => (
        <motion.div
          key={index}
          className="absolute bg-gray-300 opacity-30 rounded-sm"
          style={{
            width: `${square.size}px`,
            height: `${square.size}px`,
            top: `${square.top}%`,
            left: `${square.left}%`,
          }}
          animate={bounceAnimation}
        />
      ))}

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl text-black font-semibold">Rekkefølgen</h2>
          <h1 className="text-5xl font-bold text-green-600 mt-4">
            Hvordan Bestille
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white group hover:bg-[#1e7c65] p-6 shadow-lg rounded-xl flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover="hover" // Adding hover animation
          >
            <img
              src="/touch_10645043-150x150.png"
              alt="Trenger du en nettside?"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">
              Trenger du en nettside?
            </h3>
            <p className="text-gray-600 mt-2 text-center group-hover:text-white">
              Velg en av våre pakker eller book en konsultasjon med oss
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white group hover:bg-[#1e7c65] p-6 shadow-lg rounded-xl flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover="hover" // Adding hover animation
          >
            <img
              src="/download-11-150x150.png"
              alt="Oppretter ordre"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">
              Oppretter ordre
            </h3>
            <p className="text-gray-600 mt-2 text-center group-hover:text-white">
              Fortell oss mer om hvordan du vil at nettsiden din skal se ut
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white group hover:bg-[#1e7c65] p-6 shadow-lg rounded-xl flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover="hover" // Adding hover animation
          >
            <img
              src="/completed-150x150.png"
              alt="Send inn krav"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">
              Send inn krav
            </h3>
            <p className="text-gray-600 mt-2 text-center group-hover:text-white">
              Du vil bli ført til et skjema der du vil sende inn dine krav
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white group hover:bg-[#1e7c65] p-6 shadow-lg rounded-xl flex flex-col items-center hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            whileHover="hover" // Adding hover animation
          >
            <img
              src="/download-15-e1727010270999-150x150.webp"
              alt="Oppdateringer og Fremgang"
              className="w-24 mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-white">
              Oppdateringer og Fremgang
            </h3>
            <p className="text-gray-600 mt-2 text-center group-hover:text-white">
              Vi holder deg oppdatert med fremgangen på nettsiden din
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OrderProcess;
