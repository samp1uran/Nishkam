import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  PiggyBank,
  FileText,
  TrendingUp,
  Users,
  Globe,
  Search,
} from "lucide-react";
import { useActive } from "../../Context/ActiveContext";

const services = [
  {
    icon: <Briefcase size={40} className="text-teal-500 mx-auto mb-4" />,
    title: "Auditing and Assurance",
    description:
      "Provides solutions to corporates by carrying out Internal Control review, Special Audits, Statutory audits in compliance with the Indian Corporate laws.",
  },
  {
    icon: <PiggyBank size={40} className="text-teal-500 mx-auto mb-4" />,
    title: "Accounting Consultancy",
    description:
      "Maintenance of Accounts/Records (SAP, ORACLE, Tally and other ERP Packages), Bank Reconciliation, Creditors...",
  },
  {
    icon: <FileText size={40} className="text-teal-500 mx-auto mb-4" />,
    title: "Direct / Indirect taxation",
    description:
      "Applying and obtaining Permanent Account Numbers (PANs) and Tax deduction Account Numbers (TANs).",
  },
  {
    icon: <TrendingUp size={40} className="text-teal-500 mx-auto mb-4" />,
    title: "Business and Finance Planning and Business Process outsourcing",
    description:
      "Prepare business plans, cash flow projections, budgets, and trading forecasts.",
  },
  {
    icon: <Users size={40} className="text-teal-500 mx-auto mb-4" />,
    title: "Company Secretarial and Corporate Laws consultancy",
    description:
      "Assistance in carrying out the company secretarial duties including dealing with Registrar of Companies/Company Law Board.",
  },
  {
    icon: <Globe size={40} className="text-teal-500 mx-auto mb-4" />,
    title: "Foreign Trade Policy and Procedure",
    description:
      "Providing clarifications and opinions on the Foreign Trade Policy & Procedures including various Export Promotion Schemes available therein.",
  },
  {
    icon: <Search size={40} className="text-teal-500 mx-auto mb-4" />,
    title: "Fraud Accounting and Detection",
    description:
      "Helping businesses and individuals identify and document financial frauds, accounting irregularities, and other legal disputes.",
  },
];

function Services({isHidden=""}) {
  const {setActive}=useActive();
  const navigate=useNavigate()
  return (
    <div className="w-full">
      {/* hero */}
      <div
        className={`${isHidden} relative h-64 md:bg-fixed bg-cover bg-center flex items-center justify-center`}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlcnZpY2V8ZW58MHx8MHx8fDA%3D')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">
          OUR SERVICES
        </h1>
        <div className="absolute bottom-18 text-white text-sm z-10">
          <span
            onClick={()=>{
              setActive("HOME")
              navigate('/')
            }}
            className="hover:text-green-500 cursor-pointer transition-normal duration-200"
          >
            Home
          </span>{" "}
          &gt;{" "}
          <span
            className="hover:text-green-500 cursor-pointer transition-normal duration-200"
          >
            Our Services
          </span>
        </div>
      </div>

      {/* content */}
      <div className="max-w-5xl my-24 mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              {service.icon}
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
