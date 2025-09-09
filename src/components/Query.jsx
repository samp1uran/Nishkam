import { useState } from "react";

export default function Query() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    organization: "",
    officeAddress: "",
    city: "",
    email: "",
    telephone: "",
    mobile: "",
    updates: "Yes",
    subject: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        <h2 className="text-xl font-bold text-center mb-6">
          :: Query Sheet ::
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block font-medium">Designation</label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block font-medium">Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Office Address */}
          <div>
            <label className="block font-medium">Office Address</label>
            <input
              type="text"
              name="officeAddress"
              value={formData.officeAddress}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-medium">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">
              E-mail address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            />
          </div>

          {/* Telephone */}
          <div>
            <label className="block font-medium">Telephone No.</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block font-medium">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            />
          </div>

          {/* Updates */}
          <div>
            <label className="block font-medium">
              Other professional updates <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4 mt-2 text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="updates"
                  value="Yes"
                  checked={formData.updates === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="updates"
                  value="No"
                  checked={formData.updates === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block font-medium">
              Subject of Query <span className="text-red-500">*</span>
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-md p-2 text-sm"
              required
            >
              <option value="">----- Please Select -----</option>
              <option value="General">General</option>
              <option value="Technical">Technical</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Query */}
        <div className="mt-6">
          <label className="block font-medium">
            Query <span className="text-red-500">*</span>
          </label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            className="w-full border rounded-md p-2 text-sm"
            rows="4"
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() =>
              setFormData({
                name: "",
                designation: "",
                organization: "",
                officeAddress: "",
                city: "",
                email: "",
                telephone: "",
                mobile: "",
                updates: "Yes",
                subject: "",
                query: "",
              })
            }
            className="bg-gray-200 cursor-pointer px-6 py-2 rounded-md hover:bg-gray-300 text-sm"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
