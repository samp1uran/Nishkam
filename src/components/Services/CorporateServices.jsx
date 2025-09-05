import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  "Incorporation of company",
  "Consultancy on Company Law matters.",
  "Planning for Mergers, Acquisitions, De-mergers, and Corporate re-organizations.",
  "Filing of annual returns and various forms, documents.",
  "Clause 49 review for compliance with fiscal, corporate and tax laws.",
  "Secretarial Matters including share transfers.",
  "Maintenance of Statutory records.",
  "Consultancy on Public/Rights/Bonus Issue of shares.",
  "Change of Name, Objects, Registered Office, etc.",
];

export default function CorporateServices() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          Corporate Services
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
