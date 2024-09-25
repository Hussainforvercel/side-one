import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigationLinks = ["Hjem", "Tjenester", "Om oss", "Kontakt oss"];
  const services = [
    "Webdesign og Webutvikling",
    "Vedlikehold av Eksisterende Nettside",
    "Hjelp og Råd",
    "Logodesign",
  ];
  const otherPages = ["Ofte stilte spørsmål", "Dokumenter"];
  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, link: "https://facebook.com" },
    { name: "Instagram", icon: FaInstagram, link: "https://instagram.com" },
    { name: "YouTube", icon: FaYoutube, link: "https://youtube.com" },
  ];

  return (
    <footer className="bg-[#1e7c65] text-white py-12">
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SIDEZONE</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📧</span>
              <a href="mailto:kontakt@sidesone.no">kontakt@sidesone.no</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span>
              <a href="tel:+47136507">+47 13 65 07</a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📍</span>
              <p>Sinsenveien 63</p>
            </li>
            <li>Sidesone, org.nr. 932 244 721</li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigasjonsmenyen</h3>
          <ul className="space-y-2">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tjenester</h3>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Andre sider</h3>
          <ul className="space-y-2">
            {otherPages.map((page, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-green-600 pt-6 flex justify-between items-center container mx-auto px-4 md:px-10">
        <p>Copyright © 2024 | Drevet av Sidesone</p>
        <div className="flex space-x-4">
          {socialLinks.map(({ name, icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
