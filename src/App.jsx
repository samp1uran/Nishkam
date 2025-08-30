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
        <Route path="signup" element={<Signup/>}/>
      </Route>
    </Routes>
  );
}
