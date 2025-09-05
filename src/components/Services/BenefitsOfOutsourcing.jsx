import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services= [
  "Enables business to concentrate on core business activities",
  "Use of manpower for more important functions",
  "Investment in fixed assets reduced/minimized",
  "Substantial Savings in Cost",
  "Services of experts made available",
  "Improved Internal Controls",
  "Enhanced reporting capabilities to provide more timely and accurate financial data",
  "Off-site Backup of Data"
];



export default function BenefitsOfOutsourcing() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          Benefits Of Outsourcing
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
