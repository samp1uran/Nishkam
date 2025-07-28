import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    label: "Courses",
    links: ["Design", "Development", "SEO"],
  },
  {
    label: "Resources",
    links: ["Website", "Mobile App", "SaaS"],
  },
  {
    label: "Beyond Academics",
    links: ["Team", "Mission", "Careers"],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleClick = () => {
    setMobileMenuOpen(false);
  };
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo / Name */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/">
            <span className="text-2xl  text-gray-700 font-sans hover:text-blue-400">
              NishKam
            </span>
          </Link>
        </div>

        {/* Center: Dropdowns */}
        <div className="hidden md:flex gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 font-normal hover:text-blue-400">
              Courses
              <ChevronDown size={18} />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md mt-2 min-w-[150px] transition-all duration-200 z-50">
              <ul>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="/s">CFA</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="">FRM</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="">Upskill</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 font-normal hover:text-blue-400">
              Resources
              <ChevronDown size={18} />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md mt-2 min-w-[150px] transition-all duration-200 z-50">
              <ul>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="/s">Calender</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="">FAQ</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="">Upskill</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-gray-700 font-normal hover:text-blue-400">
              Beyond Academics
              <ChevronDown size={18} />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg rounded-md mt-2 min-w-[150px] transition-all duration-200 z-50">
              <ul>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="/s">CFA</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="">RFA</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 text-sm whitespace-nowrap">
                  <Link to="">Upskill</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Login */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}

      {mobileMenuOpen && (
        <div
          className="fixed inset-0  bg-blend-overlay z-30"
          onClick={handleClick}
        ></div>
      )}

      <div
        className={`md:hidden fixed top-[60px] left-0 h-[calc(100vh-60px)]  max-w-3xl bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <div>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                Courses
                <ChevronDown
                  size={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="pl-4 mt-1 space-y-1">
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">CFA</Link>
                </li>
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">FRM</Link>
                </li>
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">Upskill</Link>
                </li>
              </ul>
            </details>
          </div>
          <div>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                Resources
                <ChevronDown
                  size={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="pl-4 mt-1 space-y-1">
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">Calender</Link>
                </li>
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">FAQ</Link>
                </li>
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">Upskill</Link>
                </li>
              </ul>
            </details>
          </div>
          <div>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer py-2 font-medium">
                Beyond Academics
                <ChevronDown
                  size={18}
                  className="transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="pl-4 mt-1 space-y-1">
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">CFA</Link>
                </li>
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">FRM</Link>
                </li>
                <li className="text-sm text-gray-700" onClick={handleClick}>
                  <Link to="/">Upskill</Link>
                </li>
              </ul>
            </details>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md w-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
