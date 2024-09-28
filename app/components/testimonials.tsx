"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const Testimonials = () => {
  // Array of testimonials to map over
  const testimonials = [
    {
      name: "Ерсин Мустафа",
      image: "/murquee/imm.jpeg",
      text: "Sidesone raskt nøyaktig og korrekt med arbeidet de gjør som nettsteddesigner",
    },
    {
      name: "MrRIDDLER 17",
      image: "/murquee/imm.jpeg",
      text: "Veldig enkelt å jobbe med, Leverte en Nettside på utrolig rask tid!.",
      highlight: true, // To highlight the second card with a purple border
    },
    {
      name: "Emily Thomas",
      image: "/murquee/imm.jpeg",
      text: "Never at water me might. On formed merits hunted unable morally by mr whence or.",
    },
  ];

  // Variants for scroll animation from right side
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="py-16 bg-gray-50 relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/v915-wit-006-g.jpg')", // Replace with your background image path
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.7)", // White overlay with opacity
      }}
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left section - Heading and Description */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mb-8">
            Relation so in confined smallest children unpacked delicate. Why sir
            and believe uncil vil respect. Always get adieus nature day course
            for common.
          </p>
          <button
            className="text-white py-3 px-6 rounded-lg font-semibold"
            style={{
              background:
                "linear-gradient(90deg, rgb(30, 124, 101) 0%, rgb(48, 170, 140) 61%)",
            }}
          >
            View More
          </button>
        </div>

        {/* Right section - Testimonial Cards */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`bg-white overflow-hidden shadow-lg rounded-xl p-6 flex items-center gap-4 relative ${
                testimonial.highlight ? "border-l-4 border-[#1e7c65]" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Image
                src={testimonial.image} // Replace with actual image path
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
