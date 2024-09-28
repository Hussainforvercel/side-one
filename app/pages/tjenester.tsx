"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaLaptopCode,
  FaTools,
  FaBullhorn,
  FaSearch,
  FaHandsHelping,
  FaPaintBrush,
} from "react-icons/fa"; // Importing icons from react-icons

const ServiceSection = () => {
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    // Randomize the direction (left or right)
    const randomDirection = Math.random() > 0.5 ? "left" : "right";
    setDirection(randomDirection);
  }, []);

  const imageVariants = {
    hidden: (direction: string) => ({
      x: direction === "left" ? "-100vw" : "100vw", // Off-screen starting point
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1.5,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 }, // Start hidden and slightly to the right
    visible: {
      opacity: 1,
      x: 0, // Move to the original position
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Cards start slightly lower
    },
    visible: {
      opacity: 1,
      y: 0, // Move to their original position
      transition: {
        duration: 0.8, // Duration for the animation
        ease: "easeInOut", // Smooth easing
      },
    },
  };
  // Define the missing textVariant
  const textVariant = {
    hidden: {
      opacity: 0,
      y: 20, // Start with a slight downward position
    },
    visible: {
      opacity: 1,
      y: 0, // Reset to its original position
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.3, // Stagger animations for children
      },
    },
  };

  const services = [
    {
      title: "Webdesign og Webutvikling",
      description: "Utvikling av brukervennlige og tilpassede nettsider.",
      linkText: "Learn More",
      icon: <FaLaptopCode />, // Icon for Web Design and Development
    },
    {
      title: "Drift og Vedlikehold av Eksisterende Nettside",
      description: "Sikrer vedlikehold og drift av din nettside.",
      linkText: "Learn More",
      icon: <FaTools />, // Icon for Maintenance and Support
    },
    {
      title: "Markedsføring",
      description: "Optimaliser din online markedsføringsstrategi.",
      linkText: "Learn More",
      icon: <FaBullhorn />, // Icon for Marketing
    },
    {
      title: "SEO og hastighet-optimalisering",
      description: "Forbedre synligheten og hastigheten til din nettside.",
      linkText: "Learn More",
      icon: <FaSearch />, // Icon for SEO
    },
    {
      title: "Hjelp og Råd med Eksisterende Nettside",
      description: "Vi gir råd og veiledning for din eksisterende nettside.",
      linkText: "Learn More",
      icon: <FaHandsHelping />, // Icon for Help and Consultation
    },
    {
      title: "Logodesign",
      description: "Design av profesjonelle logoer for din bedrift.",
      linkText: "Learn More",
      icon: <FaPaintBrush />, // Icon for Logo Design
    },
  ];

  return (
    <>
      <section
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, rgb(30, 124, 101) 0%, rgb(48, 170, 140) 61%)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/mnt/data/image.png" // Replace this with your actual image path
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-60" // To fade the background image
          />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Tjenester</h1>
          <p className="mt-4 text-lg md:text-2xl max-w-6xl mx-auto">
            Er du på jakt etter pålitelige IT-tjenester og innovative
            web-løsninger? Se ikke lenger! Vi tilbyr et bredt spekter av
            tjenester som kan tilpasses dine behov. Enten du trenger hjelp med
            utvikling av nettsteder, IT-support, eller skreddersydde
            programvareløsninger, har vi ekspertisen og erfaringen som kreves
            for å levere resultater.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Image with Text Below */}
            <motion.div
              className="relative w-full"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              custom={direction}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Image
                src="/DSC00387.png" // Replace with your actual image path
                alt="Service Image"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
              {/* Text Below the Image */}
              <div className="mt-6 text-gray-800">
                <h2 className="text-2xl font-semibold mb-2">
                  Webdesign og Webutvikling
                </h2>
                <p>
                  Hos Sidesone tilbyr vi skreddersydde løsninger for webdesign
                  og webutvikling. Vi kombinerer kreativt design med teknisk
                  ekspertise for å skape nettsider som både ser fantastiske ut
                  og fungerer sømløst. Fra brukervennlige grensesnitt til robust
                  backend-utvikling, sørger vi for at din nettside er visuelt
                  tiltalende, responsiv og effektiv. Få en nettside som skiller
                  seg ut og møter dine unike behov med vårt profesjonelle team.
                </p>
                {/* Button */}
                <button className="mt-4 px-6 py-2 bg-[#00d084] text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                  Få drømme siden din!
                </button>
              </div>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={direction}
              viewport={{ once: false, amount: 0.5 }}
            >
              {services.map((service, index) => {
                // Logic to apply background color based on the position
                const isWhiteCard = index === 0 || index === 3 || index === 4; // 1st, 4th, and 5th cards
                return (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-lg shadow-lg transition duration-300 ${
                      isWhiteCard
                        ? "bg-white text-gray-800" // White background for 1st, 4th, and 5th cards
                        : "bg-[#1e7c65] text-white" // Green background for 2nd, 3rd, and 6th cards
                    }`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={direction}
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    {/* Icon */}
                    <div className="text-4xl mb-4">{service.icon}</div>
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    {/* Description */}
                    <p
                      className={`${
                        isWhiteCard ? "text-gray-600" : "text-white"
                      }`}
                    >
                      {service.description}
                    </p>
                    {/* Link */}
                    <a
                      href="#"
                      className={`text-sm mt-4 inline-block ${
                        isWhiteCard ? "text-blue-600" : "text-white"
                      }`}
                    >
                      {/* {service.linkText} */}
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="py-16 bg-white">
        <motion.div
          className="container mx-auto px-4 md:px-10 text-center"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }} // Animation triggers once when in view
        >
          {/* Heading */}
          <motion.h2 className="text-3xl font-bold mb-8" variants={textVariant}>
            Utforsk Vår Helhetlige Web- og IT-Tjenester
          </motion.h2>

          {/* Paragraphs */}
          <motion.p
            className="text-gray-600 max-w-4xl mx-auto"
            variants={textVariant}
          >
            Vi tilbyr en omfattende portefølje av tjenester for å dekke alle
            dine web- og IT-behov. Fra å skape en imponerende nettside med vår
            ekspertise innen webdesign og webutvikling, til å sikre at din
            eksisterende nettside fungerer feilfritt med vår drift- og
            vedlikeholdstjeneste. Vi gir deg også verdifulle råd for å
            optimalisere din nettsides ytelse og funksjonalitet.
          </motion.p>

          <motion.p
            className="text-gray-600 max-w-4xl mx-auto mt-6"
            variants={textVariant}
          >
            Har du små feil som trenger umiddelbar oppmerksomhet? Vårt team er
            klar til å fikse dem raskt og effektivt. Vi tilbyr også profesjonell
            logodesign for å gi din merkevare et unikt og minneverdig preg.
            Videre hjelper vi deg med å forbedre synligheten på nettet gjennom
            vår SEO-optimalisering, som sikrer at din nettside rangerer høyere i
            søkemotorer og tiltrekker flere besøkende.
          </motion.p>

          <motion.p
            className="text-gray-600 max-w-4xl mx-auto mt-6"
            variants={textVariant}
          >
            Oppdag hvordan våre skreddersydde løsninger kan bidra til å
            realisere dine digitale mål. Ta kontakt med oss for mer informasjon
            og en gratis konsultasjon!
          </motion.p>
        </motion.div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          {/* Grid layout for service cards */}
          <div className="grid grid-cols-1 gap-8">
            {/* First Service Card with Image */}
            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }} // Trigger animation once when it appears in the viewport
            >
              <div className="md:w-1/2">
                <Image
                  src="/download-8.webp" // Replace with actual image path
                  alt="Service 1"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Drift og Vedlikehold av Eksisterende Nettside
                </h2>
                <p className="text-gray-600 mb-4">
                  Vi tilbyr omfattende drift og vedlikehold av din eksisterende
                  nettside, slik at du slipper å bekymre deg for tekniske
                  problemer. Vårt team håndterer alt fra regelmessige
                  oppdateringer og sikkerhetskontroller til
                  ytelsesoptimalisering og feilretting. Med vårt vedlikehold
                  sørger vi for at nettsiden din alltid er sikker, oppdatert og
                  fungerer feilfritt, slik at du kan fokusere på din virksomhet
                  uten avbrudd.
                </p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                  La oss ta jobben!
                </button>
              </div>
            </motion.div>

            {/* Second Service Card with Image on the Right */}
            <motion.div
              className="flex flex-col md:flex-row-reverse items-center md:items-start"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="md:w-1/2">
                <Image
                  src="/DSC00710.png" // Replace with actual image path
                  alt="Service 2"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Hjelp og Råd med Eksisterende Nettside
                </h2>
                <p className="text-gray-600 mb-4 pr-5">
                  Hjelp og råd med eksisterende nettside. Vi tilbyr
                  ekspertvurderinger for å optimalisere design, funksjonalitet
                  og brukeropplevelse på din nettside. Enten du trenger hjelp
                  med strategiske forbedringer eller tekniske løsninger, gir vi
                  deg konkrete råd for å forbedre ytelsen og maksimere din
                  digitale tilstedeværelse. Med vår veiledning kan du ta
                  informerte beslutninger som styrker nettstedets effektivitet
                  og brukervennlighet.
                </p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                  Kom i gang!
                </button>
              </div>
            </motion.div>

            {/* Third Service Card */}
            <motion.div
              className="flex flex-col md:flex-row items-center md:items-start"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <div className="md:w-1/2">
                <Image
                  src="/depositphotos_56855913-stock-illustration-space-rocket-flying-in-sky-e1723556156741.png" // Replace with actual image path
                  alt="Service 3"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Markedsføring
                </h2>
                <p className="text-gray-600 mb-4">
                  Vår markedsføringstjeneste hjelper deg med å nå nye høyder
                  gjennom strategiske kampanjer som er tilpasset din målgruppe.
                  Enten det gjelder Google Ads, sosiale medier, eller
                  innholdsmarkedsføring, sørger vi for at din merkevare får den
                  synligheten den fortjener. Vi tilbyr tre ulike pakker med
                  fleksible løsninger som passer alle bedrifter – fra
                  nyoppstartede virksomheter til etablerte aktører.
                </p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                  Start din vekst!
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          {/* SEO Optimization Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Text */}
            <motion.div
              className="md:pr-8"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                SEO Optimalisering
              </h2>
              <p className="text-gray-600 mb-6">
                Vår SEO-optimaliseringstjeneste hjelper deg med å forbedre
                nettsidens synlighet i søkemotorer. Vi arbeider med å
                optimalisere innhold, nøkkelord og tekniske aspekter av
                nettstedet ditt for å sikre bedre rangeringer og økt trafikk.
                Med vår ekspertise kan du nå flere potensielle kunder og styrke
                din digitale tilstedeværelse.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Øk synligheten din!
              </button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Image
                src="/Seo-tjeneste.png" // Replace with your actual image path
                alt="SEO Optimization Image"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </motion.div>
          </div>

          {/* Logo Design Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
            {/* Left Image */}
            <motion.div
              variants={imageVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <Image
                src="/logo-design.png" // Replace with your actual image path
                alt="Logo Design Image"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </motion.div>

            {/* Right Text */}
            <motion.div
              className="md:pl-8"
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Logo Design
              </h2>
              <p className="text-gray-600 mb-6">
                Vår logodesigntjeneste gir din merkevare en unik og minneverdig
                identitet. Vi har et erfarent mediateam som skaper moderne
                logoer som ikke bare ser bra ut, men også reflekterer essensen
                av din virksomhet. Fargevalg er avgjørende for å få logoen til å
                passe temaet og skille seg ut i mengden. Vi bruker farger
                strategisk for å sikre at logoen tiltrekker seg oppmerksomhet og
                formidler riktig budskap.
              </p>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                Skap din identitet!
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
