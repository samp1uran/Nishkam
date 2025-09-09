// import { useState } from "react";

// export default function Careers() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     gender: "",
//     position: "",
//     dob: "",
//     qualification: "",
//     portfolio: "",
//     resume: null,
//     company: "",
//     experienceYear: "",
//     experienceMonth: "",
//     comments: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl"
//       >
//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center mb-2">- Apply Here -</h2>
//         <p className="text-gray-600 text-center mb-8">
//           We nurture and cultivate a sense of pride in the work and create team
//           leaders. Apply via the form below and meet us for a face-to-face
//           interview.
//         </p>

//         {/* Two-column grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* First Name */}
//           <div>
//             <label className="block font-medium">
//               First name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block font-medium">
//               Last name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block font-medium">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Mobile */}
//           <div>
//             <label className="block font-medium">
//               Mobile No <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block font-medium">
//               Gender <span className="text-red-500">*</span>
//             </label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md p-2"
//             >
//               <option value="">Select..</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>

//           {/* Position */}
//           <div>
//             <label className="block font-medium">
//               Position you are applying for
//             </label>
//             <input
//               type="text"
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* DOB */}
//           <div>
//             <label className="block font-medium">
//               Date Of Birth (DD/MM/YYYY){" "}
//               <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Qualification */}
//           <div>
//             <label className="block font-medium">Highest Qualification</label>
//             <input
//               type="text"
//               name="qualification"
//               value={formData.qualification}
//               onChange={handleChange}
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Portfolio */}
//           <div>
//             <label className="block font-medium">Portfolio website</label>
//             <input
//               type="url"
//               name="portfolio"
//               value={formData.portfolio}
//               onChange={handleChange}
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Resume Upload */}
//           <div>
//             <label className="block font-medium">
//               Upload Resume <span className="text-red-500">*</span> (Max size 1mb)
//             </label>
//             <input
//               type="file"
//               name="resume"
//               accept=".pdf,.doc,.docx"
//               onChange={handleChange}
//               required
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Last Company */}
//           <div>
//             <label className="block font-medium">
//               Last company you worked for
//             </label>
//             <input
//               type="text"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full border rounded-md p-2"
//             />
//           </div>

//           {/* Experience */}
//           <div className="flex gap-4">
//             <div className="flex-1">
//               <label className="block font-medium">Years Of Experience</label>
//               <select
//                 name="experienceYear"
//                 value={formData.experienceYear}
//                 onChange={handleChange}
//                 className="w-full border rounded-md p-2"
//               >
//                 <option value="">Select Year</option>
//                 {[...Array(31).keys()].map((y) => (
//                   <option key={y} value={y}>
//                     {y}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="flex-1">
//               <label className="block font-medium">Month</label>
//               <select
//                 name="experienceMonth"
//                 value={formData.experienceMonth}
//                 onChange={handleChange}
//                 className="w-full border rounded-md p-2"
//               >
//                 <option value="">Select Month</option>
//                 {[
//                   "January",
//                   "February",
//                   "March",
//                   "April",
//                   "May",
//                   "June",
//                   "July",
//                   "August",
//                   "September",
//                   "October",
//                   "November",
//                   "December",
//                 ].map((m, i) => (
//                   <option key={i} value={m}>
//                     {m}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Comments */}
//         <div className="mt-6">
//           <label className="block font-medium">
//             Reference / Comments / Questions
//           </label>
//           <textarea
//             name="comments"
//             value={formData.comments}
//             onChange={handleChange}
//             rows="4"
//             className="w-full border rounded-md p-2"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700"
//           >
//             Send Application
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
// outside component
const years = Array.from({ length: 31 }, (_, i) => i);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Careers() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    position: "",
    dob: "",
    qualification: "",
    portfolio: "",
    resume: null,
    company: "",
    experienceYear: "",
    experienceMonth: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl text-sm"
      >
        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-2">
          - Apply Here -
        </h2>
        <p className="text-gray-600 text-center mb-8 text-sm">
          We nurture and cultivate a sense of pride in the work and create team
          leaders. Apply via the form below and meet us for a face-to-face
          interview.
        </p>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className="block font-medium">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-medium">
              Mobile No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 text-sm"
            >
              <option value="">Select..</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="block font-medium">
              Position you are applying for
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block font-medium">
              Date Of Birth (DD/MM/YYYY) <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block font-medium">Highest Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Portfolio */}
          <div>
            <label className="block font-medium">Portfolio website</label>
            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block font-medium">
              Upload Resume <span className="text-red-500">*</span> (Max size
              1mb)
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Last Company */}
          <div>
            <label className="block font-medium">
              Last company you worked for
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Experience */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium">Years Of Experience</label>
              <select
                name="experienceYear"
                value={formData.experienceYear}
                onChange={handleChange}
                className="w-full border rounded-md p-2 text-sm"
              >
                <option value="">Select Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-medium">Month</label>
              <select
                name="experienceMonth"
                value={formData.experienceMonth}
                onChange={handleChange}
                className="w-full border rounded-md p-2 text-sm"
              >
                <option value="">Select Month</option>
                {months.map((m, i) => (
                  <option key={i} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="mt-6">
          <label className="block font-medium">
            Reference / Comments / Questions
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-md p-2 text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white px-8 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Send Application
          </button>
        </div>
      </form>
    </div>
  );
}
