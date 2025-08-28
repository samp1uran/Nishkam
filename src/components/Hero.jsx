import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTrue, setTrue] = useState(true);
  return (
    <>
      <section
        className="h-screen mx-2 mb-4 md:bg-fixed bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/63b042656c21e611f6f8be44/67f7ed324ebc2fa1540e4b2e_640b569fc38939793fde0420_32f473e5-be47-4da8-b11e-45431216a73a.webp')",
        }}
      >
        <div className="bg-opacity-50 z-10 p-8 rounded-md max-w-3xl text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Looking for SOX Compliance;
            <br />
            Payroll Processing;
          </h1>
          <p className="mt-4 text-sm md:text-sm">
            Accounting advice in ERP implementation; Multinational Audits; Group
            Reporting; US International/Indian GAAP; Company formation and CLB
            advisory services; Central Bank (FEMA) regulatory matters; taxation
            matters; GST registration; Experts and non-resident matters;
            business consulting.
          </p>
          <button className="mb-8 md:mb-6  mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded shadow-lg">
            READ MORE
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;


// import { useState } from "react";
// import { Parallax } from "react-scroll-parallax";

// const HeroSection = () => {
//   const [text, setText] = useState("");
//   const [isTrue, setTrue] = useState(true);

//   return (
//     <section className="relative h-screen mx-2 mb-4 flex items-center justify-center overflow-hidden">
//       {/* ✅ Parallax Background */}
//       <Parallax speed={-110} className="md:absolute inset-0">
//         <img
//           src="https://cdn.prod.website-files.com/63b042656c21e611f6f8be44/67f7ed324ebc2fa1540e4b2e_640b569fc38939793fde0420_32f473e5-be47-4da8-b11e-45431216a73a.webp"
//           alt="Hero Background"
//           className="w-full h-full object-cover"
//         />
//       </Parallax>

//       {/* ✅ Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* ✅ Content */}
//       <div className="relative z-10 p-8 rounded-md max-w-3xl text-center text-white">
//         <h1 className="text-3xl md:text-5xl font-bold leading-snug">
//           Looking for SOX Compliance;
//           <br />
//           Payroll Processing;
//         </h1>
//         <p className="mt-4 text-sm md:text-sm">
//           Accounting advice in ERP implementation; Multinational Audits; Group
//           Reporting; US International/Indian GAAP; Company formation and CLB
//           advisory services; Central Bank (FEMA) regulatory matters; taxation
//           matters; GST registration; Experts and non-resident matters; business
//           consulting.
//         </p>
//         <button className="mb-8 md:mb-6 mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded shadow-lg">
//           READ MORE
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
