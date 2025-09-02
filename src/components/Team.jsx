import { useNavigate } from "react-router-dom";
import { useActive } from "../Context/ActiveContext";

const Team = () => {
  const { setActive } = useActive();
  const navigate = useNavigate();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-no-repeat md:bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-vector/diverse-group-people-participate-teambuilding-600nw-2490105935.jpg')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">
          TEAM
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
            Team
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div className="space-y-4 text-gray-800">
          <p>
            Our firm boasts of a total strength of 13 partners and more than 125
            dedicated staff of professionals, semi-qualified, commerce graduates
            and other staff, each of whom has imbibed on the unique culture of
            UCC and adopted the Firms motto of “Best quality service provided in
            an effective and efficient manner leading to total client
            satisfaction”.
          </p>
          <p>To view the Detail of our Team Members,</p>
          <div className="flex flex-col gap-5 md:gap-10 ">
            <button class="bg-gray-800 w-fit hover:bg-gray-900 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            PARTNERS
          </button>
          <button class="bg-gray-800 w-fit hover:bg-gray-900 text-white font-semibold py-2 px-3 md:py-2 md:px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            KEY PROFESSIONALS OF UCC
          </button>
          </div>
          
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D" // Replace with actual image URL
            alt="Team"
            className="rounded-lg shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
