import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import BlogList from "./pages/BlogList";
import ScrollToTop from "./components/ScrollToTop";
import BlogDetailsPage from "./components/BlogDetailspage";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        {/* Whole homepage with all sections */}
        <Route path="/" element={<Home />} />

        {/* Direct section links */}
        <Route path="/services" element={<><Services /></>} />
        <Route path="/aboutus" element={<><AboutUs /></>} />
        <Route path="/contactus" element={<><Contact/></>}/>
        <Route path="/blogs"  element={<><BlogList/></>}/>
        <Route path="/blog/:id" element={<BlogDetailsPage />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
