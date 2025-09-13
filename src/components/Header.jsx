import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const services = [
  ["Corporate Service", "services/corporate-service"],
  ["Audit", "services/audit"],
  ["Corporate Finance", "services/corporate-finance"],
  ["Services for Non-Residents", "services/services-for-non-residents"],
  ["Accounting Services", "services/accounting-services"],
  ["Payroll", "services/payroll"],
  ["Benefits of Outsourcing", "services/benefits-of-outsourcing"],
  ["Income Tax", "services/income-tax"],
  ["Corporate Governance", "services/corporate-governance"],
  ["TDS", "services/tds"],
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    ["HOME", "/"],
    ["ABOUT US", "about"],
    ["OUR SERVICES", "ourServices"],
    ["WORK WITH US", "workWithUs"],
    ["RESOURCES", "resources"],
    ["BLOG", "blog"],
    ["CONTACT US", "contact"],
    ["QUERY", "query"],
    ["CAREERS", "careers"],
    ["ADMIN", "login"],
  ];

  return (
    <nav className="shadow-md bg-white w-full flex justify-center items-center z-50 relative">
      <div className="flex flex-col w-full lg:w-fit lg:justify-between gap-8">
        {/* Top Section */}
        <div className="flex items-center justify-between py-3 lg:py-4 px-3 relative">
          {/* Mobile Menu Icon */}
          <div className="flex items-center gap-4 lg:hidden">
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>

          {/* Logo */}
          <NavLink className="flex flex-row items-center mx-auto" to="/">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-teal-500">
                Nishkam Bansal
              </h1>
              <p className="text-[10px] md:text-xs text-gray-700 tracking-wide">
                CHARTERED ACCOUNTANTS
              </p>
            </div>
          </NavLink>
          <div className="w-6 lg:hidden"></div>
        </div>

        {/* Desktop Menu */}
        <div className="relative hidden max-w-7xl lg:flex justify-center items-center pt-3 flex-wrap desktop-menu">
          {menuItems.map((item, idx) => (
            <div key={item[0]}>
              {idx === 2 ? (
                <div className="relative group">
                  <NavLink
                    to={item[1]}
                    className={({ isActive }) =>
                      `flex relative z-10 items-center gap-1 px-3 py-3 font-light text-xs transition-all cursor-pointer ${
                        isActive
                          ? "bg-teal-500 text-white active-link"
                          : "text-black hover:text-teal-500"
                      }`
                    }
                  >
                    OUR SERVICES
                    <ChevronDown size={12} />
                  </NavLink>
                  {/* Dropdown */}
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {services.map((s, i) => (
                      <NavLink
                        key={i}
                        to={s[1]}
                        className={({ isActive }) =>
                          `flex items-center gap-1 px-3 py-3 font-light text-xs transition-all ${
                            isActive
                              ? "text-teal-500 active-link"
                              : "text-black hover:text-teal-500"
                          }`
                        }
                      >
                        {s[0]}
                      </NavLink>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  to={item[1]}
                  className={({ isActive }) =>
                    `px-3 py-3 flex items-center font-light text-xs cursor-pointer relative z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-white bg-teal-500 active-link"
                        : "text-black hover:text-teal-500"
                    }`
                  }
                >
                  {item[0]}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`bg-white w-3/5 sm:w-1/2 h-full p-6 shadow-lg fixed top-0 left-0 transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between mb-2">
            <FiX className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>

          {menuItems.map((item, idx) => (
            <div key={item[0]}>
              {idx === 2 ? (
                <>
                  <button
                    onClick={() => {
                      setServicesOpen(!servicesOpen);
                      navigate("/ourServices");
                    }}
                    className="w-full flex justify-between items-center py-1 text-xs cursor-pointer"
                  >
                    {item[0]}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {servicesOpen && (
                    <ul className="border-t">
                      {services.map((s, i) => (
                        <NavLink
                          key={i}
                          to={s[1]}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            `block pl-2 py-1 text-xs transition-colors ${
                              isActive ? "text-teal-500 active-link" : "text-black hover:text-teal-500"
                            }`
                          }
                        >
                          {s[0]}
                        </NavLink>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item[1]}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-1 text-xs transition-colors ${
                      isActive ? "text-teal-500 active-link" : "text-black hover:text-teal-500"
                    }`
                  }
                >
                  {item[0]}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
