import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useActive } from "../Context/ActiveContext";

const About = () => {
  const {setActive}=useActive()
  const navigate=useNavigate()
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-64 md:bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">
          ABOUT US
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
            About Us
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-4 text-gray-800">
          <p>
            Nishkam Bansal was established in the year 2025, our firm has a
            standing of more than 30 years in the field of Auditing, taxation,
            accounting, payroll, financing, company law, setting up of overseas
            companies in India.
          </p>
          <p>
            Nishkam Bansal has firm experience in the areas of IFRS/INDAS
            Implementation, Audits, Taxations, Appeals, Business consulting,
            Expatriate, Virtual CFO services, Payroll processing, Foreign
            Nationals, Non-Resident Indian services and back office processing.
          </p>
          <p>
            Our firm prides itself in providing professional, objective, and
            impartial advice that at all times ensures that the client’s
            interests are protected. Our Partners, Managers and staff observe
            the highest standards of ethics, they deliver uncompromising
            quality, deliver thorough results and recommend sound solutions to
            ensure better control over project operations and strengthen
            internal controls.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnN1bHRpbmd8ZW58MHx8MHx8fDA%3D" // Replace with actual image URL
            alt="Discussion"
            className="rounded-lg shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
