import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  "Preparations of Project Reports",
  "Preparation of CMA data for bank loans",
  "Private placement of shares, Inter-Corporate Deposit, Terms loans, working capital limits, etc.",
  "External Credit Borrowings (ECBs)",
];


export default function CorporateFinance() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          Corporate Finance
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
