"use client";
import React from "react";
import { motion } from "framer-motion";

// Sentence and letter animation variants
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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

const Hero: React.FC = () => {
  const text = "Vi bygger nettsider for folk som liker å bevege seg raskt!";
  const squares = generateSquares(50); // Generate 50 squares

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgb(30, 124, 101) 0%, rgb(48, 170, 140) 100%)",
      }}
    >
      {/* Bouncing Squares */}
      {squares.map((square, index) => (
        <motion.div
          key={index}
          className="absolute bg-white opacity-30 rounded-sm"
          style={{
            width: `${square.size}px`,
            height: `${square.size}px`,
            top: `${square.top}%`,
            left: `${square.left}%`,
          }}
          animate={bounceAnimation}
        />
      ))}

      {/* Main content wrapper */}
      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Spre dine digitale vinger
        </motion.p>

        {/* Button */}
        <motion.a
          href="#"
          className="inline-block bg-white text-[#1e7c65] font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
