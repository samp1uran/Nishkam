import React, { useState, useRef, useEffect } from "react";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [open]);

  return (
    <div className="mb-6 border rounded-2xl shadow bg-white">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-700"
      >
        {title}
        <span className="text-2xl">{open ? "−" : "+"}</span>
      </button>

      {/* Smooth Content */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="p-4 text-gray-700">{children}</div>
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          RESOURCES
        </h1>

        {/* Income Tax Section */}
        <Section title="Income Tax Amendments (Notification No. 35/2020, dated 24.06.2020)">
          <ul className="list-disc ml-6 space-y-2">
            <li>Due dates of ITRs and Tax Audit Reports for AY 2020-21 extended.</li>
            <li>Belated/Revised return for AY 2019-20 extended to 31st July 2020.</li>
            <li>Deadline for Chapter VI-A investments (80C, 80D, etc.) extended to 31st July 2020.</li>
            <li>Capital gains exemption under Sections 54–54G extended to 30th September 2020.</li>
            <li>TDS return Q4 FY 2019-20 extended to 31st July 2020; Form 16/16A to 15th August 2020.</li>
            <li>No interest/penalty under Vivad Se Vishwas if payment before 31st December 2020.</li>
            <li>Other compliances extended up to 31st March 2021.</li>
          </ul>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">S. No.</th>
                  <th className="border px-3 py-2">Compliance</th>
                  <th className="border px-3 py-2">Revised Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">1</td>
                  <td className="border px-3 py-2">ITR AY 2019-20 (Belated/Revised)</td>
                  <td className="border px-3 py-2">31 July 2020</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">ITR AY 2020-21</td>
                  <td className="border px-3 py-2">30 Nov 2020</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">Tax Audit AY 2020-21</td>
                  <td className="border px-3 py-2">31 Oct 2020</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">4</td>
                  <td className="border px-3 py-2">TDS/TCS returns Q4 FY 2019-20</td>
                  <td className="border px-3 py-2">31 July 2020</td>
                </tr>
                <tr>
                  <td className="border px-3 py-2">5</td>
                  <td className="border px-3 py-2">Form 16/16A</td>
                  <td className="border px-3 py-2">15 Aug 2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* GST Section */}
        <Section title="GST Amendments (Notifications dated 24.06.2020)">
          <h4 className="font-semibold">Key Notifications:</h4>
          <ul className="list-disc ml-6 space-y-2">
            <li>Waiver of late fee for GSTR-1 (Notification No. 53/2020).</li>
            <li>Prescribed due dates for GSTR-3B for August 2020 (Notification No. 54/2020).</li>
            <li>Reduced interest for delayed GSTR-3B (Notification No. 51/2020).</li>
            <li>Composition Scheme rate amendments (Notification No. 50/2020).</li>
            <li>One-time amnesty for pending GSTR-3B (Notification No. 52/2020).</li>
            <li>Finance Act 2020 GST amendments notified (Notification No. 49/2020).</li>
          </ul>
        </Section>

        {/* May 2020 GST Notifications */}
        <Section title="GST Amendments (05-05-2020)">
          <ul className="list-disc ml-6 space-y-2">
            <li>GSTR-9 & 9C for FY 2018-19 extended to 30 Sept 2020.</li>
            <li>Validity of E-Way Bills extended to 31 May 2020.</li>
            <li>Revised GSTR-3B due dates for J&K & Ladakh.</li>
            <li>GSTR-3B filing via EVC allowed for companies.</li>
            <li>NIL GSTR-3B allowed via SMS facility.</li>
            <li>Corporate debtors given special registration reliefs.</li>
          </ul>
        </Section>

        {/* FM Announcement */}
        <Section title="Finance Minister Announcement (13-05-2020)">
          <p className="mb-2">
            Hon’ble FM Nirmala Sitharaman announced major COVID relief measures:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>ITR due dates extended to Nov 30, 2020 (non-audit & audit cases).</li>
            <li>Tax Audit Report extended to Oct 31, 2020.</li>
            <li>TDS/TCS rates reduced by 25% from 14 May 2020 to 31 Mar 2021.</li>
            <li>Vivad se Vishwas scheme extended to 31 Dec 2020.</li>
            <li>Pending refunds to be issued immediately.</li>
          </ul>
        </Section>

        {/* Contact */}
        <Section title="Contact Information">
          <p>
            <strong>Office:</strong> 13XX, Ansal Tower, 38 Nehru Place, New
            Delhi-110019
          </p>
          <p>
            <strong>Phone:</strong> 98xxxxxxxxx, 98xxxxxxxxx
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@nishkam.in" className="text-blue-600 underline">
              info@nishkam.in
            </a>
            ,{" "}
            <a href="mailto:gst@nishkam.in" className="text-blue-600 underline">
              gst@nishkam.in
            </a>
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://nishkam.vercel.app"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              nishkam.co.in
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
};

export default Resources;
