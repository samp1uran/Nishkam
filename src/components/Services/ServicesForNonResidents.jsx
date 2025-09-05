import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  "Allotment of Permanent Account number (PAN)",
  "Tax planning.",
  "Obtaining Advance Rulings on debatable issues.",
  "Consultancy/ advice on FEMA/RBI matters.",
  "Filing Income Tax/ Wealth Tax Returns",
  "Advice on making investments",
  "Issuing certificate for repatriation of income / assets from India.",
  "Making application to RBI for various matters including sale and purchase of residential and commercial properties."
];


export default function ServicesForNonResidents() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          Services For Non-Residents
        </h2>
        <div class="border-t-1 border-gray-400  border-dashed mt-1 mb-10"></div>
        <ul className="space-y-4 text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <div><FaArrowRight className="text-blue-500 mt-1" /></div>
              <div><span>{service}</span></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
