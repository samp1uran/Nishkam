import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="ourServices" element={<Services/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>}/>
      </Route>
    </Routes>
  );
}
