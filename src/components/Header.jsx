import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useActive } from "../Context/ActiveContext";
const services = [
  "AUDITING & ASSURANCE SERVICE",
  "BUSINESS & FINANCE PLANNING",
  "ACCOUNTING CONSULTANCY",
  "BUSINESS PROCESS OUTSOURCING",
  "DIRECT / INDIRECT TAXATION",
  "FOREIGN TRADE POLICIES",
  "COMPANY SECRETARIAL AND CORPORATE LAWS CONSULTANT",
];
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [active, setActive] = useState("HOME");
  const {active,setActive}=useActive()
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    ["HOME", "/"],
    ["ABOUT US", "about"],
    ["OUR SERVICES", "ourServices"],
    ["OUR CLIENTELE", "ourClientele"],
    ["WORK WITH US", "workWithUs"],
    ["TEAM", "team"],
    // ["ALUMNI",
    ["RESOURCES", "resources"],
    ["BLOG", "blog"],
    // ["GALLERY",
    ["CONTACT US", "contactUs"],
  ];

  return (
    <nav className="shadow-md bg-white w-full flex justify-center items-center z-50">
      <div className="flex flex-col w-full lg:w-fit lg:justify-between gap-8">
        {/* Top Section */}
        <div className="flex justify-start lg:justify-between items-center py-3 lg:py-4">
          {/* Search & Menu (mobile) */}
          <div className="flex items-center ml-3 gap-4 lg:hidden">
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>

          {/* Logo */}
          <div className="text-center flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-teal-500">
              Nishkam Bansal
            </h1>
            <p className="text-[10px] md:text-xs text-gray-700 tracking-wide">
              CHARTERED ACCOUNTANTS
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden max-w-7xl lg:flex justify-center items-center pt-3 flex-wrap">
          {menuItems.map((item, idx) => (
            <>
              {idx === 2 && (
                <div className="relative group">
                  <Link
                    key={item[0]}
                    to={item[1]}
                    onClick={() => setActive(item[0])}
                    className={`flex items-center gap-1 px-3 py-3 font-light text-xs transition-all cursor-pointer
                      ${
                        active === item[0]
                          ? "bg-teal-500 text-white"
                          : "text-black hover:text-teal-500"
                      }
                      `}
                  >
                    OUR SERVICES
                    <ChevronDown size={12} />
                  </Link>

                  {/* Dropdown */}
                  <ul
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-64 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                 transition-all duration-300"
                  >
                    {services.map((item, i) => (
                      <li
                        key={i}
                        className="pl-4 pr-2 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {idx !== 2 && (
                <Link
                  key={item[0]}
                  to={item[1]}
                  onClick={() => setActive(item[0])}
                  className={`px-3 py-3 font-light text-xs transition-all ${
                    active === item[0]
                      ? "bg-teal-500 text-white"
                      : "text-black hover:text-teal-500"
                  }`}
                >
                  {item[0]}
                </Link>
              )}
            </>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Sidebar */}
        <div
          className={`bg-white w-3/5 sm:w-1/2 h-full p-6 shadow-lg fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex justify-between  mb-2">
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {menuItems.map((item, idx) => (
            <div key={item[0]}>
              {idx === 2 ? (
                <>
                  {/* Dropdown Toggle */}
                  <button
                    onClick={() => {
                      setServicesOpen(!servicesOpen);
                      setActive(item[0]);
                      navigate("/ourServices");
                    }}
                    className={`w-full flex justify-between items-center py-1 text-xs cursor-pointer transition-colors duration-200 ${
                      active === item[0]
                        ? "text-teal-500"
                        : "text-black hover:text-teal-500"
                    }`}
                  >
                    {item[0]}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesOpen && (
                    <ul className="border-t">
                      {services.map((service, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            setActive(item[0]);
                            setMenuOpen(false);
                          }}
                          className="pl-2 py-1 hover:bg-gray-100 cursor-pointer text-xs"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item[1]}
                  onClick={() => {
                    setActive(item[0]);
                    setMenuOpen(false);
                  }}
                  className={`block py-1 text-xs cursor-pointer transition-colors duration-200 ${
                    active === item[0]
                      ? "text-teal-500"
                      : "text-black hover:text-teal-500"
                  }`}
                >
                  {item[0]}
                </Link>
              )}
            </div>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
