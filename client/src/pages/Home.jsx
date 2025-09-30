import React, { Suspense, lazy } from "react";
import ScrollToTop from "../components/ScrollToTop";

// Lazy-load heavy page sections
const Hero = lazy(() => import("../components/Hero"));
const Services = lazy(() => import("../components/Services"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Contact = lazy(() => import("../components/Contact"));

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Hero />
        <Services />
        <AboutUs />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
