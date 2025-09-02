export default function LawConsultant() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Company Secretarial and Corporate Laws Consultancy: A Comprehensive Guide
      </h1>
      <p className="mb-6">
        In today&apos;s dynamic business environment, compliance with corporate laws and regulations is 
        not just a legal necessity but a strategic imperative. Companies must navigate a complex 
        web of statutory requirements to ensure smooth operations and avoid penalties. This is 
        where <strong>Company Secretarial and Corporate Laws Consultancy</strong> plays a pivotal role.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul className="list-disc list-inside space-y-1 mb-8">
        {[
          "Introduction to Company Secretarial and Corporate Laws Consultancy",
          "Understanding Company Secretarial Duties",
          "The Role of Corporate Laws in Business",
          "Key Regulatory Bodies: Registrar of Companies and Company Law Board",
          "How Consultancy Services Assist in Company Secretarial Functions",
          "Compliance Management and Statutory Filings",
          "Handling ROC Filings and Procedures",
          "Navigating the Company Law Board Processes",
          "Importance of Corporate Governance and Secretarial Audits",
          "Challenges in Company Secretarial Compliance",
          "Benefits of Outsourcing Company Secretarial Services",
          "Case Studies: Successful Consultancy Interventions",
          "Future Trends in Company Secretarial and Corporate Laws Consultancy",
          "Conclusion"
        ].map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mb-4">
        1. Introduction to Company Secretarial and Corporate Laws Consultancy
      </h2>
      <p className="mb-6">
        Company secretarial and corporate laws consultancy refers to professional services that 
        help companies comply with statutory requirements under various corporate laws. These 
        services ensure that companies adhere to legal frameworks, maintain proper records, and 
        fulfill obligations towards regulatory authorities.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Advising on corporate governance best practices</li>
        <li>Managing statutory compliance and filings</li>
        <li>Liaising with regulatory bodies such as ROC and CLB</li>
        <li>Assisting in board and shareholder meetings</li>
        <li>Drafting and maintaining corporate documents</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mb-4">
        2. Understanding Company Secretarial Duties
      </h2>
      <p className="mb-6">
        The company secretary (CS) is a key managerial personnel responsible for ensuring legal 
        compliance. Duties include:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Statutory Compliance:</strong> Filing annual returns, financial statements, etc.</li>
        <li><strong>Board Meetings:</strong> Organizing meetings, preparing agendas, maintaining minutes.</li>
        <li><strong>Shareholder Communication:</strong> Managing records and dividend payments.</li>
        <li><strong>Corporate Governance:</strong> Advising on governance practices.</li>
        <li><strong>Legal Documentation:</strong> Drafting resolutions and maintaining statutory registers.</li>
        <li><strong>Liaison with Authorities:</strong> Acting as a bridge with ROC and CLB.</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mb-4">
        3. The Role of Corporate Laws in Business
      </h2>
      <p className="mb-6">
        Corporate laws provide the legal framework regulating company formation, management, and 
        dissolution. Key laws include:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Companies Act</li>
        <li>Securities Laws</li>
        <li>Competition Law</li>
        <li>Insolvency and Bankruptcy Code</li>
        <li>Foreign Exchange Management Act (FEMA)</li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mb-4">
        4. Key Regulatory Bodies: Registrar of Companies and Company Law Board
      </h2>
      <h3 className="text-xl font-semibold mb-2">Registrar of Companies (ROC)</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Company incorporation and registration</li>
        <li>Maintaining records and statutory filings</li>
        <li>Enforcing compliance under the Companies Act</li>
      </ul>
      <h3 className="text-xl font-semibold mb-2">Company Law Board (CLB) / NCLT</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Company disputes and restructuring</li>
        <li>Insolvency and shareholder grievances</li>
        <li>Corporate governance adjudication</li>
      </ul>

      {/* Additional sections */}
      <h2 className="text-2xl font-semibold mb-4">
        5. How Consultancy Services Assist in Company Secretarial Functions
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>Incorporation and licensing</li>
        <li>Compliance calendar creation</li>
        <li>Preparation and filing of ROC forms</li>
        <li>Corporate governance advisory</li>
        <li>Representation before ROC and NCLT</li>
      </ul>

      {/* (Continue with sections 6-14 in the same structured way as above...) */}

      <h2 className="text-2xl font-semibold mt-10 mb-4">14. Conclusion</h2>
      <p className="mb-6">
        Company secretarial and corporate laws consultancy is indispensable for modern businesses. 
        It ensures statutory compliance, strengthens governance, and mitigates risks, allowing 
        companies to focus on growth while maintaining legal credibility.
      </p>
    </div>
  );
}
