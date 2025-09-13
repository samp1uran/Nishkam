import { NavLink } from "react-router-dom";
import {
  Building2,
  FileCheck,
  DollarSign,
  Globe2,
  BookOpen,
  Users as UsersLucideIcon,
  Briefcase,
  Receipt,
  Percent,
  ClipboardList,
  Landmark,
  Scissors,
} from "lucide-react";

const services = [
  {
    title: "Corporate Services",
    description:
      "Comprehensive support for company formation, compliance, and business structuring.",
    icon: <Building2 className="w-8 h-8 text-primary" />,
    link: "/services/corporate-service",
  },
  {
    title: "Audit",
    description:
      "Independent examination of financial statements to ensure accuracy and compliance.",
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    link: "/services/audit",
  },
  {
    title: "Corporate Finance",
    description:
      "Advisory on mergers, acquisitions, valuations, and financial restructuring.",
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    link: "/services/corporate-finance",
  },
  {
    title: "Services for Non-Residents",
    description:
      "Specialized tax, compliance, and investment solutions for NRIs and foreign entities.",
    icon: <Globe2 className="w-8 h-8 text-primary" />,
    link: "/services/services-for-non-residents",
  },
  {
    title: "Accounting Services",
    description:
      "Accurate bookkeeping, financial reporting, and account management for businesses.",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    link: "/services/accounting-services",
  },
  {
    title: "Payroll",
    description:
      "End-to-end payroll processing with tax deductions, compliance, and employee support.",
    icon: <UsersLucideIcon className="w-8 h-8 text-primary" />,
    link: "/services/payroll",
  },
  {
    title: "Benefits of Outsourcing",
    description:
      "Streamline operations and reduce costs with our reliable outsourcing solutions.",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    link: "/services/benefits-of-outsourcing",
  },
  {
    title: "Income Tax",
    description:
      "Expert tax planning, filing, and advisory for individuals and businesses.",
    icon: <Receipt className="w-8 h-8 text-primary" />,
    link: "/services/income-tax",
  },
  // {
  //   title: "Value Added Tax (VAT)",
  //   description: "Compliance and advisory services for VAT registration, filing, and audits.",
  //   icon: <Percent className="w-8 h-8 text-primary" />,
  //   link: "/services/vat",
  // },
  // {
  //   title: "Service Tax",
  //   description: "Advisory and compliance support for businesses under service tax regulations.",
  //   icon: <ClipboardList className="w-8 h-8 text-primary" />,
  //   link: "/services/service-tax",
  // },
  {
    title: "Corporate Governance",
    description:
      "Guidance on policies, structures, and compliance for effective governance.",
    icon: <Landmark className="w-8 h-8 text-primary" />,
    link: "/services/corporate-governance",
  },
  {
    title: "TDS",
    description:
      "Tax Deducted at Source compliance, return filing, and advisory services.",
    icon: <Scissors className="w-8 h-8 text-primary" />,
    link: "/services/tds",
  },
];
function Services({ isHidden = "" }) {

  return (
    <div className="w-full">
      {/* hero */}
      <div
        className={`${isHidden} relative h-64 bg-no-repeat md:bg-fixed bg-cover bg-center flex items-center justify-center`}
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
          <NavLink
            to='/'
            className="hover:text-green-500 cursor-pointer transition-normal duration-200"
          >
            Home
          </NavLink>{" "}
          &gt;{" "}
          <span className="hover:text-green-500 cursor-pointer transition-normal duration-200">
            Our Services
          </span>
        </div>
      </div>

      {/* content */}
      <div className="max-w-5xl my-24 mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <NavLink
              key={index}
              to={service.link}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="text-primary text-teal-500 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
