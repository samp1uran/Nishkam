import { FaArrowRight } from "react-icons/fa";

const services = [
  "Advice on all matters related to compliance of TDS/TCS provisions.",
  "Obtaining Tax Deduction Account Number (TAN).",
  "Periodic review of TDS/ Withholding Tax compliance.",
  "Computation of monthly TDS.",
  "Monthly reconciliation of TDS due and deposited.",
  "Monthly deposit of TDS electronically/manually.",
  "Issue of monthly/annual TDS certificates.",
  "Filing of quarterly E-TDS/Manual Returns.",
  "Filing of Correction Statements.",
  "TDS assessment."
];

export default function Tds() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          TDS
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
