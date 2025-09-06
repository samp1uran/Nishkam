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