import {NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-no-repeat md:bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/04/81/72/77/360_F_481727770_1u2ylNpie8WRosMVbv1COXDnnEK6ofwh.jpg')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">
          CONTACT US
        </h1>
        <div className="absolute bottom-18 text-white text-sm z-10">
          <NavLink
            to='/'
            className="hover:text-green-500 cursor-pointer transition-normal duration-200"
          >
            Home
          </NavLink>{" "}
          &gt;{" "}
          <span
            className="hover:text-green-500 cursor-pointer transition-normal duration-200"
          >
            Contact Us
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Head Office */}
      <div className="mb-10">
        <h2 className="bg-gray-200 px-4 py-2 font-semibold text-lg">Head Office:</h2>
        <div className="mt-4 space-y-1 text-gray-800">
          <p># 1315, Ansal Tower 38, Nehru Place</p>
          <p>New Delhi : 110019 (India)</p>
          <p>Phone No. : +91-11-66624518 / 519, +91-9810044684</p>
          <p>
            Email ID :{" "}
            <a href="mailto:info@nishkam.in" className="text-blue-600 underline">
              info@nishkam.in
            </a>
            ,{" "}
            <a href="mailto:abc@nishkam.in" className="text-blue-600 underline">
              abc.goyal@nishkam.in
            </a>
          </p>
        </div>
      </div>

      {/* Branch Offices */}
      <div>
        <h2 className="bg-gray-200 px-4 py-2 font-semibold text-lg">Branch Offices:</h2>

        {/* Gurugram */}
        <div className="mt-6">
          <h3 className="text-xl font-bold italic text-teal-600">Gurugram:</h3>
          <p># B1/02, Palm Grove Villa</p>
          <p>Ardee City, Gate no.-01, Sector-52</p>
          <p>Gurgaon : 122011 (HARYANA)</p>
          <p>Phone No. : +91xxxxxxxx, +91-98xxxxxxxx</p>
        </div>

        {/* Noida */}
        <div className="mt-6">
          <h3 className="text-xl font-bold italic text-teal-600">Noida:</h3>
          <p># 1201, Ansal Corporate Park</p>
          <p>Plot No. 7-A, Sector 142 , Noida</p>
          <p>Uttar Pradesh : 201305 (India)</p>
        </div>

        {/* Jaipur */}
        <div className="mt-6">
          <h3 className="text-xl font-bold italic text-teal-600">Jaipur:</h3>
          <p>Unit No- T 304, 3rd Floor</p>
          <p>Arcade International, Madramupura</p>
          <p>Ajmer Road, Jaipur</p>
          <p>RAJASTHAN : 302006 (India)</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;