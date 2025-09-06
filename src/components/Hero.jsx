import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTrue, setTrue] = useState(true);
  const [lineClamp,setLineClamp]=useState("line-clamp-3");
  return (
    <>
      <section
        className="h-screen mx-2 mb-4 bg-no-repeat md:bg-fixed bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/007/389/677/non_2x/close-up-hand-of-businessman-or-accountant-hand-holding-pen-working-on-calculator-to-calculate-business-data-accountancy-document-and-laptop-computer-at-office-business-concept-free-photo.jpg')",
        }}
      >
        <div className="bg-opacity-50 z-10 p-8 rounded-md max-w-3xl text-center text-gray-900">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Looking for SOX Compliance;
            <br />
            Payroll Processing;
          </h1>
          <p className={`mt-4 text-sm md:text-sm ${lineClamp}`}>
            Accounting advice in ERP implementation; Multinational Audits; Group
            Reporting; US International/Indian GAAP; Company formation and CLB
            advisory services; Central Bank (FEMA) regulatory matters; taxation
            matters; GST registration; Experts and non-resident matters;
            business consulting.We are well-versed in US GAAP, International
            Standards, and Indian GAAP, enabling businesses to maintain accurate
            reporting while meeting global requirements. In addition, we assist
            with company formation, restructuring, and CLB advisory services,
            guiding organizations through corporate legal frameworks.
          </p>
          <button onClick={()=>{
            if(lineClamp==="line-clamp-3")setLineClamp("");
            else setLineClamp("line-clamp-3")
          }} className="mb-8 md:mb-6  mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded shadow-lg">
            READ {lineClamp==="line-clamp-3"?"MORE":"LESS"}
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
