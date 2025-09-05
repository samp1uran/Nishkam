import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  "Preparation of Monthly Salary Sheet",
  "Deductions as per applicable laws like Income Tax, Provident Fund, Professional Tax etc.",
  "Computation and deposit of TDS, ESI, PF etc.",
  "Disbursement/ Online Payment of Salary",
  "Pay slip by password protected e-mail",
  "Reimbursement of telephone, medical bills etc.",
  "Issue of Form 16 to employees",
  "Periodic Reconciliation of payments/statutory deductions etc. with books of accounts",
  "Administration of gratuity, superannuation, pension schemes etc."
];



export default function Payroll() {
  return (
    <section className="lg:mx-50 bg-white md:py-12 px-6 md:px-16">
      <div >
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
          Payroll
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
