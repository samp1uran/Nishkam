import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  "Consultancy on various intricate matters pertaining to Income tax",
  "Effective tax management, tax structuring and advisory services",
  "Tax Planning for Corporates and others",
  "Designing / restructuring salary structure to minimise tax burden",
  "Obtaining Advance tax Rulings",
  "Obtaining No Objection Certificates from Income tax department",
  "Obtaining PAN for assessees, employees etc",
  "Advance tax estimation and deposit",
  "Assessing the liability towards deferred taxes",
  "Providing regular updates on amendments, circulars, notifications & judgments",
  "Filing Income Tax and Wealth Tax returns for all kinds of assessees",
  "Filing Income tax returns for employees of corporate clients",
  "Liaison with Income tax department for rectification, assessment, obtaining refunds etc",
  "Expertise in complicated direct tax assessments",
  "Filing and pleading appeals under various provisions of IT Act",
  "Special expertise in search, seizure and prosecution litigation",
  "Advice on future tax implications in respect of the potential acquisition",
  "Opinions on the various Double Tax Avoidance Agreement related issues",
  "Settlement of various issues raised under FEMA"
];




export default function IncomeTax() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          Income Tax
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
