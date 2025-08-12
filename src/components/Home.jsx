import React, { Suspense } from "react";
import Hero from "./Hero";
import Courses from "./Courses";
import Loading from "./Loading";
import { FaRegClipboard, FaUsers } from "react-icons/fa";
function Home() {
  return (
    <>
      <Hero />
      {/* <Suspense fallback={Loading}>
            <Courses/>
        </Suspense> */}

      {/* 1 st section */}
      <section className="flex mb-6 flex-col md:flex-row items-center justify-evenly px-3 py-12 gap-24">
        {/* Left Section */}
        <div className="relative flex justify-center items-center">
          {/* Top Icon */}
          <div className="absolute -top-12 right-0 bg-teal-500 text-white rounded-full p-8 z-20 text-3xl md:text-6xl">
            <FaRegClipboard />
          </div>

          {/* Image Circle */}
          <div className="relative w-68 h-68 md:h-96 md:w-96 rounded-full overflow-hidden border-[30px] border-teal-100">
            <img
              src="https://images.contentstack.io/v3/assets/blte891c850d5781579/bltc6849b3034b80561/664f45b30258be240e63840d/how-to-prepare-for-meeting.jpg" // Replace with your image URL
              alt="Meeting"
              className="w-full h-full object-cover"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <div className="text-teal-500 text-lg">▶</div>
              </div>
            </button>
          </div>

          {/* Bottom Icon */}
          <div className="absolute -bottom-12 left-0 bg-teal-500 text-white rounded-full p-8 z-20 text-3xl md:text-6xl">
            <FaUsers />
          </div>
        </div>

        {/* Right Section */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">
            We Help You Solve Your Financial & Tax Related Problems
          </h2>
          <p className="text-gray-600 mb-6">
            Established in the year 1991 as a partnership firm in the national
            capital of India, the organization has grown steadily in terms of
            its clientele and right from day one, rested on the strong
            foundation laid for it by the wide & varied experiences of Mr. Umesh
            Chand Goyal and Ms. Sunita Umesh, the Managing partners. The reasons
            for its success are mere determination of the entire team ably
            guided by Mr. Umesh Chand Goyal, sincerity in their work approach &
            the service quality of very high standards. Nothing short of ‘Total
            Customer Satisfaction’ makes them feel happy.
          </p>
          <button className="bg-teal-500 text-white px-6 py-2 font-medium rounded hover:bg-teal-600 transition">
            READ MORE
          </button>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="bg-[#145DA0]  min-w-full text-white">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className="flex flex-col items-center px-2 py-6 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlYhee00dLq6VTCDj3ABoLIOVYvboBnCD0g&s" // replace with vision image
              alt="Vision"
              className="w-36 h-36 object-contain mix-blend-multiply mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-sm leading-relaxed">
              To be solution for all the business issues and working in an IT
              enabled environment and attain competence of a high level for
              addressing larger & complex issues, going beyond the routine scope
              of work of an Accounting Firm leading to diversification into the
              fields of business process outsourcing, Advisory and working with
              the social sector with larger objective to service society. We aim
              to be professional, reliable and respected in the field while
              following the path of integrity and honesty.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#07539a] px-2 py-6  flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhIUq-_rO0WlNRL4ZH3hYSN8VlDTTgz6Img&s" // replace with mission image
              alt="Mission"
              className="w-36 h-36 object-contain mix-blend-multiply mb-6"
            />
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-sm leading-relaxed">
              To achieve our objective in an environment of honesty, curtsy
              towards our employees, clients and society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
