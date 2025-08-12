import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  const menuItems = [
    "HOME",
    "ABOUT US",
    "OUR SERVICES",
    "OUR CLIENTELE",
    "WORK WITH US",
    "TEAM",
    "ALUMNI",
    "RESOURCES",
    "BLOG",
    "GALLERY",
    "CONTACT US",
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
          {menuItems.map((item) => (
            <Link
              key={item}
              onClick={() => setActive(item)}
              className={`px-3 py-3 font-light text-xs transition-all ${
                active === item
                  ? "bg-teal-500 text-white"
                  : "text-black hover:text-teal-500"
              }`}
            >
              {item}
            </Link>
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
          className={`bg-white w-4/5 sm:w-1/2 h-full p-6 shadow-lg fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Menu Header */}
          <div className="flex justify-between items-center mb-6">
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Menu Items */}
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`block py-2 text-sm cursor-pointer transition-colors duration-200 ${
                active === item
                  ? "text-teal-500"
                  : "text-black hover:text-teal-500"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
