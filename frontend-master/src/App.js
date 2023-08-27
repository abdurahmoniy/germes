import "./App.css";
import { ReactDOM, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Delivery from "./pages/Delivery/Delivery";
import Projects from "./pages/Projects/Projects";
import Services from "./pages/Services/Services";
import Payment from "./pages/Payment/Payment";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CartPage from "./pages/Cart/CartPage";
import ProductDetail from "./components/ProductDetail";
import store from "./store";
import { Provider } from "react-redux";
import { Analytics } from '@vercel/analytics/react';
import Categories from "./components/Categories";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Router>
          <div className="md:px-20 lg-[px-36] xl:px-60 px-4">
            <Header />
          </div>
          <hr />
          <div className="md:px-20 lg-[px-36] xl:px-60 px-4">
            <Routes>
              <Route exact path="/germes" element={<Home />} />
              <Route path="/germes/delivery" element={<Delivery />} />
              <Route path="/germes/payment" element={<Payment />} />
              <Route path="/germes/projects" element={<Projects />} />
              <Route path="/germes/services" element={<Services />} />
              <Route path="/germes/about" element={<About />} />
              <Route path="/germes/contact" element={<Contact />} />
              <Route path="/germes/product/:slug" element={<ProductDetail />} />
              <Route path="/germes/cart" element={<CartPage />} />
              <Route path="/germes/category/:categorySlug/:subCategorySlug" element={<Categories/>} />
            </Routes>
          </div>
          <div className="md:px-20 lg-[px-36] xl:px-60 px-4 bg-[#F7F7F7] py-14">
            <Footer />
          </div>
          <Analytics />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
