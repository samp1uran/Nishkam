import React from "react";

export default function Taxation() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-900 leading-relaxed">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Understanding Direct and Indirect Taxation: A Comprehensive Guide
      </h1>
      <p className="mb-6">
        Taxation is the backbone of any government’s revenue system. It funds public 
        services, infrastructure, defense, and welfare schemes. Taxes are broadly classified 
        into two categories: Direct Taxes and Indirect Taxes. Understanding these two types 
        of taxes is crucial for individuals, businesses, and policymakers alike.
      </p>
      <p className="mb-6">
        In this blog post, we will explore:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>What are Direct and Indirect Taxes?</li>
        <li>Key differences between Direct and Indirect Taxes</li>
        <li>Examples and implications of each type</li>
        <li>The role of Permanent Account Number (PAN) and Tax Deduction Account Number (TAN)</li>
        <li>Step-by-step guide to applying for PAN and TAN</li>
        <li>Importance of PAN and TAN in tax compliance</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">1. What is Taxation?</h2>
      <p className="mb-6">
        Taxation is the process by which a government collects money from individuals and 
        businesses to fund public expenditures. Taxes are mandatory contributions imposed 
        by the government and are not voluntary payments.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Direct Taxation</h2>
      <h3 className="text-xl font-semibold mb-1">Definition</h3>
      <p className="mb-4">
        Direct taxes are those taxes that are directly paid to the government by the 
        individual or organization on whom it is imposed. The burden of the tax cannot 
        be shifted to someone else.
      </p>

      <h3 className="text-xl font-semibold mb-1">Characteristics of Direct Taxes</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Direct payment to the government</li>
        <li>Non-transferable burden</li>
        <li>Progressive in nature (higher income → higher rate)</li>
        <li>Levied on income, profits, or wealth</li>
      </ul>

      <h3 className="text-xl font-semibold mb-1">Examples</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Income Tax</li>
        <li>Corporate Tax</li>
        <li>Wealth Tax</li>
        <li>Capital Gains Tax</li>
        <li>Property Tax</li>
      </ul>

      <h3 className="text-xl font-semibold mb-1">Advantages</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Equity and fairness</li>
        <li>Certainty of amount</li>
        <li>Convenient payment schedule</li>
        <li>Revenue grows with the economy</li>
      </ul>

      <h3 className="text-xl font-semibold mb-1">Disadvantages</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Encourages tax evasion if rates are high</li>
        <li>Calculation can be complex</li>
        <li>May discourage earning or investment</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Indirect Taxation</h2>
      <h3 className="text-xl font-semibold mb-1">Definition</h3>
      <p className="mb-4">
        Indirect taxes are levied on goods and services rather than on income or profits. 
        The tax is collected by an intermediary (e.g., retailer) from the end consumer who 
        bears the cost.
      </p>

      <h3 className="text-xl font-semibold mb-1">Characteristics of Indirect Taxes</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Paid indirectly through intermediaries</li>
        <li>Transferable burden</li>
        <li>Regressive in nature (affects lower-income groups more)</li>
        <li>Based on consumption rather than income</li>
      </ul>

      <h3 className="text-xl font-semibold mb-1">Examples</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Goods and Services Tax (GST)</li>
        <li>Excise Duty</li>
        <li>Customs Duty</li>
        <li>Value Added Tax (VAT)</li>
        <li>Sales Tax</li>
      </ul>

      <h3 className="text-xl font-semibold mb-1">Advantages</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Convenient collection at point of sale</li>
        <li>Wide coverage of taxpayers</li>
        <li>Harder to evade than direct tax</li>
        <li>Encourages savings by taxing consumption</li>
      </ul>

      <h3 className="text-xl font-semibold mb-1">Disadvantages</h3>
      <ul className="list-disc list-inside mb-6">
        <li>Regressive impact on poor consumers</li>
        <li>Inflationary effect on prices</li>
        <li>Less equitable as it ignores ability to pay</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Key Differences Between Direct and Indirect Taxes</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border border-gray-400 text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Feature</th>
              <th className="p-2 border">Direct Tax</th>
              <th className="p-2 border">Indirect Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Definition</td>
              <td className="p-2 border">Paid directly to the government</td>
              <td className="p-2 border">Collected by intermediaries from consumers</td>
            </tr>
            <tr>
              <td className="p-2 border">Burden</td>
              <td className="p-2 border">Cannot be shifted</td>
              <td className="p-2 border">Can be shifted</td>
            </tr>
            <tr>
              <td className="p-2 border">Basis</td>
              <td className="p-2 border">Income, wealth, profits</td>
              <td className="p-2 border">Consumption of goods and services</td>
            </tr>
            <tr>
              <td className="p-2 border">Equity</td>
              <td className="p-2 border">Progressive and equitable</td>
              <td className="p-2 border">Regressive and less equitable</td>
            </tr>
            <tr>
              <td className="p-2 border">Examples</td>
              <td className="p-2 border">Income tax, corporate tax</td>
              <td className="p-2 border">GST, excise duty</td>
            </tr>
            <tr>
              <td className="p-2 border">Impact on Prices</td>
              <td className="p-2 border">No impact on prices</td>
              <td className="p-2 border">Increases prices</td>
            </tr>
            <tr>
              <td className="p-2 border">Evasion</td>
              <td className="p-2 border">More prone to evasion</td>
              <td className="p-2 border">Less prone to evasion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-2">5. Importance of PAN and TAN in Taxation</h2>
      <p className="mb-4">
        In India (and similarly in many countries), PAN and TAN are crucial for tax 
        administration and compliance.
      </p>
      <h3 className="text-xl font-semibold mb-1">What is PAN?</h3>
      <p className="mb-4">
        PAN is a unique 10-character alphanumeric identifier issued by the Income Tax 
        Department to individuals and entities. It is mandatory for financial 
        transactions and tax filing.
      </p>
      <h3 className="text-xl font-semibold mb-1">What is TAN?</h3>
      <p className="mb-6">
        TAN is a 10-digit alphanumeric number issued to entities responsible for deducting 
        or collecting tax at source (TDS/TCS). It is mandatory for entities that deduct tax.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. How to Apply for PAN</h2>
      <ol className="list-decimal list-inside mb-6">
        <li>Choose online (NSDL/UTIITSL) or offline mode</li>
        <li>Fill Form 49A with personal or entity details</li>
        <li>Submit required documents (POI, POA, DOB)</li>
        <li>Pay application fee (varies by address)</li>
        <li>Track status using acknowledgment number</li>
        <li>Receive physical or digital PAN card</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-2">7. How to Apply for TAN</h2>
      <p className="mb-6">
        Entities responsible for TDS/TCS must submit proof of identity, proof of address, 
        and an authorization letter if represented by someone else.
      </p>

      <h2 className="text-2xl font-semibold mb-2">8. Importance of PAN and TAN in Tax Compliance</h2>
      <ul className="list-disc list-inside mb-6">
        <li>PAN mandatory for ITR filing, banking, investments, and property deals</li>
        <li>TAN mandatory for deductors to file TDS returns</li>
        <li>Ensures proper credit of taxes and prevents evasion</li>
        <li>Non-compliance attracts penalties</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">9. Common FAQs</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Q: Can one apply for PAN and TAN simultaneously? <br />A: No, both require separate applications.</li>
        <li>Q: Is PAN mandatory for minors? <br />A: Yes, if the minor has taxable income or financial transactions requiring PAN.</li>
        <li>Q: What happens if TAN is not obtained? <br />A: Deductor faces penalties and cannot file TDS returns.</li>
        <li>Q: Can PAN details be corrected? <br />A: Yes, via a correction form.</li>
      </ul>
    </div>
  );
}