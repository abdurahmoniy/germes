import "./App.css";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Delivery from "./pages/Delivery/Delivery"
import Projects from "./pages/Projects/Projects"
import Services from "./pages/Services/Services"
import Payment from "./pages/Payment/Payment"
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="">
      <div className="md:px-20 lg-[px-36] xl:px-60 px-4">
        <Header />
      </div>
      <hr />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <div className="md:px-20 lg-[px-36] xl:px-60 px-4 bg-[#F7F7F7] py-14">
        <Footer />
      </div>
    </div>
  );
}

export default App;
