import { useNavigate } from "react-router-dom";
import { useActive } from "../Context/ActiveContext";
const industries = [
  "Private Public Partnership projects in Railways, Airports and Shipping Ports",
  "Infrastructure Industry",
  "Manufacturers of Engineering Products",
  "Telecom & Networking Products & Services",
  "Information Technology Enable services , BPO.",
  "Food processing industry",
  "Agro Processing industry",
  "Educational Institute",
  "Printing and paper industry",
  "Import and exports",
  "Handicrafts",
  "Health Care Products & Services",
  "Banking & related Services",
  "Trading Organizations",
  "Service Industry",
  "Various Non-Governmental Organizations (N.G.O.’s are generally funded by various institutions from within and out of India)",
  "Societies & organizations involved in:",
  "Cultural and Religious activities",
  "Housing Projects",
  "Engineers",
  "Lawyers & Many more."
];
const OurClientele = () => {
  const { setActive } = useActive();
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-fixed bg-cover lg:bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/04/69/65/74/360_F_469657442_Mw9u0448ruHskkyrAPgkbVVy1i8mQITt.jpg')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">
          Our Clientele
        </h1>
        <div className="absolute bottom-18 text-white text-sm z-10">
          <span
            onClick={() => {
              setActive("HOME");
              navigate("/");
            }}
            className="hover:text-green-500 cursor-pointer transition-normal duration-200"
          >
            Home
          </span>{" "}
          &gt;{" "}
          <span className="hover:text-green-500 cursor-pointer transition-normal duration-200">
            Our Clientele
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-md font-semibold mb-6 leading-relaxed text-gray-800">
            We are proud to be associated with a clientele that represents
            almost the entire business arena. Our clients represent the
            following industries:
          </h2>
          <ul className="list-disc pl-8 space-y-3">
            {industries.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 text-base leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-start">
          <img
            src="https://media.istockphoto.com/id/1319763433/photo/multiethnic-couple-handshake-with-consultant-at-home.jpg?s=612x612&w=0&k=20&c=uW5-DzuIB5mrQNxN_j_fd6QjVAmtdbeTZf7geXPlRsA=" // Replace with actual image URL
            alt="Discussion"
            className="rounded-lg shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurClientele;
