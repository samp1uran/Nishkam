import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Services from "./components/Services/Services";
import OurClientele from "./components/OurClientele";
import WorkWithUs from "./components/WorkWithUs";
import Team from "./components/Team";
import Resources from "./components/Resources";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Business from "./components/Services/Business";
import Accounting from "./components/Services/Accounting";
import Taxation from "./components/Services/Taxation";
import LawConsultant from "./components/Services/LawConsultant";
import ForeignTrade from "./components/Services/ForeignTrade";
import FraudAccounting from "./components/Services/Fraud";
import CorporateServices from "./components/Services/CorporateServices";
import AuditServices from "./components/Services/Audit";
import CorporateFinance from "./components/Services/CorporateFinance";
import ServicesForNonResidents from "./components/Services/ServicesForNonResidents";
import AccountingServices from "./components/Services/AccountingService";
import Payroll from "./components/Services/Payroll";
import BenefitsOfOutsourcing from "./components/Services/BenefitsOfOutsourcing";
import IncomeTax from "./components/Services/IncomeTax";
import CorporateGovernance from "./components/Services/CorporateGovernance";
import Tds from "./components/Services/Tds";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="ourServices" element={<Services/>} />
        <Route path="login" element={<Login/>} />
        <Route path="ourClientele" element={<OurClientele/>} />
        <Route path="workWithUs" element={<WorkWithUs/>} />
        <Route path="team" element={<Team/>} />
        <Route path="resources" element={<Resources/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="services/business" element={<Business/>} />
        <Route path="services/outsourcing" element={<Business/>} />
        <Route path="services/taxation" element={<Taxation/>} />
        <Route path="services/lawConsultant" element={<LawConsultant/>} />
        <Route path="services/auditing" element={<FraudAccounting/>} />
        <Route path="services/foreignTrade" element={<ForeignTrade/>} />
        <Route path="services/accounting" element={<Accounting/>} />
        <Route path="services/corporate-service" element={<CorporateServices/>} />
        <Route path="/services/audit" element={<AuditServices/>} />
        <Route path="/services/corporate-finance" element={<CorporateFinance/>} />
        <Route path="/services/services-for-non-residents" element={<ServicesForNonResidents/>} />
        <Route path="/services/accounting-services" element={<AccountingServices/>} />
        <Route path="/services/payroll" element={<Payroll/>} />
        <Route path="/services/benefits-of-outsourcing" element={<BenefitsOfOutsourcing/>} />
        <Route path="/services/income-tax" element={<IncomeTax/>} />
        {/*<Route path="/services/value-added-tax" element={<ValueAddedTax />} />
        <Route path="/services/service-tax" element={<ServiceTax />} />*/}
        <Route path="/services/corporate-governance" element={<CorporateGovernance/>} />
        <Route path="/services/tds" element={<Tds/>} /> 
        <Route path="signup" element={<Signup/>}/>
      </Route>
    </Routes>
  );
}
