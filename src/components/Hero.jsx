import { useState } from "react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTrue, setTrue] = useState(true);
  return (
    // <section className="flex flex-col items-center justify-center px-4 mb-2">
    //   <div className="text-center">
    //     {isTrue ? 
    //       <div className="">
    //         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
    //           Courses We <span className="text-yellow-400">Offer</span>
    //         </h1>
    //         <p className="text-lg max-w-2xl text-gray-600 mb-6">
    //           Providing focused and practical programs to help you build the
    //           skills and knowledge required to excel in your career path
    //         </p>
    //       </div>
    //      : <div className="flex flex-col justify-center mx-auto h-36">
    //        <h1 className=" text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800">
    //           {text}
    //         </h1>
    //      </div>
          
    //     }
    //     </div>
    //     <div className="sm:w-xl min-w-3xs md:w-3xl max-w-2xl grid grid-cols-4 ">
    //       <button onClick={()=> setTrue(true)} className="cursor-pointer text-gray-700 text-center py-2 px-4 border-2 hover:text-gray-500 transition">
    //         All
    //       </button>
    //       <button
    //         onClick={() => {
    //           setTrue(false)
    //           setText("Chartered Financial Analyst")
    //         }}
    //         className="cursor-pointer text-center text-gray-700 py-2 px-4 border-2 border-l-0 hover:text-gray-500 transition"
    //       >
    //         CFA
    //       </button>
    //       <button
    //         onClick={() =>{
    //            setTrue(false)
    //            setText("Financial Risk Manager")
    //         }}
    //         className="cursor-pointer text-center text-gray-700 py-2 px-4 border-2 border-l-0 hover:text-gray-500  transition"
    //       >
    //         FRM
    //       </button>
    //       <button
    //         onClick={() =>{
    //            setTrue(false)
    //            setText("Upskill")
    //         }}
    //         className="cursor-pointer text-center text-gray-700 py-1 px-1 border-2 border-l-0 hover:text-gray-500 transition"
    //       >
    //         Upskill
    //       </button>
    //     </div>
    // </section>
    <section
      className="h-screen mx-2 mb-4 bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/63b042656c21e611f6f8be44/67f7ed324ebc2fa1540e4b2e_640b569fc38939793fde0420_32f473e5-be47-4da8-b11e-45431216a73a.webp')",
      }}
    >
      <div className="bg-opacity-50 p-8 rounded-md max-w-3xl text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Looking for SOX Compliance;<br />Payroll Processing;
        </h1>
        <p className="mt-4 text-base md:text-lg">
          Accounting advice in ERP implementation; Multinational Audits; Group
          Reporting; US International/Indian GAAP; Company formation and CLB
          advisory services; Central Bank (FEMA) regulatory matters; taxation
          matters; GST registration; Experts and non-resident matters; business
          consulting.
        </p>
        <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded shadow-lg">
          READ MORE
        </button>
      </div>
    </section>

  );
};

export default HeroSection;
