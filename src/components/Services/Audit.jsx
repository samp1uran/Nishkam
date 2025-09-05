import React from "react";
import { FaArrowRight } from "react-icons/fa";

const auditInvolves = [
  "Indepth study of existing systems, procedures and controls for proper understanding. Suggestions for improvement and strengthening.",
  "Ensuring compliance with policies, procedures and statutes.",
  "Comprehensive review to ensure that the accounts are prepared in accordance with Generally Accepted Accounting Policies and applicable Accounting Standards/IFRS.",
  "Checking the genuineness of the expenses booked in accounts.",
  "Reporting inefficiencies at any operational level.",
  "Detection and prevention of leakages of income and suggesting corrective measures to prevent recurrence.",
  "Certification of the books of account being in agreement with the Balance Sheet and Profit and Loss Account.",
  "Issue of Audit Reports under various laws.",
];

const typesOfAudits = [
  "Statutory Audit of Companies",
  "Tax Audit under Section 44AB of the Income Tax Act, 1961.",
  "Audit under other sections of the Income Tax Act, 1961 such as 80HHC, 80-IA, etc.",
  "Concurrent Audits.",
  "Revenue Audit of Banks.",
  "Branch Audits of Banks.",
  "Audit of PF Trusts, Charitable Trusts, Schools, etc.",
  "Audit of Co-operative Societies.",
  "Information System Audit",
  "Internal Audits.",
  "Audits under GST Law",
];

export default function AuditServices() {
  return (
    <section className="bg-white lg:mx-50 py-6 md:py-12 px-6 md:px-16">
      <h2 className="text-2xl border-dashed border-gray-600 border-b-0 md:text-3xl font-bold text-yellow-600 mb-4 uppercase">
        Audit Services
      </h2>
      <div class="border-t-1 border-gray-400  border-dashed mt-1 mb-10"></div>

      {/* Section 1 */}
      <h2 className="text-xl md:text-2xl font-bold text-yellow-600 mb-6 uppercase">
        Broadly, Audit Involves the Following:
      </h2>
      <ul className="space-y-4 text-gray-700 mb-12">
        {auditInvolves.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div>
              <FaArrowRight className="text-blue-500 mt-1" />
            </div>
            <div>
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl md:text-2xl font-bold text-yellow-600 mb-6 uppercase">
        Types of Audits Conducted:
      </h2>
      <ul className="space-y-4 text-gray-700">
        {typesOfAudits.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div>
              <FaArrowRight className="text-blue-500 mt-1" />
            </div>
            <div>
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
