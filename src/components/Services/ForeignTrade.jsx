export default function ForeignTrade() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "understanding-ftp", title: "Understanding Foreign Trade Policy (FTP)" },
    { id: "procedures", title: "Foreign Trade Procedures: Step-by-Step Guide" },
    { id: "export-schemes", title: "Export Promotion Schemes under FTP" },
    { id: "clarifications", title: "Clarifications & Opinions" },
    { id: "challenges", title: "Challenges in Implementation" },
    { id: "future", title: "Future Outlook & Recommendations" },
    { id: "conclusion", title: "Conclusion" },
    { id: "references", title: "References & Further Reading" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6 md:p-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Foreign Trade Policy and Procedure: A Comprehensive Guide
          </h1>
          <p className="mt-2 text-gray-600">
            Clarifications and Export Promotion Schemes — an approachable, structured
            reference for exporters, students and trade professionals.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar / Table of Contents */}
          <aside className="hidden md:block md:col-span-1 sticky top-6 self-start bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border">
            <h2 className="font-semibold mb-3">Contents</h2>
            <nav className="space-y-2 text-sm">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block hover:text-indigo-600 hover:underline"
                >
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="mt-4 text-xs text-gray-500">Use links above to jump to sections.</div>
          </aside>

          {/* Main Article */}
          <main className="md:col-span-3 p-4 rounded-2xl">
            <section id="intro" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Introduction</h3>
              <p className="text-gray-700 leading-relaxed">
                Foreign trade plays a pivotal role in the economic development of any
                country. It involves the exchange of goods and services across
                international borders, enabling countries to access resources,
                technology, and markets that are otherwise unavailable domestically.
                This guide dives into India’s Foreign Trade Policy (FTP), procedures
                and export promotion schemes, with clarifications and practical
                opinions.
              </p>
            </section>

            <section id="understanding-ftp" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">1. Understanding Foreign Trade Policy (FTP)</h3>

              <h4 className="mt-4 font-semibold">1.1 What is Foreign Trade Policy?</h4>
              <p className="leading-relaxed text-gray-700">
                Foreign Trade Policy is a set of guidelines and regulations formulated
                by the government to regulate and promote international trade. In
                India, the Ministry of Commerce and Industry, through DGFT, prepares
                and implements the FTP generally for a five-year period with annual
                supplements.
              </p>

              <h4 className="mt-4 font-semibold">1.2 Objectives of Foreign Trade Policy</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>Promoting exports and expanding global market share.</li>
                <li>Employment generation through export-led industries.</li>
                <li>Boosting foreign exchange earnings.</li>
                <li>Balanced regional development and value addition.</li>
                <li>Simplification of procedures to enhance ease of doing business.</li>
              </ul>

              <h4 className="mt-4 font-semibold">1.3 Duration and Coverage</h4>
              <p className="leading-relaxed text-gray-700">
                FTP typically covers export/import procedures, promotion schemes,
                licensing, customs and tariff regulations, quality control and trade
                facilitation measures. Examples include FTP 2015-2020 and FTP
                2021-2026.
              </p>
            </section>

            <section id="procedures" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">2. Foreign Trade Procedures: Step-by-Step Guide</h3>

              <h4 className="mt-4 font-semibold">2.1 Importer Exporter Code (IEC)</h4>
              <p className="leading-relaxed text-gray-700">
                IEC is the mandatory 10-digit code from DGFT required for importers
                and exporters. It is valid for lifetime and can be obtained online.
              </p>

              <h4 className="mt-4 font-semibold">2.2 Registration and Licensing</h4>
              <p className="leading-relaxed text-gray-700">
                Certain products (e.g., pharmaceuticals, agricultural products) need
                registrations with sectoral bodies (CDSCO, APEDA). Some items are
                restricted or prohibited and may need special licenses.
              </p>

              <h4 className="mt-4 font-semibold">2.3 Export Documentation</h4>
              <p className="leading-relaxed text-gray-700">Typical documents include:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>Commercial Invoice</li>
                <li>Packing List</li>
                <li>Bill of Lading / Airway Bill</li>
                <li>Shipping Bill</li>
                <li>Certificate of Origin</li>
                <li>Insurance Certificate</li>
              </ul>

              <h4 className="mt-4 font-semibold">2.4 Customs Clearance</h4>
              <p className="leading-relaxed text-gray-700">
                Involves electronic filing of the shipping bill, assessment of goods,
                payment of duties (if any) and physical inspection when required.
              </p>

              <h4 className="mt-4 font-semibold">2.5 Realization of Export Proceeds</h4>
              <p className="leading-relaxed text-gray-700">
                Exporters must realize export payments within prescribed timeframes
                (commonly 9 months) and submit proof to banks/DGFT to comply with
                FEMA regulations.
              </p>
            </section>

            <section id="export-schemes" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">3. Export Promotion Schemes under FTP</h3>

              <h4 className="mt-4 font-semibold">3.1 MEIS (Historical)</h4>
              <p className="leading-relaxed text-gray-700">
                MEIS provided duty credit scrips based on FOB value; it has since
                been replaced by RoDTEP (from Jan 1, 2021).
              </p>

              <h4 className="mt-4 font-semibold">3.2 RoDTEP</h4>
              <p className="leading-relaxed text-gray-700">
                RoDTEP refunds embedded central, state and local duties/taxes not
                otherwise refunded. Rates vary by product and destination.
              </p>

              <h4 className="mt-4 font-semibold">3.3 EPCG</h4>
              <p className="leading-relaxed text-gray-700">
                EPCG enables import of capital goods at concessional or zero duty
                subject to export obligation (commonly 6x duty saved over 6 years).
              </p>

              <h4 className="mt-4 font-semibold">3.4 Duty Drawback</h4>
              <p className="leading-relaxed text-gray-700">
                Refund of customs/excise duties on inputs for exported goods. Rates
                are product-specific and designed to reduce export costs.
              </p>

              <h4 className="mt-4 font-semibold">3.5 Advance Authorization</h4>
              <p className="leading-relaxed text-gray-700">
                Allows duty-free import of inputs for export production against an
                export obligation to be fulfilled within a timeframe.
              </p>

              <h4 className="mt-4 font-semibold">3.6 Other Schemes</h4>
              <p className="leading-relaxed text-gray-700">
                SEIS for service exporters, SEZs, EOUs and other incentives exist to
                promote exports through tax and duty benefits.
              </p>
            </section>

            <section id="clarifications" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">4. Clarifications and Opinions on FTP</h3>

              <h4 className="mt-4 font-semibold">4.1 Simplification & Digitalization</h4>
              <p className="leading-relaxed text-gray-700">
                DGFT’s digital processes (online IEC, electronic filing) have
                improved transparency and turnaround times. Continued integration
                with customs and banking will further reduce compliance costs.
              </p>

              <h4 className="mt-4 font-semibold">4.2 Export Incentives and WTO Compliance</h4>
              <p className="leading-relaxed text-gray-700">
                Reforms like RoDTEP are steps to align incentives with WTO rules by
                focusing on refunds of embedded taxes as opposed to export-contingent
                subsidies.
              </p>

              <h4 className="mt-4 font-semibold">4.3 Focus on Value Addition & Diversification</h4>
              <p className="leading-relaxed text-gray-700">
                Prioritizing high-value sectors such as electronics and
                pharmaceuticals helps India move up the global value chain.
              </p>

              <h4 className="mt-4 font-semibold">4.4 Regional & Sectoral Focus</h4>
              <p className="leading-relaxed text-gray-700">
                Special incentives for underdeveloped regions and priority sectors
                aim for balanced growth; targeted infrastructure will improve results.
              </p>

              <h4 className="mt-4 font-semibold">4.5 Export Finance & Risk Mitigation</h4>
              <p className="leading-relaxed text-gray-700">
                Strengthening export credit agencies and risk tools will help SMEs
                enter export markets safely.
              </p>
            </section>

            <section id="challenges" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">5. Challenges in FTP Implementation</h3>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>Complex documentation and compliance overheads.</li>
                <li>Delays in refunding export incentives.</li>
                <li>Infrastructure and logistics bottlenecks at ports.</li>
                <li>Currency volatility impacting realizations.</li>
                <li>Global trade uncertainties and protectionist measures abroad.</li>
              </ul>
              <p className="mt-3 leading-relaxed text-gray-700">
                Tackling these challenges requires coordination between government,
                industry and financial institutions.
              </p>
            </section>

            <section id="future" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">6. Future Outlook and Recommendations</h3>

              <h4 className="mt-4 font-semibold">6.1 Embracing Technology & Innovation</h4>
              <p className="leading-relaxed text-gray-700">
                Blockchain for documentation, AI for market intelligence and digital
                customs will modernize trade operations.
              </p>

              <h4 className="mt-4 font-semibold">6.2 Strengthening Trade Agreements</h4>
              <p className="leading-relaxed text-gray-700">
                Expanding FTAs and leveraging regional blocs will open new market
                access for exporters.
              </p>

              <h4 className="mt-4 font-semibold">6.3 Sustainable & Inclusive Trade</h4>
              <p className="leading-relaxed text-gray-700">
                Promote green exports and support women/minority entrepreneurs.
              </p>

              <h4 className="mt-4 font-semibold">6.4 Capacity Building & Skill Development</h4>
              <p className="leading-relaxed text-gray-700">
                Train exporters on compliance, quality standards and market trends.
              </p>
            </section>

            <section id="conclusion" className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Conclusion</h3>
              <p className="leading-relaxed text-gray-700">
                FTP and procedures form the backbone of international trade. With
                focused digitalization, targeted incentives, and capacity building,
                India can strengthen its role in global trade. Exporters should
                stay updated with policy changes and leverage available schemes.
              </p>
            </section>

            <section id="references" className="mb-2">
              <h3 className="text-lg font-semibold mb-2">References & Further Reading</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Directorate General of Foreign Trade (DGFT) Official Website</li>
                <li>Foreign Trade Policy 2021-2026 document</li>
                <li>Ministry of Commerce and Industry, Government of India</li>
                <li>WTO Agreement on Subsidies and Countervailing Measures</li>
              </ul>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
