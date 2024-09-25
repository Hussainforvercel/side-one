"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const ContactForm = () => {
  const formFields = [
    { type: "text", placeholder: "Enter Name" },
    { type: "email", placeholder: "Enter Email" },
    { type: "text", placeholder: "Enter Subject" },
    { type: "tel", placeholder: "Enter Phone" },
  ];

  const services = ["Service 1", "Service 2"];

  // Variants for Framer Motion animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-16 bg-[#1e7c65] px-4 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Image */}
        <motion.div
          className="flex overflow-hidden justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Image
            src="/DSC00492.png" // Replace this with your actual image path
            alt="Consulting Image"
            width={600}
            height={600}
            className="rounded-xl object-cover w-full h-full"
            priority={true} // Ensure the image loads faster
          />
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="p-5 rounded-xl overflow-hidden  text-white flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-lg uppercase mb-2">Ta Kontakt</h2>
          <h1 className="text-3xl font-bold mb-8">
            Vi er her for deg. Hvordan kan vi hjelpe?
          </h1>

          {/* Form */}
          <form>
            <motion.div
              className="grid overflow-hidden grid-cols-1 md:grid-cols-2 gap-4"
              variants={formVariants}
            >
              {formFields.map((field, index) => (
                <motion.input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full p-4 rounded-lg border border-gray-300 text-gray-800"
                  variants={formVariants}
                />
              ))}
            </motion.div>

            <motion.select
              className="w-full mt-4 overflow-hidden p-4 rounded-lg border border-gray-300 text-gray-800"
              variants={formVariants}
            >
              <option>Select Service</option>
              {services.map((service, index) => (
                <option key={index}>{service}</option>
              ))}
            </motion.select>

            <motion.textarea
              placeholder="Enter Message"
              className="w-full overflow-hidden mt-4 p-4 rounded-lg border border-gray-300 text-gray-800 h-32"
              variants={formVariants}
            ></motion.textarea>

            <motion.button
              type="submit"
              className=" text-white overflow-hidden mt-4 p-4 w-full rounded-lg shadow-xl font-bold transition duration-300"
              style={{
                background:
                  "linear-gradient(90deg, rgb(30, 124, 101) 0%, rgb(48, 170, 140) 61%)",
              }}
              variants={formVariants}
            >
              Send A Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
