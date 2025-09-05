import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  "Periodic monitoring through internal audit",
  "Independent audit",
  "Independent verification",
  "Effective Supervision",
  "Accountability",
  "Sufficient number of Independent directors on the Board.",
  "Formation of an independent audit committee for the board",
  "Adequate disclosure and transparency in reports",
  "Participation in board meetings.",
];

export default function CorporateGovernance() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          Corporate Governance
        </h2>
        <div class="border-t-1 border-gray-400  border-dashed mt-1 mb-10"></div>

        <p className="font-sm tracking-widest text-[15px] text-gray-800  mb-3 ">
          Corporate Governance refers to a combination of laws, regulations,
          procedures, implicit rules and voluntary practices which help
          companies to perform efficiently and maximize long term value for
          shareholders and at the same time looking after the interests of other
          stakeholders like buyers, government, society at large etc. Lenders
          whether national or international, also look for them for taking
          exposure in any corporate. It is a function of transparency and
          fairness in operations and making proper disclosures.
        </p>
        <p className="font-sm text-[15px] tracking-widest text-gray-800 mb-9">
          Company as a business organization has become popular over the years.
          With the growth in size of these corporates, governance has become all
          the more important. SEBI and listing agreements of various stock
          exchanges require that the requirements of corporate governance are
          duly complied with.
        </p>
        <ul className="space-y-4 text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3">
              <div>
                <FaArrowRight className="text-blue-500 mt-1" />
              </div>
              <div>
                <span>{service}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
