"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion
import { Variants } from "framer-motion";

const Hero: React.FC = () => {
  // Animation variants for the robot hand continuously moving towards the window
  const robotVariants: Variants = {
    initial: { x: 50, rotate: 0 }, // Start slightly off-position
    animate: {
      x: [50, 0, 50], // Move back and forth
      rotate: [0, -10, 0], // Slight rotation to simulate reaching and retracting
      transition: {
        duration: 2, // Duration for one complete cycle
        ease: "easeInOut",
        repeat: Infinity, // Infinite loop for continuous animation
        repeatType: "mirror", // Animate back and forth
      },
    },
  };

  return (
    <section
      className="relative bg-gradient-to-b h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgb(30, 124, 101) 0%, rgb(48, 170, 140) 61%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-white text-3xl mt-20 md:text-4xl lg:text-5xl font-bold mb-4">
            Vi bygger nettsider for folk som liker å bevege seg raskt!
          </h1>
          <p className="text-white text-xl mb-8">“Spre dine digitale vinger”</p>
          <a
            href="#"
            className="inline-block bg-white text-[#1e7c65] font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:bg-green-600 hover:text-white"
          >
            Book Møte
          </a>
        </div>

        {/* Right Image with Windows and Robot */}
        <div className="flex justify-center lg:justify-end relative">
          {/* Window Image (Static) */}
          <Image
            src="/windows.png" // Replace with the correct path to your window image
            alt="Windows Image"
            width={500}
            height={500}
            className="w-full h-auto"
            quality={100}
            layout="intrinsic"
          />

          {/* Robot Image with Continuous Animation */}
          <motion.div
            className="absolute bottom-0 right-8 lg:right-0 lg:bottom-10"
            variants={robotVariants}
            initial="initial"
            animate="animate" // The robot will continuously animate
          >
            <Image
              src="/sidesone-robot.png" // Replace with the correct path to your robot image
              alt="Robot Image"
              width={400} // Provide width for the robot image
              height={500} // Provide height for the robot image
              className="w-40 h-auto sm:w-48 md:w-64 lg:w-72" // Adjust the width based on screen size
              quality={100}
              layout="intrinsic"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
