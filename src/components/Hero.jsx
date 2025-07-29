import { useState } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTrue, setTrue] = useState(true);
  return (
    <section className="flex flex-col items-center justify-center px-4 mb-2">
      <div className="text-center">
        {isTrue ? 
          <div className="">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Courses We <span className="text-yellow-400">Offer</span>
            </h1>
            <p className="text-lg max-w-2xl text-gray-600 mb-6">
              Providing focused and practical programs to help you build the
              skills and knowledge required to excel in your career path
            </p>
          </div>
         : <div className="flex flex-col justify-center mx-auto h-36">
           <h1 className=" text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              {text}
            </h1>
         </div>
          
        }
        </div>
        <div className="sm:w-xl min-w-3xs md:w-3xl max-w-2xl grid grid-cols-4 ">
          <button onClick={()=> setTrue(true)} className="cursor-pointer text-gray-700 text-center py-2 px-4 border-2 hover:text-gray-500 transition">
            All
          </button>
          <button
            onClick={() => {
              setTrue(false)
              setText("Chartered Financial Analyst")
            }}
            className="cursor-pointer text-center text-gray-700 py-2 px-4 border-2 border-l-0 hover:text-gray-500 transition"
          >
            CFA
          </button>
          <button
            onClick={() =>{
               setTrue(false)
               setText("Financial Risk Manager")
            }}
            className="cursor-pointer text-center text-gray-700 py-2 px-4 border-2 border-l-0 hover:text-gray-500  transition"
          >
            FRM
          </button>
          <button
            onClick={() =>{
               setTrue(false)
               setText("Upskill")
            }}
            className="cursor-pointer text-center text-gray-700 py-1 px-1 border-2 border-l-0 hover:text-gray-500 transition"
          >
            Upskill
          </button>
        </div>
    </section>
  );
};

export default HeroSection;
